<template>
  <div class="profile-account">
    <div class="account-item">
      <div class="account-number">
        <span class="number">0.00</span>元
      </div>
      <div class="account-info">我的余额</div>
    </div>
    <div class="account-item">
      <div class="account-number">
        <span class="number">0</span>个
      </div>
      <div class="account-info">我的优惠</div>
    </div>
    <div class="account-item">
      <div class="account-number">
        <span class="number">0</span>个
      </div>
      <div class="account-info">我的积分</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileAccount"
  }
</script>

<style scoped>
  .profile-account {
    display: flex;
    font-size: 14px;
  }

  .profile-account .account-item {
    flex: 1;
    padding: 20px;
    text-align: center;
    border-right: 5px solid rgba(100,100,100,0.05);
  }

  .profile-account .account-item:last-child {
    border-right: none;
  }

  .profile-account .account-item .account-number {
    margin-bottom: 5px;
  }

  .profile-account .account-item .account-number .number {
    font-size: 24px;
    color: #ff5f3e;
    font-weight: 700;
  }
</style>
