<template>
  <div id="category">
    <category-nav-bar></category-nav-bar>
    <category-left-bar :left-bar-info="leftBarInfo"
                       @leftBarClick="leftBarClick"></category-left-bar>
    <scroll class="content" ref="scroll">
      <subcategory-list :subcategory-info="showSubcategoryInfo"
                        @listImageLoad="listImageLoad"></subcategory-list>
    </scroll>
  </div>
</template>

<script>
  import CategoryNavBar from './childComps/CategoryNavBar'
  import CategoryLeftBar from './childComps/CategoryLeftBar'
  import SubcategoryList from './childComps/SubcategoryList'

  import Scroll from 'components/common/scroll/Scroll'

  import {itemListenerMixin} from 'common/mixin'

  import {
    getCategoryLeftBarData,
    getSubcategoryData
  } from "network/category";

  export default {
    name: "Category",
    components: {
      CategoryNavBar,
      CategoryLeftBar,
      SubcategoryList,
      Scroll
    },
    data() {
      return {
        leftBarInfo: [],
        subcategoryInfo: {},
        currentIndex: 0,
        isShowList: true
      }
    },
    mixins: [itemListenerMixin],
    computed: {
      showSubcategoryInfo() {
        return this.subcategoryInfo[this.currentIndex];
      }
    },
    created() {
      // 获取左侧导航的数据
      this.getCategoryLeftBarData();

    },
    deactivated() {
      this.$bus.$off('itemImageLoad', this.itemImgListener);
    },

    methods: {
      getCategoryLeftBarData() {
        getCategoryLeftBarData().then(res => {
          this.leftBarInfo = res.data.category.list;

          // 获取子分类数据
          this.getSubcategoryData();
        })
      },
      getSubcategoryData() {
        const maitKey = this.leftBarInfo[this.currentIndex].maitKey;
        getSubcategoryData(maitKey).then(res => {
          this.subcategoryInfo[this.currentIndex] = res.data.list;

          // 不理解作用？？？
          this.subcategoryInfo = {...this.subcategoryInfo};

        })
      },
      listImageLoad() {
        if (this.isShowList) {
          this.$bus.$emit('itemImageLoad');
        }
      },
      leftBarClick(index) {
        this.currentIndex= index;
        this.getSubcategoryData();
      }
    }
  }
</script>

<style scoped>
  #category {
    height: 100vh;
    position: relative;
  }

  #category .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 90px;
    right: 0;
    overflow: hidden;
  }
</style>
