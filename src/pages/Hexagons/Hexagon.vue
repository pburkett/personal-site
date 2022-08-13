<template>
  <div style="position: relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="54.324000000000005 * sizeScalar"
      :height="62.856 * sizeScalar"
      :viewBox="`0 0 362.16 419.04`"
    >
      <path
        class="hex-path"
        transform="matrix(0 0.72 -0.72 0 360.72 2.2111206642071)"
        stroke="#ffffff"
        :fill="color"
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
export default {
  props: ["x", "y", 'globalOffset'],
  data() {
    return { color: "", sizeScalar: 1 };
  },
  methods: {
    getNoiseHexPair: function (offset) {
      let noise = 
    //   Math.round(
        Math.abs(
        perlin.get(this.x + offset +this.globalOffset , this.y + offset + this.globalOffset)) 
        // * 10000) / 10000 ;
      console.log(noise);
      let color_part_dec = 200 * noise;
      let out = Number(parseInt(color_part_dec, 10)).toString(16);
      if (out.length == 1) return out + out
      return out
    },
    getRBGColor(){
        `#${this.getNoiseHexPair(0.25)}${this.getNoiseHexPair(0.4)}${this.getNoiseHexPair(0.8)}`
    },
    getGrayscaleColor(){
        let val = this.getNoiseHexPair(0.25)
        return `#${val}${val}${val}`
    }
    
  },
  mounted() {
      this.color = this.getGrayscaleColor();

    setInterval(() => {
      this.color = this.getGrayscaleColor();
    }, 1000);
  },
};
</script>

<style>
.hex-path {
  transition: fill 2s linear;
}
</style>