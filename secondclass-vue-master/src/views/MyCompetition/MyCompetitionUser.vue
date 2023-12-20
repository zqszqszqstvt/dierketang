<template>
  <div class="profile" v-if="userInfo">
    <div class="user">
      <img :src="userInfo.avatarUrl" alt="头像" class="avatar">
      <div class="user-info">
        <h2>{{ userInfo.nickname }}</h2>
        <p>{{ userInfo.profession }}</p>
      </div>
    </div>
    <div class="score">
      <svg class="progress-ring" :width="radius * 2 + 12" :height="radius * 2 + 12">
        <circle
            class="progress-ring__circle"
            stroke="#F4EDFF"
            stroke-width="12"
            fill="transparent"
            :r="normalizedRadius"
            :cx="radius + 6"
            :cy="radius + 6"
            />
        <circle
            class="progress-ring__circle"
            stroke="#581BB7"
            :stroke-dasharray="circumference + ' ' + circumference"
            :style="{ strokeDashoffset: strokeDashoffset + 'px' }"
            stroke-width="12"
            fill="transparent"
            :r="normalizedRadius"
            :cx="radius + 6"
            :cy="radius + 6"
            stroke-linecap="round"
            />
        <text x="50%" y="50%" text-anchor="middle" stroke="#D8BFD8" stroke-width="2px" dy=".3em" style="font-size: 40px;">{{ progress }}</text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCompetitionUser',
  data() {
    return {
      userInfo: null,
      radius: 50,
      progress: 0
    };
  },
  created() {
    // axios.get('你的API地址')
    //   .then(response => {
    //     this.userInfo = response.data;
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    this.userInfo={
        avatarUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fae4eb3f2-ae53-4943-bdc9-0d6e105210c6%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704613130&t=3f91b14fd970d4fd00df2bb1d991e440',
        nickname:'阿发',
        profession:'智能科学与技术'
      }
    this.progress=50
  },
   props: {
  },
  computed: {
    normalizedRadius() {
      return this.radius - 2;
    },
    circumference() {
      return 2 * Math.PI * this.normalizedRadius;
    },
    strokeDashoffset() {
        return ((100 - this.progress) / 100) * this.circumference;
      }
  }
};
</script>
<style lang="less" scoped>
.profile {
  text-align: center;
  padding: 20px;
  background-color: #fff;
  display: flex;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}
.user {
  display: flex;
  padding: 10px;
  margin-left: 50px;
}
.score {
  padding: 10px;
  margin-right: 50px;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.user-info {
    margin-top: 20px;
    margin-left: 10px;

    p {

    }
}
.profile h2, .profile p {
  margin: 0 0 10px 0;
}

.progress-ring__circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>