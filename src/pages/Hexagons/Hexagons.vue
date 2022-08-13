<template>
  <div style="height: 50vh; overflow: hidden; width: 100vw">
    <div
      class="row"
      :class="{ 'offset-row': i % 2 == 0 }"
      style="display: flex; justify-content: center"
      v-for="i in 20"
      :key="i"
    >
      <!-- <Hexagon v-for="n in 40" :key="n"  :x="n" :y="i" :global-offset="globalOffset" /> -->
      <ClassHexagon
        v-for="n in 40"
        :key="n"
        :x="n"
        :y="i"
        :colors="colors"
        :global-offset="globalOffset"
        :speed="speed"
      />
    </div>
  </div>
</template>

<script>
// import Hexagon from "./Hexagon.vue";
import ClassHexagon from "./ClassHexagon.vue";
import perlin from "../../perlin.js";

export default {
  name: "Hexagons",
  components: {
    // Hexagon,
    ClassHexagon,
  },
  data() {
    return {
      globalOffset: Math.random(),
      colors: [
        "2a4858",
        "215d6e",
        "08737f",
        "00898a",
        "089f8f",
        "39b48e",
        "64c987",
        "92dc7e",
        "c4ec74",
        "fafa6e",
      ],
      speed: 1000,
    };
  },
  mounted() {
    perlin.seed();
    setInterval(() => {
      this.globalOffset += 0.1;
    }, this.speed);
  },
};
</script>

<style>
.offset-row {
  transform: translateX(calc(27.5px * 1));
}
.row {
  margin-top: calc(-21px * 1);
}
</style>