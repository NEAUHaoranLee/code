<template>    
<div>
    <h1>test1.2</h1>
    <h1>{{msg}}</h1>
    <router-view></router-view>
</div>
</template>
<script>
export default {
  data () {
      return {
          msg:"这是一个子路由测试2"
      }
  }
}
</script>
<style scoped>

</style>
