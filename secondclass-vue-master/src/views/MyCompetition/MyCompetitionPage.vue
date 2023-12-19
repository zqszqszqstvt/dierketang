<template>
  <div class="box">
    <div>
      <div class="main-title">
        信息发布>考研保研
      </div>
      <div class="user">
        <MyCompetitionUser/>
      </div>
      <div class="info-title">
        <h3>第四课堂/竞赛管理</h3>
      </div>
      <MyCompetitionCommit/>
      <div class="awardsItem">
        <MyCompetitionCard v-for="(item, index) in Awards" :key="index" :award="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyCompetitionUser from './MyCompetitionUser.vue'
import MyCompetitionCommit from './MyCompetitionCommit.vue'
import MyCompetitionCard from './MyCompetitionCard.vue'
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
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-title {
  margin-top: 10px;
  margin-bottom: 10px;
}
.user {
  
}
.info-title {
  margin-top: 40px;
}
.awardsItem {
  display: flex;
  width: 1045px;
  flex-wrap: wrap;
}
</style>