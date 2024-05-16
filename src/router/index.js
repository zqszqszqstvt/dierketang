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
import ClassScore from "@/views//ClassScore/ClassScorePage.vue"
import CompetitionInfo from "@/views/CompetitionInfo/CompetitionPage.vue"
import KaoYanBaoYan from "@/views/KaoYanBaoYan/KaoYanBaoYanPage.vue"
import MyCompetition from "@/views/MyCompetition/MyCompetitionPage.vue"
import CourseInfo from "@/views/CourseInfo/CourseInfoPage.vue"
import Recruitment from "@/views/Recruitment/RecruitmentPage.vue"
import PracticeInfo from "@/views/PracticeInfo/PracticeInfoPage.vue"
import MyCourse from "@/views/MyCourse/myCourse.vue"
import FourthClassChoose from "@/views/FourthClassChoose/FourthClassChoosePage.vue"
import CourseDetail from "@/views/CourseInfo/CourseDetail.vue"
import newLogin from "@/views/NewLogin/NewLogin.vue"
import ThirdClass from "@/views/ThirdClass/ThirdClassPage.vue"
import NewRegister from "@/views/Register/index.vue"
import ShiYan from "@/views/ShiYan/CourseInfoPage.vue"
import Nenglihuaxiang from "@/views/Nenglihuaxiang/page.vue"
import request from "@/utils/request";
// import NewLogin from "@/views/NewLogin/NewLogin.vue"
// import student from "@/views/NewLogin/student.vue"
// import teacher from "@/views/NewLogin/teacher.vue"

const routes = [
  // {
  //   path: "/NewLogin",
  //   components: {
  //     content: NewLogin,
  //   },
  //   children: [
  //     {
  //       path: 'student',
  //       component: student
  //     },
  //     {
  //       path: 'teacher',
  //       component: teacher
  //     }]
  // },
  {
    path: "/NewRegister",
    name: 'NewRegister',
    components: {
      content:NewRegister
    }
  },
  {
    path: "/newLogin",
    name: 'newLogin',
    components: {
      content:newLogin
    }
  },
  {
    path: "/ThirdClass",
    name: 'ThirdClass',
    components: {
      content:ThirdClass
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/PracticeInfo",
    name: 'PracticeInfo',
    components: {
      content: PracticeInfo,
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/CompetitionInfo",
    name: 'CompetitionInfo',
    components: {
      content: CompetitionInfo,
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/KaoYanBaoYan",
    name: 'KaoYanBaoYan',
    components: {
      content: KaoYanBaoYan,
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/MyCompetition",
    name: 'MyCompetition',
    components: {
      content: MyCompetition,
    },
    meta: { requiresAuth: true }
  },
  
  {
    path: "/CourseInfo",
    name: 'CourseInfo',
    components: {
      content: CourseInfo,
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/ShiYan",
    name: 'ShiYan',
    components: {
      content: ShiYan,
    },
    meta: { requiresAuth: true }
  },
  {  
    path: "/CourseDetail",
    name: "CourseDetail",
    components: {
      content: CourseDetail,
    }, 
    meta: { requiresAuth: true }
  },
  {
    path: "/FourthClassChoose",
    name: 'FourthClassChoose',
    components: {
      content: FourthClassChoose,
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/Recruitment",
    name: 'Recruitment',
    components: {
      content: Recruitment,
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/ClassScore",
    name: 'ClassScore',
    components: {
      content: ClassScore,
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/MyCourse",
    name: 'MyCourse',
    components: {
      content: MyCourse,
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/Nenglihuaxiang",
    name: 'Nenglihuaxiang',
    components: {
      content: Nenglihuaxiang,
    },
    meta: { requiresAuth: true }
  },
  {
    path:'/home',
    name: 'home',
    components: {
      content: HomePage,
    },
    meta: { requiresAuth: true }
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

  // {
  //   path: "/",
  //   components: {
  //     content: PostRecom,
  //   },
  // },
  {
    path: "/",
    redirect: "/home"
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
  }
  
];

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes
});

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const token = localStorage.getItem('Token');

  if (requiresAuth && token) {
    try {
      const response = await request.get("/api/user/pic/getscore", {
        params: {
          id: localStorage.getItem('id')
        }
      });
      if (response.code === 1) {
        // 如果 token 有效，继续导航
        next();
      } else {
        next({ name: 'newLogin', query: { redirect: to.fullPath } });
      }
    } catch (error) {
      console.error('Token validation failed:', error);
      next({ name: 'newLogin', query: { redirect: to.fullPath } });
    }
  } else if (requiresAuth && !token) {
    next({ name: 'newLogin', query: { redirect: to.fullPath } });
  } else if (!requiresAuth) {
    next();
  }
});



export default router;
