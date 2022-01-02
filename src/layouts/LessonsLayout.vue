<template>
  <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">

    <q-header reveal elevated>
      <q-toolbar>
        <q-btn flat round @click="goBack()" dense icon="arrow_back" class="q-mr-sm"/>
      </q-toolbar>
    </q-header>


    <q-page-container >
      <q-page >
        <router-view/>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>


export default {
  name: 'LessonsLayout',

  data() {
    return {
      drawer: true,
      miniState: true,
      confirm: false,
      tab:"images"
    }
  },
  methods:{
    logout() {
      // this.$store.dispatch("auth/logout");
    },
    goBack(){
      this.$router.go(-1)
    }
  },
  computed: {
    user ()  {
      return {name:'arnaldo', email:'as@gmail.com'};
    }
  },
  mounted() {
    this.$axios.defaults.headers.common['Authorization']='Bearer '+window.localStorage.getItem('token')
    this.$store.dispatch('expert/getAuthUser')
  }

}
</script>
