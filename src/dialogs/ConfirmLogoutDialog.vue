<template>

      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="logout" color="primary" text-color="white" />
          <span class="q-ml-sm">{{confirm}}Confirma o logout? Terá de inserir a senha e o código da próxima vez que aceder</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat @click="logout" label="Sim" color="primary" v-close-popup />
          <q-btn flat label="Não" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>

</template>

<script>

import Error from "components/Error";

export default {
   props:['confirm'],

   methods:{
     logout() {
       Error.openPrrocessing()
       this.$store.dispatch("expert/logout");
       Error.closeprocessing()
     }
   },
}
</script>
