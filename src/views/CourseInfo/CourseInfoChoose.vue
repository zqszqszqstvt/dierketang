<template>
<div>
    <div style="margin: 10px 0;padding-left:20px">
        <!-- 使用组件 传入标题 -->
        <Location
          title=""
          second_title="学院资源"
          father_title="课程学习"
        ></Location>
    </div>
    <div>
        <div class = "category">
            <!--课程学习科目类别-->
            <div v-for="(category,index) in categories" class = "fl item-link" >
                <div   @click="CourseInfoClick(category.title)">
                    <h1 class="item-title" :class="{active_h1:category.active}" >{{ category.title }}</h1>
                    <div class="item-bottom" :class="{active_bo:category.active}"></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Location from '@/components/location.vue'
export default {
name: 'CourseInfoChosse',
components: {
    Location,
  },
    data() {
        return {
            title: "全部"
        }
    },
    props: {
        categories: {
            required: true
        }
    },
    methods: {
        CourseInfoClick(title){
            this.categories.forEach((category) => {
              category.active = category.title===title;  
            });
            this.title = title
            this.$emit('getCourseInfo',this.title);
        }
    },
    mounted() {
        this.$emit('getCourseInfo',this.title);
    }
}
</script>


<style scoped>
.category{
    display: flex;
}
.item-title{
    display: flex;
    font-size: 14px;
    text-align: center;
    margin-right: 20px;
    margin-left: 20px;
    color: #c7c7c7;
}
.item-link{
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    /*将文字置于之间*/
    justify-content: center;
    align-items: center;
    /*设置下边框*/
    /* border-bottom-style:solid; */
    border-color:#F7F7F7;
    height: 40px;
    cursor: pointer;
}

.active_h1{
    border-bottom-color:#581bb7;
    color:#581bb7
}

.item-bottom{
    width: auto;
    height: 8px;
    margin-left: 15px;
    margin-right: 15px;
}

.active_bo{
    background-color: #581bb7;
    border-radius: 10px;
}
</style>