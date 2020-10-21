const app = Vue.createApp({
    data(){
       return{
        counter:0,
       };
    },
    methods:{
       addNum(num){
           if (this.counter < 37){
               console.log("Not there yet"); 
           }else{
               console.log("Too much!"); 
           }
           this.counter = this.counter + num;
       },
    }
});
app.mount('#assignment');