<template>
  <div class="row">
    <div v-for="course in courses" v-bind:key="course.id">
      <div v-if="course.authorize==0" class="col-12 q-mb-md">
        <q-card @click="$router.push('/curso/'+course.id)" clickable class="cursor-pointer my-card">

          <img :src="$settings.API_URL+course.thumbnail">

          <q-card-section>
            <div class="text-h6">{{course.name}}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import CourseComponent from "components/CourseComponent";
export default {
name: "CoursesToBeApproved",
//props:["courses"],
  //components:{CourseComponent},
  data(){
    return {
      courses:[]
    }
  },
  mounted() {
    this.$axios.get('/api/my-courses').then(data=>{
      this.courses=data.data.courses
      console.log(  this.coursesStudent)
    }).catch(error=>{

    })
  }
}
</script>

<style scoped>

</style>
