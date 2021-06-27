import Vue from "vue";
import App from "./App.vue";
import router from "./router";

if (localStorage.users === undefined) {
  let users = [
    {
      username: "admin",
      password: "admin",
    },
  ];
  localStorage.setItem("users", JSON.stringify(users));
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
