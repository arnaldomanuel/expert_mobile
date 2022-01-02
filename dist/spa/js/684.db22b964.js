"use strict";
(self["webpackChunkexpert"] = self["webpackChunkexpert"] || []).push([[684],{

/***/ 2416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CourseComponent)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/CourseComponent.vue?vue&type=template&id=65956011&scoped=true


const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-65956011");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-65956011");

const _hoisted_1 = {
  class: "col-12 q-mb-md"
};
const _hoisted_2 = {
  class: "text-h6"
};
const _hoisted_3 = {
  class: "text-h6"
};
const _hoisted_4 = {
  class: "text-subtitle2"
};

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
    onClick: _cache[1] || (_cache[1] = $event => $options.goToCourse()),
    clickable: "",
    class: "cursor-pointer my-card"
  }, {
    default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("img", {
      src: $options.getCourseThumbnailPath
    }, null, 8, ["src"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_2, (0,shared_esm_bundler/* toDisplayString */.zw)($props.course.name), 1), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)($options.getCourseThumbnailPath), 1), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_4, (0,shared_esm_bundler/* toDisplayString */.zw)($props.course.user.name), 1)]),
      _: 1
    })]),
    _: 1
  })]);
});
;// CONCATENATED MODULE: ./src/components/CourseComponent.vue?vue&type=template&id=65956011&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/CourseComponent.vue?vue&type=script&lang=js
/* harmony default export */ const CourseComponentvue_type_script_lang_js = ({
  name: "CourseComponent",
  props: ["course"],
  methods: {
    goToCourse() {
      this.$router.push("/curso/" + this.course.id);
    }

  },
  computed: {
    getCourseThumbnailPath() {
      return this.$settings.API_URL + this.course.thumbnail;
    }

  }
});
;// CONCATENATED MODULE: ./src/components/CourseComponent.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/CourseComponent.vue



CourseComponentvue_type_script_lang_js.render = render
CourseComponentvue_type_script_lang_js.__scopeId = "data-v-65956011"

/* harmony default export */ const CourseComponent = (CourseComponentvue_type_script_lang_js);
;


runtime_auto_import_default()(CourseComponentvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z});


/***/ }),

/***/ 3684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyCourses)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Profile/MyCourses.vue?vue&type=template&id=5d1f8940&scoped=true


const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-5d1f8940");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-5d1f8940");

const _hoisted_1 = {
  class: "col-12"
};

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_tab = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tab");

  const _component_q_tabs = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tabs");

  const _component_courses_approved = (0,runtime_core_esm_bundler/* resolveComponent */.up)("courses-approved");

  const _component_q_tab_panel = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tab-panel");

  const _component_courses_to_be_approved = (0,runtime_core_esm_bundler/* resolveComponent */.up)("courses-to-be-approved");

  const _component_q_tab_panels = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tab-panels");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tabs, {
    modelValue: $data.tab,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.tab = $event),
    class: "text-secondary  shadow-2"
  }, {
    default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab, {
      label: "Cursos Aprovados",
      name: "approved"
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab, {
      label: "Cursos requisitados",
      name: "toBeApproved"
    })]),
    _: 1
  }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab_panels, {
    modelValue: $data.tab,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.tab = $event),
    animated: ""
  }, {
    default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab_panel, {
      class: "q-pa-none",
      name: "approved"
    }, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_courses_approved)]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tab_panel, {
      class: "q-pa-none",
      name: "toBeApproved"
    }, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_courses_to_be_approved)]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"])])]);
});
;// CONCATENATED MODULE: ./src/pages/Profile/MyCourses.vue?vue&type=template&id=5d1f8940&scoped=true

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Profile/CoursesApproved.vue?vue&type=template&id=3b4885e7&scoped=true


const CoursesApprovedvue_type_template_id_3b4885e7_scoped_true_withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-3b4885e7");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-3b4885e7");

const CoursesApprovedvue_type_template_id_3b4885e7_scoped_true_hoisted_1 = {
  class: "row"
};
const _hoisted_2 = {
  key: 0,
  class: "col-12 q-mb-md"
};
const _hoisted_3 = {
  class: "text-h6"
};

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const CoursesApprovedvue_type_template_id_3b4885e7_scoped_true_render = /*#__PURE__*/CoursesApprovedvue_type_template_id_3b4885e7_scoped_true_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", CoursesApprovedvue_type_template_id_3b4885e7_scoped_true_hoisted_1, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.courses, course => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", {
      key: course.id
    }, [course.authorize == 1 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      onClick: $event => _ctx.$router.push('/curso/' + course.id),
      clickable: "",
      class: "cursor-pointer my-card"
    }, {
      default: CoursesApprovedvue_type_template_id_3b4885e7_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("img", {
        src: _ctx.$settings.API_URL + course.thumbnail
      }, null, 8, ["src"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: CoursesApprovedvue_type_template_id_3b4885e7_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)(course.name), 1)]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1032, ["onClick"])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]);
  }), 128))]);
});
;// CONCATENATED MODULE: ./src/pages/Profile/CoursesApproved.vue?vue&type=template&id=3b4885e7&scoped=true

// EXTERNAL MODULE: ./src/components/CourseComponent.vue + 4 modules
var CourseComponent = __webpack_require__(2416);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Profile/CoursesApproved.vue?vue&type=script&lang=js

