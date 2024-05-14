import Vue from "vue";
import App from "./App.vue";

Vue.config.roductionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");