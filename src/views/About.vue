<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>this is a test</h2>
    <img :src="src"/>
  </div>
</template>
<script>
import imgSrc from "./../assets/image/1.jpg";
export default {
  name:'about',
  data(){
    return{
      src:imgSrc
    }
  }
}
</script>
