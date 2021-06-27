<template>
  <div id="app">
    <Navbar />
    <main>
        <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  background-image: url(./assets/bgimg.jpg);
  background-size: cover;
  background-position: center;
}

</style>
