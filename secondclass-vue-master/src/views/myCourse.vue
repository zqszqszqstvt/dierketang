<template >
  <div style="width: 100%;min-width: 1700px;background-color: #F6F6F6;height: auto;">
    <el-row type="flex" justify="center" style="background-color: #F6F6F6;">
      <el-col :span="16">
        <div class="totalScore">
          <el-row>
            <el-col :span="1"></el-col>
            <el-col :span="6">
              <h2 style="margin:10px 0px">第一课堂总成绩</h2>
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
              <el-progress type="circle" :percentage="score" :color="'blueviolet'" :stroke-width="17" :width="100">
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
            <el-col :span="1"></el-col>
            <el-col :span="23">
              <h3 style="margin-top: 20px;margin-bottom: 0px">学习数据</h3>
            </el-col>
          </el-row>
          <el-row gutter="0" type="flex" justify="center">

            <el-col :span="8">
              <div class="div1">
                <el-row>
                  <el-col :span="1"></el-col>
                  <el-col :span="10"></el-col>
                  <el-col :span="13">
                    <p class="p2">{{studyHour}}小时</p>
                    <p class="p3">学习时长</p>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="div1"><el-row>
                <el-col :span="1"></el-col>
                <el-col :span="10"></el-col>
                <el-col :span="13">
                  <p class="p2">{{studyNumber}}门</p>
                  <p class="p3">学习课程数</p>
                </el-col>
              </el-row></div>
            </el-col>
            <el-col :span="8">
              <div class="div1"><el-row>
                <el-col :span="1"></el-col>
                <el-col :span="10"></el-col>
                <el-col :span="13">
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
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
import Statistic from "@/components/Statistic.vue"
import CourseLink from "@/components/CourseLink.vue";
import CourseList from "@/components/CourseList.vue";
import {Bottom} from "@element-plus/icons-vue";
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
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},
        {name:"课程",link:"https://www.baidu.com/" ,picture:"public/IMG_0469-2.jpg",schedule:21},

      ]


    }
  }
}
</script>
<style scoped>
.el-row {
  margin-bottom: 10px;
}
.totalScore{
  width: 100%;
  height: auto;
  background-color: white;
  padding-bottom: 5px;
  border-radius:5px;
}
.p1{
  margin: 4px 0px;
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
  margin: 10px 5%;
  width: 90%;
  height: auto;
  border-radius:5px;
}
.p2{
  font-size: 23px;
  margin-top: 10px;
  margin-bottom: 3px;
  font-weight: bold;
}
.p3{
  font-size: 13px;
  margin-top: 3px;
  margin-bottom: 20px;
}
.p4{
  font-size:23px;
  margin:0px;
  user-select:none
}
</style>
