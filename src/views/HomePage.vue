<template xmlns:el-col="http://www.w3.org/1999/html">
  <el-container>
    <Navigate/>
    <el-header height="600px">
      <el-row type="flex" justify="center" style="margin: 5%">
        <el-col :span="20">
          <el-carousel height="500px" indicator-position="outside" style="min-width: 1000px">
            <el-carousel-item v-for="item in imgList" :key="item">
              <img style="height:500px;width:100%;" :src="item.imgUrl">
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <div style="width: 100%">
        <el-row type="flex" justify="start" style="margin: 5%;margin: 0">
          <el-col :span="3"></el-col>
          <el-col :span="4" style="height: 100%">
            <div style="width: 100%;height: 100%">
              <h2 @click="classification">模块分类 >></h2>
              <P>Classification</P>
            </div>
          </el-col>
        </el-row>
      </div>
      <div style="width: 100%;height: 600px">
        <el-row type="flex" justify="start" style="margin: 5%">
          <el-col :span="2"></el-col>
          <el-col :span="20" style="height: 100%">
            <div class="box1">
              <div style="  width: 49%;height: 49%;margin-right: 1%;margin-bottom: 1%;background-color: darkgrey;">
                <div class="box3">
                  <el-row type="flex" justify="start">
                    <el-col :span="2"></el-col>
                    <el-col :span="6"><el-icon size="90"><Monitor /></el-icon></el-col>
                    <el-col :span="10">
                      <h4>第一课堂</h4>
                      <h1>课堂教学</h1>
                      <h3>解决知识问题</h3>
                    </el-col>
                    <el-col :span="6"></el-col>
                  </el-row>
                </div>
                <div class="box4">
                  <el-row>
                    <el-col :span="4"></el-col>
                    <el-col :span="10">
                      <el-button type="info">能力自画像“我的成绩”</el-button>
                    </el-col>
                    <el-col :span="8"></el-col>
                  </el-row>
                </div>
              </div>
              <div style="  width: 49%;height: 49%;margin-left: 1%;margin-bottom: 1%;background-color: darkgrey;">
                <div class="box3">
                  <el-row type="flex" justify="start">
                    <el-col :span="2"></el-col>
                    <el-col :span="6"><el-icon size="90"><Monitor /></el-icon></el-col>
                    <el-col :span="10">
                      <h4>第二课堂</h4>
                      <h1>网络教学</h1>
                      <h3>解决自主学习问题</h3>
                    </el-col>
                    <el-col :span="6"></el-col>
                  </el-row>
                </div>
                <div class="box4">
                  <el-row>
                    <el-col :span="4"></el-col>
                    <el-col :span="10">
                      <el-button type="info">校内课程资源</el-button>
                    </el-col>
                    <el-col :span="8"></el-col>
                  </el-row>
                </div>
              </div>
              <div style="  width: 49%;height: 49%;margin-right: 1%;margin-top: 1%;background-color: darkgrey;">
                <div class="box3">
                  <el-row type="flex" justify="start">
                    <el-col :span="2"></el-col>
                    <el-col :span="6"><el-icon size="90"><Monitor /></el-icon></el-col>
                    <el-col :span="10">
                      <h4>第三课堂</h4>
                      <h1>实践教学</h1>
                      <h3>解决动手能力问题</h3>
                    </el-col>
                    <el-col :span="6"></el-col>
                  </el-row>
                </div>
                <div class="box4">
                  <el-row>
                    <el-col :span="4"></el-col>
                    <el-col :span="10">
                      <el-button type="info">信息发布</el-button>
                    </el-col>
                    <el-col :span="8"></el-col>
                  </el-row>
                </div>
              </div>
              <div style="  width: 49%;height: 49%;margin-left: 1%;margin-top: 1%;background-color: darkgrey;">
                <div class="box3">
                  <el-row type="flex" justify="start">
                    <el-col :span="2"></el-col>
                    <el-col :span="6"><el-icon size="90"><Monitor /></el-icon></el-col>
                    <el-col :span="10">
                      <h4>第四课堂</h4>
                      <h1>学科竞赛</h1>
                      <h3>解决能力提升问题</h3>
                    </el-col>
                    <el-col :span="6"></el-col>
                  </el-row>
                </div>
                <div class="box4">
                  <el-row>
                    <el-col :span="4"></el-col>
                    <el-col :span="10">
                      <el-button type="info">能力自画像“我的竞赛”</el-button>
                    </el-col>
                    <el-col :span="8"></el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>

    <el-footer>
      <div style="margin-top: 50px;height: 300px;width: 100%;background-color: #999999">
        <div style="height: 60px;width: 100%"></div>
        <div style=";width: 100%;height: 80%">
          <el-row type="flex">
            <el-col :span="3"></el-col>
            <el-col :span="9">
              <h2 style="margin-bottom: 50px">武汉工程大学</h2>
              <p>地址：中国湖北省武汉市东湖高新技术开发区光谷一路206号</p>
              <p>邮编：430205</p>
              <p>版权所有：武汉工程大学计算机科学与工程学院、人工智能学院</p>
            </el-col>
            <el-col :span="9">
              <el-image :preview-src-list="srcList" :src="'public/P4190041-4.JPG'"></el-image>
            </el-col>
            <el-col :span="3"></el-col>
          </el-row>
        </div>
      </div>
    </el-footer>

  </el-container>
</template>
<script setup>
import Navigate from "@/components/Navigate.vue";
import {User} from '@element-plus/icons-vue'
import {Lock} from '@element-plus/icons-vue'
import instance from "@/axios";
const classification = () => {
  this.$router.push({ path: '/postRecom'});
};
const imgList = [
  {
    id:0,
    imgUrl: "/src/assets/banner/login_bg1.jpg"
  },
  {
    id:1,
    imgUrl: "/src/assets/banner/login_bg2.jpg"
  },
  {
    id:2,
    imgUrl: "/src/assets/banner/login_bg3.jpg"
  },
  {
    id:3,
    imgUrl: "/src/assets/banner/login_bg4.jpg"
  },
  {
    id:4,
    imgUrl: "/src/assets/banner/login_bg5.jpg"
  },
];
</script>
<style>
.header{
  width: 100%;
  height: 500px;
}
.box1{
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.box2{
  width: 48%;
  height: 48%;
  padding: 1%;
  background-color: #02a6b5;
}
.box3{
  width: 100%;height: 55%;margin-top: 10%
}
.box4{
  width: 100%;height: 20%;
}
</style>