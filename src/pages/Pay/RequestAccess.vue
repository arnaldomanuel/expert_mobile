<template>
  <div>
    <h1 class="text-h6">{{course.name}}</h1>

    <h4 class="text-overline q-pt-md text-capitalize q-ma-sm">Preço</h4>

    <h1 class="text-h3 text-secondary q-my-md"> {{ course.price }} MT</h1>

    <h4 class="text-overline q-pt-md text-capitalize q-ma-sm">Metódo de pagamento</h4>
    <q-btn push :class="{'bg-secondary':!visaSelected, 'text-white':!visaSelected, 'q-mr-lg':true}" icon-right="payments" @click="visaSelected=false" label="MPESA" />
    <q-btn push :class="{'bg-secondary':visaSelected, 'text-white':visaSelected}" icon-right="credit_card" @click="visaSelected=true" label="VISA" />


    <div class="q-mt-md">
      <visa-payment v-if="visaSelected" />
      <mpesa-payment :course="course" v-if="!visaSelected" />
    </div>
  </div>
</template>

<script>
import MpesaPayment from "pages/Pay/MpesaPayment";
import VisaPayment from "pages/Pay/VisaPayment";
export default {
  name: "RequestAccess",
  components:{MpesaPayment, VisaPayment},
  data(){
    return {
      visaSelected: false,
      course:{name:"", price:""}
    }
  },
  computed:{

  },
  methods:{
    getCourseDetail(){
      this.$axios.get('api/get/course/'+this.$route.params.id).then(data=>{
        this.course=data.data;

        console.log(data)
      })

    }
  },
  mounted() {
    this.getCourseDetail()
  }
}
</script>

<style scoped>

</style>
