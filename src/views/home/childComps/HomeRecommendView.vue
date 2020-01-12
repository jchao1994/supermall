<template>
  <div class="home-recommend">
    <div class="home-recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .home-recommend {
    display: flex;
    text-align: center;
    border-bottom: 10px solid #eee;
    font-size: 14px;
    padding: 10px 0 20px;
  }

  .home-recommend .home-recommend-item {
    flex: 1;
  }

  .home-recommend .home-recommend-item img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>
