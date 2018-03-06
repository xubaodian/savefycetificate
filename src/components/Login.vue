<template>
  <div id="login">
    <p>username:<input type="text" v-model="username"></p>
    <p>password:<input type="password"></p>

    <button @click="logon" title="登录">Logon</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'login',
  data(){
    return {
      username:'',
      roles:[]
    }
  },
  methods:{
    logon(){
      //此处登录验证，验证成功后返回用户角色和 ‘签名的token’，因为没写后台，所以直接用一个判断代替
      if(this.username === 'admin'){
        this.roles = ['admin','super','guest'];
      }
      else if(this.username === 'super'){
        this.roles = ['super','guest'];
      }
      else if(this.username === 'guest'){
        this.roles = ['guest'];
      }
      this.$store.dispatch('addRoles',{
        roles:this.roles
      }).then(()=>{
        console.log(this.roles);
        console.log(this.router);
        this.$router.addRoutes([this.router]);
        this.$router.push('/guest');
      })
    }
  },
  computed:{
      ...mapGetters({
        router:'getRouter'
      })
  }
}
</script>

<style>
</style>
