<template>
  <div id="profile">
      <profile-nav-bar></profile-nav-bar>
    <Scroll class="content">
      <profile-login></profile-login>
      <profile-account></profile-account>
      <profile-menu-list :menu-list="orderList"></profile-menu-list>
      <profile-menu-list :menu-list="serviceList"></profile-menu-list>
    </Scroll>

  </div>
</template>

<script>
  import ProfileNavBar from './childComps/ProfileNavBar'
  import ProfileLogin from './childComps/ProfileLogin'
  import ProfileAccount from './childComps/ProfileAccount'
  import ProfileMenuList from './childComps/ProfileMenuList'

  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "Profile",
    components: {
      ProfileNavBar,
      ProfileLogin,
      ProfileAccount,
      ProfileMenuList,
      Scroll
    },
    data() {
      return {
        orderList: [
          {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
          {icon: '#point', iconColor: '#ff8198', info: '积分商城'},
          {icon: '#vip', iconColor: '#ff8198', info: '会员卡'},
        ],
        serviceList: [
          {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
          {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
        ]
      }
    }
  }
</script>

<style scoped>
  #profile {
    height: 100vh;
    position: relative;
  }

  #profile .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>
