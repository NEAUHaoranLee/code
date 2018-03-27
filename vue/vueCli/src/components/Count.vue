<template>
    <div><h1>{{$store.state.count}}</h1>

    <button @click="$store.commit('add')">1</button></div>
</template>

<script>
import store from '@/vuex/store.js'
export default {
  data () {
      return {
          
      }
  }, 
  store,
  
}
</script>

<style scoped>

</style>
