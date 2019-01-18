<template>
<div id="top-hot">
  <div class="index_card_title">
      <h5 class="">本月最热模型排名</h5>
  </div>
  <div class="items">
    <div class="item">
      <div class="item_title">
        <el-row :gutter="10" >
          <el-col :span="6" class="list">排名</el-col>
          <el-col :span="12" class="model">模型名称</el-col>
          <el-col :span="6" class="used_time">使用次数</el-col>
        </el-row>
      </div>
      <div class="item_content">
        <el-row :gutter="10" v-for="(item,index) in value" :key="index" v-if="index < 5">
          <el-col :span="6" class="title" :class="index == 0 ?'blue':(index == 1?'yellow': (index == 2 ? 'green':''))"><i class="icon font_family icon-zuire" :class="index == 0 ?'blue':(index == 1?'yellow': (index == 2 ? 'green':''))"></i>TOP{{index+1}}</el-col>
          <el-col :span="14" class="content">基于友商装维识别友商宽</el-col>
          <el-col :span="4" class="used_time">77</el-col>
        </el-row>
      </div>
    </div>

  </div>
</div>
</template>
<script>
export default {
  name: 'top-hot',
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
#top-hot{
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
            i{
              color:#fff;
              margin-right: 3px;
            }
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
            color:#FF5500;
            font-weight: 600;
            text-align: right;
          }
        }
      }
    }
}
</style>
