

<template xmlns="http://www.w3.org/1999/html">
  <div >
    <div class="div1" id="loginBox">
      <el-row>
        <el-col :span="11"></el-col>
          <el-col :span="13">
            <div style="margin: 15%;width: 70%">
              <span class="span1" :style="{color:studentColor}" @click="chooseStudent">
                学生登录
              </span>
              <span class="span1" :style="{color:teacherColor}" @click="chooseTeacher">
                教师登录
              </span>

              <!-- 我是被注释内容，并且在浏览器中不会显示 <div style="width: 100%;margin-top: 20px">
                <el-row class="elr1">
                  <el-col :span="24">
                    <el-input v-model="userName" placeholder="请输入账号" size="large">
                      <template #prepend><span class="span1">账号</span> </template>
                    </el-input>
                  </el-col>
                </el-row>
                <el-row class="elr1">
                  <el-col :span="24">
                    <el-input v-model="password" placeholder="请输入密码" size="large" show-password>
                      <template #prepend><span class="span1" >密码</span> </template>
                    </el-input>
                  </el-col>
                </el-row>
                <el-row class="elr1">
                  <el-col :span="16">
                    <el-input v-model="code" placeholder="验证码" size="large">
                      <template #prepend ><span class="span1" >验证码</span></template>
                    </el-input>
                  </el-col>
                  <el-col :span="1"></el-col>
                  <el-col :span="7">显示验证码图片</el-col>
                </el-row>
                <el-row class="erl1">
                  <el-col :span="24">
                    <el-button size="large" color="#581BB6" dark="#581BB6" style="width: 100%;">
                      <span style="color: #FFFFFF">登录</span>
                    </el-button>
                  </el-col>
                </el-row>
              </div>-->

              <form style="margin-top: 10px">
                <div class="div2" >
                  <span class="span2">账号</span>
                  <input type="text" class="text1">
                </div>
                <div class="div2" >
                  <span class="span2">密码</span>
                  <input type="text" class="text1">
                </div>
                <el-row>
                  <el-col :span="16">
                    <div class="div2" style="width: 100%;">
                      <span class="span2" style="width: 40%">验证码</span>
                      <input type="text" class="text1" style="width: 60%;">
                    </div>
                  </el-col>
                  <el-col :span="1"></el-col>
                  <el-col :span="7">显示验证码</el-col>
                </el-row>
                <el-button size="large" color="#581BB6" dark="#581BB6" style="width: 100%;">
                  <span style="color: #FFFFFF">登录</span>
                </el-button>
              </form>
              <el-row justify="space-between" style="margin-top: 10px">
                <el-col :span="5"><el-link class="a1" :underline="false">忘记密码?</el-link></el-col>
                <el-col :span="4"><el-link class="a1" :underline="false">立即注册</el-link> </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
    </div>
    <div style="width: 100%;background-color: #581BB6" id="dynamicBox1"></div>
    <div style="width: 100%;background-color: #F2F4F3" id="dynamicBox2"></div>
  </div>
</template>

<style scoped>
.div1{
  width: 800px;
  height: 430px;
  background-color: #FFFFFF;
  position: fixed;
  border-radius: 10px;
}
.span1{
  font-size:23px;
  margin-right:30px;
  font-weight:bold;
  user-select:none
}
.elr1{
  margin-bottom: 15px;
}
.text1{
  width: 80%;
  height: 100%;
  background-color: #F6F6F6;
  border: 0px;
  padding: 0;
  font-size: 20px;
  outline: none;
}
.div2{
  width: 100%;
  height: 50px;
  background-color: #F6F6F6;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.span2{
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* 为了确保垂直居中，设置高度为 100% */
  font-weight: bold;
}
.a1{
  font-size: 12px;
  font-weight: bold;
  color: black;
}
</style>

<script>
import {reactive, ref} from "vue";

const input=ref('')
export default {
  mounted() {
    // 获取屏幕高度和宽度
    var screenWidht=screen.availWidth;
    var screenHeight1 = (screen.availHeight)/2-68-45;
    var screenHeight2 = (screen.availHeight)/2-45;
    // 获取要设置高度的元素
    var dynamicBox1 = document.getElementById('dynamicBox1');
    var dynamicBox2 = document.getElementById('dynamicBox2');
    var loginBox=document.getElementById('loginBox')
     //将屏幕高度应用到元素的高度上
    dynamicBox1.style.height = screenHeight1 + 'px';
    dynamicBox2.style.height = screenHeight2 + 'px';
    loginBox.style.left=screenWidht/2-400+'px';
    loginBox.style.top=screenHeight2-250+'px';
  },
  data(){
    return{
      selected:'#1F1F1F',
      unSelected:'#9E9E9E',
      studentColor:'#1F1F1F',
      teacherColor:'#9E9E9E',
      userName:'',
      password:'',
      code:''
    }
  },
  methods:{
    chooseStudent(){
      this.studentColor=this.selected;
      this.teacherColor=this.unSelected
    },
    chooseTeacher(){
      this.teacherColor=this.selected;
      this.studentColor=this.unSelected
    }
  }
}
</script>
