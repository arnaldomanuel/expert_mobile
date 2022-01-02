"use strict";
(self["webpackChunkexpert"] = self["webpackChunkexpert"] || []).push([[554],{

/***/ 546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Error)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/Services/Error.vue?vue&type=template&id=098c3a32

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div");
}
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__(4434);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/Services/Error.vue?vue&type=script&lang=js
;
let notify = null;
let process = null;
/* harmony default export */ const Errorvue_type_script_lang_js = ({
  openNotify(message, timeout = 0) {
    notify = Notify/* default.create */.Z.create({
      type: 'negative',
      message: message,
      timeout: timeout
    });
  },

  openPrrocessing(timeout = 0) {
    process = Notify/* default.create */.Z.create({
      spinner: true,
      message: 'Por favor aguarde',
      timeout: timeout
    });
  },

  closeNotify() {
    notify();
  },

  closeprocessing() {
    process();
  }

});
;// CONCATENATED MODULE: ./src/Services/Error.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/Services/Error.vue



Errorvue_type_script_lang_js.render = render

/* harmony default export */ const Error = (Errorvue_type_script_lang_js);

/***/ }),

/***/ 554:
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
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/courses/Show.vue?vue&type=template&id=225cd43d&scoped=true


const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-225cd43d");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-225cd43d");

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
  class: "text-overline q-pt-md text-capitalize q-ma-sm"
}, "CURSO", -1);

const _hoisted_6 = {
  class: "text-h5 q-ma-sm  q-pb-md"
};
const _hoisted_7 = {
  class: "col-12 q-pb-md"
};
const _hoisted_8 = {
  class: "col-12"
};

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-img");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_tab = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tab");

  const _component_q_tabs = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tabs");

  const _component_info_course_tab = (0,runtime_core_esm_bundler/* resolveComponent */.up)("info-course-tab");

  const _component_q_tab_panel = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tab-panel");

  const _component_author_course_tab = (0,runtime_core_esm_bundler/* resolveComponent */.up)("author-course-tab");

  const _component_objective_course_tab = (0,runtime_core_esm_bundler/* resolveComponent */.up)("objective-course-tab");

  const _component_q_tab_panels = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tab-panels");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_img, {
    src: $options.getCourseThumbnailPath,
    ratio: 16 / 9
  }, {
    default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)($data.course.name), 1)]),
    _: 1
  }, 8, ["src"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_4, [_hoisted_5, (0,runtime_core_esm_bundler/* createVNode */.Wm)("h1", _hoisted_6, (0,shared_esm_bundler/* toDisplayString */.zw)($data.course.name), 1)]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_7, [$data.showAccessButton ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_btn, {
    key: 0,
    label: $data.accessCourse,
    onClick: _cache[1] || (_cache[1] = $event => $options.goToPaymentPage()),
    class: "bg-secondary text-white q-mr-md",
    "icon-right": "lock"
  }, null, 8, ["label"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
    label: "Ver mais",
    onClick: _cache[2] || (_cache[2] = $event => $options.seeDetails()),
    class: "bg-white text-primary",
    dense: ""
  })]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_8, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tabs, {
    modelValue: $data.tab,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.tab = $event),
    class: "text-secondary  shadow-2"
  }, {
    default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab, {
      name: "info",
      icon: "info",
      label: "Info"
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab, {
      name: "author",
      icon: "person",
      label: "Autor"
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab, {
      name: "objectives",
      icon: "star",
      label: "Objectivos"
    })]),
    _: 1
  }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab_panels, {
    modelValue: $data.tab,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $data.tab = $event),
    animated: ""
  }, {
    default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab_panel, {
      class: "q-pa-none",
      name: "info"
    }, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_info_course_tab, {
        course: $data.course
      }, null, 8, ["course"])]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab_panel, {
      class: "q-pa-none",
      name: "author"
    }, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_author_course_tab, {
        course: $data.course
      }, null, 8, ["course"])]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab_panel, {
      class: "q-pa-none",
      name: "objectives"
    }, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_objective_course_tab, {
        objectives: $data.objectives,
        course: $data.course
      }, null, 8, ["objectives", "course"])]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"])])]);
});
;// CONCATENATED MODULE: ./src/pages/courses/Show.vue?vue&type=template&id=225cd43d&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(246);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/courses/InfoCourseTab.vue?vue&type=template&id=1393fc21&scoped=true



const InfoCourseTabvue_type_template_id_1393fc21_scoped_true_withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-1393fc21");

