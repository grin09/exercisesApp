import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "vue-material-design-icons/styles.css";

Vue.use(VueRouter);

const ListSets = () => import("./components/ListSets.vue");
const AddList = () => import("./components/AddList.vue");
const Set = () => import("./components/Set.vue");
const AddItem = () => import("./components/AddItem.vue");

const routes = [
  {
    name: "index",
    path: "/",
    redirect: "/sets"
  },
  {
    name: "sets",
    path: "/sets",
    component: ListSets
  },
  {
    name: "sets-add",
    path: "/sets-add",
    component: AddList
  },
  {
    name: "set",
    path: "/sets/:id",
    component: Set
  },
  {
    name: "set-add",
    path: "/sets/:id/add",
    component: AddItem
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
