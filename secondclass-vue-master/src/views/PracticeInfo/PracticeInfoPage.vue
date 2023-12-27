<template>
    <div class="box">
      <div class="mini-box">
        <div class="main-title">
          第三课堂>社会实践
        </div>
        <div class="choose">
          <PracticeInfoTop/>
        </div>
        <div class="competition-item">
          <PracticeInfoItem v-for="(item, index) in competitions" :key="index" :competition="item"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PracticeInfoTop from './PracticeInfoTop.vue'
  import PracticeInfoItem from './PracticeInfoItem.vue'
  
  export default {
    name: 'CompetitionPage',
    data() {
      return {
      competitions: [],
      HotCompetitions: []
    };
    },
    components: {
      PracticeInfoTop,
      PracticeInfoItem
    },
    async created() {
      // const response = await axios.get('你的API地址');
      
      this.netrequest();
    },
    methods: {
      //模拟网络请求
      netrequest() {
        this.competitions = [{
          title: '人贵自立，勤奋为桥|当音乐遇见校史',
          image: 'https://pic.616pic.com/ys_img/00/80/92/cMWWiGDRZO.jpg',
          link: 'https://www.saikr.com/vse/cwctic/2023',
          introduction: '本次活动以“勤学、修德、明辨、笃实，扣好人生第一粒扣子”为题，以《爱的礼赞》切入，结合时事政策，生动系统讲述了我校发展历程、光辉成就、茅以升先生等知名校友的光辉事件。',
          time: '星期三 12月10日 18:00',
          adddress: '图书馆二楼报告厅',
          remainingDays: "23/400",
          status: "进行中"
        },
        {
          title: '人贵自立，勤奋为桥|当音乐遇见校史',
          image: 'https://img1.baidu.com/it/u=2477635992,2988894215&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=350',
          link: 'https://www.saikr.com/vse/cwctic/2023',
          introduction: '本次活动以“勤学、修德、明辨、笃实，扣好人生第一粒扣子”为题，以《爱的礼赞》切入，结合时事政策，生动系统讲述了我校发展历程、光辉成就、茅以升先生等知名校友的光辉事件。',
          time: '星期三 12月10日 18:00',
          adddress: '图书馆二楼报告厅',
          remainingDays: "23/400",
          status: "进行中"
        },
        {
          title: '人贵自立，勤奋为桥|当音乐遇见校史',
          image: 'https://img2.baidu.com/it/u=541125345,2421264996&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=501',
          link: 'https://www.saikr.com/vse/cwctic/2023',
          introduction: '本次活动以“勤学、修德、明辨、笃实，扣好人生第一粒扣子”为题，以《爱的礼赞》切入，结合时事政策，生动系统讲述了我校发展历程、光辉成就、茅以升先生等知名校友的光辉事件。',
          time: '星期三 12月10日 18:00',
          adddress: '图书馆二楼报告厅',
          remainingDays: "23/400",
          status: "已结束"
        }]; // 假设你的API返回的数据就是你需要的数据
        console.log(this.$store.state.competitionType)
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  .box {
    
  }
  
  .choose{
    margin-right: 16%;
    margin-left: 16%;
  }
  .competition-item {
    margin-left: 16%;
    margin-right: 16%;
    margin-top: 10px;
  }
  .main-title {
    margin-left: 16%;
    margin-right: 16%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  </style>
  
  