<template>
<div id="form1">
  <el-row>
    <el-col :span="10">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="项目名称:">
          <el-input v-model="form.name"></el-input>
          <span class="rule">*</span>
        </el-form-item>
        <el-form-item label="项目编号:">
          <el-input v-model="form.name"></el-input>
          <span class="rule">*</span>
        </el-form-item>
        <el-form-item label="成功营销口径:">
          <el-input v-model="form.name"></el-input>
          <span class="rule">*</span>
        </el-form-item>
        <el-form-item label="目标用户数:">
          <el-input v-model="form.name"></el-input>

        </el-form-item>
        <el-form-item label="营销通路:">
          <el-select v-model="form.tolu" placeholder="请选择活动区域">
            <el-option label="通路1" value="1"></el-option>
            <el-option label="通路2" value="2"></el-option>
          </el-select>
          <span class="rule">*</span>
        </el-form-item>

        <el-form-item>
          <el-radio-group v-model="resource">
            <el-radio label="选择已有模型" ></el-radio>
            <el-radio label="自定义模型" ></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="resource == '选择已有模型'" label="模型名称：">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <span class="rule">*</span>
        </el-form-item>
        <div class="diy" v-if="resource == '自定义模型'" >
          <el-form-item label="模板名称:">
            <el-input v-model="form.name"></el-input>
            <span class="rule">*</span>
          </el-form-item>
          <el-form-item label="模型分类：">
            <el-select v-model="form.region" placeholder="请选择模型分类">
              <el-option label="模型一" value="shanghai"></el-option>
              <el-option label="模型二" value="beijing"></el-option>
            </el-select>
            <span class="rule">*</span>
          </el-form-item>
          <el-form-item label="适用规模：">
            <el-select v-model="form.region" placeholder="请选择适用规模">
              <el-option label="10000人以下" value="shanghai"></el-option>
              <el-option label="20000人以下" value="beijing"></el-option>
            </el-select>
            <span class="rule">*</span>
          </el-form-item>
          <el-form-item label="需求描述：">
            <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入内容"
              v-model="form.textarea1">
            </el-input>
          </el-form-item>
          <el-form-item label="未选原因：">
            <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入内容"
              v-model="form.textarea2">
            </el-input>
            <span class="rule">*</span>
          </el-form-item>
        </div>
        <el-form-item class="submit">
            <el-button class="cancel">取消</el-button>
          <el-button type="primary" @click="onSubmit">提交</el-button>

        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</div>
</template>
<script>
export default {
  name: 'create-task',
  components: {

  },
  data(){
    return{
      resource:'选择已有模型',
      form: {
         name: '',
         tolu:'1',
         textarea1:'',
         textarea2:'',
       }
    }
  },
  computed:{
    //计算属性
  },
  methods:{
    //定义函数
    onSubmit() {
       console.log('submit!');
     }
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
  },
  watch:{
    resource(n,o){
      console.log(n);
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/styles.less';
#form1{
  margin-top: 20px;
  margin-left: 20px;
  .rule{
    position: absolute;
    right: -20px;
    font-size: 18px;
    top: 0;
    color:#E20A0A;
  }
  .submit{
    padding-left: 30px;
    padding-top: 20px;
  }
  .cancel{
    background-color: #F7F7F7;
    color:#666666;
  }
}

</style>
<style lang="less">
  #form1{
    .el-form{
      .el-form-item{
        margin-bottom: 10px;
        .el-form-item__label{
          text-align: left;
        }
        .el-form-item__content{
          text-align: left;
          .el-input{
            .el-input__inner{
              height: 32px;
              line-height: 32px;
            }
          }
          .el-select{
            width: 100%;
          }
        }
      }
    }
  }
</style>
