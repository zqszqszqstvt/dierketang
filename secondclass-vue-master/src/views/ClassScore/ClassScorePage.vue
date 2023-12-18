<template>
    <div class="box">
      <div class="mini-box">
        <div class="top-box">
          <ClassScoreTop/>
        </div>
        <ClassScoreCommit/>
        <div class="gradescard">
          <h2>我的课程成绩</h2>
          <div class="termselect">
            <label>学期选择</label>
            <select @change="changegrade">
              <!-- 这里添加你的选项 -->
              <option value="0">全部</option>
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
        <div class="buttom">
          <h2>第一课堂能力</h2>
          <div class="chart">
            <div class="mini-chart">
              <ClassScoreCapacity/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ClassScoreTop from './ClassScoreTop.vue'
  import ClassScoreCommit from './ClassScoreCommit.vue'
  import ClassScoreItem from './ClassScoreItem.vue'
  import ClassScoreCapacity from './ClassScoreCapacity.vue'
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
        ClassScoreItem,
        ClassScoreCapacity
    },
    async created() {
      // const response = await axios.get('你的API地址');
      this.netrequest(0);
    },
    methods: {
      //模拟网络请求
      netrequest(grade) {
        //发送选择的学期，返回对应学期的课程成绩
        if(grade==0) {
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
        }else {
          this.grades=[{
            subject: '其他',
            score: '70'
          },{
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
      },
      changegrade(event) {
        // 获取用户选择的年级
        const selectedGrade = event.target.value;
        // 根据选择的年级发送请求
        this.netrequest(selectedGrade);
      }
    }
  };
  </script>
  <style lang="less" scoped>
    .box {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mini-box {
      width: auto;
    }
    .top-box {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .classItem {
        display: flex;
        flex-wrap: wrap;
    }
    .classItem > * {
      margin: 10px;
    }
    h2 {
      text-align: left;
      margin: 20px;
    }
    .termselect label{
      margin-right: 3px;
    }
    .termselect {
      margin-left: 30px;
      margin-bottom: 10px;
    }
    .gradescard {
      width: 100%;
    }
    .termselect select {
      width: 100px;
      background-color: #FFFFFF;
      border: 2px solid #DDDDDD;
      border-radius: 5px; /* 设置边框圆角为5像素 */
    }
    .chart {
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .buttom {
      width: 1000px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      margin-top: 6px;
    }
  </style>