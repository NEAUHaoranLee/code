<template>    
<div>
    <h1>test1.1</h1>
    <h1>{{msg}}</h1>
    <h1>{{$route.params.username}}</h1>
    <h1>{{$route.params.age}}</h1>
    <router-view></router-view>
</div>
</template>
<script>
export default {
  data () {
      return {
          msg:"这是一个子路由测试1"
      }
  }
}
</script>
<style scoped>

</style>
