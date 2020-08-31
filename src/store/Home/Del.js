import Network from "../../Network/index";
const Del = {
  state: {
    ListDel: {},
    Swiper: [],
    columns: [],
    services: [],
    tables: [],
    shop: [],
    parameter: [],
    del: [],
    estimate: [],
  },
  mutations: {
    DEL_LIST(state, item) {
      state.ListDel = item.data.result;
      state.Swiper = item.data.result.itemInfo;
      state.columns = item.data.result.columns;
      state.services = item.data.result.shopInfo.services;
      state.tables = item.data.result.itemParams;
      state.shop = item.data.result.shopInfo.score;
      state.parameter = item.data.result.itemParams.info.set;
      state.del = item.data.result.skuInfo.skus;
      state.estimate = item.data.result.rate.list;
    },
  },
  actions: {
    DEL_LIST(context, iid) {
      Network.Del({
        params: {
          iid,
        },
      })
        .then((res) => {
          // console.log(res.data.result);/
          context.commit("DEL_LIST", res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
export default Del;
