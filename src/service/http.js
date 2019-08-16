import axios from 'axios'
import service from './contactApi'

//service 循环遍历输出不同的请求方法
let instance = axios.create({
    baseURL: 'http://localhost:9000/api',
    timeout: 1000
})

const Http = {}; //包裹请求方法的容器

for(let key in service){
    let api = service[key];//url     method
    //async 作用: 避免回调地狱
    Http[key] = async function(){
        let res = null
        try{
            res = await axios.get('url')
        }catch(err){
            res = err
        }
    }

}