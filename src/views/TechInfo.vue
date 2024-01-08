<template>
  <el-container>
    <Navigate/>
    <el-header class="header">
      <h2 class="header_title">以学为伴，一生相伴</h2>
      <div class="nav">
        <ul class="nav-demo">
          <li @click="changeState(1)" :class="{active:activeTag==='tag1'}">
            <el-icon :size="20"><Document /></el-icon>
            <span style="">课程</span>
          </li>
          <li @click="changeState(2)" :class="{active:activeTag==='tag2'}">
            <el-icon :size="20"><Reading /></el-icon>
            <span>技术方向</span>
          </li>
          <li @click="changeState(3)" :class="{active:activeTag==='tag3'}">
            <el-icon :size="20"><Opportunity /></el-icon>
            <span>项目</span>
          </li>
        </ul>
      </div>
    </el-header>
    <el-main style="background: RGB(238,242,244)">
      <router-view name="techContent"></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Navigate from "@/components/Navigate";
export default {
  name: "TechInfo",
  components:{
    Navigate
  },
  data(){
    return {
      activeTag:'tag1'
    }
  },
  methods:{
    changeState(index){
      if(index===1){
        this.$router.push('/SecondClassTech/Course')
        this.activeTag = 'tag1'
      }
      else if(index===2){
        this.$router.push('/SecondClassTech/Direction')
        this.activeTag = 'tag2'
      }else{
        this.$router.push('/SecondClassTech/Project')
        this.activeTag = 'tag3'
      }
    }
  }
}
</script>

<style scoped>
.header{
  background: url("../assets/coursebg.jpg");
  height: 240px;
  margin-top: -9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header_title{
  font-size: 36px;
  color: #fff;
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
