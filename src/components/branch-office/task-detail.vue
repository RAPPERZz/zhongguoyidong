<template>
<div id="branch-task-detail">
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
            <el-col :span="16" class="content">2018-09-01</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">营销通路：</el-col>
            <el-col :span="20" class="content">基于友商装维识别友商宽</el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="4" class="title">补充文件：</el-col>
            <el-col :span="20" class="content">188888888888</el-col>
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
        <h5 class="">审批意见</h5>
    </div>
    <div class="item">
      <el-row>
        <el-col :span="8" class="textarea">
          <el-input
            type="textarea"
            :rows="5"

            placeholder="请输入内容"
            v-model="form.textarea2">
          </el-input>
          <span class="rule">*</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" class="btns">
          <el-button size="small" class="btn" type="primary">同意</el-button>
        <el-button  size="small"  class="btn cancel" type="danger" @click="">驳回</el-button>
        </el-col>
      </el-row>
    </div>
  </div>

  <div class="main">
    <div class="index_card_title">
        <h5 class="">历史审批详情</h5>
    </div>
    <div class="item">
      <div class="table">
        <el-table
        :data="tableData"
        :header-cell-class-name="'table-header'"
        style="width: 100%"
        max-height="740">
        <el-table-column
          width="20"
          >
        </el-table-column>
        <el-table-column
          prop="id"
          label="审批步骤"
          fit="true"
          min-width="10%"
          >
        </el-table-column>
        <el-table-column
          prop="category"
          label="部门"
          fit="true"
          min-width="10%"
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="审批人"
          fit="true"
          min-width="10%"
          >
        </el-table-column>
        <el-table-column
          prop="charge"
          label="审批意见"
          fit="true"
          min-width="15%"
          >
        </el-table-column>
        <el-table-column
          prop="rate"
          label="审批时间"
          fit="true"
          min-width="15%"
          >
        </el-table-column>
        <el-table-column
          prop="used_time"
          label="审批结果"
          fit="true"
          min-width="10%"
          >
        </el-table-column>
      </el-table>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'branch-task-detail',
  components: {
  },
  data(){
    return{
      value: [],
      form:{
        textarea2:'',
      },
      tableData:[
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6,
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6,
        },
      ],
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
#branch-task-detail{
  margin-left: @menu-width;
  margin-top: calc(@nav-height - 10px);
  width: calc(100vw - @menu-width);
  height: calc(100vh - 62px);
  overflow-y: scroll;
  background-color: #fff;
  .main{
    padding: 10px 30px;
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
      .textarea{
        position: relative;
        .rule{
          position: absolute;
          right: -20px;
          font-size: 18px;
          top: 0;
          color:#E20A0A;
        }
      }
      .btns{
        padding: 20px 0;
        .btn{
          width: 100px;
          line-height: 32px;
          &.cancel{
            background-color: #FF5500;
          }
        }
      }

    }
  }
}
</style>
<style lang="less">
#branch-task-detail{
  .table{
    .table-header{
      background-color:#F7F7F7;
      height:52px;
      .cell{
        font-weight: 600;
        color:#666666;
      }
    }
  }
}

</style>
