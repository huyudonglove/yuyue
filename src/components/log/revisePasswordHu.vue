<template>
    <div style="text-align: center" class="h-div">
      <div style="width: 500px;height: 300px;display: inline-block;margin-top: 50px;" class="h-login">
        <div class="h-head">修改密码</div>
        <div class="h-pass"><span ><i style="color: red">*</i>新密码</span>
          <el-input v-model="newPass" style="width:280px" type="password"></el-input>
        </div>
        <div class="h-pass"><span><i  style="color: red">*</i>确认新密码</span>
          <el-input v-model="checkNewPass" style="width: 280px" type="password"></el-input>
        </div>
        <div>
          <el-button @click="firstPass" type="primary" style="width: 200px">提交</el-button>
        </div>
      </div>
    </div>
</template>

<script>
  import {firstPass} from "../../http/request";
  import {selfCookie,selfCode} from "../../self";

  export default {
        name: "revisePasswordHu",
        data(){
          return{
            newPass:'',
            checkNewPass:''
          }
        },
        methods:{
          firstPass(){
            this.newPass?(()=>{
                this.checkNewPass?(()=>{
                  this.newPass==this.checkNewPass?(()=>{
                    let msg={
                      oldPassword:this.$cookies.get('oldPass'),
                      password:this.newPass,
                      confirmPassword:this.checkNewPass
                    }
                    firstPass(msg).then(v=>{
                      v.code?this.$message.error(v.msg):(()=>{
                        this.$message.success('修改成功');
                        this.$cookies.remove(selfCookie);
                        this.$cookies.remove('oldPass');
                        this.$router.push('/login');
                      })();
                    })
                  })():this.$message.error('两次密码不同')
                })():this.$message.error('确认密码不能为空')
            })():this.$message.error('新密码不能为空')
          }
        }
    }
</script>

<style scoped>
  .h-login div.h-head{
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    height:90px;
    line-height: 90px;
    font-size:24px;
    color:#0074E4
  }
  .h-login{
    position: relative;
    width: 360px;
    padding-bottom: 20px;
    background: rgb(250,250,250);
    top: 20%;
    box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius:10px;
  }
  .h-pass{
    height: 80px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
  }
  .h-div{
    background: url("../../assets/bg.png") no-repeat center  center;
    background-size:100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
