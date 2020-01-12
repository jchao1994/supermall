import {request} from "./request";

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommendData() {
  return request({
    url: '/recommend'
  })
}


export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services.slice(0, services.length-1);
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.sellsCount = shopInfo.cSells;
    this.goodsCount = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.info = info.set;
    this.rule = rule.tables[0];
    for (let i in rule.tables[1]) {
      this.rule[i].push(rule.tables[1][i][1]);
    };
    this.image = info.images ? info.images[0] : '';
  }
}
