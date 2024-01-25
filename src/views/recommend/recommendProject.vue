<template>
  <div class="content">
    <div class="project_content" style="margin-left: 12%;border-radius: 16px">
      <div class="el_item" v-for="record in records" style="border-radius: 16px">
        <el-row :gutter="20" type="flex" justify="center">
          <el-col :span="16" style="background: white">
            <!--      这个里面介绍项目名 技术方向 技术点以及项目情况        -->
            <div class="project_info">
              <div class="project_name">
                    <span class="tech_direction">
                    <a target="_blank" @click="insertHistory(record.projectId)"
                       :href="record.projectLinking" style="color:rgb(161, 90, 196)">{{record.projectName}}</a>
                    {{'(Direction '+record.techDirection+')'}}
                  </span>
              </div>
              <div class="project_introduce">
                {{record.businessIntroduction}}
              </div>
              <div>
                <el-tag style="margin-left: 10px">{{record.techPoint}}</el-tag>
                <!--                    <el-tag style="margin-left: 10px">python</el-tag>-->
              </div>
            </div>
          </el-col>
          <el-col :span="8" style="background: white">
            <!--      这个地方展示项目图片        -->
            <div style="text-align: center">
              <img style="width:218px;height:146px" :src="record.pictureLinking">
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import instance from "@/axios";

export default {
  name: "recommendProject",
  data(){
    return{
      projectName:'',
      directionName:'',
      techPointName:'',
      rate_value:4,
      records:[]
    }
  },
  created() {
    this.loadData(1,5)
  },
  methods:{
    insertHistory(projectId){
      instance.post('/tech/projectHistoryInfo/insertProjectHistoryInfo',{
        userId:localStorage.getItem('userId'),
        projectId:projectId
      },{
        headers:{
          token:localStorage.getItem('token')
        }
      })
    },
    loadData(num,size){
      instance.get('/tech/projectExercise/searchProjectExercise/'+num+'/'+size,{
        headers:{
          token:localStorage.getItem("token")
        }
      })
          .then(response=>{
            console.log('接受到的数据为:',response.data)
            this.records = response.data.data.records
          })
          .catch(error=>{
            console.log(error)
          })
    },
    changeCurPage(page){
      this.loadData(page,5)
    },
    searchByJL(){
      instance.get('/tech/projectExercise/searchProjectExercise/1/12',{
        headers:{
          token:localStorage.getItem('token')
        },
        params:{
          projectName:this.projectName,
          directionName:this.directionName,
          techPointName:this.techPointName
        }
      })
          .then(response=>{
            this.records = [];
            this.records = response.data.data.records
            console.log('接受的数据为:',response.data)
          })
          .catch(error=>{
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;;
}
.project_content{
  margin-left: 14px;
  margin-top: -10px;
}
.project_info{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 146px;
}
.el_item{
  max-width: 900px;
  margin-bottom: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 16px!important;
  margin-right: 90px;
}
.el_item:hover{
  box-shadow: 5px 8px 5px 8px rgba(0,0,0,0.08);
  transition: .5s;
}
.project_name{
  font-size: 18px;
  font-weight: 500;
}
.project_name:hover{
  color: #00a6a7;
}
.project_introduce{
  font-size: 14px;
  color: RGB(102,102,102);
}
</style>
