<template>
    <div class="Infomation">
        <div class="cimage">
            <img :src="CourseInfo.cimage">
        </div>
        <div class="cdesc">
            <div class="cname"
            @click="ChoseCourse(CourseInfo.cname,CourseInfo.cteacher)"
            @mouseenter="handleMouseEnter()"
            @mouseleave="handleMouseLeave()"
            :style="active" >
            <span>{{CourseInfo.cname}}</span>
            </div>

            <div class="cintroduce">
                <span class="cintroduce">{{ CourseInfo.cdesc }}</span>
            </div>

            <div class="cfrom">
                <div class="teachername"><span>{{ CourseInfo.cteacher }}</span></div>
                <span>|</span>
                <div class="csch"><span>{{ CourseInfo.cschool }}</span></div>
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
        },
        handleMouseEnter(){
            this.active="color: #581bb7"
        },
        handleMouseLeave(){
            this.active = ""
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
    color: #666666;
    margin-bottom: 60px;
    font-size: 14px;
    text-align: left;
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
    margin-top: 20px;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight:bold
}
.cfrom{
    display: flex;
    color: black;
    margin-top: 20px;
    margin-bottom: 2px;
    font-size: 14px;
    font-weight:bold
}
.teachername{
    text-align: left;
    margin-right: 20px;
}

.csch{
    margin-left: 20px;
    text-align: left;
}
</style>