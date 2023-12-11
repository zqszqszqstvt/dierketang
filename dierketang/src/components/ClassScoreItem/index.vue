<template>
    <div class="box">
      <div class="score-inall">
        <div class="progress-ring">
            <svg :width="radius * 2" :height="radius * 2">
            <circle
            class="progress-ring__circle"
            :stroke="color"
            :stroke-dasharray="circumference + ' ' + circumference"
            :style="{ strokeDashoffset: strokeDashoffset + 'px' }"
            stroke-width="4"
            fill="transparent"
            :r="normalizedRadius"
            :cx="radius"
            :cy="radius"
            />
          <text x="50%" y="50%" text-anchor="middle" :stroke="color" stroke-width="2px" dy=".3em" style="font-size: 30px;">{{ progress }}</text>
        </svg>
        </div>
        <h5 class="top-title">{{ grade.subject }}</h5>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ClassScoreTop',
    data() {
      return {
        radius: 30,
        progress: 0,
      };
    },
    created() {
      this.progress = Number(this.grade.score);
    },
     props: {
        grade: {
            type: Object,
            required: true
        }
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
      },
      color() {
        if(this.progress >= 90 && this.progress <= 100) {
            return 'green'
        }else if(this.progress >= 80 && this.progress < 90) {
            return 'orange'
        }else if(this.progress >= 60 && this.progress < 80) {
            return 'orange'
        }else if(this.progress < 60) {
            return 'red'
        }
      }
    },
    methods: {
    }
  };
  </script>
  <style lang="less" scoped>
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #F0F0F0;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 20px;
    margin-right: 20px;
    width: 100px;
}

  .progress-ring__circle {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  .progress-ring, .top-title {
    text-align: center;
  }

  </style>