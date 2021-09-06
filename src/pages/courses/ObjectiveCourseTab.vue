<template>
  <div class="q-mt-md">
    <q-list bordered>
      <template v-for="objecive in objectives" v-bind:key="objecive.id">
        <q-item clickable v-ripple>
          <q-item-section>{{objecive.description}}</q-item-section>
          <q-item-section avatar>
            <q-icon color="primary" name="done" />
          </q-item-section>
        </q-item>
        <q-separator />
      </template>
    </q-list>
    <div v-if="objectives.length<=0" class="text-center tex-h5 text-weight-bold">0 objectivos</div>

  </div>
</template>

<script>
export default {
name: "ObjectiveCourseTab",
  props:["course", "objectives"]
}
</script>

<style scoped>

</style>
