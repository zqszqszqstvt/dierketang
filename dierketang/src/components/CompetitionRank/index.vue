<template>
  <div class="item">
    <a :href="HotCompetition.link" target="_blank">
      <span>{{ HotCompetition.title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: {
    HotCompetition: {
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
  a {
    text-decoration: none;
    color: #121111;
    white-space: nowrap; /* 防止文本换行 */
    overflow: hidden; /* 隐藏超出链接的内容 */
    text-overflow: ellipsis; /* 当文本超出链接时显示省略号 */
    
  }
</style>