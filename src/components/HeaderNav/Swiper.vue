<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swiper" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("HOME_SWIPER");
  },
  computed: {
    swiper: function() {
      return this.$store.state.swiper.swiper;
    },
  },
};
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item img {
  width: 100%;
  color: #fff;
}
</style>
