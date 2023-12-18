<template>
    <div class="competition-center">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="我的竞赛" name="my-competition">
          <el-card class="competition-card" v-for="(competition, index) in myCompetitions" :key="index">
            <div slot="header" class="competition-card-header">
              {{ competition.name }}
            </div>
            <div class="competition-card-body">
              <p>{{ competition.description }}</p>
              <p>开始时间：{{ competition.startTime }}</p>
              <p>结束时间：{{ competition.endTime }}</p>
              <p>参赛人数：{{ competition.participants }}</p>
              <p>我的排名：{{ competition.myRank }}</p>
              <el-button type="primary" class="competition-card-btn" @click="viewCompetition(competition)">查看竞赛</el-button>
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="所有竞赛" name="all-competition">
          <el-card class="competition-card" v-for="(competition, index) in allCompetitions" :key="index">
            <div slot="header" class="competition-card-header">
              {{ competition.name }}
            </div>
            <div class="competition-card-body">
              <p>{{ competition.description }}</p>
              <p>开始时间：{{ competition.startTime }}</p>
              <p>结束时间：{{ competition.endTime }}</p>
              <p>参赛人数：{{ competition.participants }}</p>
              <el-button type="primary" class="competition-card-btn" @click="joinCompetition(competition)">参加竞赛</el-button>
            </div>
          </el-card>
        </el-tab-pane>
      </el-tabs>
    </div>
  </template>
  
  <script>
  export default {
    name: "myContest",
    data() {
      return {
        title:'我的竞赛',
        activeTab: 'my-competition',
        myCompetitions: [
          {
            name: '竞赛1',
            description: '这是一个很有意思的竞赛，快来参加吧！',
            startTime: '2023-05-01 00:00:00',
            endTime: '2023-05-31 23:59:59',
            participants: 200,
            myRank: 10
          },
          {
            name: '竞赛2',
            description: '这是另一个很有意思的竞赛，快来参加吧！',
            startTime: '2023-06-01 00:00:00',
            endTime: '2023-06-30 23:59:59',
            participants: 300,
            myRank: 30
          }
        ],
        allCompetitions: [
          {
            name: '竞赛3',
            description: '这是一个全新的竞赛，快来参加吧！',
            startTime: '2023-07-01 00:00:00',
            endTime: '2023-07-31 23:59:59',
            participants: 50
          },
          {
            name: '竞赛4',
            description: '这是另一个全新的竞赛，快来参加吧！',
            startTime: '2023-08-01 00:00:00',
            endTime: '2023-08-31 23:59:59',
            participants: 70
          }
        ]
      };
    },
    methods: {
      viewCompetition(competition) {
        // 查看竞赛的逻辑
      },
      joinCompetition(competition) {
        // 参加竞赛的逻辑
      }
    }
  };
  </script>
  
  <style scoped>
  .competition-center {
    margin: 20px;
  }
  .competition-card {
    margin-bottom: 20px;
  }
  .competition-card-header {
    font-weight: bold;
  }
  .competition-card-body {
    padding: 10px;
  }
  .competition-card-btn {
    margin-top: 10px;
  }
  </style>

