<template>
  <div class="detail-params-info">
    <table class="rule">
      <tr v-for="(tr, index) in paramsInfo.rule" :key="index">
        <td v-for="(td, indey) in tr" :key="indey">{{td}}</td>
      </tr>
    </table>
    <table class="info">
      <tr v-for="(tr, index) in paramsInfo.info" :key="index">
        <td v-for="(td, indey) in tr" :key="indey">{{td}}</td>
      </tr>
    </table>
    <div class="image" v-if="paramsInfo.image !== ''">
      <img :src="paramsInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamsInfo",
    props: {
      paramsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-params-info {
    padding: 20px 15px;
    border-bottom: 5px solid rgba(100,100,100,0.1);
    font-size: 14px;
  }

  .detail-params-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .detail-params-info .rule {
    border-bottom: 3px solid rgba(100,100,100,0.1);
  }

  .detail-params-info table tr {
    height: 50px;
  }

  .detail-params-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,0.1);
  }

  .detail-params-info .info tr td:first-child {
    width: 100px;
  }

  .detail-params-info .info tr td:last-child {
    color: var(--color-high-text);
  }

  .detail-params-info .image img {
    width: 100%;
  }
</style>
