<template>
      <div class="box">
          <login-box></login-box>
      </div>
</template>
<script>
import LoginBox from '@/components/login/LoginBox.vue'
import random from '@/js/random.js'
export default {
  components: { LoginBox },
  name:"Login",
  mounted(){
    //强势一点，别惯着浏览器
    $('html').height("100%").width("100%").css({margin:0,padding:0})
    $('body').height("100%").width("100%").css({margin:0,padding:0})
    console.log(random.color())
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/css/global';
    .box{
      width: 100%;
      height: 100%;
      // background-color: rgb(131, 149, 236);
      @include bgImg('../assets/bg.jpg')
    }
</style>