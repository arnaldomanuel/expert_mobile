"use strict";
(self["webpackChunkexpert"] = self["webpackChunkexpert"] || []).push([[26],{

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

/***/ 2026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Index.vue?vue&type=template&id=4c2d6155

const _hoisted_1 = {
  key: 0,
  class: ""
};
const _hoisted_2 = {
  class: "text-h6"
};

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Continuar");

const _hoisted_4 = {
  class: "q-mt-md"
};
const _hoisted_5 = {
  class: "q-mt-md text-center"
};
const _hoisted_6 = {
  class: "q-mt-md text-center"
};
const _hoisted_7 = {
  class: "q-mt-md text-center"
};
const _hoisted_8 = {
  class: "q-mt-md text-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card-section");

  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-card");

  const _component_q_carousel_slide = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-carousel-slide");

  const _component_q_carousel = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-carousel");

  const _component_all_courses_component = (0,runtime_core_esm_bundler/* resolveComponent */.up)("all-courses-component");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, null, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [$data.lastViewedCourse.id != 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card, {
      class: "my-card"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_2, (0,shared_esm_bundler/* toDisplayString */.zw)($data.lastViewedCourse.name), 1), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          flat: "",
          rounded: ""
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", {
            onClick: _cache[1] || (_cache[1] = $event => _ctx.$router.push('/curso/' + $data.lastViewedCourse.id)),
            class: "q-mt-sm text-secondary text-subtitle2"
          }, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            name: "fiber_manual_record"
          }), _hoisted_3])]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    })])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel, {
      modelValue: $data.slide,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.slide = $event),
      "transition-prev": "scale",
      "transition-next": "scale",
      swipeable: "",
      animated: "",
      "control-color": "white",
      navigation: "",
      padding: "",
      infinite: "",
      autoplay: true,
      arrows: "",
      height: "300px",
      class: "bg-secondary text-white shadow-1 rounded-borders"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "style",
        class: "column no-wrap flex-center"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          name: "style",
          size: "56px"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_5, (0,shared_esm_bundler/* toDisplayString */.zw)($data.lorem), 1)]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "tv",
        class: "column no-wrap flex-center"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          name: "live_tv",
          size: "56px"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_6, (0,shared_esm_bundler/* toDisplayString */.zw)($data.lorem), 1)]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "layers",
        class: "column no-wrap flex-center"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          name: "layers",
          size: "56px"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_7, (0,shared_esm_bundler/* toDisplayString */.zw)($data.lorem), 1)]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
        name: "map",
        class: "column no-wrap flex-center"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
          name: "terrain",
          size: "56px"
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_8, (0,shared_esm_bundler/* toDisplayString */.zw)($data.lorem), 1)]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_all_courses_component)]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=template&id=4c2d6155

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/AllCoursesComponent.vue?vue&type=template&id=7ab25dbd&scoped=true


const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-7ab25dbd");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-7ab25dbd");

const AllCoursesComponentvue_type_template_id_7ab25dbd_scoped_true_hoisted_1 = {
  class: " q-mt-md  q-mb-md text-h6"
};
const AllCoursesComponentvue_type_template_id_7ab25dbd_scoped_true_hoisted_2 = {
  class: "row"
};

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const AllCoursesComponentvue_type_template_id_7ab25dbd_scoped_true_render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_course_component = (0,runtime_core_esm_bundler/* resolveComponent */.up)("course-component");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", AllCoursesComponentvue_type_template_id_7ab25dbd_scoped_true_hoisted_1, "Cursos (" + (0,shared_esm_bundler/* toDisplayString */.zw)($data.courses.length) + ")", 1), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", AllCoursesComponentvue_type_template_id_7ab25dbd_scoped_true_hoisted_2, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.courses, course => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_course_component, {
      key: course.id,
      course: course
    }, null, 8, ["course"]);
  }), 128))])], 64);
});
;// CONCATENATED MODULE: ./src/components/AllCoursesComponent.vue?vue&type=template&id=7ab25dbd&scoped=true

// EXTERNAL MODULE: ./src/components/CourseComponent.vue + 4 modules
var CourseComponent = __webpack_require__(2416);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/AllCoursesComponent.vue?vue&type=script&lang=js

/* harmony default export */ const AllCoursesComponentvue_type_script_lang_js = ({
  name: "AllCoursesComponent",
  components: {
    CourseComponent: CourseComponent/* default */.Z
  },

  data() {
    return {
      courses: []
    };
  },

  methods: {
    getCourses() {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');
      this.$axios.get("/api/courses/").then(data => {
        this.courses = data.data.courses;
      });
    }

  },

  mounted() {
    this.getCourses();
  }

});
;// CONCATENATED MODULE: ./src/components/AllCoursesComponent.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/AllCoursesComponent.vue



AllCoursesComponentvue_type_script_lang_js.render = AllCoursesComponentvue_type_template_id_7ab25dbd_scoped_true_render
AllCoursesComponentvue_type_script_lang_js.__scopeId = "data-v-7ab25dbd"

/* harmony default export */ const AllCoursesComponent = (AllCoursesComponentvue_type_script_lang_js);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Index.vue?vue&type=script&lang=js

/* harmony default export */ const Indexvue_type_script_lang_js = ({
  components: {
    AllCoursesComponent: AllCoursesComponent
  },

  data() {
    return {
      slide: "tv",
      lastViewedCourse: {
        id: 0,
        name: ''
      },
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    };
  },

  methods: {
    goToCourse() {
      this.$router.push("/curso/2");
    }

  },

  mounted() {
    console.log('live', this.$settings);
    this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');
    this.$axios.get('/api/last-viewed-course').then(data => {
      if (data.data.lastViewedCourse != null || data.data.lastViewedCourse != undefined) this.lastViewedCourse = data.data.lastViewedCourse;
      console.log(this.lastViewedCourse);
    });
  }

});
;// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(5589);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__(8240);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarousel.js + 2 modules
var QCarousel = __webpack_require__(7565);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarouselSlide.js
var QCarouselSlide = __webpack_require__(4593);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Index.vue



Indexvue_type_script_lang_js.render = render

/* harmony default export */ const Index = (Indexvue_type_script_lang_js);
;







runtime_auto_import_default()(Indexvue_type_script_lang_js, 'components', {QPage: QPage/* default */.Z,QCard: QCard/* default */.Z,QCardSection: QCardSection/* default */.Z,QBtn: QBtn/* default */.Z,QIcon: QIcon/* default */.Z,QCarousel: QCarousel/* default */.Z,QCarouselSlide: QCarouselSlide/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=26.31862a7c.js.map