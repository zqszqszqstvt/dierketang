<template>
  <el-container>
    <Navigate/>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="招聘信息" name="first">
          <el-input
              v-model="searchText"
              placeholder="请输入搜索内容"
              style="width: 200px"
              prefix-icon="el-icon-search"
              @keyup.enter="search"
          />
          <el-button type="primary" @click="search">搜索</el-button>
          <div>
            <el-descriptions
                :border="false"
                :column="1"
                v-for="recruitInfo in recruitInfoList"
                :key="recruitInfo.recruitId"
            >
              <el-descriptions-item label="公司名">
                /*recruitInfo.companyName*/
              </el-descriptions-item>
              <el-descriptions-item label="岗位">
                /*recruitInfo.jobName*/
              </el-descriptions-item>
              <el-descriptions-item label="JD">
                /*recruitInfo.recruitJd*/
              </el-descriptions-item>
              <el-descriptions-item label="招聘流程">
                /*recruitInfo.recruitFlow*/
              </el-descriptions-item>
              <el-descriptions-item label="薪资">
                /*recruitInfo.pay*/
              </el-descriptions-item>
              <el-descriptions-item label="工作地点">
                /*recruitInfo.workPlace*/
              </el-descriptions-item>
              <el-descriptions-item label="待遇">
                /*recruitInfo.treatment*/
              </el-descriptions-item>
            </el-descriptions>

            <el-pagination
                @current-change="handleCompanyPageChange"
                :current-page="currentPage"
                :page-size="pageSize"
                :total="total"
                layout="prev, pager, next, jumper"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="公司" name="second">
          <el-input
              v-model="searchText"
              placeholder="请输入搜索内容"
              style="width: 200px"
              prefix-icon="el-icon-search"
              @keyup.enter="search"
          />
          <el-button type="primary" @click="search">搜索</el-button>

          <div>
            <el-descriptions
                :border="false"
                :column="1"
                v-for="company in companyList"
                :key="company.id"
            >
              <el-descriptions-item label="公司名称">
                /*company.name*/
              </el-descriptions-item>
              <el-descriptions-item label="公司性质">
                /*company.nature*/
              </el-descriptions-item>
              <el-descriptions-item label="是否上市">
                /*company.isAppear ? "是" : "否"*/
              </el-descriptions-item>
              <el-descriptions-item label="创立时间">
                /*company.createTime*/
              </el-descriptions-item>
              <el-descriptions-item label="业务简介">
                /*company.introduction*/
              </el-descriptions-item>
            </el-descriptions>
            <el-pagination
                @current-change="handleRecruitInfoPageChange"
                :current-page="currentPage"
                :page-size="pageSize"
                :total="total"
                layout="prev, pager, next, jumper"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="面经" name="third">
          <el-input
              v-model="searchText"
              placeholder="请输入搜索内容"
              style="width: 200px"
              prefix-icon="el-icon-search"
              @keyup.enter="search"
          />
          <el-button type="primary" @click="search">搜索</el-button>

          <div>
            <el-descriptions
                :border="false"
                :column="1"
                v-for="skill in skillList"
                :key="skill.skillId"
            >
              <el-descriptions-item label="标题">
                /*skill.skillName*/
              </el-descriptions-item>
              <el-descriptions-item label="内容">
                /*skill.skillContent*/
              </el-descriptions-item>
            </el-descriptions>
            <el-pagination
                @current-change="handleSkillsPageChange"
                :current-page="currentPage"
                :page-size="pageSize"
                :total="total"
                layout="prev, pager, next, jumper"
            />
          </div>
        </el-tab-pane>
      </el-tabs>
    <Page/>
  </el-container>
</template>

<script>
import axios from "axios";
import { ElPagination } from 'element-plus'
import Navigate from "@/components/Navigate";
import Page from "@/components/Page";
/*const instance = axios.create({
  baseURL: 'http://localhost:9000' // 设置请求的 base 路径
});*/
export default {
  name: "SecondClassJob",
  data() {
    return {
      activeName: "second",
      currentPage: 1, // 当前页数
      pageSize: 10, // 每页显示的公司数
      companyList: [], // 公司列表
      total: 0, // 公司总数
      recruitInfoList: [], // 招聘信息列表
      skillList: [] // 面经列表
    };
  },
  components: {
    ElPagination,Navigate,Page
  },
  created() {
    /*this.handleCompanyPageChange(1); // 初始化页面时加载第一页的公司列表
  this.handleRecruitInfoPageChange(1);
  this.handleSkillsPageChange(1);*/
    axios.get('http://localhost:9000/job/company/selectCompanyById/4').then((response)=>{
      console.log("返回的数据为:");
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleCompanyPageChange(newCompanyPage) {
      console.log(`页数变化为：${newCompanyPage}`);
      /*instance
        .get("/api/job/company/searchCompany", {
          params: {
            num: newCompanyPage, // 将新的页数作为参数传递给服务器
            size: this.pageSize, // 将每页显示的公司数也作为参数传递给服务器
          },
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        
        .then((response) => {
          console.log(response.data);
          this.companyList = response.data.data;
          this.total = response.data.total;
          this.currentPage = newCompanyPage;
        })
        .catch((error) => {
          console.log(error);
        });*/
    },
    handleRecruitInfoPageChange(newRecruitInfoPage) {
      /*console.log(`页数变化为：${newRecruitInfoPage}`);
      // 加载第一页的招聘信息列表
      instance.get("/api/job/recruitInfo/searchRecruitInfo", {
          params: {
            num: newRecruitInfoPage,
            size: this.pageSize,
          },
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        }).then((response) => {
          console.log(response.data);
          this.recruitInfoList = response.data.data;
        }).catch((error) => {
          console.log(error);
        });*/
    },
    handleSkillsPageChange(newSkillsPage) {
      /*console.log(`页数变化为：${newSkillsPage}`);
      // 加载第一页的面经列表
      instance.get("/api/job/skills/searchSkills", {
            params: {
              num: newSkillsPage,
              size: this.pageSize,
            },
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
          }).then((response) => {
            console.log(response.data);
            this.skillList = response.data.data;
          }).catch((error) => {
            console.log(error);
          });
    }*/
    }
  }
}
</script>