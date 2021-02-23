<template>
    <div class="login_box">
      <div class="title"></div>
      <div class="name_box">
        <span>{{}}</span>
        <input />
      </div>
      <div class="password_box">
        <span>{{}}</span>
        <input />
      </div>
      <div class="validation_box">
        <span>{{}}</span>
        <input />
      </div>
      <div class="button_box"></div>
    </div>
</template>
<script>
export default {
  name:"loginBox"
}
</script>
<style lang="scss" scoped>
    .login_box{
        width: 400px;
        height: 350px;
        border: 1px solid ;
    }
</style>