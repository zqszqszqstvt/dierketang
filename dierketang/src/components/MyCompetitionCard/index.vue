<template>
  <div class="card">
    <h2>{{ award.competitionName }}</h2>
    <p>竞赛级别：{{ award.competitionLevel }}</p>
    <p>获奖等级：{{ award.awardLevel }}</p>
    <p>量化分数：{{ award.score }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyCompetitionCard',
  data() {
    return {
      
    };
  },
  props: {
    award: {
      type: Object,
      default: '',
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
.card {
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>