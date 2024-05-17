<template>
    <div class="box">
      <div class="mini-box">
        <div class="main-title">
          我的学业>能力画像
        </div>
        <div class="top-box">
          <Top/>
        </div>
        <div class="middle">
          <h2>能力画像</h2>
          <div class="chart">
            <div class="mini-chart">
                <div id="radarChart" style="width: 600px; height: 400px;"></div>
            </div>
            <div class="chart-data">
            <div class="scoreInfo">
                <div class="status-container">
                    <div class="online-dot1"></div>
                    <h4>学生能力</h4>
                </div>
                <ul>
                    <li v-for="item in getAbilityList()" :key="item.name">{{ item.name }}: {{ item.score }}</li>
                </ul>
            </div>
            <div class="scoreInfo">
                <div class="status-container">
                    <div class="online-dot2"></div>
                    <h4>平均能力</h4>
                </div>
                <ul>
                    <li v-for="item in getAverageList()" :key="item.name">{{ item.name }}: {{ item.score }}</li>
                </ul>
            </div>
            </div>
          </div>
        </div>
        <div class="bottom">
        <div class="comment-card">
            <div class="body">
                <p><strong>评价:</strong> </p>{{ evaluate }}
                <p><strong>建议:</strong> </p>{{ proposal }}
            </div>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Top from './top.vue'
  import * as echarts from "echarts";
  export default {
    name: 'ClassScorePage',
    data() {
      return {
        ability: [77, 73, 85, 89, 78, 80],
        average: [70, 80, 75, 80, 70, 90],
        indicator: [
            { name: '学术成就', max: 100, description: '学术成就的提示信息' },
            { name: '社会适应能力', max: 100, description: '学术成就的提示信息'  },
            { name: '团队合作', max: 100, description: '学术成就的提示信息'  },
            { name: '自我学习能力', max: 100, description: '学术成就的提示信息'  },
            { name: '创新能力', max: 100, description: '学术成就的提示信息'  },
            { name: '实践技能', max: 100, description: '学术成就的提示信息'  }
          ],
        evaluate: '张三在本学期的数学学习中表现优异，成绩稳步提升。',
        proposal: '继续保持目前的学习态度，多做题目巩固知识。'
      };
    },
    mounted() {
        this.drawRadarChart()
    },
    components: {
        Top,
    },
    created() {

    },
    computed: {

    },
    methods: {
        getAbilityList() {
      return this.indicator.map((item, index) => ({
        name: item.name,
        score: this.ability[index]
      }));
    },
    getAverageList() {
        return this.indicator.map((item, index) => ({
        name: item.name,
        score: this.average[index]
      }));
    },
      //网络请求
      load(){
        let params = {
          id: localStorage.getItem('id')
        };
        if (this.$store.state.term !== "0") {
          params.term = this.$store.state.term
        }
        this.request.get("/api/user/pic/getclass", {params})
      .then(res => {
            this.grades = res.data
        })
        .catch(error => {
          console.error(error);
        });
      },
      // 弹窗 点击出现弹窗
      addClick() {
        this.$store.dispatch('updateAddGradesShow');
      },
      drawRadarChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('radarChart'))
      
      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          show: false
        },
        legend: {
            data: ['学生能力维度', '平均能力维度'], // 图例数据
            bottom: -5
        },
        radar: {
          // 雷达图的指示器，用来指定雷达图中的多个变量（维度）
          indicator: this.indicator.map((item) => ({
            name: item.name,
            max: item.max
          })),
          shape: 'polygon', // 设置为多边形
          splitNumber: 5, // 设置网格的层数
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
           }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.3)',
              width: 2
            }
          },
          axisLabel: { // 轴标签（即标度）
            show: false, // 显示标签
            formatter: function(value) {
                return value;
            }
            },
          splitArea: {
            areaStyle: {
              color: ['rgba(255, 255, 255, 0.1)']
            }
          }
        },
        series: [{
          name: '雷达图',
          type: 'radar',
          emphasis: {
          label: {
            show: true, // 鼠标悬停时显示标签
            formatter: function(params) {
                return params.value; // 标签内容为数据值
            }
           }
          },
          data: [
            {
              value: this.ability,
              name: '学生能力维度',
              areaStyle: {
                normal: {
                    color: 'rgba(255, 140, 0, 0.3)' // 第一组数据的颜色
                }
            }
            },
            {
              value: this.average,
              name: '平均能力维度',
              areaStyle: {
              normal: {
                  color: 'rgba(0, 140, 255, 0.3)' // 第二组数据的颜色
              }
              }
           }
          ],
          areaStyle: {
            normal: {
              color: 'rgba(255, 140, 0, 0.3)'
            }
          }
        }]
      }
      
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
     
    }
    }
  };
  </script>
  <style lang="less" scoped>
    #radarChart {
        /* 样式调整 */
    }
    .box {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mini-box {
      width: 962px;
      //width: auto;
    }
    .top-box {
      box-sizing: border-box;
      width: 100%;
      margin-bottom: 30px;
      padding: 20px;
      border-radius: 10px;
      background-color: #fff;
    }
    .classItem {
        display: flex;
        flex-wrap: wrap;
    }
    h2 {
      text-align: left;
      margin: 20px;
    }

    .chart {
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .middle {
      box-sizing: border-box;
      width: 100%;
      padding: 20px;
      border-radius: 10px;

      background-color: #fff;
      margin-top: 30px;
    }
    .bottom{
      box-sizing: border-box;
      width: 100%;
      padding: 20px;
      border-radius: 10px;

      background-color: #fff;
      margin-top: 30px;
    }
    .main-title {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .chart {
  display: flex;
  justify-content: space-between;
}

.mini-chart, .chart-data {
  flex: 1;
}

.chart-data {
  margin-left: 20px; /* 根据需要调整间距 */
  display: flex;
  flex-wrap: wrap;
  gap: 5px; /* Optional: gap between the scoreInfo elements */
}

.chart-data ul {
  list-style-type: none;
  padding: 0;
}

.chart-data li {
  margin-bottom: 10px; /* 根据需要调整间距 */
}
.comment-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.scoreInfo {
  color: #FFFFFF;
//   display: inline-block;
  background-color: #545454; /* Optional: background color for better visualization */
  padding: 10px; /* Optional: padding for better visualization */
  border: 1px solid #ddd; /* Optional: border for better visualization */
  border-radius: 10px; /* Optional: border radius for better visualization */
}
.status-container {
  display: inline-block; /* 使内部元素水平排列 */
  vertical-align: middle;
}
.online-dot1 {
  width: 15px; /* 定义小圆点的宽度 */
  height: 15px; /* 定义小圆点的高度 */
  border-radius: 50%; /* 将小圆点的形状设为圆形 */
  display: inline-block; /* 将元素显示为行内块级元素 */
  margin-right: 5px; /* 可选：增加右边距以便于布局 */
  background-color: green;
}
.online-dot2 {
  width: 15px; /* 定义小圆点的宽度 */
  height: 15px; /* 定义小圆点的高度 */
  border-radius: 50%; /* 将小圆点的形状设为圆形 */
  display: inline-block; /* 将元素显示为行内块级元素 */
  margin-right: 5px; /* 可选：增加右边距以便于布局 */
  background-color: skyblue;
}
h4 {
  display: inline; /* 修改为内联元素 */
}
  </style>