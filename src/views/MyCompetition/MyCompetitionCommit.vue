<template>
  <div class="card">
    <h2>上传竞赛成绩</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="competitionName">竞赛名称</label>
        <input id="competitionName" v-model="competitionName" type="text" placeholder="请输入竞赛名称">

      </div>
      <div class="form-group">
        <label for="competitionLevel">竞赛等级</label>
        <select id="competitionLevel" v-model="competitionLevel">
          <!-- 这里添加你的选项 -->
          <option value="世界级">世界级</option>
          <option value="国家级">国家级</option>
          <option value="省级">省级</option>
          <option value="校级">校级</option>
        </select>
      </div>
      <div class="form-group">
        <label for="awardLevel">得奖等级</label>
        <select id="awardLevel" v-model="awardLevel">
          <!-- 这里添加你的选项 -->
          <option value="一等奖">一等奖</option>
          <option value="二等奖">二等奖</option>
          <option value="三等奖">三等奖</option>
          <option value="特等奖">特等奖</option>
        </select>
      </div>
      <div class="form-group">
          <label for="file">选择文件</label>
          <button type="button" class="custom-file-button" @click="ClipboardItem"><span class="enorme-plus">+</span >选择文件</button>
          <input id="file" type="file" ref="fileInput" style="display: none;">
          <span  v-if="!file" id="noFileLabel" >未选择任何文件</span>
      </div>
      <div class="button-group">
        <button type="submit" @click="add">增加</button>
        <button type="button" @click="quit">取消</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'MyCompetitionCommit',
  data() {
    return {
      competitionLevel: '世界级',
      awardLevel: '一等奖',
      competitionName: '',
      file: null,
      imgurl:''
    };
  },
  methods: {
    submitForm() {
        // 在这里处理表单提交
        if (!this.competitionLevel || !this.awardLevel || !this.competitionName || !this.file) {
            alert('所有字段不为空！');
            return;
        }
        if(this.competitionLevel && this.awardLevel && this.competitionName && this.file) {
          
          let formData = new FormData();
          formData.append('image', this.imgurl);
          formData.append('student_id', localStorage.getItem('id'));
          formData.append('competition_level', this.competitionLevel);
          formData.append('awards_level', this.awardLevel);
          formData.append('competition_name', this.competitionName);
          this.request.post("/api/user/pic/upmycomp", formData)
          .then(res => {
              alert("已提交！")
        })
        .catch(error => {
          console.error(error);
        });
        }
      },
      uploadImg() { 
        if(!this.file) {
          console.error('没有选择文件!')
        }
        let formData = new FormData();
        formData.append('file', this.file);
        console.log('formData的file为：', formData.get('file'));
        this.request.post("/api/user/common/upload", formData)
          .then(res => {
              this.imgurl = res.data
              console.log("链接", this.imgurl)
        })
        .catch(error => {
          console.error(error);
        });
      },
      ClipboardItem(event){
      const fileInput = document.querySelector('input[id="file"]');
      fileInput.click();
      fileInput.onchange = async  (e) => {
        this.file = e.target.files[0];
        console.log('已选择的文件：', this.file);
        await this.uploadImg();
      }
    },
    //给按钮增加一个更改弹窗显示状态的函数
    quit() {
      this.$store.dispatch('updateAddCompetitionShow');
    },
    add() {
      this.$store.dispatch('updateAddCompetitionShow');
    },
    
  },
  mounted() {
    console.log(document.querySelector('input[id="file"]'))
  }
};
</script>
<style lang="less" scoped>
.card {
  padding: 20px;
  padding-left: 4%;
  border-radius: 10px;
  background-color: #FFFFFF;
  margin-top: 6px;
  // margin: 0 auto;
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
.form-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 48%;
}
.form-group label {
  margin-bottom: 5px;
  margin-right: 3px;
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
.button-group {
  flex: 1 0 100%;
  text-align: left;
  margin-left: 90px;
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