<template>
<div>
    
    <h1>{{$route.params.index}}</h1>
    <img :src="$store.state.photolist[index].src" alt="">
</div>
</template>

<script>
import Vue from 'vue'
import store from '@/vuex/store.js'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
export default {
  store,
  data () {
    return {
      index:this.$route.params.index
    }
  },
  created(){
    console.log(this.$store.state.photolist);
  }
}
</script>
<style scoped>

</style>
