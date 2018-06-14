<template>
    <div class="page-container">
        <div id="container">
            <div class="container ">
                    <div class="title">
                        <p class="color1">Skills</p>
                        <p class="color3">实不相瞒这个网页我敲的</p>
                    </div>
                <div class="main">
                    <div class="skills-son1">
                        <div class="skills-content">
                            <div class="icon">
                                <i class="iconfont icon-html "></i>
                            </div>
                            <span class="skills-content-detail color2">谢老师这段话并不是真正的内容，他只是用来占地方的，你懂我的意思吧</span>
                        </div>
                            <div class="bottom"></div>
                    </div>
                    <div class="skills-son2">
                        <div class="skills-content">
                            <div class="icon">
                                <i class="iconfont icon-diannao "></i>
                            </div>
                            <span class="skills-content-detail ">谢老师这段话并不是真正的内容，他只是用来占地方的，你懂我的意思吧</span>
                            <div class="bottom"></div>
                        </div>
                    </div>
                    <div class="skills-son3">
                        <div class="skills-content">
                            <div class="icon">
                                <i class="iconfont icon-linggan "></i>
                            </div>
                            <span class="skills-content-detail color2">谢老师这段话并不是真正的内容，他只是用来占地方的，你懂我的意思吧</span>
                            <div class="bottom"></div>
                        </div>
                    </div>
                </div>
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
@import url("../assets/css/font_588793_da6j9kt2m52ep14i/iconfont.css");
#container {
  width: 1000px;
  margin: 100px auto 0;
}
.container {
  width: 960px;
  padding: 100px 15px;
  margin: 0 auto;
  position: relative;
  display: flex;
}

.title {
  margin-top: 40px;
  text-align: right;
  line-height: 1.5;
  width: 150px;
  padding-left: 30px;
}

.main {
  /* height: 500px; */
  margin-left: 100px;
  padding: 0 15px;
  flex-grow: 1;
  height: 250px;
  width: 0;
  display: flex;
}
.skills {
  background: #fafafa;
}
.skills-son1,
.skills-son2,
.skills-son3 {
  flex-grow: 1;
  width: 0;
  margin: 0 3px;
  position: relative;
  transition: 0.3s;
  cursor: pointer;
}

.skills-son1:hover .icon,
.skills-son1:hover .icon i {
  color: #ff2d2d;
  border-color: #ff2d2d;
  transform: scale(1.05, 1.05);
}
.skills-son2:hover .icon,
.skills-son2:hover .icon i {
  color: #00ffff;
  border-color: #00ffff;
}
.skills-son3:hover .icon,
.skills-son3:hover .icon i {
  color: #ffff00;
  border-color: #ffff00;
}
.skills-son1:hover,
.skills-son2:hover,
.skills-son3:hover {
  transform: translateY(-5px);
}
.skills-son1:hover .icon,
.skills-son2:hover .icon,
.skills-son3:hover .icon {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transform: scale(1.05, 1.05);
}
.skills-son1:hover .bottom,
.skills-son2:hover .bottom,
.skills-son3:hover .bottom {
  height: 10%;
}
.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0;
  overfolw: hidden;
  background: #cccccc;
  transition: 0.4s 0.2s;
}

.skills-son3,
.skills-son1 {
  background: #fff;
}

.skills-son2 {
  background: #17bed2;
}

.icon {
  width: 80px;
  height: 80px;
  border: 3px solid #515769;
  text-align: center;
  line-height: 80px;
  border-radius: 50%;
  transition: all 0.3s;
  margin: 20px auto;
}

.icon i {
  /* display: block; */
  font-size: 50px;
  color: #515769;
  transition: all 0.3s;
}

.skills-content-detail {
  width: 100%;
  padding: 10px 30px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 14px;
  text-indent: 0;
  display: block;
}
.color3 {
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  display: block;
}
</style>
