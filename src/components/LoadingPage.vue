<template>
  <div class="loading-page">
    <div class="center-block">
      <div class="logo"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.loading-page {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgb(82, 82, 82);
  background: linear-gradient(180deg, rgba(82, 82, 82, 1) 0%, rgba(0, 31, 29, 1) 100%);
  z-index: 100;
  .center-block {
    width: 650px;
    height: 290px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: zoomToLeftTop 1.6s ease-in-out;
    animation-delay: 1s;
    .logo {
      width: 100%;
      height: 100%;
      background-image: url('../assets/image/logo2x.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
}
</style>