<template>
  <div class="q-pa-none q-ma-none">
    <q-card>
      <q-tab-panels keep-alive  v-model="tab" animated>
        <q-tab-panel keep-alive name="PDF">
          <lesson-p-d-f keep-alive :lesson="lesson"></lesson-p-d-f>
        </q-tab-panel>

        <q-tab-panel keep-alive  name="video">
          <lesson-video keep-alive :lesson="lesson"/>
        </q-tab-panel>

        <q-tab-panel keep-alive name="lessons">
          <other-lessons @route-lesson="changeCurrentLesson" keep-alive :otherLessons="otherLessons"/>
        </q-tab-panel>
      </q-tab-panels>

      <q-separator />

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab color="primary" text-color="black" icon="keyboard_arrow_up" direction="up">
        <q-btn type="a" :href="'https://translate.google.com/'" fab icon="g_translate" color="indigo-8" />
        <q-btn type="a" :href="'https://wa.me/'+course.whatsapp_number" fab icon="whatsapp" color="accent" />
      </q-fab>
        
      </q-page-sticky>
      <q-footer bordered class="bg-white text-primary">
        <q-tabs keep-alive
          v-model="tab"
          dense
          class="bg-grey-3"
          align="justify"
          narrow-indicator
  
        >
          <q-tab keep-alive  name="video" icon="smart_display" />
          <q-tab keep-alive name="PDF" icon="picture_as_pdf" />
          <q-tab keep-alive name="lessons" icon="play_lessons" />
        </q-tabs>
      </q-footer>


    </q-card>
  </div>
</template>

<script>
import { dom } from 'quasar'
import LessonPDF from "pages/lessons/LessonPDF";
import LessonVideo from "pages/lessons/LessonVideo";
import OtherLessons from "pages/lessons/OtherLessons";
import Error from "src/Services/Error";
// import this to use default
export default {
components:{LessonPDF,LessonVideo,OtherLessons},

name: "Show",
  data(){
    return {
      lesson: {},
      otherLessons:[],
      course:{id:-1, whatsapp_number:''},
      tab:"video"
    }
  },
  methods:{
    changeCurrentLesson(id){
      console.log('second react', id);
      this.loadLesson(id)
    },

    loadLesson(id){
      this.$axios.defaults.headers.common['Authorization']='Bearer '+window.localStorage.getItem('token')
   
   this.$axios.get('/api/aulas/'+(id?id:this.$route.params.id)).then(data=>{
      this.lesson=data.data.lesson
      this.course=data.data.course
      this.otherLessons=data.data.suggestions
      this.tab="video"
      console.log('video ',this.lesson)
    }).catch(error=>{
      console.log(error.response.data.message)
      console.log(error)
      Error.openNotify(error.response.data.message, 5000)
    })
    }
  },

  computed: {
    height(){
      return 'height: '+(screen.height-130)+"px;"
    }
  },
  mounted() {
    const { height, width } = dom
    console.log(
      screen.height
    )
    this.loadLesson(null)
  }
}
</script>

<style scoped>

</style>
