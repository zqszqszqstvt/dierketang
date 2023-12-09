<template>
  <div class="box">
    <div class="left">
        <div class="main-title">
          <h2>考研动态</h2>
        </div>
        <div class="newsItem">
          <KaoYanBaoYanItem v-for="(item, index) in News" :key="index" :news="item"/>
        </div>
    </div>
    <div class="right">
        <div class="hot-title">
            <h3>最近热点</h3>
        </div>
      <div class="Hot">
        <KaoYanBaoYanHot v-for="(item, index) in HotBaoYanInfos" :key="index" :HotBaoYanInfo="item"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import KaoYanBaoYanItem from '../KaoYanBaoYanItem'
import KaoYanBaoYanHot from '../KaoYanBaoYanHot'
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
  margin: 20px;
}
.left {
    width: 40%;
}
.hot-title {
    margin: 10px;
    text-align: left;
}
.right {
    width: 400px;

    border: 1px solid #ccc;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 30px;
    margin-left: 20px;
}
.box {
    width: 1500px;
    display: flex;
    margin-left: 15%;
    
}
</style>