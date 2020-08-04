<style lang="scss">
  #app{
    .mainbody{
      display: flex;
      justify-content: space-between;
      background: #ececec;
      height: 100vh;
      overflow: hidden;
      .container{
        flex: auto;
        overflow: hidden;
        padding: 0;
        &-scroll{
          width: 100%;
          height: 100%;
          overflow: auto;
          border-radius: 10px;
          color: $default;
        }
      }
    }
  }
</style>

<template>
  <div id="app">
    <div class="mainbody">
      <menus v-if="$route.path!=='/login'" />
      <div class="container">
        <div class="container-scroll">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heads from '@/layout/Header'
import Menus from '@/layout/Menus'
export default {
  components: {
    Heads,
    Menus
  }
}
</script>
