<template>
  <div id="app-detail">
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
            max-height="640"
          >
            <el-table-column width="20"></el-table-column>
            <el-table-column prop="id" label="ID" fit="true" min-width="12.5%"></el-table-column>
            <el-table-column prop="category" label="科室/分公司" fit="true" min-width="17.5%"></el-table-column>
            <el-table-column prop="name" label="应用时间" fit="true" min-width="20%"></el-table-column>
            <el-table-column prop="charge" label="营销量" fit="true" min-width="12.5%"></el-table-column>
            <el-table-column prop="rate" label="触达量" fit="true" min-width="12.5%"></el-table-column>
            <el-table-column prop="used_time" label="成功量" fit="true" min-width="12.5%"></el-table-column>
            <el-table-column prop="used_time" label="成功率" fit="true" min-width="12.5%"></el-table-column>
            <el-table-column prop="used_time" label="营销政策" fit="true" min-width="12.5%"></el-table-column>
            <el-table-column label="附件" fit="true" min-width="12.5%">
              <template slot-scope="scope">
                <el-button @click.native.prevent type="text" size="small">下载</el-button>
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
            :total="400"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app-detail',
  components: {},
  data() {
    return {
      value: '',
      keyword: '',
      tableData: [
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        },
        {
          id: '1',
          category: '宽带挖掘',
          name: '友好宽带',
          charge: '王旭',
          rate: '4.5分',
          used_time: 6
        }
      ]
    }
  },
  computed: {
    //计算属性
  },
  methods: {
    //定义函数
    change_size() {},
    change_current() {}
  },
  created() {
    //组建实例创建完成，属性已绑定，但DOM还未生成
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/styles.less';
#app-detail {
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
#app-detail {
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
