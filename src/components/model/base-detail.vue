<template>
  <div id="base-detail">
    <div class="main">
      <div class="index_card_title">
        <h5 class>模型信息</h5>
      </div>
      <div class="item">
        <el-row :gutter="10">
          <el-col :span="12">
            <el-row :gutter="10">
              <el-col :span="4" class="title">模型名称：</el-col>
              <el-col :span="20" class="content">{{modelDetail.Model_Name}}</el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="4" class="title">模型分类：</el-col>
              <el-col :span="20" class="content">{{modelDetail.Classification}}</el-col>
            </el-row>

            <el-row :gutter="10">
              <el-col :span="4" class="title">主创人员：</el-col>
              <el-col :span="20" class="content">{{modelDetail.Charactor_Name}}</el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="4" class="title">发布时间：</el-col>
              <el-col :span="20" class="content">{{modelDetail.Publish_time}}</el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="4" class="title">修改时间：</el-col>
              <el-col :span="20" class="content">{{modelDetail.Modify_time}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row :gutter="10">
              <el-col :span="4" class="title">负责人：</el-col>
              <el-col :span="20" class="content">{{modelDetail.Responsible_Person}}</el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="4" class="title">联系方式：</el-col>
              <el-col :span="20" class="content">{{modelDetail.Contact_Phone}}</el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="4" class="title">版本号：</el-col>
              <el-col :span="20" class="content">{{modelDetail.Version}}</el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="main">
      <div class="index_card_title">
        <h5 class>模型目的</h5>
      </div>
      <div class="item">
        <el-row>
          <el-col :span="12">
            <p>{{modelDetail.Model_Aim}}</p>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="main">
      <div class="index_card_title">
        <h5 class>建模思路</h5>
      </div>
      <div class="item">
        <el-row>
          <el-col :span="12">
            <p>{{modelDetail.Model_Thought}}</p>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'recommend-best',
  components: {},
  data() {
    return {
      value: [],
      modelDetail: {}
    }
  },
  computed: {
    //计算属性
  },
  methods: {
    // 获取模板详细信息
    async getModelInfo() {
      let res = await this.axios({
        method: 'post',
        url: '/template/query',
        data: {
          type: 'property',
          // request: JSON.stringify({})
          request: {
            id: this.$store.state.modelInFn.id
          }
        }
      })
      // console.log(res)
      if (res.data.errcode == 2000) {
        this.modelDetail = res.data.data
        // console.log(this.modelDetail)
      }
    }
  },
  created() {
    this.getModelInfo()
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/styles.less';
#base-detail {
  .main {
    padding: 40px 30px;
    display: block;
    .item {
      margin-top: 20px;
      margin-left: 10px;
      display: block;
      width: 100%;
      .title {
        text-align: left;
        color: #666666;
      }
      .content {
        text-align: left;
        color: #333333;
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p {
        text-align: left;
        color: #666666;
      }
    }
  }
}
</style>
