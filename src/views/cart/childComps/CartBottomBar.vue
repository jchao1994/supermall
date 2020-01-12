<template>
  <div class="cart-bottom-bar">
    <div class="bottom-left">
      <check-button class="check-button"
                    @click.native="checkAllClick"
                    :is-checked="isCheckedAll"></check-button>
      <span>全选</span>
    </div>
    <div class="bottom-center">
      合计：¥{{totalPrice}}
    </div>
    <div class="bottom-right">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  import {mapGetters} from 'vuex'

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return this.cartList.filter(item => {
          return item.checked;
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.cartList.filter(item => {
          return item.checked;
        }).length;
      },
      isCheckedAll() {
        if (this.cartList.length === 0) {
          return false;
        } else {
          return !this.cartList.find(item => !item.checked);
        }
      }
    },
    methods: {
      checkAllClick() {
        // if (this.isCheckedAll) {
        //   this.cartList.forEach(item => {
        //     item.checked = false;
        //   })
        // } else {
        //   this.cartList.forEach(item => {
        //     item.checked = true;
        //   })
        // }

        // 简化上述代码
        const isCheckedAllValue = this.isCheckedAll;
        this.cartList.forEach(item => {
          item.checked = !isCheckedAllValue;
        })
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(100,100,100,0.1);
    font-size: 14px;
  }

  .cart-bottom-bar .bottom-left {
    padding-left: 10px;
    display: flex;
    align-items: center;
  }

  .cart-bottom-bar .bottom-left .check-button {
    width: 20px;
    height: 20px;
  }

  .cart-bottom-bar .bottom-left span {
    margin-left: 5px;
  }

  .cart-bottom-bar .bottom-right {
    width: 120px;
    height: 40px;
    background-color: orangered;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
</style>
