<template>
  <div class="col-12 q-mb-md">
    <q-card @click="goToCourse()" clickable class="cursor-pointer my-card">

      <img :src="getCourseThumbnailPath">

      <q-card-section>
        <div class="text-h6">{{course.name}}</div>
        <div class="text-subtitle2">{{course.user.name}}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
name: "CourseComponent",
  props:["course"],
  methods:{
    goToCourse(){
      this.$router.push("/curso/"+this.course.id)
    },

  },
  computed:{
  getCourseThumbnailPath(){
    return this.$settings.API_URL+this.course.thumbnail
  }
  }
}
</script>

<style scoped>

</style>
