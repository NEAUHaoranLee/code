<template>
  <div id="app">
        <common-footer bgColor="rgb(33, 150, 243)"></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/Header'
import CommonFooter from '@/components/common/Footer'
import store from '@/vuex/fun.js'
export default {
  name: 'App',
  components: {
        CommonHeader,
        CommonFooter
    },
    store,
     
}
</script>

<style>

</style>
