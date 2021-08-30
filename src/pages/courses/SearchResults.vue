<template>
  <div><h2 class="q-pl-sm text-overline">Cursos (23)</h2></div>
  <div>
    <q-list>
      <q-item>
        <q-item-section top avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge label="1" />
        </q-item-section>
      </q-item>

      <q-separator spaced inset="item" />

    </q-list>
    <div class="text-center tex-h5 text-weight-bold">Sem resultados para a pesquisa</div>
  </div>

</template>

<script>
export default {
  name: "SearchResults"
}
</script>

<style scoped>

</style>
