<template>
  <div class="profile" v-if="userInfo">
    <div class="user">
      <img :src="userInfo.avatarUrl" alt="头像" class="avatar">
      <div class="user-info">
        <h2>{{ userInfo.username }}</h2>
        <p>{{ userInfo.speciality }}</p>
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
        <text x="50%" y="50%" text-anchor="middle" stroke="#000000" stroke-width="2px" dy=".3em" style="font-size: 40px;">{{ progress }}</text>
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
    this.load()
  },
  methods: {
    load(){
        this.request.get("/api/user/pic/top", {
          params: {
            id: localStorage.getItem('id')
          }
        })
      .then(res => {
            this.userInfo = res.data
            this.progress = Math.round(this.userInfo.socre)
        })
        .catch(error => {
          console.error(error);
        });

      }
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