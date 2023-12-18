<template>
    <div class="hexagon">
        <img src="../../assets/banner_sign.png" alt="" />
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Hexagon',
};
</script>

<style lang="stylus" scoped>
.hexagon {
  position: absolute;
  top: -0.45rem;
  left: -2.5rem;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
  height: 4.8rem;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>