<template>
  <div class="about">
    <h1>这是slot的部分</h1>
    <p>插槽的作用,插槽是vue出的一个由父组件直接在引用的子组件中写入内容的写法</p>
    <p>一般我们都是用props加绑定内容向子组件传值来实现的效果,可以使用slot写法</p>
    <p>混入的内容就是相当于在页面内写入混入的内容,所有说如果混入的内容和本身内容重复,会冲突,混入优先于本身内容,重复情况下,执行本身的内容,data或者方法</p>
    <slots :content="dd">
      <p>我是一般slot的内容</p>
    </slots> 
    <slots-chacao>
      <div slot="one">我是第一个具名插槽</div>
      <div slot="two">我是第二个具名插槽</div>
    </slots-chacao>
    <!-- 淡入 -->
      <transition name="van-fade">
        <div v-show="visible">Fade</div>
      </transition>

      <!-- 上滑进入 -->
      <transition name="van-slide-up">
        <div v-show="visible">Slide Up</div>
      </transition>

      <!-- 下滑进入 -->
      <transition name="van-slide-down">
        <div v-show="visible">Slide Down</div>
      </transition>

      <!-- 左滑进入 -->
      <transition name="van-slide-left">
        <div v-show="visible">Slide Left</div>
      </transition>

      <!-- 右滑进入 -->
      <transition name="van-slide-right">
        <div v-show="visible">Slide Right</div>
      </transition>
  </div>
</template>
<script>
import { Button } from 'vant';
import init from '@/minix/initData'
import slots from './slot'
import slotsChacao from './slotschacao'
export default {
  components:{slots,slotsChacao},
  mixins: [init],
  data(){
    return {
      dd: '我是props父传子的内容'
    }
  }
}
</script>
