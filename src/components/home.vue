<template>
  <div style="width:100%">
    <div>
      <el-button style="display:block;width:100%" @click="selectOrder">AR眼镜观看预约</el-button>
      <el-button size="mini" style="float:right" @click="register">我的预约</el-button>
    </div>
     <div>
      <el-button style="display:block;width:100%" @click="registerVisible=true">手机注册观看</el-button>
    </div>
    <!--  orderVisible start -->
    <el-dialog title="" :visible.sync="orderVisible">
    <div style="text-align:center">
      <el-button type="primary" @click="orderVisible=false" style="width:33%;">确认</el-button>
    </div>
   </el-dialog>
  <!--  orderVisible end -->
  <!-- registerVisible start -->
    <el-dialog title="请输入您的注册信息" :visible.sync="registerVisible">
    <el-form :model="form" label-width="110px" :rules="rules" ref="form">
      <el-form-item label="您的手机号码" prop="mobile">
        <el-input v-model.number="form.mobile"></el-input>
      </el-form-item>
      <el-form-item label="短信验证码" prop="checkCode">
        <el-input v-model.number="form.checkCode" style="width:75%;display:line-block"></el-input><el-button style="width:25%;display:line-block">获取短信</el-button>
      </el-form-item>
    </el-form>
    <div style="text-align:center">
      <el-button type="primary" @click="submitForm('form')" style="width:33%;">提交注册</el-button>
    </div>
  </el-dialog>
  <!-- registerVisible end -->
  <!--  selectOrderVisible start -->
    <el-dialog title="请选择预约的场次" :visible.sync="selectOrderVisible">
     <el-form :model="formSize" label-width="110px" :rules="ruleSize" ref="formSize">
      <el-form-item label="观看楼层" prop="mobile">
        <el-input v-model.number="form.mobile"></el-input>
      </el-form-item>
      <el-form-item label="观看日期" prop="checkCode">
        <el-date-picker
        style="width:100%"
        v-model="formSize.date"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
      </el-form-item>
      <el-form-item label="观看场次" prop="mobile">
        <el-input v-model.number="form.mobile"></el-input>
      </el-form-item>
      <el-form-item label="您的手机号码" prop="mobile">
        <el-input v-model.number="form.mobile"></el-input>
      </el-form-item>
       <el-form-item label="短信验证码" prop="mobile">
        <el-input v-model.number="form.checkCode" style="width:75%;display:line-block"></el-input><el-button style="width:25%;display:line-block">获取短信</el-button>
      </el-form-item>
    </el-form>
    <div style="text-align:center">
      <el-button type="primary" @click="selectOrderVisible=false" style="width:33%;">确认</el-button>
    </div>
   </el-dialog>
  <!--  selectOrderVisible end -->
  </div>

</template>

<script>
export default {
  name: 'Home',
  data () {
     var validateMobile = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号码'));
        } 
        else if (!/^1[3|4|5|7|8][0-9]{9}$/.test(value)) {
          callback(new Error('请输入正确手机号码'));
        }else{
          callback();
        }
      };
    return {
      registerVisible:false,//注册框
      orderVisible:false,//已预约场次
      selectOrderVisible:false,//选择预约场次
      form:{
        sessionKey:'',
        sessionSecret:'',
        mobile:'',
        checkCode:''
      },
     rules: {
      mobile: [
        { required: true, message: '请输入手机号码', trigger: 'blur' },
        { type: 'number',validator: validateMobile, message: '请输入正确的11位手机号码', trigger: ['blur','change'] }
      ],
      checkCode: [
        { required: true, message: '请输入短信验证码', trigger: 'change' },
        { type: 'number',required: true, message: '只能输入数字', trigger: 'change' }
      ]
    },
     formSize:{
       date:''
     },
     ruleSize:{
       
     },
    }
  },
  created () {
  },

  computed: {
   
  },
  methods: {
  submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.registerVisible=false
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
   register(){
     this.registerVisible=true
   },
   selectOrder(){
     this.selectOrderVisible=true
   }
  },
  components: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
