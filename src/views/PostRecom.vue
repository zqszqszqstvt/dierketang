<template>
  <el-container>
    <Navigate/>
    <el-header>
      <div class="header_classify">
       <el-row style="margin-left:5%;display: flex;align-items: center;height: 135px">
         <el-col :span="16" class="classify">
           <div>
             <span>子类别:</span>
             <el-tag class="type" size="large" type="info" @click="changeTag('tag1')" :class="{active:activeTag==='tag1'}">全部</el-tag>
             <el-tag class="type" size="large" type="info" @click="changeTag('tag2')" :class="{active:activeTag==='tag2'}">夏令营</el-tag>
             <el-tag class="type" size="large" type="info" @click="changeTag('tag3')" :class="{active:activeTag==='tag3'}">预推免</el-tag>
<!--             <el-tag size="large" type="info" @click="changeTag('tag4')" :class="{active:activeTag==='tag4'}">入营名单</el-tag>-->
           </div>
           <div style="margin-top: 20px">
             <span>进行状态:</span>
             <el-tag class="beingState" size="large" type="info" @click="changeTime('time1')" :class="{active:activeTime==='time1'}">全部</el-tag>
             <el-tag class="beingState" size="large" type="info" @click="changeTime('time2')" :class="{active:activeTime==='time2'}">未开始</el-tag>
             <el-tag class="beingState" size="large" type="info" @click="changeTime('time3')" :class="{active:activeTime==='time3'}">报名中</el-tag>
             <el-tag class="beingState" size="large" type="info" @click="changeTime('time4')" :class="{active:activeTime==='time4'}">活动中</el-tag>
             <el-tag class="beingState" size="large" type="info" @click="changeTime('time5')" :class="{active:activeTime==='time5'}">已结束</el-tag>
           </div>
         </el-col>
         <el-col :span="8" class="search">
           <el-row>
             <el-input
                 placeholder="请输入学校名称"
                 v-model="school"
                 style="width: 225px"
                 @keydown.enter="searchBySchool"
                 clearable>
             </el-input>
             <el-button type="primary" @click="searchBySchool">搜索</el-button>
           </el-row>
         </el-col>
       </el-row>
      </div>
    </el-header>
    <el-main style="background: RGB(242,243,245);margin-top: 100px">
      <el-row v-for="record in records" :key="record.id"
              class="article" type="flex" justify="center" style="margin-bottom: 10px">
          <el-col :span="12" class="article-content">
            <div>
              <el-link :href="record.link" target="_blank"
                       @click="insertRecord(record.id)"
                  class="article-title" type="primary" :underline="false">{{'【'+record.school+'】'}}——{{record.institute}}</el-link>
              <div class="article-desc">
                {{record.introduce}}
              </div>
              <div style="font-size: 12px;color: #999;">
              <div class="article-start-time" style="margin-bottom: 3px;margin-top: 4px"> 报名时间：{{record.entryBeginTime.substr(0,10)}}~{{record.entryEndTime.substr(0,10)}}</div>
              <div class="article-end-time"> 活动时间：{{record.beginTime.substr(0,10)}}~{{record.endTime.substr(0,10)}}</div>
              </div>
              <div class="tag" style="margin-left: -15px;margin-top: 3px;padding-left: 25px">
                <el-tag >{{record.category}}</el-tag>
              </div>
            </div>
          </el-col>
          <el-col :span="6" class="article-time">
            <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;margin-top: 10px">
              <a class="article-status" style="text-align: center">
                <div class="icon">
                  <el-icon :size="20" :color="color" >
                    <Edit/>
                  </el-icon>
                </div>
                <div class="status" style="text-align: center;color: #e6f7ff;font-size: 14px">
                  <span v-if="new Date()<new Date(record.entryBeginTime)">
                    未开始报名
                  </span>
                  <span v-else-if="new Date()>=new Date(record.entryBeginTime)&&new Date()<new Date(record.entryEndTime)">
                    报名中
                  </span>
                  <span v-else-if="new Date()>=new Date(record.entryEndTime)&&new Date()<new Date(record.beginTime)">
                    未开始活动
                  </span>
                  <span v-else-if="new Date()>=new Date(record.beginTime)&&new Date()<new Date(record.endTime)">
                    活动中
                  </span>
                  <span v-else>
                    已结束
                  </span>
                </div>
              </a>
              <div class="article-info" style="width: 76px;height: 66px;
              background: rgb(230, 247, 255);display: flex;flex-direction: column;justify-content: center;
              align-items: center">
                <div class="state" v-if="new Date()<new Date(record.entryBeginTime)">距报名开始:</div>
                <div class="state" v-else-if="new Date()>new Date(record.entryBeginTime)&&new Date()<new Date(record.entryEndTime)">距报名截止:</div>
                <div class="state" v-else-if="new Date()>=new Date(record.entryEndTime)&&new Date()<new Date(record.beginTime)">距活动开始:</div>
                <div class="state" v-else-if="new Date()>=new Date(record.beginTime)&&new Date()<new Date(record.endTime)">距活动结束:</div>
                <div class="state" v-else>已结束:</div>
                <div>
                  <span class="day" v-if="new Date()<new Date(record.entryBeginTime)">
                    <span>{{Math.ceil(Math.abs(new Date(record.entryBeginTime)-new Date())/(1000 * 60 * 60 * 24))}}</span>
                  </span>
                  <span class="day" v-else-if="new Date()>new Date(record.entryBeginTime)&&new Date()<new Date(record.entryEndTime)">
                    <span>{{Math.ceil(Math.abs(new Date(record.entryEndTime)-new Date())/(1000 * 60 * 60 * 24))}}</span>
                  </span>
                  <span class="day" v-else-if="new Date()>=new Date(record.entryEndTime)&&new Date()<new Date(record.beginTime)">
                    <span>{{Math.ceil(Math.abs(new Date(record.beginTime)-new Date())/(1000 * 60 * 60 * 24))}}</span>
                  </span>
                  <span class="day" v-else-if="new Date()>=new Date(record.beginTime)&&new Date()<new Date(record.endTime)">
                    <span>{{Math.ceil(Math.abs(new Date(record.endTime)-new Date())/(1000 * 60 * 60 * 24))}}</span>
                  </span>
                  <span class="day" v-else>
                    <span>{{Math.ceil(Math.abs(new Date()-new Date(record.endTime))/(1000 * 60 * 60 * 24))}}</span>
                  </span>
                <span style="color: rgb(68, 152, 255)">天</span>
              </div>
              </div>
            </div>
          </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <Page @avertCurPage="changeCurPage"/>
    </el-footer>
  </el-container>
