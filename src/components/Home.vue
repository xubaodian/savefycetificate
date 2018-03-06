<template>
  <div id="home">
    <ul>
      <li v-for="item in router.children">
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'home',
  data(){
    return{
      base:'home'
    }
  },
  methods:{

  },
  computed:{
    ...mapGetters({
      router:'getRouter'
    })
  }
}
</script>

<style>
ul{
  list-style-type:none;
  float:left;
  padding: 0;
  margin: 0;
  width: 200px;
  height: 100%;
  border:1px black solid ;
}
</style>
