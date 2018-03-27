<template>    
<div>
    <h1>testurl</h1>
    <h1>ID:{{$route.params.userid}}</h1>
    <h1>name:{{$route.params.username}}</h1>
</div>
</template>
<script>
export default {
  data () {
      return {
          msg:"这是一个url传参测试"
      }
  }
}
</script>
<style scoped>

</style>
