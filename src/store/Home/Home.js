import Network from "../../Network/index";
const swiper = {
  state: {
    swiper: [],
  },
  mutations: {
    HOME_SWIPER(state, item) {
      state.swiper = [...item];
    },
  },
  actions: {
    HOME_SWIPER(context) {
      Network.HomeList()
        .then((res) => {
          // console.log(res.data.data.recommend);
          context.commit("HOME_SWIPER", res.data.data.banner.list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
export default swiper;
