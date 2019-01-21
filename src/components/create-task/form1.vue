<template>
  <div id="form1">
    <el-row>
      <el-col :span="10">
        <el-form ref="form" :model="addItem" label-width="120px">
          <el-form-item label="项目名称:">
            <el-input v-model="addItem.itemName"></el-input>
            <span class="rule">*</span>
          </el-form-item>
          <el-form-item label="项目编号:">
            <el-input v-model="addItem.itemNum"></el-input>
            <span class="rule">*</span>
          </el-form-item>
          <el-form-item label="成功营销口径:">
            <el-input v-model="addItem.itemPath"></el-input>
            <span class="rule">*</span>
          </el-form-item>
          <el-form-item label="目标用户数:">
            <el-input v-model="addItem.goalUser"></el-input>
          </el-form-item>
          <el-form-item label="营销通路:">
            <el-select v-model="addItem.marketingPath" placeholder="请选择营销通路">
              <el-option label="10086" value="10086"></el-option>
              <el-option label="10088" value="10088"></el-option>
              <el-option label="10085" value="10085"></el-option>
              <el-option label="获客宝" value="获客宝"></el-option>
            </el-select>
            <span class="rule">*</span>
          </el-form-item>

          <el-form-item>
            <el-radio-group v-model="resource">
              <el-radio label="选择已有模型"></el-radio>
              <el-radio label="自定义模型"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="resource == '选择已有模型'" label="模型名称：" prop="setmodelID">
            <el-select v-model="addItem.modelName" @change="setModelNameID" placeholder="请选择模型">
              <el-option
                v-for="item in modelS"
                :key="item.id"
                :label="item.property.Model_Name"
                :value="item.id+'-'+item.property.Model_Name"
              ></el-option>
            </el-select>
            <span class="rule">*</span>
          </el-form-item>
          <div class="diy" v-if="resource == '自定义模型'">
            <el-form-item label="模板名称:">
              <el-input v-model="diyModel"></el-input>
              <span class="rule">*</span>
            </el-form-item>
            <el-form-item label="模型分类：">
              <el-select v-model="diyModelClass" placeholder="请选择模型分类">
                <el-option label="模型一" value="shanghai"></el-option>
                <el-option label="模型二" value="beijing"></el-option>
              </el-select>
              <span class="rule">*</span>
            </el-form-item>
            <el-form-item label="适用规模：">
              <el-select v-model="diyModelRange" placeholder="请选择适用规模">
                <el-option label="10000人以下" value="shanghai"></el-option>
                <el-option label="20000人以下" value="beijing"></el-option>
              </el-select>
              <span class="rule">*</span>
            </el-form-item>
            <el-form-item label="需求描述：">
              <el-input type="textarea" :rows="7" placeholder="请输入内容" v-model="demaendContent"></el-input>
            </el-form-item>
            <el-form-item label="未选原因：">
              <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="cause"></el-input>
              <span class="rule">*</span>
            </el-form-item>
          </div>
          <el-form-item class="submit">
            <el-button class="cancel" @click="resetForm(addItem)">取消</el-button>
            <el-button type="primary" @click="foundItem">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'create-task',
  components: {},
  data() {
    return {
      resource: '选择已有模型',
      // 添加项目
      addItem: {
        itemName: '', //项目名
        itemNum: '', //项目编号
        itemPath: '', //成功营销口径
        goalUser: '', //预计用户
        marketingPath: '', //营销通路
        modelID: '', //模板id
        modelName: '' //模板名
      },
      diyModel: '', //自定义模板名
      diyModelClass: '', //自定义模板分类
      diyModelRange: '', //自定义模板适用范围
      demaendContent: '', //需求描述
      cause: '', //未选原因
      modelS: []
    }
  },
  computed: {
    //计算属性
  },
  methods: {
    //取消重置按钮
    resetForm() {
      this.addItem = {}
    },
    //提交按钮
    async foundItem() {
      if (!this.addItem.itemName) {
        this.$message.error('项目名称不能为空')
        return
      }
      if (!this.addItem.itemNum) {
        this.$message.error('项目编号不能为空')
        return
      }
      if (!this.addItem.itemPath) {
        this.$message.error('成功营销口径不能为空')
        return
      }
      if (!this.addItem.marketingPath) {
        this.$message.error('营销通路不能为空')
        return
      }
      if (!this.addItem.modelName) {
        this.$message.error('模型名称不能为空')
        return
      }
      if (!this.addItem.modelID) {
        this.$message.error('数据错误,请重新选择模板')
        return
      }
      // console.log(this.addItem)
      let res = await this.axios({
        method: 'post',
        url: '/task/save',
        data: {
          type: 'add',
          request: {
            name: this.addItem.itemName,
            code: this.addItem.itemNum,
            koujing: this.addItem.itemPath,
            user_num: this.addItem.goalUser,
            tonglu: this.addItem.marketingPath,
            template_id: this.addItem.modelID,
            template: this.addItem.modelName
          }
        }
      })
      // console.log(res)
      if (res.data.errcode == 2000) {
        this.$message.success('创建成功')
        this.addItem = {}
        // console.log(this.addItem)
      } else {
        this.$message.error('数据错误,请重新创建')
        this.addItem = {}
      }
    },
    // 重新设置模板名和id
    setModelNameID() {
      let modelArr = this.addItem.modelName.split('-')
      this.addItem.modelName = modelArr[1]
      this.addItem.modelID = modelArr[0]
      console.log(this.addItem)
    },
    //渲染模块名称
    async getModel() {
      let res = await this.axios({
        method: 'post',
        url: '/template/query',
        data: {
          type: 'list',
          request: JSON.stringify({
            page: 1,
            limit: 999
          })
        }
      })
      if (res.data.errcode == 2000) {
        this.modelS = res.data.data.list
        // console.log(this.modelS)
      }
    }
  },
  //vue的生命周期钩子函数
  beforeCreate() {
    //组建实例被创建，组建属性计算之前
  },
  created() {
    if (this.$store.state.modelInFn.id) {
      this.addItem.modelName = this.$store.state.modelInFn.name
      this.addItem.modelID = this.$store.state.modelInFn.id
    }
    this.getModel()
    // console.log(this.addItem.modelName)
    // console.log(this.addItem.modelID)
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
  },
  watch: {
    resource(n, o) {
      console.log(n)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/styles.less';
#form1 {
  margin-top: 20px;
  margin-left: 20px;
  .rule {
    position: absolute;
    right: -20px;
    font-size: 18px;
    top: 0;
    color: #e20a0a;
  }
  .submit {
    padding-left: 30px;
    padding-top: 20px;
  }
  .cancel {
    background-color: #f7f7f7;
    color: #666666;
  }
}
</style>
<style lang="less">
#form1 {
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
      }
    }
  }
}
</style>
