<template>
  <el-container>
    <el-header>
<!-- 通过技术方向和岗位名实现联调查询     -->
      <el-row :gutter="20" type="flex" justify="center" style="margin-left: 10%">
        <el-col :span="8">
          <el-input id="search"
                    placeholder="请输入技术方向"
                    v-model="techDirection"
                    :suffix-icon="Search"
                    @keydown.enter="searchByJL"
                    clearable
          >
          </el-input>
        </el-col>
        <el-col :span="8">
          <el-input id="search"
                    placeholder="请输入岗位名"
                    v-model="jobName"
                    :suffix-icon="Search"
                    @keydown.enter="searchByJL"
                    clearable
          >
          </el-input>
        </el-col>
        <el-col :span="5">
          <el-button type="primary" @click="searchByJL">搜索</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main style="margin-top: -40px;">
<!--      具体技术展示-->
      <div class="tech_content">
        <div class="content" v-for="record in records">
          <div class="tech_main">
            <div class="tech_direction">
              <span style="color: rgb(161,90,196)">{{record.directionName}} </span>Direction</div>
            <div class="tech_introduce">{{record.introduce}}</div>
            <div class="tech_job">
              <div class="job_item" v-for="n in 3">{{record.job}}</div>
            </div>
            <div class="tech_route">
              <div class="button" @click="open(record.route)">学习路线</div>
            </div>
          </div>
          <div class="tech_pic" style="text-align: center">
            <img src="../assets/Java.png" style="width: 70px;height: 70px;display: inline-block;">
          </div>
        </div>
      </div>
    </el-main>
    <el-footer>
      <Page @avertCurPage="changeCurPage"/>
    </el-footer>
  </el-container>
</template>

<script>
import ContestDetail from "@/components/ContestDetail";
import { Search } from '@element-plus/icons-vue'
import Page from "@/components/Page";
import instance from "@/axios";
export default {
  setup(){
    return{
      Search
    }
  },
  name: "Direction",
  components: {
    ContestDetail,Page
  },
  created() {
    this.loadData(1,5)
  },
  data(){
    return{
      activeTag:'tag1',
      techDirection:'',
      jobName:'',
      records:[],
      route:''
    }
  },
  methods:{
    loadData(num,size){
      instance.get('/tech/techDirection/searchTechDirection/'+num+'/'+size,{
        headers:{
          token:localStorage.getItem("token")
        }
      })
          .then(response=>{
            console.log('接受到的数据为',response.data)
            this.records = response.data.data.records;
          })
          .catch(error=>{
            console.log('错误',error)
          })
    },
    changeCurPage(page){
      this.loadData(page,5)
    },
    searchByJL(){
      instance.get('/tech/techDirection/searchTechDirection/1/12',{
        headers:{
          token:localStorage.getItem('token')
        },
        params:{
          directionName:this.techDirection,
          job:this.jobName
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
    },
    open(route) {
      // 学习路线的详情介绍
      this.route = route

      this.$alert(route, 'Java方向学习路线', {
        confirmButtonText: '了解',
        customClass: 'routeInfo'
      });
    }
  }
}
</script>

<style>
.routeInfo{
  min-width: 960px !important;
  padding: 26px;
  border-radius: 15px !important;
}

.routeInfo p{
  font-size: 16px;
}

.routeInfo .el-message-box__title{
  font-size: 26px;
}

.routeInfo .el-message-box__header{
  margin-top: -22px;
}

.routeInfo .el-message-box__btns{
  margin: 20px 0;
  display: flex;
  justify-content: center;
}

.routeInfo .el-button{
  width: 64px !important;
  height: 40px !important;
}
</style>

<style scoped>
.active{
  color: #00a6a7;
}
.classify .tech:hover{
  color: #00a6a7;
}
.tech_content{
  display: flex;
  justify-content:flex-start;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}
.tech_content .content{
  border:1px solid #e1e1e1;
  width:80%;
  background-color: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0;
  margin: 10px;
}

.content .tech_main{
  width: 65%;
  display: flex;
  flex-direction: column;
}

.content .tech_main .tech_direction{
  font-size: 37px;
  font-weight: 400;
  letter-spacing: 3px;
}

.content .tech_main .tech_introduce{
  width: 80%;
  margin-bottom: 20px;
}

.content .tech_main .tech_job{
  color: #666;
  font-size: 14px;
  display: flex;
}

.content .tech_main .tech_job .job_item{
  margin-right: 12px;
}
.tech_main .tech_route{
  margin-top: 40px;
}

.tech_main .tech_route .button{
  width: 80px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background: rgb(91,159,232);
  padding: 12px;
  border-radius: 24px;
  color: #fff;
  cursor: pointer;
}

.tech_main .tech_route .button:hover{
  transform: scale(1.1);
  transition: .5s;
}

.content .tech_main{
  margin: 10px 0;
}
.content .tech_classify{
  margin-bottom: 10px;
}
.tech_name{
  text-align: center;
}
.tech_classify{
  display: flex;
  justify-content: center;
}
</style>
