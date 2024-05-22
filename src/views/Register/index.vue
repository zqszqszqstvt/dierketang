<template>
    <div class="container">
      <div class="mini-container">
        <h1>欢迎注册</h1>
        <div class="form-container">
        <form>
          <div class="input-field">
            <label for="username">用户名</label>
            <input type="text" id="username" v-model="username" required>
          </div>
          <div class="input-field">
            <label for="email">邮箱</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <!-- <div class="input-field">
            <label for="code">验证码</label>
            <input type="text" id="code" v-model="code" required>
          </div> -->
          <div class="input-field">
            <label for="role">角色</label>
            <input type="text" id="role" v-model="role" required>
          </div>
          <div class="input-field">
            <label for="sno">学号/工号</label>
            <input type="number" id="sno" v-model="sno" required>
          </div>
          <div class="input-field">
            <label for="dept">班级</label>
            <input type="text" id="dept" v-model="dept" required>
          </div>
          <div class="input-field">
            <label for="password">密码</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <div class="input-field">
            <label for="confirmPassword">确认密码</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required>
          </div>
          <button type="submit" @click.prevent="register">注册</button>
        </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
        sno: '',
        dept: ''
      }
    },
    methods: {
      register() {
        if (this.password !== this.confirmPassword) {
          alert('密码和确认密码不一致！');
          return;
        }
        if (!this.username.trim() || !this.email.trim() || !this.password.trim() || !this.role.trim() || this.sno == null || String(this.sno).trim() === '' || !this.dept.trim()) {
          alert('信息不能为空！');
          return;
        }
        const formData = {
          username: this.username,
          email: this.email,
          password: this.password,
          role: this.role,
          sno: this.sno,
          dept: this.dept
        };
        axios.post('/api/user/register', formData)
          .then(response => {
            console.log(response);
            this.$router.push('/newLogin');
          })
          .catch(error => {
            console.error(error);
            alert('注册失败，请稍后再试。');
          });
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    background: url('~@/assets/login-background.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .mini-container {
    width: 30%;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    margin-right: 200px;
    border-radius: 10px;
  }
  .form-container {

    display: flex;
    justify-content: center;
  }
  .form-container form {
    width: 80%;
  }
  .input-field {
    margin-bottom: 20px;
    font-size: 18px;
  }
  .input-field label {
    display: inline-block;
    width: 25%;
  }
  .input-field input {
    display: inline-block;
    width: 70%;
    height: 35px;
    border: 1px solid #DDDDDD;
    border-radius: 3px;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #581BB6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>