const InfoCourseTabvue_type_template_id_1393fc21_scoped_true_render = /*#__PURE__*/InfoCourseTabvue_type_template_id_1393fc21_scoped_true_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", {
    innerHTML: $props.course.description,
    class: "q-mt-md"
  }, null, 8, ["innerHTML"]);
});
;// CONCATENATED MODULE: ./src/pages/courses/InfoCourseTab.vue?vue&type=template&id=1393fc21&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/courses/InfoCourseTab.vue?vue&type=script&lang=js
/* harmony default export */ const InfoCourseTabvue_type_script_lang_js = ({
  name: "InfoCoureTab",
  props: ["course"]
});
;// CONCATENATED MODULE: ./src/pages/courses/InfoCourseTab.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/pages/courses/InfoCourseTab.vue



InfoCourseTabvue_type_script_lang_js.render = InfoCourseTabvue_type_template_id_1393fc21_scoped_true_render
InfoCourseTabvue_type_script_lang_js.__scopeId = "data-v-1393fc21"

/* harmony default export */ const InfoCourseTab = (InfoCourseTabvue_type_script_lang_js);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/courses/AuthorCourseTab.vue?vue&type=template&id=3cc8d810&scoped=true


const AuthorCourseTabvue_type_template_id_3cc8d810_scoped_true_withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-3cc8d810");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-3cc8d810");

const AuthorCourseTabvue_type_template_id_3cc8d810_scoped_true_hoisted_1 = {
  class: "q-mt-md"
};
const AuthorCourseTabvue_type_template_id_3cc8d810_scoped_true_hoisted_2 = {
  class: "text-h6"
};

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const AuthorCourseTabvue_type_template_id_3cc8d810_scoped_true_render = /*#__PURE__*/AuthorCourseTabvue_type_template_id_3cc8d810_scoped_true_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", AuthorCourseTabvue_type_template_id_3cc8d810_scoped_true_hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", AuthorCourseTabvue_type_template_id_3cc8d810_scoped_true_hoisted_2, (0,shared_esm_bundler/* toDisplayString */.zw)($props.course.user.name), 1), (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" " + (0,shared_esm_bundler/* toDisplayString */.zw)($props.course.user.biography), 1)]);
});
;// CONCATENATED MODULE: ./src/pages/courses/AuthorCourseTab.vue?vue&type=template&id=3cc8d810&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/courses/AuthorCourseTab.vue?vue&type=script&lang=js
/* harmony default export */ const AuthorCourseTabvue_type_script_lang_js = ({
  name: "AuthorCourseTab",
  props: ["course"]
});
;// CONCATENATED MODULE: ./src/pages/courses/AuthorCourseTab.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/pages/courses/AuthorCourseTab.vue



AuthorCourseTabvue_type_script_lang_js.render = AuthorCourseTabvue_type_template_id_3cc8d810_scoped_true_render
AuthorCourseTabvue_type_script_lang_js.__scopeId = "data-v-3cc8d810"

/* harmony default export */ const AuthorCourseTab = (AuthorCourseTabvue_type_script_lang_js);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/courses/ObjectiveCourseTab.vue?vue&type=template&id=34558426&scoped=true



const ObjectiveCourseTabvue_type_template_id_34558426_scoped_true_withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-34558426");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-34558426");

const ObjectiveCourseTabvue_type_template_id_34558426_scoped_true_hoisted_1 = {
  class: "q-mt-md"
};
const ObjectiveCourseTabvue_type_template_id_34558426_scoped_true_hoisted_2 = {
  key: 0,
  class: "text-center tex-h5 text-weight-bold"
};

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const ObjectiveCourseTabvue_type_template_id_34558426_scoped_true_render = /*#__PURE__*/ObjectiveCourseTabvue_type_template_id_34558426_scoped_true_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _directive_ripple = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("ripple");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", ObjectiveCourseTabvue_type_template_id_34558426_scoped_true_hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, {
    bordered: ""
  }, {
    default: ObjectiveCourseTabvue_type_template_id_34558426_scoped_true_withId(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($props.objectives, objecive => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, {
        key: objecive.id
      }, [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, {
        clickable: ""
      }, {
        default: ObjectiveCourseTabvue_type_template_id_34558426_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
          default: ObjectiveCourseTabvue_type_template_id_34558426_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(objecive.description), 1)]),
          _: 2
        }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
          avatar: ""
        }, {
          default: ObjectiveCourseTabvue_type_template_id_34558426_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            color: "primary",
            name: "done"
          })]),
          _: 1
        })]),
        _: 2
      }, 1536), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator)], 64);
    }), 128))]),
    _: 1
  }), $props.objectives.length <= 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", ObjectiveCourseTabvue_type_template_id_34558426_scoped_true_hoisted_2, "0 objectivos")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]);
});
;// CONCATENATED MODULE: ./src/pages/courses/ObjectiveCourseTab.vue?vue&type=template&id=34558426&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/courses/ObjectiveCourseTab.vue?vue&type=script&lang=js
/* harmony default export */ const ObjectiveCourseTabvue_type_script_lang_js = ({
  name: "ObjectiveCourseTab",
  props: ["course", "objectives"]
});
;// CONCATENATED MODULE: ./src/pages/courses/ObjectiveCourseTab.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(7011);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(3414);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(2035);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(5869);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__(6489);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/courses/ObjectiveCourseTab.vue



