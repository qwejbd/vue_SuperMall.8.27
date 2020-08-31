<template>
  <div @click="OnClick">
    <div>
      <img
        :src="index == selectIndex ? Taber.icon_active : Taber.icon"
        alt=""
        class="img1"
      />
    </div>
    <div>
      <div :class="index == selectIndex ? 'title_active' : 'title'">
        {{ Taber.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Taber: this.item,
    };
  },
  props: {
    item: {
      type: Object,
    },
    index: Number,
    selectIndex: Number,
  },
  mounted() {
    // console.log(this.item);
  },
  methods: {
    OnClick() {
      this.$router.push(this.Taber.path);
      this.$emit("ChangeSelectIndex", this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.title_active {
  color: red;
}
.title {
  color: black;
}
.img1 {
  width: 50px;
  height: 50px;
}
</style>
