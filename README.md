# 项目名称:

vue dome app

# 运行项目:

- yarn add install 【安装依赖】
- yarn serve 【运行项目】

# 技术栈:

# 项目目录：

```js
|- assets /
   |- css
   |- img
|- components /  【组件】
   |- deltail / 【详情】
      |- DelTop.vue (详情头部组件)
      |- FooterTaber.vue (底部导航组件)
      |- DelCard.vue (详情列表组件)
   |- HeaderNav /
      |- Card.vue (列表组件)
      |- HeaNav.vue (头部导航组件)
      |- Rage.vue  (图片组件)
      |- Swiper.vue (轮播图组件)
      |- SwiperNext.vue ()
   |- Taber / 【Taber文件】
      |- Taber.vue (Taber父组件)
         |- Taber_Item.vue (Taber子组件)
|- Network / 【封装网络层】
   |- config.js (配置文件)
   |- core.js (核心文件)
   |- index.js (入口文件)
|- plugins / 【插件】
   |-  vant.js
|- router /
|- store /
   |- Home / 【首页数据管理】
      |- Del.js (详情数据)
      |- Home.js (首页轮播图数据)
      |- ShopList.js (商品列表数据)
      |- SwiperNext.js ()
      |- Card.js ()
|- utils /
|- views /
   |- Home / 【首页】
     |- Home.vue (首页)
     |- Detail.vue (详情)
   |- classify / 【分类】
   |- cart / 【购物车】
   |- mine / 【我的】
|- App.vue
|- main.js

```
