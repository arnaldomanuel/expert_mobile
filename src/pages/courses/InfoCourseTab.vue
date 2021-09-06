<template>
  <div v-html="course.description" class="q-mt-md">

  </div>
</template>

<script>
export default {
name: "InfoCoureTab",
  props:["course"]
}
</script>

<style scoped>

</style>
