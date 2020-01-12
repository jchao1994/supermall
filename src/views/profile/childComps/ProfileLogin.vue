<template>
  <div class="profile-login">
    <svg class="profile-avatar"><use xlink:href="#avatar-default"></use></svg>
    <div class="login-info">
      <div>登录/注册</div>
      <div>
        <svg class="login-mobile" fill="#fff"><use xlink:href="#mobile"></use></svg>
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <svg class="arrow-right" fill="#fff"><use xlink:href="#arrow-right"></use></svg>
  </div>
</template>

<script>
  export default {
    name: "ProfileLogin"
  }
</script>

<style scoped>
  .profile-login {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-tint);
    color: #fff;
    font-size: 14px;
  }

  .profile-login .login-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }

  .profile-login .login-info .login-mobile{
    width: 12px;
    height: 18px;
    margin-right: 3px;
  }

  .profile-login .login-info>div:last-child {
    display: flex;
    margin-top: 8px;
    align-items: center;
  }

  .profile-login .profile-avatar {
    width: 60px;
    height: 60px;
    margin: 15px;
    background-color: #fff;
    border-radius: 50%;
  }

  .profile-login .arrow-right {
    width: 11px;
    height: 22px;
    margin-right: 15px;
  }
</style>
