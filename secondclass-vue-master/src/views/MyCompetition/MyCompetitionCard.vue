<template>
  <div class="card">
    <div class="left">
      <img src="./images/acm.png" alt="">
    </div>
    <div class="right">
      <h2>{{ award.competitionName }}</h2>
      <p>{{ award.competitionLevel }}{{ award.awardLevel }}</p>
      <p class="score">{{ award.score }}分</p>
    </div>
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
  width: 28.5%;
  padding: 1.3%;
  border-radius: 20px;
  background-color: #F8FAFB;
  margin: 1%;
  display: flex;
  font-weight: bold;
}
.left {
  width: 25%;
  margin-top: 2%;
}
.left img {
  width: 100%;
  object-fit: contain;
}
.right {
  width: 75%;
  margin-left: 6%;
  margin-top: 2%;
}
h2 {
  margin: 0;
  margin-bottom: 15px;
  
}
.score {
  font-size: 24px;
  color: #581BB7;
}

</style>