<template>
  <div class=" col-12">
    <q-card class="my-card">
      <q-video :src="lesson.video_link" />

      <q-card-section v-html="lesson.description" class="q-pt-none">

      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
name: "LessonVideo",
  props:["lesson"]
}
</script>

<style scoped>

</style>
