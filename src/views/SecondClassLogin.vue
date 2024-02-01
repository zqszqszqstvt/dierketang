<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="login-title">登录</h1>
      <form class="login-form">
        <div class="form-group">
          <input type="text" id="username" name="username" v-model="loginForm.username" placeholder="请输入用户名" style="width: 90%"/>
        </div>
        <div class="form-group">
          <input type="password" id="password" name="password" v-model="loginForm.password" placeholder="请输入密码" style="width: 90%"/>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary" @click.prevent="submitForm" style="display: block; margin: 0 auto;">登录</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
      // 登录逻辑
    }
  }
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-box {
  width: 500px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
}

.login-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 50px;
}

.form-group label {
  display: block;
  font-size: 16px;
  margin-bottom: 20px;
}

.form-group input[type="text"],
.form-group input[type="password"] {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0069d9;
}
</style>
