/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3227:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(7280);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5363);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(71);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(8880);
// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js
var vue_plugin = __webpack_require__(9592);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=template&id=02ecec38

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_router_view);
}
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=script&lang=js

/* harmony default export */ const Appvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'App'
}));
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/App.vue



Appvue_type_script_lang_js.render = render

/* harmony default export */ const App = (Appvue_type_script_lang_js);
// EXTERNAL MODULE: ./src/store/index.js + 5 modules
var src_store = __webpack_require__(4416);
// EXTERNAL MODULE: ./src/router/index.js + 1 modules
var src_router = __webpack_require__(8669);
;// CONCATENATED MODULE: ./.quasar/app.js


/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/
;



/* harmony default export */ async function app(createAppFn, quasarUserOptions) {
  // create store and router instances
  const store = typeof src_store.default === 'function' ? await (0,src_store.default)({}) : src_store.default; // obtain Vuex injection key in case we use TypeScript

  const {
    storeKey
  } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 4416));
  const router = typeof src_router/* default */.Z === 'function' ? await (0,src_router/* default */.Z)({
    store
  }) : src_router/* default */.Z; // make router instance available in store

  store.$router = router; // Create the app instance.
  // Here we inject into it the Quasar UI, the router & possibly the store.

  const app = createAppFn(App);
  app.config.devtools = true;
  app.use(vue_plugin/* default */.Z, quasarUserOptions); // Expose the app, the router and the store.
  // Note that we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.

  return {
    app,
    store,
    storeKey,
    router
  };
}
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__(4434);
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/LocalStorage.js + 1 modules
var LocalStorage = __webpack_require__(6395);
;// CONCATENATED MODULE: ./.quasar/quasar-user-options.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/
;
/* harmony default export */ const quasar_user_options = ({
  config: {},
  plugins: {
    Notify: Notify/* default */.Z,
    LocalStorage: LocalStorage/* default */.Z
  }
});
;// CONCATENATED MODULE: ./.quasar/client-entry.js




/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/


 // We load Quasar stylesheet file





const publicPath = ``;

async function start({
  app,
  router,
  store,
  storeKey
}, bootFiles) {
  let hasRedirected = false;

  const redirect = url => {
    hasRedirected = true;
    const normalized = Object(url) === url ? router.resolve(url).fullPath : url;
    window.location.href = normalized;
  };

  const urlPath = window.location.href.replace(window.location.origin, '');

  for (let i = 0; hasRedirected === false && i < bootFiles.length; i++) {
    try {
      await bootFiles[i]({
        app,
        router,
        store,
        ssrContext: null,
        redirect,
        urlPath,
        publicPath
      });
    } catch (err) {
      if (err && err.url) {
        window.location.href = err.url;
        return;
      }

      console.error('[Quasar] boot error:', err);
      return;
    }
  }

  if (hasRedirected === true) {
    return;
  }

  app.use(router);
  app.use(store, storeKey);
  app.mount('#q-app');
}

app(runtime_dom_esm_bundler/* createApp */.ri, quasar_user_options).then(app => {
  return Promise.all([Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5474)), Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7575))]).then(bootFiles => {
    const boot = bootFiles.map(entry => entry.default).filter(entry => typeof entry === 'function');
    start(app, boot);
  });
});

/***/ }),

/***/ 4851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export authClient */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4416);
/* harmony import */ var boot_settingsFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2470);
/* harmony import */ var boot_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5474);




const authClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: boot_settingsFile__WEBPACK_IMPORTED_MODULE_2__/* .default.settings.API_URL */ .Z.settings.API_URL
});
authClient.defaults.headers.common['Accept'] = 'application/json';
/*
 * Add a response interceptor
 */

