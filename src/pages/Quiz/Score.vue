<template>
  <div>
    <h3 v-if="scoreWin" class="text-center text-h4"> PARABÉNS!!</h3>
    <h3 v-if="!scoreWin" class="text-center text-h4"> Não foi dessa</h3>

      <h1 v-if="scoreWin" class="text-center text-primary q-mb-lg">
        <q-icon name="military_tech"/>
      </h1>
    <h1 v-if="!scoreWin"  class="text-center text-red q-mb-lg">
      <q-icon name="close"/>
    </h1>


      <h3 class="text-center">
        <span class="text-h1">{{$route.params.score}}</span>/{{$route.params.total}}
      </h3>

      <h4 class="text-center">

        <q-btn label="Voltar a aula" @click="goToModulesPage()" class="bg-secondary text-white"/>
      </h4>

  </div>
</template>

<script>
export default {
name: "Score",
  methods:{
    goToModulesPage(){
      this.$router.push('/modulo/'+this.$route.params.id)
    }
  },
  computed:{
    scoreWin(){
      return this.$route.params.score>=this.$route.params.total/2
    }
  }
}
</script>

<style scoped>

</style>
