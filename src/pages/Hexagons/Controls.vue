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
          :style="{ color: invertColor(color) }"
          style="font-weight: 600"
        >
          #{{ color }}
        </p>
      </div>
    </div>

    <input @change="pickColor($event)" type="color" />
  </div>
</template>

<script>
import colorService from "./ColorService"
export default {
  props: ["colors"],
  data() {
    return {
      newColor: "",
    };
  },
  methods: {
    pickColor(e){
        this.$emit('addColor', e.target.value.slice(1))
    },
    invertColor(hex){
        colorService.invertColor(hex,true)
    }
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
  border-radius: 0px 10px 20px 0px;
}
.color-button:first-child {
  border-radius: 10px 0px 0px 20px;
}
.color-button:only-child {
  border-radius: 10px 10px 20px 20px !important;
}
</style>