<template>
  <div class="q-pa-none q-ma-none">
    <q-card>
      <q-tab-panels :style="height" v-model="tab" animated>
        <q-tab-panel name="PDF">
          <lesson-p-d-f :lesson="lesson"></lesson-p-d-f>
        </q-tab-panel>

        <q-tab-panel name="video">
          <lesson-video :lesson="lesson"/>
        </q-tab-panel>

        <q-tab-panel name="lessons">
          <other-lessons :otherLessons="otherLessons"/>
        </q-tab-panel>
      </q-tab-panels>

      <q-separator />

      <q-tabs
        v-model="tab"
        dense
        class="bg-grey-3"
        align="justify"
        narrow-indicator
      >
        <q-tab name="video" icon="smart_display" />
        <q-tab name="PDF" icon="picture_as_pdf" />
        <q-tab name="lessons" icon="play_lessons" />
      </q-tabs>
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
      tab:"video"
    }
  },
  computed: {
    height(){
      return 'height: '+(screen.height-95)+"px;"
    }
  },
  mounted() {
    const { height, width } = dom
    console.log(
      screen.height
    )
    this.$axios.get('/api/aulas/'+this.$route.params.id).then(data=>{
      this.lesson=data.data.lesson
      this.otherLessons=data.data.suggestions
    }).catch(error=>{
      console.log(error.response.data.message)
      console.log(error)
      Error.openNotify(error.response.data.message, 5000)
    })
  }
}
</script>

<style scoped>

</style>
