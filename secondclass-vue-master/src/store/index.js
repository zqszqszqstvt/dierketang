import { createStore } from 'vuex'

export default createStore({
  state: {
    competitionType: '全部',
    competitionLevelType: '全部',
    competitionSortType: '按时间排序'
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
  },
  getters: {}
})
