<template>
  <el-container>
    <el-header>
<!--   多条件级联搜索   -->
      <el-row :gutter="20" type="flex" justify="center" style="margin-left: 10%">
        <el-col :span="5">
          <el-input id="search"
                    placeholder="请输入公司名称"
                    v-model="companyName"
                    :suffix-icon="Search"
                    @keydown.enter="searchByJL"
                    clearable
          >
          </el-input>
        </el-col>
        <el-col :span="5">
          <el-select v-model="isAppear" clearable placeholder="是否上市">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="5">
          <el-select v-model="nature" clearable placeholder="公司性质">
            <el-option
                v-for="item in natures"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="5">
          <el-button type="primary" @click="searchByJL">搜索</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <div class="company_info" style="max-width: 1000px;margin-left: 10%">
        <el-row v-for="record in records" :key="record.companyId"
                :gutter="20" type="flex" justify="center" style="margin-bottom: 20px" class="company_item">
          <el-col :span="8" style="background: white;text-align: center">
            <img style="display: inline-block" src="https://img.bosszhipin.com/beijin/upload/com/logo/20200429/8f64c9d0b30a53c434b26799ca78966cec9b49ecaf1604cb263748f03d5c2b0f.png?x-oss-process=image/resize,w_100,limit_0">
          </el-col>
          <el-col :span="16" style="background: RGB(248,248,248);">
            <div class="company_right">
              <div class="company_name">{{record.name}}</div>
              <div class="company_introduction"  style="margin-top: -32px">{{record.introduction}}</div>
              <div class="company_others">
                <div class="company_nature">
                  <span class="nature" style="margin-right: 10px">{{record.nature}}</span>
                  <span class="isAppear" v-if="record.isAppear==='是'">已上市</span>
                  <span class="isAppear" v-else>未上市</span>
                </div>
                <div class="createTime">
                  2023-03-02
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <el-footer>
      <Page @avertCurPage="changeCurPage"/>
    </el-footer>
  </el-container>
</template>

<script>
import { Search } from '@element-plus/icons-vue'
import instance from "@/axios";
import Page from "@/components/Page";
export default {
  setup(){
    return{
      Search
    }
  },
  components:{
    Page
  },
  name: "CompanyInfo",
  created() {
    this.loadData(1,5)
  },
  data(){
    return{
      companyName:'',
      options: [{
        value: '是',
        label: '已上市'
      }, {
        value: '否',
        label: '未上市'
      }],
      natures: [{
        value: '民营',
        label: '民营'
      }, {
        value: '国企',
        label: '国企'
      }],
      nature:'',
      isAppear:'',
      records:[]
    }
  },
  methods:{
    changeCurPage(page){
      this.loadData(page,5)
    },
    loadData(num,size){
      instance.get('/job/company/searchCompany/'+num+'/'+size,{
        headers:{
          token:localStorage.getItem("token")
        }
      })
          .then(response=>{
            this.records = response.data.data.records;
          })
          .catch(error=>{
            console.log(error);
          })
    },
    searchByJL(){
      //多条件查询
      instance.get('/job/company/searchCompany/1/12',{
        headers:{
          token:localStorage.getItem("token")
        },
        params:{
          name:this.companyName,
          nature:this.nature,
          isAppear:this.isAppear
        }
      })
      .then(response=>{
        this.records = [];
        this.records = response.data.data.records
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.company_item:hover{
  box-shadow: 5px 8px 5px 8px rgba(0,0,0,0.08);
  transition: .5s;
}
.company_name{
  color: #000000;
  font-size: 18px;
}
.company_name:hover{
  color:#00a6a7
}
.company_introduction{
  font-size: 14px;
  color: RGB(102,102,102);
}
.company_nature{
  font-size: 14px;
  color: RGB(153,153,153);
}
.createTime{
  font-size: 14px;
  color: RGB(153,153,153);
}
.company_right{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
}
.company_right .company_others{
  display: flex;
  justify-content: space-between;
}
.company_info img{
  width: 15vw;
  height: 24vh;
}
.active{
  color:#00a6a7
}
.tag{
  background:#f8f8f8;
  font-size: 13px;
  border-radius: 13px;
  color: #666;
  margin-left: 5px;
}
</style>
