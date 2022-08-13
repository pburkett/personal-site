<template>
  <div class="controls">
    <div
      :style="{ maxHeight: isClosed ? '0px' : '1000px', maxWidth: isClosed ? '50px' : '1000px' }"
      style="overflow: hidden; transition: max-height 2s ease, max-width 2s ease"
    >
      <div
        style="
          display: flex;
          width: 100%;
          justify-content: space-between;
          font-weight: 700;
          font-size: 18px;
        "
      >
        <h5>Most</h5>
        <h5>Least</h5>
      </div>
      <div class="color-container">
        <div
          v-for="color in colors"
          :key="color"
          :style="{ backgroundColor: '#' + color }"
          class="color-button"
        >
          <p :style="{ color: invertColor(color) }" style="font-weight: 600">
            #{{ color }}
          </p>
        </div>
      </div>
      <input
        style="margin-top: 20px"
        @change="pickColor($event)"
        type="color"
      />
    </div>

    <div
      style="display: flex; justify-content: end"
      @click="isClosed = !isClosed"
    >
      <ion-icon
        name="caret-down-outline"
        class="md icon-large hydrated"
        :class="{ 'rotate-180': !isClosed, 'rotate-0': isClosed }"
        style="transition: transform 1s ease; visibility: visible !important"
        size="large"
      ></ion-icon>
    </div>
  </div>
</template>

<script>
import colorService from "./ColorService";
export default {
  props: ["colors"],
  data() {
    return {
      newColor: "",
      isClosed: true,
    };
  },
  methods: {
    pickColor(e) {
      this.$emit("addColor", e.target.value.slice(1));
    },
    invertColor(hex) {
      colorService.invertColor(hex, true);
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
  box-shadow: 0px 8px 8px 5px rgba(0, 0, 0, 0.3);
  top: 0px;
  margin-top: 8px;
}
.color-button {
  padding: 0px 5px 20px 5px;
}
.color-button:last-child {
  border-radius: 0px 6px 20px 0px;
}
.color-button:first-child {
  border-radius: 6px 0px 0px 20px;
}
.color-button:only-child {
  border-radius: 6px 6px 20px 20px !important;
}
.rotate-180 {
  transform: rotateZ(180deg);
}
.rotate-0 {
  transform: rotateZ(0deg);
}
.color-container {
  display: flex;
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.3);
  border-radius: 6px 6px 20px 20px;
  margin-left: 20px;
  margin-right: 20px;
}
@media only screen and (max-width: 728px) {
    .color-container {
    display: block !important;
    }
}
</style>