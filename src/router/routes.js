
const routes = [
  {
    path: '/pagina-central',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/curso',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/courses/Index.vue') },
      { path: ':id', component: () => import('pages/courses/Show.vue') },
    ]
  },
  {
    path: '/curso',
    component: () => import('layouts/BackTopLayout.vue'),
    children: [
      { path: 'detalhes/:id', component: () => import('pages/courses/CourseDetails.vue') },

    ]
  },
  {
    path: '/modulo',
    component: () => import('layouts/BackTopLayout.vue'),
    children: [
      { path: ':id', component: () => import('pages/modules/Show.vue') },

    ]
  },
  {
    path: '/quiz',
    component: () => import('layouts/BackTopLayout.vue'),
    children: [
      { path: ':id', component: () => import('pages/Quiz/Show.vue') },
      { path: '/resultado', component: () => import('pages/Quiz/Score.vue') },

    ]
  },
  {
    path: '/quiz',
    component: () => import('layouts/ScoreLayout.vue'),
    children: [
      { path: ':id/resultado/:score/:total', component: () => import('pages/Quiz/Score.vue') },
    ]
  },
  {
    path: '/pesquisar',
    component: () => import('layouts/SearchLayout.vue'),

  },
  {
    path: '/pagar/curso',
    component: () => import('layouts/BackTopLayout.vue'),
    children: [
      { path: ':id', component: () => import('pages/pay/RequestAccess.vue') },

    ]
  },
  {
    path: '/entrar',
    name: 'Login',
    component: () => import('layouts/AuthenticationLayout.vue'),
    children: [

      { path: '',name: 'Login', component: () => import('pages/Authentication/Login.vue') }
    ]
  },
  {
    path: '/pdf',
    component: () => import('pages/pdf/Show.vue'),
  },
  {
    path: '/aula',
    component: () => import('layouts/LessonsLayout'),
    children: [
      { path: ':id', component: () => import('pages/lessons/Show.vue') },

    ]
  },
  {
    path: '/meus-cursos',
    component: () => import('layouts/MainLayout'),
    children: [
      { path: '', component: () => import('pages/Profile/MyCourses') },
    ]
  },
  {
    path: '/meus-quizzes',
    component: () => import('layouts/MainLayout'),
    children: [
      { path: '', component: () => import('pages/Quiz/MyQuizzes') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
