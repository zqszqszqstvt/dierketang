<template>
  <div>
    <div class="fl event4-1-detail-box">
      <h3 class="tit">
        <em class="common-font">
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

    <div class="right">
      <div class="login-button">
        报名请登录
      </div>
      <div class="item-status">
        距离报名截止还有 {{ competition.remainingDays }} 天
      </div>
      <div class="details">
        <a :href="competition.link" class="common-after-icon v-4-6 event-detail-manage-btn" target="_blank">竞赛详情</a>
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
        remainingDays: 23,
      },
    };
  },
};
</script>
<style lang="less" scoped>
  
</style>