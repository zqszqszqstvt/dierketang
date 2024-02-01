<template>
    <el-form :model="user" label-width="120px">
      <el-form-item label="用户名:">
        <el-input v-model="user.username" style="width: 350px"/>
      </el-form-item>
      <el-form-item label="姓名:">
        <el-input v-model="user.name" style="width: 350px"/>
      </el-form-item>
      <el-form-item label="班级:">
        <el-input v-model="user.studentClass" style="width: 350px"/>
      </el-form-item>
      <el-form-item label="工作单位:">
        <el-input v-model="user.companyJobName" type="textarea" style="width: 350px;" placeholder="设置你的签名"/>
      </el-form-item>
<!--      <el-form-item label="性别">-->
<!--        <el-radio-group v-model="form.sex">-->
<!--          <el-radio label="男"></el-radio>-->
<!--          <el-radio label="女"></el-radio>-->
<!--        </el-radio-group>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="出生日期">-->
<!--        <el-time-picker placeholder="选择时间" v-model="form.date" style="width: 40%;"></el-time-picker>-->
<!--      </el-form-item>-->
<!--      <el-form-item style="width: 400px">-->
<!--        <el-button type="primary" @click="onSubmit" size="medium">保存</el-button>-->
<!--      </el-form-item>-->
    </el-form>
</template>

<script>
import instance from "@/axios";
export default {
  name: "myInfo",
  data(){
    return {
      title:'我的信息',
      user:{
        username:'',
        name:'',
        studentClass:'',
        companyJobName:''
      }
    }
  },
  created() {
    instance.post('http://localhost:9999/selectByUserName?username='+localStorage.getItem('user'),{
      username:localStorage.getItem('user')
    },{
      headers:{
        token:localStorage.getItem('token')
      }
    })
    .then(response=>{
      this.user = response.data.data
    })
    .catch(error=>{
      console.log('错误为',error)
    })
  },
  methods:{
    handleSelect(data){
      var titles=["我的信息","我的竞赛","我的就业","我的技术点","我的考研/保研","账号安全"];
      this.title=titles[data];
      console.log(data);
    }
  }
}
</script>

<style scoped>

</style>
