<template>
  <div id="admin">
    <p>this is admin</p>
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
