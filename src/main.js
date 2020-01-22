import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "vue-material-design-icons/styles.css";

Vue.use(VueRouter);

const ListSets = () => import("./components/ListSets.vue");
const Set = () => import("./components/Set.vue");

const routes = [
  {
    name: "index",
    path: "/",
    component: ListSets
  },
  {
    name: "set",
    path: "/:id",
    component: Set
  }
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
