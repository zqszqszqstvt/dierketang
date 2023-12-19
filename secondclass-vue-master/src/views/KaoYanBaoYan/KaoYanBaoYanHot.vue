<template>
  <div class="item">
    <img src="./images/hot.png" class="icon" width="25" height="25" />
    <a class="item-link" :href="HotBaoYanInfo.link" target="_blank">
      <strong><span class="item-title">{{ HotBaoYanInfo.title }}</span></strong>
      
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
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center; /* 如果需要，可以使 img 和 a 在垂直方向上居中对齐 */
  }
  .item-link {
  text-decoration: none;
  color: #121111;
  display: block; /* 修改这里 */
  overflow: hidden; /* 添加这里 */
  max-width: 100%;
}

.item-title {
  display: block;
  white-space: nowrap; /* 添加这里 */
  overflow: hidden; /* 添加这里 */
  text-overflow: ellipsis; /* 添加这里 */
}

.item-title:hover {
  color: #7341C2;
}


</style>