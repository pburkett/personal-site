<template>
  <div
    style="
      height: 50vh;
      overflow: hidden;
      width: 100vw;
      height: 100vh;
      position: relative;
    "
  >
    <Controls :colors="colors" @add-color="addColor($event)" />
    <div
      class="row"
      :class="{ 'offset-row': i % 2 == 0 }"
      style="display: flex; justify-content: center"
      v-for="i in 20"
      :key="i"
    >
      <Hexagon
        v-for="n in 40"
        :key="n"
        :x="n"
        :y="i"
        :colors="colors"
        :global-offset="globalOffset"
        :speed="speed"
        :border-color="borderColor"
      />
    </div>
  </div>
</template>

<script>
import Hexagon from "./Hexagon.vue";
import Controls from "./Controls";
import colorService from "./ColorService";
export default {
  name: "Hexagons",
  components: {
    Hexagon,
    Controls,
  },
  methods: {
    addColor: function (e) {
      this.colors.push(e)
    },
  },
  data() {
    return {
      globalOffset: Math.random(),
      colors: colorService.getHexSet(),
      speed: 800,
      borderColor: 'ffffff'
    };
  },
  mounted() {
    setInterval(() => {
      this.globalOffset += 0.3;
      this.borderColor = colorService.getNoisyColor(this.colors, this.globalOffset,this.globalOffset, )
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