<template>
  <div class="subcategory-list">
    <div class="list-item" v-for="item in subcategoryInfo">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SubcategoryList",
    props: {
      subcategoryInfo: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imageLoad() {
        this.$emit('listImageLoad');
      }
    }
  }
</script>

<style scoped>
  .subcategory-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    text-align: center;
  }

  .subcategory-list .list-item {
    display: flex;
    width: 48%;
  }

  .subcategory-list .list-item a {
    width: 100%;
  }

  .subcategory-list .list-item a img {
    width: 100%;
    padding: 5px;
  }

  .subcategory-list .list-item a div {
    font-size: 16px;
    margin: 5px 0;
  }
</style>
