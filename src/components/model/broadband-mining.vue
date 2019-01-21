<template>
  <div id="broadband-mining">
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
            :data="tableData"
            :header-cell-class-name="'table-header'"
            style="width: 100%"
            max-height="700"
          >
            <el-table-column width="20"></el-table-column>
            <el-table-column prop="id" label="ID" fit="true" min-width="12.5%"></el-table-column>
            <el-table-column prop="property.Classification" label="分类" fit="true" min-width="12.5%"></el-table-column>
            <el-table-column prop="property.Model_Name" label="名称" fit="true" min-width="25%"></el-table-column>
            <el-table-column
              prop="property.Charactor_Name"
              label="责任人"
              fit="true"
              min-width="12.5%"
            ></el-table-column>
            <el-table-column prop="rate" label="评分" fit="true" min-width="12.5%"></el-table-column>
            <el-table-column prop="used_time" label="使用次数" fit="true" min-width="12.5%"></el-table-column>
            <el-table-column label="操作" fit="true" min-width="12.5%">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="getModelID(scope.row.id,scope.row.property.Model_Name), $router.push({path:'/model/detail/1'})"
                  type="text"
                  size="small"
                >查看</el-button>
                <el-button
                  @click.native.prevent="getModelID(scope.row.id,scope.row.property.Model_Name),$router.push({path:'/create-task'})"
                  type="text"
                  size="small"
                >使用</el-button>
              </template>
            </el-table-column>
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
  name: 'broadband-mining',
  components: {},
  data() {
    return {
      value: '',
      keyword: '',
      tableData: [],
      modelPage: 1, // 分页页码
      modelLimit: 10, //分页条数
      total: 0 //总条数
    }
  },
  computed: {
    //计算属性
  },
  methods: {
    //获取模板数据
    async grtModelInfo() {
      let res = await this.axios({
        method: 'post',
        url: '/template/query',
        data: {
          type: 'list',
          request: JSON.stringify({
            page: this.modelPage,
            limit: this.modelLimit
          })
        }
      })
      console.log(res)
      if (res.data.errcode == 2000) {
        // console.log(res.data.data)
        this.tableData = res.data.data.list
        this.total = res.data.data.num
      }
    },
    // 修改每页显示条数
    change_size(val) {
      this.modelLimit = val
      this.grtModelInfo()
    },
    // 修改显示页码
    change_current(val) {
      this.modelPage = val
      this.grtModelInfo()
    },
    // 获取模板ID
    getModelID(id, name) {
      // console.log(id)
      this.$store.commit('getModel', { id, name })
      // this.$store.commit('getModelName', name)
    }
  },
  created() {
    this.grtModelInfo()
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/styles.less';
#broadband-mining {
  margin-left: @menu-width;
  margin-top: calc(@nav-height - 10px);
  width: calc(100vw - @menu-width);
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
      height: calc(100vh - 163px);
      overflow-y: scroll;
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
#broadband-mining {
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
