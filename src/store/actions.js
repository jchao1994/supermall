export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      const oldProduct = context.state.cartList.find(item => {
        return item.iid === payload.iid;
      })

      if (oldProduct) {
        context.commit('addCount', oldProduct);
        resolve('当前商品数量加1！');
      } else {
        context.commit('addNew', payload);
        resolve('添加了新商品！');
      }
    })
  }
}
