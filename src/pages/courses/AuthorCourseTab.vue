<template>
  <div class="q-mt-md">
    <div class="text-h6">{{course.user.name}}</div>
   {{course.user.biography}}
  </div>
</template>

<script>
export default {
name: "AuthorCourseTab",
  props:["course"]
}
</script>

<style scoped>

</style>
