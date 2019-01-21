<template>
  <div id="model-detail">
    <div class="main">
      <div class="container">
        <div class="model-nav">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">基本信息</el-menu-item>
            <el-menu-item index="2">应用详情</el-menu-item>
            <el-menu-item index="3">模型评价</el-menu-item>
          </el-menu>
          <div class="button">
            <el-button class="btn" type="success" @click="$router.push({path:'/create-task'})">使用模型</el-button>
          </div>
        </div>
        <div class="detail" v-if="activeIndex == '1'">
          <base-detail></base-detail>
        </div>
        <div class="detail" v-if="activeIndex == '2'">
          <app-detail></app-detail>
        </div>
        <div class="detail" v-if="activeIndex == '3'">
          <comment-detail></comment-detail>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import base_detail from './base-detail.vue'
import app_detail from './app-detail.vue'
import comment_detail from './comment-detail.vue'
export default {
  name: 'model-detail',
  components: {
    'base-detail': base_detail,
    'app-detail': app_detail,
    'comment-detail': comment_detail
  },
  data() {
    return {
      value: '',
      activeIndex: '1'
    }
  },
  computed: {
    //计算属性
  },
  methods: {
    //定义函数
    handleSelect(a) {
      this.activeIndex = a
    }
  },
  //vue的生命周期钩子函数
  beforeCreate() {
    //组建实例被创建，组建属性计算之前
  },
  created() {
    //组建实例创建完成，属性已绑定，但DOM还未生成
  },
  beforeMount() {
    //模版编译挂载之前
  },
  mounted() {
    //模板编译挂载之后
  },
  activated() {
    //keep-alive,组件被激活时调用
  },
  deactivated() {
    //keep-alive,组件被移除时调用
  },
  beforeDestory() {
    //组件被销毁前调用
  },
  destoryed() {
    //组件被销毁后调用
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/styles.less';
#model-detail {
  margin-left: @menu-width;
  margin-top: calc(@nav-height - 10px);
  width: calc(100vw - @menu-width);
  .main {
    background-color: #fff;
    .container {
      display: block;
      height: calc(100vh - 62px);
      overflow-y: scroll;
      //width: 100%;
      padding: 0 20px;
    }
  }
}
</style>
<style lang="less">
#model-detail {
  .main {
    .container {
      .model-nav {
        position: relative;
        .el-menu-demo {
          .is-active {
            color: #108ee9;
          }
        }
        .button {
          position: absolute;
          right: 0;
          top: 14px;
          .btn {
            line-height: 32px;
            padding: 0 10px;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
