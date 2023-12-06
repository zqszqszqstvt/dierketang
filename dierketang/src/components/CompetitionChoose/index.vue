<template>
  <div class="competition-type-card">
    <h2>竞赛类型</h2>
    <div class="competition-types">
      <div class="type" v-for="type in types" :key="type.id">
        <h3>{{ type.name }}</h3>
        <div class="subtypes">
          <p v-for="subtype in type.subtypes" :key="subtype">{{ subtype }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompetitionChoose',
  data() {
    return {
      types: [
        { id: 1, name: '工科', subtypes: ['子类别1', '子类别2'] },
        { id: 2, name: '文体', subtypes: ['子类别1', '子类别2'] },
        { id: 3, name: '理科', subtypes: ['子类别1', '子类别2'] },
        { id: 4, name: '商科', subtypes: ['子类别1', '子类别2'] },
        { id: 5, name: '综合', subtypes: ['子类别1', '子类别2'] },
        // 添加更多类型
      ]
    };
  },
  components: {

  }
    
}
</script>

<style>

</style>
