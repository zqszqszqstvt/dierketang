<template>
<el-container class="dp-container">
  <Navigate/>
  <el-header class="dp-header">
<!--    头部-->
    <h1 class="dp-title">第二课堂大屏分析</h1>
    <div class="showTime">{{time}}</div>
  </el-header>
<!--页面主体部分-->
  <el-main class="dp-main"><!-- class=“mainbox” -->
    <el-row>
      <el-col :span="7">
        <div class="panel bar">
          <h2>竞赛参与情况</h2>
          <div id="chart-1" class="chart">

          </div>
          <div class="panel-footer">
          </div>
        </div>
        <div class="panel line">
          <h2>技术掌握情况</h2>
          <div id="chart-2" class="chart"></div>
          <div class="panel-footer">
          </div>
        </div>
        <div class="panel pie">
          <h2>网页访问量</h2>
          <div id="chart-3" class="chart"></div>
          <div class="panel-footer">
          </div>
        </div>
      </el-col>
      <el-col :span="9" style="margin: 10px 10px">
<!--        数字与地图模块-->
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>123456</li>
              <li>23123</li>
              <li>23123</li>
              <li>23123</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>软件工程</li>
              <li>网络空间安全</li>
              <li>智能科学技术</li>
              <li>其他</li>
            </ul>
          </div>
        </div>
<!--  地图模块      -->
        <div class="map">
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="chart">
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="panel">
          <h2>夏令营浏览情况</h2>
          <div  id="chart-4" class="chart"></div>
          <div class="panel-footer">
          </div>
        </div>
        <div class="panel">
          <h2>公司浏览情况</h2>
          <div id="chart-5" class="chart"></div>
          <div class="panel-footer">
          </div>
        </div>
        <div class="panel">
          <h2>课程学习情况</h2>
          <div id="chart-6" class="chart"></div>
          <div class="panel-footer">
          </div>
        </div>
      </el-col>
    </el-row>
  </el-main>
</el-container>
</template>

