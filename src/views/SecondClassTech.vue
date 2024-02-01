<template>
  <Navigate/>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="技术方向" name="first">
        <el-descriptions title="Info">
          <el-descriptions-item label="技术方向名称">java</el-descriptions-item>
          <el-descriptions-item label="介绍">Java</el-descriptions-item>
          <el-descriptions-item label="就业岗位">Java开发</el-descriptions-item>
          <el-descriptions-item label="学习路线">学习Java</el-descriptions-item>
        </el-descriptions>
        <el-descriptions title="Info">
          <el-descriptions-item label="技术方向名称">c++</el-descriptions-item>
          <el-descriptions-item label="介绍">c++</el-descriptions-item>
          <el-descriptions-item label="就业岗位">c++开发</el-descriptions-item>
          <el-descriptions-item label="学习路线">学习c++</el-descriptions-item>
        </el-descriptions>
        <el-descriptions title="Info">
            <el-descriptions-item label="技术方向名称">c++</el-descriptions-item>
          <el-descriptions-item label="介绍">c++</el-descriptions-item>
          <el-descriptions-item label="就业岗位">c++开发</el-descriptions-item>
          <el-descriptions-item label="学习路线">学习c++</el-descriptions-item>
        </el-descriptions>
      </el-tab-pane>
      <el-tab-pane label="课程" name="second">
        <el-descriptions title="Info">
          <el-descriptions-item label="课程名称">软件工程</el-descriptions-item>
          <el-descriptions-item label="课程时长">200min</el-descriptions-item>
          <el-descriptions-item label="关联技术点">java</el-descriptions-item>
          <el-descriptions-item label="图片链接">链接 </el-descriptions-item>
          <el-descriptions-item label="课程链接">链接</el-descriptions-item>
        </el-descriptions>
        <el-descriptions title="Info">
          <el-descriptions-item label="课程名称">软件工程</el-descriptions-item>
          <el-descriptions-item label="课程时长">200min</el-descriptions-item>
          <el-descriptions-item label="关联技术点">java</el-descriptions-item>
          <el-descriptions-item label="图片链接">链接 </el-descriptions-item>
          <el-descriptions-item label="课程链接">链接</el-descriptions-item>
        </el-descriptions>
        <el-descriptions title="Info">
          <el-descriptions-item label="课程名称">软件工程</el-descriptions-item>
          <el-descriptions-item label="课程时长">200min</el-descriptions-item>
          <el-descriptions-item label="关联技术点">java</el-descriptions-item>
          <el-descriptions-item label="图片链接">链接 </el-descriptions-item>
          <el-descriptions-item label="课程链接">链接</el-descriptions-item>
        </el-descriptions>
      </el-tab-pane>
      <el-tab-pane label="项目" name="third">
        <el-descriptions title="Info">
          <el-descriptions-item label="项目名称">高校第二课堂</el-descriptions-item>
          <el-descriptions-item label="技术方向">java</el-descriptions-item>
          <el-descriptions-item label="技术点">springcloud</el-descriptions-item>
          <el-descriptions-item label="项目链接">链接</el-descriptions-item>
          <el-descriptions-item label="图片链接">链接</el-descriptions-item>
          <el-descriptions-item label="项目业务介绍">第二课堂</el-descriptions-item>
        </el-descriptions>
        <el-descriptions title="Info">
          <el-descriptions-item label="项目名称">高校第二课堂</el-descriptions-item>
          <el-descriptions-item label="技术方向">java</el-descriptions-item>
          <el-descriptions-item label="技术点">springcloud</el-descriptions-item>
          <el-descriptions-item label="项目链接">链接</el-descriptions-item>
          <el-descriptions-item label="图片链接">链接</el-descriptions-item>
          <el-descriptions-item label="项目业务介绍">第二课堂</el-descriptions-item>
        </el-descriptions>
        <el-descriptions title="Info">
          <el-descriptions-item label="项目名称">高校第二课堂</el-descriptions-item>
          <el-descriptions-item label="技术方向">java</el-descriptions-item>
          <el-descriptions-item label="技术点">springcloud</el-descriptions-item>
          <el-descriptions-item label="项目链接">链接</el-descriptions-item>
          <el-descriptions-item label="图片链接">链接</el-descriptions-item>
          <el-descriptions-item label="项目业务介绍">第二课堂</el-descriptions-item>
        </el-descriptions>
        <el-descriptions title="Info">
          <el-descriptions-item label="项目名称">高校第二课堂</el-descriptions-item>
          <el-descriptions-item label="技术方向">java</el-descriptions-item>
          <el-descriptions-item label="技术点">springcloud</el-descriptions-item>
          <el-descriptions-item label="项目链接">链接</el-descriptions-item>
          <el-descriptions-item label="图片链接">链接</el-descriptions-item>
          <el-descriptions-item label="项目业务介绍">第二课堂</el-descriptions-item>
        </el-descriptions>
      </el-tab-pane>
     
    </el-tabs>
  <Page/>
</template>
  <script>
  import Navigate from "@/components/Navigate";
  import Page from "@/components/Page";
    export default {
      name: "SecondClassTech",
      components:{
        Navigate,Page
      },
      data() {
        return {
          activeName: 'second'
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    };
  </script>