<template>
  <div class="item">
    <div class="title">
      <a :href="news.link" target="_blank">{{ news.title }}</a>
    </div>
    <div class="time">{{ news.time }}</div>
  </div>
</template>

<script>
export default {
  name: 'KaoYanBaoYanItem',
  data() {
    return {
      
    };
  },
  props: {
    news: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
.item {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
}

.title {
  font-size: 18px;
  font-weight: bold;
}

.title a {
  text-decoration: none;
  color: #333;
}

.time {
  font-size: 14px;
  color: #999;
}
</style>