<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-01-04 01:47:10
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-04 20:21:11
 * @FilePath: \secondclass-vue-master\src\views\FourthClassChoose\FourthClassChoosePage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div>
            <img :src="bannerImg" alt="">
        </div>
        <div class="options">
            <router-link to="/CourseInfo" class="no-underline">
                <div class="option">
                    <img :src="oneImg" alt="">
                    <span class="option-text">课程学习</span>
                </div>
            </router-link>
            <router-link to="/CourseInfo" class="no-underline">
                <div class="option">
                    <img :src="twoImg" alt="">
                    <span class="option-text">实践平台</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import bannerImg from "@/assets/home/banner.png";
import oneImg from "@/assets/16gl-1.png";
import twoImg from "@/assets/16gl-2.png";
export default {
  data() {
    return {
      bannerImg,
      oneImg,
      twoImg
    }
  }
}
</script>

<style scoped>
.options {
  display: flex;
  justify-content: center;
}

.option {
  font-size: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  margin: 40px 100px;
  width: 350px;
  height: 200px;
  background-color: #FFFFFF;
}

.option-text {
  white-space: normal;
}

.no-underline {
  text-decoration: none;
}
</style>
