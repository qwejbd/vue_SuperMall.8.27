<template>
  <div class="container">
    <van-tabs
      v-model="active"
      scrollspy
      sticky
      title-active-color="red"
      line-height="0"
    >
      <template #nav-left>
        <van-icon name="arrow-left" size="20" @click="back" />
      </template>
      <van-tab title="商品">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item
            v-for="(item, index) in Swiper.topImages"
            :key="index"
          >
            <img :src="item" alt="" />
          </van-swipe-item>
        </van-swipe>
        <span class="title"> {{ ListDel.itemInfo.desc }}</span>
        <div>
          <span class="price">{{ ListDel.itemInfo.price }} </span>
          <s class="discount"> {{ ListDel.itemInfo.lowPrice }} </s>
        </div>
        <div>
          <ul class="ul">
            <li v-for="(item, index) in columns" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
        <div>
          <ul class="ul1">
            <li v-for="(item, index) in services" :key="index">
              <img :src="item.icon" alt="" width="13px" height="13px" />
              <span> {{ item.name }} </span>
            </li>
          </ul>
        </div>
        <div class="op">
          <span>
            <img :src="ListDel.shopInfo.shopLogo" alt="" class="logo" />
            {{ ListDel.shopInfo.name }}
          </span>
          <span v-for="(item, index) in shop" :key="index">
            <p>{{ item.name }} {{ item.score }}</p>
          </span>
        </div>
        <span class="title"> {{ ListDel.itemInfo.title }}</span>
        <div v-for="(item, index) in del" :key="index">
          <img :src="item.img" alt="" width="100%" />
        </div>
      </van-tab>
      <van-tab title="参数">
        <div v-for="(item, index) in tables.rule.tables[0]" :key="index">
          <div class="yun">
            <span v-for="(o, pp) in item" :key="pp">
              <span class="title">
                {{ o }}
              </span>
            </span>
          </div>
        </div>
        <div>
          <div class="parameter" v-for="(item, o) in parameter" :key="o">
            <div class="Left">{{ item.key }}</div>
            <div class="Right">{{ item.value }}</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="评论">
        <div>
          <div v-for="(item, index) in estimate" :key="index">
            <p>
              <img :src="item.user.avatar" alt="" class="unm" />
              {{ item.user.uname }}
            </p>
            <p>{{ item.content }}</p>
            <p>{{ item.created | moment }} {{ item.style }}</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="推荐"> </van-tab>
    </van-tabs>

    <van-cell-group>
      <van-cell title="用户评价" value="更多" />
    </van-cell-group>

    <!-- ================================================ -->
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
    <DelCard></DelCard>
    <FooterTaber ></FooterTaber>
  </div>
</template>

<script>
import FooterTaber from "../../components/deltail/FooterTaber";
import DelCard from "../../components/deltail/DelCard";
export default {
  components: {
    FooterTaber,
    DelCard,
  },
  methods: {
    back() {
      window.history.back();
    },
  },
  data() {
    return {
      active: 1,
    };
  },
  mounted() {
    this.$store.dispatch("DEL_LIST", this.$route.query.iid);
  },
  computed: {
    ListDel: function() {
      return this.$store.state.Del.ListDel;
    },
    Swiper: function() {
      return this.$store.state.Del.Swiper;
    },
    columns: function() {
      return this.$store.state.Del.columns;
    },
    services: function() {
      return this.$store.state.Del.services;
    },
    tables: function() {
      return this.$store.state.Del.tables;
    },
    shop: function() {
      return this.$store.state.Del.shop;
    },
    parameter: function() {
      return this.$store.state.Del.parameter;
    },
    del: function() {
      return this.$store.state.Del.del;
    },
    estimate: function() {
      return this.$store.state.Del.estimate;
    },
  },
};
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 800px;
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.title {
  font-size: 35px;
}
.price {
  font-size: 55px;
  color: #ff699a;
}
.discount {
  font-size: 30px;
  color: #999999;
}
.ul {
  width: 100%;
  height: 90px;
  // background: chartreuse;
  display: flex;
  justify-content: space-around;
  line-height: 90px;
  font-size: 30px;
}
.ul1 {
  width: 100%;
  height: 90px;
  // background: chartreuse;
  display: flex;
  justify-content: space-around;
  line-height: 90px;
  font-size: 20px;
}
.op {
  width: 100%;
  height: 200px;
  background: cyan;
}
.logo {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}
.parameter {
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #9999;
  display: flex;
  .Left {
    width: 40%;
    height: 90px;
    text-align: center;
    line-height: 90px;
  }
  .Right {
    width: 60%;
    height: 90px;
    text-align: center;
    line-height: 90px;
    color: red;
  }
}
.unm {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}
.yun {
  margin-top: 50px;
  .title {
    margin-left: 80px;
  }
}
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