</template>

<script>
import SecondClassJob from "@/views/SecondClassJob";
import Navigate from "@/components/Navigate";
import Page from "@/components/Page";
import instance from "@/axios";
export default {
  name: "PostRecom",
  components: {
    SecondClassJob,Navigate,Page
  },
  created() {
    this.loadData(1,5)
  },
  computed:{
  },
  data(){
    return {
      activeTag:'tag1',
      activeTime:'time1',
      school:'',
      category:'',
      state:"0",
      records:[],
    }
  },
  methods:{
    insertRecord(baoyanId){
      console.log(typeof baoyanId)
      console.log(typeof localStorage.getItem('userId'))
      //记录点击按钮的用户
      instance.post('/baoyan/insertBaoyanHistoryInfo',{
        baoyanId:baoyanId,
        userId:parseInt(localStorage.getItem('userId'))
      },{
        headers:{
          token:localStorage.getItem('token')
        }
      })
    },
    changeCurPage(page){
      this.loadData(page,5)
    },
    loadData(num,size){
      instance.get('/baoyan/searchBaoyan/'+num+'/'+size,{
        headers:{
          token:localStorage.getItem('token')
        }
      })
          .then(response=>{
            console.log('接受到的数据为:',response.data)
            this.records = []
            this.records = response.data.data.records
          })
          .catch(error=>{
            console.log(error)
          })
    },
    searchBySchool(){
      instance.get('/baoyan/searchBaoyan/1/5',{
        headers:{
          token:localStorage.getItem('token')
        },
        params:{
          school:this.school,
          state:this.state,
          category:this.category
        }
      })
      .then(response=>{
        console.log('接受到的数据为',response.data)
        this.records = []
        this.records = response.data.data.records
      })
      .catch(error=>{
        console.log(error)
      })
    },
    changeTag(tag){
      this.activeTag = tag
      if(tag==='tag1'){//查询全部类别
        this.category = "";
        instance.get('/baoyan/searchBaoyan/1/5',{
          headers:{
            token:localStorage.getItem('token')
          },
          params:{
            state:this.state,
            category:this.category
        }
        })
        .then(response=>{
          this.records = response.data.data.records
        })
        .catch(error=>{
          console.log(error)
        })
      }else if(tag==='tag2'){//查询夏令营
        this.category = '夏令营'
        instance.get('/baoyan/searchBaoyan/1/5',{
          headers:{
            token:localStorage.getItem('token')
          },
        params:{
          category:this.category,
          state:this.state
        }
        })
            .then(response=>{
              this.records = response.data.data.records
            })
            .catch(error=>{
              console.log(error)
            })
      }else{//查询
        this.category = '预推免'
        instance.get('/baoyan/searchBaoyan/1/5',{
          headers:{
            token:localStorage.getItem('token')
          },
          params:{
            category:this.category,
            state:this.state
          }
        })
            .then(response=>{
              this.records = response.data.data.records
            })
            .catch(error=>{
              console.log(error)
            })
      }
    },
    changeTime(time){
      this.activeTime = time
      this.state = "0"
      if(time==='time1'){//查询全部
        instance.get('/baoyan/searchBaoyan/1/5',{
          headers:{
            token:localStorage.getItem('token')
          },
          params:{
            category:this.category,
            state:this.state
          }
        })
            .then(response=>{
              this.records = []
              this.records = response.data.data.records
            })
            .catch(error=>{
              console.log(error)
            })
      }else if(time==='time2'){//未开始
        this.state = "1"
        instance.get('/baoyan/searchBaoyan/1/5',{
          headers:{
            token:localStorage.getItem('token')
          },
          params:{
            category:this.category,
            state:this.state
          }
        })
            .then(response=>{
              this.records = []
              this.records = response.data.data.records
            })
            .catch(error=>{
              console.log(error)
            })
      }else if(time==='time3'){
        this.state = "2"
        instance.get('/baoyan/searchBaoyan/1/5',{
          headers:{
            token:localStorage.getItem('token')
          },
          params:{
            state:"2",
            category:this.category
          }
        })
            .then(response=>{
              this.records = []
              this.records = response.data.data.records
            })
            .catch(error=>{
              console.log(error)
            })
      }else if(time==='time4'){
        this.state ="4"
        instance.get('/baoyan/searchBaoyan/1/5',{
          headers:{
            token:localStorage.getItem('token')
          },
          params:{
            state:this.state,
            category:this.category
          }
        })
            .then(response=>{
              this.records = []
              this.records = response.data.data.records
            })
            .catch(error=>{
              console.log(error)
            })
      }else{
        this.state = "5"
        instance.get('/baoyan/searchBaoyan/1/5',{
          headers:{
            token:localStorage.getItem('token')
          },
          params:{
            state:"5",
            category:this.category
          }
        })
            .then(response=>{
              this.records = []
              this.records = response.data.data.records
            })
            .catch(error=>{
              console.log(error)
            })
      }
    }
  }
}
</script>

<style scoped>
.beingState{
  margin-left: 10px;
}
.type{
  margin-left: 10px;
}
.article-desc{
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
.day{
  font-size: 18px;
  color: rgb(68, 152, 255);
  text-align: center
}
.state{
  color: rgb(68,152,255);
  font-size: 10px;
  text-align: center
}
.active{
  background-color: #deedfc;
  color: #53a8ff;
}
.header_classify{
  width: 100%;
  height: 200px;
}
.article{
  width: 80%;
}
.article-title{
  font-size: 16px;
  font-weight: 700;
  color: #302f30;
}
.article-content{
  background: RGB(255,255,255);
}
.article-time{
  background: RGB(255,255,255);
}
.article-desc{
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}
.article-status{
  width: 76px;
  height: 60px;
  background: RGB(68,152,255);
  border-radius: 4px;
}
</style>
