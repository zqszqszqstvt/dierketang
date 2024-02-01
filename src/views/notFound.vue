<template>
    <div class="not-found">
      <h1>404</h1>
      <p>很抱歉，您访问的页面不存在。</p>
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
  
  </template>
  
  <script>
  export default {
    methods: {
      goBack() {
        this.$router.back();
      },
    },
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 50px;
  }
  
  .not-found h1 {
    font-size: 100px;
    font-weight: bold;
    color: #e6a23c;
  }
  
  .not-found p {
    font-size: 24px;
    margin-top: 30px;
  }
  
  .el-button {
    margin-top: 30px;
  }
  </style>