<template>
<div id="recommend-new">
  <div class="index_card_title">
      <h5 class="">最新推荐</h5>
      <i class="icon font_family icon-yema-you"></i>
  </div>
  <div class="items">
    <div class="item blue">
      <div class="item_icon">
        <i class="icon font_family icon-zuixin"><em>1</em></i>

      </div>
      <div class="item_content">
        <el-row :gutter="10">
          <el-col :span="8" class="title">模型名称</el-col>
          <el-col :span="16" class="content">基于友商装维识别友商宽</el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="8" class="title">算法</el-col>
          <el-col :span="16" class="content">逻辑回归</el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="8" class="title">规模</el-col>
          <el-col :span="16" class="content">29万</el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="8" class="title">分类</el-col>
          <el-col :span="16" class="content">流量运营</el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="8" class="title">评分</el-col>
          <el-col :span="16" class="content">
            <i class="icon font_family icon-xingxing-weixuanzhong yellow"></i>
            <i class="icon font_family icon-xingxing-weixuanzhong yellow"></i>
            <i class="icon font_family icon-xingxing-weixuanzhong yellow"></i>
            <i class="icon font_family icon-xingxing-weixuanzhong yellow"></i>
            <i class="icon font_family icon-xingxing-weixuanzhong "></i>
            <span>4分</span>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="8" class="title">使用次数</el-col>
          <el-col :span="16" class="content">78</el-col>
        </el-row>
        <div class="btns">
          <el-button type="primary" class="button btn_blue">查看详情</el-button>
          <el-button type="primary" class="button btn_green">使用类型</el-button>
        </div>
      </div>
    </div>

    <div class="item yellow">
      <div class="item_icon">
        <i class="icon font_family icon-zuixin"><em>2</em></i>

      </div>
      <div class="item_content">
        <el-row :gutter="10">
          <el-col :span="8" class="title">模型名称</el-col>
          <el-col :span="16" class="content">基于友商装维识别友商宽</el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="8" class="title">算法</el-col>
          <el-col :span="16" class="content">逻辑回归</el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="8" class="title">规模</el-col>
          <el-col :span="16" class="content">29万</el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="8" class="title">分类</el-col>
          <el-col :span="16" class="content">流量运营</el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="8" class="title">评分</el-col>
          <el-col :span="16" class="content">
            <i class="icon font_family icon-xingxing-weixuanzhong yellow"></i>
            <i class="icon font_family icon-xingxing-weixuanzhong yellow"></i>
            <i class="icon font_family icon-xingxing-weixuanzhong yellow"></i>
            <i class="icon font_family icon-xingxing-weixuanzhong yellow"></i>
            <i class="icon font_family icon-xingxing-weixuanzhong "></i>
            <span>4分</span>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="8" class="title">使用次数</el-col>
          <el-col :span="16" class="content">78</el-col>
        </el-row>
        <div class="btns">
          <el-button type="primary" class="button btn_blue">查看详情</el-button>
          <el-button type="primary" class="button btn_green">使用类型</el-button>
        </div>
      </div>
    </div>

    <div class="item green">
      <div class="item_icon">
        <i class="icon font_family icon-zuixin">  <em>3</em></i>

      </div>
      <div class="item_content">
        <el-row :gutter="10">
          <el-col :span="8" class="title">模型名称</el-col>
          <el-col :span="16" class="content">基于友商装维识别友商宽</el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="8" class="title">算法</el-col>
          <el-col :span="16" class="content">逻辑回归</el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="8" class="title">规模</el-col>
          <el-col :span="16" class="content">29万</el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="8" class="title">分类</el-col>
          <el-col :span="16" class="content">流量运营</el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="8" class="title">评分</el-col>
          <el-col :span="16" class="content">
            <i class="icon font_family icon-xingxing-weixuanzhong yellow"></i>
            <i class="icon font_family icon-xingxing-weixuanzhong yellow"></i>
            <i class="icon font_family icon-xingxing-weixuanzhong yellow"></i>
            <i class="icon font_family icon-xingxing-weixuanzhong yellow"></i>
            <i class="icon font_family icon-xingxing-weixuanzhong "></i>
            <span>4分</span>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="8" class="title">使用次数</el-col>
          <el-col :span="16" class="content">78</el-col>
        </el-row>
        <div class="btns">
          <el-button type="primary" class="button btn_blue">查看详情</el-button>
          <el-button type="primary" class="button btn_green">使用类型</el-button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'recommend-new',
  components: {
  },
  data(){
    return{
      value: [],
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
#recommend-new{
  height: 270px;
    .card;
    .items{
      padding: 10px 0;
      display: flex;
      align-items: center;
      .item{
        display: flex;
        width: 33%;
        .item_icon{
          padding: 10px;
          i{
            font-size: 36px;

            position: relative;
            em{
              color:#fff;
              position: absolute;
              right: 15px;
              bottom:0px;
              font-size: 12px;
            }
          }

        }
        .item_content{
          padding: 10px;
          .title{
            text-align: left;
            color:#666666;
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
          .btns{
            margin-top: 10px;
            text-align: left;
            .button{
              padding: 8px 10px;
              font-size: 12px;
              &.btn_blue{
                background-color: #108EE9 !important;
                color:#fff;
              }
              &.btn_green{
                background-color: #87D068 !important;
                color:#fff;
                border-color: #87D068 !important;
              }
            }
          }
        }
      }
    }
}
</style>
