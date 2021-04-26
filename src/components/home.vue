<template>
  <div style="width:100%" class="container" id="container">
   <div style="position:absolute;z-index:999">
       <!-- {{isApp}}{{token}} {{option11}} cookcook:{{cookcook}} r:{{r}} getAuthorityInfo:{{getAuthorityInfo}} -->
   </div>
    <div class="layout">
      <div>
        <img src="../assets/Image_poster.png" width="100%"/>
      </div>
      <div>
      <div class="div-msg1" style="color:#0b53ac;font-size:0.4rem;font-weight:bold;">
        <p>
        -  在购物中心前所未见的自然和科技  -
        </p>
        <p>
        《生命之树AR公园》
        </p>
        <p>
         将在杭州高德置地广场HUB震撼登场！
        </p>
      </div>
      <div class="div-msg1">
        <p>
        森林天空近一万平米，
        </p>
        <p>
        星海宇宙无垠浩瀚；
        </p>
        <p>
        瑰丽艺术奇观，与顶尖科技完美结合，
        </p>
        <p>
        带你领略 “现实+虚拟” 奇妙融合的震撼！
        </p>
      </div>
      <div class="div-msg1">
        <p>
        利用AR科技前沿技术，
        </p>
        <p>
        杭州高德置地广场HUB，
        </p>
        <p>
         给你一个与众不同的五一黄金假期体验。
        </p>
      </div>
      </div>
      <!--  orderVisible start -->
      <div class="orderDiv" >
        <button @click="selectOrder" class="ar"></button>
        <button   @click="myOrder" class="myOrder"></button>
      </div>
      <div class="arTy" style="text-align:center">
        <button class="phone" @click="mobileLook"></button>
        <a style="font-size:0.42rem;color:#3965b5;display:block;margin-top:0.4rem;text-decoration:underline;" @click="phoneListVisible=true">
          机型能否使用请查看清单
        </a>
      </div>
      <div class="activity">
       <div style="font-weight:bold">
          <div class="left activityLeft">
          <i class="i Atlas_time"></i> 活动时间:
          </div>
          <div class="right activityRight">
            <p>
              5月1日至30日
            </p>
            <p>
              11:00 - 21:00（最晚入场时间）
            </p>
          </div>
       </div>
       <div style="clear:both;font-weight:bold">
          <div class="left activityLeft">
         <i class="i Atlas_location"></i> 活动地址:
          </div>
          <div class="right activityRight">
            <p>
              杭州高德置地广场3F- 5F
            </p>
          </div>
       </div>
       <div style="clear:both">
          <div class="left activityLeft">
           <i class="i"></i>
          交通方式:
          </div>
          <div class="right activityRight">
            <p>
              1.地铁4号线市民中心站或成星路站
            </p>
             <p>
              2.市民中心·森林公园 / 市民中心
              <label style="display:block;line-height:0.8rem">（BRT、公交站）</label>
            </p>

             <p>
              公园路 / 解放路钱江路口（公交站）
            </p>
             <p>
              市民中心西大门 / 钱江路成星路口（公交站）
            </p>
          </div>
       </div>
      </div>
       <!-- 三楼主入口 -->
       <div class="mainFloor">
         <div class="descTitle">
           <span>|</span>炫酷的AR全息地图导览为您展示每个区域的模型效果<span>|</span> 
         </div>
         <div style="margin-top:0.4rem;height:8.6rem">
           <img src="../assets/Image_holographicguide.png" width="100%"/>
         </div>
         <!-- 三楼 -->
         <div class="floor3">
         <div style="margin-top:1.4rem">
             <img src="../assets/Image_crystalwoods01.png" width="100%"/>
         </div>
          <div >
             <img src="../assets/Image_crystalwoods02.png" width="100%"/>
         </div>
         <div class="mainMsg" style="cleart:both;">
           <p>
             作为生命之树根部的特有生态，
           </p>
            <p>
             栖息着优托邦星球的水晶系小动物和植物，
           </p>
            <p>
             妖异的花朵令人目眩神迷，
           </p>
            <p>
             灵动奇异的小兽活泼淘气。
           </p>
         </div>
       </div>
        <div class="floor3">
         <div style="margin-top:3.2rem">
             <img src="../assets/Image_fantasyhill01.png" width="100%"/>
         </div>
          <div>
             <img src="../assets/Image_fantasyhill02.png" width="100%"/>
         </div>
         <div class="mainMsg">
           <p>
             行走其中既像是在海洋之下游弋，
           </p>
            <p>
            又像是在苍穹之中翱翔。
           </p>
         </div>
         
       </div>
       <div class="floor3">
          <div style="margin-top:3.5rem">
             <img src="../assets/Image_tree'ssecret01.png" width="100%"/>
         </div>
          <div >
             <img src="../assets/Image_tree'ssecret02.png" width="100%"/>
         </div>
         <div class="mainMsg" style="cleart:both;margin-top:0.5rem">
           <p>
             有树下生长着那些头顶有特殊蘑菇的小精灵，
           </p>
            <p>
            那神秘的水母群和空中浮岛映入眼帘。
           </p>
         </div>
       </div>
       <!-- 4楼 -->
       <div class="floor4" style="margin-top:4.3rem">
             
            <div class="" >
              <img src="../assets/Image_spiritshome01.png" width="100%"/>
            </div>
            <div class="" >
              <img src="../assets/Image_spiritshome02.png" width="100%"/>
            </div>
           </div>
           <div class="mainMsg" style="cleart:both;">
           <p>
             这里遍布着花蕾状的精灵生命之茧，
           </p>
            <p>
            里面孕育着各种精灵蓬勃的小生命，
           </p>
            <p>
            星鳐巨兽在空中悠闲地翱翔游弋着。
           </p>
         </div>
          <div class="floor3">
         <div style="margin-top:4rem">
             <img src="../assets/Image_life'spalace01.png" width="100%"/>
         </div>
         <div class="mainMsg" style="cleart:both;">
           <div class="mainMsg" style="cleart:both;">
           <p>
            这里是优星人往生以及新生命诞生的神圣场所，
           </p>
            <p>
            隐藏着威严的精灵巨兽，
           </p>
            <p>
            保护着花蕾状的精灵生命之茧。
           </p>
         </div>
         </div>
       </div>
       <div class="floor3">
         <div style="margin-top:4.4rem">
             <img src="../assets/Image_starroad01.png" width="100%"/>
         </div>
          <div style="width:80%;float:right;margin-top:0.3rem">
             <img src="../assets/Image_starroad02.png" width="100%"/>
         </div>
         <div style="clear:both"></div>
          <div style="width:80%;margin-top:0.5rem;">
             <img src="../assets/Image_starroad03.png" width="100%"/>
         </div>
         <div class="mainMsg" style="cleart:both;">
           <p>
             举目所见皆是浩瀚星海，
           </p>
            <p>
            脚下是璀璨繁星铺就的道路。
           </p>
            <p>
            广阔无际的宇宙正在向您展露巨大的真容，
           </p>
           <p>
            宇宙的深奥令人沉思。
           </p>
         </div>
       </div>
        <!-- AR公园线路 -->
      
       </div>
       <div class="arPart">
         <img src="../assets/Image_guidemap.png" width="100%"/>
       </div>
      <el-dialog title="您已预约的场次" :visible.sync="orderVisible" :close-on-click-modal='false' width='90%' @close="closeOrderVisible" id="orderVisible">
        <p style="text-align:center;color:#495a89" >输入您的手机号码，为您查询预约记录</p>
        <el-form :model="formOrder" label-width="110px" :rules="rules" ref="formOrder" style="margin-top:0.5rem;padding-bottom:1.7rem">
        <el-form-item label="您的手机号码" prop="mobile">
          <el-input v-model.number="formOrder.mobile"></el-input>
        </el-form-item>
        <el-form-item label="短信验证码" prop="checkCode">
          <el-input v-model="formOrder.checkCode" style="width:50%;display:line-block;padding: 0px 0px;" ></el-input>
          <el-button type="primary" style="width:48%;display:line-block" @click="getMobildCode(3)" :disabled='!getCodeAbeled||timeOut <60'>{{timeOut==60?'获取验证码':timeOut+'s'}}</el-button>
        </el-form-item>
      </el-form>
      <div style="text-align:center">
        <el-button type="primary" @click="searchOrder('formOrder')" class="footerBtn">查看预约情况</el-button>
      </div>
    </el-dialog>
    <!--  orderVisible end -->
      <!--  orderListVisible start -->
       <div style="margin-top:6.8rem;text-align:center;height:5.7rem;color:#070f26;overflow-y:scroll;font-size:0.4rem;position: fixed;z-index:999999999999;top:0;margin-left:50%;transform: translateX(-50%);width:6.5rem;"  id="searchListMsg" v-if="searchListMsg.length&&orderListVisible">
        <div  v-for="(item,i) in searchListMsg" :key="i" style="margin-bottom:0.4rem;" >
          <p>
            {{item.bookedDate}}
          </p>
          <p>
          {{item.floor}}楼—{{item.sequenceName}}
          </p>
        </div>
        </div>
      <el-dialog  :visible.sync="orderListVisible" :close-on-click-modal='false' width='90%' class="dialogBg" :show-close='false' top="0.3rem" id="orderListVisible"  style="positon:relative">
        <!-- <p style="text-align:center;font-weight:700">
          您预约的手机号码是
        </p> -->
        <p style="text-align:center;font-weight:700;margin-top:4rem;font-size:0.54rem;color:#aeb0be;height:0.4rem" >
          {{formOrder.mobile}}
        </p>
        <div style="margin-top:3rem;text-align:center;height:5.5rem;color:#070f26;font-size:0.4rem;" v-if="!searchListMsg.length">
          您没有预约场次!
        </div>
        <div style="margin-top:2rem;text-align:center;height:6.5rem;color:#070f26;overflow-y:scroll;font-size:0.4rem;positon:absolute;z-index:99999999;top:1rem" v-if="searchListMsg.length" id="searchListMsg" >  
        <!-- <div  v-for="(item,i) in searchListMsg" :key="i" style="margin-bottom:0.6rem;" >
          <p>
            {{item.bookedDate}}
          </p>
          <p>
          {{item.floor}}楼—{{item.sequenceName}}
          </p>
        </div> -->
        </div>
         <div style="width:0.4rem;height:0.2rem;margin:0px auto;margin-top:-1.4rem;" v-if="searchListMsg.length>3">
           <img src="../assets/arrow.png" width="100%" />
        </div>
        <div style="text-align:center">
          <!-- <p>温馨提示</p> -->
          <p style="margin-top:1.5rem;line-height:0.32rem">
            请截图保存本页,到场后向工作人员出示
          </p>
          <p>
            并务必携带<span style="color:#f04646;line-height:0.32rem">身份证或其他有效证件</span>现场领取眼镜
          </p>
        </div>
      <div style="text-align:center">
        <el-button type="primary" @click="yyOrder" class="newBtn">确认</el-button>
      </div>
    </el-dialog>
   
    <!--  orderListVisible end -->
    <!-- registerVisible start -->
      <el-dialog title="请输入您的预约信息" :visible.sync="registerVisible" :close-on-click-modal='false' @closed="closedOrderVisible('form')" width='90%' id="registerVisible">
      <el-form :model="form" label-width="110px" :rules="rules" ref="form" style="margin-top:0.5rem;padding-bottom:1.7rem">
        <el-form-item label="您的手机号码" prop="mobile">
          <el-input v-model.number="form.mobile"></el-input>
        </el-form-item>
        <!-- <el-form-item label="短信验证码" prop="checkCode">
          <el-input v-model="form.checkCode" style="width:50%;display:line-block;padding: 0px 0px;" ></el-input><el-button type="primary" style="width:48%;display:line-block" @click="getMobildCode(1)" :disabled='!getCodeAbeled||timeOut <60 '>{{timeOut==60?'获取验证码':timeOut+'s'}}</el-button>
        </el-form-item> -->
         <el-form-item label="短信验证码" prop="checkCode">
          <el-input v-model="form.checkCode"  style="width:50%;display:line-block;padding: 0px 0px;" ></el-input>
          <el-button type="primary" style="width:48%;display:line-block" @click="getMobildCode(1)" :disabled='!getCodeAbeled||timeOut <60 '>{{timeOut==60?'获取验证码':timeOut+'s'}}</el-button>
        </el-form-item>
      </el-form>
      <div style="text-align:center">
        <el-button type="primary" @click="submitForm('form')" class="footerBtn">提交预约</el-button>
      </div>
    </el-dialog>
    <!-- registerVisible end -->
    <!--  selectOrderVisible start -->
      <el-dialog title="请选择预约的场次" :visible.sync="selectOrderVisible" :close-on-click-modal='false' @closed="closedOrderVisible('formSize')" width='90%' id="selectOrderVisible"  >
      <el-form :model="formSize" label-width="110px" :rules="ruleSize" ref="formSize" style="margin-top:0.5rem;padding-bottom:0.4rem">
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
          @focus="forbid"
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
          <el-input v-model="formSize.checkCode" style="width:50%;display:line-block;padding: 0px;"></el-input>
          <el-button  type="primary" style="width:48%;display:line-block" @click="getMobildCode(2)" :disabled='!getCodeAbeled||timeOut <60' >{{timeOut==60?'获取验证码':timeOut+'s'}}</el-button>
        </el-form-item>
      </el-form>
      <div style="text-align:center;margin-bottom:1.52rem">
        <el-button type="primary" @click="submitForm('formSize')"  class="footerBtn">提交预约信息</el-button>
      </div>
    </el-dialog>
    <!--  selectOrderVisible end -->
    <!--  orderSuccessVisible start -->
      <el-dialog title="" :visible.sync="orderSuccessVisible" class="dialogBg dialogBg2" :show-close='false' top="0.3rem" width='90%' id='orderSuccessVisible'>
        <!-- <h2 style="text-align:center;font-weight:700">
          恭喜您预约成功！
        </h2> -->
        <!-- <p style="text-align:center;font-weight:700">
          您预约的手机号码是
        </p> -->
        <p style="text-align:center;font-weight:700;margin-top:3.9rem;font-size:0.54rem;color:#aeb0be;height:0.4rem" >
          {{successMsg.mobile}}
        </p>
        <!-- <p style="text-align:center;font-weight:700">
          您的预约时间是
        </p> -->
        <div style="margin-top:3.8rem;text-align:center;height:4rem;color:#070f26;font-size:0.46rem">
          <p>
          {{successMsg.bookedDate}}
          </p>
          <p>
          {{successMsg.floor}}楼—{{successMsg.sequenceName}}
          </p>
        </div>
       <div style="text-align:center">
          <!-- <p>温馨提示</p> -->
          <p style="margin-top:1.1rem;line-height:0.32rem">
            请截图保存本页,到场后向工作人员出示
          </p>
          <p>
            并务必携带<span style="color:#f04646;line-height:0.32rem">身份证或其他有效证件</span>现场领取眼镜
          </p>
        </div>
      <div style="text-align:center">
        <el-button type="primary" @click="orderSuccessVisible=false;canScroll();" class="newBtn">确认</el-button>
      </div>
    </el-dialog>
    <!--  orderSuccessVisible end -->
    <!--  mobileSuccessVisible start -->
      <el-dialog title="" :visible.sync="mobileSuccessVisible" :close-on-click-modal='false' width='7.5rem' class="noHeader dialogBg3" id="mobileSuccessVisible">
        <div style="width:2.09rem;height:2.05rem;margin:0.5rem auto 0">
          <img src="../assets/happy.png"  width="100%"/>
        </div>
        <span style="text-align:center;font-weight:700;display:block;line-height:1rem">
          您已预约成功
        </span>
        <span style="text-align:center;font-weight:700;display:block;line-height:1">请下载Utopa AR APP进行体验</span>
      <div style="text-align:center">
        <a href="javascript:;" id="openApp" class="downLoad newBtn"  @click="downLoad" style="margin:0.3rem 0">点击下载</a>
        <span style="display:block;font-size:0.26rem;color:#707379">若已下载，点击即可体验</span>
      </div>
    </el-dialog>
    <!--  mobileSuccessVisible end -->
    <!--  orderFailVisible start -->
      <el-dialog title="" :visible.sync="orderFailVisible" :close-on-click-modal='false' width='7.5rem' class="noHeader dialogBg3" :show-close='false' id='orderFailVisible'>
        <div style="width:1.18rem;height:1.03rem;margin:0.5rem auto 0">
          <img src="../assets/sad.png"  width="100%"/>
        </div>
        <span style="text-align:center;font-weight:700;display:block">
          非常抱歉
        </span>
        <h3 style="text-align:center;font-weight:700;line-height:0.5rem">
          {{errorMsg}}
        </h3>
        <p style="text-align:center;font-weight:700;line-height:0.4rem" v-if="msgCode==-11||msgCode==-12||msgCode==-13">
          请更换其他场次
        </p>
      <div style="text-align:center">
        <el-button type="primary" @click="orderFailVisible=false" class="newBtn">返回重新选择</el-button>
      </div>
    </el-dialog>
    <!--  orderFailVisible end -->
     <!--  error start -->
      <el-dialog title="" :visible.sync="errorVisible" :close-on-click-modal='false' width='7.5rem' class="noHeader dialogBg3" :show-close='false' id="errorVisible">
        <div style="width:1.18rem;height:1.03rem;margin:0.5rem auto 0">
          <img src="../assets/sad.png"  width="100%"/>
        </div>
        <span style="text-align:center;font-weight:700;display:block">
          非常抱歉
        </span>
        <h2 style="text-align:center;font-weight:700">
          页面错误信息
        </h2>
    </el-dialog>
    <!--  error end -->
      <!--  phoneList start -->
      <el-dialog title="" :visible.sync="phoneListVisible" :close-on-click-modal='false' width='90%' class="noHeader phoneDialog" :show-close='false' top="0.5rem" id="phoneListVisible">
          <div style="height:10.5rem;overflow-y:scroll">
            <el-table
              :data="tableData"
              border
              >
              <el-table-column
                prop="serie"
                label="机型系列"
                width=""
                align='center'>
              </el-table-column>
              <el-table-column
                prop="name"
                label="机型名称"
                width=""
                align='center'>
              </el-table-column>
              <el-table-column
                prop="version"
                label="系统版本"
                align='center'
                width="">
              </el-table-column>
              <el-table-column
                prop="date"
                label="发售日期"
                align='center'>
              </el-table-column>
            </el-table>
          </div>
          <div style="width:0.4rem;height:0.2rem;margin:0px auto;margin-top:0.15rem" v-if="tableData.length>1">
           <img src="../assets/arrow2.png" width="100%" />
        </div>
          <div style="font-size:0.28rem;color:#8491aa;text-align:center;margin-top:0.2rem">
            <p>UtopaAR App在一些安卓设备上需要安装<span style="color:#f67244">Google ARcore</span>服务才能使用</p>
            <p>请在各机型设备应用商店搜索<span style="color:#f67244">ARcore</span>服务进行安装</p>
          </div>
          <div class="phoneBtn" style="border-top:0.01rem solid #7f92b4;padding:0.2rem 0">
            <div style="width:50%;float:left;text-align:center">
            <a :class="{'black':true,'blackActive':tableData==tableData2?true:false}" @click="phoneBtnClick(2)">
            </a>
            </div>
             <div style="width:50%;float:left;text-align:center">
            <a :class="{'white':true,'whiteActive':tableData==tableData1?true:false}" @click="phoneBtnClick(1)">
            </a>
             </div>
          </div>
            <div style="width:0.9rem;height:1.34rem;position:absolute;bottom:-1.2rem;margin-left:50%; transform: translateX(-50%)">
            <a @click="phoneListVisible=false">
              <img src="../assets/Btn_close_02.png" width="100%"/>
            </a>
          </div>
      </el-dialog>
     
    <!--  phoneList end -->
    </div>
  </div>

