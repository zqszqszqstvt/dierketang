<template>
    <div class="box">
      <div class="score-inall">
        <div class="progress-ring">
            <svg :width="radius * 2+20" :height="radius * 2+20">

              <circle
            class="progress-ring__circle" id="c2"
            :stroke="color2"
            :stroke-dasharray="circumference + ' ' + circumference"
            r=" radius"
            stroke-width="12"
            fill="transparent"
            stroke-linecap="round"  
            :r="normalizedRadius"
            :cx="radius+12"
            :cy="radius+12"
            />
                <circle
            class="progress-ring__circle" id="c1"
            :stroke="color"
            :stroke-dasharray="circumference + ' ' + circumference"
            :style="{ strokeDashoffset: strokeDashoffset + 'px' }"
            stroke-width="12"
            fill="transparent"
            stroke-linecap="round"  
            :r="normalizedRadius"
            :cx="radius+12"
            :cy="radius+12"
            />
          <text x="50%" y="50%" text-anchor="middle" :stroke="color" stroke-width="0px" dy=".3em" style="font-size: 30px;">{{ progress }}<tspan style="font-size: 20px;word-spacing: -20;" > 分</tspan></text>
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
        radius: 60,
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
            return '#581BB7'
        }else if(this.progress >= 75 && this.progress < 90) {
            return '#581BB7'
        }else if(this.progress >= 60 && this.progress < 75) {
            return '#3CA2FF'
        }else if(this.progress < 60) {
            return '#FFB701'
        }
      }
      ,color2(){
        if(this.progress >= 90 && this.progress <= 100) {
            return '#F4EDFF'
        }else if(this.progress >= 75 && this.progress < 90) {
            return '#F4EDFF'
        }else if(this.progress >= 60 && this.progress < 75) {
            return '#E4F2FF'
        }else if(this.progress < 60) {
            return '#FFF5DB'
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
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
    margin-right: 20px;
    width: 13%;
    overflow: auto;  
    
}

  .progress-ring__circle {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .progress-ring, .top-title {
    text-align: center;
  }
 .score-inall{
  width: 100%;
 }

  </style>