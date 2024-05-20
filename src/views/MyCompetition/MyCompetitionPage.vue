<template>
  <div class="box">
    <div class="mini-box">
      <div class="main-title">
        能力自画像>我的竞赛
      </div>
      <div class="user">
        <MyCompetitionUser/>
      </div>
      <!-- 弹窗 新增成绩弹窗 -->
      <el-dialog title="登记奖项" :model-value="addshow" width="65%" :show-close="false">
        <MyCompetitionCommit/>
      </el-dialog>
      
      <div class="awards-box">
        <div class="awards-title">
          <h2>我的竞赛</h2>
          <div class="more">
            <button class="add" @click="addClick">添加</button>
            <span>全部竞赛></span>
          </div>
        </div>
        <div class="awardsItem">
          <MyCompetitionCard v-for="(item, index) in Awards" :key="index" :award="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyCompetitionUser from './MyCompetitionUser.vue'
import MyCompetitionCommit from './MyCompetitionCommit.vue'
import MyCompetitionCard from './MyCompetitionCard.vue'
export default {
  name: 'MyCompetitionPage',
  data() {
    return {
      Awards: [],
      total: 0
    };
  },
  components: {
    MyCompetitionUser,
    MyCompetitionCommit,
    MyCompetitionCard
  },
  created() {
    // this.netrequest();
    this.load();
  },
  computed: {
    // 弹窗 用store的变量来决定显示弹窗否
    addshow() {
      return this.$store.state.addCopetitionShow;
    }
  },
  methods: {
    load() {
      this.request.get("/user/pic/mycomp", {
          params: {
            id: localStorage.getItem('id')
          }
        })
      .then(res => {
            this.Awards = res.data
            console.log(this.Awards)
        })
        .catch(error => {
          console.error(error);
        });
    },
    netrequest() {
      this.Awards=[{
          competitionName: 'ACM大赛',
          competitionLevel: '世界级',
          awardsLevel: '一等奖',
          img: 'acm.png',
          grade: '20'
        },
        {
          competitionName: '蓝乔杯',
          competitionLevel: '国家级',
          awardsLevel: '一等奖',
          img: 'lanqiaobei.png',
          grade: '15'
        },
        {
          competitionName: '蓝乔杯',
          competitionLevel: '省级',
          awardsLevel: '一等奖',
          img: 'lanqiaobei.png',
          grade: '10'
        },{
          competitionName: 'ACM大赛',
          competitionLevel: '国家级',
          awardsLevel: '一等奖',
          img: 'acm.png',
          grade: '15'
        },{
          competitionName: '蓝乔杯',
          competitionLevel: '校级',
          awardsLevel: '一等奖',
          img: 'lanqiaobei.png',
          grade: '5'
        },{
          competitionName: '大英赛',
          competitionLevel: '国家级',
          awardsLevel: '一等奖',
          img: 'english.png',
          grade: '15'
        },{
          competitionName: '互联网+',
          competitionLevel: '国家级',
          awardsLevel: '一等奖',
          img: 'hulianwang.png',
          grade: '15'
        },{
          competitionName: '计算机大赛',
          competitionLevel: '国家级',
          awardsLevel: '一等奖',
          img: 'jisuanji.png',
          grade: '15'
        },{
          competitionName: '挑战杯大赛',
          competitionLevel: '国家级',
          awardsLevel: '一等奖',
          img: 'tiaozhanbei.png',
          grade: '15'
        },{
          competitionName: '蓝乔杯',
          competitionLevel: '校级',
          awardsLevel: '一等奖',
          img: 'lanqiaobei.png',
          grade: '5'
        }]
    },
    // 弹窗 点击出现弹窗
    addClick() {
      this.$store.dispatch('updateAddCompetitionShow');
      console.log(this.$store.state.addCopetitionShow)
    },
  }
};
</script>
<style lang="less" scoped>
.box {
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.mini-box {
  width: 65%;
}
.main-title {
  margin-top: 10px;
  margin-bottom: 10px;
}
.user {
  font-weight: bold;
}
.info-title {
  margin-top: 40px;
}
.awards-box {
  background-color: #FFFFFF;
  border-radius: 10px;
}
.awards-title {
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
}
.add {
  width: 100px;  
  height: 40px;  
  margin-right: 30px;
  background-color: #FFFFFF;
  color: #581BB7;  
  border: none;  
  border-radius: 4px;  
  font-size: 16px;
}
.add:hover {
  background-color: #581BB7;
  color: #FFFFFF;  
}
.awards-title .more {
  font-size: 18px;
  color: #581BB7;
  margin: 0; /* 重置默认的margin */
  padding: 4%; /* 添加你自己的边距 */
  padding-bottom: 0;
}
.awards-title h2{
  margin: 0; /* 重置默认的margin */
  padding: 3%; /* 添加你自己的边距 */
  padding-left: 4%;
  padding-bottom: 0;
}

.awardsItem {
  display: flex;
  flex-wrap: wrap;
  margin: 3%;
  margin-top: 1%;
}
</style>