<template>
  <div class="golden-rect">
    <div class="golden-left">
      <div class="left-arc">
        <div class="circle"></div>
        <div class="wedge"></div>
      </div>
    </div>
    <div class="golden-right"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.golden-rect {
  aspect-ratio: 16/9;
  width: 100vw;
  display: flex;
}
.golden-left{
  position: relative;
  width: 61.8%;
height:100%;
overflow: hidden;
}
.golden-right {
height: 100%;
width:39.2%;
}
.left-arc {
  position: absolute;
  top:50%;
  left:50%;
  width:100%;
  height:100%;
  background: blue;
}
.left-arc > .circle {
  position: absolute;
    top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 50%;
  background: white;
  height: 200%;
  width: 200%;
}
.wedge {
  z-index: -10;
   position: absolute;
    top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
  background: purple;
  height: 190%;
  width: 190%;
}
</style>