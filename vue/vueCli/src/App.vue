<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="goback"></button>
    <div><router-link to="/">首页</router-link>
    <router-link to="/test1">test1</router-link>
    <router-link :to="{name:'Test2',params:{username:'dabaolee',age:21}}">test2</router-link>
    <router-link to="/test3">test3</router-link>
    <router-link to="/testurl/5/dabaolee">testurl</router-link>
    <router-link to="/home">重定向</router-link>
    <router-link to="/re/3/shengchaowang">重定向带参</router-link>
    <router-link to="/count">count</router-link>
    </div>
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goback(){
      this.$router.go(-1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
  opacity: 0;
transition: opacity 0.5s;
}

</style>
