<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="detailScroll" :probeType="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-params-info :params-info="paramsInfo" ref="params"></detail-params-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <detail-recommend-info :recommend-info="recommendInfo" ref="recommend"></detail-recommend-info>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addCartClick="addCartClick"></detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamsInfo from './childComps/DetailParamsInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailRecommendInfo from './childComps/DetailRecommendInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import {getDetailData, Goods, Shop, GoodsParam, getRecommendData} from "network/detail";

  import {itemListenerMixin, backTopMixin} from 'common/mixin'
  import {debounce} from 'common/utils'
  import {mapActions} from 'vuex'

  export default {
    name: "Detail",
    data() {
      return {
        iid: '',
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramsInfo: {},
        commentInfo: [],
        recommendInfo: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      DetailRecommendInfo,
      DetailBottomBar,
      Scroll,
      BackTop
    },
    created() {
      this.iid = this.$route.params.iid;

      getDetailData(this.iid).then(res => {
        const data = res.result;
        // console.log(data);

        // 1.获取轮播图图片
        this.topImages = data.itemInfo.topImages;

        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

        // 3.获取店铺信息
        this.shop = new Shop(data.shopInfo);

        // 4.获取商品详细信息
        this.detailInfo = data.detailInfo;

        // 5.获取参数信息
        this.paramsInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

        // 6.获取评论信息
        this.commentInfo = data.rate.list;

        // 7.获取推荐信息
        getRecommendData().then(res => {
          this.recommendInfo = res.data.list;
        });

        this.getThemeTopY = debounce(() => {
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop);
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
          this.themeTopYs.push(Number.MAX_VALUE);
        })

      })

    },
    destroyed() {
      this.$bus.$off('itemImageLoad');
    },
    mixins: [itemListenerMixin, backTopMixin],
    methods: {
      ...mapActions(['addToCart']),

      detailScroll(position) {
        this.listenShowBackTop(position);

        const positionY = -position.y;
        const length = this.themeTopYs.length;

        for (let i = 0; i < length - 1; i++) {
          if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }

      },

      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
      },

      addCartClick() {
        const product = {};

        product.iid = this.iid;
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.detailInfo.desc;
        product.price = this.goods.realPrice;

        this.addToCart(product).then(res => {
          this.$toast.show(res);
        })
      }
    }
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 9;
  }

  .detail-nav-bar {
    position: relative;
    background-color: #fff;
    z-index: 9;
  }

  .content {
    /*height: calc(100% - 44px - 49px);*/
    /*overflow: hidden;*/
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>
