<template>
  <el-container>
    <Navigate/>
    <el-header class="header" style="">
      <div>
        <p class="title">就业指南</p>
      </div>
      <div class="nav">
        <ul class="nav-demo">
          <li @click="changeRouter(1)" :class="{active:activeTag==='tag1'}">
            <el-icon :size="20"><Document /></el-icon>
            <span style="">招聘信息</span>
          </li>
          <li @click="changeRouter(2)" :class="{active:activeTag==='tag2'}">
            <el-icon :size="20"><Reading /></el-icon>
            <span>求职必读</span>
          </li>
          <li @click="changeRouter(3)" :class="{active:activeTag==='tag3'}">
            <el-icon :size="20"><School /></el-icon>
            <span>公司信息</span>
          </li>
        </ul>
      </div>
    </el-header>
    <el-main class="main">
      <router-view name="mustRead"></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Navigate from "@/components/Navigate";
import Page from "@/components/Page";
export default {
  name: "JobInfo",
  components:{
    Navigate,Page
  },
  data(){
    return{
      activeTag:'tag1'
    }
  },
  methods:{
    changeRouter(index){
      if(index===1) {
        this.$router.push('/SecondClassJob/recruitInfo')//招聘信息
        this.activeTag = 'tag1'
      }else if(index===2){
        this.$router.push('/SecondClassJob/mustRead')
        this.activeTag = 'tag2'
      }else{
        this.$router.push('/SecondClassJob/companyInfo')//公司信息
        this.activeTag = 'tag3'
      }
    }
  }
}
</script>

<style scoped>
.header{
  background:url('../assets/job-background.jpg');
  height: 240px;
  margin-top: -9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main{
  background: RGB(235,245,247);
}
.title{
  font-size: 36px;
  font-weight: 500;
  color: #fff;
  text-align: center;
}
.nav{
  width: 650px;
  background: #fff;
  border-radius: 12px;
}
.nav-demo{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.nav-demo li{
  display: inline-block;
  float: left;
  font-size: 16px;
  font-weight: 500;
}
.nav-demo li:hover{
  color: #00a6a7;
}
.nav-demo span{
  font-size: 20px
}
.active{
  color: #00a6a7;
}
</style>
