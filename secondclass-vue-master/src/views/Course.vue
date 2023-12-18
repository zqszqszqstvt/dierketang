<template>
  <div class="content" style="display: flex;flex-direction:column;justify-content: center;align-items: center;">
    <el-container>
      <el-header>
<!--        <div class="content-title"><span style="color: #1E9FFF;font-size: 22px">Go语言基础</span></div>-->
<!--        多条件级联搜索-->
        <el-row :gutter="20" type="flex" justify="center" style="margin-left: 10%">
          <el-col :span="5">
            <el-input id="search"
                      placeholder="请输入课程名"
                      v-model="courseName"
                      :suffix-icon="Search"
                      @keydown.enter="searchByJL"
                      clearable
            >
            </el-input>
          </el-col>
          <el-col :span="5">
            <el-input id="search"
                      placeholder="请输入技术点"
                      v-model="techPoint"
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
      <el-main>
        <div class="content-course" style="margin-top:-30px;width: 1200px;display: flex;justify-content:center;align-items: center;">
          <el-row  :gutter="20" style="width: 1100px">
            <el-col v-for="record in records" :key="record.curriculumId"
                    :span="5.5" style="height: 245px;background: #fff;margin-top: 20px;margin-right: 10px">
              <a><img src="../assets/go.jpg" style="height: 140px;margin-left: -2px;border-radius: 10px"></a>
              <div class="course-content">
                <h3 class="curriculumName" style="font-size: 16px;font-weight: 600">
                  <a target="_blank"  @click="insertHistory(record.curriculumId)"
                     :href="record.curriculumLinking">{{record.curriculumName}}</a>
                  </h3>
<!--                <p style="font-size: 13px;color: #999">Go语言历史、开发环境搭建</p>-->
                <div style="text-align: center;margin-top: -10px">
                  <el-tag style="margin-right: 10px;display: inline-block;">{{record.techPoint}}</el-tag>
<!--                  <el-tag style="margin-right: 10px;display: inline-block">C++</el-tag>-->
                </div>
                <div style="display: flex;justify-content: space-between;">
                  <span style="font-size: 13px;color: #999">{{record.duration+'分钟'}}</span>
                  <el-button type="primary" size="small" style="margin-top: -5px">
                    <a :href="record.curriculumLinking"
                       @click="insertHistory(record.curriculumId)"
                       target="_blank">进入学习</a>
                  </el-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <el-footer>
        <Page @avertCurPage="changeCurPage"/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { Search } from '@element-plus/icons-vue'
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
  created() {
    this.loadData(1,8)
  },
  name: "Course",
  data(){
    return {
      courseName:'',
      techPoint:'',
      records:[]
    }
  },
  methods:{
    insertHistory(curriculumId){
      instance.post('/tech/curriculumHistoryInfo/insertCurriculumHistoryInfo',{
        curriculumId:curriculumId,
        userId:localStorage.getItem('userId')
      },{
        headers:{
          token:localStorage.getItem('token')
        }
      })
    },
    loadData(num,size){
      instance.get('/tech/curriculum/searchCurriculum/'+num+'/'+size,{
        headers:{
          token:localStorage.getItem('token')
        }
      })
          .then(response=>{
            console.log('接受的数据',response.data)
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
      instance.get('/tech/curriculum/searchCurriculum/1/12',{
        headers:{
          token:localStorage.getItem('token')
        },
        params:{
          curriculumName:this.courseName,
          techPointName:this.techPoint
        }
      })
      .then(response=>{
        console.log('接受到的数据为:',response.data)
        this.records = response.data.data.records
      })
      .catch(error=>{
        console.log('错误是',error)
      })
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.curriculumName:hover{
  color: #00a6a7;
}
</style>
