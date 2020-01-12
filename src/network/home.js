import {request} from "./request";

export function getHomeTopData() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoodsData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
