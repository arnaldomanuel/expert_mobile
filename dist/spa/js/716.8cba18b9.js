"use strict";
(self["webpackChunkexpert"] = self["webpackChunkexpert"] || []).push([[716],{

/***/ 6716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Score)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Quiz/Score.vue?vue&type=template&id=09a2ef5d&scoped=true


const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-09a2ef5d");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-09a2ef5d");

const _hoisted_1 = {
  key: 0,
  class: "text-center text-h4"
};
const _hoisted_2 = {
  key: 1,
  class: "text-center text-h4"
};
const _hoisted_3 = {
  key: 2,
  class: "text-center text-primary q-mb-lg"
};
const _hoisted_4 = {
  key: 3,
  class: "text-center text-red q-mb-lg"
};
const _hoisted_5 = {
  class: "text-center"
};
const _hoisted_6 = {
  class: "text-h1"
};
const _hoisted_7 = {
  class: "text-center"
};

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", null, [$options.scoreWin ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("h3", _hoisted_1, " PARABÉNS!!")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), !$options.scoreWin ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("h3", _hoisted_2, " Não foi dessa")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), $options.scoreWin ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("h1", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
    name: "military_tech"
  })])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), !$options.scoreWin ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("h1", _hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
    name: "close"
  })])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)("h3", _hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("span", _hoisted_6, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$route.params.score), 1), (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("/" + (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.$route.params.total), 1)]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("h4", _hoisted_7, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
    label: "Voltar a aula",
    onClick: _cache[1] || (_cache[1] = $event => $options.goToModulesPage()),
    class: "bg-secondary text-white"
  })])]);
});
;// CONCATENATED MODULE: ./src/pages/Quiz/Score.vue?vue&type=template&id=09a2ef5d&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Quiz/Score.vue?vue&type=script&lang=js
/* harmony default export */ const Scorevue_type_script_lang_js = ({
  name: "Score",
  methods: {
    goToModulesPage() {
      this.$router.push('/modulo/' + this.$route.params.id);
    }

  },
  computed: {
    scoreWin() {
      return this.$route.params.score >= this.$route.params.total / 2;
    }

  }
});
;// CONCATENATED MODULE: ./src/pages/Quiz/Score.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__(8240);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Quiz/Score.vue



Scorevue_type_script_lang_js.render = render
Scorevue_type_script_lang_js.__scopeId = "data-v-09a2ef5d"

/* harmony default export */ const Score = (Scorevue_type_script_lang_js);
;


runtime_auto_import_default()(Scorevue_type_script_lang_js, 'components', {QIcon: QIcon/* default */.Z,QBtn: QBtn/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=716.8cba18b9.js.map