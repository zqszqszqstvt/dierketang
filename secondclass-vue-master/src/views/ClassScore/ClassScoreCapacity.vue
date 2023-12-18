<template>
    <div>
      <div style="display: flex;">
        <div class="radar">
          <canvas id="radarChart" width="400" height="400"></canvas>
        </div>
        <div>
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
      scores: []
    }
  },
  async mounted() {
    // 在这里发送网络请求获取数据
    // 假设getData是一个异步函数，它从服务器获取数据并返回一个Promise
    const data = await this.getData();

    // 更新组件的数据
    this.abilities = data.abilities;
    this.abilityData = data.abilityData;
    this.years = data.years;
    this.scores = data.scores;

    // 数据请求完成后，创建图表
    this.createCharts();
  },
  methods: {
    createCharts() {
      // 创建雷达图
      var ctxRadar = document.getElementById('radarChart').getContext('2d');
      new Chart(ctxRadar, {
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
      var ctxLine = document.getElementById('lineChart').getContext('2d');
      new Chart(ctxLine, {
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

  </style>