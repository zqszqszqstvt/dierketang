<template>
  <div class="box">
    <div class="category">
    <!-- 竞赛类别 -->
    <h3>竞赛类别：</h3>
    <div v-for="(category, index) in categories" :key="index" class="fl item-box">
      <h4 class="item-title">
          <div class="item-link" :class="{ active: category.active }" @click="handleCategoryClick(category.title)">{{ category.title }}</div>
        </h4>
        <div class="item-con clearfix" style="display: flex; flex-wrap: wrap;">
          <div v-for="(subject, sIndex) in category.subjects" :key="sIndex" class="fl item-link" :class="{ active: subject.active }" @click="handleSubjectClick(subject.name)">{{ subject.name }}</div>
          
        </div>
    </div>
    </div>
    <hr style="border: none; border-top: 1px dashed #D3D3D3;">
    <!-- 竞赛级别和排序方式 -->
    <div class="levelandsort">
      <div class="item-box clearfix"  style="margin-top: 20px; padding-bottom: 0;">
        <h3 class="fl item-title">竞赛级别：</h3>
        <div class="fl item-con clearfix" style="position: relative; top: 6px;">
          <div v-for="(level, lIndex) in competitionLevels" :key="lIndex" class="item item-link" :class="{ active: level.active }" @click="handleLevelClick(level.name)">{{ level.name }}</div>
        </div>
      </div>
      <hr style="border: none; border-top: 1px dashed #D3D3D3;">
      <div class="item-box clearfix" style="margin-top: 20px; padding-bottom: 0;">
        <h3 class="fl item-title">排序方式：</h3>
        <div class="fl item-con clearfix" style="position: relative; top: 5px;">
          <div v-for="(sorting, sIndex) in sortingOptions" :key="sIndex" class="fl item-link" :class="{ active: sorting.active }" @click="handleSortingClick(sorting.label)">{{ sorting.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompetitionChoose',
  data() {
    return {
      categories: [
        { title: '全部', active: true},
        { title: '工科', subjects: [{ name: '数学建模', active: false }, { name: '程序设计', active: false }, { name: '机器人', active: false }, { name: '工程机械', active: false }, { name: '土木建筑', active: false }, { name: '大数据', active: false }, { name: '交通车辆', active: false }, { name: '航天航空', active: false }, { name: '船舶海洋', active: false }, { name: '环境能源', active: false }, { name: '计算机&信息技术', active: false }, { name: '材料高分子', active: false }, { name: '电子&自动化', active: false }], active: false },
        { title: '文体', subjects: [{ name: '工业&创意设计', active: false }, { name: '外语', active: false }, { name: '演讲主持&辩论', active: false }, { name: '模特', active: false }, { name: '歌舞书画&摄影', active: false }, { name: '体育', active: false }, { name: '科技文化艺术节', active: false }, { name: 'UI设计', active: false }, { name: '服装设计', active: false }, { name: '电子竞技', active: false }], active: false },
        { title: '理科', subjects: [{ name: '数学', active: false }, { name: '物理', active: false }, { name: '化学化工', active: false }, { name: '健康生命&医学', active: false }, { name: '力学', active: false }], active: false },
        { title: '商科', subjects: [{ name: '创业', active: false }, { name: '商业', active: false }, { name: '创青春', active: false }], active: false },
        { title: '综合', subjects: [{ name: '职业技能', active: false }, { name: '挑战杯', active: false }, { name: '环保公益', active: false }, { name: '社会综合', active: false }], active: false }
        
        // 添加更多类别
      ],
      competitionLevels: [
        { name: '全部', active: true },
        { name: '校级', active: false },
        { name: '市级', active: false },
        { name: '省级', active: false },
        { name: '国家级', active: false },
        { name: '全球级', active: false }
        // 添加更多级别
      ],
      sortingOptions: [
        { label: '按时间排序', active: true },
        { label: '按热度排序', active: false }
        // 添加更多排序方式
      ]
    };
  },
   methods: {
    handleCategoryClick(title) {
      this.categories.forEach((category) => {
      category.active = category.title === title;
      if (category.subjects) {
        category.subjects.forEach((subject) => {
          subject.active = false;
        });
      }
      });
      this.$store.dispatch('updateCondition1', title)
    },
    handleSubjectClick(subjectTitle) {
      this.categories.forEach((category) => {
        category.active = false
        if (category.subjects) {
          category.subjects.forEach((subject) => {
            subject.active = subject.name === subjectTitle;
          });
        }
      });
      this.$store.dispatch('updateCondition1', subjectTitle)
    },
    handleLevelClick(title) {
      this.competitionLevels.forEach((level) => {
        level.active = level.name === title;
      });
      this.$store.dispatch('updateCondition2', title)
    },

    handleSortingClick(title) {
      this.sortingOptions.forEach((sorting) => {
        sorting.active = sorting.label === title;
      });
      this.$store.dispatch('updateCondition3', title)
    }
  },
};
</script>

<style lang="less" scoped>
.item-title {
  display: flex;
  align-items: center;
  margin: auto 0;
}
.item-con {
  display: flex;
  flex-wrap: wrap;
}
.item-link {
  display: flex;
  align-items: center;
  margin: auto 0;
  margin-right: 30px; // 右边距
  margin-bottom: 20px; // 下边距
  cursor: pointer;
  white-space: nowrap;
  font-weight: bold;
}
.item-box {
  display: flex; 
  align-items: center;
  padding: auto;
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