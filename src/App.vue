<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/login">Login</router-link>
  </div>
  <router-view /> -->
  <div style="width:100%;height:100%;background:green">
      <Login></Login>
  </div>
</template>
<script>
import $ from 'jquery';
import echarts from "echarts";
import Login from '@/views/Login.vue';
export default {
  components: { Login },
  name: "Home",
  data() {
    return {};
  },
  mounted(){
      console.log("here")
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
