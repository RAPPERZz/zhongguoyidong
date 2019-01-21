<template>
  <div id="app">
    <!-- 右侧导航 -->
    <div class="nav-menu" v-if="$route.meta.userType">
      <div class="title">
        <h5>建模取数平台</h5>
      </div>
      <div class="menu">
        <ul v-if="this.$store.state.users.role === '营销人员' ">
          <li :class="$route.meta.type == 'index' ? 'active':''" @click="$router.push({path:'/'})">
            <span>模型库</span>
          </li>
          <li
            :class="$route.meta.type == 'create-task' ? 'active':''"
            @click="$router.push({path:'/create-task'})"
          >
            <span>任务创建</span>
          </li>
          <li
            :class="$route.meta.type == 'tasks' ? 'active':''"
            @click="$router.push({path:'/tasks'})"
          >
            <span>任务查看</span>
          </li>
          <li>
            <span>应用统计</span>
          </li>
        </ul>
        <!-- 分公司领导 -->
        <ul v-else-if="this.$store.state.users.role||uxerRole === '分公司审批人员' ">
          <li
            :class="$route.meta.type == 'branch-my-tasks' ? 'active':''"
            @click="$router.push({path:'/branch-office/my-tasks'})"
          >
            <span>我的工作</span>
          </li>
          <li
            :class="$route.meta.type == 'tasks' ? 'active':''"
            @click="$router.push({path:'/tasks'})"
          >
            <span>任务查看</span>
          </li>
        </ul>
        <!-- 市公司领导 -->
        <ul v-else-if="this.$store.state.users.role||uxerRole === '市公司审批领导' ">
          <li
            :class="$route.meta.type == 'branch-my-tasks' ? 'active':''"
            @click="$router.push({path:'/branch-office/my-tasks'})"
          >
            <span>我的工作</span>
          </li>
          <li
            :class="$route.meta.type == 'tasks' ? 'active':''"
            @click="$router.push({path:'/tasks'})"
          >
            <span>任务查看</span>
          </li>
        </ul>
        <!-- 支撑部门领导 -->
        <ul v-else-if="this.$store.state.users.role||uxerRole === '支撑部门领导审批' ">
          <li
            :class="$route.meta.type == 'department-my-tasks' ? 'active':''"
            @click="$router.push({path:'/department-office/my-tasks'})"
          >
            <span>我的工作</span>
          </li>
          <li
            :class="$route.meta.type == 'tasks' ? 'active':''"
            @click="$router.push({path:'/tasks'})"
          >
            <span>任务查看</span>
          </li>
        </ul>
        <!-- 支配支撑人员 -->
        <ul v-else-if="this.$store.state.users.role||uxerRole === '支撑人员'">
          <li
            :class="$route.meta.type == 'personnel-my-tasks' ? 'active':''"
            @click="$router.push({path:'/personnel-office/my-tasks'})"
          >
            <span>我的工作</span>
          </li>
          <li
            :class="$route.meta.type == 'tasks' ? 'active':''"
            @click="$router.push({path:'/tasks'})"
          >
            <span>任务查看</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 顶部模块状态 -->
    <div class="nav-tab" v-if="$route.meta.isTab">
      <div class="cards">
        <div
          v-if="$route.meta.type == 'index'"
          class="card pointer"
          :class="$route.name == 'index' ? 'selected':''"
          @click="$router.push({path:'/'})"
        >
          <span>模型首页</span>
        </div>

        <div v-if="$route.name == 'broadband-mining'" class="card selected">
          <span>宽带挖掘</span>
          <i
            class="icon font_family icon-dingbubiaoqianguanbianniu"
            @click="$router.push({path:'/'})"
          ></i>
        </div>

        <div v-else-if="$route.name == 'model-detail'" class="card">
          <span class="pointer" @click="$router.push({path:'/model/broadband-mining'})">宽带挖掘</span>
          <i
            class="icon font_family icon-dingbubiaoqianguanbianniu"
            @click="$router.push({path:'/'})"
          ></i>
        </div>
        <div v-if="$route.name == 'model-detail'" class="card selected">
          <span>基本信息</span>
          <i class="icon font_family icon-dingbubiaoqianguanbianniu" @click="$router.go(-1)"></i>
        </div>

        <div
          v-if="$route.meta.type == 'tasks'"
          class="card pointer"
          :class="$route.name == 'tasks' ? 'selected':''"
          @click="$router.push({path:'/tasks'})"
        >
          <span>任务列表</span>
        </div>
        <div v-if="$route.name == 'task-detail'" class="card selected">
          <span>任务详情</span>
          <i
            class="icon font_family icon-dingbubiaoqianguanbianniu"
            @click="$router.push({path:'/tasks'})"
          ></i>
        </div>
        <!--  分公司 -->
        <div
          v-if="$route.meta.type == 'branch-my-tasks'"
          class="card pointer"
          :class="$route.name == 'branch-my-tasks' ? 'selected':''"
          @click="$router.push({path:'/branch-office/my-tasks'})"
        >
          <span>任务列表</span>
        </div>
        <div v-if="$route.name == 'branch-task-detail'" class="card selected">
          <span>任务详情</span>
          <i
            class="icon font_family icon-dingbubiaoqianguanbianniu"
            @click="$router.push({path:'/branch-office/my-tasks'})"
          ></i>
        </div>
        <!-- 支撑部门 -->
        <div
          v-if="$route.meta.type == 'department-my-tasks'"
          class="card pointer"
          :class="$route.name == 'department-my-tasks' ? 'selected':''"
          @click="$router.push({path:'/department-office/my-tasks'})"
        >
          <span>任务列表</span>
        </div>
        <div v-if="$route.name == 'department-task-detail'" class="card selected">
          <span>任务详情</span>
          <i
            class="icon font_family icon-dingbubiaoqianguanbianniu"
            @click="$router.push({path:'/department-office/my-tasks'})"
          ></i>
        </div>
        <!-- 员工 -->
        <div
          v-if="$route.meta.type == 'personnel-my-tasks'"
          class="card pointer"
          :class="$route.name == 'personnel-my-tasks' ? 'selected':''"
          @click="$router.push({path:'/personnel-office/my-tasks'})"
        >
          <span>任务列表</span>
        </div>
        <div v-if="$route.name == 'personnel-task-detail'" class="card selected">
          <span>任务详情</span>
          <i
            class="icon font_family icon-dingbubiaoqianguanbianniu"
            @click="$router.push({path:'/personnel-office/my-tasks'})"
          ></i>
        </div>
      </div>

      <div class="user pointer" @mouseover="show_user_opt = true" @mouseout="show_user_opt = false">
        <img class="avatar" src="./assets/img/logo.png" alt>
        <!-- v-on:getUserInFo="getUserInFo" -->
        <span class="nickname">{{this.$store.state.users.user_name||userName}}</span>
        <div class="user_opt" v-show="show_user_opt">
          <div class="opt">
            <span>修改密码</span>
            <span>退出登录</span>
          </div>
        </div>
      </div>
    </div>

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      value: [],
      show_user_opt: false,

      // this.$store.state.users.user_name
      // this.$store.state.users.role
      //localStorage.getItem('uxerName')
      //localStorage.getItem('uxerRole')
      userName: localStorage.getItem('uxerName'),
      uxerRole: localStorage.getItem('uxerRole')
    }
  },
  methods: {
    // async getUserInfo() {
    //   let res = await this.axios({
    //     method: 'get',
    //     url: '/user/getUsersData'
    //   })
    //   if (res.data.errcode == 2000) {
    //     this.userName = res.data.data.user_name
    //     this.uxerRole = res.data.data.role
    //     // console.log(res)
    //   }
    // }
  },
  created() {
    // this.getUserInfo()
    // console.log(this.$store.state.users)
  }
}
</script>

