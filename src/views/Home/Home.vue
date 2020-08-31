<template>
  <div class="container">
    <MyNav></MyNav>
    <MySwiper></MySwiper>
    <MySwiperNext></MySwiperNext>
    <MyRage></MyRage>
    <MyCard></MyCard>
    <el-backtop target=".container">
      <div class="toTop">
        <img
          src="../../assets/img/common/top.png"
          width="40px"
          height="40px"
          alt=""
        />
      </div>
    </el-backtop>
  </div>
</template>

<script>
import HeaNav from "../../components/HeaderNav/HeaNav";
import Swiper from "../../components/HeaderNav/Swiper";
import SwiperNext from "../../components/HeaderNav/SwiperNext";
import Rage from "../../components/HeaderNav/Rage";
import Card from "../../components/HeaderNav/Card";
export default {
  components: {
    MyNav: HeaNav,
    MySwiper: Swiper,
    MySwiperNext: SwiperNext,
    MyRage: Rage,
    MyCard: Card,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  /*核心  */
  height: 100vh;
  /* 核心 */
  overflow-x: hidden;
}
.toTop {
  padding: 10px;
  box-shadow: 0px 0px 5px black;
}
</style>
