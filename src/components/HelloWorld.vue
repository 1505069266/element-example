<template>
  <div class="hello">
   <van-button plain type="default">默认按钮</van-button>
   <van-button plain hairline type="primary">主要按钮</van-button>
    <van-button square type="info">信息按钮</van-button>
    <van-button icon="star-o" round type="warning">警告按钮</van-button>
    <van-button :loading="load" type="danger" loading-text="加载中..."  loading-type="spinner">危险按钮</van-button>


  <van-contact-list
    :list="list"
    @add="onAdd"
    @edit="onEdit"
  />
<!-- 联系人编辑 -->
<van-popup v-model="showEdit" position="bottom">
  <van-contact-edit
    :contact-info="editingContact"
    :is-edit="isEdit"
    @save="onSave"
    @delete="onDelete"
  />
</van-popup>
  </div>
</template>

<script>
import {Button} from 'vant'
import axios from 'axios'
import { ContactCard, ContactList, ContactEdit , Toast,Popup} from 'vant';
export default {
  components: {
    [Button.name]: Button,
    [ContactList.name]: ContactList,
    [ContactCard.name]:ContactCard,
    [ContactEdit.name]:ContactEdit,
    [Popup.name]: Popup
  },
  data(){
    return{
      list:[
        {
          id:1,
          name: 'zhuxiaole',
          tel: '17855868561'
        }
      ],
      instance: null,//axios实例
      showEdit: false,//弹出层显示隐藏
      editingContact: {},//正在编辑的联系人
      isEdit: false,//
      load: true
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created(){
    this.instance = axios.create({
      baseURL: 'http://localhost:9000/api',
      timeout: 1000,

    })
    this.getlist()
  },
  methods:{
    // 获取联系人列表
    getlist(){
this.instance.get('/contactlist').then(res=>{
      this.list = res.data.data
    }).catch(err=>{
      Toast('请求失败,稍后重试')
    })
    },
    onAdd(){ //添加联系人
      this.showEdit = true
      this.isEdit = false
    },
    onEdit(info){ //编辑联系人
      this.showEdit = true
      this.isEdit = true
      this.editingContact = info
    },
    onSave(info){//保存联系人
      if(this.isEdit){
        //编辑保存
        this.instance.put('/contact/edit',info).then(res=>{
          console.log(res);
          if(res.data.code === 200){
            Toast('编辑成功')
            this.showEdit = false
            this.getlist()
          }
        }).catch(()=>{
          Toast('请求失败,稍后重试')
        })
      }else{
        //新建保存
        this.instance.post('/contact/new/json',info).then(res=>{
          if(res.data.code === 200){
            Toast('新建成功')
          this.showEdit = false
          this.getlist()
          }
          
        }).catch(()=>{
                Toast('请求失败,稍后重试')
        })
      }
    },
    onDelete(info){//删除联系人
      this.instance.delete('/contact',{
        params:{
        id: info.id
      }}).then(res=>{
        if(res.data.code === 200){
          Toast('删除成功')
          this.showEdit = false
          this.getlist()
        }
      }).catch(()=>{
        Toast('请求失败,请稍后重试')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
