<template>
  <div>
    <h1 class="text-h6">{{course.name}}</h1>

    <h4 class="text-overline q-pt-md text-capitalize q-ma-sm">Preço</h4>

    <h1 class="text-h3 text-secondary q-my-md"> {{ course.price }} MT</h1>

    <h4 class="text-overline q-pt-md text-capitalize q-ma-sm">Metódo de pagamento</h4>
    <q-btn push :class="{'bg-secondary':mpesaSelected, 'text-white':mpesaSelected, 'q-mr-sm':true}" icon-right="payments" @click="visaSelected=false;mpesaSelected=true; requestAcess=false" label="MPESA" />
    <q-btn push :class="{'bg-secondary':requestAcess, 'text-white':requestAcess, 'q-mr-sm':true}"  @click="requestAcess=true;visaSelected=false; mpesaSelected=false" label="Requisitar" />
    <q-btn push :class="{'bg-secondary':visaSelected, 'text-white':visaSelected}" icon-right="credit_card" @click="visaSelected=true;mpesaSelected=false; requestAcess=false" label="VISA" />


    <div class="q-mt-md">
      <visa-payment v-if="visaSelected" />
      <request-access-no-payment :course="course" v-if="requestAcess"/>
      <mpesa-payment :course="course" v-if="mpesaSelected" />
    </div>
  </div>
</template>

<script>
import MpesaPayment from "pages/Pay/MpesaPayment";
import VisaPayment from "pages/Pay/VisaPayment";
import RequestAccessNoPayment from "pages/Pay/RequestAccessNoPayment";
export default {
  name: "RequestAccess",
  components:{MpesaPayment, VisaPayment, RequestAccessNoPayment},
  data(){
    return {
      visaSelected: false,
      mpesaSelected:false,
      requestAcess:false,
      course:{name:"", price:""}
    }
  },
  computed:{

  },
  methods:{
    getCourseDetail(){
      this.$axios.defaults.headers.common['Authorization']='Bearer '+window.localStorage.getItem('token')
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
