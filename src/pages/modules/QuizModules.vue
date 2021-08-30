<template>
<div class="q-mt-md">
  <q-list>

    <q-item @click="goTo()" clickable v-ripple>
      <q-item-section  thumbnail>
        <q-avatar rounded>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>

      <q-item-section>Image rounded avatar</q-item-section>
      <q-item-section thumbnail class="q-mr-md"><q-icon class="q-mr-md" name="done"/> </q-item-section>
    </q-item>
    <q-separator />
  </q-list>
</div>
</template>

<script>
export default {
name: "QuizModules",
  methods:{
    goTo(){
      this.$router.push('/Quiz/3')
    }
  }
}
</script>

<style scoped>

</style>