authClient.interceptors.response.use(response => {
  return response;
}, function (error) {
  if (error.response && [401, 419].includes(error.response.status) && _store_index__WEBPACK_IMPORTED_MODULE_1__.default.getters["auth/authUser"] && !_store_index__WEBPACK_IMPORTED_MODULE_1__.default.getters["auth/guest"]) {
    _store_index__WEBPACK_IMPORTED_MODULE_1__.default.dispatch("auth/logout");
  }

  return Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  async login(payload) {
    authClient.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');
    return authClient.post("api/login", payload);
  },

  logout() {
    return authClient.post("/logout");
  },

  async forgotPassword(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/forgot-password", payload);
  },

  getAuthUser() {
    authClient.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');
    return authClient.get("/api/user");
  },

  async resetPassword(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/reset-password", payload);
  },

  updatePassword(payload) {
    return authClient.put("/user/password", payload);
  },

  async registerUser(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/register", payload);
  },

  sendVerification(payload) {
    return authClient.post("/email/verification-notification", payload);
  },

  updateUser(payload) {
    return authClient.put("/user/profile-information", payload);
  }

});

/***/ }),

/***/ 5474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "api": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var quasar_wrappers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7083);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var boot_settingsFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2470);


 // Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

let api = axios__WEBPACK_IMPORTED_MODULE_1___default().create({
  baseURL: boot_settingsFile__WEBPACK_IMPORTED_MODULE_2__/* .default.settings.API_URL */ .Z.settings.API_URL
});
api.defaults.headers.common['Accept'] = 'application/json';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,quasar_wrappers__WEBPACK_IMPORTED_MODULE_0__/* .boot */ .xr)(({
  app
}) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api
  app.config.globalProperties.$axios = api; // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api; // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
}));


/***/ }),

/***/ 207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const settings = {
  API_URL: "https://expert.co.mz/"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  settings
});

/***/ }),

/***/ 7575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var quasar_wrappers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7083);
 // Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

let settingsFiles;

if (true) {
  settingsFiles = __webpack_require__(207);
} else {}

const settings = settingsFiles.default.settings;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,quasar_wrappers__WEBPACK_IMPORTED_MODULE_0__/* .boot */ .xr)(({
  app
}) => {
  // for use inside Vue files (Options API) through this.$axios and this.$settings
  app.config.globalProperties.$settings = settings;
}));


/***/ }),

/***/ 2470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var quasar_wrappers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7083);
 // Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

let settingsFiles;

if (true) {
  console.log('im env');
  settingsFiles = __webpack_require__(207);
} else {}

const settings = settingsFiles.default.settings;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  settings
});

/***/ }),

/***/ 8669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ router)
});

// EXTERNAL MODULE: ./node_modules/quasar/wrappers/index.js
var wrappers = __webpack_require__(7083);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(9582);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(71);
;// CONCATENATED MODULE: ./src/router/routes.js

