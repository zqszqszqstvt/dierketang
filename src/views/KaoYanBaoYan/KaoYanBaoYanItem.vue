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
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #F5F5F5;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
}
.item:hover {
  background-color: #F5F5F5; /* 鼠标悬停时的深灰色背景 */
  color: #7341C2;
}
.item:hover .title a{
  color: #7341C2;
}
.title {
  font-size: 20px;
  font-weight: bold;
}

.title a {
  text-decoration: none;
  color: #333;
}

.time {
  font-size: 16px;
  color: #999;
}
</style>