<template>
    <div class="box">
      <div class="score-inall">
        <div class="progress-ring">
            <svg :width="radius * 2" :height="radius * 2">
            <circle
            class="progress-ring__circle"
            stroke="#800080"
            :stroke-dasharray="circumference + ' ' + circumference"
            :style="{ strokeDashoffset: strokeDashoffset + 'px' }"
            stroke-width="5"
            fill="transparent"
            :r="normalizedRadius"
            :cx="radius"
            :cy="radius"
            />
          <text x="50%" y="50%" text-anchor="middle" stroke="#D8BFD8" stroke-width="2px" dy=".3em" style="font-size: 40px;">{{ progress }}</text>
        </svg>
        </div>
        <h3 class="top-title">第一课堂总成绩</h3>
      </div>
      <div class="info">
        <h3>学生信息</h3>
        <p><strong>姓名：</strong>{{ information.name }}</p>
        <p><strong>学院：</strong>{{ information.college }}</p>
        <p><strong>专业：</strong>{{ information.major }}</p>
        <p><strong>年级：</strong>{{ information.grade }}级</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ClassScoreTop',
    data() {
      return {
        information: null,
        radius: 80,
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
      this.network()
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
    },
    methods: {
        network() {
            this.progress=80
            this.information={
                name: '阿发',
                college: '计算机科学与技术学院、人工智能学院',
                major: '智能科学与技术',
                grade: '2019'
            }
        }
    }
  };
  </script>
  <style lang="less" scoped>
  .box {
    width: 1000px;
    display: flex;
  }
  .progress-ring__circle {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  .score-inall {
    width: 140px;
  }

  .progress-ring, .top-title {
    text-align: center;
  }
  .info {
    margin-left: 30%;
  }
  </style>