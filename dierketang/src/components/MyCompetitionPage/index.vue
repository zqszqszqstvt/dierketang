<template>
  <div class="box">
    <MyCompetitionUser/>
    <MyCompetitionCommit/>
    <div class="awardsItem">
      <MyCompetitionCard v-for="(item, index) in Awards" :key="index" :award="item"/>
    </div>
  </div>
</template>

<script>
import MyCompetitionUser from '../MyCompetitionUser'
import MyCompetitionCommit from '../MyCompetitionCommit'
import MyCompetitionCard from '../MyCompetitionCard'
export default {
  name: 'MyCompetitionPage',
  data() {
    return {
      Awards: []
    };
  },
  components: {
    MyCompetitionUser,
    MyCompetitionCommit,
    MyCompetitionCard
  },
  async created() {
    // const response = await axios.get('你的API地址');
    
    this.netrequest();
  },
  methods: {
    //模拟网络请求
    netrequest() {
      this.Awards=[{
          competitionName: '蓝乔',
          competitionLevel: '国家级',
          awardLevel: '一等奖',
          score: '20'
        },
        {
          competitionName: '蓝乔杯',
          competitionLevel: '国家级',
          awardLevel: '一等奖',
          score: '20'
        },
        {
          competitionName: '蓝乔杯',
          competitionLevel: '国家级',
          awardLevel: '一等奖',
          score: '20'
        },{
          competitionName: '蓝乔杯',
          competitionLevel: '国家级',
          awardLevel: '一等奖',
          score: '20'
        },{
          competitionName: '蓝乔杯',
          competitionLevel: '国家级',
          awardLevel: '一等奖',
          score: '20'
        },{
          competitionName: '蓝乔杯',
          competitionLevel: '国家级',
          awardLevel: '一等奖',
          score: '20'
        },{
          competitionName: '蓝乔杯',
          competitionLevel: '国家级',
          awardLevel: '一等奖',
          score: '20'
        },{
          competitionName: '蓝乔杯',
          competitionLevel: '国家级',
          awardLevel: '一等奖',
          score: '20'
        },{
          competitionName: '蓝乔杯',
          competitionLevel: '国家级',
          awardLevel: '一等奖',
          score: '20'
        },{
          competitionName: '蓝乔杯',
          competitionLevel: '国家级',
          awardLevel: '一等奖',
          score: '20'
        }]
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  margin-left: 20%;
  margin-right: 20%;
}
.awardsItem {
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
}
</style>