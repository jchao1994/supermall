<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img;
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('itemImageLoad');
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid);
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 48%;
    position: relative;
    padding-bottom: 43px;
  }

  .goods-item img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  .goods-item .goods-info {
    position: absolute;
    left: 0;
    bottom: 4px;
    right: 0;
    font-size: 14px;
    text-align: center;
  }

  .goods-item .goods-info p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-item .goods-info .price {
    color: var(--color-tint);
    margin-right: 20px;
  }

  .goods-item .goods-info .collect {
    position: relative;
  }

  .goods-item .goods-info .collect::before {
    content: '';
    width: 14px;
    height: 14px;
    position: absolute;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    left: -14px;
    top: 0;
  }
</style>
