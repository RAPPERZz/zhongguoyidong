<template>
<div id="base-detail">
  <div class="main">
    <div class="index_card_title">
        <h5 class="">模型信息</h5>
    </div>
    <div class="item">
      <el-row :gutter="10">
        <el-col :span="12">
          <el-row :gutter="10">
            <el-col :span="4" class="title">模型名称：</el-col>
            <el-col :span="20" class="content">基于友商装维识别友商宽</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">模型分类：</el-col>
            <el-col :span="20" class="content">基于友商装维识别友商宽</el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :span="4" class="title">主创人员：</el-col>
            <el-col :span="20" class="content">基于友商装维识别友商宽</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">发布时间：</el-col>
            <el-col :span="20" class="content">基于友商装维识别友商宽</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">修改时间：</el-col>
            <el-col :span="20" class="content">基于友商装维识别友商宽</el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row :gutter="10">
            <el-col :span="4" class="title">负责人：</el-col>
            <el-col :span="20" class="content">基于友商装维识别友商宽</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">联系方式：</el-col>
            <el-col :span="20" class="content">基于友商装维识别友商宽</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">版本号：</el-col>
            <el-col :span="20" class="content">基于友商装维识别友商宽</el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>

  <div class="main">
    <div class="index_card_title">
        <h5 class="">模型目的</h5>
    </div>
    <div class="item">
      <el-row>
        <el-col :span="12">
          <p>此处省略200字</p>
        </el-col>
      </el-row>
    </div>
  </div>

  <div class="main">
    <div class="index_card_title">
        <h5 class="">建模思路</h5>
    </div>
    <div class="item">
      <el-row>
        <el-col :span="12">
          <p>此处省略200字此处省略200字此处省略200字此处省略200字此处省略200字此处省略200字此处省略200字此处省略200字此处省略200字此处省略200字此处省略200字此处省略200字此处省略200字此处省略200字此处省略200字此处省略200字</p>
        </el-col>
      </el-row>
    </div>
  </div>

</div>
</template>
<script>
export default {
  name: 'recommend-best',
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
#base-detail{
  .main{
    padding: 40px 30px;
    display: block;
    .item{
      margin-top: 20px;
      margin-left: 10px;
      display: block;
      width: 100%;
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

      }
      p{
        text-align: left;
        color:#666666;
      }
    }
  }
}
</style>
