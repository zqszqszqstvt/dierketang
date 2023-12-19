<template>
  <div class="box">
    <div class="mini-box">
      <div class="main-title">
        信息发布>考研保研
      </div>
      <div class="choose">
        <CompetitionChoose/>
      </div>
      <div class="competition-item">
        <Competition v-for="(item, index) in competitions" :key="index" :competition="item"/>
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
    HotCompetitions: []
  };
  },
  components: {
    CompetitionChoose,
    Competition
  },
  async created() {
    // const response = await axios.get('你的API地址');
    
    this.netrequest();
  },
  methods: {
    //模拟网络请求
    netrequest() {
      this.competitions = [{
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
        image: 'https://img2.baidu.com/it/u=2237494783,638955864&fm=253&fmt=auto&app=138&f=JPEG?w=754&h=424',
        link: 'https://www.saikr.com/vse/cwctic/2023',
        organizer: '四川省翻译协会 陕西省翻译协会 广西翻译协会 河南省翻译协会 河北省翻译协会 甘肃省翻译工作者协会 宁夏翻译协会 安徽省翻译协会 重庆翻译学会 哈尔滨市翻译协会 山西省翻译协会 贵州省翻译协会 黑龙江省翻译协会 深圳市翻译协会',
        level: '全国性',
        registrationTime: '2023.10.21 ～ 2023.12.29',
        competitionTime: '2023.12.30 ～ 2023.12.31',
        remainingDays: 23
      },
      {
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
        image: 'https://img2.baidu.com/it/u=2237494783,638955864&fm=253&fmt=auto&app=138&f=JPEG?w=754&h=424',
        link: 'https://www.saikr.com/vse/cwctic/2023',
        organizer: '四川省翻译协会 陕西省翻译协会 广西翻译协会 河南省翻译协会 河北省翻译协会 甘肃省翻译工作者协会 宁夏翻译协会 安徽省翻译协会 重庆翻译学会 哈尔滨市翻译协会 山西省翻译协会 贵州省翻译协会 黑龙江省翻译协会 深圳市翻译协会',
        level: '全国性',
        registrationTime: '2023.10.21 ～ 2023.12.29',
        competitionTime: '2023.12.30 ～ 2023.12.31',
        remainingDays: 23
      },
      {
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
        image: 'https://img2.baidu.com/it/u=2237494783,638955864&fm=253&fmt=auto&app=138&f=JPEG?w=754&h=424',
        link: 'https://www.saikr.com/vse/cwctic/2023',
        organizer: '四川省翻译协会 陕西省翻译协会 广西翻译协会 河南省翻译协会 河北省翻译协会 甘肃省翻译工作者协会 宁夏翻译协会 安徽省翻译协会 重庆翻译学会 哈尔滨市翻译协会 山西省翻译协会 贵州省翻译协会 黑龙江省翻译协会 深圳市翻译协会',
        level: '全国性',
        registrationTime: '2023.10.21 ～ 2023.12.29',
        competitionTime: '2023.12.30 ～ 2023.12.31',
        remainingDays: 23
      }]; // 假设你的API返回的数据就是你需要的数据

      this.HotCompetitions = [{
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
        link: 'https://www.saikr.com/vse/cwctic/2023'
      },
      {
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
        link: 'https://www.saikr.com/vse/cwctic/2023'
      },
      {
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
        link: 'https://www.saikr.com/vse/cwctic/2023'
      },
      {
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
        link: 'https://www.saikr.com/vse/cwctic/2023'
      },
      {
        title: '【多省市译协盖章】2023年第九届中西dassadasdasdsadasdfdfsdfsdfsfds部外语翻译大赛',
        link: 'https://www.saikr.com/vse/cwctic/2023'
      },
      {
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
        link: 'https://www.saikr.com/vse/cwctic/2023'
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

