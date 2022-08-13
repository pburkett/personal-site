<template>
  <div style="position: relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="54.324000000000005 * sizeScalar"
      :height="62.856 * sizeScalar"
      :viewBox="`0 0 362.16 419.04`"
    >
      <path
      :style="{'transitionDuration':speed * 2 + 'ms' }"
        class="hex-path"
        transform="matrix(0 0.72 -0.72 0 360.72 2.2111206642071)"
        stroke="#ffffff"
        :fill="'#' + color"
        stroke-width="20"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="2"
        d="M575.929 249.385L431.947 498.769L143.982 498.769L0 249.385L143.982 0L431.947 0L575.929 249.385Z"
      ></path>
    </svg>
  </div>
</template>

<script>
import colorService from "./ColorService"

export default {
  props: ["x", "y", "colors", 'globalOffset', 'speed'],
  data() {
    return { color: "", sizeScalar: 1  };
  },

  mounted() {
   this.color = colorService.getNoisyColor(this.colors, this.x + this.globalOffset, this.y + this.globalOffset, )
    setInterval(() => {
   this.color = colorService.getNoisyColor(this.colors, this.x + this.globalOffset, this.y + this.globalOffset, )
    }, this.speed);
  },
};
</script>

<style>
.hex-path {
  transition: fill linear;
}
</style>