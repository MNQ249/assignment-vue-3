const app = Vue.createApp({
    data(){
       return{
        counter:0,
       };
    },
    methods:{
       addNum(num){
           this.counter = this.counter + num;
       },
    }
});
app.mount('#assignment');