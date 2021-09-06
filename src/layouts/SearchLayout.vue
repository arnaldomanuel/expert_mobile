<template>
  <div>
    <q-layout view="lHh Lpr lff" style="height: 900px" class="shadow-2 rounded-borders">

      <q-header class="bg-white" reveal elevated>
        <q-toolbar class="q-pa-none">
          <q-input style="width: 100%" filled class="bg-white" v-model="search" label="Pesquisa">
            <template v-slot:prepend>
              <q-icon @click="goBack()" class="cursor" name="arrow_back" />
            </template>
            <template v-slot:append>
              <q-icon name="close" @click="search = ''" class="cursor-pointer" />
            </template>
          </q-input>
        </q-toolbar>
      </q-header>


      <q-page-container >
          <search-results :searchString="search"/>
      </q-page-container>

    </q-layout>
  </div>
</template>

<script>
import SearchResults from "pages/courses/SearchResults";
export default {
name: "SearchLayout",
  components:{SearchResults},
  data(){
  return {
    search:""
  }
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
