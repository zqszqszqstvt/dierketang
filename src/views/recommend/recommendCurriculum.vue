<template>
  <div>
    <el-row  :gutter="20" style="width: 1100px">
      <el-col v-for="record in records" :key="record.curriculumId"
              :span="5.5"
              style="height: 245px;background: #fff;margin-left: 20px;
              margin-top: 20px;margin-right: 10px">
        <a><img src="../../assets/go.jpg" style="height: 140px;margin-left: -2px;border-radius: 10px"></a>
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
</template>

<script>
import instance from "@/axios";

export default {
  name: "recommendCurriculum",
  created() {
    this.loadData()
  },
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
    loadData(){
      instance.post('/tech/curriculumHistoryInfo/recommandCurriculum?username='+localStorage.getItem('user'),null,{
        headers:{
          token:localStorage.getItem('token')
        }
      })
          .then(response=>{
            this.records = response.data.data;
          })
          .catch(error=>{
            console.log('错误',error)
          })
    },
    changeCurPage(page){
      this.loadData()
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
a{
  text-decoration: none;
}
</style>
