<script>
import picture from "@element-plus/icons/lib/Picture.js";
import axios from "axios";
import {ref} from "vue";
//const myComment=ref('');
export default {
  data(){
    return{
      picture:"http://localhost:8080/img/go.438d88be.jpg",
      text:"",
      name:this.$route.params.courseName,
      id:this.$route.params.courseId,
      myComment:'',
      comments:[],
      data:1,
      username:'用户名',
    }
  },
  methods:{
    cy(){
      this.$router.push('/CoursePage/' +this.id+'/'+this.name);
      axios.get("http://localhost:9102/addSC?sId=3&cId=+"+this.id);
    },
    tj(){
      axios({
        method: 'post',
        url: 'http://localhost:9102/addComment',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: {
          courseId:this.id,
          text:this.myComment,
          userName:this.username
        }
      }).then(ref=>{
        axios.get("http://localhost:9102/getComment?id="+this.id).then(res=>{
          this.data=res.data.data;
          while(this.comments.length>0) this.comments.pop();
          for(var i=res.data.data.length-1;i>=0;i--){
            this.comments.push({text:res.data.data[i].text,name:res.data.data[i].userName});
          }
        });
      })
    }
  },
  created() {
    axios.get("http://localhost:9102/getDetails?id="+this.id).then(res=>{
      this.text=res.data.data;
    });
    axios.get("http://localhost:9102/getComment?id="+this.id).then(res=>{
      this.data=res.data.data;
      while(this.comments.length>0) this.comments.pop();
      for(var i=res.data.data.length-1;i>=0;i--){
        this.comments.push({text:res.data.data[i].text,name:res.data.data[i].userName});
      }
    });
  },
}
</script>
<template slot-scope="scope">
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

  <el-row style="margin-top: 30px">
    <el-col :span="1"></el-col>
    <el-col :span="22">
      <div class="div1" style="background-color: white">
        <h1>评论</h1>
          <p class="p1" v-for="(value,key) in comments">{{value.name}}:{{value.text}}</p>
        <el-input v-model="myComment" maxlength="100" :size="'large'" style="width: 60%;"></el-input>
        <el-button style="margin-top: 10px" @click="tj">提交评论</el-button>
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
  background-color: #808080;
  border-radius: 20px;
  width: 100%;
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
.p1{
  border: 2px;
  width: 70%;
  background-color: #808080;
  margin: 5px;
  min-height: 30px;
  border-radius: 3px;
  font-size: 20px;
}
</style>