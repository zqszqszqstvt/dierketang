<script>
export default {
  name: "statistic",
  props:["hour","number","schedule"]
}
</script>

<template>
</template>

<style scoped>
.bigBox{
  display: flex;

  width: 100%;
  height: 125px;
  border-radius: 10px;
}
.smallBox{
  flex: 0 0 30%;
  background-color: darkgrey;
  border-radius: 10px;
}
.smallBoxInternalTop{
  width: 100%;
  height: 50%;
  align-items: flex-end;
  justify-content: center;
  display: flex;
}
.smallBoxInternalBottom{
  width: 100%;
  height: 50%;
  align-items: flex-start;
  justify-content: center;
  display: flex;
}
.h{
  margin-top: 10px;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
}
</style>