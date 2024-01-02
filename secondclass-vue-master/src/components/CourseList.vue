

<template>
  <div style="width: 100%; min-width: 400px">
    <div class="div1">
        <CourseLink v-for="(a) in range" :picture='list1[a].picture'
                    :name="list1[a].name" :schedule="list1[a].schedule"
                    :CourseId="list1[a].couresID" :heat="list1[a].heat"
                    style="margin:auto" />
    </div>
  </div>
</template>

<script>
import CourseLink from "@/components/CourseLink.vue";
import picture from "@element-plus/icons/lib/Picture.js";
export default {
  name: "CourseList",
  components:{
    CourseLink
  },
  props:["list1"],
  data(){
    return{
      page:1,
      edPage:1,
      startIdx:0,
      endIdx:14,
      operate:[]
    }
  },
  watch: {
    // 监听list1的变化
    list1: {
      handler: 'initializeEdPage',
      immediate: true, // 立即执行一次
    },
  },

  methods: {
    initializeEdPage(newValue) {
      this.endIdx=Math.min(14,this.list1.length-1);
      this.edPage = newValue.length % 15 > 0 ? Math.floor(newValue.length / 15) + 1 : Math.floor(newValue.length / 15);
    },
  },
  computed: {
    picture() {
      return picture
    },
    range() {
      const result = [];
      for(let i=0;i<this.list1.length;i++) result.push(i);
      return result;
    },
  },
}
</script>

<style scoped>
.button{
  border: none;
}
.div1{
  min-height: 300px;
  gap: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>