

<template>
  <div style="width: 23%;height: 213px;border: 0px;min-width: 100px;min-height: 80px;border-radius:5px;background-color: white">
  <div style="width: 100%;height: 100%;">
    <div style="width: 100%;height: 80%">
      <a :href=link>
        <img :src=picture>
        <div style="  display: flex;justify-content: space-between;width: 100%;height: 20%">
          <div style="width: 70%;height: 41px;display:flex;margin-left: 5%;align-items: center">
            <p style="font-size: 14px;fontWeight: bold"> {{name}}</p>
          </div>
          <div style="width: 30%;height: 41px;display: flex;justify-content: right;margin-right: 5%;align-items: center">
            <p style="color: darkgrey;font-size: 12px">已学{{schedule}}%</p>
          </div>
        </div>
      </a>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "CourseLink",
  props:["name","schedule","picture","link"]
}
</script>
<style scoped>
img{
  height: 100%;
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
a {
  color: black; /* 继承父元素的颜色 */
  text-decoration: none; /* 取消下划线效果 */
}
</style>