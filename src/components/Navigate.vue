<template>
  <el-container>
    <el-header>
      <el-menu style="height: 50px;line-height:50px;position: relative" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
<!--        <el-menu-item index="1"><router-link to="/dp">首页</router-link></el-menu-item>-->
        <el-menu-item index="2"><router-link to="/postRecom">考研保研</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/SecondClassJob/recruitInfo">就业</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/SecondClassTech/Course">技术</router-link></el-menu-item>
        <el-menu-item index="5"><router-link to="/contest">竞赛</router-link></el-menu-item>
        <el-menu-item index="6" style="padding-bottom: 12px;position: absolute;right: 15%">
<!--          <el-input id="search" style="margin-top:10px;margin-left: 100px"-->
<!--                    placeholder="请输入内容"-->
<!--                    v-model="inputValue"-->
<!--                    :suffix-icon="Search"-->
<!--          >-->
<!--          </el-input>-->
          <span style="font-size: 20px;padding-top: 12px">计算机科学与工程学院第二课堂</span>
        </el-menu-item>
        <!--          <el-menu-item index="6"><el-button type="primary">搜索</el-button></el-menu-item>-->
        <el-menu-item index="7" style="position: absolute;right: 11%">
<!--          <el-icon><ChatRound /></el-icon>-->
        </el-menu-item>
        <el-menu-item index="8" style="position: absolute;right: 0">
          <el-avatar :src="imageUrl" icon="el-icon-user-solid"></el-avatar>
          <router-link :to="path">
          <label>{{username}}</label>
          </router-link>
          <el-dropdown>
        <span class="el-dropdown-link" style="outline:none;">
          <el-icon class="el-icon--right" style="outline:none;"><arrow-down /></el-icon>
        </span>
            <template #dropdown>
              <el-dropdown-menu>
                <div v-if="isLogin">
                  <router-link to="/help">
                  <el-dropdown-item :icon="Plus">帮助</el-dropdown-item>
                  </router-link>
                  <router-link to="/userCenter/myInfo">
                    <el-dropdown-item :icon="CirclePlusFilled">个人中心</el-dropdown-item>
                  </router-link>
                  <router-link to="/choose">
                    <el-dropdown-item :icon="Check" @click="logout">注销</el-dropdown-item>
                </router-link>
                </div>
                <div v-else>
                  <router-link to="/enterLogin">
                  <el-dropdown-item :icon="Plus">登录</el-dropdown-item>
                  </router-link>
                </div>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-menu-item>
      </el-menu>
    </el-header>
  </el-container>
</template>

<script>
import { Search } from '@element-plus/icons-vue'
import instance from "@/axios";
export default {
  setup(){
    return{
      Search
    }
  },
  data() {
    return {
      activeIndex: '1',
      input:'',
      inputValue:'',
      activeName: 'first',
      username:'用户名',
      isLogin: false,
      path:'/enterLogin',
      imageUrl:"https://img2.baidu.com/it/u=794747379,2520108192&fm=253&fmt=auto&app=138&f=PNG?w=500&h=504"
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClick(tab, event) {
      //console.log(tab, event);
    },
    logout(){
      if(localStorage.getItem("user")!==null){
        //请求后台接口 注销redis中的token
        instance.post('logout?token='+localStorage.getItem("token"))
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    },
  },
  created() {
    if(localStorage.getItem("user")!==null){
      this.username = localStorage.getItem("user")
      this.isLogin = true
      this.path = '/userCenter/myInfo'
    }
  }
}
</script>
<style scoped>
a{
  text-decoration: none;
}
#search{
  margin-top:10px;
  margin-left:100px;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}

</style>