</template>

<script>
import {getSession,getCode,checkVerifyCode,bookedAdd,sequenceList,listByMobile} from '../http/request'
import { fetchAccessTokenByOpenToken } from '@/api/common/bslogin'
import commonApi from '@/common/ajax'
import CallApp from 'callapp-lib';
import {
  getUID,
  getToken,
  getAuthorityInfo,
  setToken,
  removeToken
} from '@/common/auth'
import { openUtopaApp } from '@/common/utils'
import JSBridge from '@/jsbridge'
import loginApi from '@/api/common/login'
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
      a:'',
      tableData:[],
      tableData2:[
      {"serie":"Vivo X系列","name":"X50 Pro+","version":"10","date":"2020年7月"},
      {"serie":"华为荣耀系列","name":"荣耀V40","version":"10","date":"2021年1月"},
      {"serie":"红米其他系列","name":"Redmi 10X Pro","version":"10","date":"2020年6月"},
      {"serie":"Samsung","name":"Galaxy S21 5G","version":"11","date":"2021年3月"},
      {"serie":"华为荣耀系列","name":"荣耀 X10 Max","version":"10","date":"2020年7月"},
      {"serie":"OppoA系列","name":"A53","version":"10","date":"2020年12月"},
      {"serie":"Oppo Reno系列","name":"Reno5 K","version":"11","date":"2021年3月"},
      {"serie":"华为mate系列","name":"Mate40E","version":"10","date":"2021年3月"},
      {"serie":"华为荣耀畅玩系列","name":"荣耀 Play4T Pro","version":"10","date":"2020年4月"},
      {"serie":"Vivo X系列","name":"X21i","version":"8.1.0","date":"2018年"},
      {"serie":"Vivo Y系列","name":"Y31s","version":"11","date":"2021年1月"},
      {"serie":"Vivo Y系列","name":"Y73s","version":"10","date":"2020年10月"},
      {"serie":"iQOO","name":"iQOO 5 pro","version":"11","date":"2020年9月"},
      {"serie":"中兴","name":"AXON 11 SE","version":"10","date":"2020年6月"},
      {"serie":"中兴","name":"Axon 11","version":"10","date":"2020年3月"},
      {"serie":"华为nova系列","name":"nova 8 Pro","version":"10","date":"2020年12月"},
      {"serie":"Vivo X系列","name":"X60 Pro+","version":"11","date":"2021年1月"},
      {"serie":"魅蓝Note系列","name":"魅族Note9","version":"9","date":"2019年3月"},
      {"serie":"魅族-其他","name":"魅族16s Pro","version":"9","date":"2019年8月"},
      {"serie":"魅族-其他","name":"魅族16s","version":"9","date":"2019年4月"},
      {"serie":"魅族-其他","name":"魅族 17","version":"10","date":"2020年6月"},
      {"serie":"谷歌","name":"Google Pixel 5","version":"11","date":"2020年11月"},
      {"serie":"OppoA系列","name":"A93","version":"11","date":"2021年1月"},
      {"serie":"华为荣耀系列","name":"荣耀X10","version":"10","date":"2020年5月"},
      {"serie":"一加","name":"OnePlus 8T","version":"11","date":"2020年10月"},
      {"serie":"Oppo R系列","name":"R11s","version":"8.1.0","date":"2017年6月"},
      {"serie":"Vivo X系列","name":"X50","version":"10","date":"2020年6月"},
      {"serie":"Vivo Y系列","name":"Y30标准版","version":"10","date":"2020年12月"},
      {"serie":"iQOO","name":"iQOO Z1","version":"10","date":"2020年11月"},
      {"serie":"魅族-其他","name":"魅族16T","version":"9","date":"2019年10月"},
      {"serie":"华为畅享系列","name":"华为畅享20 Pro","version":"10","date":"2020年6月"},
      {"serie":"华为畅享系列","name":"华为畅享Z 5G","version":"10","date":"2020年5月"},
      {"serie":"华为麦芒系列","name":"麦芒 9 5G","version":"10","date":"2020年7月"},
      {"serie":"Vivo S系列","name":"S7","version":"10","date":"2020年8月"},
      {"serie":"iQOO","name":"iQOO 5","version":"10","date":"2020年8月"},
      {"serie":"Samsung","name":"Galaxy A71","version":"10","date":"2020年4月"},
      {"serie":"华为畅享系列","name":"华为畅享20 5G","version":"10","date":"2020年9月"},
      {"serie":"华为荣耀系列","name":"荣耀 30S","version":"10","date":"2020年3月"},
      {"serie":"Oppo Reno系列","name":"Reno 4","version":"10","date":"2020年6月"},
      {"serie":"Oppo R系列","name":"R11s Plus","version":"8.1.0","date":"2017年11月"},
      {"serie":"小米数字系列","name":"Mi 11","version":"11","date":"2021年1月"},
      {"serie":"红米其他系列","name":"Redmi 9","version":"10","date":"2020年6月"},
      {"serie":"红米其他系列","name":"Redmi 10X","version":"10","date":"2020年5月"},
      {"serie":"Vivo X系列","name":"X60 Pro","version":"11","date":"2021年1月"},
      {"serie":"Vivo Y系列","name":"Y52s","version":"10","date":"2020年12月"},
      {"serie":"魅族-其他","name":"魅族16 X（全网通）","version":"8.1.0","date":"2018年9月"},
      {"serie":"锤子科技","name":"锤子科技坚果R2","version":"10","date":"2020年10月"},
      {"serie":"锤子科技","name":"锤子科技坚果Pro 3","version":"10","date":"2019年10月"},
      {"serie":"华为畅享系列","name":"华为畅享20 Plus 5G","version":"10","date":"2020年9月"},
      {"serie":"Oppo Reno系列","name":"Reno5 Pro+","version":"11","date":"2020年12月"},
      {"serie":"红米K系列","name":"Redmi K30","version":"10","date":"2019年12月"},
      {"serie":"红米note系列","name":"Redmi Note 9 Pro","version":"10","date":"2020年12月"},
      {"serie":"iQOO","name":"iQOO Neo","version":"9","date":"2019年7月"},
      {"serie":"iQOO","name":"iQOO Z1x","version":"10","date":"2020年7月"},
      {"serie":"魅族-其他","name":"魅族V8","version":"8.1.0","date":"2018年9月"},
      {"serie":"魅族-其他","name":"魅族X8","version":"8.1.0","date":"2018年9月"},
      {"serie":"魅族-其他","name":"魅族16th","version":"8.1.0","date":"2018年8月"},
      {"serie":"华为nova系列","name":"nova 8 SE","version":"10","date":"2020年11月"},
      {"serie":"华为荣耀系列","name":"荣耀20S","version":"10","date":"2019年9月"},
      {"serie":"Oppo Reno系列","name":"Reno5 Pro","version":"11","date":"2020年12月"},
      {"serie":"Vivo Y系列","name":"Y91","version":"8.1.0","date":"2019年3月"},
      {"serie":"Vivo Y系列","name":"Y70s","version":"10","date":"2020年6月"},
      {"serie":"iQOO","name":"iQOO U3","version":"10","date":"2020年12月"},
      {"serie":"华为畅享系列","name":"华为畅享 10S","version":"10","date":"2019年11月"},
      {"serie":"iQOO","name":"iQOO7","version":"11","date":"2021年1月"},
      {"serie":"魅族-其他","name":"魅族17 Pro","version":"10","date":"2020年5月"},
      {"serie":"Samsung","name":"Galaxy S20 FE","version":"10","date":"2020年10月"},
      {"serie":"华为nova系列","name":"nova 5 Pro","version":"10","date":"2019年6月"},
      {"serie":"Oppo R系列","name":"R11","version":"8.1.0","date":"2017年6月"},
      {"serie":"中兴","name":"中兴AXON 20","version":"10","date":"2020年9月"},
      {"serie":"索尼","name":"Xperia X1","version":"11","date":"2019年5月"},
      {"serie":"Vivo X系列","name":"X60","version":"11","date":"2021年1月"},
      {"serie":"Vivo Y系列","name":"Y97","version":"8.1.0","date":"2018年9月"},
      {"serie":"魅族-其他","name":"魅族 18","version":"11","date":"2021年3月"},
      {"serie":"联想","name":"联想Z6 Pro","version":"10","date":"2019年12月"},
      {"serie":"华为mate系列","name":"HUAWEI Mate 40 Pro","version":"10","date":"2020年10月"},
      {"serie":"华为mate系列","name":"HUAWEI Mate 40","version":"10","date":"2020年12月"},
      {"serie":"Oppo Reno系列","name":"Reno5","version":"11","date":"2020年12月"},
      {"serie":"Vivo X系列","name":"X50 Pro","version":"10","date":"2020年6月"},
      {"serie":"Vivo X系列","name":"X21s","version":"9","date":"2018年11月"},
      {"serie":"Samsung","name":"Galaxy A51","version":"10","date":"2020年7月"},
      {"serie":"中兴","name":"中兴AXON 20","version":"10","date":"2020年9月"},
      {"serie":"华为荣耀系列","name":"荣耀 9X Pro","version":"9","date":"2019年7月"},
      {"serie":"黑鲨","name":"KLE-A0","version":"10","date":"2020年7月"},
      {"serie":"联想","name":"Z5 Pro","version":"10","date":"2018年11月"},
      {"serie":"Vivo Y系列","name":"vivo Y83A","version":"8.1.0","date":"2015年1月"},
      {"serie":"小米其他系列","name":"小米POCO X3","version":"10","date":"2020年9月"},
      {"serie":"魅族-其他","name":"M892Q","version":"8.1.0","date":"2018年8月"},
      {"serie":"联想","name":"Lenovo K5 Note","version":"8.1.0","date":"2018年6月"},
],//黑名单手机机型 
tableData1:[
{"serie":"realme-X系列","name":"realme X50","version":"10","date":"2020年1月"},
{"serie":"红米note系列","name":"Redmi Note 8 Pro","version":"9","date":"2019年8月"},
{"serie":"realme-Q系列","name":"realme Q","version":"10","date":"2019年9月"},
{"serie":"华为mate系列","name":"Mate 20 Pro","version":"10","date":"2018年10月"},
{"serie":"Oppo Reno系列","name":"Reno2 Z","version":"10","date":"2019年10月"},
{"serie":"realme-Q系列","name":"真我Q2 Pro","version":"10","date":"2020年10月"},
{"serie":"Vivo X系列","name":"X30","version":"10","date":"2019年12月"},
{"serie":"Vivo S系列","name":"S9","version":"11","date":"2021年3月"},
{"serie":"Vivo Z系列","name":"Z6","version":"10","date":"2020年2月"},
{"serie":"华为nova系列","name":"nova 4e","version":"10","date":"2019年3月"},
{"serie":"华为p系列","name":"P20 Pro","version":"10","date":"2018年4月"},
{"serie":"Oppo Reno系列","name":"Reno3","version":"10","date":"2019年12月"},
{"serie":"realme-X系列","name":"realme X2 Pro","version":"10","date":"2019年10月"},
{"serie":"Oppo R系列","name":"R15","version":"9","date":"2018年3月"},
{"serie":"小米其他系列","name":"Mi Mix 3","version":"9","date":"2018年11月"},
{"serie":"红米K系列","name":"Redmi K20 Pro","version":"9","date":"2019年5月"},
{"serie":"Vivo X系列","name":"X20","version":"8.1.0","date":"2017年9月"},
{"serie":"华为nova系列","name":"nova 7","version":"10","date":"2020年4月"},
{"serie":"华为nova系列","name":"nova 7 Pro","version":"10","date":"2020年4月"},
{"serie":"华为nova系列","name":"nova 6","version":"10","date":"2019年12月"},
{"serie":"华为p系列","name":"P40","version":"10","date":"2020年3月"},
{"serie":"华为mate系列","name":"Mate 20 Lite","version":"10","date":"2018年9月"},
{"serie":"OPPO Ace系列","name":"Ace2","version":"10","date":"2020年4月"},
{"serie":"Oppo Reno系列","name":"Reno3 Pro","version":"10","date":"2019年12月"},
{"serie":"小米数字系列","name":"Mi 9 SE","version":"9","date":"2019年2月"},
{"serie":"小米数字系列","name":"Mi 8 UD","version":"9","date":"2018年9月"},
{"serie":"小米数字系列","name":"10 Pro","version":"10","date":"2020年2月"},
{"serie":"红米K系列","name":"Redmi K30","version":"10","date":"2019年12月"},
{"serie":"Vivo NEX系列","name":"NEX双屏版","version":"9","date":"2018年12月"},
{"serie":"Vivo X系列","name":"X30 Pro","version":"10","date":"2019年12月"},
{"serie":"Vivo S系列","name":"S6","version":"10","date":"2020年4月"},
{"serie":"华为荣耀畅玩系列","name":"荣耀Play4 Pro","version":"10","date":"2020年6月"},
{"serie":"realme-X系列","name":"真我X50 Pro","version":"10","date":"2020年6月"},
{"serie":"realme-V系列","name":"真我V5","version":"10","date":"2020年8月"},
{"serie":"一加","name":"6","version":"9","date":"2018年5月"},
{"serie":"OppoK系列","name":"K7","version":"10","date":"2020年11月"},
{"serie":"OppoA系列","name":"A72","version":"10","date":"2020年7月"},
{"serie":"realme-X系列","name":"realme X2","version":"9","date":"2019年9月"},
{"serie":"小米其他系列","name":"小米Max 3","version":"9","date":"2018年7月"},
{"serie":"Vivo NEX系列","name":"NEX","version":"9","date":"2018年12月"},
{"serie":"Vivo S系列","name":"S1 Pro","version":"9","date":"2019年4月"},
{"serie":"Vivo Z系列","name":"Z5x","version":"9","date":"2020年4月"},
{"serie":"努比亚","name":"努比亚Z20","version":"11","date":"2019年8月"},
{"serie":"华为p系列","name":"P10","version":"9","date":"2017年3月"},
{"serie":"华为mate系列","name":"Mate 30","version":"10","date":"2019年9月"},
{"serie":"Oppo Reno系列","name":"Reno2","version":"9","date":"2019年9月"},
{"serie":"小米数字系列","name":"Mi 10","version":"11","date":"2020年2月"},
{"serie":"小米其他系列","name":"小米6X","version":"9","date":"2018年4月"},
{"serie":"Vivo U系列","name":"U3","version":"9","date":"2019年10月"},
{"serie":"iQOO","name":"iQOO Neo 855版","version":"10","date":"2019年10月"},
{"serie":"Samsung","name":"Galaxy Note9","version":"9","date":"2018年8月"},
{"serie":"Samsung","name":"Galaxy S10","version":"10","date":"2019年2月"},
{"serie":"Samsung","name":"GALAXY A70s","version":"10","date":"2019年11月"},
{"serie":"索尼","name":"Xperia 5","version":"10","date":"2019年11月"},
{"serie":"华为nova系列","name":"nova 4","version":"10","date":"2018年12月"},
{"serie":"华为nova系列","name":"nova 5","version":"10","date":"2019年7月"},
{"serie":"华为nova系列","name":"nova 5i Pro","version":"10","date":"2019年10月"},
{"serie":"华为畅享系列","name":"畅享10 Plus","version":"10","date":"2019年9月"},
{"serie":"华为荣耀系列","name":"荣耀30","version":"10","date":"2020年4月"},
{"serie":"OppoK系列","name":"K7x","version":"10","date":"2020年11月"},
{"serie":"Oppo Reno系列","name":"Reno","version":"10","date":"2019年4月"},
{"serie":"realme-V系列","name":"realme V15","version":"10","date":"2021年1月"},
{"serie":"小米数字系列","name":"Mi 9","version":"9","date":"2019年2月"},
{"serie":"Vivo Z系列","name":"Z5","version":"9","date":"2019年7月"},
{"serie":"Samsung","name":"Galaxy A9s","version":"8.0.0","date":"2018年11月"},
{"serie":"华为p系列","name":"HUAWEI P40 Pro","version":"10","date":"2020年4月"},
{"serie":"华为mate系列","name":"Mate 30 Pro","version":"10","date":"2019年9月"},
{"serie":"华为荣耀系列","name":"荣耀 10","version":"10","date":"2018年4月"},
{"serie":"华为荣耀系列","name":"荣耀 30 Pro","version":"10","date":"2020年4月"},
{"serie":"Oppo Reno系列","name":"Reno4 Pro","version":"10","date":"2020年6月"},
{"serie":"小米其他系列","name":"小米CC9","version":"9","date":"2019年7月"},
{"serie":"小米其他系列","name":"Mi Mix 2S","version":"8.0.0","date":"2018年3月"},
{"serie":"iQOO","name":"iQOO Pro","version":"10","date":"2019年8月"},
{"serie":"Samsung","name":"Galaxy Note10","version":"9","date":"2019年9月"},
{"serie":"Samsung","name":"Galaxy S9","version":"8.0.0","date":"2018年3月"},
{"serie":"Samsung","name":"Galaxy S10+","version":"10","date":"2019年2月"},
{"serie":"Samsung","name":"Galaxy A8s","version":"9","date":"2018年12月"},
{"serie":"中兴","name":"AXON 10 Pro","version":"10","date":"2019年7月"},
{"serie":"华为p系列","name":"P20","version":"9","date":"2018年4月"},
{"serie":"华为mate系列","name":"Mate 20","version":"10","date":"2018年10月"},
{"serie":"华为mate系列","name":"Mate 20 X","version":"10","date":"2018年10月"},
{"serie":"华为荣耀系列","name":"荣耀V30 PRO","version":"10","date":"2019年11月"},
{"serie":"华为荣耀系列","name":"荣耀V30","version":"10","date":"2019年11月"},
{"serie":"realme-X系列","name":"真我X7 Pro","version":"10","date":"2020年9月"},
{"serie":"一加","name":"OnePlus 8","version":"11","date":"2020年4月"},
{"serie":"小米数字系列","name":"Mi 8","version":"10","date":"2018年6月"},
{"serie":"小米其他系列","name":"小米CC9 Pro","version":"10","date":"2019年11月"},
{"serie":"小米其他系列","name":"小米6","version":"8.0.0","date":"2017年4月"},
{"serie":"Vivo NEX系列","name":"NEX 3","version":"10","date":"2019年9月"},
{"serie":"Vivo X系列","name":"X27 Pro","version":"9","date":"2019年3月"},
{"serie":"Vivo S系列","name":"S5","version":"10","date":"2019年11月"},
{"serie":"Samsung","name":"Galaxy Note10+","version":"11","date":"2019年9月"},
{"serie":"Samsung","name":"Galaxy S20","version":"11","date":"2020年2月"},
{"serie":"Oppo Reno系列","name":"Reno 10x Zoom","version":"10","date":"2019年4月"},
{"serie":"iQOO","name":"iQOO","version":"10","date":"2019年3月"},
{"serie":"iQOO","name":"iQOO 3","version":"10","date":"2020年2月"},
{"serie":"Samsung","name":"Galaxy A80","version":"9","date":"2019年7月"},
{"serie":"华为荣耀系列","name":"荣耀 20","version":"10","date":"2019年6月"},
{"serie":"华为荣耀系列","name":"荣耀 20 Pro","version":"10","date":"2019年6月"},
{"serie":"OPPO Ace系列","name":"Reno Ace","version":"9","date":"2019年10月"},
{"serie":"OppoK系列","name":"K5","version":"10","date":"2019年10月"},
{"serie":"Oppo Reno系列","name":"Reno Z","version":"10","date":"2019年6月"},
{"serie":"一加","name":"OnePlus 8 Pro","version":"11","date":"2020年4月"},
{"serie":"Oppo R系列","name":"R15梦镜版","version":"8.1.0","date":"2018年4月"},
{"serie":"小米数字系列","name":"Mi 8 SE","version":"9","date":"2018年5月"},
{"serie":"红米K系列","name":"Redmi K20","version":"9","date":"2019年5月"},
{"serie":"iQOO","name":"iQOO Neo3","version":"10","date":"2020年4月"},
{"serie":"Samsung","name":"Galaxy M30s","version":"9","date":"2019年10"},
{"serie":"Samsung","name":"Galaxy S10e","version":"11","date":"2019年2月"},
{"serie":"一加","name":"6T","version":"9","date":"2018年11月"},
{"serie":"华为mate系列","name":"Mate 9","version":"9","date":"2016年11月"},
{"serie":"OPPO Find X系列","name":"Find X2","version":"10","date":"2020年3月"},
{"serie":"OppoA系列","name":"A92s","version":"10","date":"2020年4月"},
{"serie":"realme-X系列","name":"realme X7","version":"10","date":"2020年9月"},
{"serie":"小米数字系列","name":"Mi 9 Pro","version":"9","date":"2019年9月"},
{"serie":"红米K系列","name":"Redmi K30 Pro","version":"10","date":"2020年3月"},
{"serie":"Vivo Y系列","name":"Y3标准版","version":"9","date":"2019年10月"},
{"serie":"Samsung","name":"GALAXY Note 8","version":"8.0.0","date":"2017年9月"},
{"serie":"Samsung","name":"GALAXY A70","version":"10","date":"2019年4月"},
{"serie":"Oppo Reno系列","name":"Reno4 SE","version":"10","date":"2020年9月"},
{"serie":"一加","name":"一加7 Pro","version":"9","date":"2019年5月"},
{"serie":"Samsung","name":"GALAXY S8(G9500/双卡版/全网通)","version":"8.0.0","date":"2017年5月"},
{"serie":"Samsung","name":"GALAXY S9+","version":"8.0.0","date":"2018年3月"},
{"serie":"Samsung","name":"Galaxy A90","version":"10","date":"2019年10月"},
{"serie":"华为p系列","name":"P30 Pro","version":"10","date":"2019年4月"},
{"serie":"红米K系列","name":"Redmi K30i","version":"10","date":"2020年6月"},
{"serie":"努比亚","name":"努比亚红魔5S","version":"10","date":"2020年7月"},
{"serie":"Samsung","name":"GALAXY A60","version":"9","date":"2019年5月"},
{"serie":"华为p系列","name":"P30","version":"10","date":"2019年4月"},
{"serie":"华为荣耀系列","name":"荣耀 V20","version":"10","date":"2018年12月"},
{"serie":"Oppo R系列","name":"R17","version":"8.1.0","date":"2018年8月"},
{"serie":"Vivo NEX系列","name":"NEX 3S","version":"10","date":"2020年3月"},
{"serie":"谷歌","name":"Google Pixel 3a","version":"11","date":"2019年"},
{"serie":"黑鲨","name":"游戏手机2","version":"9","date":"2019年"},
{"serie":"一加","name":"一加7T","version":"10","date":"2019年10月"},
{"serie":"诺基亚","name":"诺基亚9 PureView","version":"9","date":"2019年2月"},
{"serie":"OppoK系列","name":"K3","version":"9","date":"2019年5月"},
],
      isApp: false,
      option11:{},
      getAuthorityInfo:'',
      cookcook:'',
      token:'',
      response:'',
      req:'',
      re:'',
      r:'',
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
      phoneListVisible:false,
      changeType:1,
      source:1,//来源  1:眼镜，2:APP
      platform:0,//平台 0:线下，1:线上
      successMsg:{
      },//预约成功
      errorVisible:false,//错误信息
      searchListMsg:[
      ],//
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


    if(this.$route.query.platform){
       this.platform= parseInt(this.$route.query.platform);
       this.errorVisible=false//错误信息
    }else{
      this.errorVisible=true//错误信息
    }
    this.tableData=this.tableData1;
    JSBridge.Bridge.WebViewJavascriptBridge.setup(() => {
      this.isApp = true
    })
    this.getSession();
    let d =new Date();
    let resDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
    this.formSize.bookedDate=resDate
  },
  mounted() {
    this.getAuthorityInfo=getAuthorityInfo()
    // console.log(this.getAuthorityInfo,'this.getAuthorityInfo')
  },
  computed: {
  },
  methods: {
    noScroll(id){
      let stop = document.querySelector(id);  
      stop.addEventListener("touchmove", (event) => {
       this.a=event
          event.preventDefault();  //阻止默认行为                 
          event.stopPropagation(); //阻止冒泡  
      }, false)
    },
    canScroll(id){
      let cancelStop = document.querySelector(id);  
      cancelStop.addEventListener("touchmove", (event) => {  
          event.returnValue = true;   //取消阻止默认行为                              
          event.cancelBubble = true;  //取消阻止冒泡                          
      }, false)
    },
     forbid(){
    //禁止软键盘弹出
    document.activeElement.blur();
     },
    phoneBtnClick(type){
      if(type==1){
        this.tableData=this.tableData1
      }else{
        this.tableData=this.tableData2
      }
    },
    closedOrderVisible(formName){
      this.$refs[formName].resetFields();
      this.getCodeAbeled=false;
      clearInterval(this.myInterval)
      this.timeOut=60
    },
    // 改变日期
    changeDate(){
      // this.formSize.sequence=''
      this.getSequenceList();
      this.canScroll('selectOrderVisible')
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
        let startTime=this.formSize.bookedDate+' '+v.startTime
        startTime = startTime.substring(0,19);    
        startTime = startTime.replace(/-/g,'/'); //必须把日期'-'转为'/'
        startTime = new Date(startTime).getTime();
        if(v.isFull){
          v.disabled=true;
          v.sequenceName=v.sequenceName+' 已约满'
        }
        else if(this.timeNow>startTime){
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
             if(res.code==1){
               this.$message.error(res.msg);
             }else{
               this.errorMsg=res.msg
               this.orderFailVisible=true
               this.noScroll('#orderFailVisible');
             }
              
               }else{
                this.successMsg=res.data
                this.selectOrderVisible=false;
                this.orderSuccessVisible=true;
                this.noScroll('#orderSuccessVisible');
                this.$refs[formName].resetFields();
                this.getCodeAbeled=false;
                this.timeOut=60
               }
          })
          }else if(this.changeType==2){
             bookedAdd({...this.form,sessionKey:this.sessionKey,sessionSecret:this.sessionSecret,platform:this.platform,source:2}).then(res=>{
               if(res.code){
                 this.$message.error(res.msg);
               }else{
                 this.timeOut=60
                 this.mobileSuccessVisible=true;
                 this.noScroll('#mobileSuccessVisible');
                 this.registerVisible=false;
                 this.getCodeAbeled=false
                 this.$refs[formName].resetFields();
               }
          })
          }
          
          
        } else {
          console.log('error submit!!');
          return false;
        }
      });
      },
   myOrder(){
     this.changeType=3;
     this.orderVisible=true;
     this.noScroll('#orderVisible');
     this.getCodeAbeled=false;
     this.$nextTick(()=>{
     this.$refs['formOrder'].resetFields();
     })
   },
   selectOrder(){
     this.selectOrderVisible=true;
     this.noScroll('#selectOrderVisible');
     this.changeType=1;
     this.getSequenceList()
   },
   mobileLook(){
    this.registerVisible=true;
    this.noScroll('#registerVisible');
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
         listByMobile({...this.formOrder,sessionKey:this.sessionKey,sessionSecret:this.sessionSecret,source:1}).then(res=>{
        if(res.code){
          this.$message.error(res.msg);
        }else{
        this.searchListMsg=res.data
        this.orderVisible=false;
        this.timeOut=60;
        this.orderListVisible=true
        this.noScroll('#orderListVisible');
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
    this.orderListVisible=false;
    this.$refs['formOrder'].resetFields();
   },
   setMyInterval(){
    this.timeOut-=1;
    this.myInterval=setInterval(()=>{
					this.timeOut-=1;
					if(this.timeOut==-1){
						clearInterval(this.myInterval)
            this.timeOut=60
					}
				},1000)
   },
   openApp(option){
     var arr = [];
      for(var key in option){
          arr.push(key + '=' + option[key]);
      }
      let options=arr.join('&')
     //ios
		if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
        	window.location.href =`utopaar://?${options}`; //ios app协议，由ios同事提供
          window.setTimeout(function() {
            window.location.href = `https://robot.utopaxr.com/utopaar?${options}`;
          }, 500)
          return
		}
 
		if(navigator.userAgent.match(/android/i)) {
			//Android
			var browser = navigator.userAgent.toLowerCase();
			if(browser.match(/micromessenger/i)) {
				//微信内置浏览器
          window.location.href =`utopaar://utopa.com.cn?${options}`;
          window.setTimeout(function() {
            window.location.href = `https://a.app.qq.com/o/simple.jsp?pkgname=com.utopa.utopaar&${options}`;
          }, 500)
          return
			} else {
            window.location.href = `utopaar://utopa.com.cn?${options}`;//安卓协议，由安卓同事提供
            window.setTimeout(function() {
              window.location.href = `https://a.app.qq.com/o/simple.jsp?pkgname=com.utopa.utopaar&${options}`
            }, 500)
            return
				}
		}
   },
   do () {
      JSBridge.Common.Caller_Common_Base_getLoginStatus('', response => {
        this.response=response
        if (response == 0) {
          // 未登入
          let option = {
            token: '',
            userId: '',
            sessionKey: '',
            sessionSecret: ''
          }
          this.openApp(option)
        } else {
          // 登入状态获取token
          JSBridge.Common.Caller_Common_Base_getOpenToken('', openToken => {
            this.token=openToken
            if (openToken) {
              fetchAccessTokenByOpenToken(openToken).then(rep => {
                this.req=rep;
                // 缺少字段uid
                if (rep.code === 0) {
                  // this.token = rep.data.accessToken
                  loginApi
                    .getUserData({
                      accessToken: rep.data.accessToken
                    })
                    .then(re => {
                      this.re=re
                      // console.log(11)
                      if (!getAuthorityInfo()) {
                        // 获取session
                        // console.log(12)
                        commonApi.getSession().then(r => {
                          // this.r=r
                          //  this.cookcook=r+'wu缓存'
                          if (r.code === 0) {
                            let option = {
                              appId: '00096efe4ee1450eb8481e8dae5fb447',
                              // appId: this.info.sourceId,
                              token: rep.data.accessToken,
                              userId: re.data.uid,
                              sessionKey: r.data.sessionKey,
                              sessionSecret: r.data.sessionSecret
                            }
                            // this.option11=option
                            this.openApp(option)
                          }
                        })
                      } else {
                        // console.log(13,re.data.uid,rep.data)
                        let obj =
                          getAuthorityInfo() && JSON.parse(getAuthorityInfo())
                          // this.cookcook=obj+'有缓存'
                        let option = {
                          appId: '00096efe4ee1450eb8481e8dae5fb447',
                          // appId: this.info.sourceId,
                          token: rep.data.accessToken,
                          userId: re.data.uid,
                          sessionKey: obj.sessionKey,
                          sessionSecret: obj.sessionSecret
                        }
                        // this.option11=option
                        this.openApp(option)
                      }
                    })
                } else {
                }
              })
            } else {
              removeToken()
            }
          })
        }
      })
    },
   downLoad(){
      if (this.isApp) {
        this.do()
      } else {
        let option = {
          token: '',
          userId: '',
          sessionKey: '',
          sessionSecret: ''
        }
        this.openApp(option)
      }
    
     this.mobileSuccessVisible=false;

   },
   closeOrderVisible(){
     this.getCodeAbeled=false;
     clearInterval(this.myInterval)
     this.timeOut=60
   }
  },
  watch: {
    $route(to){
    if(this.$route.query.platform){
       this.platform= parseInt(this.$route.query.platform);
       this.errorVisible=false//错误信息
    }else{
      this.errorVisible=true//错误信息
    }
    }
  },
  components: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style >
.el-table {
    position: relative;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    max-width: 100%;
    font-size: 0.25rem;
    color: #495a89;
}
.el-table thead {
    color: #516fa1;
    font-weight: 500;
}
.el-table .cell {
  padding-right: 0.1rem;
}
.el-table .cell, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell {
    padding-left: 0.1rem;
}
.phoneDialog .el-dialog__body{
  padding: 0.3rem 0rem 1rem
}
.phoneDialog .el-table td, .phoneDialog .el-table th {
    padding: 0.12rem 0;
}

.phoneBtn a{
  display: inline-block;
  width:0.84rem ;
  height: 0.9rem;
  cursor: pointer;
  border: 0px none;
}
.phoneBtn a.white{
   background: url('../assets/Btn_whitelist_02.png') no-repeat center;
   background-size: 100% auto;

}
.phoneBtn a.whiteActive{
   background: url('../assets/Btn_whitelist_01.png') no-repeat center;
   background-size: 100% auto;

}
.phoneBtn a.black{
  background: url('../assets/Btn_blacklist_01.png') no-repeat center;
  background-size: 100% auto;
}
.phoneBtn a.blackActive{
  background: url('../assets/Btn_blacklist_02.png') no-repeat center;
  background-size: 100% auto;
}

.el-dialog{
      -webkit-box-shadow: 0 0px 0px rgb(0 0 0 / 30%);
      box-shadow: 0 0px 0px rgb(0 0 0 / 30%);
}

</style >