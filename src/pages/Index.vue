<template>
  <q-page >

      <div class="">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Nome de um curso qualquer</div>
            <q-btn flat rounded>
              <div class="q-mt-sm text-secondary text-subtitle2"> <q-icon name="fiber_manual_record"/> Continuar</div>
            </q-btn>
          </q-card-section>
        </q-card>
      </div>
    <div class="q-mt-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        infinite
        :autoplay="true"
        arrows
        height="300px"
        class="bg-secondary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

   <div class=" q-mt-md  q-mb-md text-h6">Cursos (6)</div>
    <div class="row">
      <q-card to="curso/2" clickable class="cursor-pointer my-card">

        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div  to="curso/2" class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
      </q-card>
    </div>

  </q-page>
</template>

<script>

export default {
  data(){
    return {
      slide:"tv",
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'

    }
  },
  methods:{

  },
  mounted() {
    console.log('live',this.$settings)
  }
}
</script>
