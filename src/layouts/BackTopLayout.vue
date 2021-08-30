<template>
  <q-layout view="lHh Lpr lff" style="height: 900px" class="shadow-2 rounded-borders">

    <q-header reveal elevated>
      <q-toolbar>
        <q-btn flat round @click="goBack()" dense icon="arrow_back" class="q-mr-sm"/>
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
  name: 'MainLayout',

  data() {
    return {
      drawer: true,
      miniState: true,
      confirm: false,
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


}
</script>
