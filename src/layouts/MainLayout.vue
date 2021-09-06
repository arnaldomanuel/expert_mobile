<template>
  <q-layout view="lHh Lpr lff" style="height: 900px" class="shadow-2 rounded-borders">

    <q-header reveal elevated>
      <q-toolbar>
        <q-btn flat round @click="drawer = !drawer" dense icon="menu" class="q-mr-sm"/>


        <q-toolbar-title clickable @click="goToHome()">Expert</q-toolbar-title>

        <q-space />
        <q-btn flat round dense icon="search" @click="search()" class="q-mr-xs" />
      <!--  <q-btn flat round dense icon="more_vert" />-->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="400"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item to="/pagina-central" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home"/>
            </q-item-section>

            <q-item-section>
              Página Inicial
            </q-item-section>
          </q-item>
          <q-item to="/cursos" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="school"/>
            </q-item-section>

            <q-item-section>
              Cursos
            </q-item-section>
          </q-item>
          <q-item to="/meus-cursos" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="grade"/>
            </q-item-section>

            <q-item-section>
              Os meus cursos
            </q-item-section>
          </q-item>
          <q-item to="/cursos" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="quiz"/>
            </q-item-section>

            <q-item-section>
              Quizzes
            </q-item-section>
          </q-item>



          <q-item class="lt-sm" @click="confirm=true" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="lock_open"/>
            </q-item-section>

            <q-item-section>
              Logout
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/boy-avatar.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">{{user.name}}</div>
          <div>{{user.email}}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container >
      <q-page padding>
        <router-view/>
      </q-page>
    </q-page-container>
    <template>
      <q-dialog v-model="confirm" persistent>
        <confirm-logout-dialog/>
      </q-dialog>
    </template>

  </q-layout>
</template>

<script>


export default {
  name: 'MainLayout',

  data() {
    return {
      drawer: false,
      miniState: true,
      confirm: false,
    }
  },
  methods:{
    logout() {
      // this.$store.dispatch("auth/logout");
    },
    goToHome(){
      this.$router.push('/pagina-central')
    },
    search(){
      this.$router.push('/pesquisar')
    }
  },
  computed: {
    user ()  {
      return {name:'arnaldo', email:'as@gmail.com'};
    }
  },


}
</script>
