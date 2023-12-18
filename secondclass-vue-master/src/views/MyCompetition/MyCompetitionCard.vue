<template>
  <div class="card">
    <h2>{{ award.competitionName }}</h2>
    <p>{{ award.competitionLevel }}{{ award.awardLevel }}</p>
    <p class="score">{{ award.score }}分</p>
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
  width: 290px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 8px;
}

h2 {
  text-align: center;
  margin-bottom: 15px;
}
.score {
  font-size: 24px;
  color: #3f51b5;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}
p {
  text-align: center;
}
</style>