<template>
  <div id="all-task">
    <div class="main">
      <div class="top-search">
        <el-select class="model" v-model="value" placeholder="任务名">
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
            :data="MissionTable"
            :header-cell-class-name="'table-header'"
            style="width: 100%"
            max-height="640"
          >
            <el-table-column width="20"></el-table-column>
            <el-table-column prop="id" label="ID" fit="true" min-width="12.5%"></el-table-column>
            <el-table-column prop="property.name" label="名称" fit="true" min-width="17.5%"></el-table-column>
            <el-table-column
              prop="property.records[0].content.user_name"
              label="创建人"
              fit="true"
              min-width="20%"
            ></el-table-column>
            <el-table-column
              prop="property.records[0].content.department"
              label="分公司"
              fit="true"
              min-width="12.5%"
            ></el-table-column>
            <el-table-column
              prop="property.context.tonglu"
              label="营销通路"
              fit="true"
              min-width="12.5%"
            ></el-table-column>
            <el-table-column prop="创建时间" label="成功量" fit="true" min-width="12.5%"></el-table-column>
            <el-table-column label="状态" fit="true" min-width="12.5%">
              <!-- prop="property.stage" -->
              <template slot-scope="scope">
                <p>{{scope.row.property.stage | condition}}</p>
              </template>
            </el-table-column>
            <el-table-column label="操作" fit="true" min-width="12.5%">
              <template slot-scope="scope">
                <el-button
                  v-if="scope.row.property.stage == 0"
                  @click.native.prevent
                  type="text"
                  size="small"
                >删除</el-button>
                <el-button
                  v-if="scope.row.property.stage == 0"
                  @click.native.prevent
                  type="text"
                  size="small"
                >修改</el-button>
                <el-button
                  v-if="scope.row.property.stage == 4"
                  @click.native.prevent="dialogTableVisible = true"
                  type="text"
                  size="small"
                >评价</el-button>
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
    <el-dialog class="pop-detail" title="XX任务" :visible.sync="dialogTableVisible" top="8vh">
      <div class="pop-body">
        <el-form ref="form" :model="form" label-width="120px">
          <el-row>
            <el-col :span="24" class="top-title">
              <p>使用模型详情</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" class="title">
              <p>模型名称:</p>
            </el-col>
            <el-col :span="18" class="content">
              <p>使用模型详情使用模型详情</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" class="title">
              <p>模型分类:</p>
            </el-col>
            <el-col :span="18" class="content">
              <p>流量运营</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" class="title">
              <p>主创人员:</p>
            </el-col>
            <el-col :span="18" class="content">
              <p>某某</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" class="title">
              <p>发布时间:</p>
            </el-col>
            <el-col :span="18" class="content">
              <p>2018-09-01 13:32</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" class="title">
              <p>修改时间:</p>
            </el-col>
            <el-col :span="18" class="content">
              <p>2018-09-01 13:32</p>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24" class="top-title2">
              <p>
                应用效果打分
                <span class="rule">*</span>
              </p>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="rate">
                <i class="icon font_family icon-xingxing-weixuanzhong yellow"></i>
                <i class="icon font_family icon-xingxing-weixuanzhong yellow"></i>
                <i class="icon font_family icon-xingxing-weixuanzhong yellow"></i>
                <i class="icon font_family icon-xingxing-weixuanzhong"></i>
                <i class="icon font_family icon-xingxing-weixuanzhong"></i>
                <span>3分</span>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-input type="textarea" :rows="5" placeholder="请输入评价" v-model="form.textarea1"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="营销用户数:">
                <el-input v-model="form.name"></el-input>
                <span class="rule">*</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="营销成功用户数:">
                <el-input v-model="form.name"></el-input>
                <span class="rule">*</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="top-title">
              <p>优化建议</p>
            </el-col>
            <el-col :span="24">
              <el-input type="textarea" :rows="5" placeholder="请输入优化建议" v-model="form.textarea1"></el-input>
            </el-col>
          </el-row>
          <el-form-item class="submit">
            <el-button class="cancel">取消</el-button>
            <el-button type="primary" @click="onSubmit">评价</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'app-detail',
  components: {},
  data() {
    return {
      dialogTableVisible: false,
      form: {
        name: '',
        textarea1: ''
      },
      value: '',
      keyword: '',
      MissionTable: [],
      total: 0,
      MissionPage: 1,
      MissionLimit: 10,
      stater: ''
    }
  },
  // 过滤任务状态
  filters: {
    condition: function(val) {
      // console.log(val)
      if (val == 0) {
        val = '待审核'
      }
      if (val == 1) {
        val = '被驳回'
      }
      if (val == 2) {
        val = '待运算'
      }
      if (val == 3) {
        val = '待评价'
      }
      if (val == 4) {
        val = '已完成'
      }
      return val
    }
  },
  computed: {
    //计算属性
  },
  methods: {
    //定义函数
    onSubmit() {
      console.log('submit!')
      this.$router.push({ path: '/tasks/' + '1' })
    },
    // 修改每页显示条数
    change_size(val) {
      this.MissionLimit = val
      this.getMission()
    },
    // 修改显示页码
    change_current(val) {
      this.MissionPage = val
      this.getMission()
    },
    //获取所有任务
    async getMission() {
      let res = await this.axios({
        method: 'post',
        url: '/task/query',
        data: {
          type: 'history',
          request: JSON.stringify({
            page: this.MissionPage,
            limit: this.MissionLimit
          })
        }
      })

      if (res.data.errcode == 2000) {
        this.MissionTable = res.data.data.list
        // console.log(this.MissionTable)
        this.total = res.data.data.num
      }
    },
    //获取状态任务
    async getStaterMission(msg) {
      this.stater = msg
      let res = await this.axios({
        method: 'post',
        url: '/task/query',
        data: {
          type: 'history',
          request: JSON.stringify({
            page: this.MissionPage,
            limit: this.MissionLimit,
            property: {
              stage: this.stater
            }
          })
        }
      })
      console.log(res)
    }
  },
  //vue的生命周期钩子函数
  beforeCreate() {
    //组建实例被创建，组建属性计算之前
  },
  created() {
    //组建实例创建完成，属性已绑定，但DOM还未生成
    this.getMission()
    this.getStaterMission('0')
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
#all-task {
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
#all-task {
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
  .pop-detail {
    //max-width: 1200px;
    .el-dialog {
      width: 32%;
      min-width: 500px;
      max-width: 700px;
      border-radius: 3px;
      .el-dialog__header {
        text-align: left;
        border-bottom: 1px solid #e9e9e9;
      }
      .el-dialog__body {
        text-align: left;
        .pop-body {
          padding: 0 80px 0 30px;
        }
        .top-title,
        .top-title2 {
          padding-bottom: 20px;
          font-size: 16px;
        }
        .top-title2 {
          margin-top: 20px;
          .rule {
            color: #e20a0a;
            margin-left: 10px;
          }
        }
        .title {
          color: #666666;
        }
        .content {
          color: #333333;
        }
        .el-row {
          margin-bottom: 10px;
          .rate {
            i {
              color: #efefef;
            }
            span {
              color: #666666;
              margin-left: 10px;
            }
          }
        }
      }
    }
    .el-form {
      .el-form-item {
        margin-bottom: 10px;
        .el-form-item__label {
          text-align: left;
        }
        .el-form-item__content {
          text-align: left;
          .el-input {
            .el-input__inner {
              height: 32px;
              line-height: 32px;
            }
          }
          .el-select {
            width: 100%;
          }
          .rule {
            position: absolute;
            right: -20px;
            font-size: 18px;
            top: 0;
            color: #e20a0a;
          }
        }
      }
    }
  }
}
</style>
