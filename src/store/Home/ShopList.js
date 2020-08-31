import Network from "../../Network/index";
const list = {
  state: {
    List: [],
    List2: [],
    List3: [],
  },
  mutations: {
    SHOP_LIST(state, item) {
      state.List = [...item];
    },
    SHOP_LIST2(state, item) {
      state.List2 = [...item];
    },
    SHOP_LIST3(state, item) {
      state.List3 = [...item];
    },
  },
  actions: {
    SHOP_LIST(context) {
      Network.ShopList({
        params: {
          type: "pop",
          page: 1,
        },
      })
        .then((res) => {
          //  console.log(res.data.data.list);
          context.commit("SHOP_LIST", res.data.data.list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    SHOP_LIST2(context) {
      Network.ShopList({
        params: {
          type: "new",
          page: 1,
        },
      })
        .then((res) => {
          //  console.log(res.data.data.list);
          context.commit("SHOP_LIST2", res.data.data.list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    SHOP_LIST3(context) {
      Network.ShopList({
        params: {
          type: "sell",
          page: 1,
        },
      })
        .then((res) => {
          //  console.log(res.data.data.list);
          context.commit("SHOP_LIST3", res.data.data.list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
export default list;
