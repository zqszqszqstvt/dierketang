import { createStore } from 'vuex'

export default createStore({
  state: {
    competitionType: '全部',
    competitionLevelType: '全部',
    competitionSortType: '按时间排序',
    industryType: "全部",
    companyType: "全部",
    jobSourceType: "全部",
    firstDateType: "全部"
  },
  actions: {
    updateCondition1(context,value) {
      context.commit('UpdateCondition1',value)
    },
    updateCondition2(context,value) {
      context.commit('UpdateCondition2',value)
    },
    updateCondition3(context,value) {
      context.commit('UpdateCondition3',value)
    },

    updatePractice1(context,value) {
      context.commit('UpdatePractice1',value)
    },
    updatePractice2(context,value) {
      context.commit('UpdatePractice2',value)
    },
    updatePractice3(context,value) {
      context.commit('UpdatePractice3',value)
    },
    updatePractice4(context,value) {
      context.commit('UpdatePractice4',value)
    },
  },
  mutations: {
    UpdateCondition1(state,value) {
      state.competitionType=value
      console.log('vuex的competitionType更新了！')
    },
    UpdateCondition2(state,value) {
      state.competitionLevelType=value
    },
    UpdateCondition3(state,value) {
      state.competitionSortType=value
    },
    UpdatePractice1(state,value) {
      state.industryType=value
      console.log('vuex的industryType更新了！')
    },
    UpdatePractice2(state,value) {
      state.companyType=value
    },
    UpdatePractice3(state,value) {
      state.jobSourceType=value
    },
    UpdatePractice4(state,value) {
      state.firstDateType=value
    },
  },
  getters: {}
})
