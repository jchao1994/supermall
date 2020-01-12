<template>
  <div class="category-left-bar">
    <scroll class="content">
      <div v-for="(item, index) in leftBarInfo"
           class="left-bar-item"
           :class="{active: currentIndex === index}"
           @click="leftBarItemClick(index)">
        {{item.title}}
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "CategoryLeftBar",
    props: {
      leftBarInfo: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Scroll
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      leftBarItemClick(index) {
        this.currentIndex = index;
        this.$emit('leftBarClick', index);
      }
    }
  }
</script>

<style scoped>
  .category-left-bar {
    width: 90px;
    height: calc(100% - 44px - 49px);
    font-size: 14px;
  }

  .category-left-bar .content {
    height: 100%;
    overflow: hidden;
  }

  .category-left-bar .left-bar-item {
    width: 90px;
    height: 50px;
    padding: 10px;
    background-color: rgba(100,100,100,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(100,100,100,0.2);
  }

  .category-left-bar .left-bar-item.active {
    background-color: #fff;
    border-left: 3px solid var(--color-tint);
    color: var(--color-tint);
  }
</style>
