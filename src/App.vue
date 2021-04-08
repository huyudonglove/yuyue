<template>
  <div id="app">
    <router-view v-if="isRouterActive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      isRouterActive:true
    }
  },
  provide(){
    return{
      reload:this.reload,
      replace:this.replace
    }
  },
  methods:{
    reload(){
      //刷新页面
      this.isRouterActive=false;
      this.$nextTick(function () {
        this.isRouterActive=true;
      })
    },
    replace(key,val){
      //修改路由参数
      let apple=JSON.stringify(this.$route.query);
      //console.log(apple,'apple')
      let banner=JSON.parse(apple);
      if(key=='moduleTreeSelect'){
        banner[key]=JSON.stringify(val)
      }
      else if(key!='reset'){
        banner[key]=val;
      }else if (key=='reset'){
        for(let i in banner){
          banner[i]=''
        }
        this.setClickPage(1);
        this.setLimitPage(20);
      }
      // console.log(banner)
      this.$router.push(
        {
          path:this.$route.path,
          query:banner
        }
      )
    }

  }
}
</script>

<style>

</style>
