<template>
    <div class="card">
      <h2>上传第三课堂成绩</h2>
      <form @submit.prevent="submitForm"> 
        
        <div class="form-group">
          <label for="subjectName" >实践名称</label>
          <input id="subjectName" v-model="subjectName" type="text" placeholder="请输入实践名称">
        </div> 
        <div class="form-group">
          <label for="Score" >实践分数</label>
          <input id="Score" v-model="Score" type="text" placeholder="请输入">
        </div>
        <div class="form-group">
          <label for="gradeLevel">实践分类</label>
          <select id="gradeLevel" v-model="gradeLevel">
            <!-- 这里添加你的选项 -->
            <option value="1">思想政治与志愿服务</option>
            <option value="2">大二</option>
            <option value="3">大三</option>
            <option value="4">大四</option>
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
    name: 'ThridClassScoreCommit',
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
  width: 100%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  
  .form-group input{
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 70%;
    margin: 5px;
  }
  .form-group select {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 70%;
    margin: 5px;
  }
  
  .button-group {
    flex: 1 0 100%;
    text-align: right;
    display: flex;  
  justify-content: flex-start;  
   
  }
 
  #file{
    display: none;
  }
  .button-group button {
    padding: 5px 10px;
    border-radius: 5px;
    width: 15%;
    margin: 3%;
    cursor: pointer;
    color: black; /* 设置文字颜色为黑色 */
    border: 2px solid #DDDDDD; /* 设置边框 */
    transition: background-color 0.3s ease; /* 添加过渡效果 */
  }

  .button-group button:first-child:hover {
    background-color: #007BFF; /* 当鼠标移动到第一个按钮上时，改变背景颜色 */
    color: black; /* 当鼠标移动到第一个按钮上时，改变文字颜色 */
    border: none;
  }
  .button-group button:first-child{
    background-color:  #800080;
    color: white;
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