<template>
  <el-container>
    <el-header>
      <div style="margin-left: 15%">
        <el-row type="flex" justify="center" :gutter="10">
          <el-col :span="8">
            <el-input id="search"
                      placeholder="请输入面经名称"
                      v-model="skillName"
                      :suffix-icon="Search"
                      @keydown.enter="searchByName"
                      clearable
            >
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" @click="searchByName">搜索</el-button>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <el-main style="margin-top: -25px">
      <div class="All-Content" style="display: flex;justify-content: center;">
        <div class="content" style="">
          <div class="el_item" v-for="record in records" :key="record.skillId"
               style="background:#fff; border-radius: 8px; margin: 18px 0;">
            <el-row type="flex" justify="center">
              <el-col :span="8" style="display: flex;justify-content: center;align-items: center">
                <img src="../assets/jobIntroduce.png" style="width: 25vw;height: 145px">
              </el-col>
              <el-col :span="16">
                <p style="font-size: 18px;font-weight: 500;"><a class="text-title">{{record.skillName}}</a></p>
                <p class="introduce" style="font-size: 14px;color: #666">
                  {{record.skillContent}}
                </p>
                <div style="display: flex;justify-content: space-between">
                  <p style="text-align: center;font-size: 14px;color: #999">求职必读</p>
                  <p style="text-align: center;font-size: 14px;color: #999">
                    直直小助手
                    <span class="job-time" style="margin-right: 10px">2023-03-02</span>
                  </p>
                </div>
              </el-col>
            </el-row>
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
import Navigate from "@/components/Navigate";
import Page from "@/components/Page";
import instance from "@/axios";
export default {
  name: "JobRead",
  components:{
    Navigate,Page
  },
  data(){
    return{
      skillName:'',
      records:[]//记录后台传递的数组数据
    }
  },
  created() {
    this.loadData(1,5)
  },
  methods:{
    changeCurPage(page){
      this.loadData(page,5)
    },
    loadData(num,size){
      instance.get('/job/skills/searchSkills/'+num+'/'+size,{
        headers:{
          token:localStorage.getItem("token")
        }
      })
          .then(response=>{
            console.log('接受到数据为:',response.data)
            if(response.data.data!==null)
              this.records = response.data.data.records;
          })
          .catch(error=>{
            console.log('错误数据为',error)
          })
    },
    searchByName(){
      //发送网络请求更新数据
      instance.get('/job/skills/searchSkills/1/12',{
        params:{
          skillName:this.skillName
        },
        headers:{
          token:localStorage.getItem("token")
        }
      })
      .then(response=>{
        if(response.data.data!==null)
          this.records = [];//清空原数组
          this.records = response.data.data.records;
      })
      .catch(error=>{
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>
.el_item:hover{
  box-shadow: 5px 8px 5px 8px rgba(0,0,0,0.08);
  transition: .5s;
}
.introduce{
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.content{
  border-radius: 12px;
  width: 1000px;
}
.text-title:hover{
  color: #00a6a7;
}
</style>
