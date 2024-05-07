<template>
    <div class="box">
      <div class="left-img">
        <img :src="competition.image" alt="">
      </div>
      <div class="left-info">
        <h3 class="tit">
          <strong class="title">
            {{ competition.title }}
          </strong>
        </h3>
        <div class="competition-info">
          <p class="event4-1-plan">
          <span class="item-tit">简介</span>{{ competition.introduction }}
          </p>
          <p class="event4-1-plan">
            <span class="item-tit">时间</span>{{ ToTime(competition.activityStartDate) }} - {{ ToTime(competition.activityEndDate) }}
          </p>
          <p class="event4-1-plan">
            <span class="item-tit">地点</span>{{ competition.address }}
          </p>
        </div>
      </div>
      <div class="right-info">
        <div class="login-button"  :class="getStatusClass(competition.status)">
          <a :href="competition.link" target="_blank">{{ competition.status }}</a>
        </div>
        <div class="item-status">
          选课 {{ competition.remainingDays }} 
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PracticeInfoItem',
    data() {
      return {
        
      };
    },
    computed: {
      
    },
    props: {
      competition: {
        type: Object,
        required: true
      }
    },
    methods: {
      getStatusClass(status) {
        switch (status) {
          case '进行中':
            return 'status1';
          case '已结束':
            return 'status0';
          default:
            return '';
        }
      },
      ToTime(time) {
        if (!Array.isArray(time) || !time.length) {
          console.error('Invalid time:', time);
          return '';
        }
        let date = this.convertToDate(time);
        let year = date.getFullYear();
        let month = date.getMonth() + 1; // getMonth() 返回的月份从 0 开始
        let day = date.getDate();
        return `${year}年${month}月${day}日`;
      },
      convertToDate(array) {
        let date = new Date(array[0], array[1] - 1, array[2], array[3], array[4]);
        return date;
      },
    } 
  };
  </script>
  <style lang="less" scoped>
    .box {
      margin-top: 15px;
      // width: 50%;
      padding: 20px;
      background-color: #FFFFFF;
      border-radius: 10px;
      overflow: auto;
      box-sizing: border-box;
      display: flex;
      align-items: center;
       &:after {
        content: "";
        display: table;
        clear: both;
      }
    }
    .left-img {
      width: 20%;
      float: left;
      padding-right: 20px;
      box-sizing: border-box;
      position: relative;
    }
    .left-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  
    .left-info {
      float: left; 
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .right-info{
      float: right; 
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .tit {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
      
    }
    .title {
      color: #020202;
      text-align: left;
    }
    .competition-info {
      font-size: 16px;
      color: #666;
    }
    .item-tit {
      font-weight: bold;
      color: #666;
      display: inline-block;
      min-width: 80px;
      text-align: left;
    }
    .item-status {
      font-size: 18px;
      color: #B3B3B3;
      margin: 10px;
      margin-left: 20px;
      margin-bottom: 30%;
    }
    .login-button {
      font-size: 20px;
      width: 160px;
      height: 60px;
      line-height: 30px;
      text-align: center;
      background-color: #7341C2;
      color: #fff;
      border-radius: 5px;
      margin-top: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .status1 {
      /* 状态1的样式 */

    }

    .status0 {
      /* 状态2的样式 */
      background-color: #B3B3B3;
    }
    p {
      text-align: left;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
  </style>