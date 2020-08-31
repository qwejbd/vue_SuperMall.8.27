<template>
  <div>
    <div class="body">
      <div v-for="(item, index) in TitleCard" :key="index">
        <img :src="item.image" alt="" class="img1" />
        <p class="title">{{ item.title }}</p>
        <span class="price">
          <span style="color:#FF6699">
            {{ item.price }}
          </span>
          <van-icon name="star-o" /> {{ item.cfav }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("CARD_TITLE");
  },
  computed: {
    TitleCard: function() {
      return this.$store.state.CART.TitleCard;
    },
  },
};
</script>
<style lang="scss" scoped>
.body {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-bottom: 100px;
  &.body div {
    margin: 10px 10px 0px 10px;
    padding-top: 50px;
    width: 45%;
    .img1 {
      width: 100%;
      height: 400px;
      border-radius: 20px;
    }
    .title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    .price {
      margin-left: 60px;
    }
  }
}
</style>
