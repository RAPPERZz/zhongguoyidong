<template>
  <div id="index" ref="index">
    <div class="main">
      <!-- 搜索框  -->
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
        <!-- 左侧模块 -->
        <div class="left-item">
          <ul>
            <li @click="$router.push({path:'/model/broadband-mining'})">
              <span>宽带挖掘</span>
            </li>
            <li>
              <span>流量运营</span>
            </li>
            <li>
              <span>政企拓展</span>
            </li>
            <li>
              <span>终端发展</span>
            </li>
            <li>
              <span>异网挖掘</span>
            </li>
            <li>
              <span>两网分析</span>
            </li>
            <li>
              <span>存量维系</span>
            </li>
            <li>
              <span>客户发展</span>
            </li>
            <li>
              <span>其他业务</span>
            </li>
          </ul>
        </div>

        <div class="right-item">
          <el-row class="line-item" :gutter="10">
            <el-col :span="6">
              <total></total>
            </el-col>
            <el-col :span="18">
              <recommend-best></recommend-best>
            </el-col>
          </el-row>

          <el-row class="line-item" :gutter="10">
            <el-col :span="18">
              <recommend-new></recommend-new>
            </el-col>
            <el-col :span="6">
              <recommend-hot></recommend-hot>
            </el-col>
          </el-row>

          <el-row class="line-item" :gutter="10">
            <el-col :span="6">
              <top-hot></top-hot>
            </el-col>
            <el-col :span="6">
              <top-used></top-used>
            </el-col>
            <el-col :span="6">
              <top-person></top-person>
            </el-col>
            <el-col :span="6">
              <top-blacklist></top-blacklist>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import total from './total.vue'
import recommend_best from './recommend-best.vue'
import recommend_new from './recommend-new.vue'
import recommend_hot from './recommend-hot.vue'
import top_hot from './top-hot.vue'
import top_used from './top-used.vue'
import top_person from './top-person.vue'
import top_blacklist from './top-blacklist.vue'
export default {
  name: 'index',
  components: {
    total: total,
    'recommend-best': recommend_best,
    'recommend-new': recommend_new,
    'recommend-hot': recommend_hot,
    'top-hot': top_hot,
    'top-used': top_used,
    'top-person': top_person,
    'top-blacklist': top_blacklist
  },
  data() {
    return {
      value: '',
      keyword: '',
      user: {}
    }
  },
  computed: {
    //计算属性
  },
  methods: {
    //获取用户信息
    async getUserInfo() {
      let res = await this.axios({
        method: 'get',
        url: '/user/getUsersData'
      })
      console.log(res)
      if (res.data.errcode == 2000) {
        this.user = res.data.data
        // console.log(this.user)
        this.$emit('getUserInFo', this.user)
      }
    }
  },

  created() {
    this.getUserInfo()
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/styles.less';
#index {
  margin-left: @menu-width;
  margin-top: @nav-height;
  width: calc(100vw - @menu-width);
  .main {
    padding: 0 10px;
    .top-search {
      width: 100%;
      height: 60px;
      background-color: #fff;
      border-radius: 3px;
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
  }
}
</style>
<style lang="less">
#index {
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
      display: flex;
      margin-top: 15px;
      height: calc(100vh - 152px);
      // overflow-y: scroll;
      .left-item {
        width: 100px;
        height: 100%;
        background-color: #fff;
        border-radius: 3px;
        ul {
          li {
            padding: 12px 20px;
            span {
              cursor: pointer;
              color: #3f3f3f;
              font-size: 14px;
            }
          }
        }
      }
      .right-item {
        width: calc(100% - 110px);
        height: 100%;
        margin-left: 10px;
        //background-color: #fff;
        overflow-y: scroll;
        .line-item {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
