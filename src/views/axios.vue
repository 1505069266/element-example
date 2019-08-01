<template>
  <div>
      <h1>axios的讲解</h1>
      <ul>
          <li>1.支持Promise API</li>
          <li>2.拦截请求和响应</li>
          <li>3.转换请求数据和响应数据</li>
          <li>4.取消请求</li>
          <li>5.自动转换JSON数据</li>
          <li>6.客户端支持防御XSRF</li>
      </ul>
  </div>
</template>

<script>
/*
 axios请求方法: get ,post ,put ,patch,
 delete
 get: 获取数据
 post: 提交数据(表单提交+文件上传)
 put: 更新数据(所有数据推送到后端)
 patch: 更新数据(只将修改的数据推送到后端)
 delete: 删除数据

 //并发请求: 同时进行多个请求,并统一处理返回值
*/
import axios from 'axios'
export default {
  name:"axios",
  components: {},
  data() {
    return {

    };
  },
  created() {

    //   //get 
    //   this.$axios.get('/src/mock.json',{
    //       params:{
    //           id: 12
    //       }
    //   }).then(res=>{
    //       console.log(res);
    //   })
    // this.$axios({
    //     method: 'get',
    //     url: '/mock.json'
    // }).then(res=>{
    //     console.log(res);
    // })

    // //post
    // //form-data 表单提交(图片上传,文件上传)
    // //application/json
    // let data = {}
    // this.$axios.post('/post',data).then()
    // this.$axios.post({
    //     method: 'post',
    //     url: '/post',
    //     data: data
    // }).then()

    // //form-data请求
    // let formData = new FormData()
    // for(let key in data){
    //     formData.append(key,data[key])
    // }
    // this.$axios.post('/post',formData).then(
    //     res=>{
    //         console.log(res);
    //     }
    // )

    // //put请求
    // this.$axios.put('/put',data).then(res=>{

    // })
    // //patch请求
    // this.$axios.patch('/patch',data).then(res=>{
    //     data:{
    //         id: 'delete'
    //     }
    // }).then(res=>{
    //     console.log(res);
    // })

    // //delete
    // this.$axios.delete('/delete',{

    // })

    //并发请求
    //axios.all()  axios.spread()
    // this.$axios.all(
    //     [   
    //         this.$axios.get('/mock.json'),
    //         this.$axios.get('/city.json'),
    //     ]
    // ).then(
    //     this.$axios.spread((dataRes,cityRes)=>{
    //         console.log(dataRes,cityRes);
    //     })
    // )

    //axios实例
    //后端接口地址有多个,并且超时时长不一样
    // let instance = this.$axios.create({
    //     baseURL: 'http://localhost:8080',//请求的域名,基本地址
    //     timeout: 1000, //请求超时时长(ms)
    //     url: '/mock.json', //请求路径
    //     method: 'get , post ,put ,patch,delete', //请求方法
    //     headers:{
    //         token: ''
    //     }, //请求头
    //     params: {

    //     }, //请求参数拼接在url
    //     data:{

    //     } //请求参数放在请求体中
    // })
    // let axios2 = this.$axios.create({
    //     baseURL: 'http://localhost:9090',
    //     timeout: 5000
    // })
    // instance.get('/mock.json').then(res=>{
    //     console.log(res);
    // })

    // //1.axios全局配置
    // this.$axios.defaults.timeout = 1000
    // this.$axios.defaults.baseURL = 'http://localhost:8080'
    // //2.axios实例配置 
    // let instance = axios.create()  //不配置默认使用全局配置
    // instance.defaults.timeout = 3000  //修改实例的配置参数
    // //3.axios请求配置
    // instance.get('/mock.json',{
    //     timeout: 5000  //配置优先级  这里最高
    // })

    //实际开发
    //有两种请求接口:
    //http://localhost:9090
    //http://localhost:9091
    let instance = axios.create({
        baseURL: 'http://localhost:9090',
        timeout: 2000
    })
    let instance1 = axios.create({
        baseURL: 'http://localhost:9091',
        timeout: 6000
    })

    //拦截器: 在请求或响应呗处理钱拦截他们
    //请求拦截器,响应拦截器
    axios.interceptors.request.use(config=>{
        //在发送请求前做些什么
        return config
    },err=>{
        //在请求错误的时候做些什么
        return Promise.reject(err)
    })

    axios.interceptors.response.use(res=>{
        //请求成功对响应数据做处理
        return res
    },err=>{
        //响应错误做些什么
        return Promise.reject(err)
    })

    //取消拦截器
    let interceptors = axios.interceptors.request.use(config=>{
        config.headers={
            auth:true
        }
        return config
    })
    axios.interceptors.request.eject(interceptors)

    //例子 登录状态(token:'')  需要登录的接口
    let instance3 = axios.create({})
    instance3.interceptors.request.use(config=>{
        config.headers.token = ''
        // config.headers={
        //     //不能写这种方法
        // }
        return config
    })
    //不需要登录的接口
    let newInstance = axios.create({})


    // 移动端开发
    let instance_phone = axios.create({})
    instance_phone.interceptors.request.use(config=>{
        $('#model').show()
        return config
    })
    instance_phone.interceptors.response.use(res=>{
        $('#model').hide()
        return res
    })
  },
  computed: {},
  methods: {

  },
};
</script>

<style lang="sass" scoped>

</style>
