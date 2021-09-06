<template>
  <q-list class="q-mt-md">
    <template v-for="lesson in lessons" v-bind:key="lesson.id">
      <q-item clickable>
        <q-item-section>
          <q-item-label>{{lesson.name}}</q-item-label>
          <q-item-label v-html="lesson.description" caption></q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge color="teal" label="1" />
        </q-item-section>
      </q-item>
      <q-separator />
    </template>


  </q-list>
</template>

<script>
export default {
name: "LessonsModule",
  props:["lessons"]
}
</script>

<style scoped>

</style>
