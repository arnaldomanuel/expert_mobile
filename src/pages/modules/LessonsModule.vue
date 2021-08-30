<template>
  <q-list class="q-mt-md">
    <q-item clickable>
      <q-item-section>
        <q-item-label>Single line item</q-item-label>
        <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-badge color="teal" label="10k" />
      </q-item-section>
    </q-item>
    <q-separator />
    <q-item clickable >
    <q-item-section>
      <q-item-label>Single line item</q-item-label>
      <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
    </q-item-section>
      <q-item-section avatar side top>
      <q-icon color="primary" name="play_lessons" />
    </q-item-section>
  </q-item>
    <q-separator  />
    <q-item>
    <q-item-section>
      <q-item-label>Single line item</q-item-label>
      <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-badge color="teal" label="10k" />
    </q-item-section>
  </q-item>
  </q-list>
</template>

<script>
export default {
name: "LessonsModule"
}
</script>

<style scoped>

</style>
