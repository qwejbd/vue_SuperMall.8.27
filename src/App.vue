<template>
  <div>
    <router-view></router-view>
    <Taber
      :item="item"
      :defaultSelectIndex="0"
      v-show="this.$route.meta.isShowTab"
    ></Taber>
  </div>
</template>

<script>
import Taber from "./components/Taber/Taber";
export default {
  components: {
    Taber,
  },
  data() {
    return {
      item: [
        {
          title: "首页",
          icon: require("./assets/img/tabbar/home.svg"),
          icon_active: require("./assets/img/tabbar/home_active.svg"),
          path: "/",
        },
        {
          title: "分类",
          icon: require("./assets/img/tabbar/category.svg"),
          icon_active: require("./assets/img/tabbar/category_active.svg"),
          path: "/classify",
        },
        {
          title: "购物车",
          icon: require("./assets/img/tabbar/shopcart.svg"),
          icon_active: require("./assets/img/tabbar/shopcart_active.svg"),
          path: "/cart",
        },
        {
          title: "我的",
          icon: require("./assets/img/tabbar/profile.svg"),
          icon_active: require("./assets/img/tabbar/profile_active.svg"),
          path: "/mine",
        },
      ],
    };
  },
  mounted() {
    this.isMobile();
  },
  methods: {
    // 添加判断方法
    isMobile() {
      this.flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      // console.log(this.flag);
      if (this.flag === null) {
        console.log("pc端");
        this.rightNavShow = true;
      } else {
        console.log("移动端");
        this.rightNavShow = false;
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  margin: 0;
}
</style>
