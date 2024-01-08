<template>
    <div class="box">
        <el-dialog
            :title="alertMsg"
            :visible.sync="visidialog"
        >
        </el-dialog>
        <div class="navigate">
            <CourseInfoChoose @getCourseInfo="getCourseInfo" :categories="categories"/>
            <div class="box-serch" @keyup.enter="searchTo">
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
            <CourseInfomation v-for="(item,index) in itemInfos" :key="index" :CourseInfo="item"/>
            </div>
        </div>
        <div>
            <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            layout="prev,pager,next"
            :total="total"
            hide-on-single-page
            >
            </el-pagination>
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
        itemInfos:[],
        restaurants:[],
        alertMsg:'',
        visidialog:false,
        //分页
        total:1,
        currentPage:1,
        pageSize:4,
        searchInfo:''
        };
    },
    components: {
        CourseInfoChoose,
        CourseInfomation
    },
    async created(){
        this.netrequest();
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
                {cimage:'https://img2.baidu.com/it/u=1146356794,2232267389&fm=253&fmt=auto&app=138&f=JPEG?w=820&h=500',cname:'如何学好JAVA',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {cimage:'https://img1.baidu.com/it/u=4255809981,1367127287&fm=253&fmt=auto&app=138&f=JPEG?w=807&h=500',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {cimage:'https://img2.baidu.com/it/u=4069565263,419463362&fm=253&fmt=auto&app=138&f=JPEG?w=713&h=400',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {cimage:'https://img2.baidu.com/it/u=3696494615,273107722&fm=253&fmt=auto&app=120&f=JPEG?w=570&h=359',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {cimage:'https://img2.baidu.com/it/u=1146356794,2232267389&fm=253&fmt=auto&app=138&f=JPEG?w=820&h=500',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {cimage:'https://img1.baidu.com/it/u=4255809981,1367127287&fm=253&fmt=auto&app=138&f=JPEG?w=807&h=500',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {cimage:'https://img2.baidu.com/it/u=4069565263,419463362&fm=253&fmt=auto&app=138&f=JPEG?w=713&h=400',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {cimage:'https://img2.baidu.com/it/u=3696494615,273107722&fm=253&fmt=auto&app=120&f=JPEG?w=570&h=359',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {cimage:'https://img2.baidu.com/it/u=1146356794,2232267389&fm=253&fmt=auto&app=138&f=JPEG?w=820&h=500',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {cimage:'https://img1.baidu.com/it/u=4255809981,1367127287&fm=253&fmt=auto&app=138&f=JPEG?w=807&h=500',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {cimage:'https://img2.baidu.com/it/u=4069565263,419463362&fm=253&fmt=auto&app=138&f=JPEG?w=713&h=400',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {cimage:'https://img2.baidu.com/it/u=3696494615,273107722&fm=253&fmt=auto&app=120&f=JPEG?w=570&h=359',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
                {cimage:'https://img2.baidu.com/it/u=3696494615,273107722&fm=253&fmt=auto&app=120&f=JPEG?w=570&h=359',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远!'},
            ]
            this.total = this.CourseInfos.length
            this.getPageInfo()
        },
        getCourseInfo(CourseName){
            console.log(CourseName)
            switch (CourseName) {
                case "全部":
                    this.CourseInfos = [
                    {cimage:'https://img2.baidu.com/it/u=1146356794,2232267389&fm=253&fmt=auto&app=138&f=JPEG?w=820&h=500',cname:'如何学好Python',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远'},
                    {cimage:'https://img1.baidu.com/it/u=4255809981,1367127287&fm=253&fmt=auto&app=138&f=JPEG?w=807&h=500',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远'},
                    {cimage:'https://img2.baidu.com/it/u=4069565263,419463362&fm=253&fmt=auto&app=138&f=JPEG?w=713&h=400',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远'},
                    {cimage:'https://img2.baidu.com/it/u=3696494615,273107722&fm=253&fmt=auto&app=120&f=JPEG?w=570&h=359',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远'},
                    {cimage:'https://img2.baidu.com/it/u=1146356794,2232267389&fm=253&fmt=auto&app=138&f=JPEG?w=820&h=500',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远'},
                    {cimage:'https://img1.baidu.com/it/u=4255809981,1367127287&fm=253&fmt=auto&app=138&f=JPEG?w=807&h=500',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远'},
                    {cimage:'https://img2.baidu.com/it/u=4069565263,419463362&fm=253&fmt=auto&app=138&f=JPEG?w=713&h=400',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远'},
                    {cimage:'https://img2.baidu.com/it/u=3696494615,273107722&fm=253&fmt=auto&app=120&f=JPEG?w=570&h=359',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远'},
                    {cimage:'https://img2.baidu.com/it/u=1146356794,2232267389&fm=253&fmt=auto&app=138&f=JPEG?w=820&h=500',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远'},
                    {cimage:'https://img1.baidu.com/it/u=4255809981,1367127287&fm=253&fmt=auto&app=138&f=JPEG?w=807&h=500',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远'},
                    {cimage:'https://img2.baidu.com/it/u=4069565263,419463362&fm=253&fmt=auto&app=138&f=JPEG?w=713&h=400',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远'},
                    {cimage:'https://img2.baidu.com/it/u=3696494615,273107722&fm=253&fmt=auto&app=120&f=JPEG?w=570&h=359',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远'},
                    {cimage:'https://img2.baidu.com/it/u=3696494615,273107722&fm=253&fmt=auto&app=120&f=JPEG?w=570&h=359',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远'},
                    ]
                    this.total = this.CourseInfos.length
                    this.handleCurrentChange(1)
                    break;
                default:
                    this.CourseInfos = [
                    {cimage:'https://img2.baidu.com/it/u=3696494615,273107722&fm=253&fmt=auto&app=120&f=JPEG?w=570&h=359',cname:'如何学好Python？',cteacher:'王强',cschool:'武汉工程大学',character:5,experiment:9,reportFramwork:true,cdesc:'通过学习本课程，你可以基本掌握python的语法，学习教程之后，进一步学习进阶教程，你可以走得更远'},
                    ]
                    this.total = this.CourseInfos.length
                    this.handleCurrentChange(1)
                    break;
            }
            
        },
        handleCurrentChange(pageNumber){
            this.currentPage=pageNumber;
            console.log(pageNumber)
            this.getPageInfo()
        },
        getPageInfo(){
            this.itemInfos=[]
            for(let i=(this.currentPage-1)*this.pageSize;i<this.CourseInfos.length;i++){
                this.itemInfos.push(this.CourseInfos[i])
                if(this.itemInfos.length===this.pageSize) break;
            }
        },
        searchTo(){
            let returnInfos=[];
            for(let i=0;i<this.CourseInfos.length;i++){
                console.log(this.CourseInfos[i].cname)
                console.log(this.searchInfo)
                if(this.CourseInfos[i].cname===this.searchInfo){
                    returnInfos.push(this.CourseInfos[i])
                }
            }
            this.searchInfo=''
            if(returnInfos.length===0){
                console.log("没有该课程")
                this.alertMsg="没有该课程"
                this.visidialog= true
            }
            else{
                this.total=returnInfos.length
                let temp = this.CourseInfos
                this.CourseInfos=returnInfos
                this.getPageInfo()
                this.CourseInfos = temp
            }
        },
        querySearch(queryString,cb){
            var allCourse=[]
            for(var i=0;i<this.CourseInfos.length;i++){
                allCourse.push({
                    value:this.CourseInfos[i].cname
                })
            }
            // console.log(allCourse)
            var result = queryString
                        ?allCourse.filter(this.createFillter(queryString))
                        :[];
            console.log(result)
            cb(result)
        },
        createFillter(queryString){
            return res => {
                return (
                    res.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1
                )
            }
        },
        handleSelect(item){
            this.searchInfo=item.value
            this.searchTo()
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


</style>
