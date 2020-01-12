<template>
  <div id="home">
    <home-nav-bar class="home-nav-bar"></home-nav-bar>
    <tab-control :titles="titles"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 v-show="isTabShow"
                 class="tab-control"></tab-control>
    <scroll class="content"
            @scroll="contentScroll"
            :probe-type="3"
            ref="scroll"
            @pullingUp="loadMore"
            :pull-up-load="true">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTopClick"></back-top>

  </div>
</template>

<script>
  import HomeNavBar from './childComps/HomeNavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from './childComps/HomeRecommendView'
  import HomeFeatureView from './childComps/HomeFeatureView'

  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import {getHomeTopData, getHomeGoodsData} from "../../network/home";

  import {itemListenerMixin, backTopMixin} from "common/mixin";

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        titles: ['流行', '新款', '精选'],
        tabOffsetTop: 0,
        isTabShow: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    components: {
      HomeNavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      Scroll,
      TabControl,
      GoodsList
    },
    mixins: [itemListenerMixin, backTopMixin],
    created() {
      this.getHomeTopData();

      this.getHomeGoodsData('pop');
      this.getHomeGoodsData('new');
      this.getHomeGoodsData('sell');
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0);
      this.$refs.scroll.refresh();
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY();
      this.$bus.$off('itemImageLoad', this.itemImgListener);
    },
    methods: {
      getHomeTopData() {
        getHomeTopData().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoodsData(type) {
        const page = this.goods[type].page + 1;
        getHomeGoodsData(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;

          setTimeout(() => {
            this.$refs.scroll.finishPullUp();
          }, 300)

        })
      },
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }

        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      },
      contentScroll(position) {
        this.isTabShow = -position.y > this.tabOffsetTop;

        this.listenShowBackTop(position);
      },
      loadMore() {
        this.getHomeGoodsData(this.currentType);
        // this.$refs.scroll.refresh();
      },
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    overflow: hidden;
  }

  .content {
    /*height: calc(100% - 44px - 49px);*/
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .home-nav-bar {
    position: relative;
    z-index: 9;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>
