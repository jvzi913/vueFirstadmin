// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/mainRoutes.js'; //引入所有路由
import rem from './assets/js/rem.js'; //引入rem的js
import iconfont from './assets/css/iconfont.css'; //引入阿里巴巴图标

//请求方式
import Axios from 'axios'
Vue.prototype.$axios = Axios;
//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入URL
import globalAPI from './util/globalAPI';
Vue.prototype.$globalAPI = globalAPI.commonUrl;

Vue.config.productionTip = false; //判断是否为生产模式
Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
