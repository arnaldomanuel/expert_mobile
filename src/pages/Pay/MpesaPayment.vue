<template>
  <div >
    <q-input standout="bg-secondary text-white"
             type="number" counter maxlength="9" v-model="phone"
             label="Número Vodacom"
             :rules="[ val => val.length <= 9 || 'Número Vodacom inválido']"
    />

    <q-btn class="text-white bg-primary" @click="pay" label="Efectuar Pagamento"/>
  </div>
</template>

<script>
import Error from "src/Services/Error";
import Loading from "src/Services/Loading";

export default {
name: "MpesaPayment",
  props:["course"],
  data(){
    return {
      phone:"",
      text:""
    }
  },
  methods:{
    pay(){
      Error.openPrrocessing()
      this.$axios.defaults.headers.common['Authorization']='Bearer '+window.localStorage.getItem('token')
      this.$axios.post('/api/pay/mpesa',{
        course_id:this.course.id,
        amount:this.course.price,
        phone_number: this.phone
      }).then(data=>{
        Loading.openSuccess('Pagamento efectuado com sucesso', 5000);
        Error.closeprocessing()
      }).catch(error=>{
        console.log(error.response.data)
        Error.closeprocessing()
        Error.openNotify(error.response.data, 5000)
      })
    }
  }


}
</script>

<style scoped>

</style>
