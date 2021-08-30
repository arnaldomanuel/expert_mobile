
const routes = [
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
      { path: ':id/resultado', component: () => import('pages/Quiz/Score.vue') },
    ]
  },
  {
    path: '/pesquisar',
    component: () => import('layouts/SearchLayout.vue'),
    children: [
      { path: '', component: () => import('pages/courses/SearchResults.vue') },

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
