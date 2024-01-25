<template>
    <div class="box">
      <!-- 竞赛级别和排序方式 -->
      <div class="minibox">
        <div class="item-box clearfix">
          <h3 class="fl item-title">行业类别：</h3>
          <div class="fl item-con clearfix">
            <div v-for="(item, lIndex) in industrys" :key="lIndex" class="item item-link" :class="{ active: item.active }" @click="handleIndustryClick(item.name)">{{ item.name }}</div>
          </div>
        </div>
        <hr style="border: none; border-top: 1px dashed #D3D3D3;">
        <div class="item-box clearfix">
          <h3 class="fl item-title">公司性质：</h3>
          <div class="fl item-con clearfix">
            <div v-for="(item, lIndex) in companys" :key="lIndex" class="item item-link" :class="{ active: item.active }" @click="handleCompanyClick(item.name)">{{ item.name }}</div>
          </div>
        </div>
        <hr style="border: none; border-top: 1px dashed #D3D3D3;">
        <div class="item-box clearfix">
          <h3 class="fl item-title">职位来源：</h3>
          <div class="fl item-con clearfix">
            <div v-for="(item, lIndex) in jobSources" :key="lIndex" class="item item-link" :class="{ active: item.active }" @click="handleJobSourcesClick(item.name)">{{ item.name }}</div>
          </div>
        </div>
        <hr style="border: none; border-top: 1px dashed #D3D3D3;">
        <div class="item-box clearfix">
          <h3 class="fl item-title">首发日期：</h3>
          <div class="fl item-con clearfix">
            <div v-for="(item, sIndex) in firstDates" :key="sIndex" class="fl item-link" :class="{ active: item.active }" @click="handleFirstDatesClick(item.label)">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PracticeInfoTop',
    data() {
      return {
        industrys: [
          { name: '全部', active: true },
          { name: '思想政治与志愿服务', active: false },
          { name: '心理素质与身体素质', active: false },
          { name: '艺术体验与审美修养', active: false },
          { name: '文化沟通与交往能力', active: false },
          { name: '社会工作与领导能力', active: false },
          { name: '学术科技与创新创业', active: false }
        ],
        companys: [
          { name: '全部', active: true },
          { name: '活动', active: false },
          { name: '讲座', active: false },
          { name: '文体比赛', active: false },
        ],
        jobSources: [
          { name: '全部', active: true },
          { name: '校级项目', active: false },
          { name: '院级项目', active: false },
          { name: '一般项目', active: false }
        ],
        firstDates: [
          { label: '全部', active: true },
          { label: '近一周内', active: false },
          { label: '近两周内', active: false },
          { label: '近半年内', active: false }
        ]
      };
    },
     methods: {
      handleIndustryClick(title) {
        this.industrys.forEach((industry) => {
        industry.active = industry.name === title;
        });
        this.$store.dispatch('updatePractice1', title)
      },
      handleCompanyClick(title) {
        this.companys.forEach((company) => {
          company.active = company.name === title;
        });
        this.$store.dispatch('updatePractice2', title)
      },
      handleJobSourcesClick(title) {
        this.jobSources.forEach((jobSource) => {
          jobSource.active = jobSource.name === title;
        });
        this.$store.dispatch('updatePractice3', title)
      },
      handleFirstDatesClick(title) {
        this.firstDates.forEach((firstDate) => {
            firstDate.active = firstDate.label === title;
        });
        this.$store.dispatch('updatePractice4', title)
      }
    },
  };
  </script>
  <style lang="less" scoped>
  .item-title {

    white-space: nowrap; 
    margin: 0;
    padding: 0;
  }
  .item-con {
    display: flex;
    flex-wrap: wrap;
  }
  .item-link {
    padding: 2px;
    display: flex;
    align-items: center;
    margin: auto 0;
    margin-right: 30px; // 右边距
    margin-bottom: 20px; // 下边距
    cursor: pointer;
    white-space: nowrap;
  }
  .item-box {
    display: flex; 
    align-items: flex-start;
    padding: auto;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .active {
    background-color: #7341C2;
    color: #FFFFFF;  // 你可以选择你喜欢的颜色
    padding: 2px;
    border-radius: 10px;
  }
  .box {
    // border: 1px solid #d8d5d5; /* 设置边框，1px 宽，实线，黑色 */
    // width: 50%; /* 设置宽度为 50% */
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
    // border-radius: 10px; /* 设置边框为圆角，半径为 10px */
    background-color: #FFFFFF;
    border-radius: 10px;
  }
  </style>