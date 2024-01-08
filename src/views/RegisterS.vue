<template style="">
    <div class="container" style="width: 100%;">
        <div style="width: 780px;height: 285px">
            <el-row>
                <el-col :span="12"></el-col>
                <el-col :span="12">
                    <div style="height:400px;display: flex;align-items: center;justify-content: center;flex-direction: column;background: rgba(255,255,255,.2)">
                        <span style="margin-bottom:30px;color: white;font-size: 25px;">注册</span>
                        <div class="adminInfo" style="display: flex;flex-direction:column;justify-content: center;line-height: 314px">
                            <el-form :rules="rules"
                                     ref="user" :model="user" label-width="80px">
                                <el-form-item label="用户名:" style="" prop="username">
                                    <el-input v-model="user.username" style="width:250px;" clearable></el-input>
                                </el-form-item>
                                <el-form-item label="姓名:" style="color:white !important;" prop="name">
                                    <el-input v-model="user.name" clearable></el-input>
                                </el-form-item>
                                <el-form-item label="密码:" style="color:white !important;" prop="password">
                                    <el-input v-model="user.password" type="password" clearable></el-input>
                                                    </el-form-item>
                                                    <el-form-item label="年级班级:" style="color:white !important;">
                                                      <el-input v-model="user.student_class" clearable></el-input>
                                                    </el-form-item>
<!--                                    <el-form-item label="工作岗位:" style="color:white !important;">-->
<!--                                        <el-input v-model="user.company_job_name" clearable-->
<!--                                                  placeholder="没有可以不填"></el-input>-->
<!--                                    </el-form-item>-->
                                    <el-form-item>
                                        <el-button type="primary" @click="onSubmit('user')" style="width:120px">注册</el-button>
                                        <el-button type="primary" @click="onCancel" style="width:120px">取消</el-button>
                                    </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import {Search} from '@element-plus/icons-vue'
import {User} from '@element-plus/icons-vue'
import {Lock} from '@element-plus/icons-vue'
import instance from "@/axios";
export default {
    setup(){
        return{
            User,Lock
        }
    },
    name: "RegisterS",
    data(){
        return{
            rules: {
                name: [
                    {required: true, message: '用户姓名不能为空', trigger: 'blur'},
                ],
                username:[
                    {required:true,message:'用户名不能为空',trigger:'blur'}
                ],
                password:[
                    {required:true,message:'密码不能为空',trigger:'blur'}
                ]
            },
            user:{
                username:'',
                password:'',
                name:'',
                student_class:'',
                company_job_name:''
            }
        }
    },
    methods:{
        onSubmit(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //校验通过则向后台发送注册请求
                    instance.post('/registerS',{
                        username:this.user.username,
                        name:this.user.name,
                        password:this.user.password,
                        student_class:this.user.student_class,
                        company_job_name:this.user.company_job_name
                    },{
                        headers:{
                            token:localStorage.getItem('token')
                        }
                    })
                        .then(response=>{
                            this.$message({
                                message: '注册成功',
                                type: 'success'
                            });
                            setTimeout(() => {
                                // 这里写需要延时执行的代码
                                this.$router.push('/enterLoginS')
                            }, 1000) // 1000 表示延时的时间，单位是毫秒，即 1 秒
                            //注册成功后进入登录界面
                        })
                        .catch(error=>{
                            console.log(error)
                        })
                } else {
                    return false;
                }
            });
        },
        onCancel(){
            this.$router.push('/enterLoginS')
        }
    },
}
</script>

<style>
.el-form-item__label{
    color: white !important;
}
.container{
    background: url("../assets/login-background.jpg") no-repeat  fixed;
    background-size:100% 100%;
    display: flex;
    justify-content: center;/*主轴的对齐方式*/
    align-items: center;/*交叉的对齐方式*/
    height: 100vh;
    margin: auto;
    padding: 0;
    max-width:10000px;
}
</style>
