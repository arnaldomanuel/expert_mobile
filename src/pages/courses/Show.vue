<template>
  <div class="row">
    <div class="col-12">
      <q-img
        :src="getCourseThumbnailPath"
        :ratio="16/9">
        <div class="absolute-bottom text-subtitle1 text-center">
          {{course.name}}
        </div>
      </q-img>
    </div>
    <div class="col-12">
      <h4 class="text-overline q-pt-md text-capitalize q-ma-sm">CURSO</h4>
      <h1 class="text-h5 q-ma-sm  q-pb-md"> {{course.name}}</h1>
    </div>
    <div class="col-12 q-pb-md">
      <q-btn label="Requisitar Acesso" @click="goToPaymentPage()" class="bg-secondary text-white q-mr-md" icon-right="lock"/>
      <q-btn label="Ver mais" @click="seeDetails()" class="bg-white text-primary" dense/>
    </div>
    <div class="col-12">
      <q-tabs
        v-model="tab"
        class="text-secondary  shadow-2"
      >
        <q-tab name="info" icon="info" label="Info" />
        <q-tab name="author" icon="person" label="Autor" />
        <q-tab name="objectives" icon="star" label="Objectivos" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel class="q-pa-none" name="info">
          <info-course-tab :course="course"/>
        </q-tab-panel>

        <q-tab-panel class="q-pa-none" name="author">
         <author-course-tab :course="course"/>
        </q-tab-panel>

        <q-tab-panel class="q-pa-none" name="objectives">
          <objective-course-tab :objectives="objectives" :course="course"/>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import InfoCourseTab from "pages/courses/InfoCourseTab";
import AuthorCourseTab from "pages/courses/AuthorCourseTab";
import ObjectiveCourseTab from "pages/courses/ObjectiveCourseTab";
export default {
  name: "Show",
  components:{InfoCourseTab, AuthorCourseTab, ObjectiveCourseTab},
  data(){
    return {
      tab:'info',
      course:{name:''},
      objectives:[],
    }
  },
  methods: {
    seeDetails(){
      console.log('id',this.$route.params.id)
      this.$router.push('/curso/detalhes/'+this.$route.params.id)
    },
    goToPaymentPage(){
      this.$router.push('/pagar/curso/'+this.$route.params.id)
    }
  },
  computed:{
    getCourseThumbnailPath(){
      return this.$settings.API_URL+this.course.thumbnail
    }
  },
  mounted() {
    this.$axios.get('/api/course/'+this.$route.params.id).then(data=>{
      this.course=data.data.course
      this.objectives=data.data.objectives
      console.log(data)
    })
    console.log('id',this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
