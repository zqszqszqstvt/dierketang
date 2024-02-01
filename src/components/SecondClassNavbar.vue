<!-- eslint-disable vue/no-unused-vars -->

<template>
  <el-menu
    :default-active="activeIndex1"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link to="/">考研保研</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/SecondClassJob">就业</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/SecondClassTech">技术</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/">竞赛</router-link></el-menu-item>
  </el-menu>
</template>



<style scoped>
.router-link-exact-active {
  text-decoration: none;
}
</style>

<script>
  export default {
    name: "SecondClassNavbar",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
