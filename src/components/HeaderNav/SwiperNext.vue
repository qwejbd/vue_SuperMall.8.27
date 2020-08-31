<template>
  <div>
    <van-grid :border="false">
      <van-grid-item v-for="(item, index) in recommend" :key="index">
        <template #icon>
          <a :href="item.link">
            <img :src="item.image" class="img" alt />
          </a>
        </template>
        <template #text>
          <p>{{ item.title }}</p></template
        >
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("SWIPER_NEXT");
  },
  computed: {
    recommend: function() {
      return this.$store.state.swiperNext.recommend;
    },
  },
};
</script>

<style lang="scss" scoped>
.img {
  width: 110px;
  height: 110px;
}
</style>
