<template>
  <div>
      {{content}}
      <slot>如果父组件没有传值,这是slot默认显示的内容</slot>
  </div>
</template>

<script>
export default {
  name:"",
  components: {},
  props: [
      'content'
  ],
  data() {
    return {

    };
  },
  created() {},
  computed: {},
  methods: {

  },
};
</script>

<style lang="sass" scoped>

</style>
