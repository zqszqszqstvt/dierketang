<template>
  <div class="box">
    <div class="left-info">
      <h3 class="tit">
        <em class="competition-status">
          正在报名
        </em>
        <em class="title">
          {{ competition.title }}
        </em>
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
      <div class="login-button">
        报名请查看
      </div>
      <div class="details">
        <a :href="competition.link" class="common-after-icon v-4-6 event-detail-manage-btn" target="_blank">竞赛详情</a>
      </div>
      <div class="item-status">
        距离报名截止还有 {{ competition.remainingDays }} 天
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      competition: {
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
        link: 'https://www.saikr.com/vse/cwctic/2023',
        organizer: '四川省翻译协会 陕西省翻译协会 广西翻译协会 河南省翻译协会 河北省翻译协会 甘肃省翻译工作者协会 宁夏翻译协会 安徽省翻译协会 重庆翻译学会 哈尔滨市翻译协会 山西省翻译协会 贵州省翻译协会 黑龙江省翻译协会 深圳市翻译协会',
        level: '全国性',
        registrationTime: '2023.10.21 ～ 2023.12.29',
        competitionTime: '2023.12.30 ～ 2023.12.31',
        remainingDays: 23
      }
    };
  }
};
</script>
<style lang="less" scoped>
  .box {
    margin: 5px;
    width: 50%;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-sizing: border-box;
     &:after {
      content: "";
      display: table;
      clear: both;
    }
  }
  .left-info {
    float: left; 
    width: 80%;
  }
  .right-info{
    padding-top: 50px;
    float: right; 
    width: 20%;
  }
  .tit {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
    
  }
  .competition-status {
    font-weight: bold;
  }
  .title {
    color: #007BFF;
    text-align: left;
  }
  .competition-info {
    font-size: 16px;
    color: #666;
  }
  .item-tit {
    font-weight: bold;
    color: #333;
    display: inline-block;
    min-width: 80px;
    text-align: left;
  }
  .login-button {
    padding: 5px;
  }
  .item-status {
    font-size: 14px;
    color: #f00;
    margin: 10px;
  }
  .details {
    font-size: 16px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #007BFF;
    color: #fff;
    border-radius: 5px;
    margin-left: 20px;
    
  }
  p {
    text-align: left;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

</style>

