<template>
    <div class="box">
      <ClassScoreTop/>
      <ClassScoreCommit/>
      <div>
        <h2>我的课程成绩</h2>
        <div>
          <label>学期选择</label>
          <select @click="selectgrade">
            <!-- 这里添加你的选项 -->
            <option value="1">大一年级</option>
            <option value="2">大二年级</option>
            <option value="3">大三年级</option>
            <option value="4">大四年级</option>
          </select>
        </div>
        <div class="classItem">
            <ClassScoreItem v-for="(item, index) in grades" :key="index" :grade="item"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ClassScoreTop from '../ClassScoreTop'
  import ClassScoreCommit from '../ClassScoreCommit'
  import ClassScoreItem from '../ClassScoreItem'
  export default {
    name: 'ClassScorePage',
    data() {
      return {
        grades: []
      };
    },
    components: {
        ClassScoreTop,
        ClassScoreCommit,
        ClassScoreItem
    },
    async created() {
      // const response = await axios.get('你的API地址');
      this.netrequest();
    },
    methods: {
      //模拟网络请求
      netrequest() {
        this.grades=[{
            subject: '高数上',
            score: '20'
          },{
            subject: '高数下',
            score: '90'
          },{
            subject: '计算机组成原理',
            score: '60'
          },{
            subject: '数据结构',
            score: '66'
          },{
            subject: '智能计算',
            score: '70'
          }]
      }
    }
  };
  </script>
  <style lang="less" scoped>
    .classItem {
        display: flex;
    }
    h2 {
    text-align: left;
    margin: 20px;
  }
  </style>