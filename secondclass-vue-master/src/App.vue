<template>
  <div id="app">
    <!--    <router-view name="loginPage"></router-view>
    <div>

  </div>-->
    <Layout>
      <router-view name="content"></router-view>
    </Layout>
  </div>
</template>

<script>
import SecondClassNavbar from "./components/SecondClassNavbar.vue";
import Navigate from "@/components/Navigate";
import Page from "./components/Page";
import Login from "./views/Login";
import Layout from "@/components/layout/index.vue";

export default {
  data() {
    return {
      state: false,
    };
  },
  components: {
    Layout,
    SecondClassNavbar,
    Navigate,
    Page,
    Login,
  },

  methods: {
    changeState() {
      this.state = true;
      if (localStorage.getItem("user") !== null) {
        localStorage.removeItem("user");
      }
    },
  },
  created() {
    if (localStorage.getItem("user") !== null) {
      this.state = false;
    }
    localStorage.setItem("state", this.state);
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
