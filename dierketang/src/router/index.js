//创建整个应用的路由器

import VueRouter from "vue-router"
import ClassScorePage from '../components/ClassScorePage'
import CompetitionPage from '../components/CompetitionPage'
import KaoYanBaoYanPage from '../components/KaoYanBaoYanPage'
import MyCompetitionPage from '../components/MyCompetitionPage'
export default new VueRouter({
    routes:[
        {
           path: '/ClassScorePage',
           component:ClassScorePage
        },
        {
           path: '/CompetitionPage',
           component:CompetitionPage
        },
        {
           path: '/KaoYanBaoYanPage',
           component:KaoYanBaoYanPage
        },
        {
           path: '/MyCompetitionPage',
           component:MyCompetitionPage
        },
    ]
})