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
              <div class="min-right">
                <div class="routes">
                  <router-link to="/NewLogin/student" active-class="active" class="route" style="margin-right: 40px;">学生登录</router-link>
                  <router-link to="/NewLogin/teacher" active-class="active" class="route">教师登录</router-link>
                </div>
                <router-view></router-view>
              </div>
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
  .min-right {
    margin: 10%;
    
  }
  .routes {
    text-align: left;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .route {
    text-decoration: none;
    color: #B3B3B3;
  }
  .active {
    color: #000;
  }
  .flex-container {
    display: flex;
    height: 100%;
    }
  .left {
    width: 50%;
    height: 100%;
    overflow: hidden;
  }
  .responsive-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  .right{
    width: 50%;
    height: auto;
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
  