<template>
  <div style="margin-left: -50px; ">
    <div
      class="row"
      :class="{ 'offset-row': i % 2 == 0 }"
      style="display: flex"
      v-for="i in 20"
      :key="i"
    >
      <Hexagon v-for="n in 40" :key="n"  :x="n" :y="i" :global-offset="globalOffset" />
    </div>
  </div>
</template>

<script>
import Hexagon from "./Hexagon.vue";
export default {
  name: "Hexagons",
  components: { Hexagon },
  data() {
    return { color: "#0000ff", globalOffset: Math.random() };
  },
  mounted() {
        setInterval(() => {
            this.globalOffset += 1
    }, 1000);
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