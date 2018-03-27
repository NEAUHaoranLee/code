<template>
   <div class="header" :style="{backgroundColor:bgColor}">
        <span class="home" ><router-link to="/" @click.native="$emit('change','Movie')">首页</router-link></span>
        <h2 class="title">
            <slot name="title">默认值</slot>
        </h2>
   </div>
</template>

<script>
export default {
  props: ["bgColor"]
}
</script>

<style scoped>
.header{
    height: 1rem;
    line-height: 1rem;
    position: fixed;
    top: 0;
    width:100%;
    color:white;
}
.title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
}
.home{
    margin-left:0.2rem ;
}
</style>
