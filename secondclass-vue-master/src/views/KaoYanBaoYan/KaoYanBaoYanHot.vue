<template>
  <div class="item">
    <a class="item-link" :href="HotBaoYanInfo.link" target="_blank">
      <span class="item-title">{{ HotBaoYanInfo.title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'KaoYanBaoYanHot',
  data() {
    return {
      
    };
  },
  props: {
    HotBaoYanInfo: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
   .item {
    margin: 5px;
  }
  .item-link {
    text-decoration: none;
    color: #121111;
    display: inline-block;
    max-width: 100%;
  }
  .item-title {
    color: gray;
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.item-title:hover {
  color: darkred;
}
</style>