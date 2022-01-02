"use strict";
(self["webpackChunkexpert"] = self["webpackChunkexpert"] || []).push([[892],{

/***/ 357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LessonsModule)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(246);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/modules/LessonsModule.vue?vue&type=template&id=ae89a75a&scoped=true



const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-ae89a75a");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-label");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_badge = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-badge");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_list, {
    class: "q-mt-md"
  }, {
    default: _withId(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($props.lessons, lesson => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, {
        key: lesson.id
      }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, {
        onClick: $event => _ctx.$router.push('/aula/' + lesson.id),
        clickable: ""
      }, {
        default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
          clickable: ""
        }, {
          default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
            default: _withId(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(lesson.name), 1)]),
            _: 2
          }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
            innerHTML: lesson.description,
            caption: ""
          }, null, 8, ["innerHTML"])]),
          _: 2
        }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
          clickable: "",
          side: "",
          top: ""
        }, {
          default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_badge, {
            color: "teal",
            label: "1"
          })]),
          _: 1
        })]),
        _: 2
      }, 1032, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator)], 64);
    }), 128))]),
    _: 1
  });
});
;// CONCATENATED MODULE: ./src/pages/modules/LessonsModule.vue?vue&type=template&id=ae89a75a&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/modules/LessonsModule.vue?vue&type=script&lang=js
/* harmony default export */ const LessonsModulevue_type_script_lang_js = ({
  name: "LessonsModule",
  props: ["lessons"]
});
;// CONCATENATED MODULE: ./src/pages/modules/LessonsModule.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(7011);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(3414);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(2035);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(2350);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(9721);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(5869);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/modules/LessonsModule.vue



LessonsModulevue_type_script_lang_js.render = render
LessonsModulevue_type_script_lang_js.__scopeId = "data-v-ae89a75a"

/* harmony default export */ const LessonsModule = (LessonsModulevue_type_script_lang_js);
;






runtime_auto_import_default()(LessonsModulevue_type_script_lang_js, 'components', {QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QBadge: QBadge/* default */.Z,QSeparator: QSeparator/* default */.Z});


/***/ }),

/***/ 1892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Show)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/modules/Show.vue?vue&type=template&id=10b64e89&scoped=true


const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-10b64e89");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-10b64e89");

const _hoisted_1 = {
  class: "row"
};
const _hoisted_2 = {
  class: "col-12"
};
const _hoisted_3 = {
  class: "absolute-bottom text-subtitle1 text-center"
};
const _hoisted_4 = {
  class: "col-12"
};

const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("h4", {
  class: "text-overline q-pt-md text-uppercase q-ma-sm"
}, "Módulo", -1);

const _hoisted_6 = {
  class: "text-h5 q-ma-sm  q-pb-md"
};
const _hoisted_7 = {
  class: "col-12"
};

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_q_tab = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tab");

  const _component_q_tabs = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tabs");

  const _component_lessons_module = (0,runtime_core_esm_bundler/* resolveComponent */.up)("lessons-module");

  const _component_q_tab_panel = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tab-panel");

  const _component_info_module = (0,runtime_core_esm_bundler/* resolveComponent */.up)("info-module");

  const _component_quiz_modules = (0,runtime_core_esm_bundler/* resolveComponent */.up)("quiz-modules");

  const _component_q_tab_panels = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tab-panels");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
    src: $options.getModuleThumbnailPath,
    ratio: 16 / 9
  }, {
    default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)($data.course.name), 1)]),
    _: 1
  }, 8, ["src"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_4, [_hoisted_5, (0,runtime_core_esm_bundler/* createVNode */.Wm)("h1", _hoisted_6, (0,shared_esm_bundler/* toDisplayString */.zw)($data.module.name), 1)]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_7, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tabs, {
    modelValue: $data.tab,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.tab = $event),
    class: "text-secondary  shadow-2"
  }, {
    default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab, {
      name: "lessons",
      icon: "play_lessons",
      label: "Aulas"
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab, {
      name: "info",
      icon: "info",
      label: "Info"
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab, {
      name: "objectives",
      icon: "quiz",
      label: "Quiz"
    })]),
    _: 1
  }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab_panels, {
    modelValue: $data.tab,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.tab = $event),
    animated: ""
  }, {
    default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab_panel, {
      class: "q-pa-none",
      name: "lessons"
    }, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_lessons_module, {
        lessons: $data.lessons
      }, null, 8, ["lessons"])]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab_panel, {
      class: "q-pa-none",
      name: "info"
    }, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_info_module, {
        module: $data.module
      }, null, 8, ["module"])]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab_panel, {
      class: "q-pa-none",
      name: "objectives"
    }, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_quiz_modules, {
        module: $data.module
      }, null, 8, ["module"])]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"])])]);
});
;// CONCATENATED MODULE: ./src/pages/modules/Show.vue?vue&type=template&id=10b64e89&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(246);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/modules/InfoModule.vue?vue&type=template&id=0a61e845&scoped=true



const InfoModulevue_type_template_id_0a61e845_scoped_true_withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-0a61e845");

const InfoModulevue_type_template_id_0a61e845_scoped_true_render = /*#__PURE__*/InfoModulevue_type_template_id_0a61e845_scoped_true_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", {
    class: "q-mt-md",
    innerHTML: $props.module.description
  }, null, 8, ["innerHTML"]);
});
;// CONCATENATED MODULE: ./src/pages/modules/InfoModule.vue?vue&type=template&id=0a61e845&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/modules/InfoModule.vue?vue&type=script&lang=js
/* harmony default export */ const InfoModulevue_type_script_lang_js = ({
  name: "InfoModule",
  props: ["module"]
});
;// CONCATENATED MODULE: ./src/pages/modules/InfoModule.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/pages/modules/InfoModule.vue



