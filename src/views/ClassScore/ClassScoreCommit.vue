<template>
    <div class="card">
      <h2>上传学科成绩</h2>
      <form @submit.prevent="submitForm"> 
         <div class="form-group">
          <label for="subjectName" >课程名称</label>
          <input id="subjectName" v-model="subjectName" type="text" placeholder="请输入课程名称">
        </div> 
        <div class="form-group">
          <label for="Score" >学科分数</label>
          <input id="Score" v-model="Score" type="text" placeholder="请输入">
        </div>
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
          <label for="file">选择文件</label>
          <button type="button" class="custom-file-button" @click="ClipboardItem" ><span class="enorme-plus">+</span >选择文件</button>
          <input id="file" type="file" @change="handleFileUpload">
          <span  v-if="!file" id="noFileLabel" >未选择任何文件</span>
        </div>

        <div class="button-group">
          <button  type="submit">增加</button>
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
      },
      ClipboardItem(event){
        document.querySelector('input[id="file"]').click();  
      }
      

    }
  };
  </script>
  
  <style lang="less" scoped>
  .card {
    box-sizing: border-box;
  width: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    margin-top: 6px; 
    flex-wrap: wrap;  
    justify-content: space-between;  
  }
  .enorme-plus {  
  font-size: 20px;  /* 设置字体大小 */  
  color: #800080;  /* 设置字体颜色 */  
}
  .form-group1{
    width: 100%;
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
    width: 50%;
    display: flex;  
  justify-content: flex-start;  
  }
  
  .form-group label {
    margin-bottom: 5px;
    margin-right: 3px;
    width: 15%;
    
  }
  
  .form-group select {
  width: 62%;
  height: 50px;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-right: 22%;
}
.form-group input {
  width: 60%;
  height: 35px;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-right: 22%;
}
  

 
  #file{
    display: none;
  }
  .button-group {
  flex: 1 0 100%;
  text-align: left;
  margin-left: 75px;
}
.button-group button {
  padding: 10px 40px;
  border-radius: 5px;
  font-size: 18px;
  margin-right: 2%;
  cursor: pointer;
  background-color: transparent;
  color: black;
  border: 2px solid #F5F4F4;
  border-radius: 10px;
  transition: background-color 0.3s ease, border-color 0.3s ease; /* 添加过渡效果 */
}

.button-group button:first-child {
  background-color: #581BB7;
  color: #FFFFFF;
}

.button-group button:first-child:hover {
  background-color: #007BFF;
  color: #FFFFFF;
  border-color: transparent; /* 将边框颜色设置为透明 */
  border-radius: 10px;
}

.button-group button:last-child:hover {
  background-color: #DC3545;
  color: #FFFFFF;
  border-color: transparent; /* 将边框颜色设置为透明 */
  border-radius: 10px;
}
 
  select {
    background-color: #FFFFFF;
  }
  .custom-file-button{
    color: #800080;
    background-color: transparent; /* 设置背景色为透明 */  
    text-align: center; /* 居中文本 */  
    border-radius: 5px; /* 添加圆角 */  
    box-shadow: none; /* 移除默认阴影 */  
   border-color: #800080;
    margin: 5px;
    width: 35%;
  }
 
  </style>