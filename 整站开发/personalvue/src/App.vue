<template>
  <div id="app" :style="{backgroundPosition:'30% '+p+'%'}" >
    <Nav @nav="navChangePage" ref="nav"></Nav>
    <transition :name="transition">
      <router-view class="trans"></router-view>
    </transition>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  components: {
    Nav
  },
  name: "App",
  data() {
    return {
      p: 0,
      flag: true,
      transition: "",
      index: 0,
      path: ["", "introduce", "school", "skills", "production", "contect"]
    };
  },
  computed: {},
  methods: {
    mousewheel(e) {
      let store = this.$store;
      let index = store.state.index;
      //ie&其他
      if (e.wheelDelta) {
        if (parseInt(e.wheelDelta) > 0) {
          this.transition = "slide-right";
          if (this.index > 0) {
            this.index--;
            this.p = this.p - 20;
          }
          this.changePage();
          this.$refs.nav.changeSelect(this.index);
        } else {
          this.transition = "slide-left";
          if (this.index < 5) {
            this.index++;
            this.p = this.p + 20;
          }
          this.changePage();
          this.$refs.nav.changeSelect(this.index);
        }
      } else if (e.detail) {
        //Firefox
        if (parseInt(e.detail) > 0) {
        } else {
        }
      }
    },
    changePage() {
      this.flag = false;
      this.$router.push({ path: "/" + this.path[this.index] + "" });
      setTimeout(() => {
        this.flag = true;
      }, 300);
    },
    navChangePage(i) {
      if (this.index > i) {
        this.transition = "slide-right";
      } else {
        this.transition = "slide-left";
      }
      this.index = i;
      this.p = i * 20;
      this.changePage();
    }
  },
  mounted() {
    var timer;
    window.onmousewheel = e => {
      e.preventDefault();
      if (this.flag) {
        this.mousewheel(e);
      }
    };
  }
};
</script>

<style>
.btn {
  position: absolute;
  z-index: 100;
  width: 100px;
  height: 100px;
  background: #cccccc;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  height: 100%;
}

body {
  height: 100%;
}
body::-webkit-scrollbar {
  display: none;
}
ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  border: 0;
}

body,
html {
  height: 100%;
}
#app {
  height: 100%;
  width: 100%;
  background: url("../static/img/01.jpg") no-repeat rgba(0, 0, 0, 0.4);
  background-size: 130%;
  transition: all 0.3s;
}
.page-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background: rgba(0, 0, 0, 0.4); */
  color: #fff;
  overflow: hidden;
}
.color1 {
  color: #515769;
  font-weight: 1000;
  font-size: 35px;
}

.color2 {
  color: #a6a7aa;
  font-weight: 600;
  font-size: 14px;
  display: block;
}
.trans {
  transition: all 0.3s;
}
.bg {
  position: absolute;
  width: 100%;
  /* height: 100%; */
  /* opacity: 0.4; */
  z-index: -10;
}
.slide-left-enter,
.slide-right-leave-active {
  /* opacity: 0; */
  transform: translate(0, 80%);
}

.slide-left-leave-active,
.slide-right-enter {
  /* opacity: 0; */
  transform: translate(0, -80%);
}
</style>
