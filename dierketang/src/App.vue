<template>
  <div id="app">
    <!-- <CompetitionPage/> -->
    <MyCompetitionPage/>
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
</style>


