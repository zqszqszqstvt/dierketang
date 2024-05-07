<template>
    <div class="box">
        <el-dialog
            :title="alertMsg"
            :visible.sync="visidialog"
        >
        </el-dialog>
        <div class="courseinfomations">
            <div class="courseinfo" style="width: 50%;">
            <CourseInfomation v-for="(item,index) in CourseInfos" :key="index" :CourseInfo="item"/>
            </div>
        </div>
        <div class="demo-pagination-block">
            <div class="demonstration"></div>
              <el-pagination
                v-model:current-page="currentPage"
                v-model:page-size="pageSize"
                :page-sizes="[10, 15, 20, 30]"
                :small="small"
                :disabled="disabled"
                :background="background"
                layout="total, sizes, prev, pager, next, jumper"
                :total="newsTotal"
              />
          </div>
    </div>
</template>

<script>
import CourseInfomation from './CourseInfomation.vue'
export default{
    name:'CourseInfoPage',
    data() {
        return{
        CourseInfos:[],
        alertMsg:'',
        visidialog:false,
        //分页
        currentPage: 1,
        pageSize: 10,
        small: false,
        background: false,
        disabled: false,
        newsTotal: 10,
        };
    },
    watch: {
    currentPage(newVal, oldVal) {
      this.loadData()
    },
    pageSize(newVal, oldVal) {
      this.loadData()
    }
  },
    components: {
        CourseInfomation
    },
    async created(){
        this.netrequest();
        this.loadData();
    },
    methods: {
        netrequest(){

            this.CourseInfos = [
            {title:"人工智能创新实验室",image: "123.jpg",link: null,introduction:"有课程资源、数据集资源和试题资源。",clickTimes: 1},
            {title:"人工智能创新实验室",image: "123.jpg",link: null,introduction:"有课程资源、数据集资源和试题资源。",clickTimes: 1},
            {title:"人工智能创新实验室",image: "123.jpg",link: null,introduction:"有课程资源、数据集资源和试题资源。",clickTimes: 1},
            {title:"人工智能创新实验室",image: "123.jpg",link: null,introduction:"有课程资源、数据集资源和试题资源。",clickTimes: 1},
            {title:"人工智能创新实验室",image: "123.jpg",link: null,introduction:"有课程资源、数据集资源和试题资源。",clickTimes: 1},
            {title:"人工智能创新实验室",image: "123.jpg",link: null,introduction:"有课程资源、数据集资源和试题资源。",clickTimes: 1},
            ]
        },
        loadData() {
            this.request.get("/api/user/disi/list",{
          params: {
            page: this.currentPage,
            size: this.pageSize,
          }
        })
      .then(res => {
            this.CourseInfos = res.data.records
            this.newsTotal = res.data.total / this.pageSize + 1
        })
        .catch(error => {
          console.error(error);
        });
        }
    }
}
</script>

<style scoped>

.box{

}

.navigate{
    display: flex;
    justify-content: center;
    background-color: #f5f5f5;
}

.courseinfomations{
    display: flex;
    justify-content: center;
    background-color: #f5f5f5;
}

.courseinfo {
    background-color: #FFFFFF;
    border-radius: 10px;
}

.icon{
    display: inline-block;
    height: 16px;
    width: 16px;
    background-image: url('https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb4a5129f6d66eea0273f2f4d5a10e39af42f726bd488f6400c129730ac79ece4');
    background-repeat: no-repeat;
    position: absolute;
    top: 21%;
    left: 1200px
}

::v-deep .search .el-input__inner{
    padding: 0px 20px;
    margin-bottom: 10px;
    border-radius: 6px;
    width: 200px;
    height: 40px;
    border: 1px solid rgba(219, 219, 219, 1);
    margin-left: 40px;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb4a5129f6d66eea0273f2f4d5a10e39af42f726bd488f6400c129730ac79ece4) no-repeat 170px center;
}

.box-serch{
    padding-top:40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

::v-deep.el-pagination{
    padding:2px 0px;
    justify-content: center;
    background-color: #f5f5f5
    
}
::v-deep .el-pager li {
    margin:0px 4px;
    background-color: #f5f5f5
}


:deep(.el-input__wrapper){
    box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
    border: none; /* 对border进行样式修改 */
    background-color:#f5f5f5
}
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}

</style>
