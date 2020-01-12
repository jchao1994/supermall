<template>
  <div class="profile-nav-bar">
    <nav-bar>
      <div slot="center">我的</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "ProfileNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .profile-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
