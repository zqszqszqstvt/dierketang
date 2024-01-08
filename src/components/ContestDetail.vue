<template>
  <el-container>
<!--    竞赛详情介绍-->
    <el-container>
      <Navigate/>
      <el-header style="margin-left: 16px;height:335px ">
        <div style="font-size: 14px;">
          <span style="color:rgba(0, 0, 0, 0.45)">竞赛</span>
          <span>></span>
          <span class="contest-title">{{contestName}}</span>
        </div>
        <el-row>
          <el-col :span="15"><div class="grid-content bg-purple">
            <div style="height: 335px;margin-top:15px ">
              <img src="https://ali-cdn.educoder.net/images/avatars/Competition/88?t=1675933795" style="width: 100%;height: 335px">
            </div>
          </div></el-col>
          <el-col :span="8" :offset="1"><div class="grid-content bg-purple-light">
            <p style="font-size: 25px;margin-top: 10px">{{contestName}}</p>
            <div style="display: flex;justify-content: space-between;align-items: center">
              <div style="display: flex;flex-direction: column;align-items: center">
                <span>奖金</span>
                <span style="font-size: 24px">暂无</span>
              </div>
              <div style="display: flex;flex-direction: column;align-items: center">
                <span>浏览</span>
                <span style="font-size: 24px">23064</span>
              </div>
              <div style="display: flex;flex-direction: column;align-items: center">
                <span>报名</span>
                <span style="font-size: 24px">9759</span>
              </div>
            </div>
            <p>竞赛时间:<span style="margin-left: 10px">{{beginTime.substr(0, 10)}}~{{endTime.substr(0,10)}}</span></p>
            <p>报名时间:<span style="margin-left: 10px">{{entryBeginTime.substr(0,10)}}~{{entryEndTime.substr(0,10)}}</span></p>

            <p>竞赛状态:
              <span style="margin-left: 10px" v-if="new Date()<new Date(entryBeginTime)">未发布</span>
              <span style="margin-left: 10px" v-else-if="new Date()>=new Date(entryBeginTime)&&new Date()<new Date(entryEndTime)">报名中</span>
              <span style="margin-left: 10px" v-else-if="new Date()>=new Date(beginTime)&&new Date()<new Date(endTime)">活动中</span>
              <span style="margin-left: 10px" v-else>已结束</span>
            </p>


            <div style="display: flex;justify-content: center;align-items: center;">
              <el-button v-if="new Date()<new Date(entryBeginTime)"
                  round style="width: 200px;margin-top: 25px;height: 30px">
                未发布
              </el-button>
              <el-button v-else-if="new Date()>=new Date(entryBeginTime)&&new Date()<new Date(entryEndTime)"
                         round style="width: 200px;margin-top: 25px;height: 30px">
                报名中
              </el-button>
              <el-button v-else-if="new Date()>=new Date(beginTime)&&new Date()<new Date(endTime)"
                         round style="width: 200px;margin-top: 25px;height: 30px">
                活动中
              </el-button>
              <el-button v-else
                         round style="width: 200px;margin-top: 25px;height: 30px">
                已结束
              </el-button>
            </div>
          </div></el-col>
        </el-row>
      </el-header>
      <el-container style="margin-top: 60px;margin-left: 35px">
        <el-aside width="150px" style="">
          <el-tabs :tab-position="tabPosition" style="height: 400px">
            <el-tab-pane style="font-size:18px!important" label="竞赛详情"></el-tab-pane>
          </el-tabs>
        </el-aside>
        <el-main style="margin-top: -72px;margin-right: 50px">
          <h1 style="font-size: 2.25em">赛道官网网址</h1>
          <p style="margin-top: -25px;color: black">
            <a :href="linking" style="color: black" target="_blank">{{linking}}</a>
          </p>
          <h3 style="font-size: 1.5em">竞赛描述</h3>
          <p>
            {{contestDesc}}
          </p>
          <h3 style="font-size: 1.5em">竞赛主办方</h3>
          <p v-if="contestMaster!==null">{{contestMaster}}</p>
          <p v-else>暂无</p>

          <h3 style="font-size: 1.5em">竞赛要求</h3>
          <p v-if="contestCommand!==null">{{contestCommand}}</p>
          <p v-else>暂无</p>

        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Navigate from "@/components/Navigate";
import instance from "@/axios";
export default {
  name: "ContestDetail",
  components:{
    Navigate,
  },
  data(){
    return{
      inputValue:'',
      tabPosition:'left',
      contestName: '',
      entryBeginTime:'',
      entryEndTime:'',
      beginTime:'',
      endTime:'',
      linking:'',
      contestDesc:'',
      contestMaster:'',
      contestCommand:''
    }
  },
  created() {
    this.contestName = JSON.parse((this.$route.query.record)).contestName
    this.entryBeginTime = JSON.parse((this.$route.query.record)).entryBeginTime
    this.entryEndTime = JSON.parse((this.$route.query.record)).entryEndTime
    this.beginTime = JSON.parse((this.$route.query.record)).beginTime
    this.endTime=JSON.parse((this.$route.query.record)).endTime
    this.linking = JSON.parse((this.$route.query.record)).linking
    this.contestDesc = JSON.parse((this.$route.query.record)).contestDesc
    this.contestMaster = JSON.parse((this.$route.query.record)).contestMaster
    this.contestCommand = JSON.parse((this.$route.query.record)).contestCommand
    console.log(this.contestName)
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
/deep/.el-tabs__item {
  /* 修改为您想要的文字大小 */
  font-size: 20px!important;
  margin-bottom: 20px;
}
</style>
