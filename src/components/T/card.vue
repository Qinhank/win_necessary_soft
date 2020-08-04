<style lang="scss">
  .t-card{
    width: calc(100% - 25px);
    height: calc(100vh - 20px);
    border-radius: 5px;
    background: white;
    padding: 15px;
    margin: 10px;
    margin-right: 5px;
    overflow: hidden;

    &-box{
      width: 100%;
      height: 100%;
      overflow: auto;
      &::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,.3);
      }
      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        border-radius: 10px;
      }
    }
  }
</style>

<template>
  <div class="t-card">
    <div :class="`t-card-box ${cardClass}`">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    'cardClass': {
      type: String,
      default: ''
    }
  }
}
</script>
