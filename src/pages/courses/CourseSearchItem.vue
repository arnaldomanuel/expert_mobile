<template>
  <q-list>
    <template v-for="course in courses" v-bind:key="course.id">
      <q-item clickable v-ripple  @click="goToCoursePage(course.id)">
        <q-item-section top avatar>
          <q-avatar>
            <img :src="getCourseThumbnailPath(course)">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{course.name}}</q-item-label>
          <q-item-label v-html="course.description" class="text-h6" caption></q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-badge label="1" />
        </q-item-section>
      </q-item>
      <q-separator spaced inset="item" />
    </template>
  </q-list>
</template>

<script>
export default {
name: "CourseSearchItem",
  props:["courses"],
  methods:{
    goToCoursePage(id){
      this.$router.push("/curso/"+id)
    },
    getCourseThumbnailPath(course){
      return this.$settings.API_URL+course.thumbnail
    }
  }

}
</script>

<style scoped>

</style>
