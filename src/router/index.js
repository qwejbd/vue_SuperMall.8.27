import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home/Home.vue"),
    meta: {
      isShowTab: true,
    },
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("../views/Home/Detail.vue"),
    meta: {
      isShowTab: false,
    },
  },
  {
    path: "/classify",
    name: "classify",
    component: () => import("../views/classify/Classify.vue"),
    meta: {
      isShowTab: true,
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/cart/Cart.vue"),
    meta: {
      isShowTab: true,
    },
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("../views/mine/Mine.vue"),
    meta: {
      isShowTab: true,
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
