<template>
<!-- <home-page/> -->
<Hexagons/>
</template>

<script>
// import HomePage from './pages/Home/HomePage.vue'
import Hexagons from './pages/Hexagons/Hexagons.vue'
export default {
  name: 'App',
  components: {
    // HomePage,
    Hexagons
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
