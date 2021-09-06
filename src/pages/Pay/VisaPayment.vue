<template>
  <div>
    <q-input
      standout="bg-secondary text-white"
      v-model="cardNumber"
      label="Número de cartão"
      mask="#### #### #### ####"


    />
    <div class=" q-mt-md row">
      <div class="col-6">
        <q-input
                 class="q-pr-sm"
                 standout="bg-secondary text-white"
                 mask="##/##"
                 fill-mask="#"
                 v-model="validityDate"
                 label="Válido até (Mês/Ano)"/>
      </div>
      <div class="col-6">
        <q-input
          v-model="cvv"
          mask="###"
          standout="bg-secondary text-white"
          label="CVV" />
      </div>
    </div>

    <q-btn push class="q-mt-lg text-white bg-primary" label="Efectuar Pagamento"/>
  </div>
</template>

<script>
export default {
name: "VisaPayment",
  data(){
  return {
    cardNumber:"",
    validityDate:"",
    cvv:"",

  }
  }
}
</script>

<style scoped>

</style>
