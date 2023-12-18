<template>
  <el-container>
    <Navigate/>
    <el-header class="help_name" style="height: 15px">
      学习帮助工具
    </el-header>
    <el-main class="help_content">
      <div class="content" style="margin-left: 140px">
            <p v-for="(item,index) in combinedArray" :key="index">
              <b>{{item.item1}}</b>:
              <a :href="item.item2" style="color: inherit;text-decoration: none">{{item.item2}}</a>
            </p>
          </div>
    </el-main>
  </el-container>
</template>

<script>
import Navigate from "@/components/Navigate";
export default {
  name: "Help",
  components:{
    Navigate
  },
  data(){
    return{
      tool_names:[
        "哔哩哔哩","学堂在线","中国大学MOOC","Github","码云",
        "掘金","CSDN社区","博客园","51自学网","百度飞浆",
        "freecodecamp","codecademy","LeetCode（算法刷题）","牛客网","PAT能力测试",
        "菜鸟教程","W3Cschool","BootCDN极兔云","极客时间","语雀",
        "ProcessOn","墨刀原型设计","即时设计","PPT模板","PPT超级市场",
        "Canva可可","PDF在线转MD","土拨鼠 VPN"
      ],
      url_names:[
        "https://www.bilibili.com/","https://www.xuetangx.com/","https://www.icourse163.org/","https://github.com/","https://gitee.com/",
        "https://juejin.cn/","https://www.csdn.net/","https://www.cnblogs.com/","https://www.51zxw.net/","https://www.paddlepaddle.org.cn/",
        "https://www.freecodecamp.org/chinese/","http://codecademy.com/","https://leetcode.cn/","https://www.nowcoder.com/","https://pintia.cn/home",
        "https://www.runoob.com/","https://www.w3school.com.cn/","https://www.bootcdn.cn/","https://time.geekbang.org/","https://www.yuque.com/",
        "https://www.processon.com/","https://modao.cc/","https://js.design/","http://www.51pptmoban.com/","https://www.pptsupermarket.com/",
        "https://www.canva.cn/templates/","https://pdf2md.morethan.io/","https://tuboshu.xyz/auth/login"
      ],
      combinedArray:null
    }
  },
  created() {
    this.combinedArray = this.tool_names.map((item1, index) => {
      const item2 = this.url_names[index];
      return { item1, item2 };
    });
  }
}
</script>

<style scoped>
.help_name{
  font-size: 1.5em;
  color: #0181da;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
}
.help_content{
  width: 100vw;
  display: flex;
  justify-content: center;
}

</style>