<template>
    <ul class="footer" :style="{backgroundColor:bgColor}">
            <li><router-link to="/" @click.native="$emit('change','Movie')">电影</router-link></li>
            <li><router-link to="/music" @click.native="$emit('change','Music')">音乐</router-link></li>
            <li><router-link to="/book" @click.native="$emit('change','Book')">书籍</router-link></li>
            <li><router-link to="/picture" @click.native="$emit('change','Picture')">图片</router-link></li>
        </ul>
</template>

<script>
export default {
  props: ['bgColor'],
  change(){

  }
}
</script>

<style scoped>
.footer{
    height: 1rem;
    background: rgb(33, 150, 243);
    line-height: 1rem;
    position: fixed;
    bottom: 0;
    width:100%;
    display: flex;
}
.footer li{
    flex-grow: 1;
    text-align: center;
}

.footer li a{
    color: #cccccc;
}
.footer li a.router-link-exact-active{
    color:white;
}
</style>
