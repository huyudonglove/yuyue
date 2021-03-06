import http from '../http'
import {loadRequest} from '../util' //loading遮罩层
import { Message,Loading } from 'element-ui';
/** 获取session -   w*/
export function getSession(params) {
  return http.get(`/api/analyse/third-party/getSession`, params)
}

/** 请求验证码 -   w*/
export function getCode(params) {
  return http.post(`/api/analyse/third-party/sendCheckCode`, params)
}

/** 校验验证码 -   w*/
export function checkVerifyCode(params) {
  return http.post(`/api/analyse/third-party/checkVerifyCode`, params)
}

/** 预约 -   w*/
export function bookedAdd(params) {
  return http.post(`/api/analyse/booked/add`, params)
}

/** 获取当天的场次列表 -  列表 w*/
export function sequenceList(params){
  return new Promise((resolve,reject)=>{
    http.post('/api/analyse/sequence/list',params).then(res=>{
      if(res.code){
        Message.error(res.msg);
      }else{
        resolve(res);
      }
    }).catch(err=>{
      reject(err);
    })
  })
}

/** 根据用户手机号获取用户用户预约列表 -  列表 w*/
export function listByMobile(params){
 
  return http.post('/api/analyse/booked/listByMobile',params)
  
}

/** 安卓下载地址 - w*/
export function apkpathByKey(params) {
  return http.get(`/api/analyse/booked/apkpathByKey`, params)
}