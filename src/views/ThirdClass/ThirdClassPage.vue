<template>
    <div class="box">
      <div class="mini-box">
        <div class="top-box">
          <ThirdClassScoreTop/>
        </div>
        <el-dialog title="登记奖项" :model-value="addshow" width="65%" :show-close="false">
          <ThirdClassScoreCommit/>
        </el-dialog>
        <div class="gradescard">
            <h2 class="termselect" style="width: 55%;">我的实践</h2> 
            <button class="add" @click="addClick">添加</button>
          <div class="termselect" style="{
            width: 80%;
      position: relative; 
      right: 0; 
      transform: translateX(100%); 
    }">
            
          </div>
          <div class="classItem">
              <ThirdClassScoreItem v-for="(item, index) in grades" :key="index" :grade="item" class="items"/>
              
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ThirdClassScoreTop from './ThirdClassScoreTop.vue'
  import ThirdClassScoreCommit from './ThirdClassScoreCommit.vue'
  import ThirdClassScoreItem from './ThirdClassScoreItem.vue'
  export default {
    name: 'ThirdClassScorePage',
    data() {
      return {
        grades: []
      };
    },
    components: {
        ThirdClassScoreTop,
        ThirdClassScoreCommit,
        ThirdClassScoreItem,
    },
    async created() {

      this.load();
    },
    computed: {
      // 弹窗 用store的变量来决定显示弹窗否
      addshow() {
        return this.$store.state.addPracticeShow;
      }
    },
    methods: {
      load(){
        this.request.get("/api/user/disan/shijian", {
          params: {
            id: localStorage.getItem('id')          }
        })
      .then(res => {
            this.grades = res.data
        })
        .catch(error => {
          console.error(error);
        });
      },
      // 弹窗 点击出现弹窗
      addClick() {
        this.$store.dispatch('updateAddPracticeShow');
      },
     
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
      width: 962px;
    }
    .top-box {
      box-sizing: border-box;
      width: 100%;
      margin-top: 30px;
      margin-bottom: 30px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
    }
    .classItem {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
      align-items: center;
      
    }
    .classItem > * {
      margin: 10px;
    }
    .items{
      width: 48%;
      margin: 1%;
      align-items: center;

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
      display: inline-block; 
    }
    .gradescard {
      box-sizing: border-box;
      position: relative;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      margin-top: 30px;
    }
    .termselect select {
      width: 55%;
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
      box-sizing: border-box;
     width: 100%;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      margin-top: 30px;
    }
    .add {
      width: 100px;  
      height: 40px;  
      margin-right: 30px;
      background-color: #FFFFFF;
      color: #581BB7;  
      border: none;  
      border-radius: 4px;  
      font-size: 16px;
    }
    .add:hover {
      background-color: #581BB7;
      color: #FFFFFF;  
    }
  
  </style>