<template>
<div>
 <vue-question v-if="actualQuestion!=undefined" @answerQuestion="reactToAnsweredQuestion" :actualQuestion="actualQuestion"/>

  <div v-if="quizzes.length<=0" class="text-center text-h6 q-mt-md">Quizz não dispnível</div>
  <div v-if="quizzes.length>0" class="text-center text-h6 q-mt-md">{{actualIndex+1}}/{{quizzes.length}}</div>
</div>
</template>

<script>
import VueQuestion from "pages/Quiz/VueQuestion";
import Loading from "src/Services/Loading";
import Error from "src/Services/Error";
export default {
  name: "Show.vue",
  components: {VueQuestion},
  data(){
    return {
      slide:'map',
      quizzes:[],
      actualIndex:0,
      score:0,
      actualQuestion: {id:1, question:"", first:"",correct_index:-1},
      lorem:'dhlshd bljjb kjbkd bvksh kjkcdbjsdb kdbsjbjb jnfjs dvjbs bvjbsddjb'
    }
  },
  methods:{
    reactToAnsweredQuestion(index){
      console.log(index)
      if(this.actualIndex+1<this.quizzes.length){
        this.actualIndex+=1

        this.actualQuestion=this.quizzes[this.actualIndex]
        if (index==this.actualQuestion.correct_index){
          this.score++;
        }
        console.log('this.score', this.score)
      } else {
        Loading.openNotify()
        let formData = {
          user_id1 : 1,
          module_id1 : this.$route.params.id,
          result : this.score*10,
          total_count: this.quizzes.length*10,
        };

        this.$axios.post('/api/quizz/result', formData).then(data=>{
          Loading.closeNotify()
          this.$router.push('/quiz/'+this.$route.params.id+'/resultado/'+formData.result+'/'+formData.total_count)
        }).catch(error=>{
          Error.openNotify('Ocorreu um erro ao submter resultado.', 5000)
          Loading.closeNotify()
        })


      }
    }
  },
  mounted() {
    this.$axios.get('/api/get/viewQuizz/'+this.$route.params.id).then(data=>{
      this.quizzes =  data.data.quizzes
      this.actualQuestion=this.quizzes[this.actualIndex]
      console.log(data.data)
      console.log('quizzes ' , this.quizzes)
    }).catch(errpr=>{

    })
  }
}
</script>

<style scoped>

</style>
