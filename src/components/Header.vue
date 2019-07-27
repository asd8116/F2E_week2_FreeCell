<template>
  <header class="my-header">
    <div class="logo"></div>
    <div class="information-panel">
      <div class="time-clock">
        <i class="far fa-clock"></i>
        <span>00:00:00</span>
      </div>
      <div class="time-move">
        <i class="times">1</i>
        <span>Moves</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header.my-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 105px;
    width: 240px;
    background-image: url('../assets/image/logo.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .information-panel {
    display: flex;
    padding-top: 20px;
    .time-clock {
      margin-right: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        margin-right: 1rem;
        font-size: 2rem;
        color: white;
      }
      span {
        color: white;
        font-size: 1.5rem;
      }
    }
    .time-move {
      i,
      span {
        color: white;
        font-size: 1.5rem;
        font-style: normal;
      }
      span {
        margin-left: 1rem;
        font-weight: 500;
      }
    }
  }
}
</style>