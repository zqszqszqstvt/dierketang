<template>
    <div class="Choosebox">   
        <div v-for="(choose,index) in InfoChooses" class="item" 
            :class="{active:choose.active, moveon:choose.moveon}"
            @click="itemClick(choose.title,index)"
            @mouseenter="handleMouseEnter(choose.active,index)"
            @mouseleave="handleMouseLeave(index)"
            >
            <span class="title" :class="{active_t:choose.active}">{{ choose.title }}</span>
        </div>
    </div>
</template>

<script>
export default{
    name:'InfoChoose',
    data(){
        return{
        }
    },
    props: {
        InfoChooses: {
            required: true
        }
    },
    methods:{
        itemClick(title){
            this.InfoChooses.forEach((item)=>{
                item.active = item.title==title
                if(item.active === true) item.moveon=false;
            })
            this.$emit('choose',title)
        },
        handleMouseEnter(active,index){
            if(!active)  this.InfoChooses[index].moveon=true
        },
        handleMouseLeave(index){
            this.on = ""
            this.InfoChooses[index].moveon=false
        },
    }
}
</script>

<style scoped>

.Choosebox{
    display: flex;
    background-color: rgba(255, 255, 255, 1);
    flex-wrap: wrap;
    width: 950px;
    margin-bottom: 20px;

}

.item{
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    margin-right: 25px;
    height: 28px;
    border-radius: 4px;
    margin-top: 24px;
    cursor: pointer;
}

.title{
    /* text-align: left; */
    font-size: 14px;
    /* margin-top: 4px;
    margin-bottom: 4px; */
    margin-left: 7px;
    margin-right: 7px;
    
}

.active{
    background-color: rgba(88, 27, 183, 1);
}

.active_t{
    color: #FFFFFF;
}

.moveon{
    background-color: #F4F4F4;
}

</style>