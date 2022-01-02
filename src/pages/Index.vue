<template>
  <q-page >

      <div v-if="lastViewedCourse.id!=0" class="">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">{{lastViewedCourse.name}}</div>
            <q-btn flat rounded>
              <div @click="$router.push('/curso/'+lastViewedCourse.id)" class="q-mt-sm text-secondary text-subtitle2"> <q-icon name="fiber_manual_record"/> Continuar</div>
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
    <all-courses-component/>
  </q-page>
</template>

<script>
import AllCoursesComponent from "components/AllCoursesComponent";
export default {
  components:{AllCoursesComponent},
  data(){
    return {
      slide:"tv",
      lastViewedCourse:{id:0, name:''},
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  },
  methods:{
    goToCourse(){
      this.$router.push("/curso/2")
    },
  },
  mounted() {
    console.log('live',this.$settings)
    this.$axios.defaults.headers.common['Authorization']='Bearer '+window.localStorage.getItem('token')
    this.$axios.get('/api/last-viewed-course').then(data=>{
      if(data.data.lastViewedCourse!=null || data.data.lastViewedCourse!=undefined)
        this.lastViewedCourse=data.data.lastViewedCourse
      console.log(this.lastViewedCourse)
    })
  },

}
</script>