ObjectiveCourseTabvue_type_script_lang_js.render = ObjectiveCourseTabvue_type_template_id_34558426_scoped_true_render
ObjectiveCourseTabvue_type_script_lang_js.__scopeId = "data-v-34558426"

/* harmony default export */ const ObjectiveCourseTab = (ObjectiveCourseTabvue_type_script_lang_js);
;





runtime_auto_import_default()(ObjectiveCourseTabvue_type_script_lang_js, 'components', {QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QIcon: QIcon/* default */.Z,QSeparator: QSeparator/* default */.Z});runtime_auto_import_default()(ObjectiveCourseTabvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});

// EXTERNAL MODULE: ./src/Services/Error.vue + 3 modules
var Error = __webpack_require__(546);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/courses/Show.vue?vue&type=script&lang=js




/* harmony default export */ const Showvue_type_script_lang_js = ({
  name: "Show",
  components: {
    InfoCourseTab: InfoCourseTab,
    AuthorCourseTab: AuthorCourseTab,
    ObjectiveCourseTab: ObjectiveCourseTab
  },

  data() {
    return {
      tab: 'info',
      course: {
        name: ''
      },
      objectives: [],
      accessCourse: '',
      blockPaymentPage: false,
      showAccessButton: true
    };
  },

  methods: {
    seeDetails() {
      console.log('id', this.$route.params.id);
      this.$router.push('/curso/detalhes/' + this.$route.params.id);
    },

    goToPaymentPage() {
      if (!this.blockPaymentPage) this.$router.push('/pagar/curso/' + this.$route.params.id);else Error/* default.openNotify */.Z.openNotify('Aguarde enquanto a sua requisição é processada', 5000);
    }

  },
  computed: {
    getCourseThumbnailPath() {
      return this.$settings.API_URL + this.course.thumbnail;
    }

  },

  mounted() {
    this.$axios.get('/api/course/' + this.$route.params.id).then(data => {
      this.course = data.data.course;
      this.objectives = data.data.objectives;
      let courseGrant = data.data.courseGrant;
      let courseGrantStatus = data.data.courseGrantStatus;

      if (courseGrant == null || courseGrant == undefined) {
        this.accessCourse = 'Requisitar acesso';
      } else if (courseGrant.authorize == courseGrantStatus.REPROVED) {
        this.accessCourse = 'Requisitar acesso';
      } else if (courseGrant.authorize == courseGrantStatus.UNPROCESSED) {
        this.blockPaymentPage = true;
        this.accessCourse = 'Requisição feita';
      } else if (courseGrant.authorize == courseGrantStatus.APPROVED) {
        this.accessCourse = 'Requisição feita';
        this.showAccessButton = false;
      }

      console.log(data);
    });
    console.log('id', this.$route.params.id);
  }

});
;// CONCATENATED MODULE: ./src/pages/courses/Show.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js
var QImg = __webpack_require__(4152);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__(8240);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js
var QTabs = __webpack_require__(7547);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTab.js + 1 modules
var QTab = __webpack_require__(3269);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanels.js
var QTabPanels = __webpack_require__(5906);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanel.js
var QTabPanel = __webpack_require__(6602);
;// CONCATENATED MODULE: ./src/pages/courses/Show.vue



Showvue_type_script_lang_js.render = render
Showvue_type_script_lang_js.__scopeId = "data-v-225cd43d"

/* harmony default export */ const Show = (Showvue_type_script_lang_js);
;






runtime_auto_import_default()(Showvue_type_script_lang_js, 'components', {QImg: QImg/* default */.Z,QBtn: QBtn/* default */.Z,QTabs: QTabs/* default */.Z,QTab: QTab/* default */.Z,QTabPanels: QTabPanels/* default */.Z,QTabPanel: QTabPanel/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=554.b367d75a.js.map