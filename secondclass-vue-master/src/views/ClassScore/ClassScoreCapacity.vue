<template>
    <div>
      <div style="display: flex;">
        <div class="radar">
          <canvas id="radarChart" width="400" height="400"></canvas>
        </div>
        <div class="radar2">
          <canvas id="lineChart" width="400" height="400"></canvas>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);

  
  export default {
  name: 'ClassScoreCapacity',
  data() {
    return {
      abilities: [],
      abilityData: [],
      years: [],
      scores: [],
      radarChart: null,
      lineChart: null
    }
  },
  watch: {
    '$route': 'fetchDataAndCreateCharts'
  },
  beforeDestroy() {
    if (this.radarChart) {
      this.radarChart.destroy();
      this.radarChart = null;
    }
    if (this.lineChart) {
      this.lineChart.destroy();
      this.lineChart = null;
    }
  },
  async mounted() {
    this.fetchDataAndCreateCharts();
    
  },
  activated() {
    this.fetchDataAndCreateCharts();
  },
  methods: {
    async fetchDataAndCreateCharts() {
      // 获取数据
      const data = await this.getData();

      // 更新组件的数据
      this.abilities = data.abilities;
      this.abilityData = data.abilityData;
      this.years = data.years;
      this.scores = data.scores;

      // 销毁旧的图表实例
      if (this.radarChart) {
        this.radarChart.destroy();
        this.radarChart = null;
      }
      if (this.lineChart) {
        this.lineChart.destroy();
        this.lineChart = null;
      }

      // 等待DOM更新完成
      await this.$nextTick();

      // 创建新的图表实例
      this.createCharts();
    },
    async createCharts() {
      await this.$nextTick();
      // // 清空canvas元素
      // var ctxRadar = document.getElementById('radarChart');
      // ctxRadar.innerHTML = '';
      // var ctxLine = document.getElementById('lineChart');
      // ctxLine.innerHTML = '';
      // 创建雷达图
      var ctxRadar = document.getElementById('radarChart').getContext('2d');
      var ctxLine = document.getElementById('lineChart').getContext('2d');
      this.radarChart = new Chart(ctxRadar, {
        type: 'radar',
        data: {
          labels: this.abilities,
          datasets: [{
            label: '能力',
            data: this.abilityData,
            backgroundColor: 'rgba(0, 123, 255, 0.5)'
          }]
        }
      });

      // 创建折线图
      
      this.lineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
          labels: this.years,
          datasets: [{
            label: '成绩',
            data: this.scores,
            borderColor: 'rgba(0, 123, 255, 1)',
            fill: false
          }]
        }
      });
    },
    async getData() {  //异步请求数据
        // try {
        //     // 发送GET请求到你的API端点
        //     const response = await fetch('https://your-api-endpoint.com/data');

        //     // 检查响应状态
        //     if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        //     }

        //     // 解析响应数据
        //     const data = await response.json();

        //     // 返回数据
        //     return data;
        // } catch (error) {
        //     console.error('There was a problem with the fetch operation: ', error);
        // }

        let data = {
            "abilities": ["数学", "英语", "专业", "政治", "实践"],
            "abilityData": [80, 90, 75, 85, 95],
            "years": ["第一年", "第二年", "第三年", "第四年"],
            "scores": [85, 88, 90, 92]
        }
        return data;

    }
  }
}

  </script>
  
  <style scoped lang="less">
  .radar{
    margin-right: 15%;
  }
  </style>