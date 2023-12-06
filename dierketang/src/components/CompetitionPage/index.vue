<template>
  <div>
    <CompetitionChoose/>
    <Competition/>
  </div>
</template>

<script>
import CompetitionChoose from '../CompetitionChoose/index.vue'
import Competition from '../Competition/index.vue'

export default {
  name: 'CompetitionPage',
  components: {
    CompetitionChoose,
    Competition
  }
}
</script>

<style>

</style>
