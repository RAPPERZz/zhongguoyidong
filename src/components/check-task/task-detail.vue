<template>
<div id="task-detail">
  <div class="main">
    <div class="index_card_title">
        <h5 class="">任务信息</h5>
    </div>
    <div class="item">
      <el-row :gutter="10">
        <el-col :span="12">
          <el-row :gutter="10">
            <el-col :span="4" class="title">任务名称：</el-col>
            <el-col :span="20" class="content">基于友商装维识别友商宽</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">任务编号：</el-col>
            <el-col :span="20" class="content">11111</el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :span="4" class="title">项目编号：</el-col>
            <el-col :span="20" class="content">22222</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">创建时间：</el-col>
            <el-col :span="20" class="content">2018-09-01</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">需求提交人：</el-col>
            <el-col :span="20" class="content">基于友商装维识别友商宽</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">联系电话：</el-col>
            <el-col :span="20" class="content">188888888888</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">任务类型：</el-col>
            <el-col :span="20" class="content">xxxx</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">建模口径：</el-col>
            <el-col :span="20" class="content">222222</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">建模原因：</el-col>
            <el-col :span="20" class="content">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</el-col>
          </el-row>
        </el-col>

        <el-col :span="12">
          <el-row :gutter="10">
            <el-col :span="4" class="title">用户规模：</el-col>
            <el-col :span="20" class="content">基于友商装维识别友商宽</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">营销口径：</el-col>
            <el-col :span="20" class="content">11111</el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :span="4" class="title">模型分类：</el-col>
            <el-col :span="20" class="content">22222</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">使用模型：</el-col>
            <el-col :span="16" class="content">2018-09-01
              <el-button
                class="btn"
                @click.native.prevent=""
                type="text"
                size="small">
                下载
              </el-button>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">营销通路：</el-col>
            <el-col :span="20" class="content">基于友商装维识别友商宽</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">补充文件：</el-col>
            <el-col :span="20" class="content">188888888888
              <el-button
                class="btn"
                disabled
                @click.native.prevent=""
                type="text"
                size="small">
                下载
              </el-button>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">文件格式：</el-col>
            <el-col :span="20" class="content">xxxx</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">文件大小：</el-col>
            <el-col :span="20" class="content">222222</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">用户体量：</el-col>
            <el-col :span="20" class="content">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>

  <div class="main">
    <div class="index_card_title">
        <h5 class="">审批状态</h5>
    </div>
    <div class="item">
      <el-row>
        <el-col :span="12">
          <el-row class="status first unfinished">
            <el-col  :span="2">
                <span class="circle "></span>
            </el-col>
            <el-col :span="5">
                <span class="time">2018-09-01 12:11</span>
            </el-col>
            <el-col :span="5">
                <span class="des">等待运算结果上传</span>
            </el-col>
          </el-row>

          <el-row class="status process">
            <el-col :span="2">
                <span class="circle"></span>
            </el-col>
            <el-col :span="5">
                <span class="time">2018-09-01 12:11</span>
            </el-col>
            <el-col :span="5">
                <span class="des">等待运算结果上传</span>
            </el-col>
          </el-row>

          <el-row class="status">
            <el-col :span="2">
                <span class="circle"></span>
            </el-col>
            <el-col :span="5">
                <span class="time">2018-09-01 12:11</span>
            </el-col>
            <el-col :span="5">
                <span class="des">等待运算结果上传</span>
            </el-col>
          </el-row>

          <el-row class="status">
            <el-col :span="2">
                <span class="circle"></span>
            </el-col>
            <el-col :span="5">
                <span class="time">2018-09-01 12:11</span>
            </el-col>
            <el-col :span="5">
                <span class="des">等待运算结果上传</span>
            </el-col>
          </el-row>
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
#task-detail{
  margin-left: @menu-width;
  margin-top: calc(@nav-height - 10px);
  width: calc(100vw - @menu-width);
  height: calc(100vh - 62px);
  background-color: #fff;
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
      .btn{
        padding: 0;
        margin-left: 10px;
      }
      p{
        text-align: left;
        color:#666666;
      }
      .status{
        margin-top: 24px;
        font-size: 12px;
        .circle{
          width: 10px;
          height: 10px;
          display: inline-block;
          border-radius: 50%;
          border: 1px solid #999999;
          position: relative;
          &::before{
            content: "";
            height: 15px;
            width: 2px;
            background-color:#999999;
            position: absolute;
            left: 4px;
            top:-20px;
            display: block;
          }

        }
        &.first .circle::before{
          content: none;
        }
        &.unfinished .circle{
          border-color:#108EE9;
          &::before{
            background-color:#108EE9;
          }
        }
        &.process .circle{
          border-color:#108EE9;
          background-color:#108EE9;
          &::before{
            background-color:#108EE9;
          }
        }
        .time{
          font-size: 12px;
          vertical-align: middle;
        }
        .des{
          font-size: 12px;
          vertical-align: middle;
        }
      }

    }
  }
}
</style>
