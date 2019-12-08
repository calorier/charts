import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import HighchartsVue from 'highcharts-vue'
import Highchart from "highcharts/highcharts"
import stockInit from "highcharts/modules/stock"

stockInit(Highchart)
Vue.config.productionTip = false
Vue.use(axios,VueAxios)
Vue.use(HighchartsVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
