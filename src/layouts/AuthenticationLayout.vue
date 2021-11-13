<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'AutheticationLayout',

  data () {
    return {

    }
  },
  mounted() {
    this.$store.dispatch('expert/getAuthUser').then(data=>{
       if(this.$store.getters["expert/loggedIn"])
         this.$router.push("/")
    })
  }
}
</script>

<style lang="scss">
.primary-color-text {
  color: $primary;
}
</style>
