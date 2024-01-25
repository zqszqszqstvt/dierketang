<template>
  <div class="box">
    <div class="left-img">
      <div class="competition-status">
          正在报名
      </div>
      <img :src="competition.image" alt="">
    </div>
    <div class="left-info">
      <h3 class="tit">
        <strong class="title">
          {{ competition.title }}
        </strong>
      </h3>
      <div class="competition-info">
        <p class="event4-1-plan">
        <span class="item-tit">主办方</span>{{ competition.organizer }}
        </p>
        <p class="event4-1-plan">
          <span class="item-tit">竞赛级别</span>{{ competition.level }}
        </p>
        <p class="event4-1-plan">
          <span class="item-tit">报名时间</span>{{ competition.registrationTime }}
        </p>
        <p class="event4-1-plan">
          <span class="item-tit">比赛时间</span>{{ competition.competitionTime }}
        </p>
      </div>
    </div>
    <div class="right-info">
      <div class="details">
        竞赛详情>
      </div>
      <div class="login-button">
        <a :href="competition.link" target="_blank">报名请登录</a>
      </div>
      <div class="item-status">
        距离报名截止还有 {{ competition.remainingDays }} 天
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Competition',
  data() {
    return {
      
    };
  },
  props: {
    competition: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
  .box {
    margin-top: 15px;
    // width: 50%;
    padding: 20px;
    background-color: #FFFFFF;
    border-radius: 10px;
    overflow: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
     &:after {
      content: "";
      display: table;
      clear: both;
    }
  }
  .left-img {
    width: 20%;
    float: left;
    padding-right: 20px;
    box-sizing: border-box;
    position: relative;
  }
  .left-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .left-info {
    float: left; 
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .right-info{
    float: right; 
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tit {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
    
  }
  .competition-status {
    padding: 4px;
    display: inline-block;
    background-color: #FECC09;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px 1px;
  }
  .title {
    color: #020202;
    text-align: left;
  }
  .competition-info {
    font-size: 16px;
    color: #666;
  }
  .item-tit {
    font-weight: bold;
    color: #666;
    display: inline-block;
    min-width: 80px;
    text-align: left;
  }
  .details {
    padding: 5px;
    float: right;
    color: #7341C2;
    align-self: flex-end;
  }
  .item-status {
    font-size: 14px;
    color: #B3B3B3;
    margin: 10px;
    margin-left: 20px;
    margin-bottom: 30%;
  }
  .login-button {
    font-size: 20px;
    width: 160px;
    height: 60px;
    line-height: 30px;
    text-align: center;
    background-color: #7341C2;
    color: #fff;
    border-radius: 5px;
    margin-top: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    text-align: left;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

</style>