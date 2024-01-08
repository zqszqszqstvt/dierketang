<template>
  <el-container>
    <Navigate/>
      <el-header>
        <img class="back_img" src="../assets/rl_top.png"/>
      </el-header>
    <el-main style="margin-top: 60px;">
      <el-container class="layout-container-demo" style="height: 500px">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-scrollbar>
            <el-menu class="icon" @select="handleSelect">
              <el-menu-item index="0" >
                <template #title style="text-align: center;">
                    <el-icon><User /></el-icon><span>我的信息</span>
                </template>
              </el-menu-item>

              <el-menu-item index="1">
                <template #title>
                  <el-icon><TrophyBase /></el-icon>推荐竞赛
                </template>
              </el-menu-item>

              <el-menu-item index="2">
                <template #title>
                  <el-icon><Bell /></el-icon>推荐招聘
                </template>
              </el-menu-item>

              <el-menu-item index="3">
                <template #title>
                  <el-icon><Bell /></el-icon>推荐保研
                </template>
              </el-menu-item>

              <el-menu-item index="4">
                <template #title>
                  <el-icon><Bell /></el-icon>推荐课程
                </template>
              </el-menu-item>

              <el-menu-item index="5">
                <template #title>
                  <el-icon><Bell /></el-icon>推荐项目
                </template>
              </el-menu-item>

              <el-menu-item index="6">
                <template #title>
                  <el-icon><Key /></el-icon>账号安全
                </template>
              </el-menu-item>
            </el-menu>

          </el-scrollbar>
        </el-aside>

        <el-container>
          <el-header style="text-align: left; font-size: 25px">
            <span>{{title}}</span>
          </el-header>
          <el-main style="border-top: 1px solid #ddd;background: RGB(242,243,245)">
<!--       主题内容     -->
            <router-view name="userCenter"></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import { reactive } from 'vue'
import Navigate from "@/components/Navigate";
export default {
  name: "userCenter",
  components:{
    Navigate
  },
  data(){
    return{
      title:'我的消息'
    }
  },
  methods:{
    onSubmit(){
      console.log('submit!')
    },
    handleSelect(data){
      console.log(data)
      //"我的竞赛","我的就业","我的技术点","我的考研/保研",
      var titles=["我的信息","推荐竞赛","推荐招聘","推荐保研","推荐课程","推荐项目","账号安全"];
      this.title=titles[data];
      if(data==0)
        this.$router.push('/userCenter/myInfo');
      else if (data==1)
        this.$router.push('/userCenter/recommendContest');
      else if (data==2)
        this.$router.push('/userCenter/recommendRecruit');
      else if (data==3)
        this.$router.push('/userCenter/recommendPost');
      else if (data==4)
        this.$router.push('/userCenter/recommendCurriculum');
      else if (data==5)
        this.$router.push('/userCenter/recommendProject');
      else if (data==6)
        this.$router.push('/userCenter/mySafe');
    }
  }
}
</script>

<style scoped>
.back_img{
  width: 100%;
  height: 150px;
}
/deep/ .icon el-icon{
  display: none;
  /*去掉箭头*/
}
/*.container .el-container{
  --el-container-padding: 0;
}

.header .el-header{
  --el-header-padding: 0;
}*/
</style>