const routes = [{
  path: '/pagina-central',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(412)]).then(__webpack_require__.bind(__webpack_require__, 7412)),
  children: [{
    path: '',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(26)]).then(__webpack_require__.bind(__webpack_require__, 2026))
  }]
}, {
  path: '/',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(412)]).then(__webpack_require__.bind(__webpack_require__, 7412)),
  children: [{
    path: '',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(26)]).then(__webpack_require__.bind(__webpack_require__, 2026))
  }]
}, {
  path: '/curso',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(412)]).then(__webpack_require__.bind(__webpack_require__, 7412)),
  children: [{
    path: '',
    component: () => __webpack_require__.e(/* import() */ 989).then(__webpack_require__.bind(__webpack_require__, 4989))
  }, {
    path: ':id',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(554)]).then(__webpack_require__.bind(__webpack_require__, 554))
  }]
}, {
  path: '/curso',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(179)]).then(__webpack_require__.bind(__webpack_require__, 1179)),
  children: [{
    path: 'detalhes/:id',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(439)]).then(__webpack_require__.bind(__webpack_require__, 9439))
  }]
}, {
  path: '/modulo',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(179)]).then(__webpack_require__.bind(__webpack_require__, 1179)),
  children: [{
    path: ':id',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(892)]).then(__webpack_require__.bind(__webpack_require__, 1892))
  }]
}, {
  path: '/quiz',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(179)]).then(__webpack_require__.bind(__webpack_require__, 1179)),
  children: [{
    path: ':id',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(314)]).then(__webpack_require__.bind(__webpack_require__, 4314))
  }, {
    path: '/resultado',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(716)]).then(__webpack_require__.bind(__webpack_require__, 6716))
  }]
}, {
  path: '/quiz',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(707)]).then(__webpack_require__.bind(__webpack_require__, 707)),
  children: [{
    path: ':id/resultado/:score/:total',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(716)]).then(__webpack_require__.bind(__webpack_require__, 6716))
  }]
}, {
  path: '/pesquisar',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(875)]).then(__webpack_require__.bind(__webpack_require__, 9875))
}, {
  path: '/pagar/curso',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(179)]).then(__webpack_require__.bind(__webpack_require__, 1179)),
  children: [{
    path: ':id',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(491)]).then(__webpack_require__.bind(__webpack_require__, 5491))
  }]
}, {
  path: '/entrar',
  name: 'Login',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(974)]).then(__webpack_require__.bind(__webpack_require__, 974)),
  children: [{
    path: '',
    name: 'Login',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(78)]).then(__webpack_require__.bind(__webpack_require__, 4078))
  }]
}, {
  path: '/pdf',
  component: () => __webpack_require__.e(/* import() */ 543).then(__webpack_require__.bind(__webpack_require__, 2543))
}, {
  path: '/aula',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(125)]).then(__webpack_require__.bind(__webpack_require__, 1125)),
  children: [{
    path: ':id',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(81)]).then(__webpack_require__.bind(__webpack_require__, 2081))
  }]
}, {
  path: '/meus-cursos',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(412)]).then(__webpack_require__.bind(__webpack_require__, 7412)),
  children: [{
    path: '',
    component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(684)]).then(__webpack_require__.bind(__webpack_require__, 3684))
  }]
}, {
  path: '/meus-quizzes',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(412)]).then(__webpack_require__.bind(__webpack_require__, 7412)),
  children: [{
    path: '',
    component: () => __webpack_require__.e(/* import() */ 766).then(__webpack_require__.bind(__webpack_require__, 7766))
  }]
}, // Always leave this as last one,
// but you can also remove it
{
  path: '/:catchAll(.*)*',
  component: () => Promise.all(/* import() */[__webpack_require__.e(736), __webpack_require__.e(193)]).then(__webpack_require__.bind(__webpack_require__, 2193))
}];
/* harmony default export */ const router_routes = (routes);
;// CONCATENATED MODULE: ./src/router/index.js



/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

/* harmony default export */ const router = ((0,wrappers/* route */.BC)(function ({
  store
  /*ssrContext*/

}) {
  const createHistory =  false ? 0 :  false ? 0 : vue_router_esm_bundler/* createWebHashHistory */.r5;
  const Router = (0,vue_router_esm_bundler/* createRouter */.p7)({
    scrollBehavior: () => ({
      left: 0,
      top: 0
    }),
    routes: router_routes,
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory( false ? 0 : "")
  });
  Router.beforeEach((to, from, next) => {
    console.log('before 1111', store.getters["expert/authUser"]);
    console.log('followed');

    if (to.path.indexOf("entrar") < 0 && store.getters["expert/authUser"] == null) {
      next('/entrar');
    } else {
      next();
    }
  });
  return Router;
}));

/***/ }),

/***/ 4416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store)
});

// EXTERNAL MODULE: ./node_modules/quasar/wrappers/index.js
var wrappers = __webpack_require__(7083);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js
var vuex_esm_bundler = __webpack_require__(5250);
;// CONCATENATED MODULE: ./src/store/expert/state.js
/* harmony default export */ function state() {
  return {
    user: null,
    meta: null,
    loggedIn: false,
    links: null,
    loading: null,
    error: null,
    err: null,
    token: null
  };
}
;// CONCATENATED MODULE: ./src/store/expert/getters.js
const authUser = state => {
  return state.user;
};

