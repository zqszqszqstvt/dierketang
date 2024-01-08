<template>
  <div>
    <el-row v-for="record in records" :key="record.contestId"
            :gutter="20" style="margin-bottom: 20px;margin-left: 15px;background: white">
      <el-col :span="6">
        <div class="contest-img">
          <img src="https://ali-cdn.educoder.net/images/avatars/Competition/88?t=1675933795" style="width: 100%;height: 150px;">
        </div>
      </el-col>
      <el-col :span="12">
        <div class="contest-introduce">
          <router-link :to="{path: '/detail',query:{record:JSON.stringify(record)}}">
            <a class="contest-title" href="#" @click="insertHistory(record.contestId)"
               style="color: black;">
              {{record.contestName}}
            </a>
          </router-link>
          <p class="description" style="font-size: 10px">
            {{record.contestDesc}}
          </p>
          <div class="contest-time" style="font-size: 12px">
            竞赛时间: <span style="margin-right: 12px">{{record.beginTime.substr(0,10)}}~{{record.endTime.substr(0,10)}}</span>
            报名时间:<span style="margin-right: 12px">{{record.entryBeginTime.substr(0,10)}}~{{record.entryEndTime.substr(0,10)}}</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6" style="display: flex;justify-content: center;align-items: center">
        <div class="grid-content bg-purple-dark">
          <div style="">
            <div style="text-align: center;font-size: 25px">
              {{record.contestRank}}
            </div>
            <!--            <div style="float: right;text-align: center"><label style="text-align: center">已报名</label></div>-->
            <br>

            <div class="contest-status" style="float: right">
              <el-button round style="margin-top: 15px" v-if="new Date()<new Date(record.entryBeginTime)">未发布</el-button>
              <el-button round style="margin-top: 15px" v-else-if="new Date()>=new Date(record.entryBeginTime)&&new Date()<new Date(record.entryEndTime)">报名中</el-button>
              <el-button round style="margin-top: 15px" v-else-if="new Date()>=new Date(record.beginTime)&&new Date()<new Date(record.endTime)">活动中</el-button>
              <el-button round style="margin-top: 15px" v-else>已结束</el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Page from "@/components/Page";
import instance from "@/axios";

export default {
  name: "recommendContest",
  data(){
    return {
      records:[]
    }
  },
  created() {
    this.loadData()
  },
  methods:{
    loadData(){
      instance.post('/contest/recommandContest?username='+localStorage.getItem('user'),null,{
        headers:{
          token:localStorage.getItem('token')
        }
      })
          .then(response=>{
            console.log('接受到的数据为',response.data)
            this.records = []
            this.records = response.data.data
          })
          .catch(error=>{
            console.log('错误为',error)
          })
    },
    loadByName(){
      instance.get(this.url,{
        headers:{
          token:localStorage.getItem('token')
        },
        params:{
          timeType:this.state,
          contestName:this.contestName
        }
      })
          .then(response=>{
            console.log('接受到的数据为',response.data)
            this.records = []
            this.records = response.data.data.records
          })
          .catch(error=>{
            console.log('错误为',error)
          })
    },
    insertHistory(contestId){
      instance.post('/contest/insertContestHistoryInfo',{
        userId:localStorage.getItem('userId'),
        contestId:contestId
      },{
        headers:{
          token:localStorage.getItem('token')
        }
      })
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}

</style>
