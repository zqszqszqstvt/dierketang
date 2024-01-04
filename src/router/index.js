//创建整个应用的路由器

import VueRouter from "vue-router"
import ClassScorePage from '../components/ClassScorePage'
import CompetitionPage from '../components/CompetitionPage'
import KaoYanBaoYanPage from '../components/KaoYanBaoYanPage'
import MyCompetitionPage from '../components/MyCompetitionPage'
import ThirdClassPage from '../components/ThirdClassPage'
export default new VueRouter({
    routes:[
      {path:'/ThirdClassPage',
   component: ThirdClassPage},
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