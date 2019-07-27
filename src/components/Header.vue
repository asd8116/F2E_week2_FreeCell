<template>
  <header class="my-header">
    <div class="top-bar">
      <ul class="time-panel">
        <li>
          <i class="material-icons">schedule</i>
        </li>
        <li class="text">
          <i>00:00:00</i>
        </li>
        <li>
          <i class="material-icons" v-if="isPlay">pause</i>
          <i class="material-icons" v-else>play_arrow</i>
        </li>
      </ul>
      <ul class="tool-panel">
        <li>
          <i class="material-icons">undo</i>
          <div class="text">Undo</div>
        </li>
        <li>
          <i class="material-icons">filter_none</i>
          <div class="text">New</div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  props: ['isPlay']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header.my-header {
  width: 100%;
  background-color: $header-background-color;
  .top-bar {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 1rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .time-panel,
    .tool-panel {
      li {
        display: flex;
        margin-right: 0.5rem;
        width: 24px;
        height: 24px;
        &.text {
          width: initial;
          i {
            font-size: 1.25rem;
            font-weight: bold;
          }
        }
      }
      li i {
        font-size: 1.25rem;
        font-style: normal;
        line-height: 24px;
        color: white;
      }
      li .text {
        font-size: 1.25rem;
        color: white;
        margin-left: 5px;
      }
    }
    .tool-panel li {
      width: initial;
      margin-left: 2.5rem;
    }
  }
}
</style>