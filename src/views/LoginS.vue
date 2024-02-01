<template style="">
    <div class="container" style="width:100%;">

        <div style="width: 780px;height: 285px">
            <el-row>
                <el-col :span="12"></el-col>
                <el-col :span="12">
                    <div style="height:300px;display: flex;align-items: center;justify-content: center;flex-direction: column;background: rgba(255,255,255,.2)">
                        <span style="margin-bottom:30px;color: white;font-size: 25px;">登录</span>
                        <div class="adminInfo" style="display: flex;flex-direction:column;justify-content: center;line-height: 314px">
                            <el-row style="margin-bottom: 30px">
                                <el-input
                                        style="width: 300px"
                                        v-model="username"
                                        placeholder="用户名"
                                        :suffix-icon="User"
                                        clearable
                                />
                            </el-row>
                            <el-row>
                                <el-input
                                        style="width: 300px"
                                        v-model="password"
                                        type="password"
                                        placeholder="密码"
                                        :suffix-icon="Lock"
                                        @keydown.enter="handleSubmit"
                                        clearable
                                />
                            </el-row>
                            <el-row>
                                <!--                <el-checkbox v-model="rememberMe" label="记住我" size="large" />-->
                                <div style=";width:300px;height: 30px;line-height: 30px;color: red;text-align: center">
                                    <span>{{message}}</span>
                                </div>
                            </el-row>
                            <el-row>
                                <el-button type="primary" style="width: 300px" @click="handleSubmit">登录</el-button>
                            </el-row>
                            <el-row>
                                <el-button type="warning" style="width: 300px;margin-top: 10px"
                                           @click="register">注册</el-button>
                            </el-row>
                        </div>
                    </div>
                </el-col>
            </el-row>

        </div>
    </div>
</template>

<script>
//*import {Search} from '@element-plus/icons-vue'
import {User} from '@element-plus/icons-vue'
import {Lock} from '@element-plus/icons-vue'
import instance from "@/axios";
export default {
    setup(){
        return{
            User,Lock
        }
    },
    //*   // eslint-disable-next-line vue/multi-word-component-names
    name: "LoginS",
    data(){
        return{
            username:'',
            password:'',
            rememberMe:'',
            message:'' ,
            identity: '', // 存储用户选择的身份
            showTeacherForm: false, // 是否显示老师表单
            showStudentForm: false // 是否显示学生表单
        }
    },
    methods:{


        register(){
            //进入注册界面
            this.$router.push({path:'/registerS'})
            //this.$router.push({ path: '/postRecom'});
        },
        async handleSubmit() {
            try {
                const response = await instance.post('/login', {
                    username: this.username,
                    password: this.password
                });
                console.log('响应的数据为:'+response)
                if (response.data.data.msg === 'OK') {
                    // 登录成功，跳转到首页或其他页面
                    localStorage.setItem("user", response.data.data.data.username)
                    localStorage.setItem("userId", response.data.data.data.userId)
                    localStorage.setItem("token",response.data.data.data.token)
                    this.$router.push({ path: '/postRecom'});
                }else {
                    // 登录失败，提示错误信息
                    this.message = '用户名或者密码错误'
                }
            } catch (error) {
                // 处理请求异常
                console.error(error);
                this.message = '登录失败，请稍后重试'
            }
        }
    },
}
</script>

<style scoped>
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
