<template>
  <div class="profile-menu-list">
    <div class="menu-list-item" v-for="item in menuList">
      <svg :fill="item.iconColor" class="item-icon"><use :xlink:href="item.icon"></use></svg>
      <div class="item-info">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileMenuList",
    props: {
      menuList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .profile-menu-list {
    border-top: 20px solid rgba(100,100,100,0.1);
    font-size: 14px;
  }

  .profile-menu-list .menu-list-item {
    height: 44px;
    line-height: 44px;
    display: flex;
    align-items: center;
  }

  .profile-menu-list .menu-list-item .item-icon{
    width: 18px;
    height: 18px;
    margin: 10px 15px;
  }

  .profile-menu-list .menu-list-item .item-info {
    flex: 1;
    border-bottom: 1px solid rgba(100,100,100,0.2);
  }

  .profile-menu-list .menu-list-item:last-child .item-info {
    border-bottom: none;
  }
</style>
