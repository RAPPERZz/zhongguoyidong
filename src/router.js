import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/components/index/index.vue'], resolve),
      meta: {
        title: '首页',
        keepAlive: false, // 是否缓存
        isTab: true, // 是否显示菜单
        userType: 1,
        type: 'index'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/Logln.vue'], resolve),
      meta: {
        title: '登录',
        keepAlive: false, // 是否缓存
        isTab: false // 是否显示菜单
      }
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/components/index/index.vue'], resolve),
      meta: {
        title: '首页',
        keepAlive: false, // 是否缓存
        isTab: true, // 是否显示菜单
        userType: 1,
        type: 'index'
      }
    },
    {
      path: '/model/broadband-mining',
      name: 'broadband-mining',
      component: resolve =>
        require(['@/components/model/broadband-mining.vue'], resolve),
      meta: {
        title: '宽带挖掘',
        keepAlive: false, // 是否缓存
        isTab: true, // 是否显示菜单
        userType: 1,
        type: 'index'
      }
    },
    {
      path: '/model/detail/:detail_id',
      name: 'model-detail',
      component: resolve =>
        require(['@/components/model/model-detail.vue'], resolve),
      meta: {
        title: '基本信息详情',
        keepAlive: false, // 是否缓存
        isTab: true, // 是否显示菜单
        userType: 1,
        type: 'index'
      }
    },
    {
      path: '/create-task',
      name: 'create-task',
      component: resolve =>
        require(['@/components/create-task/create-task.vue'], resolve),
      meta: {
        title: '创建任务',
        keepAlive: false, // 是否缓存
        isTab: true, // 是否显示菜单
        userType: 1,
        type: 'create-task'
      }
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: resolve =>
        require(['@/components/check-task/tasks.vue'], resolve),
      meta: {
        title: '查看任务',
        keepAlive: false, // 是否缓存
        isTab: true, // 是否显示菜单
        userType: 1,
        type: 'tasks'
      }
    },
    {
      path: '/tasks/:task_id',
      name: 'task-detail',
      component: resolve =>
        require(['@/components/check-task/task-detail.vue'], resolve),
      meta: {
        title: '任务详情',
        keepAlive: false, // 是否缓存
        isTab: true, // 是否显示菜单
        userType: 1,
        type: 'tasks'
      }
    },
    {
      path: '/branch-office/my-tasks',
      name: 'branch-my-tasks',
      component: resolve =>
        require(['@/components/branch-office/my-tasks.vue'], resolve),
      meta: {
        title: '我的任务',
        keepAlive: false, // 是否缓存
        isTab: true, // 是否显示菜单
        userType: 2,
        type: 'branch-my-tasks'
      }
    },
    {
      path: '/branch-office/my-tasks/:task_id',
      name: 'branch-task-detail',
      component: resolve =>
        require(['@/components/branch-office/task-detail.vue'], resolve),
      meta: {
        title: '任务详情',
        keepAlive: false, // 是否缓存
        isTab: true, // 是否显示菜单
        userType: 2,
        type: 'branch-my-tasks'
      }
    },

    {
      path: '/department-office/my-tasks',
      name: 'department-my-tasks',
      component: resolve =>
        require(['@/components/department-office/my-tasks.vue'], resolve),
      meta: {
        title: '我的任务',
        keepAlive: false, // 是否缓存
        isTab: true, // 是否显示菜单
        userType: 3,
        type: 'department-my-tasks'
      }
    },
    {
      path: '/department-office/my-tasks/:task_id',
      name: 'department-task-detail',
      component: resolve =>
        require(['@/components/department-office/task-detail.vue'], resolve),
      meta: {
        title: '任务详情',
        keepAlive: false, // 是否缓存
        isTab: true, // 是否显示菜单
        userType: 3,
        type: 'department-my-tasks'
      }
    },

    {
      path: '/personnel-office/my-tasks',
      name: 'personnel-my-tasks',
      component: resolve =>
        require(['@/components/personnel-office/my-tasks.vue'], resolve),
      meta: {
        title: '我的任务',
        keepAlive: false, // 是否缓存
        isTab: true, // 是否显示菜单
        userType: 4,
        type: 'personnel-my-tasks'
      }
    },
    {
      path: '/personnel-office/my-tasks/:task_id',
      name: 'personnel-task-detail',
      component: resolve =>
        require(['@/components/personnel-office/task-detail.vue'], resolve),
      meta: {
        title: '任务详情',
        keepAlive: false, // 是否缓存
        isTab: true, // 是否显示菜单
        userType: 4,
        type: 'personnel-my-tasks'
      }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   // console.log(to, from, next)

//   if (to.path === '/login') {
//     next()
//     return
//   }

//   let toKen = localStorage.getItem('token')
//   if (toKen) {
//     next()
//   } else {
//     next('/login')
//   }
// })

export default router
