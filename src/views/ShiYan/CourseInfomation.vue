<template>
    <div class="Infomation">
        <div class="cimage">
            <img :src="CourseInfo.image" @click="goDetail">
        </div>
        <div class="cdesc">
            <div class="cname"
            @click="ChoseCourse(CourseInfo.title,CourseInfo.cteacher)"
            @mouseenter="handleMouseEnter()"
            @mouseleave="handleMouseLeave()"
            :style="active" >
            <span>{{CourseInfo.title}}</span>
            </div>

            <!-- <div class="cfrom">
                <div class="teachername"><span>{{ CourseInfo.cteacher }}</span></div>
                <span>|</span>
                <div class="csch"><span>{{ CourseInfo.cschool }}</span></div>
            </div> -->

            
            <!-- <div>
                <span v-if="CourseInfo.character != 0" class="labelCss">
                    <img :src='require("@/assets/icon/character.png")' class="icon" alt=""  style="vertical-align: -9%;" />
                    {{CourseInfo.character}}个章节
                </span>
                <span v-if="CourseInfo.experiment != 0" class="labelCss">
                    <img :src='require("@/assets/icon/experiment.png")' class="icon" alt="" style="vertical-align: -10%;" />
                    {{CourseInfo.experiment}}个实验
                </span>
                <span v-if="CourseInfo.reportFramwork != 0" class="labelCss">
                    <img :src='require("@/assets/icon/reportFramwork.png")' class="icon" alt="" style="vertical-align: -10%;"/>
                    报告模板
                </span>
            </div> -->

            <div class="cintroduce">
                <span class="cintroduce">{{ CourseInfo.introduction }}</span>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'CourseInfomation',
    data() {
        return{
            active:'',
            getCourse:{}
        }
    },
    props:{
        CourseInfo:{
            require:true
        }
    },
    methods:{
        ChoseCourse(cname,cteacher){
            this.getCourse.cname = cname;
            this.getCourse.cteacher = cteacher;
            console.log(this.getCourse); 
            this.goDetail();  
        },
        handleMouseEnter(){
            this.active="color: #581bb7"
        },
        handleMouseLeave(){
            this.active = ""
        },

        goDetail() {
            console.log(1111);
            this.$router.push({
                name: 'CourseDetail',
            })
        },

        
    }
}

</script>

<style scoped>


.Infomation {
    display: flex;
    /* cursor: pointer; */
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    background-color: #FFFFFF;
    border-bottom: solid;
    border-width: 1px;
    border-color: #f5f5f5;
}

.cimage {
    width: 260px;
    height: 180px;
}

.cintroduce{
    font-weight: 500;
    margin-top:10px;
    color: #000000;
    margin-bottom: 10px;
    font-size: 14px;
    text-align: left;
    overflow:hidden;
    /* //单行显示 */
    /* white-space:nowrap; */
    /* //超出部分省略号显示 */
    text-overflow:ellipsis;	
    display:-webkit-box;
    /* //元素几行显示 */
    -webkit-line-clamp:2;	
    -webkit-box-orient:vertical;
}

.cimage img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.cdesc {
    margin-left: 20px;
    flex-direction:column;
    max-width: 644px;
}

.cname {
    text-align: left;
    font-size: 20px;
    color: #101010;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight:bold
}
.cfrom{
    display: flex;
    color: #666666;
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight:bold;
    user-select: none;
}
.teachername{
    text-align: left;
    margin-right: 20px;
}

.csch{
    margin-left: 20px;
    text-align: left;
}
.labelCss{
    height: 500;
    font-weight: 600;
    padding-left:10px;
    padding-right:10px;
    padding-top:5px;
    padding-bottom:5px;
    color:#581BB7;
    background-color:#EBDEFF;
    margin-right: 10px;
    border-radius: 6px;
    user-select: none;
}


</style>