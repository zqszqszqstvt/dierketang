import { createStore } from 'vuex'

export default createStore({
  state: {
    // 竞赛
    competitionType: '全部',
    competitionLevelType: '全部',
    // 实践
    practiceCategory: "全部",
    practiceType: "全部",
    practiceLevel: "全部",
    practiceFirstDate: "全部",
    // 招聘
    category: '互联网/IT电子/通信',
    companyNature: '上市公司',
    soure: '社招职位',
    postingDate: '一天内',
    // 弹窗 
    addCopetitionShow: false,
    addGradesShow: false,
    addPracticeShow: false,
    // 我的成绩学期选择
    term: "0"
  },
  actions: {
    // 更新竞赛卡片选择
    updateCondition1(context,value) {
      context.commit('UpdateCondition1',value)
    },
    updateCondition2(context,value) {
      context.commit('UpdateCondition2',value)
    },
    // 实践
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
    // 招聘
    updateJob1(context,value) {
      context.commit('UpdateJob1',value)
    },
    updateJob2(context,value) {
      context.commit('UpdateJob2',value)
    },
    updateJob3(context,value) {
      context.commit('UpdateJob3',value)
    },
    updateJob4(context,value) {
      context.commit('UpdateJob4',value)
    },

    // 弹窗 更新弹窗显示状态
    updateAddCompetitionShow(context) {
      context.commit('UpdateAddCompetitionShow')
    },
    updateAddGradesShow(context) {
      context.commit('UpdateAddGradesShow')
    },
    updateAddPracticeShow(context) {
      context.commit('UpdateAddPracticeShow')
    },
    // 学期选择
    updateSelectedGrade(context,value) {
      context.commit('UpdateSelectedGrade',value)
    }
  },
  mutations: {
    // 更新竞赛卡片选择
    UpdateCondition1(state,value) {
      state.competitionType=value
      console.log('vuex的competitionType更新了！')
    },
    UpdateCondition2(state,value) {
      state.competitionLevelType=value
    },
    // 实践
    UpdatePractice1(state,value) {
      state.practiceCategory=value
      console.log('vuex的industryType更新了！')
    },
    UpdatePractice2(state,value) {
      state.practiceType=value
    },
    UpdatePractice3(state,value) {
      state.practiceLevel=value
    },
    UpdatePractice4(state,value) {
      state.practiceFirstDate=value
    },
    // 招聘
    UpdateJob1(state,value) {
      state.category=value
    },
    UpdateJob2(state,value) {
      state.companyNature=value
    },
    UpdateJob3(state,value) {
      state.soure=value
    },
    UpdateJob4(state,value) {
      state.postingDate=value
    },
    // 弹窗 更新弹窗显示状态
    UpdateAddCompetitionShow(state) {
      state.addCopetitionShow=!state.addCopetitionShow
    },
    UpdateAddGradesShow(state) {
      state.addGradesShow=!state.addGradesShow
    },
    UpdateAddPracticeShow(state) {
      state.addPracticeShow=!state.addPracticeShow
    },
    // 学期选择
    UpdateSelectedGrade(state,value) {
      state.term=value
    }
  },
  getters: {}
})
