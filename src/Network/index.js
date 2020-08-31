import { request } from "./core";
import { GET, path } from "./config";

const network = {
  HomeList(params) {
    return request(GET, path.list, params);
  },
  ShopList(params) {
    return request(GET, path.LIST, params);
  },
  Del(params) {
    return request(GET, path.del, params);
  },
  Card(params) {
    return request(GET, path.Title, params);
  },
};
export default network;
