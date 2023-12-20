<template>
  <div class="box">
    <div class="mini-box">
      <div class="main-title">
        能力自画像>我的竞赛
      </div>
      <div class="user">
        <MyCompetitionUser/>
      </div>
      <div class="info-title">
        <h3>第四课堂/竞赛管理</h3>
      </div>
      <MyCompetitionCommit/>
      <div class="awards-box">
        <div class="awards-title">
          <h2>我的竞赛</h2>
          <div class="more">全部竞赛></div>
        </div>
        <div class="awardsItem">
          <MyCompetitionCard v-for="(item, index) in Awards" :key="index" :award="item"/>
        </div>
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
.mini-box {
  width: 65%;
}
.main-title {
  margin-top: 10px;
  margin-bottom: 10px;
}
.user {
  font-weight: bold;
}
.info-title {
  margin-top: 40px;
}
.awards-box {
  background-color: #FFFFFF;
  border-radius: 10px;
}
.awards-title {
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
}
.awards-title .more {
  font-size: 18px;
  color: #581BB7;
  margin: 0; /* 重置默认的margin */
  padding: 4%; /* 添加你自己的边距 */
  padding-bottom: 0;
}
.awards-title h2{
  margin: 0; /* 重置默认的margin */
  padding: 3%; /* 添加你自己的边距 */
  padding-left: 4%;
  padding-bottom: 0;
}

.awardsItem {
  display: flex;
  flex-wrap: wrap;
  margin: 3%;
  margin-top: 1%;
}
</style>