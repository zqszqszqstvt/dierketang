<template>
  <div class="box">
    <div class="mini-box">
      <div class="main-title">
        信息发布>竞赛信息
      </div>
      <div class="choose">
        <CompetitionChoose/>
      </div>
      <div class="competition-item">
        <Competition v-for="(item, index) in competitions" :key="index" :competition="item"/>
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
import CompetitionChoose from './CompetitionChoose.vue'
import Competition from './Competition.vue'


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
    CompetitionChoose,
    Competition
  },
  mounted(){

  },
  created() {
    this.load()
  },
  watch: {
    currentPage(newVal, oldVal) {
      this.loadNews()
    },
    pageSize(newVal, oldVal) {
      this.loadNews()
    }
  },
  computed: {
    competitionType() {
      return this.$store.state.competitionType
    },
    competitionLevelType() {
      return this.$store.state.competitionLevelType
    }
  },
  watch: {
    competitionType(newVal, oldVal) {
      this.load()
    },
    competitionLevelType(newVal, oldVal) {
      this.load()
    }
  },
  methods: {
    load() {
      this.request.get("/api/user/comp/getlist",{
        params: {
          category: this.$store.state.competitionType,
          level: this.$store.state.competitionLevelType,
          size: this.pageSize,
          page: this.currentPage
        }
      })
      .then(res => {
            this.competitions = res.data.records
            this.newsTotal = res.data.total
        })
        .catch(error => {
          console.error(error);
        });



      //   this.competitions = [{
      //   title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
      //   image: 'https://pic.616pic.com/ys_img/00/80/92/cMWWiGDRZO.jpg',
      //   link: 'https://www.saikr.com/vse/cwctic/2023',
      //   organizer: '四川省翻译协会 陕西省翻译协会 广西翻译协会 河南省翻译协会 河北省翻译协会 甘肃省翻译工作者协会 宁夏翻译协会 安徽省翻译协会 重庆翻译学会 哈尔滨市翻译协会 山西省翻译协会 贵州省翻译协会 黑龙江省翻译协会 深圳市翻译协会',
      //   level: '全国性',
      //   registrationTime: '2023.10.21 ～ 2023.12.29',
      //   competitionTime: '2023.12.30 ～ 2023.12.31',
      //   remainingDays: 23
      // },
      // {
      //   title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
      //   image: 'https://img1.baidu.com/it/u=2477635992,2988894215&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=350',
      //   link: 'https://www.saikr.com/vse/cwctic/2023',
      //   organizer: '四川省翻译协会 陕西省翻译协会 广西翻译协会 河南省翻译协会 河北省翻译协会 甘肃省翻译工作者协会 宁夏翻译协会 安徽省翻译协会 重庆翻译学会 哈尔滨市翻译协会 山西省翻译协会 贵州省翻译协会 黑龙江省翻译协会 深圳市翻译协会',
      //   level: '全国性',
      //   registrationTime: '2023.10.21 ～ 2023.12.29',
      //   competitionTime: '2023.12.30 ～ 2023.12.31',
      //   remainingDays: 23
      // },
      // {
      //   title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
      //   image: 'https://img2.baidu.com/it/u=541125345,2421264996&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=501',
      //   link: 'https://www.saikr.com/vse/cwctic/2023',
      //   organizer: '四川省翻译协会 陕西省翻译协会 广西翻译协会 河南省翻译协会 河北省翻译协会 甘肃省翻译工作者协会 宁夏翻译协会 安徽省翻译协会 重庆翻译学会 哈尔滨市翻译协会 山西省翻译协会 贵州省翻译协会 黑龙江省翻译协会 深圳市翻译协会',
      //   level: '全国性',
      //   registrationTime: '2023.10.21 ～ 2023.12.29',
      //   competitionTime: '2023.12.30 ～ 2023.12.31',
      //   remainingDays: 23
      // }]; // 假设你的API返回的数据就是你需要的数据

      // this.HotCompetitions = [{
      //   title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
      //   link: 'https://www.saikr.com/vse/cwctic/2023'
      // },
      // {
      //   title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
      //   link: 'https://www.saikr.com/vse/cwctic/2023'
      // },
      // {
      //   title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
      //   link: 'https://www.saikr.com/vse/cwctic/2023'
      // },
      // {
      //   title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
      //   link: 'https://www.saikr.com/vse/cwctic/2023'
      // },
      // {
      //   title: '【多省市译协盖章】2023年第九届中西dassadasdasdsadasdfdfsdfsdfsfds部外语翻译大赛',
      //   link: 'https://www.saikr.com/vse/cwctic/2023'
      // },
      // {
      //   title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
      //   link: 'https://www.saikr.com/vse/cwctic/2023'
      // }]; // 假设你的API返回的数据就是你需要的数据
      // console.log(this.$store.state.competitionType)
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
// 分页样式
.demo-pagination-block {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>

