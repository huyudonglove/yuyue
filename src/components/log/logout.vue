<template>
    <div></div>
</template>

<script>
  import {selfCookie,selfCode} from "../../self";

  export default {
        name: "logout",
        methods:{
          logout(){
            this.$cookies.get('checked')?(()=>{
              this.$cookies.remove(selfCookie)
            })():(()=>{
              this.$cookies.remove('loginName');
              this.$cookies.remove('password');
              this.$cookies.remove(selfCookie)
            })();
            this.$router.push('/login')
          }
        },
      created() {
          this.logout();
      }
    }
</script>

<style scoped>

</style>
