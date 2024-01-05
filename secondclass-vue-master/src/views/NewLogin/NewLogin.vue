<template>
    <div class="box">
      <div class="upper-half"></div>
      <div class="lower-half"></div>
      <div class="card">
        <div class="flex-container">
            <div class="left">
                <img :src="LoginImg" alt="" class="responsive-img">
            </div>
            <div class="right">
                <h1>登录</h1>
                <input type="text" placeholder="用户名" />
                <input type="password" placeholder="密码" />
                <button>登录</button>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import LoginImg from "@/assets/login.png"
  export default {
    name: 'NewLogin',
    data() {
      return {
        LoginImg
      }
    }
  }
  </script>
  
  <style scoped>
  .box {
    font-family: Arial, sans-serif;
    text-align: center;
    height: calc(100vh - 68px);
    position: relative;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .upper-half {
    position: absolute;
    top: 0;
    height: 40%;
    width: 100%;
    background: #581BB7;
  }
  
  .lower-half {
    position: absolute;
    bottom: 0;
    height: 60%;
    width: 100%;
    background: #F5F5F5;
  }
  
  .card {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    padding: 20px;
    background: #FFF;
    border-radius: 10px;
  }
  .flex-container {
    display: flex;
    }
  .left {
    width: 50%;
    overflow: hidden;
  }
  .responsive-img {
    width: 100%;
    height: auto;
  }
  .right{
    width: 50%;
  }
  input {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px 20px;
    background: #581BB7;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  