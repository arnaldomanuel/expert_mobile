<template>
  <div>
    <div class="text-h6">Outras aulas</div>

    <div v-if="otherLessons.length<=0" class="bi-text-paragraph text-center q-mt-lg">Sem aulas por mostrar</div>
    <lessons-module @change-lesson="reactToChangeLesson" :lessons="otherLessons"/>
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
  },
  methods:{
    reactToChangeLesson(id){
      this.$emit('route-lesson', id)
      console.log(id);
    }
  }
}
</script>

<style scoped>

</style>