const isAdmin = state => {
  return state.user ? state.user.isAdmin : false;
};

const error = state => {
  return state.error;
};

const loading = state => {
  return state.loading;
};

const loggedIn = state => {
  return state.user != null;
};

const guest = () => {
  const storageItem = window.localStorage.getItem("guest");
  if (!storageItem) return false;
  if (storageItem === "isGuest") return true;
  if (storageItem === "isNotGuest") return false;
};

const token = () => {
  return window.localStorage.getItem('token');
};

/* harmony default export */ const getters = ({
  authUser,
  isAdmin,
  loggedIn,
  guest,
  loading,
  error,
  token
});
;// CONCATENATED MODULE: ./src/store/expert/mutations.js
const SET_USER = (state, user) => {
  window.localStorage.setItem("user", user);
  console.log("setting user", user);
  state.user = user;
};

const SET_META = (state, meta) => {
  state.meta = meta;
};

const SET_LINKS = (state, links) => {
  state.links = links;
};

const SET_LOADING = (state, loading) => {
  state.loading = loading;
};

const SET_ERROR = (state, error) => {
  state.error = error;
};

const setUSerDummy = (state, user) => {
  state.user = user;
};

const setAPIToken = (state, token) => {
  state.token = token;
};

/* harmony default export */ const mutations = ({
  SET_USER,
  SET_META,
  SET_LINKS,
  SET_LOADING,
  SET_ERROR,
  setUSerDummy,
  setAPIToken
});
// EXTERNAL MODULE: ./src/router/index.js + 1 modules
var router = __webpack_require__(8669);
// EXTERNAL MODULE: ./src/Services/AuthServices.js
var AuthServices = __webpack_require__(4851);
;// CONCATENATED MODULE: ./src/store/expert/actions.js


/* harmony default export */ const actions = ({
  logout({
    commit,
    dispatch
  }) {
    commit("SET_USER", null);
    commit("setAPIToken", null);
    dispatch("setToken", null);
    console.log('going null', router/* default.currentRoute */.Z.currentRoute);
  },

  async getAuthUser({
    commit
  }) {
    commit("SET_LOADING", true);

    try {
      const response = await AuthServices/* default.getAuthUser */.Z.getAuthUser();
      console.log(response.data);
      commit("SET_USER", response.data);
      commit("SET_LOADING", false);
      return response.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_USER", null);
    }
  },

  setToken(context, value) {
    if (value == null) {
      window.localStorage.removeItem('token');
    } else {
      console.log('value1 ', value.data.api_token);
      window.localStorage.setItem('token', value.data.api_token);
      context.commit("SET_USER", value.data);
    }
  },

  setGuest(context, {
    value
  }) {
    window.localStorage.setItem("guest", value);
  }

});
;// CONCATENATED MODULE: ./src/store/expert/index.js




/* harmony default export */ const expert = ({
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});
;// CONCATENATED MODULE: ./src/store/index.js


 // import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

/* harmony default export */ const store = ((0,wrappers/* store */.h)(function () {
  const Store = (0,vuex_esm_bundler/* createStore */.MT)({
    modules: {
      // examplemozfretes
      expert: expert
    },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: true
  });

  if (false) {}

  return Store;
}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + "." + {"26":"31862a7c","78":"cb5b9181","81":"a7437933","125":"57193d04","179":"bfa8b7fe","193":"4713407b","314":"0de857c7","412":"3af094ad","439":"0983c307","491":"00ea09ac","543":"e7b1cd58","554":"b367d75a","684":"db22b964","707":"8d2befde","716":"8cba18b9","766":"a4c60e1d","875":"ef3302d2","892":"b927a610","974":"b497077a","989":"9072bfc7"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + (chunkId === 736 ? "vendor" : chunkId) + "." + {"78":"d09f2288","736":"ac9be677","974":"7e6bdc0f"}[chunkId] + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "expert:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"78":1,"974":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkexpert"] = self["webpackChunkexpert"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(3227)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.ed88f317.js.map