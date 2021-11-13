<template>
  <div>
    <h6 class="q-mt-sm">Quizzes feitos</h6>
    <div v-for="quiz in quizzResults" :key="quiz.id" >
        {{quiz.count}}/{{quiz.total_count}}
    </div>
  </div>
</template>

<script>
export default {
name: "MyQuizzes",
  data(){
    return {
      quizzResults:[]
    }
  },
  mounted() {
  this.$axios.get('/api/my-results/quizz').then(data=>{
        this.quizzResults=data.data.quizzResults
  }).catch(error=>{

  })
  }
}
</script>

<style scoped>

</style>
