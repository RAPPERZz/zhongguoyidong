<template>
<div id="my-tasks">
  <div class="main">
    <div class="container">
      <div class="detail" >
        <all-task></all-task>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import all_task from "./all-task.vue"
export default {
  name: 'my-tasks',
  components: {
    "all-task":all_task
  },
  data(){
    return{
      value: '',
      activeIndex:'1',
    }
  },
  computed:{
    //计算属性
  },
  methods:{
    //定义函数
    handleSelect(a){
      this.activeIndex = a;
    },
  },
  //vue的生命周期钩子函数
  beforeCreate(){
    //组建实例被创建，组建属性计算之前
  },
  created(){
    //组建实例创建完成，属性已绑定，但DOM还未生成
  },
  beforeMount(){
    //模版编译挂载之前
  },
  mounted(){
    //模板编译挂载之后

  },
  activated(){
    //keep-alive,组件被激活时调用
  },
  deactivated(){
    //keep-alive,组件被移除时调用
  },
  beforeDestory(){
    //组件被销毁前调用
  },
  destoryed(){
    //组件被销毁后调用
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/styles.less';
#my-tasks{
    margin-left: @menu-width;
    margin-top: calc(@nav-height - 10px);
    width: calc(100vw - @menu-width);
    .main{
      background-color: #fff;
      .container{
          display: block;
          height: calc(100vh - 62px);
          overflow-y: scroll;
          //width: 100%;
          padding:0 20px;
      }
    }
}

</style>
<style lang="less">
  #my-tasks{
    .main{
      .container{
        .model-nav{
          position: relative;
          .el-menu-demo{
            .is-active{
              color:#108EE9;
            }
          }
          .button{
            position: absolute;
            right: 0;
            top: 14px;
            .btn{
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
