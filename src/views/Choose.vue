
<template>
    <div class="container" style="width:100%;">
    <div style="height:300px;display: flex;align-items: center;justify-content: center;flex-direction: column;background: rgba(255,255,255,.2)">
        <h1 style="margin-bottom:30px;color: white;font-size: 25px;width:360px;text-align: center">请选择您的身份</h1>
        <div style="height: 50px">
            <input type="radio" id="teacher" value="teacher" v-model="identity"  >
            <label for="teacher"  style="width: 100px;color: white;font-size: 20px" >老师</label>

        </div>
        <div style="height: 50px">
            <input type="radio" id="student" value="student" v-model="identity" >
            <label for="student"  style="width: 100px;color: white;font-size: 20px">学生</label>

        </div>
        <button @click="confirmIdentity" style="width: 160px;height:40px ;background-color: transparent;border-color: gray;border-radius: 10px" >确定</button>

        <div v-if="showTeacherForm">
            <h2>老师登录和注册界面</h2>
            <!-- 这里放置老师的登录和注册表单 -->
        </div>

        <div v-if="showStudentForm">
            <h2>学生登录和注册界面</h2>
            <!-- 这里放置学生的登录和注册表单 -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Choose",
    data() {
        return {
            identity: '', // 存储用户选择的身份
        };
    },
    methods: {
        confirmIdentity() {
            if (this.identity === 'teacher') {
                this.$router.push({path:'/enterLogin'})
            } else if (this.identity === 'student') {
                this.$router.push({path:'/enterLoginS'})
            } else {
                console.log('请先选择您的身份');
            }
        }
    }
};
</script>

<style scoped>
.container{
    background: url("../assets/choose.jpg") no-repeat  fixed;
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