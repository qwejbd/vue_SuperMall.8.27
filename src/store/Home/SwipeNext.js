import Network from "../../Network/index";
const swiperNext = {
  state: {
    recommend: [],
  },
  mutations: {
    SWIPER_NEXT(state, item) {
      state.recommend = [...item];
    },
  },
  actions: {
    SWIPER_NEXT(context) {
      Network.HomeList()
        .then((res) => {
          // console.log(res.data.data.recommend.list);
          context.commit("SWIPER_NEXT", res.data.data.recommend.list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
export default swiperNext;
