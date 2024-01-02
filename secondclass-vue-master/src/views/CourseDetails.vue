<script>
import picture from "@element-plus/icons/lib/Picture.js";
import axios from "axios";
export default {
  data(){
    return{
      picture:"http://localhost:8080/img/go.438d88be.jpg",
      text:"",
      name:this.$route.params.courseName,
      id:this.$route.params.courseId,
    }
  },
  methods:{
    cy(){
      this.$router.push('/CoursePage/' +this.id+'/'+this.name);
      axios.get("http://localhost:9102/addSC?sId=3&cId=+"+this.id);
    }
  },
  created() {
    axios.get("http://localhost:9102/getDetails?id="+this.id).then(res=>{
      this.text=res.data.data;
    })
  },
}
</script>
<template>
  <el-row>
    <el-col :span="1"></el-col>
    <el-col :span="22" style="margin-top: 10px;background-color: #999999;border-radius: 20px">
      <el-row>
        <el-col :span="10"><img :src=picture style="margin: 10px;min-width: 400px;min-height: 300px"></el-col>
        <el-col :span="14">
          <button @click="cy" class="button1">立即参与</button>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="1"></el-col>
  </el-row>
  <el-row style="margin-top: 30px">
    <el-col :span="1"></el-col>
    <el-col :span="22">
      <div class="div1">
        <h1>课程概要</h1>
        <p>{{text}}</p>
      </div>
    </el-col>
    <el-col :span="1"></el-col>
  </el-row>
</template>

<style scoped>
.div1{
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #999999;
  border-radius: 20px;
}
.button1{
  border-radius: 2px;
  border: 0px;
  width: 150px;
  height: 40px;
  margin-top: 35%;
  background-color: #581BB7;
  color: white;
  font-weight: bold;
  font-size: 20px;
}
</style>