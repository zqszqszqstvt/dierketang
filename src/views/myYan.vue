<template>
  <div class="container">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="考研计划" name="plan">
        <el-form :model="examPlan" label-width="100px">
          <el-form-item label="报考学校">
            <el-input v-model="examPlan.school"></el-input>
          </el-form-item>
          <el-form-item label="报考专业">
            <el-input v-model="examPlan.major"></el-input>
          </el-form-item>
          <el-form-item label="报考时间">
            <el-date-picker v-model="examPlan.examTime" type="date" placeholder="请选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="备考计划">
            <el-input type="textarea" v-model="examPlan.studyPlan"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="saveExamPlan">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="历年真题" name="oldExams">
        <el-table :data="oldExams" style="width: 100%">
          <el-table-column prop="year" label="年份"></el-table-column>
          <el-table-column prop="subject" label="科目"></el-table-column>
          <el-table-column label="下载链接">
            <template slot-scope="scope">
              <a :href="scope.row.downloadLink" target="_blank" v-if="scope.row.downloadLink">{{ scope.row.downloadLink }}</a>
              <el-button v-else disabled>暂无下载链接</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="description" label="描述"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "myYan",
  data() {
    return {
      title:'我的考研/保研',
      activeTab: 'plan',
      examPlan: {
        school: '',
        major: '',
        examTime: '',
        studyPlan: ''
      },
      oldExams: [
        { year: '2022', subject: '政治', downloadLink: 'https://www.example.com/2022-politics.pdf', description: '2022年考研政治真题及答案' },
        { year: '2021', subject: '英语', downloadLink: 'https://www.example.com/2021-english.pdf', description: '2021年考研英语真题及答案' },
        { year: '2020', subject: '数学', downloadLink: 'https://www.example.com/2020-math.pdf', description: '2020年考研数学真题及答案' },
        { year: '2019', subject: '计算机', description: '2019年考研计算机真题及答案将于近期发布，敬请期待~' },
        { year: '2018', subject: '管理', downloadLink: 'https://www.example.com/2018-management.pdf', description: '2018年考研管理真题及答案' }
      ]
    }
  },
  methods: {
    saveExamPlan() {
      // 实现保存考研计划的逻辑
    }
  }
}
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
  
  
