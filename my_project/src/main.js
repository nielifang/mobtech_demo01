// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import ElementUI from 'element-ui';
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import 'element-ui/lib/theme-chalk/index.css'
import router from './router' ;
// import '@/sass/base';
import "../src/sass/base.scss"
import echarts from 'echarts';

import apiHome from '@/api/home';
import functionMap from '@/graph/inmap_.js';
import lineChart from '@/components/charts/lineChart';
import doughnut from '@/components/charts/doughnut'
// Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(apiHome);
Vue.use(functionMap);
Vue.use(iView);
Vue.prototype.$echarts = echarts

/**
 * 全局组件注册
 */
 Vue.component('lineChart', lineChart)
Vue.component('doughnut',doughnut)
/* eslint-disable no-new */
new Vue({
  el: '#MobApp',
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
