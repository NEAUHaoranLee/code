<template>
  <div id="app">
    <Nav></Nav>
    <div class="btn" @click="test">
      {{$store.state.index}}
    </div>
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
      transition: "",
      index: 0
    };
  },
  computed: {},
  methods: {
    test() {
      let index = this.$store.state.index;
      console.log(this.$store.state.path[index]);
      this.$router.push({ path: "/" + this.$store.state.path[index] + "" });
      this.transition = "left";
      console.log(this.transition);
    },
    changePage(e) {
      //ie&其他
      if (e.wheelDelta) {
        if (parseInt(e.wheelDelta) > 0) {
          this.transition = "slide-right";
          $store.commit("front");
        } else {
          this.transition = "slide-left";
          $store.commit("back");
        }
      } else if (e.detail) {
        //Firefox
        if (parseInt(e.detail) > 0) {
        } else {
        }
      }
      console.log(e.wheelDelta);
    }
  },
  mounted() {
    window.onmousewheel = this.changePage;
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
  background: rgba(0, 0, 0, 0.4);
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
  transition: all 0.5s;
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
