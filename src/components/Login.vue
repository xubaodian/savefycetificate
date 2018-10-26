<template>
  <div id="login">
    <p>username:<input type="text" v-model="username"></p>
    <p>password:<input type="password" v-model="password"></p>

    <button @click="logon" title="登录">Logon</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods:{
    logon(){
      //此处登录验证，验证成功后返回用户角色和 ‘签名的token’，因为没写后台，所以直接用一个判断代替
      //下面代码模拟登录
      if (this.username === 'admin' && this.password === '123456') {
        this.$store.commit('addRoles', {
          roles: 'admin'
        });
        this.$router.push('/home');
      } else if (this.username === 'guest' && this.password === '123456') {
        this.$store.commit('addRoles', {
          roles: 'user'
        });
        this.$router.push('/home');
      }
    }
  },
  computed:{
  }
}
</script>

<style>
</style>
