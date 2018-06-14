<template>
    <div id="nav">
      <div id="nav-title">
        <span id="title1">传送</span>
        <span id="title2">门</span>
      </div>
        <div id="router">
          <ul>
            <li :class="{link,select:isSelect==index}"  @click="navClick(index)" v-for="(item,index) in $store.state.path" :key="index">{{item}}</li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      a: "1212",
      link: "link",
      isSelect: 0
    };
  },
  methods: {
    navClick(i) {
      this.$emit("nav", i);
      this.isSelect = i;
    },
    changeSelect(i) {
      this.isSelect = i;
    }
  },
  mounted() {}
};
</script>


<style scoped>
#nav {
  height: 80px;
  width: 100%;
  background: transparent;
  position: fixed;
  z-index: 100;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  top: 0;
}
#nav-title {
  position: absolute;
  width: 100px;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
}
#router {
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  margin-left: 40px;
}
#title1,
#title2 {
  font-size: 20px;
  font-weight: 1000;
}

#title1 {
  color: #fff;
  /* color: rgb(95, 95, 95); */
  transition: all 0.3s;
}

#title2 {
  color: #00e6e6;
}
.link {
  float: left;
  margin: 0 10px;
  color: rgb(73, 73, 73);
  transition: 0.2s;
}
.link:hover {
  color: rgb(53, 46, 46);
  transform: scale(1.1, 1.1);
  cursor: pointer;
}
.select {
  color: rgb(15, 15, 15);
  transform: scale(1.1, 1.1);
}
</style>
