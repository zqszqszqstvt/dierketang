<template >
  <div style="width: 100%;min-width: 500px;background-color: #F6F6F6;height: auto;">
    <el-row type="flex" justify="center" style="margin-top: 5px;margin-bottom: 0">
      <el-col :span="16">
        <el-row style="margin: 3px 0">
          <el-col :span="5" >
            <router-link class="rl1" to="/postRecom">
              能力自画像
            </router-link>
            <a class="rl1">
              >
            </a>
            <router-link class="rl1" to="/myCourse">
              我的课程
            </router-link>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" style="background-color: #F6F6F6;">
      <el-col :span="16">
        <div class="totalScore">
          <el-row>
            <el-col :span="1"></el-col>
            <el-col :span="6">
              <h2 style="margin:10px 0px;font-size: 21px;margin-top: 20px">第一课堂总成绩</h2>
              <p class="p1">姓名：<span style="fontWeight: bold">{{name}}</span></p>
              <p class="p1">专业：<span style="fontWeight: bold">{{major}}</span></p>
            </el-col>
            <el-col :span="6">
              <div style="height: 41px;width: 100%"></div>
              <p class="p1">学院：<span style="fontWeight: bold">{{college}}</span></p>
              <p class="p1">年级：<span style="fontWeight: bold">{{grade}}级</span></p>
            </el-col>
            <el-col :span="6"></el-col>
            <el-col :span="5">
              <el-progress type="circle" :percentage="score" :color="'blueviolet'" :stroke-width="17" :width="100" style="margin-top: 20px">
                <span style="font-weight: bold;color: black"><span style="font-size: 20px">{{ score }}</span>分</span>
              </el-progress>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>


    <el-row type="flex" justify="center">
      <el-col :span="16">
        <div class="studyData">
          <el-row>
            <el-col :span="8">
              <h3 style="margin-top: 20px;margin-bottom: 5px;margin-left: 4%">学习数据</h3>
            </el-col>
          </el-row>
          <el-row gutter="0" type="flex" justify="center">
            <el-col :span="8">
              <div class="div1" style="margin-left: 5%;margin-right: 1%">
                <el-row>
                  <el-col :span="1"></el-col>
                  <el-col :span="8"></el-col>
                  <el-col :span="15">
                    <p class="p2">{{studyHour}}小时</p>
                    <p class="p3">学习时长</p>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="div1" style="margin-left: 3%;margin-right: 3%"><el-row>
                <el-col :span="1"></el-col>
                <el-col :span="8"></el-col>
                <el-col :span="15">
                  <p class="p2">{{studyNumber}}门</p>
                  <p class="p3">学习课程数</p>
                </el-col>
              </el-row></div>
            </el-col>
            <el-col :span="8">
              <div class="div1" style="margin-left: 1%;margin-right: 5%"><el-row>
                <el-col :span="1"></el-col>
                <el-col :span="8"></el-col>
                <el-col :span="15">
                  <p class="p2">{{homeworkSchedule}}分</p>
                  <p class="p3">作业完成度</p>
                </el-col>
              </el-row></div>
            </el-col>

          </el-row>
        </div>
      </el-col>
    </el-row>


    <el-row type="flex" justify="center">
      <el-col :span="16">
        <el-row gutter="10">
          <el-col :span="2">
            <p class="p4" :style="{ color: totalColour}" @click="clickTotal">全部</p>
          </el-col>
          <el-col :span="2">
            <p class="p4" :style="{ color: ongoingColour}" @click="clickOn">进行中</p>
          </el-col>
          <el-col :span="2">
            <p class="p4" :style="{ color: finishColour}" @click="clickFinish">已完成</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="16">
        <CourseList :list1=cou />
      </el-col>
    </el-row>
  </div>


  <div class="footer">
    <div class="content">
      <div class="left">
        <img class="logo" :src="logoImg" alt="" />
        <div class="text">
          地址：中国湖北武汉东湖高新技术开发区光谷一路206号
        </div>
        <div class="text">邮编：430205</div>
        <div class="cr">
          版权所有：武汉工程大学计算机科学与工程学院人工智能学院
        </div>
      </div>
      <div class="right">
        <img class="qrcode" :src="qrcode" alt="" />
        <div class="desc">官网微信公众号</div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
import Statistic from "@/components/Statistic.vue"
import CourseLink from "@/components/CourseLink.vue";
import CourseList from "@/components/CourseList.vue";
import {Bottom} from "@element-plus/icons-vue";
import logoImg from "@/assets/layout/logo.png";
import qrcode from "@/assets/home/qrcode.png";
export default {
  methods:{
    clickTotal(){
      this.finishColour=this.ongoingColour='#808080';
      this.totalColour='blueviolet';
    },
    clickOn(){
      this.finishColour=this.totalColour='#808080';
      this.ongoingColour='blueviolet';
      //下面筛选进行中的课程返回给CourseLish
    },
    clickFinish(){
      this.totalColour=this.ongoingColour='#808080';
      this.finishColour='blueviolet';
      //下面筛选已完成的课程返回给CourseLish
    }
  },
  components:{
    Bottom,
    ProgressBar,
    Statistic,
    CourseLink,
    CourseList,

  },
  data(){
    return{
      qrcode,
      logoImg,
      studyHour:36,
      studyNumber:20,
      homeworkSchedule:62,
      score:88,
      name:"子淇",
      college:"计算机学院",
      major:"软件工程",
      grade:"2021",
      ongoingColour:'#808080',
      totalColour:'blueviolet',
      finishColour:'#808080',

      cou:[//课程数据
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:qrcode,schedule:21},

      ]


    }
  }
}
</script>
<style scoped>
.el-row {
  margin-bottom: 10px;
}
.rl1{
  text-decoration: none;
  font-size: 13px;
  color: #999999
}
.totalScore{
  width: 100%;
  height: auto;
  background-color: white;
  padding-bottom: 5px;
  border-radius:5px;
}
.p1{
  margin: 12px 0px;
  font-size: 14px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
.studyData{
  width: 100%;
  height: auto;
  background-color: white;
  border-radius:5px;
}
.div1{
  background-color: #F2F4FF;
//margin: 10px 5%;
  margin-bottom: 25px;
  width: 93%;
  height: 110px;
  border-radius:15px;
}
.p2{
  font-size: 27px;
  margin-top: 25px;
  margin-bottom: 5px;
  font-weight: bold;
}
.p3{
  font-size: 13px;
  margin-top: 0px;
  margin-bottom: 25px;
  font-weight: bold;
//font-family: 'SimHei';
}
.p4{
  font-weight: bold;
  font-size:20px;
  margin:0px;
  user-select:none
}
.footer {
  padding: 38px 0 18px;
  background-color: #404040;
  height: 194px;
  .content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    .left {
      .logo {
      }
      .text {
        margin-top: 12px;
        font-size: 14px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 20px;
      }
      .cr {
        width: 996px;
        border-top: 1px solid #4c4c4c;
        padding-top: 13px;
        font-size: 14px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        color: #6f6f6f;
        line-height: 20px;
        position: absolute;
        bottom: -7px;
      }
    }
    .right {
      position: relative;
      top: 7px;
      text-align: center;
      .desc {
        margin-top: 13px;
        font-size: 14px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 20px;
      }
    }
  }
}
</style>
