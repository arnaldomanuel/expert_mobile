<template>
  <div class="q-mt-xl q-pt-xl">
    <div class="flex flex-center">
     <img
        alt="Quasar logo"
        src="~assets/img/logo.png"
        style="width: 200px; margin: 0 auto"
      />
    </div>
    <div class="text-h5 q-mt-md text-center primary-color-text">
      Insira seu email
    </div>
    <div>
      <div>
        <div class="row">
          <q-card style="margin: 0 auto" class="col-12 col-md-6 col-lg-5 my-card">
            <q-card-section>
              <div class="col-12">

                  <div class="q-pa-md ">

                      <div class="q-pa-md">
                        <q-form
                          @submit="onSubmit"

                          ref="myForm"
                          class="q-gutter-md"
                        >
                          <q-input
                            filled
                            v-model="user.email"
                            label="Email*"
                            hint=""
                            type="email"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Digite seu email']"
                          />

                      <!--    <q-input
                            filled
                            type="number"
                            v-model="user.password"
                            label="Código *"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Digite seu código Expeert']"
                          />-->

                          <div>
                            <q-btn label="Login" type="submit" color="primary"/>


                          </div>
                        </q-form>

                      </div>

                  </div>

              </div>
            </q-card-section>
          </q-card>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Error from "components/Error";
import AuthService from "src/Services/AuthServices";
import Loading from "src/Services/Loading";
export default {
  data() {
    return {

      model: "",
      dense: false,
      user: {
        email: "",

        password: "password",
      },
      messageFromSerer: "",
      denseOpts: false,
    };
  },
  methods: {
    teste(){
      this.$axios.get('/api/user').then(data=>{
        console.log('data ', data)
      }).error(error=>{
        console.log(error)
      })
    },
    onSubmit() {

      if (this.$refs.myForm !== null && this.$refs.myForm !== undefined) {
        this.$refs.myForm.validate().then(success => {
          if (success) {
                 AuthService.login(this.user).then(success=>{
                   console.log('login ', success)

                   this.$store.dispatch("expert/setToken", success)

                   this.$store.dispatch("expert/getAuthUser").then(data=>{
                       Loading.openSuccess("Autenticação feita com sucesso")
                       // Error.closeprocessing()
                       this.$router.push("/pagina-central")
                       console.log('gggggggg')
                   });
             }).catch(erro => {
               console.log(erro)
               Error.closeprocessing()
                 Error.openNotify('Credenciais inválidas', 4000);
             });
          }
        })

      }

    },
  },
  computed: {
    userAuth(){
      return this.$store.getters["expert/authUser"]
    },
    token (){
      return this.$store.getters["expert/token"]
    }
  },
  mounted() {

  }
};
</script>

<style>
.q-spinner {
  margin: 0 auto;
  display: block;
}
</style>

