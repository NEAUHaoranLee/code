<template>
<div class="page-container">
    <div id="container">
      <div id="picture-container">
        <img src="../../static/img/introduce/mmexport1508585467324.jpg" alt="" srcset="" id="picture">
      </div>
    <div id="content">
        <p>
         您好，我叫李浩然，来自黑龙江省哈尔滨市东北农业大学，性格开朗，乐于钻研，遇到难题眼前一亮
         对于一切未知的事物充满了好奇，是一名合格的代码强迫症患者。正在学习和使用的前端框架是Vue，当然我也正在钻研Javascript的
         一些深层次原理，我认为只要把js基础学好那么左右的框架都是手到擒来，这就是我-- 兴趣使然的一只前端攻城狮。
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
