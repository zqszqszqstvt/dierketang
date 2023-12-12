<template>
  <div id="app">
    <nav>
      <ul id="navbar">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/ClassScorePage">我的课堂</router-link></li>
        <li><router-link to="/CompetitionPage">竞赛信息</router-link></li>
        <li><router-link to="/KaoYanBaoYanPage">考研信息</router-link></li>
        <li><router-link to="/MyCompetitionPage">我的竞赛</router-link></li>
      </ul>
    </nav>
    <router-view/>
    <!-- <CompetitionPage/> -->
    <!-- <MyCompetitionPage/> -->
    <!-- <KaoYanBaoYanPage/> -->
    <!-- <ClassScorePage/> -->

  </div>
</template>

<script>
import CompetitionPage from './components/CompetitionPage'
import MyCompetitionPage from './components/MyCompetitionPage'
import KaoYanBaoYanPage from './components/KaoYanBaoYanPage'
import ClassScorePage from './components/ClassScorePage'

export default {
  name: 'App',
  components: {
    CompetitionPage,
    MyCompetitionPage,
    KaoYanBaoYanPage,
    ClassScorePage
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#navbar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #800080;
}

#navbar li {
  float: left;
}

#navbar li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

#navbar li a:hover {
  background-color: #591BB7;
}
</style>


