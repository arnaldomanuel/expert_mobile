<template>
  <div>
    <div class="text-h6">Outras aulas</div>

    <div v-if="otherLessons.length<=0" class="bi-text-paragraph text-center q-mt-lg">Sem aulas por mostrar</div>
    <lessons-module :lessons="otherLessons"/>
  </div>
</template>

<script>
import LessonsModule from "pages/modules/LessonsModule";
export default {
  components:{LessonsModule},
  props:["otherLessons"],
  name: "OtherLessons",
  data(){
    return {
      lessons:[],
    }
  }
}
</script>

<style scoped>

</style>
