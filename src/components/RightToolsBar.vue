<template>
  <ul class="right-tools-bar">
    <li class="tool">
      <i>
        <img src="../assets/image/new.svg" width="100%" alt />
      </i>
      <div class="text">NEW</div>
    </li>
    <li class="tool">
      <i class="reset">
        <img src="../assets/image/reset.svg" width="100%" alt />
      </i>
      <div class="text">RESTAET</div>
    </li>
    <li class="tool">
      <i class="undo">
        <img src="../assets/image/undo.svg" width="100%" alt />
      </i>
      <div class="text">UNDO</div>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
ul.right-tools-bar {
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  padding: 120px 0;
  li {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 45px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.5;
    }
    i {
      display: inline-block;
      width: 60px;
      margin-bottom: 0.5rem;
      &.reset {
        width: 40px;
      }
      &.undo {
        width: 40px;
      }
    }
    .text {
      width: 100%;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
    }
  }
}
</style>