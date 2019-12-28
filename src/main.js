import Vue from 'vue'
import App from './App.vue'

//引入vue router
import VueRouter from 'vue-router'

//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//引入highcharts
import HighchartsVue from 'highcharts-vue'
import Highchart from "highcharts/highcharts"
import stockInit from "highcharts/modules/stock"

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


stockInit(Highchart)
Vue.config.productionTip = false

Vue.use(axios, VueAxios)
Vue.use(HighchartsVue)
Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
