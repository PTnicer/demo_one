<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <el-container>
      <el-aside width="200px" hight="100%">
        <navigation></navigation>
      </el-aside>
      <el-main>
        <notable></notable>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
// import $ from 'jquery'
// import axios from 'axios'

import Notable from "@/components/home/Notable.vue";
import Navigation from "@/components/home/Navigation.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld,
    Navigation,
    Notable
  },
  mounted(){
    this.axios.get('/api/getTest').then(function(res){
      console.log(res)
    }).catch(function(res){
      console.log(res)
    })
  }
};
</script>
