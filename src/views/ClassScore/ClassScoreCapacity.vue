<template>
    <div>
      <div style="display: flex;">
        <div class="radar">
          <canvas id="radarChart" width="370" height="370"></canvas>
        </div>
        <div class="radar2">
          <canvas id="lineChart" width="370" height="370"></canvas>
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
      // await this.$nextTick();
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
    termToYear(term) {
      return '第' + term + '年';
    },
    async getData() {
  try {
    const res1 = await this.request.get("/api/user/pic/mygradepic", {
      params: {
        id: localStorage.getItem('id')
      }
    });

    let line_score = res1.data.list.map(item => item.grade ?? 0);
    let line_term = res1.data.list.map(item => item.term).map(this.termToYear);

    const res2 = await this.request.get("/api/user/pic/mypic", {
      params: {
        id: localStorage.getItem('id')
      }
    });

    let abi_score, abi_type;
    if (res2.data && typeof res2.data === 'object') {
      abi_type = Object.keys(res2.data);
      abi_score = Object.values(res2.data);
    } else {
      console.error('Expected res.data to be an object, but got:', res2.data);
    }

    let data = {
      "abilities": abi_type,
      "abilityData": abi_score,
      "years": line_term,
      "scores": line_score
    }

    console.log("总数据", data)
    return data;
  } catch (error) {
    console.error(error);
  }
}

  }
}
  </script>
  
  <style scoped lang="less">
  .radar{
    margin-right: 15%;
  }
  </style>