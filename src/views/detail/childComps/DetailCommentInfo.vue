<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo) !== 0">
    <div class="comment-info-top">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div v-for="item in commentInfo" class="comment-info-item">
      <div class="item-top">
        <img :src="item.user.avatar" alt="">
        <span>{{item.user.uname}}</span>
      </div>
      <div class="item-middle">
        <p>{{item.content}}</p>
      </div>
      <div class="item-bottom">
        <span>{{item.created | showDate}}</span>
        <span>{{item.style}}</span>
      </div>
      <div class="item-image" v-if="item.images">
        <img :src="image" alt="" v-for="image in item.images" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'

  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Array,
        default() {
          return []
        }
      }
    },
    filters: {
      showDate(value) {
        let date = new Date(value * 1000);
        return formatDate(date, 'yyyy-MM-dd');
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('itemImageLoad');
      }
    }
  }
</script>

<style scoped>
  .detail-comment-info {
    padding: 30px 15px;
    border-bottom: 5px solid rgba(100,100,100,0.1);
    font-size: 14px;
  }

  .detail-comment-info .comment-info-top {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(100,100,100,0.2);
  }

  .detail-comment-info .comment-info-top span:first-child {
    font-size: 20px;
  }

  .detail-comment-info .comment-info-item .item-top {
    display: flex;
    padding: 15px 0;
    align-items: center;
  }

  .detail-comment-info .comment-info-item .item-top img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .detail-comment-info .comment-info-item .item-top span {
    text-align: center;
    margin-left: 20px;
  }

  .detail-comment-info .comment-info-item .item-bottom {
    padding: 15px 0;
    font-size: 14px;
    color: rgba(100,100,100,0.6);
  }

  .detail-comment-info .comment-info-item .item-bottom span {
    margin-right: 5px;
  }

  .detail-comment-info .comment-info-item .item-image {
    display: flex;
    flex-wrap: wrap;
  }

  .detail-comment-info .comment-info-item .item-image img {
    margin: 10px 7px 0;
    width: 100px;
    height: 100px;
  }
</style>
