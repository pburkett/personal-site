<template>
  <div class="controls">
    <div style="display: flex; width: 100%; justify-content: space-between">
      <h5>Most</h5>
      <h5>Least</h5>
    </div>
    <div style="display: flex">
      <div
        v-for="color in colors"
        :key="color"
        :style="{ backgroundColor: '#' + color }"
        class="color-button"
      >
        <p
          :style="{ color: invertColor(color, true) }"
          style="font-weight: 600"
        >
          #{{ color }}
        </p>
      </div>
    </div>

    <input @change="pickColor($event)" type="color" />
    <button
      :style="{ border: '#ffffff' }"
      style="border-width: 5px; border-radius: 20px; border-style: solid"
      @click="addColor()"
    >
      Add
    </button>
  </div>
</template>

<script>
export default {
  props: ["colors"],
  data() {
    return {
      newColor: "",
    };
  },
  methods: {
    pickColor(e){
        this.newColor = e.target.value.slice(1);
    },
    addColor(){
        console.log(this.newColor);
        this.$emit('addColor', this.newColor)
    },
    invertColor: function (hex, bw) {
      if (hex.indexOf("#") === 0) {
        hex = hex.slice(1);
      }
      // convert 3-digit hex to 6-digits.
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
        throw new Error("Invalid HEX color.");
      }
      var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
      if (bw) {
        // https://stackoverflow.com/a/3943023/112731
        return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
      }
      // invert color components
      r = (255 - r).toString(16);
      g = (255 - g).toString(16);
      b = (255 - b).toString(16);
      // pad each with zeros and return
      return "#" + this.padZero(r) + this.padZero(g) + this.padZero(b);
    },
    padZero: function (str, len) {
      len = len || 2;
      var zeros = new Array(len).join("0");
      return (zeros + str).slice(-len);
    },
  },
};
</script>

<style>
.controls {
  background-color: white;
  border-radius: 20px;
  position: absolute;
  padding: 10px;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
}
.color-button {
  padding: 0px 5px 20px 5px;
}
.color-button:last-child {
  border-radius: 0px 20px 20px 0px;
}
.color-button:first-child {
  border-radius: 20px 0px 0px 20px;
}
</style>