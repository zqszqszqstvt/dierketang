<template>
    <div class="card">
      <h2>上传学科成绩</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="gradeLevel">学期选择</label>
          <select id="gradeLevel" v-model="gradeLevel">
            <!-- 这里添加你的选项 -->
            <option value="1">大一年级</option>
            <option value="2">大二年级</option>
            <option value="3">大三年级</option>
            <option value="4">大四年级</option>
          </select>
        </div>
        <div class="form-group">
          <label for="subjectName">学科名称</label>
          <input id="subjectName" v-model="subjectName" type="text">
        </div>
        <div class="form-group">
          <label for="Score">学科分数</label>
          <input id="Score" v-model="Score" type="text">
        </div>
        <div class="form-group">
          <label for="file">上传附件</label>
          <input id="file" type="file" @change="handleFileUpload">
        </div>

        <div class="button-group">
          <button type="submit">增加</button>
          <button type="button" @click="resetForm">重置</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyCompetitionCommit',
    data() {
      return {
        gradeLevel: '1',
        subjectName: '',
        Score: '',
        file: null
      };
    },
    methods: {
      submitForm() {
        // 在这里处理表单提交
        if((!(this.subjectName && this.Score) && !this.file) || ((this.subjectName || this.Score) && this.file)) {
            alert('请选择单科上传或者文件上传！');
            return;
        }
        if(this.subjectName && this.Score) {
            const formData = {
                gradeLevel: this.gradeLevel,
                subjectName: this.subjectName,
                Score: this.Score
            };
            console.log(formData);
            // 在这里可以发送formData到服务器
        }
        if(this.file) {
            //处理文件上传
            console.log('文件上传方式!')
        }
      
      },

      resetForm() {
        this.gradeLevel='1';
        this.subjectName='';
        this.Score='';
        this.file = null;
      },
      handleFileUpload(event) {
        this.file = event.target.files[0];
        // 在这里处理文件
      }
    }
  };
  </script>
  
  <style lang="less" scoped>
  .card {
    width: 1000px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin-top: 6px;
  }
  
  h2 {
    text-align: left;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .form-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .form-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .form-group label {
    margin-bottom: 5px;
    margin-right: 3px;
  }
  
  .form-group input,
  .form-group select {
    width: 150px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  .button-group {
    flex: 1 0 100%;
    text-align: right;
    margin-top: 10px;
  }
  
  .button-group button {
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: transparent; /* 设置默认背景颜色为透明 */
    color: black; /* 设置文字颜色为黑色 */
    border: 2px solid #DDDDDD; /* 设置边框 */
    transition: background-color 0.3s ease; /* 添加过渡效果 */
  }

  .button-group button:first-child:hover {
    background-color: #007BFF; /* 当鼠标移动到第一个按钮上时，改变背景颜色 */
    color: white; /* 当鼠标移动到第一个按钮上时，改变文字颜色 */
    border: none;
  }

  .button-group button:last-child:hover {
    background-color: #DC3545; 
    color: white; 
    border: none;
  }
  select {
    background-color: #FFFFFF;
  }
  </style>