<template>
  <div class=" col-12" keep-alive>
    <q-card class="my-card">
       <iframe v-if="lesson.video_link" id="player" 
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"
                
                type="text/html" style="width: 100%;" height="500px" :src="lesson.video_link+'?enablejsapi=1'" frameborder="0"></iframe>
            
     <!-- <q-video v-if="lesson.video_link" :src="lesson.video_link" />-->
      <div class="text-h6 text-center" v-else>
          Sem informação
        </div>
        
      <q-card-section  class="q-pt-none">
        <div v-html="lesson.description">
          </div>
      </q-card-section>
    </q-card>

    <audio controls>
      <source src="https://expert.co.mz/audio.mp3" type="audio/mp3">
      Seu celular não suporta
    </audio>
  </div>
</template>

<script>
export default {
name: "LessonVideo",
  props:["lesson"]
}
</script>

<style scoped>

</style>
