<template>
  <div class="main">

    <div class="left-tree">
      <div style="margin: 10px 0;margin-top:-30px;width:600px">
        <!-- 使用组件 传入标题 -->
        <Location
          :title=list[activeBtn-2].name
          second_title="学院资源"
          father_title="课程学习"
        ></Location>
      </div>
      <span>
        <div
          class="menu"
          v-for="item in list"
          @click="changeBtn(item)"
          :class="{ 'menu-active': activeBtn === item.id }">
          <img :src=iconSrc[item.id-2] class="icon" alt="" />
          <!-- <i :class=iconSrc[item.id-2] style="padding-left:50px;padding-right:10px;font-size:24px"></i> -->
          {{ item.name }}
        </div>
      </span>
    </div>
    <div class="card">
        <div class="iconTitle">
            <img :src='require("@/assets/icon/shuben.png")' style="width:30px;height:30px;padding-right:10px;vertical-align: -15%;" alt="" />课件   
        </div>
        <el-divider />
        <el-tree-v2 :data="data" :props="props" :height="700" :default-expanded-keys="[data[0].id,data[0].children[0].id,data[0].children[1].id,data[0].children[2].id]">
            <template #default="{ node,data}">
               
                <div class="rowStyle">
                    <span v-if="node.isLeaf" class="prefix" :class="{ 'is-leaf': node.isLeaf }">
                        <!--视频文本类别-->
                        <span v-if="data.type === '1'">视频</span>
                        <span v-else>文本</span>
                        <!-- {{data.type}}
                        <img v-if="data.type === '1'">
                        <img v-else> -->
                        <!--[ElementPlus]-->
                    </span>
                    <el-checkbox v-if="data.level === 2" size="large" class="custom-checkbox" />
                    <span></span>
                    <span v-if="data.level === 1" class="nodeLevel1">{{ node.label }}</span>
                    <span v-if="data.level === 2" class="nodeLevel2">{{ node.label }}</span>
                    <span v-if="data.level === 3" class="nodeLevel3">{{ node.label }}</span>
                </div>
                
            </template>
            
        </el-tree-v2>
    </div>
  </div>

</template>

<script>
// import footer from '@/src/views/home/index.vue'
import Location from '@/components/location.vue'

export default {
  name: 'courseDetail',
  components: {
    Location,
  },
  data() {
    return {
      title: '',
      second_title: '',
      activeBtn: 4,
      list: [
        { name: '公告', id: 2 },
        { name: '评分标准', id: 3 },
        { name: '课件', id: 4 },
        { name: '测验与作业', id: 5 },
        { name: '考试', id: 6 },
        { name: '讨论区', id: 7 },
      ],
      iconSrc:[
        require("@/assets/icon/gonggao.png"),
        require("@/assets/icon/pfbz.png"),
        require("@/assets/icon/kejian.png"),
        require("@/assets/icon/cyyzy.png"),
        require("@/assets/icon/kaoshi.png"),
        require("@/assets/icon/tlq.png"),
      ],
      activeTab: '全部',
      formInline: {
        search: '',
      },
      data:[{
          id:1,
          label: '01算法绪论',
          level:1,
          children: [{
            id:2,
            label: '1.1算法由来',
            level:2,
            children: [
              {id:3,label: '1.1.1算法的由来',type:'1',level:3},
              {id:4,label: '1.1.1算法的由来',type:'2',level:3}
            ]
          },
          {
            id:5,
            label: '1.2算法定义',
            level:2,
            children: [
              {id:6,label: '1.2.1算法的定义',type:'1',level:3},
              {id:7,label: '1.2.1算法的定义',type:'2',level:3}
            ]
          },
          {
            id:8,
            label: '1.3算法基础',
            level:2,
            children: [ 
              {id:9,label: '1.3.1算法基础',type:'1',level:3},
              {id:10,label: '1.3.1算法基础',type:'2',level:3}
            ]
          }
          ]
        }, {
          id:10,
          label: '02算法绪论',
          level:1,
          children: [{
            id:11,
            label: '1.1算法由来',
            level:2,
            children: [
              {id:12,label: '1.1.1算法的由来',type:'1',level:3},
              {id:13,label: '1.1.1算法的由来',type:'2',level:3}
            ]
          },
          {
            id:14,
            label: '1.2算法定义',
            level:2,
            children: [
              {id:15,label: '1.2.1算法的定义',type:'1',level:3},
              {id:16,label: '1.2.1算法的定义',type:'2',level:3}
            ]
          },
          {
            id:17,
            label: '1.3算法基础',
            level:2,
            children: [ 
              {id:18,label: '1.3.1算法基础',type:'1',level:3},
              {id:19,label: '1.3.1算法基础',type:'2',level:3}
            ]
          }
          ]
        }, {
          id:20,
          label: '03算法绪论',
          level:1,
          children: [{
            id:21,
            label: '1.1算法由来',
            level:2,
            children: [
              {id:22,label: '1.1.1算法的由来',type:'1',level:3},
              {id:23,label: '1.1.1算法的由来',type:'2',level:3}
            ]
          },
          {
            id:24,
            label: '1.2算法定义',
            level:2,
            children: [
              {id:25,label: '1.2.1算法的定义',type:'1',level:3},
              {id:26,label: '1.2.1算法的定义',type:'2',level:3}
            ]
          },
          {
            id:27,
            label: '1.3算法基础',
            level:2,
            children: [ 
              {id:28,label: '1.3.1算法基础',type:'1',level:3},
              {id:29,label: '1.3.1算法基础',type:'2',level:3}
            ]
          }
          ]
        }],
      props : {
        children: 'children',
        label: 'label'
        }

    }
  },
  mounted() {
    this.getLocation()
  },
  methods: {
    getLocation() {
        console.log("详细页面");
    },
    changeTab(index) {
      this.activeTab = index
      this.second_title = index
      this.$store.commit('changeStrategyAchievements', {
        name: 'strategyAchievements',
        
        department: this.title,
       
        id: this.activeBtn,
        
        activeTab: this.activeTab,
      })
    },
    changeBtn(item) {
      this.activeBtn = item.id
      this.title = item.name
      this.$store.commit('changeStrategyAchievements', {
        name: 'strategyAchievements',  
        department: item.name,
        id: item.id,
        activeTab: this.activeTab,
      })
    },
  },
}
</script>

