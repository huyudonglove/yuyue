<template>
  <div style="width:100%">
    <div>
      <el-button style="display:block;width:100%" @click="selectOrder">AR眼镜观看预约</el-button>
      <el-button size="mini" style="float:right" @click="myOrder">我的预约</el-button>
    </div>
     <div>
      <el-button style="display:block;width:100%" @click="mobileLook">手机观看</el-button>
    </div>
    <!--  orderVisible start -->
    <el-dialog title="您已预约的场次" :visible.sync="orderVisible" :close-on-click-modal='false' width='90%'>
      <p>输入您的手机号码，为您查询预约记录</p>
      <el-form :model="formOrder" label-width="110px" :rules="rules" ref="formOrder">
      <el-form-item label="您的手机号码" prop="mobile">
        <el-input v-model.number="formOrder.mobile"></el-input>
      </el-form-item>
      <el-form-item label="短信验证码" prop="checkCode">
        <el-input v-model="formOrder.checkCode" style="width:60%;display:line-block"></el-input><el-button style="width:40%;display:line-block" @click="getMobildCode(3)" :disabled='!getCodeAbeled||timeOut <60'>{{timeOut==60?'获取短信':timeOut+'s'}}</el-button>
      </el-form-item>
    </el-form>
    <div style="text-align:center">
      <el-button type="primary" @click="searchOrder('formOrder')" style="width:35%;">查看预约情况</el-button>
    </div>
   </el-dialog>
  <!--  orderVisible end -->
    <!--  orderListVisible start -->
    <el-dialog title="您已预约的场次" :visible.sync="orderListVisible" :close-on-click-modal='false' width='90%'>
      <p style="text-align:center;font-weight:700">
        您预约的手机号码是
      </p>
      <p style="text-align:center;font-weight:700">
        {{formOrder.mobile}}
      </p>
      <div style="margin-top:10px;font-weight:700" v-for="(item,i) in searchListMsg" :key="i">
        <p>
          {{item.bookedDate}}
        </p>
         <p>
         {{item.sequenceName}}
        </p>
      </div>
      <div style="text-align:center">
        <p>温馨提示</p>
        <p>
          为了您方便核销，请截图保存本页到现场后向工作人员出示,并携带身份证到现场领取眼镜。
        </p>
      </div>
    <div style="text-align:center">
      <el-button type="primary" @click="yyOrder" style="width:35%;">确认</el-button>
    </div>
   </el-dialog>
  <!--  orderListVisible end -->
  <!-- registerVisible start -->
    <el-dialog title="请输入您的预约信息" :visible.sync="registerVisible" :close-on-click-modal='false' @closed="closedOrderVisible('form')" width='90%'>
    <el-form :model="form" label-width="110px" :rules="rules" ref="form">
      <el-form-item label="您的手机号码" prop="mobile">
        <el-input v-model.number="form.mobile"></el-input>
      </el-form-item>
      <el-form-item label="短信验证码" prop="checkCode">
        <el-input v-model="form.checkCode" style="width:60%;display:line-block"></el-input><el-button style="width:40%;display:line-block" @click="getMobildCode(3)" :disabled='!getCodeAbeled||timeOut <60 '>{{timeOut==60?'获取短信':timeOut+'s'}}</el-button>
      </el-form-item>
    </el-form>
    <div style="text-align:center">
      <el-button type="primary" @click="submitForm('form')" style="width:35%;">提交预约</el-button>
    </div>
  </el-dialog>
  <!-- registerVisible end -->
  <!--  selectOrderVisible start -->
    <el-dialog title="请选择预约的场次" :visible.sync="selectOrderVisible" :close-on-click-modal='false' @closed="closedOrderVisible('formSize')" width='90%'>
     <el-form :model="formSize" label-width="110px" :rules="ruleSize" ref="formSize">
      <el-form-item label="观看楼层" prop="floor">
         <el-select v-model="formSize.floor" placeholder="请选择" style="width:100%" :popper-append-to-body="false">
          <el-option
            v-for="item in options"
            :key="'name' + item.id"
            :label="item.name"
            :value="item.id"
            >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="观看日期" prop="bookedDate">
        <el-date-picker
        @change="changeDate"
        style="width:100%"
        v-model="formSize.bookedDate"
        type="date"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"
        format="yyyy-MM-dd"
        :picker-options="pickerOptions"
        >
      </el-date-picker>
      </el-form-item>
      <el-form-item label="观看场次" prop="sequence">
        <el-select v-model="formSize.sequence" placeholder="请选择" style="width:100%" @change="changeSequence">
          <el-option
            v-for="item in playOptions"
            :key="item.sequenceName"
            :label="item.sequenceName"
            :value="item.id"
            :disabled="item.disabled"
            >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="您的手机号码" prop="mobile">
        <el-input v-model.number="formSize.mobile"></el-input>
      </el-form-item>
       <el-form-item label="短信验证码" prop="checkCode">
        <el-input v-model="formSize.checkCode" style="width:60%;display:line-block"></el-input><el-button style="width:40%;display:line-block" @click="getMobildCode(3)" :disabled='!getCodeAbeled||timeOut <60'>{{timeOut==60?'获取短信':timeOut+'s'}}</el-button>
      </el-form-item>
    </el-form>
    <div style="text-align:center">
      <el-button type="primary" @click="submitForm('formSize')" style="width:35%;">提交预约信息</el-button>
    </div>
   </el-dialog>
  <!--  selectOrderVisible end -->
  <!--  orderSuccessVisible start -->
    <el-dialog title="" :visible.sync="orderSuccessVisible" :close-on-click-modal='false' width='90%'>
      <h2 style="text-align:center;font-weight:700">
        恭喜您预约成功！
      </h2>
      <p style="text-align:center;font-weight:700">
        您预约的手机号码是
      </p>
      <p style="text-align:center;font-weight:700">
        {{successMsg.mobile}}
      </p>
      <div style="margin-top:10px;font-weight:700;text-align:center;">
        <p>
        {{successMsg.bookedDate}}
        </p>
         <p>
        {{successMsg.sequenceName}}
        </p>
      </div>
      <div style="text-align:center">
        <p>温馨提示</p>
        <p>
          为了您方便核销，请截图保存本页到现场后向工作人员出示,并携带身份证到现场领取眼镜。
        </p>
      </div>
    <div style="text-align:center">
      <el-button type="primary" @click="orderSuccessVisible=false" style="width:35%;">确认</el-button>
    </div>
   </el-dialog>
  <!--  orderSuccessVisible end -->
   <!--  mobileSuccessVisible start -->
    <el-dialog title="" :visible.sync="mobileSuccessVisible" :close-on-click-modal='false' width='90%'>
      <h2 style="text-align:center;font-weight:700">
        恭喜您预约成功！
      </h2>
    <div style="text-align:center">
      <el-button type="primary" @click="mobileSuccessVisible=false" style="width:35%;">确认</el-button>
    </div>
   </el-dialog>
  <!--  mobileSuccessVisible end -->
   <!--  orderFailVisible start -->
    <el-dialog title="" :visible.sync="orderFailVisible" :close-on-click-modal='false' width='90%'>
      <h2 style="text-align:center;font-weight:700">
        非常抱歉
      </h2>
      <h2 style="text-align:center;font-weight:700">
        {{errorMsg}}
      </h2>
      <p style="text-align:center;font-weight:700" v-if="msgCode==-11||msgCode==-12||msgCode==-13">
        请更换其他场次
      </p>
    <div style="text-align:center">
      <el-button type="primary" @click="orderFailVisible=false" style="width:35%;">返回重新选择</el-button>
    </div>
   </el-dialog>
  <!--  orderFailVisible end -->
  </div>

