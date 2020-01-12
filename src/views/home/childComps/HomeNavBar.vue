<template>
  <div class="home-nav-bar">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "HomeNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .home-nav-bar {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>
