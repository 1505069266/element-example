<template>
  <div>
      <div>
              机构人员表
          </div>
      <div class="content" ref="content">
          
        <div ref="tabs" class="tabs-cont">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick" >
            <el-tab-pane label="供应商机构" name="first">
                <div class="el-tabs__content">
                <p>供应商机构</p>
                <p>供应商机构</p>
                <p>供应商机构</p>
                <p>供应商机构</p>
                <p>供应商机构</p>
                <p>供应商机构</p>
                <p>供应商机构</p>
                <p>供应商机构</p>
                <p>供应商机构</p>
                <p>供应商机构</p>
                <p>供应商机构</p>
                </div>
            </el-tab-pane>
            <el-tab-pane label="九阳" name="second">
                <div class="el-tabs__content">
                <p>九阳</p>
                <p>九阳</p>
                <p>九阳</p>
                <p>九阳</p>
                </div>
            </el-tab-pane>
            <el-tab-pane label="群组列表" name="third">
                <div class="el-tabs__content">
                <p>群组列表</p>
                </div>
            </el-tab-pane>
            </el-tabs>
        </div>
        <div  ref="transfer" class="transfer-cont">
            <el-transfer
            style="text-align: left; display: inline-block"
            v-model="value"
            filterable
            class="el-transfer"
            :left-default-checked="[2, 3]"
            :right-default-checked="[1]"
            :render-content="renderFunc"
            :titles="['可选', '已添加']"
            :button-texts="['移除', '添加']"
            :format="{
                noChecked: '${total}',
                hasChecked: '${checked}/${total}'
            }"
            @change="handleChange"
            :data="data">
            <!-- <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
            <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button> -->
            </el-transfer>
          </div>    
          <div class="bottom">
              <div>
                  <button>确定</button>
                  <button>取消</button>
              </div>
          </div> 
      </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name:"",
  components: {},
  props: {},
  data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            // disabled: i % 4 === 0
          });
        }
        return data;
      };
    return {
        data: generateData(),
        value: [1],
        value4: [1],
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        },
        activeName: 'first'
    };
  },
  created() {
    
  },
  mounted() {
        this.widthfunction()
  },
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      widthfunction(){
          setTimeout(()=>{
            let a = this.$refs.tabs.clientWidth
            let b = this.$refs.transfer.clientWidth
            this.$refs.content.style.width = a + b + 10 + "px"
          },0)
         
      }
  },
  filter: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>
.content{
    margin:100px auto;
    display: flex;
    justify-content: space-between;
    width: 900px;
    border:1px solid #E4E7ED;
    border-radius:5px;
    position: relative;
    padding-bottom:50px;
}
.tabs-cont{
    border-right:1px solid #E4E7ED;
    border-radius: 4px 4px 0 0;
}
.el-tabs__content{
    height: 250px;
    overflow: auto;
}
.bottom{
    position: absolute;
    bottom:0px;
    width: 100%;
    height: 50px;
}
.bottom>div>button{
    width: 60px;
    height: 30px;
    border:1px solid #E4E7ED;
    border-radius: 2px;
    background: white
}
.bottom>div{
    width: 130px;
    display: flex;
    justify-content: space-around;
    float: right;
    margin-top:10px;
}
</style>
