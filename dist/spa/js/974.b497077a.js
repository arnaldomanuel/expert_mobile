"use strict";
(self["webpackChunkexpert"] = self["webpackChunkexpert"] || []).push([[974],{

/***/ 974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AuthenticationLayout)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/AuthenticationLayout.vue?vue&type=template&id=648fea8c

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "lHh Lpr lFf"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_view)]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/AuthenticationLayout.vue?vue&type=script&lang=js
/* harmony default export */ const AuthenticationLayoutvue_type_script_lang_js = ({
  name: 'AutheticationLayout',

  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch('expert/getAuthUser').then(data => {
      if (this.$store.getters["expert/loggedIn"]) this.$router.push("/");
    });
  }

});
;// CONCATENATED MODULE: ./src/layouts/AuthenticationLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(9214);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2652);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/layouts/AuthenticationLayout.vue




;
AuthenticationLayoutvue_type_script_lang_js.render = render

/* harmony default export */ const AuthenticationLayout = (AuthenticationLayoutvue_type_script_lang_js);
;


runtime_auto_import_default()(AuthenticationLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QPageContainer: QPageContainer/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=974.b497077a.js.map