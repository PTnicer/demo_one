<template>
      <button :class="className"></button>
</template>
<script>
export default {
  props:{
    className:{
      type:String,
      default:"button"
    },
    type:{
      type:String,
      default:'normal'
    },
    name:{
      type:String,
      default:"按钮"
    }
  }
}
</script>