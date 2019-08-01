export default{
    data(){
        return {
            content: '我是被混入的内容'
        }
    },
    created: function(){
        this.hello()
    },
    methods: {
        hello(){
            console.log(this.content);
        }
    }
}
