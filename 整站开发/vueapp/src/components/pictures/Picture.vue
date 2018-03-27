<template>
<div class="container">
  <ul class="clearfix">
    <li v-for="(obj,index) in photolist">
     <router-link :to='"/picture/picturedetails/"+index'> <img :src="obj.src" alt=""></router-link>
    </li>
  </ul>
</div>

</template>

<script>
import axios from 'axios'
import store from '@/vuex/store.js'
export default {
    components: {
      axios,
    }, 
    store,
    data () {
      return {
        photolist:[]
      }
    },
    methods:{
      onTap(){
        console.log(onTap);
      }
    },
    created () {
      axios.get('static/photodata.json').then((res)=>{
          this.photolist=res.data.photoData;
          this.$store.commit('getList',this.photolist)
      })
    }
}
</script>
<style scoped>
.container ul{
  margin: 1rem 0;
}
.container li{
  width: 50%;
  float: left;
}
.clearfix::after{
  content: '';
  display: block;
  clear: both;
}

</style>