/* harmony default export */ const CoursesApprovedvue_type_script_lang_js = ({
  name: "CoursesApproved",

  //props:["courses1"],
  // components:{CourseComponent},
  data() {
    return {
      courses: []
    };
  },

  mounted() {
    this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');
    this.$axios.get('/api/my-courses').then(data => {
      this.courses = data.data.courses;
      console.log(this.coursesStudent);
    }).catch(error => {});
  }

});
;// CONCATENATED MODULE: ./src/pages/Profile/CoursesApproved.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Profile/CoursesApproved.vue



CoursesApprovedvue_type_script_lang_js.render = CoursesApprovedvue_type_template_id_3b4885e7_scoped_true_render
CoursesApprovedvue_type_script_lang_js.__scopeId = "data-v-3b4885e7"

/* harmony default export */ const CoursesApproved = (CoursesApprovedvue_type_script_lang_js);
;


runtime_auto_import_default()(CoursesApprovedvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Profile/CoursesToBeApproved.vue?vue&type=template&id=1bf86871&scoped=true


const CoursesToBeApprovedvue_type_template_id_1bf86871_scoped_true_withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-1bf86871");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-1bf86871");

const CoursesToBeApprovedvue_type_template_id_1bf86871_scoped_true_hoisted_1 = {
  class: "row"
};
const CoursesToBeApprovedvue_type_template_id_1bf86871_scoped_true_hoisted_2 = {
  key: 0,
  class: "col-12 q-mb-md"
};
const CoursesToBeApprovedvue_type_template_id_1bf86871_scoped_true_hoisted_3 = {
  class: "text-h6"
};

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const CoursesToBeApprovedvue_type_template_id_1bf86871_scoped_true_render = /*#__PURE__*/CoursesToBeApprovedvue_type_template_id_1bf86871_scoped_true_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", CoursesToBeApprovedvue_type_template_id_1bf86871_scoped_true_hoisted_1, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.courses, course => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", {
      key: course.id
    }, [course.authorize == 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", CoursesToBeApprovedvue_type_template_id_1bf86871_scoped_true_hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      onClick: $event => _ctx.$router.push('/curso/' + course.id),
      clickable: "",
      class: "cursor-pointer my-card"
    }, {
      default: CoursesToBeApprovedvue_type_template_id_1bf86871_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("img", {
        src: _ctx.$settings.API_URL + course.thumbnail
      }, null, 8, ["src"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: CoursesToBeApprovedvue_type_template_id_1bf86871_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", CoursesToBeApprovedvue_type_template_id_1bf86871_scoped_true_hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)(course.name), 1)]),
        _: 2
      }, 1024)]),
      _: 2
    }, 1032, ["onClick"])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]);
  }), 128))]);
});
;// CONCATENATED MODULE: ./src/pages/Profile/CoursesToBeApproved.vue?vue&type=template&id=1bf86871&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Profile/CoursesToBeApproved.vue?vue&type=script&lang=js

/* harmony default export */ const CoursesToBeApprovedvue_type_script_lang_js = ({
  name: "CoursesToBeApproved",

  //props:["courses"],
  //components:{CourseComponent},
  data() {
    return {
      courses: []
    };
  },

  mounted() {
    this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');
    this.$axios.get('/api/my-courses').then(data => {
      this.courses = data.data.courses;
      console.log(this.coursesStudent);
    }).catch(error => {});
  }

});
;// CONCATENATED MODULE: ./src/pages/Profile/CoursesToBeApproved.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/pages/Profile/CoursesToBeApproved.vue



CoursesToBeApprovedvue_type_script_lang_js.render = CoursesToBeApprovedvue_type_template_id_1bf86871_scoped_true_render
CoursesToBeApprovedvue_type_script_lang_js.__scopeId = "data-v-1bf86871"

/* harmony default export */ const CoursesToBeApproved = (CoursesToBeApprovedvue_type_script_lang_js);
;


runtime_auto_import_default()(CoursesToBeApprovedvue_type_script_lang_js, 'components', {QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Profile/MyCourses.vue?vue&type=script&lang=js


/* harmony default export */ const MyCoursesvue_type_script_lang_js = ({
  name: "MyCourses",
  components: {
    CoursesToBeApproved: CoursesToBeApproved,
    CoursesApproved: CoursesApproved
  },

  data() {
    return {
      tab: "approved",
      coursesStudent: []
    };
  },

  mounted() {
    this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');
    this.$axios.get("/api/courses/").then(data => {
      this.coursesStudent = data.data.courses;
    });
    /* this.$axios.get('/api/my-courses').then(data=>{
        this.coursesStudent=data.data.courses
       console.log(  this.coursesStudent)
     }).catch(error=>{
      })*/
  }

});
;// CONCATENATED MODULE: ./src/pages/Profile/MyCourses.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js
var QTabs = __webpack_require__(7547);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTab.js + 1 modules
var QTab = __webpack_require__(3269);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanels.js
var QTabPanels = __webpack_require__(5906);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanel.js
var QTabPanel = __webpack_require__(6602);
;// CONCATENATED MODULE: ./src/pages/Profile/MyCourses.vue



MyCoursesvue_type_script_lang_js.render = render
MyCoursesvue_type_script_lang_js.__scopeId = "data-v-5d1f8940"

/* harmony default export */ const MyCourses = (MyCoursesvue_type_script_lang_js);
;




runtime_auto_import_default()(MyCoursesvue_type_script_lang_js, 'components', {QTabs: QTabs/* default */.Z,QTab: QTab/* default */.Z,QTabPanels: QTabPanels/* default */.Z,QTabPanel: QTabPanel/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=684.db22b964.js.map