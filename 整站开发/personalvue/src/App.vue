<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  components: {
    Nav
  },
  name: "App"
};
</script>

<style>
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
.page-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  color: #fff;
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
</style>
