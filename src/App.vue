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
      a:'',
      isRouterActive:true
    }
  },
  provide(){
    return{
      reload:this.reload,
      replace:this.replace
    }
  },
  mounted() {
    document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  });
  document.addEventListener('dblclick', function (e) {
    e.preventDefault();
  });
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  var lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
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
.footerBtn{
  width: 100%;
  background-image: linear-gradient(to right,#5296f2, #4fcbec);
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1.52rem;
  border-radius:0px 0px 20px 20px;
  font-size: 0.6rem;
  padding: 0px;
  border: 0px none;
}
.el-form label,.el-form input{
/* font-size:0.36rem !important; */
}
.el-dialog{
  border-radius:20px
}
.el-dialog__header{
  text-align: center;
  padding: 5px 20px 10px;
  border-bottom: 1px solid #7f92b4;
}
.dialogBg .el-dialog__header{
   border-bottom: 0px none;
}
.noHeader .el-dialog__header{
   border-bottom: 0px none;
}
.el-dialog__title {
  color: #516fa1;
  font-size: 0.48rem;
  font-weight: 600;
}
.el-form-item__label{
 color: #495a89;
}
.el-input__inner{
  color: #070f26;
}
.el-form-item{
  margin-bottom: 0.3rem;
}
.el-form-item__error{
  font-size: 0.18rem;
}
.el-dialog__body{
  padding: 0.3rem 0.2rem
}
.dialogBg .el-dialog{
  border-radius:0px;
  background: url('./assets/dialogBg1.png') no-repeat center top;
  background-size:auto  90%;
  height:19rem ;
}
.dialogBg3 .el-dialog{
  border-radius:0px;
  background: url('./assets/dialogBg3.png') no-repeat center top;
  background-size:auto  100%;
  height:7.18rem ;
}
.dialogBg2 .el-dialog{
  border-radius:0px;
  background: url('./assets/dialogBg2.png') no-repeat center top;
  background-size:auto  90%;
  height:19rem ;
}
.el-button{
  
}
.el-button--primary{
 
}
.newBtn{
border-radius: 0.2rem;
width:4.1rem ;
height: 0.92rem;
padding: 0;
background: #86aae6;
border-color: #86aae6;
}

/*  */
.container{
  background: url('./assets/bg.jpg') no-repeat center top;
  /* height: 100%; */
  background-size: 100% auto;
  font-weight: 400;
  color: #1766b0;
}
.layout{
  padding:1.20rem 0.2rem 0px;
}
.div-msg1{
  margin-top: 1rem;
  text-align: center;
  font-size: 0.38rem;
  color:#02539f
}
.div-msg1 p{
  line-height: 0.5rem;
  padding: 0px ;
}
.myOrder{
display:block;
background: url('./assets/Btn_myreservation.png') no-repeat;
background-size:100% auto ;
width:7.53rem;
height: 2.25rem;
border: 0px none;
overflow: hidden;
cursor: pointer;
margin: 0px auto;
}
.ar{
display:block;

background: url('./assets/Btn_ARglasses.png') no-repeat;
background-size:100% auto ;
width:7.53rem;
height: 2.25rem;
overflow: hidden;
border: 0px none;
cursor: pointer;
margin: 0px auto;
}
.phone{
display: inline-block;
background: url('./assets/Btn_phone.png') no-repeat;
width:7.42rem;
height: 2.25rem;
background-size:100% auto ;
border: 0px none;
cursor: pointer;
}
.arTy{
  height:3.3rem ;
  text-align: center;
  margin-top: 0.7rem;
}
.i{
 width: 0.17rem;
 height: 0.31rem;
 display: inline-block;
;
}
.Atlas_location{
  background: url('./assets/Atlas_location.png') no-repeat center center;
  background-size:100% 100% 
}
.Atlas_time{
  background: url('./assets/Atlas_time.png') no-repeat center center;
  background-size:100% 100% 
}
.activity{
color: #1766b0;
font-size: 0.38rem;
height:8.56rem ;
margin-top: 0.75rem;
}
.activity p{
line-height: 0.2rem !important;
}
.left{
  float: left;
}
.right{
  float: right;
}
.activityLeft{
padding-left:0.5rem ;
width: 2.0rem;
line-height: 1.2rem;
}
.activityRight{
  float: left;
  margin-top: 0.1rem;
}

.arPart{
  clear: both;
  margin-top:7.5rem ;
  height:12rem ;
  padding: 0px 0.5rem;
}
.mainFloor{
  height: 104rem;
  margin-top:2.25rem;
   padding: 0px 0.5rem;
}
.descTitle{
  line-height: 0.24rem;
  font-size: 0.34rem;
  text-align: center;

}
.descTitle span{
  font-weight: bold;
  padding: 0px 0.2rem;
}

.mainMsg{
  text-align: center;
  font-size:0.34rem ;
  color: #0c2367;
}

.mainMsg p{
  line-height: 0.5rem;
}
.el-scrollbar .el-scrollbar__bar {
  opacity: 1 !important;
}

.orderDiv{
  margin-top: 8.8rem;
  height: 10rem;
  /* text-align: center; */
}

.downLoad{
    display: inline-block;
    background: #86aae6;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #86aae6;
    color: #fff;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 0.2rem;
    text-decoration: none;
}
 .el-select--medium{
      vertical-align: bottom !important;
    }
</style>