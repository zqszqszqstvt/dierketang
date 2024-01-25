<template>
  <el-container>
    <el-header>
      <div>
<!--  这里做一个多条件查询      -->
        <el-row :gutter="10" type="flex" justify="center" style="margin-left:10%">
          <el-col :span="4">
            <el-input id="search"
                      placeholder="请输入公司名"
                      v-model="companyName"
                      @keydown.enter="searchByJL"
                      :suffix-icon="Search">
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-input id="search"
                      placeholder="请输入薪资"
                      v-model="pay"
                      @keydown.enter="searchByJL"
                      :suffix-icon="Search">
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-input id="search"
                      placeholder="请输入工作地点"
                      v-model="workPlace"
                      @keydown.enter="searchByJL"
                      :suffix-icon="Search">
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-input id="search"
                      placeholder="请输入岗位名"
                      v-model="job"
                      @keydown.enter="searchByJL"
                      :suffix-icon="Search">
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="searchByJL">搜索</el-button>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <el-main style="margin-top: -20px">
      <div class="recruit_content">
        <!-- 招聘信息item -->
        <div class="recruit_item" v-for="record in records" :key="record.recruitId">
          <!-- brief介绍-->
          <div class="recruit_top">
            <!--左边文字-->
            <div class="left_info">
              <div class="job_info">
                <span class="job_name">
                <a
                    :href="record.link"
                    @click="insertHistory(record.recruitId)"
                >{{record.jobName}}</a>
               </span>
                <span class="job_area">
                {{record.workPlace}}
              </span>
              </div>
              <!-- 薪资介绍-->
              <div class="salary_info">
                <div class="job_salary">{{record.pay+'K'}}</div>

                <div class="job_command">
                  <div class="command">{{record.recruitJd}}</div>
                </div>
              </div>
            </div>
            <!-- 右边图片等公司介绍-->
            <div class="right_info">
              <div class="left_img">
                <img src="https://img.bosszhipin.com/beijin/app/mobile/normal-0e3f1e4441a21d4874cece3a3d81f0fe.png" alt="">
              </div>

              <div class="right_detail">
                <div class="company_name">{{record.companyName}}</div>
                <div class="company_info">
                  <div class="item bubble">电子商务</div>
                  <div class="item bubble">D轮及以上</div>
                  <div class="item bubble">1000-9999人</div>
                </div>
              </div>
            </div>
          </div>
          <!-- treatment介绍-->
          <div class="recruit_bottom">
            <div class="left_intro">
              {{record.recruitFlow}}
            </div>
            <div class="right_treatment">
              {{record.treatment}}
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
  <page @avertCurPage="changeCurPage"/>
<!--  <Page :pageSize="pageSize" @avertCurPage="getPageNum"/>-->
</template>

<script>
import { Search } from '@element-plus/icons-vue';
import Page from "@/components/Page";
import instance from "@/axios";
export default {
  setup(){
    return{
      Search
    }
  },
  components:{
    Page
  },
  name: "RecruitInfo",
  data(){
    return {
      companyName:'',
      pay:'',
      workPlace:'',
      job:'',
      pageSize:20,
      pageNum:1,
      records:[]
    }
  },
  mounted() {
    this.loadData(1,5)
  },
  methods:{
    insertHistory(recruitId){
      instance.post('/job/recruitInfoHistoryInfo/insertRecruitInfoHistoryInfo',{
        userId:localStorage.getItem('userId'),
        recruitId:recruitId
      },{
        headers:{
          token:localStorage.getItem('token')
        }
      })
    },
    loadData(num,size){
      console.log(localStorage.getItem('token'))
      instance.get('/job/recruitInfo/searchRecruitInfo/'+num+'/'+size, {
        headers: {
          token:localStorage.getItem("token")
        }
      })
          .then(response => {
            console.log("接受的数据为",response.data);
            if(response.data.data!==null)
              this.records = response.data.data.records;
          })
          .catch(error => {
            console.log('错误',error);
          });
    },
    changeCurPage(page){
      this.loadData(page,5)
    },
    getPageNum(data){
      this.pageNum = data
    },
    searchByJL(){
      instance.get('/job/recruitInfo/searchRecruitInfo/'+this.pageNum+'/'+this.pageSize,{
        params:{
          companyName:this.companyName,
          pay:this.pay,
          workPlace:this.workPlace,
          job:this.job
        },
        headers:{
          token:localStorage.getItem("token")
        }
         })
          .then(response => {
            console.log("接受的数据为",response.data);
            if(response.data.data!=null){
              this.records = []
              this.records = response.data.data.records;
            }
          })
          .catch(error => {
            console.log('错误',error);
          });
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: black;
}
.bubble{
  background: #f8f8f8;
  color: #666;
  border-radius: 4px;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  text-align: center;
  width: 90px;
  height: 18px;
  padding: 2px;
  margin-left: 8px;
}
.command{
  background: #f8f8f8;
  color: #666;
  border-radius: 4px;
  font-size: 13px;
  margin-left: 10px;
}
.recruit_content{
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}

.recruit_item:hover{
  box-shadow: 5px 8px 5px 8px rgba(0,0,0,0.08);
  transition: .5s;
}

.recruit_top{
  display: flex;
  justify-content: space-between;
}
.company_name:hover{
  color: #00a6a7!important;
}
.recruit_top .left_img{
  height: 56px;
  width: 56px;
  border-radius: 8px;
  overflow: hidden;
}

.recruit_top .left_img img{
  height: 100%;
  width: 100%;
}

.recruit_item{
  width: 80%;
  background: #fff;
  margin-bottom: 25px;
  padding: 24px;
  border-radius: 12px;
}

.recruit_top .left_info{
  width: 40%;
}

.recruit_top .left_info .salary_info{
  display: flex;
  flex-display: row;
}

.recruit_top .left_info .job_info{
  margin-bottom: 10px;
}

.recruit_top .left_info .job_command{
  display: flex;
}

.recruit_top .right_info{
  width: 40%;
  display: flex;
  margin-left: 18px;
}

.right_info  .right_detail .company_name{
  width: 80px;
  margin-left: 8px;
  margin-bottom: 8px;
}

.recruit_top .right_detail .company_info{
  display: flex;
  flex-direction: row;
}

.recruit_bottom{
  padding: 15px 24px;
  background: linear-gradient(90deg,#f5fcfc,#fcfbfa);
  border-radius: 0 0 12px 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 400;
  color: #666;
  line-height: 18px;
  height: 18px;
  white-space: nowrap;
  margin: 12px -24px -24px -24px;
}

.recruit_bottom .left_intro{
  width: 390px;
  overflow: hidden;
  margin-right: 84px;
  margin-left: -8px;
  height: 18px;
}

.recruit_bottom .right_treatment{
  margin-right: 7%;
}


.active{
  color:#00a6a7
}
.job_info:hover{
  color:#00a6a7
}
.job_salary{
  color: #fe574a;
}

.recruit_address .address{
  margin-right: 20px;
  font-size: 20px;
}
.job_area:before{
  content: '[';
}
.job_area:after{
  content: ']';
}
.job_command{
  margin-left: 10px
}
.job_command span{
  background: #f8f8f8;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 400;
  color: #666;
}
.company_info{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.company_info span{
  font-size: 13px;
  font-weight: 400;
  color: #666;
  background: #f8f8f8;
  margin-left: 10px;
}
.company_info .company_name:hover{
  color:#00a6a7;
}
.job_name a:hover{
  color:#00a6a7;
}
</style>
