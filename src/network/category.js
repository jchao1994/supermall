import {request} from "network/request"

export function getCategoryLeftBarData() {
  return request({
    url: '/category'
  })
}

export function getSubcategoryData(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
