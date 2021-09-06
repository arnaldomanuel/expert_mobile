<template>
  <div >
    <q-input standout="bg-secondary text-white"
             type="number" counter maxlength="9" v-model="phone"
             label="Número Vodacom"
             :rules="[ val => val.length <= 9 || 'Número Vodacom inválido']"
    />

    <q-btn class="text-white bg-primary" label="Efectuar Pagamento"/>
  </div>
</template>

<script>
export default {
name: "MpesaPayment",
  data(){
    return {
      phone:"",
      text:""
    }
  },


}
</script>

<style scoped>

</style>
