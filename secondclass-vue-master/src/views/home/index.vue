<template>
  <div class="wrapper">
    <div class="banner">
      <div class="list" :style="{ left: -(carouselIndex * 100) + '%' }">
        <img v-for="img in bannerList" :src="img" alt="" />
      </div>
      <div class="carousel">
        <div
          v-for="(_, index) in bannerList.length"
          :class="['item', { active: carouselIndex === index }]"
          @click="changeCarouselIndex(index)"
        ></div>
      </div>
    </div>
    <div class="main">
      <div class="module-wrapper">
        <!-- <div class="title">模块分类</div>
        <div class="subtitle">CLASSIFICATION</div> -->
        <div class="block-wrapper">
          <div v-for="item in list" :key="item.title" class="block">
            <div class="tip">{{ item.tip }}</div>
            <img :src="item.img" alt="" />
            <div class="content">
              <div class="title">{{ item.title }}</div>
              <div class="desc">{{ item.desc }}</div>
              <!-- <div class="btn">{{ item.btnText }}</div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="content">
        <div class="left">
          <img class="logo" :src="logoImg" alt="" />
          <div class="text">
            地址：中国湖北武汉东湖高新技术开发区光谷一路206号
          </div>
          <div class="text">邮编：430205</div>
          <div class="cr">
            版权所有：武汉工程大学计算机科学与工程学院人工智能学院
          </div>
        </div>
        <div class="right">
          <img class="qrcode" :src="qrcode" alt="" />
          <div class="desc">官网微信公众号</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logoImg from "@/assets/layout/logo.png";
import bannerImg from "@/assets/home/banner.png";
import lesson1Img from "@/assets/home/lesson1.png";
import lesson2Img from "@/assets/home/lesson2.png";
import lesson3Img from "@/assets/home/lesson3.png";
import lesson4Img from "@/assets/home/lesson4.png";
import qrcode from "@/assets/home/qrcode.png";
export default {
  name: "HomePage",
  components: {},
  mounted() {
    this.timer = setInterval(() => {
      this.carouselIndex = (this.carouselIndex + 1) % this.bannerList.length;
    }, 3 * 1000);
  },
  beforeMount() {},
  data() {
    return {
      logoImg,
      /** 手写carousel */
      carouselIndex: 0,
      bannerList: [bannerImg, bannerImg, bannerImg, bannerImg],
      timer: undefined,
      qrcode,
      list: [
        {
          tip: "第一课堂",
          title: "课堂教学",
          desc: "解决理论知识问题",
          btnText: "能力自画像“我的成绩”",
          img: lesson1Img,
        },
        {
          tip: "第二课堂",
          title: "学科竞赛",
          desc: "解决实践动手能力问题",
          btnText: "校内课程资源",
          img: lesson2Img,
        },
        {
          tip: "第三课堂",
          title: "社会实践",
          desc: "解决社会适应问题",
          btnText: "信息发布",
          img: lesson3Img,
        },
        {
          tip: "第四课堂",
          title: "网络教学",
          desc: "解决自主学习问题",
          btnText: "能力自画像“我的竞赛”",
          img: lesson4Img,
        },
      ],
    };
  },
  methods: {
    changeCarouselIndex(index) {
      if (this.carouselIndex !== index) this.carouselIndex = index;
    },
  },
};
</script>

<style scoped>
.wrapper {
  .banner {
    position: relative;
    width: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
    .list {
      display: flex;
      width: 100%;
      position: relative;
      transition: all ease-in-out 1s;
      img {
        width: 100%;
        min-width: 100%;
      }
    }
    .carousel {
      display: flex;
      position: absolute;
      bottom: 50px;
      left: 19%;
      .item {
        display: flex;
        width: 12px;
        height: 12px;
        background: #ffffff;
        opacity: 0.15;
        margin-right: 8px;
        transition: all ease-in-out 0.3s;
        border-radius: 7px;
        cursor: pointer;
        &.active {
          width: 28px;
          border-radius: 7px;
          opacity: 1;
        }
      }
    }
  }
  .main {
    background-color: #f5f5f5;
    .module-wrapper {
      padding: 60px;
      width: 1200px;
      margin: 0 auto;
      .title {
        font-size: 26px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        color: #000000;
        line-height: 37px;
      }
      .subtitle {
        font-size: 16px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        color: #d0d0d0;
        line-height: 22px;
      }
      .block-wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        .block {
          width: 285px;
          height: 329px;
          background: #ffffff;
          border-radius: 10px;
          position: relative;
          .tip {
            position: absolute;
            top: 0;
            width: 94px;
            height: 36px;
            background: url("@/assets/home/title-bg.png");
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 600;
            color: #ffffff;
            line-height: 22px;
          }
          img {
          }
          .content {
            padding: 24px;
            .title {
              font-size: 20px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              color: #000000;
              line-height: 28px;
            }
            .desc {
              font-size: 16px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              color: #999999;
              line-height: 22px;
              margin-top: 5px;
            }
            .btn {
              width: 237px;
              height: 48px;
              background: #581bb7;
              border-radius: 8px;
              font-size: 16px;
              font-family: PingFangSC, PingFang SC;
              font-weight: 500;
              color: #ffffff;
              line-height: 22px;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 30px;
              cursor: pointer;
              &:hover {
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }
  .footer {
    padding: 38px 0 18px;
    background-color: #404040;
    height: 194px;
    .content {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      position: relative;
      .left {
        .logo {
        }
        .text {
          margin-top: 12px;
          font-size: 14px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 20px;
        }
        .cr {
          width: 996px;
          border-top: 1px solid #4c4c4c;
          padding-top: 13px;
          font-size: 14px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          color: #6f6f6f;
          line-height: 20px;
          position: absolute;
          bottom: -7px;
        }
      }
      .right {
        position: relative;
        top: 7px;
        text-align: center;
        .desc {
          margin-top: 13px;
          font-size: 14px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
