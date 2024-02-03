<template>
  <div class="box">
    <div class="mini-box">
      <div class="left">
        <div class="main-title">
          信息发布>考研保研
        </div>
        <div class="newsItem">
          <KaoYanBaoYanItem v-for="(item, index) in News" :key="index" :news="item"/>
        </div>
      </div>
      <div class="right">
          <div class="right-mini">
            <div class="title-container">
              <div class="hot-title">
                <h2>近期热点</h2>
              </div>
              <div class="more-detail">
                <h4>更多></h4>
              </div>
            </div>
            <div class="Hot">
              <KaoYanBaoYanHot v-for="(item, index) in HotBaoYanInfos" :key="index" :HotBaoYanInfo="item"/>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import KaoYanBaoYanItem from './KaoYanBaoYanItem.vue'
import KaoYanBaoYanHot from './KaoYanBaoYanHot.vue'
import axios from 'axios';
export default {
  name: 'KaoYanBaoYanPage',
  data() {
    return {
      News: [],
      HotBaoYanInfos: []
    };
  },
  components: {
    KaoYanBaoYanItem,
    KaoYanBaoYanHot
  },
  async created() {
    // const response = await axios.get('你的API地址')
   // this.netrequest();
  },
  mounted() {
    axios.get("http://47.96.75.164:8080/graduateInfo").then(result => {
      this.News = result.data.data.rows;
      console.log(result.data.data.rows);
    });
  },
  methods: {
    //模拟网络请求
    // netrequest() {
    //   //异步网络请求
    //   // try {
    //   //   const responseNews = await axios.get('你的API地址1') //获取News的API
    //   //   this.News = responseNews.data //返回的数据就是需要的数据

    //   //   const responseHotBaoYanInfos = await axios.get('你的API地址2') //获取HotBaoYanInfos的API
    //   //   this.HotBaoYanInfos = responseHotBaoYanInfos.data
    //   // } catch (error) {
    //   //   console.error(error);
    //   // }
    //   this.News=[{
    //     title: '2024考研日程表',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202309/20230915/2293123522.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '2024年全国硕士研究生招生考试顺利结束——暖心服务为研考护航',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231226/2293241769.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '天津市2024年研考顺利结束',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231226/2293241473.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '贵州省2024年全国硕士招生考试(初试)顺利结束',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231226/2293241471.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '广西2024年全国硕士招生考试平稳顺利结束',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231226/2293241470.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '甘肃省2024年全国硕士招生考试顺利结束',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231226/2293241469.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '广东省2024年全国硕士招生考试顺利结束',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231226/2293241467.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '新疆2024年全国硕士招生考试顺利结束',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231225/2293237107.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '倾心关爱 情暖考生——2024年研考路上的感人故事',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231225/2293237060.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '内蒙古自治区研究生招生考试顺利开考',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231225/2293237054.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '福建省2024年全国硕士研究生招生考试顺利开考',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231225/2293237052.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '西藏自治区2024年研考顺利开考',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231225/2293237050.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '暖心护考！云南省积极为2024年研考考生提供温馨服务',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231225/2293237048.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '四川省2024年全国硕士研究生招生考试平稳顺利结束',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231225/2293237046.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '“研”途相伴，严冬不惧！——四川省各地多举措确保2024年全国硕士研究生招生考试安全平稳',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231225/2293237044.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '你全力以赴，我全力以“护” | 2024研考',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231225/2293237043.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '“冷的是天气，暖的是人心” | 2024研考',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231225/2293237041.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '从考前到考场，各地各校这样“护航” | 2024研考',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231225/2293237036.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '守护梦想，各地各校在行动 | 2024研考',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231225/2293237035.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '天津：2024年全国硕士研究生招生考试顺利开考',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231223/2293239544.html',
    //     time: '2023-09-15'
    //   },{
    //     title: '北京：2024年全国硕士研究生招生考试拉开帷幕，13.2万余名考生在京参加考试',
    //     link: 'https://yz.chsi.com.cn/kyzx/kydt/202312/20231223/2293239538.html',
    //     time: '2023-09-15'
    //   }]
    //   this.HotBaoYanInfos=[{
    //     title: '遵纪守法，诚信考试，切莫以身试法！',
    //     link: 'https://yz.chsi.com.cn/kyzx/zt/cxky2024.shtml'
    //   },
    //   {
    //     title: '专硕巡展，带你了解专业学位硕士',
    //     link: 'https://yz.chsi.com.cn/kyzx/zt/zsxz.shtml'
    //   },
    //   {
    //     title: '多项奖助政策，助力研究生成才',
    //     link: 'https://yz.chsi.com.cn/kyzx/zt/yjsjzzc.shtml'
    //   },
    //   {
    //     title: '近五年考研分数线及趋势图',
    //     link: 'https://yz.chsi.com.cn/kyzx/zt/lnfsx2023.shtml'
    //   },
    //   {
    //     title: '考研百科：解锁考研困惑',
    //     link: 'https://yz.chsi.com.cn/yzzt/kybk'
    //   },
    //   {
    //     title: '澳门高校在内地招收攻读硕士、博士学位研究生',
    //     link: 'https://yz.chsi.com.cn/z/amgx/index.jsp'
    //   }]; // 假设你的API返回的数据就是你需要的数据
    // }

  }
};
</script>
<style lang="less" scoped>
.main-title {
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
}
.left {
    width: 70%;
}
.newsItem {
    background-color: #FFFFFF;
    border-radius: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
}
.title-container {
  display: flex;
  justify-content: space-between;
}
.hot-title {
    margin-left: 10px;
    text-align: left;
}
.Hot {
  width: auto;
}
.right {
    width: 30%;
    margin-top: 3%;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 20px;
    border-radius: 10px; /* 这将给边框添加圆角 */
    align-self: flex-start;
    background-color: #FFFFFF;
}
.right-mini {
  margin: 3px;
  background: linear-gradient(to bottom, #E6E6FA, rgba(255, 255, 255, 0.15));
  border-radius: 10px;
  padding-top: 5px;
}

.more-detail {
  margin-right: 15px;
  color: #7341C2;
}
.box {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mini-box {
  width: 70%;
  display: flex;
}
</style>