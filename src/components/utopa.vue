<template>
    <div class="d1" ref="q1">
        <div  class="z1" v-if="visible">
            <img src="../assets/m1.png" width='65%' style="margin-top:5rem"> 
        </div>
        <div class="t1 i1">
        </div>
        <div class="d2" @click="copyUrl"></div>
        <div class="t2">
        </div>
        
    </div>
</template>
<script>
import {apkpathByKey} from '../http/request'
export default {
    name:'utopa',
    data(){
        return{
            heightC:'',
            visible:false,
            urlC:''
        }
    },
    methods:{
        copyUrl(){
            this.visible=true;
            var text = this.urlC;
            let oInput = document.createElement('input');
            oInput.style.opacity=0;
            oInput.value  = text; // 修改文本框的内容
            document.body.appendChild(oInput);
            oInput.select();// 选中文本
            oInput.disabled=true;
            document.execCommand("copy");
            oInput.remove();
            var self=this;
            setTimeout(function(){
                self.visible=false;
            },3000)    
        },
        apkpathByKey(){
            let href=window.location.href;
            this.urlC=href.split("#")[0]+"android.html";

            // apkpathByKey({key:"key_360"}).then(v=>{
            //     !v.code&&(()=>{
            //         this.urlC=v.data
            //     })();
            //     v.code&&(()=>{
            //         this.urlC='https://a.app.qq.com/o/simple.jsp?pkgname=com.utopa.utopaar'
            //     })();
            // })
        }
    },
    mounted(){
        this.apkpathByKey();
    }
}
</script>
<style scoped>
.d1{
    background: url(../assets/b1.png) no-repeat center;
    background-size: 100% 100%;
    position:absolute;
    width:100%;
    height: 100%;
    overflow: hidden;
    
}
.d2{
    background: url(../assets/b2.png) no-repeat center;
    background-size: 90%;
    position: relative;
    width:80%;
    height: 20%; 
    left:10%;
    top:65%;
}
.t1{
    background: url(../assets/t2.png) no-repeat center;
    background-size: 70%;
    height: 10%;
    position:relative;
    width: 90%;
    left:5%;
    top:70%;
}

.t2{
    background: url(../assets/t1.png) no-repeat center;
    background-size: 100%;
    height: 10%;
    position:relative;
    width: 90%;
    left:5%;
    bottom:-60%;
}
.m1{
    background: url(../assets/m1.png) no-repeat center;
    background-size:100% ;
}
.z1{
    position: fixed;
    width:100%;
    height: 100%;
    background:rgba(8, 8, 8, 0.5);
    z-index:999;
    text-align: center;
    
}
</style>