<template>
    <div class="box">
        <div class="box2">
            <div class="main-title">
                信息发布 > 招聘信息
            </div>
        <div class="navigate">
            <div class="categorie1">
                <div class="filter">
                    <span class="filtertitle" >行业类别:</span>
                </div>
                <InfoChoose @choose="industry_choose" :InfoChooses="show_industry_category"/>
                <div class="detain" @click="detain">
                    <span class="detain_title">{{detain_title}}</span>
                    <img
                    class="img_detain"
                    referrerpolicy="no-referrer"
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng39db7961a053e88905dac48e10e92a7fdf4d85f37cd22c9af7b67f56e17e13c6"
                    :style="{transform:'rotate('+angle+'deg)'}"
                    />
                </div>
            </div>

            <div class="categorie2">
                <div class="filter">
                    <span class="filtertitle2">公司性质:</span>
                </div>
                <InfoChoose @choose="nature_choose" :InfoChooses="nature_category"/>
            </div>

            <div class="categorie3">
                <div class="filter">
                    <span class="filtertitle2">职位来源:</span>
                </div>
                <InfoChoose @choose="from_choose" :InfoChooses="from_category"/>
            </div>

            <div class="categorie4">
                <div class="filter">
                    <span class="filtertitle2">首发日期:</span>
                </div>
                <InfoChoose @choose="date_choose" :InfoChooses="date_category"/>
            </div>

        </div>
        <div class="sort">
            <div class="sortBy">
                <div class="Sort_container" >
                    <span class="sortType" @click="sortByCorrelation" :class="{active_sort:this.sortBy}">相关度</span>
                    <div class="sort_bottom" :class="{active_sort_bottom:this.sortBy}"></div>
                </div>
                <div class="Sort_container" >
                    <span class="sortType" @click="sortBydate" :class="{active_sort:!this.sortBy}">发布日期</span>
                    <div class="sort_bottom"  :class="{active_sort_bottom:!this.sortBy}"></div>
                </div>
            </div>
            <div class="sum_notes">
                <!-- <span>{{ this.itemInfos.length }}</span> -->
                <span class="sum_title">共找到</span>
                <span style="color:#581BB7">{{this.Infomations.length}}</span>
                <span class="sum_title">个符合条件的职位</span>
            </div>            
        </div>
        <div class="Infomation">
            <RecruitmentInfo @chooseone="chooseOne" v-for="(item,index) in Infomations" :Info="item" :is_last="index===Infomations.length-1?true:false" />
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
    </div>
</template>

