<template>
  <div class="h-div">
    <div class="h-login">
      <div class="h-head">vr直播</div>
      <div>
        <el-input  placeholder="请输入用户名" class="h-input" v-model="loginName" style="display: none"></el-input>
        <i class="h-user"></i>
        <input type="text" placeholder="请输入用户名" v-model="loginName" >
      </div>
      <div>
        <!--            <el-input type="password"  :placeholder="msg.passInput" class="h-input" v-model="inputC.password"></el-input>-->
        <i class="h-pass"></i>
        <input type="password" placeholder="请输入密码" v-model="password" >
      </div>
      <div>
        <span style="padding-right: 20px;"></span>
        <span>
           <input type="input" placeholder="请输入验证码" v-model="code" style="width: 100px" @keyup.enter='login()'>
           <img :src="`data:image/png;base64,${img}`" alt="" width="100px" height="30px" @click="getCode()">
        </span>
      </div>
      <div style="display: flex;justify-content: space-between;padding-left: 40px;padding-right: 40px;">
        <div class="h-size">
          <el-checkbox v-model="checked"></el-checkbox>
          记住密码
        </div>
        <div @click="$router.push({path:'/forgot'})" class="cur" style="font-size: 13px;display: none" > 忘记密码</div>
      </div>
      <div class="btnDiv" >
        <input  type="button"  @click="login()"  class="h-l" value="登录" />
      </div>
    </div>
  </div>
</template>

<script>
  import {selfCode,selfCookie} from "../../self";
  import {login,getCode} from "../../http/request";
  import CryptoJS from 'crypto-js'
  import { Base64 } from 'js-base64';
  export default {
    name: "login",
    data(){
      return{
        loginName:'',
        password:'',
        checked:false,
        img:'',
        code:'',
        Icode:''
      }
    },
    methods:{
      login(){
        let apple={
          loginName:this.loginName,
          password:this.password,
          subjectCode :selfCode
        }

        this.checked?(()=>{
          this.$cookies.set('loginName',this.loginName);
          this.$cookies.set('password',Base64.encode(this.password));
          this.$cookies.set('checked',this.checked);
        })():(()=>{
          this.$cookies.remove('loginName');
          this.$cookies.remove('password');
          this.$cookies.remove('checked');
        })();
        this.Icode.toUpperCase()==this.code.toUpperCase()?(()=>{
          let keyStr='DF1052378682867B34A81D9E59F484C4';
          var key=CryptoJS.enc.Utf8.parse(keyStr);
          var srcs=CryptoJS.enc.Utf8.parse(this.password);
          var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
          console.log(encrypted.toString())
          apple.password=encrypted.toString();
          login(apple).then(res=>{
            res.code?this.$message.error(res.msg):(()=>{
              this.$cookies.set(selfCookie,res.data.token);
              //res.data.isFirstLogin==1?this.$router.push('/revisePasswordHu')&& this.$cookies.set('oldPass',this.password):this.$router.push('/firstPage');
              this.$router.push('/firstPage')
            })();
          })
        })():this.$message.error('验证码不正确，请重新输入')&&this.getCode();
      },
      getCode(){
        getCode().then(v=>{
          this.img=v.data.image;
          this.Icode=v.data.code;
          console.log(v)
        })
      }
    },
    created() {
      //检查登录
      let token=this.$cookies.get(selfCookie);
      token?this.$router.push('/firstPage'):(()=>{
        this.loginName=this.$cookies.get('loginName');
        this.$cookies.get('password')&&(()=>{
          this.password=Base64.decode(this.$cookies.get('password'))
        })();
        this.checked=Boolean(this.$cookies.get('checked'));
      })();
      this.getCode();
    }
  }
</script>

<style scoped>
  .h-div{
    background: url("../../assets/bg.png") no-repeat center  center;
    background-size:100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .h-login{
    position: relative;
    width: 360px;
    padding-bottom: 20px;
    background: rgb(250,250,250);
    left: 50%;
    margin-left:340px;
    top: 20%;
    box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius:10px;
  }
  .h-login>div{
    height: 60px;
    line-height: 60px;
  }
  .h-login div.h-head{
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    height:90px;
    line-height: 90px;
    font-size:24px;
    color:#0074E4
  }
  .h-input{
    width:280px;
  }
  .cur{
    cursor: pointer;
    color: #0074E4;
  }
  .h-size{
    color: #9F9795;
    font-size: 13px;
  }
  input[type="button"]{
    width: 300px;
    height:50px;
    line-height: 50px;
    background: #0074E4;
    color: white;
    border-radius:10px;
    font-size: 18px;
    border:0px none;
    cursor: pointer;
  }

  input[type="text"]{
    width:250px;
    border: 0;
    outline: none;
    border-bottom: 1px solid #e5e5e5;
    line-height: 24px;
    font-size: 14px;
    padding-left: 40px;
    margin-left: 15px
  }
  input[type="password"]{
    width:250px;
    border: 0;
    outline: none;
    border-bottom: 1px solid #e5e5e5;
    line-height: 24px;
    font-size: 14px;
    padding-left: 40px;
    margin-left: 15px
  }
   input[type="input"]{
    width:250px;
    border: 0;
    outline: none;
    border-bottom: 1px solid #e5e5e5;
    line-height: 24px;
    font-size: 14px;
    padding-left: 40px;
    margin-left: 15px
  }
  ::-webkit-input-placeholder{
      color: #DFDCDC
  } /* 使用webkit内核的浏览器 */
  :-moz-placeholder{  color: #DFDCDC} /* Firefox版本4-18 */
  ::-moz-placeholder{ color: #DFDCDC} /* Firefox版本19+ */
  :-ms-input-placeholder{ color: #DFDCDC}
  .h-user{
    background: url("../../assets/login_icon_user.png") no-repeat center;
    background-size: 80%;
    display: inline-block;
    width: 17px;
    height: 20px;
    position:relative;
    top: 6px;
    left: 40px;

  }
  .h-pass{
    background: url("../../assets/login_icon_pw.png") no-repeat center;
    background-size: 80%;
    display: inline-block;
    width: 17px;
    height: 20px;
    position:relative;
    top: 6px;
    left: 40px;
  }
  .btnDiv{
    clear: both;
    text-align: center;
  }
</style>
