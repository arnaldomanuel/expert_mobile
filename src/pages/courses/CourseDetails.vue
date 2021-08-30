<template>
  <div>
    <h1 class="text-h5 q-ma-sm  q-pb-md">Hello World</h1>

    <h4 class="text-overline q-pt-md text-capitalize q-ma-sm">Módulos</h4>
    <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section  thumbnail>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>Image rounded avatar</q-item-section>
      </q-item>

      <q-separator />
      <q-item @click="goToModulesPage()" clickable v-ripple>
        <q-item-section  thumbnail>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>Image rounded avatar</q-item-section>
        <q-item-section thumbnail class="q-mr-md"><q-icon class="q-mr-md" name="lock"/> </q-item-section>
      </q-item>

      <q-separator /><q-item clickable v-ripple>
      <q-item-section  thumbnail>
        <q-avatar rounded>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>

      <q-item-section>Image rounded avatar</q-item-section>
    </q-item>

      <q-separator />
    </q-list>

    <h4 class="text-overline q-pt-md text-capitalize q-ma-sm">Testes</h4>
    <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section  thumbnail>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>Image rounded avatar</q-item-section>
      </q-item>

      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section  thumbnail>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>Image rounded avatar</q-item-section>
        <q-item-section thumbnail class="q-mr-md"><q-icon class="q-mr-md" name="done"/> </q-item-section>
      </q-item>

      <q-separator /><q-item clickable v-ripple>
      <q-item-section  thumbnail>
        <q-avatar rounded>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>

      <q-item-section>Image rounded avatar</q-item-section>
    </q-item>

      <q-separator />
    </q-list>
  </div>
</template>

<script>
export default {
name: "CourseDetails",
  methods:{
    goToModulesPage(){
      this.$router.push('/modulo/2')
    }
  }
}
</script>

<style scoped>

</style>
