<template>
    <div class="tech-center">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="我的技术点" name="my-tech">
          <el-card class="tech-card" v-for="(tech, index) in myTechs" :key="index">
            <div slot="header" class="tech-card-header">
              {{ tech.name }}
            </div>
            <div class="tech-card-body">
              <p>{{ tech.description }}</p>
              <p>掌握程度：{{ tech.level }}</p>
              <el-button type="primary" class="tech-card-btn" @click="editTech(tech)">编辑技术点</el-button>
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="所有技术点" name="all-tech">
          <el-card class="tech-card" v-for="(tech, index) in allTechs" :key="index">
            <div slot="header" class="tech-card-header">
              {{ tech.name }}
            </div>
            <div class="tech-card-body">
              <p>{{ tech.description }}</p>
              <p>掌握程度：{{ tech.level }}</p>
              <el-button type="primary" class="tech-card-btn" @click="addTech(tech)">添加技术点</el-button>
            </div>
          </el-card>
        </el-tab-pane>
      </el-tabs>
    </div>
  </template>
  
  <script>
  export default {
    name: "myTech",
    data() {
      return {
        title:'我的技术点',
        activeTab: 'my-tech',
        myTechs: [
          {
            name: 'Vue.js',
            description: 'Vue.js 是一款渐进式 JavaScript 框架。',
            level: '熟练掌握'
          },
          {
            name: 'Element UI',
            description: 'Element UI 是一套基于 Vue.js 的桌面端组件库。',
            level: '了解'
          }
        ],
        allTechs: [
          {
            name: 'React',
            description: 'React 是一个用于构建用户界面的 JavaScript 库。',
            level: '了解'
          },
          {
            name: 'Angular',
            description: 'Angular 是一个用于构建 Web 应用的框架。',
            level: '熟练掌握'
          }
        ]
      };
    },
    methods: {
      editTech(tech) {
        // 编辑技术点的逻辑
      },
      addTech(tech) {
        // 添加技术点的逻辑
      }
    }
  };
  </script>
  
  <style scoped>
  .tech-center {
    margin: 20px;
  }
  .tech-card {
    margin-bottom: 20px;
  }
  .tech-card-header {
    font-weight: bold;
  }
  .tech-card-body {
    padding: 10px;
  }
  .tech-card-btn {
    margin-top: 10px;
  }
  </style>
  
  
