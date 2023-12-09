<template>
  <div id="app">
    <!-- <CompetitionPage/> -->
    <!-- <MyCompetitionPage/> -->
    <KaoYanBaoYanPage/>

  </div>
</template>

<script>
import CompetitionPage from './components/CompetitionPage'
import MyCompetitionPage from './components/MyCompetitionPage'
import KaoYanBaoYanPage from './components/KaoYanBaoYanPage'

export default {
  name: 'App',
  components: {
    CompetitionPage,
    MyCompetitionPage,
    KaoYanBaoYanPage
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>>


