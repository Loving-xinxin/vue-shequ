<template>
  <div class="wrap">
    <Header />
    <router-view></router-view>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "./components/Header";
// import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Header
    // Footer
  }
};
</script>

<style>
body {
  background-color: #e1e1e1;
  padding-left: 5px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrap {
  height: 100vh;
  width: 100vw;
}
</style>
