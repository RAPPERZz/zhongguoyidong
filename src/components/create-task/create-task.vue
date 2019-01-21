<template>
  <div id="create-task">
    <div class="main">
      <div class="container">
        <div class="left-item">
          <ul>
            <li @click="active_id = '1'" :class="active_id == '1'? 'active':''">
              <span>取数任务</span>
            </li>
            <li @click="active_id = '2'" :class="active_id == '2'? 'active':''">
              <span>模型登记</span>
            </li>
          </ul>
        </div>

        <div class="right-item">
          <div class="form" v-if="active_id == '1'">
            <form1></form1>
          </div>
          <div class="form" v-if="active_id == '2'">
            <form2></form2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import form1 from './form1.vue'
import form2 from './form2.vue'
export default {
  name: 'create-task',
  components: {
    form1: form1,
    form2: form2
  },
  data() {
    return {
      active_id: '1'
    }
  },
  computed: {
    //计算属性
  },
  methods: {
    //定义函数
  },
  //vue的生命周期钩子函数
  beforeCreate() {
    //组建实例被创建，组建属性计算之前
  },
  created() {},
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
#create-task {
  margin-left: @menu-width;
  margin-top: calc(@nav-height - 20px);
  width: calc(100vw - @menu-width);
  .main {
    background-color: #fff;
    padding: 0 20px;
    padding-top: 20px;
  }
}
</style>
<style lang="less">
#create-task {
  .main {
    .container {
      display: flex;
      margin-top: 15px;
      padding-bottom: 15px;
      height: calc(100vh - 102px);
      // overflow-y: scroll;
      .left-item {
        width: 100px;
        height: 100%;
        background-color: #f7f7f7;
        border-radius: 3px;
        ul {
          li {
            padding: 12px 20px;
            span {
              cursor: pointer;
              color: #3f3f3f;
              font-size: 14px;
            }
            &.active {
              span {
                color: #108ee9;
              }
            }
          }
        }
      }
      .right-item {
        width: calc(100% - 110px);
        height: 100%;
        margin-left: 10px;
        //background-color: #fff;
        // overflow-y: scroll;
        .line-item {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
