<template>
<div class="page-container">
    <div id="container">
      <div id="picture-container">
        <img src="../../static/img/introduce/mmexport1508585467324.jpg" alt="" srcset="" id="picture">
      </div>
    <div id="content">
        <p>大家好 我是Vae
            这是我即将发表的首张 独创专辑 自定义
            里面的推荐曲目
            词曲编曲都是我自己 希望这首歌曲
            能在这个寒冷的冬天 带给大家一种 温暖的感觉
            天空好想下雨
            我好想住你隔壁
        </p>
        <p>这是我即将发表的首张 独创专辑 自定义
            里面的推荐曲目
        </p>
    </div>

</div>
</div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
#container {
  font-size: 1.2rem;
  width: 850px;
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%, -60%);
  text-align: center;
}
#picture-container {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 50%;
  border: 0.5px solid #fff;
  overflow: hidden;
}
#picture {
  width: 150px;
  transform: translate(0, -15px);
}
#content {
  text-indent: 2.4rem;
  text-align: justify;
}
p {
  padding-top: 30px;
}
</style>