</template>

<script>
import {getSession,getCode,checkVerifyCode,bookedAdd,sequenceList,listByMobile} from '../http/request'
export default {
  name: 'Home',
  inject:['reload'],
  data () {
     var validateMobile = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号码'));
        } 
        else if (!/^1[3|4|5|7|8][0-9]{9}$/.test(value)) {
          callback(new Error('请输入正确手机号码'));
          this.getCodeAbeled=false
        }else{
          callback();
          this.getCodeAbeled=true
        }
      };
    return {
      timeNow:0,
      options:[{id:3,name:'三楼入口'},{id:4,name:'四楼入口'},{id:5,name:'五楼入口'}],
      playOptions:[],
      msgCode:0,
      timeOut:60,
      myInterval:null,
      errorMsg:'',
      registerVisible:false,//注册框
      orderVisible:false,//已预约场次
      selectOrderVisible:false,//选择预约场次
      orderListVisible:false,//已经预场次列表,
      orderSuccessVisible:false,// AR眼镜观看 恭喜您预约成功！
      orderFailVisible:false,//AR眼镜观看 预约失败 
      mobileSuccessVisible:false,//预约成功
      getCodeAbeled:false,
      changeType:1,
      source:1,//来源  1:眼镜，2:APP
      platform:0,//平台 0:线下，1:线上
      successMsg:{

      },//预约成功
      searchListMsg:[],//
      form:{
        mobile:'',
        checkCode:''
      },
      formOrder:{
        mobile:'',
        checkCode:''
      },
     error:'',
     rules: {
      mobile: [
        { required: true, message: '请输入手机号码', trigger: 'blur' },
        { type: 'number',validator: validateMobile, message: '请输入正确的11位手机号码', trigger: ['blur','change'] }
      ],
      checkCode: [
        { required: true, message: '请输入短信验证码', trigger: 'change' },
        { required: true, message: '只能输入数字', trigger: 'change' }
      ]
    },
     formSize:{
       mobile:'',
       checkCode:'',
       sequence:'',//场次
       sequenceName:'',//场次名称
       bookedDate:'',//bookedDate
       floor:'',//楼层 
     },
    sessionKey:'',
    sessionSecret:'',
     ruleSize:{
       floor: [
        { required: true, message: '请选择观看楼层', trigger: ['blur','change'] },
        ],
         sequence: [
        { required: true, message: '请选择观看场次', trigger: ['blur','change'] },
        ],
         bookedDate: [
        { required: true, message: '请选择观看时间', trigger: ['blur','change'] },
        ],
        mobile: [
        { required: true, message: '请输入手机号码', trigger: 'blur' },
        { type: 'number',validator: validateMobile, message: '请输入正确的11位手机号码', trigger: ['blur','change'] }
        ],
        checkCode: [
          { required: true, message: '请输入短信验证码', trigger: 'change' },
          { required: true, message: '只能输入数字', trigger: 'change' }
        ]
     },
    pickerOptions:{
     disabledDate(time) {
      return time.getTime() < Date.now() - 24 * 60 * 60 * 1000;
     } 
    }
    }
  },
  created () {
    this.getSession()
    let d =new Date();
    let resDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
    this.formSize.bookedDate=resDate
  },

  computed: {
  },
  methods: {
    closedOrderVisible(formName){
      this.$refs[formName].resetFields();
      this.getCodeAbeled=false
    },
    // 改变日期
    changeDate(){
      // this.formSize.sequence=''
      this.getSequenceList()
    },
    // 获取session
    getSession(){
      getSession({}).then(res=>{
        this.sessionKey=res.data.sessionKey
        this.sessionSecret=res.data.sessionSecret
      })
    },
    //获取验证码
    getMobildCode(type){
      this.setMyInterval()
      if(type==1){
        getCode({mobile:this.form.mobile,sessionKey:this.sessionKey,sessionSecret:this.sessionSecret}).then(res=>{

      })
      }else if(type==2){
       getCode({mobile:this.formSize.mobile,sessionKey:this.sessionKey,sessionSecret:this.sessionSecret}).then(res=>{
      }) 
      }else if(type==3){
        
        getCode({mobile:this.formOrder.mobile,sessionKey:this.sessionKey,sessionSecret:this.sessionSecret}).then(res=>{
      }) 
      }
      
    },
    //获取场次
    getSequenceList(){
      this.timeNow=new Date().getTime()
      sequenceList({bookedDate:this.formSize.bookedDate}).then(res=>{
       this.playOptions=res.data
        this.playOptions.forEach(v=>{
        let endTime=this.formSize.bookedDate+' '+v.endTime
        endTime = endTime.substring(0,19);    
        endTime = endTime.replace(/-/g,'/'); //必须把日期'-'转为'/'
        endTime = new Date(endTime).getTime();
        if(v.isFull){
          v.disabled=true;
          v.sequenceName=v.sequenceName+' 已约满'
        }
        else if(this.timeNow>endTime){
          v.disabled=true
        }else{
          v.disabled=false
        }
        return v
      })
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.changeType==1){
            bookedAdd({...this.formSize,sessionKey:this.sessionKey,sessionSecret:this.sessionSecret,platform:this.platform,source:1}).then(res=>{
             this.msgCode=res.code
             if(res.code){
             this.errorMsg=res.msg
             this.orderFailVisible=true
               }else{
                this.successMsg=res.data
                this.selectOrderVisible=false;
                this.orderSuccessVisible=true;
                this.$refs[formName].resetFields();
                this.getCodeAbeled=false
               }
          })
          }else if(this.changeType==2){
             bookedAdd({...this.form,sessionKey:this.sessionKey,sessionSecret:this.sessionSecret,platform:this.platform,source:2}).then(res=>{
               if(res.code){
                 this.error=res.msg
               }else{
                 this.mobileSuccessVisible=true
                 this.getCodeAbeled=false
                 this.$refs[formName].resetFields();
               }
          })
          }
          this.registerVisible=false;

        } else {
          console.log('error submit!!');
          return false;
        }
      });
      },
   myOrder(){
     this.changeType=3;
     this.orderVisible=true;
     this.getCodeAbeled=false
     this.$nextTick(()=>{
     this.$refs['formOrder'].resetFields();
     })
   },
   selectOrder(){
     this.selectOrderVisible=true;
     this.changeType=1;
     this.getSequenceList()
   },
   mobileLook(){
    this.registerVisible=true
    this.changeType=2
   },
   changeSequence(val){
    let item=this.playOptions.filter(v=>v.id==val)[0]
    this.formSize.sequenceName=item.sequenceName
    this.formSize.startTime=item.startTime
    this.formSize.endTime=item.endTime
   },
   searchOrder(formName){
     this.$refs[formName].validate((valid) => {
        if (valid) {
         listByMobile({...this.formOrder,sessionKey:this.sessionKey,sessionSecret:this.sessionSecret}).then(res=>{
        if(res.code){
        }else{
        this.searchListMsg=res.data
        this.orderVisible=false;
        this.orderListVisible=true
        // this.$refs[formName].resetFields();
        this.getCodeAbeled=false
            }
        })
        } else {
          console.log('error submit!!');
          return false;
        }
     
   }) 
   },
   yyOrder(){
    this.orderListVisible=false
    this.$refs['formOrder'].resetFields();
   },
   setMyInterval(){
    this.myInterval=setInterval(()=>{
					this.timeOut-=1;
					if(this.timeOut==-1){
						clearInterval(this.myInterval)
            this.timeOut=60
						// document.getElementById("time").innerHTML="倒计时结束"
					}
				},1000)
   }
  },
  components: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
/* @media screen and (max-width: 750px) {
  .el-message-box {
    width: 60% !important;
  }
} */
  .el-scrollbar .el-scrollbar__bar {
  opacity: 1 !important;
}
</style >