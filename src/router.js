import Vue from "vue";
import Router from "vue-router";
import fastClick from "fastclick";

import Home from "./views/home/Home.vue";

Vue.use(Router);
fastClick.attach(document.body);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/List",
      name: "List",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "List" */ "./views/list/List.vue")
    }
  ]
});
