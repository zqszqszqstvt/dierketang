<template>
  <el-container style="margin-top: 10px">
    <el-footer>
      <el-pagination style="display: flex;justify-content: center"
                     v-model:current-page="currentPage"
                     background
                     :page-size="10"
                     :pager-count="11"
                     layout="prev, pager, next, jumper"
                     @current-change="handleCurrentChange"
                     :total="1000">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Page",
  data(){
    return{
      currentPage: 1
    }
  },
  methods:{
    handleCurrentChange(currentPage){
      this.$emit('avertCurPage', currentPage);//子组件向父组件传递当前页码
    }
  }
}
</script>

<style scoped>

</style>
