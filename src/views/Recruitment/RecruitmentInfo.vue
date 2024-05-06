<template>
<div class="container_box">
    <div class="container_info"  :class="{active:!is_last}">
        <div class="item_info">
            <span class="item_title"
            @mouseenter="enter()"
            @mouseleave="leave()"
            @click="chooseInfo(Info)"
            :style="active"
            >
            <a :href="Info.url">{{ Info.position }}</a>
            </span>
            <div class="other_info">
                <div class="info_from">
                    <span 
                        style="color: #FFFFFF;
                        font-size: 12px;">{{ Info.source }}</span>
                </div>
                <div class="other_item">
                    <img class="icon"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngec00cd50936f1438ff9873c39d0852902a02beca04554ef3e0ecb9daf346d361"
                    />
                    <span class="other_title" >城市：{{ Info.city }}</span>
                </div>
                <div class="other_item">
                    <img class="icon"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4a4f318bc12f75a7443bbc137c6054d45a6fa6399272dad588821618edd03e7a"
                    />
                    <span class="other_title">招聘人数：{{ Info.recruitingNumber }}</span>
                </div>
                <div class="other_item">
                    <img class="icon"
                        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1fafc5a2338646fbf6ec0568ab9ac9efad3a072d8d14366312319539c80efffe"
                    />
                    <span class="other_title">发布时间：{{ Info.postingDate }}</span>
                </div>
            </div>
        </div>
        <div class="right_info">
            <span class="company">{{ Info.company }}</span>
            <div class="label">
                <span style="color: #666666;font-size: 12px;">{{ Info.category }}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default{
    name:'RecruitmentInfo',
    data(){
        return{
            active:''
        }
    },
    props:{
        Info:{
            require:true
        },
        is_last:{
            require:true,
            default:false
        }

    },
    methods:{
        enter(){
            this.active='color:#581BB7'
        },
        leave(){
            this.active=''
        },
        chooseInfo(title){
            this.$emit('chooseone',title)
            // console.log(title)
        }
    }
}

</script>


<style scoped>

.container_box{
    display: flex;
    /* background-color: #FFFFFF; */
    /* border-radius: 10px; */
}

.container_info{
    flex-direction: row;
    display: flex;
    background-color: #FFFFFF;
    /* border-radius: 10px; */
    margin-top: 25px;
    margin-left: 30px;
    margin-bottom: 25px;
    /* width: 1140px; */
    /* margin-right: auto; */
    width: 100%;
    margin-right: 30px;
}

.item_info{
    display: flex;
    flex-direction: column;
    /* margin-top: 25px;
    margin-left: 30px; */
    /* margin: 25px; */
}

.other_info{
    display: flex;
    flex-direction: row;
    margin-bottom: 22px;
}

.info_from{
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
    align-content: center;
    background-color: #FFCC01;
    width: 64px;
    height: 26px;
    border-radius: 4px;
}

.icon{
    width: 10px;
    height: 12px;
    margin-top: 4px;
    margin-right: 3px;
}

.other_item{
    display: flex;
    flex-direction: row;
    margin-left: 13px;
    margin-right: 12px;
}

.active{
    border-bottom: 1px dashed #ECECEC;
}

.item_title{
    font-size: 20px;
    cursor: pointer;
    margin-bottom: 9px;
    margin-right: auto;
}

.other_title{
    color: #666666;
    font-size: 14px;
}

.right_info{
    display: flex;
    flex-direction: column;
    /* float: right; */
    /* justify-content: flex-end; */
    margin-left: auto;
    margin-right: 0px;

}

.company{
    font-size: 16px;
    /* margin-top: 28px; */
    font-weight: bold;

}

.label{
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
    align-content: center;
    margin-top: 12px;
    background-color: #F4F4F4;
    width: 76px;
    height: 26px;
    margin-left: auto;
    border-radius: 4px;
}
a {
  text-decoration: none;
}
</style>