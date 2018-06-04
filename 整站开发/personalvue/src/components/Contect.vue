<template>
    <div class="page-container">
       <div id="container">
            <p id="title"><span id="t1">一些</span><span id="t2"><span :style="{color:c1}">骚</span><span :style="{color:c2}">话</span></span></p>
            <div id="content">
                这是本网站的最后一页了，不敢想象我真的敲出了我自己的个人网页（虽然还有很多需要改进的地方）
                ，我觉得最好的学习是实践，搜索学习，再实践改善，总结。没有结果的看书学习是伪用功，可能短时间会了解一些东西，但是很快会忘，还不会用，只有自己真正去实践才会留下深刻印象，
                在成长的道路上，我们不要给自己设定界限，只要拥有成长的力量，就能不断超越自己。今后也继续努力    。
            </div>
            

       </div>
    <div id="contect-me">
        <div id="el-container">
            <div class="el">git</div>
            <div class="el">qq</div>  
            <div class="el">wx</div>
            <div class="el">weibo</div>
            <div class="el">email</div>
        </div>
    </div>


    </div>
</template>
<script>
export default {
  data() {
    return {
      c1: "rgb(255, 140, 0)",
      c2: "rgb(255, 72, 0)"
    };
  }
};
</script>
<style scoped>
#container {
  width: 400px;
  margin: 100px auto;
}
#title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5em;
}

#content {
  width: 100%;
  /* height: 300px; */
  text-align: center;
  margin-bottom: 50px;
}
#t1 {
  font-size: 0.1em;
  padding-right: 5px;
}
#c1 {
  color: rgb(255, 72, 0);
}
#contect-me {
  /* border-top: 1px solid #ffffff; */
  width: 350px;
  margin: 0 auto;
}
#el-container {
  height: 50px;
  width: 350px;
  margin: 0 auto;
}
.el {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  float: left;
  margin: 10px 15px 0;
}
</style>