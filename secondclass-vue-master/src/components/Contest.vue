<template>
  <el-container>
    <Navigate/>
    <el-header style="margin-bottom: 35px">
      <el-container style="display: flex;align-items:flex-start;justify-content:space-between">
        <el-aside width="364px" style="margin-left: 35px">
          <span style="font-size: 30px;font-weight: 500;letter-spacing: 4px">
            竞赛组织
          </span>
          <span>激发创新活力、培养软件人才</span>
          <div class="search" style="display: flex;justify-content: center;align-items: center;border-radius: 50px">
            <el-input id="search" style="width: 340px;margin-top: 21px;border-radius: 50px;"
                      placeholder="请输入竞赛名称"
                      @keydown.enter="searchByName"
                      v-model="contestName">
            </el-input>
            <el-button type="primary" @click="searchByName"
                       style="margin-bottom: -20px">
              搜索</el-button>
          </div>
        </el-aside>
        <el-main style="position:absolute;width: 50%;right: 0;">
          <img src="https://www-cdn.educoder.net/static/competition-banner.cb09dc6c.png" style="height: 140px;width: 80%">
        </el-main>
      </el-container>
    </el-header>
    <router-view>
    <el-main style="margin-top: 25px">
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane label="全部" name="first">
          <ContestState state="first" :contestName="this.contestName" ref="child1"/>
        </el-tab-pane>
        <el-tab-pane label="报名中" name="second">
          <ContestState state="second" :contestName="this.contestName" ref="child2"/>
        </el-tab-pane>
        <el-tab-pane label="活动中" name="third">
          <ContestState state="third" :contestName="this.contestName" ref="child3"/>
        </el-tab-pane>
        <el-tab-pane label="已结束" name="fourth">
          <ContestState state="fourth" :contestName="this.contestName" ref="child4"/>
        </el-tab-pane>
      </el-tabs>
    </el-main>
    </router-view>
  </el-container>
</template>

<script>
import { Search } from '@element-plus/icons-vue'
import Page from "@/components/Page";
import Navigate from "@/components/Navigate";
import ContestState from "@/views/ContestState";
export default {
  components: {
    ContestState, Navigate
  },
  data() {
    return {
      activeIndex: '5',
      input:'',
      contestName:'',
      activeName: 'first',
      currentPage3:5,
      state:'first'
    };
  },
  methods: {
    searchByName(){
      if(this.state==='first') this.$refs.child1.loadByName()//点击搜索触发事件加载子组件中的数据
      else if(this.state==='second') this.$refs.child2.loadByName()
      else if(this.state==='third') this.$refs.child3.loadByName()
      else this.$refs.child4.loadByName()
    },
    handleSelect(key, keyPath) {
     // console.log(key, keyPath);
    },
    handleTabClick(tab) {
      this.state = tab.props.name
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
/deep/#search{
  border-radius: 20px!important;
}
</style>
