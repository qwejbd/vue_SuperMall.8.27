<template>
  <div class="body">
    <van-tabs sticky :offset-top="36">
      <van-tab title="流行">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <div class="header">
              <div v-for="(item, index) in List" :key="index">
                <img
                  :src="item.showLarge.img"
                  class="img1"
                  alt=""
                  @click="goDel(item.iid)"
                />
                <span class="title"> {{ item.title }} </span>
                <p class="price">
                  <span style="color:#FF8198">
                    {{ item.price }}
                  </span>
                  <van-icon name="star-o" />
                  <span>
                    {{ item.cfav }}
                  </span>
                </p>
              </div>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="新款">
        <div class="header">
          <div v-for="(item, index) in List2" :key="index">
            <img
              :src="item.showLarge.img"
              class="img1"
              alt=""
              @click="goDel(item.iid)"
            />
            <span class="title"> {{ item.title }} </span>
            <p class="price">
              <span style="color:#FF8198">
                {{ item.price }}
              </span>
              <van-icon name="star-o" />
              <span>
                {{ item.cfav }}
              </span>
            </p>
          </div>
        </div>
      </van-tab>
      <van-tab title="精选">
        <div class="header">
          <div v-for="(item, index) in List3" :key="index">
            <img
              :src="item.showLarge.img"
              class="img1"
              alt=""
              @click="goDel(item.iid)"
            />
            <span class="title"> {{ item.title }} </span>
            <p class="price">
              <span style="color:#FF8198">
                {{ item.price }}
              </span>
              <van-icon name="star-o" />
              <span>
                {{ item.cfav }}
              </span>
            </p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  created() {
    this.$store.dispatch("SHOP_LIST");
    this.$store.dispatch("SHOP_LIST2");
    this.$store.dispatch("SHOP_LIST3");
  },
  computed: {
    List: function() {
      return this.$store.state.list.List;
    },

    List2: function() {
      return this.$store.state.list.List2;
    },
    List3: function() {
      return this.$store.state.list.List3;
    },
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
        this.$store.state.list.List.push(...this.$store.state.list.List);
        this.loading = false;
        // if (this.list.length <= 60) {
        //   this.finished = true;
        // }
      }, 1000);
    },
    onRefresh() {
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
    goDel(iid) {
      this.$router.push({
        name: "detail",
        query: {
          iid: iid,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  padding-bottom: 40px;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-bottom: 100px;
    // background: floralwhite;
    &.header div {
      margin: 10px 10px 0px 10px;
      padding-top: 50px;
      width: 45%;
      // background: orangered;
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
}
</style>
