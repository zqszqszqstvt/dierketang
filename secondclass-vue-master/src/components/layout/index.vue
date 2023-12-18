<template>
  <div class="wrapper">
    <Header />
    <slot />
  </div>
</template>

<script>
import Header from "./header.vue";
export default {
  name: "HeaderBar",
  components: {
    Header,
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.wrapper {
  min-width: 1480px;
}
</style>
