export default {
  addCount(state, payload) {
    payload.count++;
  },
  addNew(state,payload) {
    payload.count = 1;
    payload.checked = true;
    state.cartList.push(payload);
  }
}
