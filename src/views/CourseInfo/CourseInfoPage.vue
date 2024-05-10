<template>
    <div class="box">
        <el-dialog
            :title="alertMsg"
            :visible.sync="visidialog"
        >
        </el-dialog>
        <div class="navigate">
            <CourseInfoChoose @getCourseInfo="getCourseInfo" :categories="categories"/>
            <div class="box-serch" @keyup.enter="loadData">
            <el-autocomplete 
                type="text" 
                class="search" 
                placeholder="搜索课程"
                autocomplete="off"
                v-model="searchInfo"
                :fetch-suggestions="querySearch"
                @select="handleSelect"
            ></el-autocomplete>
            </div>
        </div>
        <div class="courseinfomations">
            <div class="courseinfo">
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
import CourseInfoChoose from './CourseInfoChoose.vue'
import CourseInfomation from './CourseInfomation.vue'
export default{
    name:'CourseInfoPage',
    data() {
        return{
        categories: [],
        CourseInfos:[],
        selectedCategory: '',
        alertMsg:'',
        visidialog:false,
        //分页
        currentPage: 1,
        pageSize: 10,
        small: false,
        background: false,
        disabled: false,
        newsTotal: 10,

        searchInfo:'',
        prompt: []
        };
    },
    watch: {
    currentPage(newVal, oldVal) {
      this.loadData()
    },
    pageSize(newVal, oldVal) {
      this.loadData()
    },
    selectedCategory() {
      this.loadData()
    }
  },
    components: {
        CourseInfoChoose,
        CourseInfomation
    },
    async created(){
        this.netrequest();
        this.loadData();
    },
    methods: {
        netrequest(){
            this.categories=[
                {title:'全部',active: true},
                {title:'程序设计与开发',active:false},
                {title:'计算机基础与应用',active:false},
                {title:'软件工程',active:false},
                {title:'网络与安全技术',active:false},
                {title:'硬件系统原理',active:false}
            ]
            this.CourseInfos = [
                {image:'https://img2.baidu.com/it/u=1146356794,2232267389&fm=253&fmt=auto&app=138&f=JPEG?w=820&h=500',title:'如何学好JAVA',teacher:'王强',university:'武汉工程大学',introduction:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {image:'https://img2.baidu.com/it/u=1146356794,2232267389&fm=253&fmt=auto&app=138&f=JPEG?w=820&h=500',title:'如何学好JAVA',teacher:'王强',university:'武汉工程大学',introduction:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {image:'https://img2.baidu.com/it/u=1146356794,2232267389&fm=253&fmt=auto&app=138&f=JPEG?w=820&h=500',title:'如何学好JAVA',teacher:'王强',university:'武汉工程大学',introduction:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {image:'https://img2.baidu.com/it/u=1146356794,2232267389&fm=253&fmt=auto&app=138&f=JPEG?w=820&h=500',title:'如何学好JAVA',teacher:'王强',university:'武汉工程大学',introduction:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {image:'https://img2.baidu.com/it/u=1146356794,2232267389&fm=253&fmt=auto&app=138&f=JPEG?w=820&h=500',title:'如何学好JAVA',teacher:'王强',university:'武汉工程大学',introduction:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
            ]
        },
        loadData() {
            this.request.get("/api/user/disi/list",{
          params: {
            type: this.selectedCategory,
            text: this.searchInfo,
            pageid: this.currentPage,
            pagesum: this.pageSize,
          }
        })
      .then(res => {
            this.CourseInfos = res.data.records
            this.newsTotal = res.data.total
        })
        .catch(error => {
          console.error(error);
        });
        },
        getCourseInfo(selectedCategory) {
            this.selectedCategory = selectedCategory
        },
        querySearch(queryString,cb){
            this.request.get("/api/user/disi/list",{
          params: {
            type: '全部',
            text: this.searchInfo,
            pageid: this.currentPage,
            pagesum: this.pageSize,
          }
        })
      .then(res => {
            this.prompt = res.data.records
        })
        .catch(error => {
          console.error(error);
        });
            cb(this.prompt)
        },
        handleSelect(item){
            this.searchInfo=item.value
            this.loadData()
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