InfoModulevue_type_script_lang_js.render = InfoModulevue_type_template_id_0a61e845_scoped_true_render
InfoModulevue_type_script_lang_js.__scopeId = "data-v-0a61e845"

/* harmony default export */ const InfoModule = (InfoModulevue_type_script_lang_js);
// EXTERNAL MODULE: ./src/pages/modules/LessonsModule.vue + 4 modules
var LessonsModule = __webpack_require__(357);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/modules/QuizModules.vue?vue&type=template&id=4b07b4eb&scoped=true


const QuizModulesvue_type_template_id_4b07b4eb_scoped_true_withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-4b07b4eb");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-4b07b4eb");

const QuizModulesvue_type_template_id_4b07b4eb_scoped_true_hoisted_1 = {
  class: "q-mt-md"
};

const QuizModulesvue_type_template_id_4b07b4eb_scoped_true_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("img", {
  src: "https://cdn.quasar.dev/img/boy-avatar.png"
}, null, -1);

const QuizModulesvue_type_template_id_4b07b4eb_scoped_true_hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Ir para o teste");

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const QuizModulesvue_type_template_id_4b07b4eb_scoped_true_render = /*#__PURE__*/QuizModulesvue_type_template_id_4b07b4eb_scoped_true_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_avatar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-avatar");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _directive_ripple = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("ripple");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", QuizModulesvue_type_template_id_4b07b4eb_scoped_true_hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, null, {
    default: QuizModulesvue_type_template_id_4b07b4eb_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, {
      onClick: _cache[1] || (_cache[1] = $event => $options.goTo()),
      clickable: ""
    }, {
      default: QuizModulesvue_type_template_id_4b07b4eb_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
        thumbnail: ""
      }, {
        default: QuizModulesvue_type_template_id_4b07b4eb_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
          rounded: ""
        }, {
          default: QuizModulesvue_type_template_id_4b07b4eb_scoped_true_withId(() => [QuizModulesvue_type_template_id_4b07b4eb_scoped_true_hoisted_2]),
          _: 1
        })]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
        default: QuizModulesvue_type_template_id_4b07b4eb_scoped_true_withId(() => [QuizModulesvue_type_template_id_4b07b4eb_scoped_true_hoisted_3]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
        thumbnail: "",
        class: "q-mr-md"
      }, {
        default: QuizModulesvue_type_template_id_4b07b4eb_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          class: "q-mr-md",
          name: "done"
        })]),
        _: 1
      })]),
      _: 1
    }, 512), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator)]),
    _: 1
  })]);
});
;// CONCATENATED MODULE: ./src/pages/modules/QuizModules.vue?vue&type=template&id=4b07b4eb&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/modules/QuizModules.vue?vue&type=script&lang=js
/* harmony default export */ const QuizModulesvue_type_script_lang_js = ({
  name: "QuizModules",
  props: ["module"],
  methods: {
    goTo() {
      this.$router.push('/Quiz/' + this.module.id);
    }

  }
});
;// CONCATENATED MODULE: ./src/pages/modules/QuizModules.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(7011);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(3414);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(2035);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(5096);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(5869);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__(6489);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/modules/QuizModules.vue



QuizModulesvue_type_script_lang_js.render = QuizModulesvue_type_template_id_4b07b4eb_scoped_true_render
QuizModulesvue_type_script_lang_js.__scopeId = "data-v-4b07b4eb"

/* harmony default export */ const QuizModules = (QuizModulesvue_type_script_lang_js);
;






runtime_auto_import_default()(QuizModulesvue_type_script_lang_js, 'components', {QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QAvatar: QAvatar/* default */.Z,QIcon: QIcon/* default */.Z,QSeparator: QSeparator/* default */.Z});runtime_auto_import_default()(QuizModulesvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/modules/Show.vue?vue&type=script&lang=js



/* harmony default export */ const Showvue_type_script_lang_js = ({
  name: "Show",
  components: {
    InfoModule: InfoModule,
    LessonsModule: LessonsModule/* default */.Z,
    QuizModules: QuizModules
  },

  data() {
    return {
      tab: "info",
      module: {
        name: "",
        id: ""
      },
      lessons: [],
      course: {
        name: "",
        id: ""
      }
    };
  },

  computed: {
    getModuleThumbnailPath() {
      return this.$settings.API_URL + this.module.photo_path;
    }

  },
  methods: {
    getModule() {
      this.$axios.get('/api/module/' + this.$route.params.id).then(data => {
        this.module = data.data.module;
        this.lessons = data.data.lessons;
        this.course = data.data.course;
      });
    }

  },

  mounted() {
    this.getModule();
  }

});
;// CONCATENATED MODULE: ./src/pages/modules/Show.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js
var QImg = __webpack_require__(4152);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js
var QTabs = __webpack_require__(7547);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTab.js + 1 modules
var QTab = __webpack_require__(3269);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanels.js
var QTabPanels = __webpack_require__(5906);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanel.js
var QTabPanel = __webpack_require__(6602);
;// CONCATENATED MODULE: ./src/pages/modules/Show.vue



Showvue_type_script_lang_js.render = render
Showvue_type_script_lang_js.__scopeId = "data-v-10b64e89"

/* harmony default export */ const Show = (Showvue_type_script_lang_js);
;





runtime_auto_import_default()(Showvue_type_script_lang_js, 'components', {QImg: QImg/* default */.Z,QTabs: QTabs/* default */.Z,QTab: QTab/* default */.Z,QTabPanels: QTabPanels/* default */.Z,QTabPanel: QTabPanel/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=892.b927a610.js.map