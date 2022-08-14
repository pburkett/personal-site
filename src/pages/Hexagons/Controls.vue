<template>
  <div class="controls">
    <div
      style="display: flex; justify-content: end"
      @click="isClosed = !isClosed"
    >
      <ion-icon
        name="caret-down-outline"
        class="hydrated"
        :class="{ 'rotate-180': !isClosed, 'rotate-0': isClosed }"
        style="
          font-size: 40px;
          cursor: pointer;
          transition: transform 1s ease;
          visibility: visible !important;
        "
      ></ion-icon>
    </div>
    <div
      :style="{
        maxHeight: isClosed ? '0px' : '80vh',
        maxWidth: isClosed ? '32px' : '80vw',
        opacity: isClosed ? 0 : 1,
      }"
      style="
        transition: max-height 1s ease, max-width 1s ease, opacity 1s ease;
      "
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
          <p
            :style="{ color: invertColor(color) }"
            style="font-weight: 600; margin-top: 0px; padding-top: 10px"
          >
            #{{ color }}
          </p>
        </div>
      </div>
      <div
        style="
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: center;
          margin-top: 20px;
        "
      >
        <label for="new-color">
          <ion-icon
            name="add-circle-outline"
            class="hydrated"
            style="
              font-size: 32px;
              cursor: pointer;
              transition: transform 1s ease;
              visibility: visible !important;
            "
          ></ion-icon>
        </label>
        <input
          id="new-color"
          style=""
          @change="pickColor($event)"
          type="color"
        />
      </div>
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
      return colorService.invertColor(hex, true);
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
  max-height: 60vh;
  max-width: 60vw;
  overflow:scroll;
}
@media only screen and (max-width: 728px) {
  .color-container {
    display: block;
  }
  .color-button {
    padding: 0px 5px 20px 5px;
  }
  .color-button:last-child {
    border-radius: 0px 0px 6px 6px;
  }
  .color-button:first-child {
    border-radius: 20px 20px 0px 0px;
  }
  .color-button:only-child {
    border-radius: 6px 6px 20px 20px !important;
  }
}
</style>