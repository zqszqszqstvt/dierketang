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
        <div class="demo-pagination-block">
            <div class="demonstration"></div>
              <el-pagination
                v-model:current-page="currentPage"
                v-model:page-size="pageSize"
                :page-sizes="[10, 15, 20, 30]"
                :small="small"
                :disabled="disabled"
                :background="background"
                layout="total, sizes, prev, pager, next, jumper"
                :total="newsTotal"
              />
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

      currentPage: 1,
      pageSize: 10,
      small: false,
      background: false,
      disabled: false,
      newsTotal: 10,
    };
    },
    components: {
      PracticeInfoTop,
      PracticeInfoItem
    },
    computed: {
      practiceCategory() {
        return this.$store.state.practiceCategory
      },
      practiceType() {
        return this.$store.state.practiceType
      },
      practiceLevel() {
        return this.$store.state.practiceLevel
      },
      practiceFirstDate() {
        return this.$store.state.practiceFirstDate
      },
    },
    watch: {
    practiceCategory(newVal, oldVal) {
      this.load()
    },
    practiceType(newVal, oldVal) {
      this.load()
    },
    practiceLevel(newVal, oldVal) {
      this.load()
    },
    practiceFirstDate(newVal, oldVal) {
      this.load()
    },
    currentPage(newVal, oldVal) {
      this.load()
    },
    pageSize(newVal, oldVal) {
      this.load()
    }
  },
    created() {
      // this.netrequest();
      this.load();
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
      },
      load(){
        let date;
      switch (this.$store.state.postingDate) {
        case '全部':
            break;
        case '近一周内':
          date = this.getFormattedDate(-7);
          console.log(date)
          break;
        case '近两周内':
          date = this.getFormattedDate(-14);
          break;
        case '近半年内':
          date = this.getFormattedDate(-182);
          break;
        default:
          date = this.getFormattedDate(-1);
      }
        this.request.get("/api/user/disan/getlist", {
          params: {
            category: this.$store.state.practiceCategory,
            type: this.$store.state.practiceType,
            level: this.$store.state.practiceLevel,
            activity_start_date: this.$store.state.practiceFirstDate === '全部' ? null : this.$store.state.practiceFirstDate,
            pagesum: this.pageSize,
            pageid: this.currentPage
          }
        })
      .then(res => {
            this.competitions = res.data.records
            this.newsTotal = res.data.total
        })
        .catch(error => {
          console.error(error);
        });
      },
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
  // 分页样式
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
.demo-pagination-block {
  display: flex;
  justify-content: center;
}
  </style>
  
  