<template>
    <div class="box">
      <div class="score-inall">
        <div class="progress-ring" :width="radius * 2+24" :height="radius * 2+24">
            <svg :width="radius * 2+24" :height="radius * 2+24">
              <circle
            class="progress-ring__circle"
            stroke="#F4EDFF"
            :stroke-dasharray="circumference + ' ' + circumference"
            stroke-width="12"
            fill="transparent"
            stroke-linecap="round"  
            :r="normalizedRadius"
            :cx="radius+12"
            :cy="radius+12"
            />
            <circle
            class="progress-ring__circle"
            stroke="#581BB7"
            :stroke-dasharray="circumference + ' ' + circumference"
            :style="{ strokeDashoffset: strokeDashoffset + 'px' }"
            stroke-width="12"
            fill="transparent"
            stroke-linecap="round"  
            :r="normalizedRadius"
            :cx="radius+12"
            :cy="radius+12"
            />
          <text x="50%" y="50%" text-anchor="middle" stroke="#D8BFD8" stroke-width="0px" dy=".3em" style="font-size: 40px;"><tspan style="">{{ progress }}</tspan> <tspan style="font-size: 30px;word-spacing: -20;" > 分</tspan></text>
        </svg>
        </div>
       
      </div>
      <div class="info">
      <h2 class="top-title">第一课堂总成绩</h2>
        <table>
          <tr>
            <td><p>姓名：<strong>{{ information.username }}</strong></p></td> <td> <p>学院：<strong>{{ information.college }}</strong></p></td>
          </tr>
          <tr>
            <td><p>专业：<strong>{{ information.speciality }}</strong></p></td><td><p>排名：<strong>{{ information.rank }}</strong></p></td>
          </tr>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ClassScoreTop',
    data() {
      return {
        information: {
                name: '阿发',
                college: '计算机科学与技术学院',
                major: '智能科学与技术',
                grade: '2019'
            },
        radius: 60,
        progress: 80
      };
    },
    created() {
      this.load()
    },
    mounted() {
      
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
      load(){
        this.request.get("/api/user/pic/getscore", {
          params: {
            id: localStorage.getItem('id')
          }
        })
      .then(res => {
            this.information = res.data
            this.progress = res.data.sumgrade
        })
        .catch(error => {
          console.log("请求未正常返回")
          console.error(error);
        });
      }
    }
  };
  </script>
  <style lang="less" scoped>
  .box {
    
    display: flex;
    position: relative;
    height: auto;
    flex-direction: row-reverse;
    align-items: stretch;
    flex-grow: 1;
  }
  .progress-ring__circle {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  .score-inall {
    width: 20%;
    left: auto;
    right: 0;
  }

  .progress-ring, .top-title {
    text-align: center;
  }
  .info {
    margin-right: 20%;
    width: 70%;
    left: 0;
    right: auto;

  }
  td {
    text-align:left;
    font-size: auto;
    }
  table {
    border-collapse: separate;
    text-align: left;
    width: 100%; 
    height: 100%;
  }
  td {
    width: 50%;
    border-spacing:50px;
    font-size: 18px;
  }
.top-title{
  float: left;
  clear: both;
  width: 100%;
  text-align: left;

}
</style>