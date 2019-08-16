<template>
  <div>
      <!-- <van-cell-group> -->
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
      <!-- </van-cell-group> -->
      <van-icon name="close"></van-icon>
      <van-row>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
  <van-col span="8">span: 8</van-col>
</van-row>
<van-button @click="showPopup">显示弹出层</van-button>
<van-popup v-model="showP">我是弹出层内容</van-popup>
  </div>
</template>

<script>
import { Button } from 'vant'
import { Popup } from 'vant'
import { Icon } from 'vant'
import { Cell, CellGroup } from 'vant';
import { Row, Col } from 'vant';
export default {
  name:"",
  components: {
      [Button.name]:Button,
      [Cell.name]:Cell,
      [Icon.name]:Icon,
      [CellGroup.name]: CellGroup,
      [Row.name]:Row,
      [Col.name]:Col,
      [Popup.name]:Popup
  },
  props: {},
  data() {
    return {
        showP:false
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
      showPopup(){
          this.showP = true
      }
  },
  filter: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>

</style>
