<template>
  <div id="comment-detail">
    <div class="main">
      <div class="top-search">
        <el-select class="model" v-model="value" placeholder="模型名">
          <el-option label="模型1" value="shanghai"></el-option>
          <el-option label="模型2" value="beijing"></el-option>
        </el-select>
        <el-input class="search" v-model="keyword" placeholder="请输入搜索内容"></el-input>
        <span class="search-btn pointer">
          <i class="icon font_family icon-sousuokuang"></i>
        </span>
      </div>
      <div class="container">
        <div class="table">
          <el-table
            :data="modelScoreTable"
            :header-cell-class-name="'table-header'"
            style="width: 100%"
            max-height="640"
          >
            <el-table-column width="20"></el-table-column>
            <el-table-column prop="id" label="ID" fit="true" min-width="12.5%"></el-table-column>
            <el-table-column
              prop="property.records[0].content.user_name"
              label="营销人员"
              fit="true"
              min-width="12.5%"
            ></el-table-column>
            <el-table-column prop="property.context.score" label="分数" fit="true" min-width="12.5%"></el-table-column>
            <el-table-column
              prop="property.context.pingjia"
              label="评价"
              fit="true"
              min-width="32.5%"
            ></el-table-column>
            <el-table-column prop="property.context.jianyi" label="优化建议" fit="true" min-width="30%"></el-table-column>
          </el-table>
        </div>
        <div class="block">
          <el-pagination
            @size-change="change_size"
            @current-change="change_current"
            :current-page="1"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="10"
            layout=" prev, pager, next,sizes, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'comment-detail',
  components: {},
  data() {
    return {
      value: '',
      keyword: '',
      modelScoreTable: [],
      scorePage: 1, // 分页页码
      scoreLimit: 10, //分页条数
      total: 0 //总条数
    }
  },
  computed: {
    //计算属性
  },
  methods: {
    // 修改每页显示条数
    change_size(val) {
      this.scoreLimit = val
      this.getModelScore()
    },
    // 修改显示页码
    change_current(val) {
      this.scorePage = val
      this.getModelScore()
    },
    //获取模型评价
    async getModelScore() {
      let res = await this.axios({
        method: 'post',
        url: '/task/query',
        data: {
          type: 'template_pingjia',
          request: JSON.stringify({
            page: this.scorePage,
            limit: this.scoreLimit,
            property: {
              'context.template_id': '5c3dad93cea6293e308835b2'
            }
          })
        }
      })
      console.log(res)
      if (res.data.errcode == 2000) {
        this.modelScoreTable = res.data.data.list
        this.total = res.data.data.num
      }
    }
  },
  //vue的生命周期钩子函数
  beforeCreate() {
    //组建实例被创建，组建属性计算之前
  },
  created() {
    this.getModelScore()
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
#comment-detail {
  width: calc(100vw - @menu-width -20px);
  .main {
    //padding:0 10px;
    background-color: #fff;
    .top-search {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      .model {
        width: 112px;
      }
      .search {
        width: 200px;
      }
      .search-btn {
        font-size: 0;
        height: 36px;
        border: 0px solid #dcdfe6;
        width: 50px;
        text-align: center;
        background-color: #108ee9;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          font-size: 16px;
        }
      }
    }
    .container {
      display: block;
      // overflow-y: scroll;
      //width: 100%;
      padding: 20px;
      padding-top: 0;
      .table {
        width: 100%;
        .table-header {
          background-color: #f7f7f7;
          height: 72px;
        }
      }
      .block {
        margin-top: 15px;
      }
    }
  }
}
</style>
<style lang="less">
#comment-detail {
  .main {
    .top-search {
      .model {
        .el-input {
          .el-input__inner {
            height: 36px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
        }
      }
      .search.el-input {
        .el-input__inner {
          height: 36px;
          border-radius: 0;
          border-left-width: 0px;
          border-right-width: 0px;
        }
      }
    }
    .container {
      .table {
        .table-header {
          background-color: #f7f7f7;
          height: 52px;
          .cell {
            font-weight: 600;
            color: #666666;
          }
        }
      }
      .block {
        .el-pagination {
          .el-pager {
            .number {
              border: 1px solid #dcdfe6;
              border-radius: 3px;
              padding: 0;
              margin: 0 2px;
              color: #666666;
              &.active {
                background-color: #108ee9;
                border-color: #108ee9;
                color: #fff;
              }
            }
          }
          .btn-prev,
          .btn-next {
            border: 1px solid #dcdfe6;
            border-radius: 3px;
            margin: 0 2px;
          }
        }
      }
    }
  }
}
</style>
