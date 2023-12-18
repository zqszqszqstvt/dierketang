<template>
  <div class="header">
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
        :to="nav.route"
        :class="['nav', { active: activeNav === nav.code }]"
        @click.native="changeNav(nav.code)"
      >
        {{ nav.label }}
      </router-link>
    </div>
  </div>
</template>


<script>
import logoImg from "@/assets/layout/logo.png";
import titleImg from "@/assets/layout/title.png";
export default {
  name: "HeaderBar",
  components: {},
  mounted() {},
  data() {
    return {
      logoImg,
      titleImg,
      activeNav: "home",
      navList: [
        {
          label: "首页",
          code: "home",
          route: '/'
        },
        {
          label: "我的成绩",
          code: "grades",
          route: '/ClassScore'
        },
        {
          label: "竞赛信息",
          code: "competition",
          route: '/CompetitionInfo'
        },
        {
          label: "考研保研",
          code: "kaoyanbaoyan",
          route: '/KaoYanBaoYan'
        },
        {
          label: "我的竞赛",
          code: "mycompetition",
          route: '/MyCompetition'
        },
      ],
    };
  },
  methods: {
    changeNav(code) {
      this.activeNav = code;
      const route = this.navList.find(nav => nav.code === code).route;
      this.$router.push(route);
    },
  },
};
</script>
<style scoped>
.header {
  height: 68px;
  background-color: #581bb7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px 0 30px;
  .left {
    display: flex;
    align-items: center;
    .logo {
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
      }
      &.active {
        font-weight: 600;
        &::after {
          content: "";
        }
      }
    }
  }
  a {
    text-decoration: none;
  }
}
</style>
