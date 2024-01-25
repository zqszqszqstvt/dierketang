<template>
    <div class="box">
      <div class="score-inall">
        <div class="progress-ring">
          <el-progress type="circle" :percentage=progress :color=color :stroke-width="10" :width="radius * 2" style="margin-top: 20px">
            <span style="font-weight: bold;color: black">{{progress}}<span style="font-size: 20px">{{ score }}</span>分</span>
          </el-progress>
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