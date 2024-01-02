<script>
import axios from "axios";

export default {
  data(){
    return{
      zy:[],
      name:this.$route.params.courseName,
      id:this.$route.params.courseId,
      startTime:0
    }
  },
  mounted() {
    axios.get("http://localhost:9102/selectByCourse?courseId="+this.id).then(res=>{
      for(var i=0;i<res.data.data.length;i++){
        this.zy.push({rName:res.data.data[i].resourcesName,rID:res.data.data[i].resourcesId});
      }
    }).catch(error=>{
      console.log(error.response)
    })
  },
  created() {
    this.startTime=Date.now();
    console.log("233333");
  },
  beforeUnmount() {
    let stayTime = Date.now() - this.startTime;
    stayTime/=1000;
    let s=stayTime%60;
    stayTime/=60;
    let m=stayTime%60;
    stayTime/=60;
    let h=stayTime%60;
    let formattedTime = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    // 构建请求URL
    let url = `http://localhost:9102/addStudyTime?sId=3&cId=${this.id}&time=${formattedTime}`;

    // 在页面关闭前发送请求
    window.onbeforeunload = () => {
      console.log(url);
      axios.get(url);
    };
  }
}
</script>
<template>
  <el-row justify="center">
    <el-col :span="6">{{startTime}}</el-col>
    <el-col :span="12">
      <h1  style="text-align: center;">{{name}}</h1>
      {{zy}}
      <li v-for="(value,key) in zy" :key="key">
        <a :href="'http://localhost:9102/download?id='+value.rID">
          {{value.rName}}
        </a>
      </li>
    </el-col>
    <el-col :span="6"></el-col>
  </el-row>
</template>

<style scoped>

</style>