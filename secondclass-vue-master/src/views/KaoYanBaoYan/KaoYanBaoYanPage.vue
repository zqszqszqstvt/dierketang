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
    this.netrequest();
  },
  methods: {
    //模拟网络请求
    netrequest() {
      this.News=[{
        title: '2024考研日程表',
        link: 'https://yz.chsi.com.cn/kyzx/kydt/',
        time: '2023-09-15'
      },{
        title: '2024考研日程表',
        link: 'https://yz.chsi.com.cn/kyzx/kydt/',
        time: '2023-09-15'
      },{
        title: '2024考研日程表',
        link: 'https://yz.chsi.com.cn/kyzx/kydt/',
        time: '2023-09-15'
      },{
        title: '2024考研日程表',
        link: 'https://yz.chsi.com.cn/kyzx/kydt/',
        time: '2023-09-15'
      },{
        title: '2024考研日程表',
        link: 'https://yz.chsi.com.cn/kyzx/kydt/',
        time: '2023-09-15'
      },{
        title: '2024考研日程表',
        link: 'https://yz.chsi.com.cn/kyzx/kydt/',
        time: '2023-09-15'
      }]
      this.HotBaoYanInfos=[{
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
        link: 'https://www.saikr.com/vse/cwctic/2023'
      },
      {
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
        link: 'https://www.saikr.com/vse/cwctic/2023'
      },
      {
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
        link: 'https://www.saikr.com/vse/cwctic/2023'
      },
      {
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
        link: 'https://www.saikr.com/vse/cwctic/2023'
      },
      {
        title: '【多省市译协盖章】2023年第九届中西dassadasdasdsadasdfdfsdfsdfsfds部外语翻译大赛',
        link: 'https://www.saikr.com/vse/cwctic/2023'
      },
      {
        title: '【多省市译协盖章】2023年第九届中西部外语翻译大赛',
        link: 'https://www.saikr.com/vse/cwctic/2023'
      }]; // 假设你的API返回的数据就是你需要的数据
    }

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