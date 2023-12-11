<template>
  <div class="card">
    <h2>上传竞赛成绩</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="competitionLevel">竞赛等级</label>
        <select id="competitionLevel" v-model="competitionLevel">
          <!-- 这里添加你的选项 -->
          <option value="0">世界级</option>
          <option value="1">国家级</option>
          <option value="2">省级</option>
          <option value="3">校级</option>
        </select>
      </div>
      <div class="form-group">
        <label for="awardLevel">得奖等级</label>
        <select id="awardLevel" v-model="awardLevel">
          <!-- 这里添加你的选项 -->
          <option value="1">一等奖</option>
          <option value="2">二等奖</option>
          <option value="3">三等奖</option>
          <option value="0">特等奖</option>
        </select>
      </div>
      <div class="form-group">
        <label for="competitionName">竞赛名称</label>
        <input id="competitionName" v-model="competitionName" type="text">
      </div>
      <div class="form-group">
        <label for="competitionScore">竞赛分数</label>
        <input id="competitionScore" v-model="competitionScore" type="number">
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
      competitionLevel: '0',
      awardLevel: '1',
      competitionName: '',
      competitionScore: ''
    };
  },
  methods: {
    submitForm() {
      // 在这里处理表单提交
      if (!this.competitionLevel || !this.awardLevel || !this.competitionName || !this.competitionScore) {
      alert('所有信息都必须填写！');
      return;
    }
    const formData = {
      competitionLevel: this.competitionLevel,
      awardLevel: this.awardLevel,
      competitionName: this.competitionName,
      competitionScore: this.competitionScore
    };

    console.log(formData);
    // 在这里可以发送formData到服务器
    },
    resetForm() {
      this.competitionLevel='0';
      this.awardLevel='1';
      this.competitionName='';
      this.competitionScore='';
    }
  },
  props: {

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
  border: none;
  color: #fff;
  cursor: pointer;
}

.button-group button:first-child {
  background-color: #007BFF;
}

.button-group button:last-child {
  background-color: #DC3545;
  margin-left: 10px;
}
</style>