<style lang="less">
@import './assets/css/styles.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  background-color: #f2f2f2;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e9e9e9;
  .nav-menu {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: @menu-width;
    background-color: #404040;
    border-right: solid 1px #e6e6e6;
    .title {
      padding: 20px 0;
      h5 {
        font-size: 18px;
        color: #fff;
      }
    }
    .menu {
      ul {
        li {
          padding: 15px 20px;
          cursor: pointer;
          span {
            font-size: 14px;
            color: #8c8c8c;
          }
        }
        li:hover {
          background-color: #4d4d4d;
          span {
            color: #fff;
          }
        }
        li.active {
          background-color: #108ee9;
          span {
            color: #fff;
          }
        }
      }
    }
  }
  .nav-tab {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100vw - @menu-width);
    margin-left: @menu-width;
    height: @nav-height;
    .cards {
      text-align: left;
      padding: 10px 11px;
      padding-bottom: 0;
      border-bottom: 1px solid #e9e9e9;
      display: flex;
      background: #f2f2f2;
      min-height: 50px;
      .card {
        width: 120px;
        line-height: 50px;
        padding: 0 10px;
        position: relative;
        &.selected {
          position: relative;
          bottom: -1px;
          left: -1px;
          line-height: 51px;
          background-color: #fff;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          border: 1px solid #e9e9e9;
          border-bottom: 0;
          &::after {
            content: none;
          }
        }
        .icon {
          float: right;
          margin-right: 3px;
          color: #666666;
          font-size: 12px;
          transform: scale(0.8);
        }
        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 10%;
          height: 80%;
          width: 1px;
          background-color: #d8d8d8;
        }
      }
    }

    .user {
      position: absolute;
      right: 20px;
      top: 20px;
      .avatar {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        margin-right: 10px;
        vertical-align: middle;
      }
      .nickname {
        font-size: 14px;
        color: #666666;
        vertical-align: middle;
      }
      .user_opt {
        position: absolute;
        right: 0px;
        top: 0;
        padding-top: 30px;
        .opt {
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
          span {
            width: 96px;
            padding: 10px 0px;
            text-align: center;
            display: block;
          }
          &::before {
            content: '';
            display: block;
            width: 0;
            height: 0;
            position: absolute;
            top: 18px;
            right: 8px;
            height: 0;
            border-width: 6px;
            border-style: solid;
            border-color: transparent transparent #fff transparent;
            z-index: 10;
          }
        }
      }
    }
  }
}
</style>
