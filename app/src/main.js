import Vue from "vue";
import App from "./App.vue";
import Router from 'vue-router';
Vue.config.roductionTip = false;

const router = new Router({
    routes: [
      {
 
      }
    ]
   })

new Vue({
    render: h => h(App),
    router
}).$mount("#app");