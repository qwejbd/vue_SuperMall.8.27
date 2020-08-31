<template>
  <div>
    <div class="Taber_Wraper">
      <div class="Taber_Item">
        <myTaber
          v-for="(item, index) in TaberItem"
          :key="index"
          :item="item"
          :index="index"
          :selectIndex="selectIndex"
          @ChangeSelectIndex="ChangeSelectIndex"
        ></myTaber>
      </div>
    </div>
  </div>
</template>

<script>
import Taber_Item from "./Taber_Item";
export default {
  components: {
    myTaber: Taber_Item,
  },

  props: {
    item: {
      type: Array,
      required: true,
    },
    defaultSelectIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      TaberItem: this.item,
      selectIndex: this.defaultSelectIndex,
    };
  },
  mounted() {},
  methods: {
    ChangeSelectIndex(index) {
      this.selectIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.Taber_Wraper {
  position: fixed;
  width: 100%;
  height: 90px;
  bottom: 0px;
  left: 0px;
  border-top: 1px solid gray;
  background: white;
  z-index: 9999;
  .Taber_Item {
    width: 100%;
    height: 90px;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
