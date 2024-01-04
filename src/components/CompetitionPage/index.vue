<template>
  <div class="box">
    <div class="choose">
      <CompetitionChoose/>
    </div>
    <div class="hot-competition">
      <CompetitionRank v-for="(item, index) in HotCompetitions" :key="index" :HotCompetition="item"/>
    </div>
    <div class="competition-item">
      <Competition v-for="(item, index) in competitions" :key="index" :competition="item"/>
    </div>
  </div>
</template>

<script>
import CompetitionChoose from '../CompetitionChoose/index.vue'
import Competition from '../Competition/index.vue'
import CompetitionRank from '../CompetitionRank/index.vue'

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
    Competition,
    CompetitionRank
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
        link: 'https://www.saikr.com/vse/cwctic/2023',
        organizer: '四川省翻译协会 陕西省翻译协会 广西翻译协会 河南省翻译协会 河北省翻译协会 甘肃省翻译工作者协会 宁夏翻译协会 安徽省翻译协会 重庆翻译学会 哈尔滨市翻译协会 山西省翻译协会 贵州省翻译协会 黑龙江省翻译协会 深圳市翻译协会',
        level: '全国性',
        registrationTime: '2023.10.21 ～ 2023.12.29',
        competitionTime: '2023.12.30 ～ 2023.12.31',
        remainingDays: 23
      },
      {
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
        link: 'https://www.saikr.com/vse/cwctic/2023',
        organizer: '四川省翻译协会 陕西省翻译协会 广西翻译协会 河南省翻译协会 河北省翻译协会 甘肃省翻译工作者协会 宁夏翻译协会 安徽省翻译协会 重庆翻译学会 哈尔滨市翻译协会 山西省翻译协会 贵州省翻译协会 黑龙江省翻译协会 深圳市翻译协会',
        level: '全国性',
        registrationTime: '2023.10.21 ～ 2023.12.29',
        competitionTime: '2023.12.30 ～ 2023.12.31',
        remainingDays: 23
      },
      {
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
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
.hot-competition {
  width: 25%;
  float: right;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 16%;
  margin-top: 10px;
  border-radius: 10px; /* 这将给边框添加圆角 */
  overflow: hidden; /* 隐藏超出盒子的内容 */
  position: relative; /* 为伪元素设置定位的参照 */
  text-align: left;
  background-color: #f9f9f9;
  border: 1px solid #d8d5d5; /* 设置边框，1px 宽，实线，黑色 */
}
.hot-competition::after { /* 创建一个伪元素来实现渐隐效果 */
    content: "";
    position: absolute;
    right: 0;
    width: 10%; /* 伪元素的宽度决定了渐隐效果的范围 */
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)); /* 创建一个从透明到白色的渐变背景 */
}
.choose{
  margin-right: 16%;
  margin-left: 16%;
}
.competition-item {
  margin-left: 16%;
  margin-top: 10px;
}
</style>

