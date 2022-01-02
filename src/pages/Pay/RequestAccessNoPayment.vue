<template>
  <div >

    <h4 class="text-overline q-pt-md text-capitalize q-ma-sm">Número MPESA</h4>
    <h6 class="text-overline q-pt-md q-ma-sm">{{course!=null ?course.user.mpesa_number:""}}</h6>
    <h4 class="text-overline q-pt-md text-capitalize q-ma-sm">Código de acesso</h4>
    <h6 class="text-overline text-bold q-pt-md q-ma-sm">{{token}}</h6>

    <q-btn v-if="token==''" class="text-white bg-primary" @click="pay" label="Requisitar acesso"/>
  </div>
</template>

<script>
import Error from "src/Services/Error";
import Loading from "src/Services/Loading";

export default {
name: "RequestAccessNoPayment",
  props:["course"],
  data(){
    return {
      phone:"",
      text:"",
      token:"",
    }
  },
  methods:{
    pay(){
      Error.openPrrocessing()
      this.$axios.defaults.headers.common['Authorization']='Bearer '+window.localStorage.getItem('token')
      this.$axios.post('/api/request/course-grant', {
        course_id : this.course.id,
      }).then(data=>{
        Error.closeprocessing()
        this.token = data.data
        console.log(data.data)
      }).catch(error=>{
        console.log(error)
        Error.closeprocessing()
      })
    }
  }


}
</script>

<style scoped>

</style>
