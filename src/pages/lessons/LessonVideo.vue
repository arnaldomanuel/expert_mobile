<template>
  <div class=" col-12" keep-alive>

    <q-card v-if="lesson.audio_path" class="my-card q-pb-md">
      <div class="q-mt-lg q-mb-md q-ml-sm q-mr-sm">
         <audio controls  style="width:100%; margin-top:19px;">
          <source :src="getLessonAudio" type="audio/mpeg">
        </audio>
      </div>
      <q-card-section  class="q-pt-none">
        <div >
          <q-list bordered class="rounded-borders">
      <q-expansion-item
        switch-toggle-side
         style="border-radius: 30px"
        expand-separator
         header-class="bg-primary text-white"
        icon="music_note"
        label="Mostrar transcrito"
      >
        <q-card>
          <q-card-section>
            {{lesson.audio_transcript}}
          </q-card-section>
        </q-card>
      </q-expansion-item>

    </q-list>

          </div>
      </q-card-section>
    </q-card>


    <q-card class="my-card">
       <iframe v-if="lesson.video_link" id="player" 
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"
                
                type="text/html" style="width: 100%;" height="500px" :src="lesson.video_link+'?enablejsapi=1'" frameborder="0"></iframe>
            
     <!-- <q-video v-if="lesson.video_link" :src="lesson.video_link" />-->
    
        
      <q-card-section  class="q-pt-lg">
        <div class="text-overline">Descrição da Aula</div>
        <div v-html="lesson.description">
          </div>
      </q-card-section>
    </q-card>

  
  </div>
</template>

<script>
export default {
name: "LessonVideo",
  props:["lesson"],

  computed:{
    getLessonAudio(){
      return this.lesson.audio_path ?this.$settings.API_URL+this.lesson.audio_path:null
    }
  },
}
</script>

<style scoped>

</style>
