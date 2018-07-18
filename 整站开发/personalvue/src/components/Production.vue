<template>
<div class="page-container">
    <p id="title">项目实战</p>
    <div id="container">
        <div v-for="(item,index) in imgUrl" class="productions" :key="index">
            <div id="mask">
            <span class="content">
              {{item.content}}
            </span>
            </div>
            <img :src="item.src" alt="">
           
        </div>

    </div>


</div>    
</template>
<script>
export default {
  data() {
    return {
      imgUrl: [
        {
          src: "../../static/img/productions/mi.png",
          content: "小米仿站"
        },
        {
          src: "../../static/img/productions/shu.png",
          content: "树一树微信小程序"
        },
        {
          src: "../../static/img/productions/personal.png",
          content: "个人网站"
        }
      ]
    };
  }
};
</script>
<style scoped>
#title {
  text-align: center;
  font-size: 30px;
  margin: 100px 0;
}
#container {
  width: 750px;
  display: flex;
  margin: 0 auto;
}
#mask {
  width: 100%;
  height: 100%;
  /* opacity: 0.5; */
  background: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0);
  position: relative;
  z-index: 2;
  transition: 0.4s;
}
.content {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.productions {
  flex: 1;
  width: 0;
  height: 210px;
  margin: 0 20px;
  /* background: #ffffff; */
  border-radius: 50%;
  transition: 0.3s;
  overflow: hidden;
  position: relative;
}
.productions:hover {
  transform: scale(1.05, 1.05);
  box-shadow: 0px 0px 20px #00a2ff;
}
.productions:hover #mask {
  background: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 1);
}
.productions img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
