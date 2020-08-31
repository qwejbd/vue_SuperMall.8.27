import Network from "../../Network/index";
const CART = {
  state: {
    TitleCard: [],
  },
  mutations: {
    CARD_TITLE(state, item) {
      state.TitleCard = [...item];
    },
  },
  actions: {
    CARD_TITLE(context) {
      Network.Card()
        .then((res) => {
          // console.log(res.data.data.list);
          context.commit("CARD_TITLE", res.data.data.list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
export default CART;
