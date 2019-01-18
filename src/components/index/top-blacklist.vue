<template>
<div id="top-blacklist">
  <div class="index_card_title">
      <h5 class="">本月应用反馈延时黑名单</h5>
  </div>
  <div class="items">
    <div class="item">
      <div class="item_title">
        <el-row :gutter="10" >
          <el-col :span="8" class="list">排名</el-col>
          <el-col :span="8" class="model">姓名</el-col>
          <el-col :span="8" class="used_time">反馈延时次数</el-col>
        </el-row>
      </div>
      <div class="item_content">
        <el-row :gutter="10" v-for="(item,index) in value" :key="index" v-if="index < 5">
          <el-col :span="8" class="title">TOP{{index+1}}</el-col>
          <el-col :span="8" class="content">基于友</el-col>
          <el-col :span="8" class="used_time">77</el-col>
        </el-row>
      </div>
    </div>

  </div>
</div>
</template>
<script>
export default {
  name: 'top-blacklist',
  components: {
  },
  data(){
    return{
      value: [1,1,1,1,1,1],
    }
  },
  computed:{
    //计算属性
  },
  methods:{
    //定义函数
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
#top-blacklist{
  height: 270px;
    .card;
    .items{
      padding: 10px 0;
      .item{
        .item_title{
          margin-bottom: 20px;
          font-weight: 600;
          color:#333333;
          font-size: 14px;
          .list{
            text-align: center;
              font-weight: 600;
          }
          .model{
            text-align: left;
              font-weight: 600;
          }
          .used_time{
            text-align: right;
            font-weight: 600;
          }
        }
        .item_content{
          width: 100%;
          .title{
            color:#DD2D07;

          }
          .content{
            text-align: left;
            color:#333333;
            margin-bottom: 8px;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            span{
              margin-left: 10px;
            }
            i.icon-xingxing-weixuanzhong{
             color:#EFEFEF;
            }
          }
          .used_time{
            font-weight: 600;
            color:#DD2D07;
            text-align: right;
          }
        }
      }
    }
}
</style>
