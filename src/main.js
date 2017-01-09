import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import store from './store'

import count from './components/count'

Vue.use(VueRouter)

const router = new VueRouter({
  // 使用 HTML 5 模式（沒有 hash, ex: #/hello）
  mode: 'history',
  base: __dirname,
  // routre 表
  routes: [
    {
      path: '/count',
      name: 'count',
      component: count
    },
    // 當 url path 不符合 router 表的時候，預設轉址到
    // 順序一定要最後面
    { path: '/*', redirect: '/count' }
  ]
});


new Vue({
  el: '#app',
  // router 掛載設定
  router,
  // 加入 store
  store,
  // app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
  render: h => h( App )
});
