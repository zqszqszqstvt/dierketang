<template>
    <div id="app">
      <div>
        <form @submit.prevent="submitForm">
            <label for="username">用户名:</label>
            <input type="text" id="username" v-model="username" required>
    
            <label for="password">密码:</label>
            <input type="password" id="password" v-model="password" required>
    
            <label for="captcha">验证码:</label>
            <img :src="captchaImage" alt="验证码" @click="refreshCaptcha">
            <input type="text" id="captcha" v-model="captcha" required>
    
            <button type="submit">登录</button>
        </form>
      </div>
      <div class="bottom">
        <div>忘记密码？</div>
        <div>注册账号</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        captcha: '',
        captchaImage: '/api/captcha'
      }
    },
    methods: {
      submitForm() {
        // 在这里处理表单提交
        console.log('用户名: ' + this.username);
        console.log('密码: ' + this.password);
        console.log('验证码: ' + this.captcha);
      },
      refreshCaptcha() {
        this.captchaImage = '/api/captcha?' + Date.now();
      }
    }
  }
  </script>
  <style scoped>
  .bottom {
    display: flex;
    justify-content: space-between;
  }
  input {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px 20px;
    background: #581BB7;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>