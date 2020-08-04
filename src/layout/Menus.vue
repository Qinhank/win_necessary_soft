<style lang="scss">
  #menus{
    height: calc(100vh - 20px);
    background: white;
    position: relative;
    margin-top: 10px;
    margin-left: 10px;
    overflow: hidden;
    border-radius: 5px;
    $width: 60px;
    .logo{
      width: $width;
      text-align: center;
      margin: 15px 0;
      img{
        width: 40px;
      }
    }
    .logo-expand{
      width: 100%;
      margin: 15px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 40px;
      }
      span{
        font-size: 22px;
        font-weight: bold;
        padding: 0 10px 0 5px;
      }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 100%;
      border: 0;
      border-radius: 5px;
    }
    .el-menu--collapse{
      width: $width;
      height: 100%;
      border: 0;
      border-radius: 5px;
      .el-submenu__title,.el-tooltip{
        padding: 0 !important;
        text-align: center;
      }
      .el-menu-item,.el-submenu__title{
        &::after{
          content: '';
          display: block;
          opacity: 0;
          transition: all .3s;
          width: 40px;
          height: 40px;
          background: $active;
          position: absolute;
          left: calc(50% - 20px);
          top: calc(50% - 18px);
          border-radius: 5px;
        }
        &:hover,&:focus{
          background: transparent;
          .el-tooltip{
            z-index: 2;
          }
          i{
            color: white;
            position: relative;
            z-index: 2;
            font-size: 24px !important;
          }
          &::after{
            opacity: 1;
          }
        }
      }
      .is-active{
        color: white;
        &::after{
          opacity: 1;
        }
        i{
          position: relative;
          z-index: 2;
        }
      }
    }
    .toggle{
      position: absolute;
      bottom: 15px;
      width: 25px;
      height: 25px;
      text-align: center;
      line-height: 25px;
      left: calc(50% - 12.5px);
      border: 1px solid #bbb;
      color: #bbb;
      border-radius: 50%;
      cursor: pointer;
    }
  }
</style>

<template>
  <div id="menus">
    <div :class="`${isCollapse?'logo':'logo-expand'}`">
      <img src="@/assets/images/logo2.png" alt="logo">
      <span v-if="ename && !isCollapse">{{ ename }}</span>
    </div>
    <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span slot="title">Win装机必备</span>
      </el-menu-item>
      <!-- <el-menu-item index="2">
        <i class="el-icon-tickets"></i>
        <span slot="title">快速表单</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-notebook-2"></i>
        <span slot="title">通用列表</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">设置模板</span>
      </el-menu-item> -->
    </el-menu>
    <i :class="`toggle ${isCollapse?'el-icon-arrow-right':'el-icon-arrow-left'}`" @click="toggle"></i>
  </div>
</template>

<script>
import { ename } from '@config'
  export default {
    data () {
      return {
        ename,
        isCollapse: true
      }
    },
    methods: {
      toggle (key, keyPath) {
        this.isCollapse = !this.isCollapse
      }
    }
  }
</script>
