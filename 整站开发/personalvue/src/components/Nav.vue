<template>
    <div id="nav">
      <div id="nav-title">
        <span id="title1">传送</span>
        <span id="title2">门</span>
      </div>
        <div id="router">
          <router-link to="/">Index</router-link> 
          <router-link to="/introduce">Introduce</router-link>
          <router-link to="/school">School</router-link>
          <router-link to="/skills">Skills</router-link>
          <router-link to="/production">Production</router-link>
          <router-link to="/contect">Contect</router-link>
        </div>
    </div>
</template>

<script>
export default {};
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
</style>
