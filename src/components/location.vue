<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-27 11:38:57
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-04 21:04:30
 * @FilePath: \secondclass-vue-master\src\components\location.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="location">
    <!-- <span>当前位置：</span> -->
    <div style="margin-top: 5px">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item>{{father_title}}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="second_title !== ''">{{second_title}}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="title !== ''">{{title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'

import { ref, defineProps } from 'vue'

// 只需调用一次 defineProps，并通过 props 对象获取各个 prop 的值
const props = defineProps(['father_title', 'second_title', 'title']);

const fatherTitle = ref(props.father_title);
const secondTitle = ref(props.second_title);
const title = ref(props.title);
</script>

<style scoped>
.location {
  display: flex;
  flex-direction: row;
  user-select: none;
}
</style>
