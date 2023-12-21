<template>
    <div class="box">
      <div class="info">
        <h2 class="top-title">第一课堂总成绩</h2>
        <table>
          <tr>
            <td><p>姓名：<strong>{{ information.name }}</strong></p></td> <td> <p>学院：<strong>{{ information.college }}</strong></p></td>
          </tr>
          <tr>
            <td><p>专业：<strong>{{ information.major }}</strong></p></td><td><p>年级：<strong>{{ information.grade }}级</strong></p></td>
          </tr>
        </table>
      </div>
      <div class="score-inall">
        <div class="progress-ring">
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
            <text x="50%" y="50%" text-anchor="middle" stroke="#000000" stroke-width="2px" dy=".3em" style="font-size: 35px;">{{ progress }}分</text>
          </svg>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ClassScoreTop',
    data() {
      return {
        information: null,
        radius: 60,
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
                college: '计算机科学与技术学院',
                major: '智能科学与技术',
                grade: '2019'
            }
        }
        
    }
  };
  </script>
  <style lang="less" scoped>
  .box {
    display: flex;
    position: relative;
    height: auto;
    /* 或使用其他合适的值 */  
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
    right: 0; /* 或其他值 */ 
  }
  .progress-ring, .top-title {
    text-align: center;
  }
  .info {
    margin-right: 30%;
    width: 60%;
    left: 0;
    right: auto;
  }
  td
  {
  text-align:left;
  font-size: auto;
  }
  table
{
border-collapse: separate;
text-align: left;
width: 100%; 
height: 100%;
}
td{
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