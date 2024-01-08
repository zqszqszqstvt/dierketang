

<template>
  <div style="width: 100%; min-width: 400px">
    <div style="gap: 10px; width: 100%; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-between; min-height: 300px;">
        <CourseLink v-for="(a) in range" :picture='list1[a].picture' :link="list1[a].link" :name="list1[a].name" :schedule="list1[a].schedule"
                    style="margin:0" />
    </div>
  </div>
</template>

<script>
import CourseLink from "./CourseLink.vue";
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
    resettingPage(){
      this.operate.push(this.page);
      this.page=1;
      this.startIdx=0;
      this.endIdx=Math.min(14,this.list1.length-1);
    },
    nextPage(){
      if(this.page>=this.edPage) return;
      this.operate.push(this.page);
      this.page++;
      this.startIdx+=15;
      this.endIdx=Math.min(this.endIdx+15,this.list1.length-1);
    },
    lastPage() {
      if(this.page<=1) return;
      this.operate.push(this.page);
      this.page--;
      this.startIdx=Math.max(0,this.startIdx-15);
      this.endIdx=this.startIdx+14;
    },
    backtrack(){
      if(this.operate.length<=0) return;
      this.page=this.operate[this.operate.length-1];
      this.operate.pop();
      this.startIdx=(this.page-1)*15;
      this.endIdx=Math.min(this.startIdx+14,this.list1.length-1);
    }
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
</style>