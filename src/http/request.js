import http from '../http'
import {loadRequest} from '../util' //loading遮罩层
import { Message,Loading } from 'element-ui';
const login=(msg)=>{
   return  http.post('/api/live/web/access/login',msg)
}
/* 获取验证码h */
const getCode = () => {
    return http.get('/api/recorded/access/getIdentifyCode')
  }
export {
    login,
    getCode
}
