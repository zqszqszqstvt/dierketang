<template>
    <div class="box">
      <div class="mini-box">
        <div class="top-box">
          <ThirdClassScoreTop/>
        </div>
        <ThirdClassScoreCommit/>
        <div class="gradescard">
            <h2 class="termselect" style="width: 55%;">我的实践</h2> 
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
      // const response = await axios.get('你的API地址');
      this.netrequest(0);
    },
    methods: {
      //模拟网络请求
      netrequest() {
        //发送选择的学期，返回对应学期的课程成绩
       
          this.grades=[{
            subject: '思想政治与志愿服务',
            score: '20',
            all:'10',
            completion:'7',
            //surl:'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf2f6686e5c9ccfba5469de97f4097763699467f12e2d5a57615081df272da487',
            img:'1.png',
            //img: '/src/views/ThirdClass/images/1.png',
          },{
            subject: '心理素质与身体素质',
            score: '20',
            all:'10',
            completion:'7',
            //surl:'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9718c8c95adf14f065f37e1e1b1b5ab6680b97b5b595dec54c3b81c93a1a4d0a',
            img: '2.png',
          },{
            subject: '艺术体验与审美修养',
            score: '20',
            all:'10',
            completion:'7',
            //surl:'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5e3c80035aeb6cc78aca40171452aed8ba3fe5a630c809cdd61652972380560a',
            img: '3.png',
          },{
            subject: '文化沟通与交往能力',
            score: '20',
            all:'10',
            completion:'7',
            //surl:'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc2755149059c33f22b0b7f5500ada5d3b1a84ee1f98c7522a78a14172353cbd7',
            img: '4.png',
          },{
            subject: '社会工作与领导能力',
            score: '20',
            all:'10',
            completion:'7',
           // surl:'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng625647de8e62a03f2ab8bea320b5e008aa9f1bc6430b49541085915a4518a577',
           img: '5.png',
          },{
            subject: '学术科技与创新创业',
            score: '20',
            all:'10',
            completion:'7',
           // surl:'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng31b4d96cc1d17aed767e93d96d225fb717511e92a2260822915001aecba1f3aa',
           img: '6.png',
          }]
        
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
        justify-content: center;
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
  
  
  </style>