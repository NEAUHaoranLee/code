<template>
<div class="page-container">
    <div id="container">
      <strong>Welcome!</strong>
      <h1>This is 李大宝's </h1>
      <br>
      <h2>personal website</h2>
      <br>
      <p>Nothing is difficult if you put your heart in it</p>
      div
    </div>



</div>
   
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeBg() {
      setInterval(() => {
        this.bgImg++;
      }, 1000);
    }
  },
  created() {
    // this.changeBg();s
    // this.getImgs();
  }
};
</script>

<style scoped>
/* .img {
  width: 100px;
} */

#container {
  width: 700px;
  margin: 150px auto 0;
  color: white;
  text-align: center;
  overflow: hidden;
}
strong {
  font-size: 50px;
}
h1 {
  font-size: 60px;
}
</style>
