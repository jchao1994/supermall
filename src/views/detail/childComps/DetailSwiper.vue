<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="item in topImages" class="detail-swiper-item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper-item {
    height: 300px;
    overflow: hidden;
  }
</style>