<script>
import InfoChoose from "./RecruitmentInfoChoose.vue"
import RecruitmentInfo from "./RecruitmentInfo.vue"
export default{
    name:'RecruitmentPage',
    data(){
        return{
            industry_category:[],
            industry_category_detains:[],
            show_industry_category:[],
            detain_title:'展开',
            angle:180,
            nature_category:[],
            from_category:[],
            date_category:[],
            is_detain:true,
            sortBy:true,

            Infomations:[],
            itemInfo:[],


            currentPage: 1,
            pageSize: 10,
            small: false,
            background: false,
            disabled: false,
            newsTotal: 10,

        }
    },
    components:{
        InfoChoose,
        RecruitmentInfo
    },
    async created(){
        this.netrequest();
        this.loadData()
    },
    watch: {
    currentPage(newVal, oldVal) {
      this.loadData()
    },
    pageSize(newVal, oldVal) {
      this.loadData()
    },
    industry(newVal, oldVal) {
      this.loadData()
    },
    nature(newVal, oldVal) {
      this.loadData()
    },
    from(newVal, oldVal) {
      this.loadData()
    },
    date(newVal, oldVal) {
      this.loadData()
    },
  },
  computed: {
        industry(){
            return this.$store.state.category
        },
        nature(){
            return this.$store.state.companyNature
        },
        from(){
            return this.$store.state.soure
        },
        date(){
            return this.$store.state.postingDate
        },
  },
    methods:{
        netrequest(){
            this.industry_category=[
                {title:"全部",active:true,moveon:false},
                {title:"互联网/IT电子/通信",active:false,moveon:false},
                {title:"房地产/建筑",active:false,moveon:false},
                {title:"金融业",active:false,moveon:false},
                {title:"教育培训/科研",active:false,moveon:false},
                {title:"广告/传媒/文化/体育",active:false,moveon:false},
                {title:"生物医药/医疗",active:false,moveon:false},
                {title:"批发/零售/贸易",active:false,moveon:false},
                {title:"制造业",active:false,moveon:false},
                {title:"汽车",active:false,moveon:false},
                {title:"交通运输/仓储/物流",active:false,moveon:false}
            ];
            for(let i=0;i<7;i++){
                this.industry_category_detains.push(this.industry_category[i])
            }
            this.show_industry_category=this.industry_category_detains
            this.nature_category=[
                {title:"全部",active:true,moveon:false},
                {title:"上市公司",active:false,moveon:false},
                {title:"国企",active:false,moveon:false},
                {title:"外企",active:false,moveon:false},
                {title:"民企",active:false,moveon:false},
                {title:"股份制企业",active:false,moveon:false},
                {title:"机关/事业单位",active:false,moveon:false},
                {title:"其他",active:false,moveon:false},

            ],
            this.from_category=[
                {title:"全部",active:true,moveon:false},
                {title:"社招职位",active:false,moveon:false},
                {title:"校园职位",active:false,moveon:false},

            ],
            this.date_category=[
                {title:"全部",active:true,moveon:false},
                {title:"一天内",active:false,moveon:false},
                {title:"三天内",active:false,moveon:false},
                {title:"一周内",active:false,moveon:false},
                {title:"两周内",active:false,moveon:false},
            ]
            // this.Infomations=[
            //     {position:"2024届校招四航局六公司机电管理岗",url:"",source:"校园招聘",city:"全国",recruitingNumber:"2",postingDate:"2023.08.12",company:"中交四航局",category:"房地产开发"},
            //     {position:"2024届校招四航局六公司机电管理岗",url:"",source:"校园招聘",city:"全国",recruitingNumber:"2",postingDate:"2023.08.12",company:"中交四航局",category:"房地产开发"},
            //     {position:"2024届校招四航局六公司机电管理岗",url:"",source:"校园招聘",city:"全国",recruitingNumber:"2",postingDate:"2023.08.12",company:"中交四航局",category:"房地产开发"},
            //     {position:"2024届校招四航局六公司机电管理岗",url:"",source:"校园招聘",city:"全国",recruitingNumber:"2",postingDate:"2023.08.12",company:"中交四航局",category:"房地产开发"},
            //     {position:"2024届校招四航局六公司机电管理岗",url:"",source:"校园招聘",city:"全国",recruitingNumber:"2",postingDate:"2023.08.12",company:"中交四航局",category:"房地产开发"},
            //     {position:"2024届校招四航局六公司机电管理岗",url:"",source:"校园招聘",city:"全国",recruitingNumber:"2",postingDate:"2023.08.12",company:"中交四航局",category:"房地产开发"},
            //     {position:"2024届校招四航局六公司机电管理岗",url:"",source:"校园招聘",city:"全国",recruitingNumber:"2",postingDate:"2023.08.12",company:"中交四航局",category:"房地产开发"},
            //     {position:"2024届校招四航局六公司机电管理岗",url:"",source:"校园招聘",city:"全国",recruitingNumber:"2",postingDate:"2023.08.12",company:"中交四航局",category:"房地产开发"},
            //     ]

        },
        loadData() {
            let date;
      switch (this.$store.state.postingDate) {
        case '一天内':
          date = this.getFormattedDate(-1);
          break;
        case '三天内':
          date = this.getFormattedDate(-3);
          break;
        case '一周内':
          date = this.getFormattedDate(-7);
          break;
        case '两周内':
          date = this.getFormattedDate(-14);
          break;
        default:
          date = this.getFormattedDate(-1);
      }
            this.request.get("/api/user/recruit/getlist",{
          params: {
            category: this.$store.state.category,
            companyNature: this.$store.state.companyNature,
            soure: this.$store.state.soure,
            postingDate: date,
            size: this.pageSize,
            page: this.currentPage
          }
        })
      .then(res => {
            this.Infomations = res.data.records
            this.newsTotal = res.data.total
        })
        .catch(error => {
          console.error(error);
        });
        },
        getFormattedDate(days) {
      const today = new Date();
      const targetDate = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);
      const year = targetDate.getFullYear();
      const month = String(targetDate.getMonth() + 1).padStart(2, '0');
      const day = String(targetDate.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
        industry_choose(cho){
            this.$store.dispatch('updateJob1', cho)
            // console.log(cho)
        },
        nature_choose(cho){
            this.$store.dispatch('updateJob2', cho)
        },
        from_choose(cho){
            this.$store.dispatch('updateJob3', cho)
        },
        date_choose(cho){
            this.$store.dispatch('updateJob4', cho)
        },
        detain(){
            this.is_detain=!this.is_detain
            this.angle+=180
            if(this.is_detain){
                this.show_industry_category=this.industry_category_detains
                this.detain_title='展开'
            }
            else{
                this.show_industry_category=this.industry_category
                this.detain_title='收纳'
            }
        },
        sortByCorrelation(){
            this.sortBy = true
        },
        sortBydate(){
            this.sortBy = false
        },
        chooseOne(title){
            console.log(title)
        }
    }
}
</script>

<style scoped>

.box{
    display:flex;
    background-color: #f5f5f5;
    justify-content: center;
}
.box2{
    width: 1200px;
}
.detain{
    display: flex;
    margin-top: 28px;
    font-size: 14px;
    cursor: pointer;
    margin-left: auto
}
.detain_title{
    color: #581BB7;
}
.img_detain{
    width: 13px;
    height: 8px;
    margin: 5px;
    transition: all ease-in-out 0.3s;
}
.navigate{
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    width: 1200px;
    /* height: 279px; */
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
}
.filter{
    display: flex;
    overflow: hidden;
    text-align: left;
    width: 100px;
    /* margin-right: 14px; */
}
.filtertitle{
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    margin-top: 28px;
    /* margin-left: 30px; */
}
.filtertitle2{
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
    margin-top: 17px;
    margin-bottom: 17px;
    align-items: center;
    display: flex;
    /* margin-left: 30px; */
}
.categorie1{
    display: flex;
    /* justify-content: center; */
    border-bottom: 1px dashed #ECECEC;
    margin-left: 30px;
    margin-right: 30px;
}

.categorie2{
    display: flex;
    /* justify-content: center; */
    border-bottom: 1px dashed #ECECEC;
    margin-left: 30px;
    margin-right: 30px;
}
.categorie3{
    display: flex;
    /* justify-content: center; */
    border-bottom: 1px dashed #ECECEC;
    margin-left: 30px;
    margin-right: 30px;
}
.categorie4{
    display: flex;
    /* justify-content: center; */
    margin-left: 30px;
    margin-right: 30px;
}
.sort{
    display: flex;
    position: relative;
}
.sortBy{
    display: flex;
    margin-top: 28px;
    margin-bottom: 28px;
}
.sortType{
    margin-right: 40px;
    font-size: 24px;
    cursor: pointer;
}
.sort_bottom{
    /* width: 36px; */
    height: 7px;
    border-radius: 4px;
    margin-right: 58px;
    margin-left: 18px;
    /* display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 18px;
    margin-right: 18px; */
}
.active_sort_bottom{
    background-color: #581BB7;
}
.active_sort{
    color: #581BB7;
}
.Sort_container{
    flex-direction: column;
}
.sum_notes{
    /* flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    display: flex;
    float: right;
    margin-top: 28px;
    margin-bottom: 32px */
    right: 0;
    position: absolute;
    margin-top: 34px;
}
.Infomation{
    border-radius: 10px;
    background-color: #FFFFFF;
}

::v-deep.el-pagination{
    padding:2px 0px;
    justify-content: center;
    background-color: #f5f5f5
    
}
::v-deep .el-pager li {
    margin:0px 4px;
    background-color: #f5f5f5;
    font-size: 20px;
}

::v-deep .el-pager li.active{
    background-color: rgba(88, 27, 183, 1);
    color: #FFFFFF;
    cursor: default;
}

.main-title{
    margin-top: 10px;
    margin-bottom: 10px;
}
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}

/* ::v-deep .search .el-input__inner{
    padding: 0px 20px;
    margin-bottom: 10px;
    border-radius: 6px;
    width: 200px;
    height: 40px;
    border: 1px solid rgba(219, 219, 219, 1);
    margin-left: 40px;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb4a5129f6d66eea0273f2f4d5a10e39af42f726bd488f6400c129730ac79ece4) no-repeat 170px center;
} */
</style>