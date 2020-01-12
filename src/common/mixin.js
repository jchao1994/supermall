import {debounce} from "./utils";

import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh);
    this.itemImgListener = () => {
      this.refresh();
      if (this.getThemeTopY) {
        this.getThemeTopY();
      }
    };
    this.$bus.$on('itemImageLoad', this.itemImgListener);
  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = -position.y > 1000;
    }
  }
}
