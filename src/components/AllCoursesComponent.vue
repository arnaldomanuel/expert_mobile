<template>
  <div class=" q-mt-md  q-mb-md text-h6">Cursos ({{courses.length}})</div>
  <div class="row">
    <template v-for="course in courses" v-bind:key="course.id">
      <course-component :course="course" />
    </template>
  </div>
</template>

<script>
import CourseComponent from "components/CourseComponent";
export default {
name: "AllCoursesComponent",
  components:{CourseComponent},
  data(){
    return{
      courses:[]
    }
  },
  methods:{
    getCourses(){
      this.$axios.defaults.headers.common['Authorization']='Bearer '+window.localStorage.getItem('token')
      this.$axios.get("/api/courses/").then(data=>{
        this.courses=data.data.courses

      })
    }
  },
  mounted() {
      this.getCourses()
  }

}
</script>

<style scoped>

</style>
