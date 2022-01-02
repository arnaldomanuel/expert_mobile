"use strict";
(self["webpackChunkexpert"] = self["webpackChunkexpert"] || []).push([[707],{

/***/ 707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ScoreLayout)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/ScoreLayout.vue?vue&type=template&id=0178d944&scoped=true


const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-0178d944");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");

  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "lHh Lpr lff",
    style: {
      "height": "900px"
    },
    class: "shadow-2 rounded-borders"
  }, {
    default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_header, {
      reveal: "",
      elevated: ""
    }, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "bg-white text-black"
      }, {
        default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          round: "",
          onClick: _cache[1] || (_cache[1] = $event => $options.goBack()),
          dense: "",
          icon: "close",
          class: "q-mr-sm"
        })]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page, {
        padding: ""
      }, {
        default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_view)]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  });
});
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/ScoreLayout.vue?vue&type=script&lang=js
/* harmony default export */ const ScoreLayoutvue_type_script_lang_js = ({
  name: "ScoreLayout",
  methods: {
    goBack() {
      this.$router.push('/modulo/' + this.$route.params.id);
    }

  },

  mounted() {
    this.$store.dispatch('expert/getAuthUser');
  }

});
;// CONCATENATED MODULE: ./src/layouts/ScoreLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(9214);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(3812);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(9570);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__(8240);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2652);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/layouts/ScoreLayout.vue



ScoreLayoutvue_type_script_lang_js.render = render
ScoreLayoutvue_type_script_lang_js.__scopeId = "data-v-0178d944"

/* harmony default export */ const ScoreLayout = (ScoreLayoutvue_type_script_lang_js);
;






runtime_auto_import_default()(ScoreLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QBtn: QBtn/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QPage: QPage/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=707.8d2befde.js.map