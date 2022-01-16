<template>
  <div>
    <h1 class="text-h5 q-ma-sm  q-pb-md">Hello World</h1>

    <h4 class="text-overline q-pt-md text-capitalize q-ma-sm">Módulos</h4>
    <q-list bordered>
      <template v-for="module in modules" v-bind:key="module.id">
        <q-item v-ripple clickable @click="goToModulesPage(module.id)">
          <q-item-section thumbnail>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>{{ module.name }}</q-item-section>
          <q-item-section class="q-mr-md" thumbnail>
            <q-icon class="q-mr-md" name="play_circle"/>
          </q-item-section>
        </q-item>
        <q-separator/>
      </template>

    </q-list>
    <div v-if="modules.length<=0" class="text-center tex-h5 text-weight-bold">0 módulos</div>

    <h4 v-if="modules.length>0"  class="text-overline q-pt-md text-capitalize q-ma-sm">Testes</h4>
    <q-list bordered>
      <template v-for="module in modules" v-bind:key="module.id">
        <q-item v-ripple clickable  @click="goToQuizPage(module.id)">
          <q-item-section thumbnail>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>{{ module.name }}</q-item-section>
          <q-item-section class="q-mr-md" thumbnail>
            <q-icon class="q-mr-md" name="done"/>
          </q-item-section>
        </q-item>
        <q-separator/>
      </template>
    </q-list>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab color="primary" text-color="black" icon="keyboard_arrow_up" direction="up">
        <q-btn type="a" :href="'https://translate.google.com/'" fab icon="g_translate" color="indigo-8" />
        <q-btn type="a" :href="'https://wa.me/'+course.whatsapp_number" fab icon="whatsapp" color="accent" />
      </q-fab>
        
      </q-page-sticky>
  </div>
</template>

<script>
export default {
  name: "CourseDetails",
  data() {
    return {
      modules: [],
      quizzes: [],
      course:{whatsapp_number:""},
    }
  },
  methods: {
    goToModulesPage(id) {
      this.$router.push('/modulo/'+id)
    },
    goToQuizPage(id) {
      this.$router.push('/quiz/'+id)
    }
  },
  mounted() {
    this.$axios.get('/api/course/' + this.$route.params.id).then(data => {
      this.modules = data.data.modules
      this.course=data.data.course
      console.log(data)
    })
  }
}
</script>

<style scoped>

</style>
