<template>
  <q-layout view="lHh Lpr lff" style="height: 900px" class="shadow-2 rounded-borders">

    <q-header reveal elevated>
      <q-toolbar class="bg-white text-black">
        <q-btn flat round @click="goBack()" dense icon="close" class="q-mr-sm"/>
      </q-toolbar>
    </q-header>


    <q-page-container >
      <q-page padding>
        <router-view/>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
name: "ScoreLayout",
  methods:{
    goBack() {

    }
  }
}
</script>

<style scoped>

</style>
