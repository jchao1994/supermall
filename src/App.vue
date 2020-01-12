<template>
  <div id="app">
<!--    <keep-alive exclude="Detail">-->
<!--      <router-view></router-view>-->
<!--    </keep-alive>-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <main-tab-bar></main-tab-bar>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  import Icon from 'components/content/icon/Icon'
  import SvgIcon from 'components/content/icon/Svg'

export default {
  name:'app',
  components: {
    MainTabBar,
    Icon,
    SvgIcon
  }
}

</script>

<style>
  @import 'assets/css/base.css';
</style>
