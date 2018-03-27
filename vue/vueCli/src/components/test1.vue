<template>    
<div>
    <h1>test1</h1>
    <h1>{{msg}}</h1>
    <transition name="fade" mode="out-in"> 
    <router-view></router-view>
    </transition>
    
</div>
</template>
<script>
export default {
  data () {
      return {
          msg:"这是一个测试",
          
      }
  } ,
  beforeRouteEnter(to, from, next) {
    console.log("进入之前");
    next();
  },
          beforeRouteLeave(to, from, next) {
    console.log("离开之前");
    next();
  }
}
</script>
<style scoped>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
transition: opacity 0.5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
transition: opacity 0.5s;
}
</style>
