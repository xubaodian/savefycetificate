<template>
  <div id="admin">
    <p>这个是管理员页面，只有管理可以看到</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'admin',
  mounted(){
    console.log(this.$router);
  }
}
</script>

<style>
</style>
