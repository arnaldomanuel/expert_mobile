<template>
  <div class="row">
    <div class="col-12">
      <q-img
        :src="getModuleThumbnailPath"
        :ratio="16/9">
        <div class="absolute-bottom text-subtitle1 text-center">
              {{course.name}}
        </div>
      </q-img>
    </div>
    <div class="col-12">
      <h4 class="text-overline q-pt-md text-uppercase q-ma-sm">Módulo</h4>
      <h1 class="text-h5 q-ma-sm  q-pb-md">{{module.name}}</h1>
    </div>
    <div class="col-12">
      <q-tabs
        v-model="tab"
        class="text-secondary  shadow-2"
      >
        <q-tab name="lessons" icon="play_lessons" label="Aulas" />
        <q-tab name="info" icon="info" label="Info" />
        <q-tab name="objectives" icon="quiz" label="Quiz" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel class="q-pa-none" name="lessons">
          <lessons-module :lessons="lessons"/>

        </q-tab-panel>

        <q-tab-panel class="q-pa-none" name="info">
          <info-module :module="module"/>
        </q-tab-panel>

        <q-tab-panel class="q-pa-none" name="objectives">
          <quiz-modules :module="module"/>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import InfoModule from "pages/modules/InfoModule";
import LessonsModule from "pages/modules/LessonsModule";
import QuizModules from "pages/modules/QuizModules";
export default {
name: "Show",
  components:{InfoModule,LessonsModule, QuizModules},
  data(){
    return {
        tab:"info",
        module:{name:"",id:""},
        lessons:[],
        course:{name:"", id:""},
      }
  },
  computed:{
    getModuleThumbnailPath(){
      return this.$settings.API_URL+this.module.photo_path
    }
  },
  methods:{
    getModule(){
      this.$axios.get('/api/module/'+this.$route.params.id).then(data=>{
        this.module=data.data.module
        this.lessons=data.data.lessons
        this.course=data.data.course
      })
    }
  },
  mounted() {
  this.getModule()
  }
}
</script>

<style scoped>

</style>
