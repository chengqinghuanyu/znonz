<template>
  <div id="app">  
    <!-- <p>国际化：{{$t('language.music')}}-{{$t('language.china')}}</p>
    <button @click="seti18n">设置i18n</button> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    
  </div>
</template>

<script>
var count = 10;
export default {
  // computed:{
  //   music:function(){
  //     return this.$t('language.music');
  //   },
  //   china:function(){
  //     return this.$t('language.china')
  //   }
  // },
  name: 'App',
  data(){
    // console.log(this.$i18n[this.$i18n.locale].language);
    return {
        // local:'music'
        data:[],
        busy:false,
    }
  },
  created(){
    //console.log(this.$i18n.locale);
    console.log(this)
  },
  mounted(){

    this.getConfigJson();
    //之后...用在需要用到的地方 因为ApiUrl已经是全局了 可以直接用this.ApiUrl
    var url=this.ApiUrl+'/api/'
  },
  methods:{
    seti18n(){
      if(this.$i18n.locale){
          if(this.$i18n.locale==="EN"){
             localStorage.setItem("language","CN");
          } else{
            localStorage.setItem("language","EN");
          }
      }else{
         localStorage.setItem("language","CN");
      }
      window.location.reload();
    },
    loadMore(){
      this.busy = true;
      setTimeout(()=>{
        for(var i=0;i<100;i++){
            this.data.push({
              name:count++
            })
        }
        this.busy = false;
      },1000)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