<script>
import * as echarts from 'echarts'
import Navigate from "@/components/Navigate";
import Page from "@/components/Page";
export default {
  name: "DP",
  components:{
    Navigate,Page
  },
  data(){
    return {
      time:'',
      t:null,
      // 指定图表的配置项和数据
      chart1_option : {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '1%',
          right: '1%',
          top:'5%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['蓝桥杯','互联网+','数学建模','程序设计','挑战杯'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              interval: 0 // 取消隔行显示
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '参与人数',
            type: 'bar',
            barWidth: '50%',
            data: [10, 52, 200, 334, 390]
          }
        ]
      },
      chart2_option:{

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [30, 60],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 20, name: 'C++' },
              { value: 38, name: 'Java' },
              { value: 32, name: 'Python' },
              { value: 30, name: 'Go' },
              { value: 28, name: 'PHP' },
              { value: 6, name: 'Matlab' },
            ]
          }
        ]
      },
      chart3_option:{
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top:'4%',
          left:'0%',
          right:'5.5%',
          bottom: '1%',
          containLabel: true
        },
        toolbox: {
          feature: {
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2022.10', '2022.11','2022.12', '2023.1', '2023.2','2023.3'],
          axisLabel: {
            interval: 0 // 取消隔行显示
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'count',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230]
          }
        ]
      },
      chart4_option : {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '1%',
          right: '1%',
          top:'5%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value',
            splitLine: {
              show:false
            }
          }
        ],
        yAxis: [
          {
            type: 'category',
            data: ['浙江大学','电子科技大学','武汉大学','华中科技大学','复旦大学'],
          }
        ],
        series: [
          {
            name: '参与人数',
            type: 'bar',
            barWidth: '50%',
            data: [10, 52, 200, 334, 390]
          }
        ]
      },
      chart5_option : {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '1%',
          right: '1%',
          top:'5%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['华为','金山','小米','腾讯','字节跳动'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              interval: 0 // 取消隔行显示
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '参与人数',
            type: 'bar',
            barWidth: '50%',
            data: [10, 52, 200, 334, 390]
          }
        ]
      },
      chart6_option : {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '0%',
          right: '0%',
          top:'5%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['408','Spring','SpringCloud','Python','Django'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              interval: 0 // 取消隔行显示
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '参与人数',
            type: 'bar',
            barWidth: '50%',
            data: [200, 52, 23, 234, 390]
          }
        ]
      },
    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let chart_1 = echarts.init(document.getElementById('chart-1'));
    let chart_2 = echarts.init(document.getElementById('chart-2'));
    let chart_3 = echarts.init(document.getElementById('chart-3'));
    let chart_4 = echarts.init(document.getElementById('chart-4'));
    let chart_5 = echarts.init(document.getElementById('chart-5'));
    let chart_6 = echarts.init(document.getElementById('chart-6'));
    // 使用刚指定的配置项和数据显示图表。
    chart_1.setOption(this.chart1_option);
    chart_2.setOption(this.chart2_option);
    chart_3.setOption(this.chart3_option);
    chart_4.setOption(this.chart4_option);
    chart_5.setOption(this.chart5_option);
    chart_6.setOption(this.chart6_option);
  },
  created(){
    this.t = setTimeout(this.showTime,1000);
    this.showTime();
  },
  methods:{
    showTime(){
      clearTimeout(this.t);
      let dt = new Date();
      let y = dt.getFullYear();//年
      let mt = dt.getMonth() +1;
      let day = dt.getDate();
      let h =dt.getHours();
      let m =dt.getMinutes();
      let s = dt.getSeconds();
      this.time = '当前时间:'+y+'年'+mt+'月'+day+'日'+'-'+h+'时'+m+"分"+s+"秒";
      this.t = setTimeout(this.showTime, 1000)
    }
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding: 0;
}
li{
  list-style: none;
}
/*声明字体*/
@font-face {
  font-family: electronicFont;
  src: url("../font/DS-DIGIT.TTF");
}
.dp-container{
  background: url("../assets/bg.jpg") no-repeat;
  background-size: 100% 100%;
}
.dp-header{
  position: relative;
  background: url("../assets/top_bj.png") no-repeat;
  background-size: 100% 100%;
  background-color: RGB(1,11,71);
  line-height: 80px;
}
.dp-main{
  min-width: 1024px;
  max-width: 1920px;
  height: 115vh;
  padding: 10px 10px 0;
}
.dp-title{
  font-size: 30px;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.showTime{
  position: absolute;
  top: 0;
  right: 1%;
  color: rgba(255,255,255,0.7);
  font-size: 19px;
}
.dp-main .panel{
  position: relative;
  height: calc(40vh - 100px);
  border: 1px solid rgba(25,186,139,0.17);
  background: url("../assets/line(1).png") rgba(255,255,255,0.04);
  padding: 0 15px 40px;
  margin-bottom: 5px;
}
.dp-main .panel:before{
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-left: 2px solid #02a6b5;
  border-top: 2px solid #02a6b5;
  content: "";
}
.dp-main .panel:after{
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-right: 2px solid #02a6b5;
  border-top: 2px solid #02a6b5;
  content: "";
}
.dp-main .panel .panel-footer:before{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-left: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
  content: "";
}
.dp-main .panel .panel-footer:after{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-right: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
  content: "";
}
.dp-main .panel h2{
  height: 48px;
  color: #fff;
  line-height: 48px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
}
.dp-main .panel .chart{
  height: 22vh;
}
.no{
  background: rgba(101,132,226,0.1);
  padding: 15px;
}
.no .no-hd{
  position: relative;
  border: 1px solid rgba(25,186,139,0.17);
}
.no .no-hd:before{
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  width: 30px;
  height: 10px;
  border-left: 2px solid #02a6b5;
  border-top: 2px solid #02a6b5;
}
.no .no-hd:after{
  position: absolute;
  bottom: 0;
  right: 0;
  content: '';
  width: 30px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
}
.no .no-hd ul{
  display: flex;
}
.no .no-hd ul li{
  flex:1;
  font-size: 30px;
  color: #ffeb7b;
  text-align: center;
  font-family: "electronicFont";
}
.no .no-bd ul{
  display: flex;
}
.no .no-bd ul li{
  flex:1;
  text-align: center;
  color: rgba(255,255,255,0.7);
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.map{
  position: relative;
  height: 78vh;
}
.map .map1{
  position: absolute;
  width: 33vw;
  height: 60vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: url("../assets/map.png") no-repeat;
  background-size: 100% 100%;
  opacity: 0.3;
}
.map .map2{
  position: absolute;
  top: 6%;
  left: -3%;
  transform: translate(-50%,-50%);
  width: 38vw;
  height: 70vh;
  background: url("../assets/lbx.png") no-repeat;
  background-size: 100% 100%;
  animation: rotate1 15s infinite linear;
}
.map .chart{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 78vh;
}
@keyframes rotate1 {
  0%{
    /*transform: translate(-50%,-50%);*/
    transform: rotate(0deg);
  }
  100%{
    /*transform: translate(-50%,-50%);*/
    transform: rotate(360deg);
  }
}
</style>
