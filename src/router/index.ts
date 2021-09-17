import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/compute_watcher",
    name: "Compuute Watcher",
    component: () =>
      import(
        /* webpackChunkName: "compute watcher" */ "../views/1ComputeWatcher.vue"
      ),
  },
  {
    path: "/binding",
    name: "Binding",
    component: () =>
      import(/* webpackChunkName: "2Binding" */ "../views/2Binding.vue"),
  },
  {
    path: "/listrender",
    name: "Listrender",
    component: () =>
      import(/* webpackChunkName: "3ListRender" */ "../views/3ListRender.vue"),
  },
  {
    path: "/events",
    name: "Events",
    component: () =>
      import(/* webpackChunkName: "4Event" */ "../views/4Event.vue"),
  },
  {
    path: "/yorimiti",
    name: "Yorimiti",
    component: () =>
      import(/* webpackChunkName: "Yorimiti" */ "../views/Yorimiti.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
