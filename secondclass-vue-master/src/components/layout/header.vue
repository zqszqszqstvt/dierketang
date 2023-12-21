<template>
  <div :class="['header', { home: isHomePage }]">
    <div class="left">
      <img class="logo" :src="logoImg" alt="" />
      <div class="title">
        <img :src="titleImg" alt="" />
      </div>
    </div>
    <div class="navigation">
      <router-link
        v-for="nav in navList"
        :key="nav.code"
        class="nav"
        :to="nav.route"
      >
        {{ nav.label }}
        <img
          v-if="['study', 'publish', 'self'].includes(nav.code)"
          class="arrow"
          :src="arrow"
          alt=""
        />
        <div v-if="nav.children?.length" class="children">
          <router-link
            v-for="c in nav.children"
            :key="c.label"
            class="child"
            :to="c.route"
          >
            <img :src="c.img" alt="" />
            {{ c.label }}
          </router-link>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import logoImg from "@/assets/layout/logo.png";
import titleImg from "@/assets/layout/title.png";
import arrow from "@/assets/layout/arrow.png";
export default {
  name: "HeaderBar",
  components: {},
  mounted() {},
  watch: {
    $route(to, from) {
      this.isHomePage = to.path.includes("/home");
      console.log(this.$route.matched);
    },
  },
  data() {
    return {
      logoImg,
      titleImg,
      isHomePage: false,
      arrow,
      navList: [
        {
          label: "首页",
          code: "home",
          route: "/"
        },
        {
          label: "信息发布",
          code: "publish",
          route: "/KaoYanBaoYan",
          children: [
            {
              label: "考研保研",
              code: "publish01",
              img: require("@/assets/layout/nav0301.png"),
              route: "/KaoYanBaoYan"
            },
            {
              label: "竞赛信息",
              code: "publish02",
              img: require("@/assets/layout/nav0302.png"),
              route: "/CompetitionInfo"
            },
            {
              label: "招聘信息",
              code: "publish03",
              img: require("@/assets/layout/nav0303.png"),
              route: "/CompetitionInfo"
            },
          ],
        },
        {
          label: "我的学业",
          code: "self",
          route: "/ClassScore",
          children: [
            {
              label: "我的成绩",
              code: "self01",
              img: require("@/assets/layout/nav0401.png"),
              route: "/ClassScore"
            },
            {
              label: "我的竞赛",
              code: "self02",
              img: require("@/assets/layout/nav0403.png"),
              route: "/MyCompetition"
            },
            {
              label: "我的实践",
              code: "self03",
              img: require("@/assets/layout/nav0303.png"),
              route: "/MyCompetition"
            },
            {
              label: "我的课程",
              code: "self04",
              img: require("@/assets/layout/nav0402.png"),
              route: "/MyCompetition"
            },
          ],
        },
        {
          label: "登录/注册",
          code: "login",
          route: "/login"
        },
      ],
    };
  },
};
</script>

<style scoped>
.header {
  min-width: 1480px;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #581bb7;
  width: 100%;
  &.home {
    position: absolute;
    top: 0;
    padding: 0;
    background-color: transparent;
  }
  .left {
    display: flex;
    align-items: center;
    z-index: 10;
    .logo {
      margin-left: 30px;
      height: 40px;
    }
    .title {
      position: relative;
      margin-left: 30px;
      padding-left: 30px;
      display: flex;
      align-items: center;
      img {
        height: 24px;
      }
    }
    .title::before {
      content: "";
      width: 1px;
      height: 30px;
      background: #ffffff;
      opacity: 0.25;
      position: absolute;
      left: 0;
      top: -2px;
    }
  }
  .navigation {
    display: flex;
    height: 100%;
    margin-right: 40px;
    .nav {
      display: flex;
      height: 100%;
      align-items: center;
      position: relative;
      cursor: pointer;
      font-size: 16px;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 22px;
      margin-left: 60px;
      transition: all ease-in-out 0.3s;
      z-index: 100;
      text-decoration: none;
      &::after {
        content: none;
        position: absolute;
        background: url("@/assets/layout/triangle.png") no-repeat;
        left: calc(50% - 8px);
        bottom: 0;
        width: 16px;
        height: 10px;
      }
      &:hover {
        font-weight: 600;
        .arrow {
          transform: rotate(180deg);
        }
        .children {
          display: block;
        }
      }
      &.router-link-active {
        font-weight: 600;
        &::after {
          content: "";
        }
      }
      .arrow {
        transition: all ease-in-out 0.3s;
        margin-left: 4px;
      }
      .children {
        display: none;
        position: absolute;
        top: 68px;
        left: -30px;
        padding: 14px 0;
        width: 138px;
        background-color: #fff;
        border-radius: 0px 0px 10px 10px;
        box-shadow: 0 0 5px #adadad50;
        z-index: 10;
        .child {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 12px 24px;
          font-size: 16px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          color: #000000;
          line-height: 22px;
          word-break: keep-all;
          text-decoration: none;
          img {
            height: 19px;
            margin-right: 9px;
          }
          &:hover {
            background-color: #f4ecff;
          }
        }
      }
    }
  }
}

</style>
