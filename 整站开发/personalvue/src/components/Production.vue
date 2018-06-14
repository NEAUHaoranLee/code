<template>
<div class="page-container">
    <p id="title">项目实战</p>
    <div id="container">
        <div v-for="(item,index) in imgUrl" class="productions" >
            <img :src="item" alt="">
            {{item}}

        </div>
        

    </div>


</div>    
</template>
<script>
export default {
  data() {
    return {
      imgUrl: [
        "../../static/img/productions/mi.png",
        "../../static/img/productions/树一树小程序.png",
        "../../static/img/productions/personal.png"
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
.productions {
  flex: 1;
  width: 0;
  height: 210px;
  margin: 0 20px;
  /* background: #ffffff; */
  border-radius: 50%;
  transition: 0.3s;
  overflow: hidden;
}
.productions:hover {
  transform: scale(1.05, 1.05);
  box-shadow: 0px 0px 20px #00a2ff;
}
.productions img {
  width: 100%;
  height: 100%;
}
</style>
