<template>
  <div class="q-mt-md" v-html="module.description">
  </div>
</template>

<script>
export default {
name: "InfoModule",
  props:["module"]
}
</script>

<style scoped>

</style>
