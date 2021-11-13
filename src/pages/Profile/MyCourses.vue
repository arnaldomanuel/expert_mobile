<template>
  <div>
    <div class="col-12">
      <q-tabs
        v-model="tab"
        class="text-secondary  shadow-2"
      >
        <q-tab label="Cursos Aprovados" name="approved"/>
        <q-tab label="Cursos requisitados" name="toBeApproved"/>
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel class="q-pa-none" name="approved">
          <courses-approved  />
        </q-tab-panel>
        <q-tab-panel class="q-pa-none" name="toBeApproved">
          <courses-to-be-approved />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>


<script>
import CoursesApproved from "pages/Profile/CoursesApproved";
import CoursesToBeApproved from "pages/Profile/CoursesToBeApproved";
export default {
  name: "MyCourses",
  components: {CoursesToBeApproved,CoursesApproved},
  data() {
    return {
      tab: "approved",
      coursesStudent:[]
    }
  },
  mounted() {
    this.$axios.get("/api/courses/").then(data=>{
      this.coursesStudent=data.data.courses

    })
   /* this.$axios.get('/api/my-courses').then(data=>{
       this.coursesStudent=data.data.courses
      console.log(  this.coursesStudent)
    }).catch(error=>{

    })*/
  }
}
</script>

<style scoped>

</style>