<style scoped>
.main {
  padding-left: 20%;
  width: 60%;
  display: flex;
  flex-direction: row;
  user-select: none;
}

.left-tree {
  width: 250px;
  max-height: 835px;
  margin: 10px 10px;
  margin-top: 50px;
  background-color: #ffffff;
  /* display: flex-start; */
  /* align-items: center; */
}

.menu {
  width: 240px;
  height: 80px;
  padding-left: 10px;
  line-height: 80px;
  font-weight: 500;
  font-size: 22px;
  font-family: PingFangSC, PingFang SC;
  cursor: pointer;
  /* background: rgba(18, 147, 252, 0.1); */
  /*（文本长度超出限定宽度，则隐藏超出的内容）*/
  overflow: hidden;
  /*（设置文本在一行显示，不能换行）*/
  white-space: nowrap;
  /*（规定当文本溢出时，显示省略符号来代表被修剪的文本）*/
  text-overflow: ellipsis;
  user-select: none;
}

/* .menu:hover {
  color: #fff;
  background-color: #581BB7;
  border-bottom-color: rgb(33, 150, 243);
} */

.menu-active {
  color: #fff;
  background-color: #581BB7;
  border-radius: 8px;
}

.card {
  width: 100%;
  /* min-height: 100%; */
  /* height: 100%; */
  /* max-height: 480px; */
  /* overflow: auto; */
  height: 800px;
  margin: 10px 10px;
  margin-top: 50px;
  padding-left: 60px;
  padding-top: 35px;
  font-size: 26px;
  background-color:rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  user-select: none;
}

.form {
  float: right;
}

/deep/ .el-form-item--small.el-form-item {
  margin-bottom: 10px;
}

.tabs-content {
  display: flex;
  flex-direction: row;
  width: 70%;
}

.tab {
  color: #fff;
  height: 55px;
  padding: 0 15px;
  line-height: 55px;
  font-weight: 600;
  cursor: pointer;
}

.tab:hover {
  color: #fff;
}

.tab-active {
  color: #fff;
}

/deep/ .el-tree-v2>.el-tree-node__content {
  font-weight: 900;
  color: #333333;
  height: 60px;
  background-color:rgb(255, 255, 255)
}

/deep/ .el-tree-v2>.el-tree-node>.el-tree-node__children>.el-tree-node>.el-tree-node__content{
  font-weight: 600;
  height: 40px;
  color: #666666;
}


/deep/ .el-tree>.el-tree-node>.el-tree-node__children>.el-tree-node>.el-tree-node__children>.el-tree-node>.el-tree-node__content{
  font-weight: 300;
  padding-top: 5px;
  padding-bottom: 5px;
  line-height: 10px;
  height: 30px;
  color: #000000;
}

.prefix {
  /* color: var(--el-color-primary); */
  color: #F8F8F8;
  margin-right: 10px;
  border-radius: 8px;
  background-color: #FFCC01;
  padding: 2px;
  padding-left: 10px;
  padding-right: 10px;
}
.prefix.is-leaf {
  /* color: var(--el-color-success); */
}
>>>.el-tree-node__expand-icon {
	position: absolute;
	right: 2%;
    font-size: 18px;
}

.nodeLevel1{
    min-height: 60px;
    font-weight: 800;
    font-size: 24px;
    color: #000000;
}
.nodeLevel2{
    padding-left: 10px;
    font-weight: 600;
    font-size: 18px;
    color: #000000;
}
.nodeLevel3{
    font-weight: 500;
    font-size: 14px;
    color: #000000;
}
.rowStyle{
    /* height: 30px; */
    /* margin-bottom: 10px; /* 调整节点之间的间距 */
    /* padding-top: 10px; 设置上方 padding */ 
    /* align-items: center; */
    /* display: inline-block; */
    /* background-color: #F8F8F8; */
}
.icon{
    width: 24px;
    height: 24px;
    vertical-align: -5%;
    padding-right: 10px;
    padding-left: 50px;
}

.iconTitle{
    vertical-align: 10%;
    font-size: 30px;
    height: 50px;
    font-weight: 600;
    padding-bottom: 20px;
}

:deep.custom-checkbox .el-checkbox__input {
  border-radius: 3px; /* 自定义形状 - 圆角 */
  /* 自定义边框颜色 */
  border: 1px solid #581BB7; 
}

:deep.custom-checkbox .el-checkbox__inner {
  /* background-color: #581BB7; 自定义填充颜色 */
}

:deep.custom-checkbox .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #581BB7; /* 自定义选中时的填充颜色 */
}

.el-tree-node__content{
  height: auto;
}

.el-divider--horizontal{
  width: 98%;
  margin-top: -5px;
  margin-bottom: 10px;
  border-top: 3px var(--el-border-color) var(--el-border-style);
}

</style>
