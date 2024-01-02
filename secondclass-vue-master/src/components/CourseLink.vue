

<template>
  <div style="max-width:300px;width: 23%;height: 100%;border: 0px;min-width: 100px;min-height: 80px;
  border-radius:5px;background-color: white; cursor: pointer;"
  @click="tz">
  <div style="width: 100%;height: 100%;border-radius: 6px">
    <div style="width: 100%;height: 80%">
        <img :src=picture>
        <div style="  display: flex;justify-content: space-between;width: 100%;height: 20%">
          <div style="width: 75px;height: 41px;display:flex;margin-left: 5%;align-items: center">
            <p style="font-size: 14px;fontWeight: bold"> {{name}}</p>
          </div>
          <div style="width: 75px;height: 41px;display: flex;justify-content: right;margin-right: 5%;align-items: center">
            <p style="color: darkgrey;font-size: 12px"> 热度:{{heat}}</p>
          </div>
        </div>
    </div>
  </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CourseLink",
  props:["name","schedule","picture","link","CourseId","heat"],
  data(){
    return{
      id:this.$props.CourseId,
      courseName:this.$props.name
    }
  },
  methods:{
    tz(){
      this.$router.push('/CourseDetails/'+this.id+'/'+this.courseName);
      axios.get("http://localhost:9102/improveHeat?id="+this.id)
    }
  }
}
</script>
<style scoped>
img{
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
}
a {
  color: black; /* 继承父元素的颜色 */
  text-decoration: none; /* 取消下划线效果 */
}
.div1{
  max-width:300px;
  width: 23%;
  height: 100%;
  border: 0px;
  min-width: 100px;
  min-height: 80px;
  border-radius:5px;
  background-color: white;
  border-radius: 6px;
}
</style>