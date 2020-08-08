<style lang="scss">
  #home{
    position: relative;
    z-index: 99;
    .el-tabs{
      width: calc(100% - 60px);
      margin: 10px auto 0 auto;
    }
    h2{
      font-size: 24px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .top{
      height: 150px;
      margin: 10px 30px 15px 30px;
      width: calc(100% - 60px);
      &-box{
        display: flex;
        align-items: center;
        .top-left{
          width: 50px;
          text-align: right;
          margin-right: 20px;
          i{
            font-size: 26px;
            color: $green;
          }
        }
        .top-center{
          width: calc(100% - 200px);
          h3{
            font-size: 26px;
            font-weight: bold;
          }
          p{
            font-size: 14px;
            color: $grey;
          }
        }
      }
    }
    .bottom{
      height: calc(100vh - 240px);
      width: calc(100% - 60px);
      margin: 0px 30px 0 30px;
      .head{
        display: flex;
        align-items: center;
        padding-left: 20px;
        border-bottom: 1px solid #eee;
        padding-bottom: 15px;
        margin-bottom: 10px;
        &-item{
          width: 25%;
          text-align: left;
          font-weight: bold;
        }
      }
      .content{
        padding-left: 20px;
        &-item{
          display: flex;
          align-items: center;
          color: rgba(0,0,0,.7);
          margin-bottom: 15px;
          &-text{
            width: 25%;
          }
        }
      }
    }
  }
</style>

<template>
  <div id="home">
    <t-card class="top" card-class="top-box">
      <div class="top-left">
        <i class="el-icon-success"></i>
      </div>
      <div class="top-center">
        <h3>下载前阅读</h3>
        <p>该网站下所有软件均来自互联网，我也会一一贴出软件的官网（如果有的话），有些软件开源有些软件收费有些则是破解版，请自行鉴定。</p>
      </div>
    </t-card>
    <el-tabs v-model="activeName">
      <el-tab-pane label="日常使用" name="daily"></el-tab-pane>
      <el-tab-pane label="待深度体验" name="waitUse"></el-tab-pane>
      <el-tab-pane label="开发者必备" name="dev"></el-tab-pane>
    </el-tabs>
    <t-card class="bottom">
      <div class="head">
        <div class="head-item">名称</div>
        <div class="head-item">介绍</div>
        <div class="head-item">当前版本</div>
        <div class="head-item">操作</div>
      </div>
      <div class="content">
        <div class="content-item" v-for="(item, index) in data[activeName]" :key="index">
          <div class="content-item-text">{{ item.name }}</div>
          <div class="content-item-text" style="padding-right: 20px">{{ item.des }}</div>
          <div class="content-item-text">{{ item.version }}</div>
          <div class="content-item-btn">
            <el-button type="primary" @click="go2(item.down)" :disabled="!item.down">{{ item.down ? '立即下载' : '暂无下载' }}</el-button>
            <el-button @click="go2(item.link)">访问官方</el-button>
          </div>
        </div>
      </div>
    </t-card>
  </div>
</template>

<script>
import data from '@/utils/data'
export default {
  data () {
    return {
      data,
      activeName: 'daily'
    }
  },
  methods: {
    go2 (link) {
      window.open(link)
    }
  }
}
</script>
