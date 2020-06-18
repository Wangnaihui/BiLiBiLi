import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import "./assets/style.css";
import 'vant/lib/index.css';
import http from '../http'
Vue.prototype.$http = http
import { Toast } from 'vant';
Vue.prototype.$msg = Toast

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')