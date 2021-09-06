<template>
  <div><h2 class="q-pl-sm text-overline">Cursos ({{courses.length}})</h2></div>
  <div>
    <div>
      <course-search-item :courses="courses"/>
    </div>
    <div v-if="courses.length<=0" class="text-center tex-h5 text-weight-bold">Sem resultados para a pesquisa</div>
  </div>

</template>

<script>
import CourseSearchItem from "pages/courses/CourseSearchItem";
export default {
  name: "SearchResults",
  components: {CourseSearchItem},
  props:["searchString"],
  data(){
    return {
      courses:[],
    }
  },
  watch: {
    searchString : function (val){
      if (val.length>=3){
        this.$axios.get('/api/courses?searchString='+this.searchString).then(data=>{
          this.courses=data.data.courses
        })
      } else {
        this.courses=[]
      }
    }
  }

}
</script>

<style scoped>

</style>
