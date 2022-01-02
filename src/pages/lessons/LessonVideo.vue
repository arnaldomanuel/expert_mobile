<template>
  <div class=" col-12">
    <q-card class="my-card">
      <q-video :src="lesson.video_link" />

      <q-card-section  class="q-pt-none">
        <div v-html="lesson.description">
          </div>
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
