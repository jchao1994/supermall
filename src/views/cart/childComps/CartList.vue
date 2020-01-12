<template>
  <div class="cart-list">
    <div class="cart-list-item" v-for="(item, index) in cartList">
      <div class="item-selector">
        <check-button :is-checked="item.checked" @click.native="checkClick(index)"></check-button>
      </div>
      <div class="item-image">
        <img :src="item.image" alt="" @load="imageLoad">
      </div>
      <div class="item-info">
        <div class="info-title">{{item.title}}</div>
        <div class="info-desc">商品描述: {{item.desc}}</div>
        <div class="info-bottom">
          <div class="info-price">¥{{item.price}}</div>
          <div class="info-count">×{{item.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  import {mapGetters} from 'vuex'

  export default {
    name: "CartList",
    computed: {
      ...mapGetters({
        length: 'cartLength',
        cartList: 'cartList'
      })
    },
    components: {
      CheckButton
    },
    methods: {
      checkClick(index) {
        this.cartList[index].checked = !this.cartList[index].checked;
      },
      imageLoad() {
        this.$bus.$on('itemImageLoad')
      }
    }
  }
</script>

<style scoped>
  .cart-list .cart-list-item {
    width: 100%;
    display: flex;
    padding: 10px;
    border-bottom: 1px solid rgba(100,100,100,0.4);
    align-items: center;
  }

  .cart-list .cart-list-item .item-selector {
    width: 20px;
    height: 20px;
    display: flex;
  }

  .cart-list .cart-list-item .item-image img{
    margin: 0 10px;
    display: block;
    width: 80px;
    height: 100px;
    border-radius: 10px;
  }

  .cart-list .cart-list-item .item-info {
    overflow: hidden;
  }

  .cart-list .cart-list-item .item-info .info-title,
  .cart-list .cart-list-item .item-info .info-desc{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 15px;
  }

  .cart-list .cart-list-item .item-info .info-title {
    font-size: 16px;
    font-weight: 600;
  }

  .cart-list .cart-list-item .item-info .info-desc {
    font-size: 14px;
  }


  .cart-list .cart-list-item .item-info .info-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 17px;
  }

  .cart-list .cart-list-item .item-info .info-bottom .info-price {
    color: orangered;
  }
</style>
