
<template>
    <div>
        <div class="bannerImgBox">
            <img :src="bannerImg" alt="">
        </div>
        <div class="options">
            <router-link to="/CourseInfo" class="no-underline">
                <div class="option">
                    <img :src="oneImg" alt="">
                    <span class="option-text">课程学习</span>
                </div>
            </router-link>
            <router-link to="/ShiYan" class="no-underline">
                <div class="option">
                    <img :src="twoImg" alt="">
                    <span class="option-text">实践平台</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import bannerImg from "@/assets/home/banner4.png";
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
.bannerImgBox{
  position: relative;
}
.bannerImgBox img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
