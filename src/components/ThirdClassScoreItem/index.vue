<template>
    <div class="box">
      <div class="score-inall">
        <div class="progress-ring">
           <div class="imga">
            <img src="grade.surl" >
           </div>
           <div class="d1">
            <h3>{{grade. subject}}</h3>
            <label style="left: 0;" >完成{{grade.completion}}/{{grade.all}}</label>
           </div>
           <div class="d2">
            <span style="color: #581BB7;display: inline-block;vertical-align: middle;">{{ grade.score}}</span>
           </div>

      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'ThirdClassScoreItem',
    data() {
      return {
      
      };
    },
    created() {
      this.progress = Number(this.grade.score);
    },
     props: {
        grade: {
            type: Object,
            required: true
        }
    },
    computed: {
     
    },
    methods: {
    }
  };
  </script>
  <style lang="less" scoped>
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
    margin-right: 20px;
    width: 13%;
    overflow: auto;  
    
}

 .d1 label{
  font-size: 15px;
  color: gray;
  left: 0;
  margin-top: 42px;
 }
  .d2{
    box-shadow: 0px 0px 30px 0px rgba(155, 155, 155, 0.16);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  width: 20%;
  height: 50px;
  justify-content: center;
    align-items: center;
    display:flex;
  }
  .d1{
    width: 60%;
  }
  .progress-ring {
    text-align: center;
    justify-content: center;
      align-items: center;
      display: flex;
      background-color: #F8FAFB;
      width: 100%;
  }
  .imga{
    width: 10%;
  }
   .top-title {
    text-align: center;
  }
 .score-inall{
  width: 100%;
 }

  </style>