<template>
  <el-form :model="user" status-icon :rules="rules"
           style="background: white"
           ref="user" label-width="120px">
    <el-form-item label="登录名称:"
                  style="padding-top: 10px"
                  prop="name">
      <el-input v-model="user.username"
                disabled
                style="width: 300px"/>
    </el-form-item>
    <el-form-item label="旧密码:" prop="oldPassword">
      <el-input type="password" v-model="user.oldPassword" style="width: 300px"/>
    </el-form-item>
    <el-form-item label="密码:" prop="newPassword">
      <el-input type="password" v-model="user.newPassword" autocomplete="off" style="width: 300px"></el-input>
    </el-form-item>
    <el-form-item label="确认密码:" prop="checkPassword">
      <el-input type="password" v-model="user.checkPassword" autocomplete="off" style="width: 300px"></el-input>
    </el-form-item>
    <el-form-item style="width: 400px">
      <el-button type="primary" @click="submitForm('user')" size="medium">保存</el-button>
      <el-button type="primary" @click="resetForm('user')" size="medium">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import instance from "@/axios";

export default {
  name: "accountSafe",
  data(){
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.user.checkPassword !== '') {
          this.$refs.user.validateField('checkPassword');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.user.newPassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      user:{
        name:'',
        oldPassword:'',
        newPassword:'',
        checkPassword:''
      },
      rules:{
        newPassword: [
          {validator:validatePass,trigger:'blur'}
        ],
        checkPassword: [
          {validator:validatePass2,trigger:'blur'}
        ]
      }
    }
  },
  created() {
    instance.post('/selectByUserName?username='+localStorage.getItem('user'),{
      username:localStorage.getItem('user'),
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //请求后台修改密码的接口
          instance.post('/updatePwd?username='+localStorage.getItem('user')+
              '&oldPassword='+this.user.oldPassword+'&newPassword='+this.user.newPassword,null,{
            token:localStorage.getItem('token')
          })
          .then(response=>{
            if(response.data.msg === 'OK'){
              this.message('密码修改成功','success')
              this.handleClose()
            }
            else{
              console.log('密码修改',response.data)
              this.message(response.data.data,'error')
            }
          })

        } else {
          this.message('密码修改失败','error')
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    message(message,type){
      this.$message({
        showClose: true,
        message: message,
        type: type,
      });
    },
    handleClose(){//清空上一次弹框中的数据记录
      for(let prop in this.user){
        if(this.user.hasOwnProperty(prop) && prop!=='username'){
          this.user[prop]=''
        }
      }
    },
  }
}
</script>

<style scoped>

</style>
