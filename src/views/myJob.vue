<template>
  <div class="container">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="我的简历" name="resume">
        <el-form :model="resume" label-width="100px">
          <el-form-item label="姓名">
            <el-input v-model="resume.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="resume.gender">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model.number="resume.age"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="resume.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="resume.email"></el-input>
          </el-form-item>
          <el-form-item label="求职意向">
            <el-input v-model="resume.jobIntention"></el-input>
          </el-form-item>
          <el-form-item label="工作经历">
            <el-table :data="resume.workExperience" style="width: 100%">
              <el-table-column prop="company" label="公司"></el-table-column>
              <el-table-column prop="position" label="职位"></el-table-column>
              <el-table-column prop="duration" label="工作时间"></el-table-column>
            </el-table>
            <el-button type="primary" @click="addWorkExperience">添加工作经历</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="saveResume">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="我的申请" name="application">
        <el-table :data="applications" style="width: 100%">
          <el-table-column prop="jobTitle" label="职位"></el-table-column>
          <el-table-column prop="company" label="公司"></el-table-column>
          <el-table-column prop="applyTime" label="申请时间"></el-table-column>
          <el-table-column prop="status" label="状态">
            <template #default="{ row }">
              <el-tag :type="getStatusType(row.status)">{{ row.status }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="{ row }">
              <el-button type="text" @click="cancelApplication(row.id)" v-if="row.status === '待处理'">取消申请</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "myJob",
  data() {
    return {
      title:'我的就业',
      activeTab: 'resume',
      resume: {
        name: '',
        gender: '',
        age: '',
        phone: '',
        email: '',
        jobIntention: '',
        workExperience: []
      },
      applications: [
        {
          id: 1,
          jobTitle: '前端工程师',
          company: '阿里巴巴',
          applyTime: '2023-04-20 10:00:00',
          status: '待处理'
        },
        {
          id: 2,
          jobTitle: 'Java工程师',
          company: '腾讯',
          applyTime: '2023-04-21 12:00:00',
          status: '已拒绝'
        },
        {
          id: 3,
          jobTitle: '数据分析师',
          company: '百度',
          applyTime: '2023-04-22 14:00:00',
          status: '已通过'
        }
      ]
    }
  },
  methods: {
    addWorkExperience() {
      this.resume.workExperience.push({ company: '', position: '', duration: '' })
    },
    saveResume() {
      // TODO: 保存简历
    },
    cancelApplication(id) {
      // TODO: 取消申请
    },
    getStatusType(status) {
      if (status === '待处理') {
        return 'warning'
      } else if (status === '已通过') {
        return 'success'
      } else {
        return 'danger'
      }
    }
  }
}
</script>



