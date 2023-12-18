import { createRouter, createWebHashHistory } from "vue-router";
import SecondClassLogin from "../views/SecondClassLogin.vue";
import SecondClassJob from "../views/SecondClassJob.vue";
import SecondClassTech from "../views/SecondClassTech.vue";
import Contest from "@/components/Contest";
import ContestDetail from "@/components/ContestDetail";
import Login from "@/views/Login";
import JobInfo from "@/views/JobInfo";
import TechInfo from "@/views/TechInfo";
import userCenter from "@/views/userCenter";
import myInfo from "@/views/myInfo";
import accountSafe from "@/views/accountSafe";
import JobRead from "@/views/JobRead";
import Course from "@/views/Course";
import PostRecom from "@/views/PostRecom";
import DP from "@/views/DP";
import Navigate from "@/components/Navigate";
import App from "@/App";
import { createWebHistory } from "vue-router";
import Help from "@/views/Help";
import Direction from "@/views/Direction";
import Project from "@/views/Project";
import RecruitInfo from "@/views/RecruitInfo";
import CompanyInfo from "@/views/CompanyInfo";
import myContest from "@/views/myContest";
import myJob from "@/views/myJob";
import myTech from "@/views/myTech";
import myYan from "@/views/myYan";
import ContestState from "@/views/ContestState";
import recommendContest from "@/views/recommend/recommendContest";
import recommendCurriculum from "@/views/recommend/recommendCurriculum";
import recommendPost from "@/views/recommend/recommendPost";
import recommendProject from "@/views/recommend/recommendProject";
import recommendRecruit from "@/views/recommend/recommendRecruit";
import Register from "@/views/Register";
import Choose from "@/views/Choose";
import LoginS from "@/views/LoginS";
import RegisterS from "@/views/RegisterS";
import HomePage from "@/views/home/index.vue";
import ClassScore from "@/views/ClassScore/ClassScorePage.vue"
import CompetitionInfo from "@/views/CompetitionInfo/CompetitionPage.vue"
import KaoYanBaoYan from "@/views/KaoYanBaoYan/KaoYanBaoYanPage.vue"
import MyCompetition from "@/views/MyCompetition/MyCompetitionPage.vue"

const routes = [
  {
    path: "/CompetitionInfo",
    components: {
      content: CompetitionInfo,
    },
  },
  {
    path: "/KaoYanBaoYan",
    components: {
      content: KaoYanBaoYan,
    },
  },
  {
    path: "/MyCompetition",
    components: {
      content: MyCompetition,
    },
  },
  {
    path: "/ClassScore",
    components: {
      content: ClassScore,
    },
  },
  {
    path: "/registerS",
    components: {
      content: RegisterS,
    },
  },
  {
    path: "/enterLoginS",
    components: {
      content: LoginS,
    },
  },
  {
    path: "/choose",
    components: {
      content: Choose,
    },
  },
  {
    path:'/home',
    components: {
      content: HomePage,
    },
  },
  // {
  //   path: "/",
  //   components: {
  //     content: PostRecom,
  //   },
  // },
  {
    path: "/",
    components: {
      content: HomePage,
    },
  },
  {
    path: "/login",
    name: "SecondClassLogin",
    component: SecondClassLogin,
  },
  {
    path: "/SecondClassJob",
    name: "SecondClassJob",
    components: {
      /*content:SecondClassJob*/
      content: JobInfo,
    },
    children: [
      {
        path: "mustRead",
        components: {
          mustRead: JobRead,
        },
      },
      {
        path: "recruitInfo",
        components: {
          mustRead: RecruitInfo,
        },
      },
      {
        path: "companyInfo",
        components: {
          mustRead: CompanyInfo,
        },
      },
    ],
  },
  {
    path: "/SecondClassTech",
    name: "SecondClassTech",
    components: {
      /*content:SecondClassTech*/
      content: TechInfo,
    },
    children: [
      {
        path: "Course",
        components: {
          techContent: Course,
        },
      },
      {
        path: "Direction",
        components: {
          techContent: Direction,
        },
      },
      {
        path: "Project",
        components: {
          techContent: Project,
        },
      },
    ],
  },
  {
    path: "/contest",
    name: "Contest",
    components: {
      content: Contest,
    },
  },
  {
    path: "/detail",
    name: "detail",
    components: {
      content: ContestDetail,
    },
  },
  {
    path: "/enterLogin",
    components: {
      content: Login,
    },
  },

  {
    path: "/register",
    components: {
      content: Register,
    },
  },
  {
    path: "/userCenter",
    components: {
      content: userCenter,
    },
    children: [
      {
        path: "myInfo",
        components: {
          userCenter: myInfo,
        },
      },
      {
        path: "recommendContest",
        components: {
          userCenter: recommendContest,
        },
      },
      {
        path: "recommendCurriculum",
        components: {
          userCenter: recommendCurriculum,
        },
      },
      {
        path: "recommendPost",
        components: {
          userCenter: recommendPost,
        },
      },
      {
        path: "recommendProject",
        components: {
          userCenter: recommendProject,
        },
      },
      {
        path: "recommendRecruit",
        components: {
          userCenter: recommendRecruit,
        },
      },
      {
        path: "mySafe",
        components: {
          userCenter: accountSafe,
        },
      },
    ],
  },
  {
    path: "/postRecom",
    components: {
      content: PostRecom,
    },
  },
  {
    path: "/dp",
    components: {
      content: DP,
    },
  },
  {
    path: "/help",
    components: {
      content: Help,
    },
  },
];

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes,
});

// router.beforeEach((to,from,next)=>{
//   if(to.path!=='/registerS'&&to.path!=='/choose'&&to.path!=='/enterLoginS'&&to.path!=='/enterLogin' &&to.path!=='/register' && localStorage.getItem("user")===null){//登录成功
//     next('/choose');
//   }else{
//     next();
//   }
// })
export default router;
