"use strict";
(self["webpackChunkexpert"] = self["webpackChunkexpert"] || []).push([[875],{

/***/ 9875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SearchLayout)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(7280);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/SearchLayout.vue?vue&type=template&id=c233235a&scoped=true



const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-c233235a");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");

  const _component_search_results = (0,runtime_core_esm_bundler/* resolveComponent */.up)("search-results");

  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_layout, {
    view: "lHh Lpr lff",
    style: {
      "height": "900px"
    },
    class: "shadow-2 rounded-borders"
  }, {
    default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_header, {
      class: "bg-white",
      reveal: "",
      elevated: ""
    }, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, {
        class: "q-pa-none"
      }, {
        default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
          style: {
            "width": "100%"
          },
          filled: "",
          class: "bg-white",
          modelValue: $data.search,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.search = $event),
          label: "Pesquisa"
        }, {
          prepend: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            onClick: _cache[1] || (_cache[1] = $event => $options.goBack()),
            class: "cursor",
            name: "arrow_back"
          })]),
          append: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            name: "close",
            onClick: _cache[2] || (_cache[2] = $event => $data.search = ''),
            class: "cursor-pointer"
          })]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_search_results, {
        searchString: $data.search
      }, null, 8, ["searchString"])]),
      _: 1
    })]),
    _: 1
  })]);
});
;// CONCATENATED MODULE: ./src/layouts/SearchLayout.vue?vue&type=template&id=c233235a&scoped=true

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/courses/SearchResults.vue?vue&type=template&id=7b8520f8&scoped=true


const SearchResultsvue_type_template_id_7b8520f8_scoped_true_withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-7b8520f8");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-7b8520f8");

const _hoisted_1 = {
  class: "q-pl-sm text-overline"
};
const _hoisted_2 = {
  key: 0,
  class: "text-center tex-h5 text-weight-bold"
};

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const SearchResultsvue_type_template_id_7b8520f8_scoped_true_render = /*#__PURE__*/SearchResultsvue_type_template_id_7b8520f8_scoped_true_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_course_search_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("course-search-item");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("h2", _hoisted_1, "Cursos (" + (0,shared_esm_bundler/* toDisplayString */.zw)($data.courses.length) + ")", 1)]), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_course_search_item, {
    courses: $data.courses
  }, null, 8, ["courses"])]), $data.courses.length <= 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_2, "Sem resultados para a pesquisa")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)])], 64);
});
;// CONCATENATED MODULE: ./src/pages/courses/SearchResults.vue?vue&type=template&id=7b8520f8&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(246);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/courses/CourseSearchItem.vue?vue&type=template&id=0327b828&scoped=true



const CourseSearchItemvue_type_template_id_0327b828_scoped_true_withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-0327b828");

const CourseSearchItemvue_type_template_id_0327b828_scoped_true_render = /*#__PURE__*/CourseSearchItemvue_type_template_id_0327b828_scoped_true_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_avatar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-avatar");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-label");

  const _component_q_badge = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-badge");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _directive_ripple = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("ripple");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_list, null, {
    default: CourseSearchItemvue_type_template_id_0327b828_scoped_true_withId(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($props.courses, course => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, {
        key: course.id
      }, [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, {
        clickable: "",
        onClick: $event => $options.goToCoursePage(course.id)
      }, {
        default: CourseSearchItemvue_type_template_id_0327b828_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
          top: "",
          avatar: ""
        }, {
          default: CourseSearchItemvue_type_template_id_0327b828_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, null, {
            default: CourseSearchItemvue_type_template_id_0327b828_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)("img", {
              src: $options.getCourseThumbnailPath(course)
            }, null, 8, ["src"])]),
            _: 2
          }, 1024)]),
          _: 2
        }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
          default: CourseSearchItemvue_type_template_id_0327b828_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
            default: CourseSearchItemvue_type_template_id_0327b828_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(course.name), 1)]),
            _: 2
          }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
            innerHTML: course.description,
            class: "text-h6",
            caption: ""
          }, null, 8, ["innerHTML"])]),
          _: 2
        }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
          side: "",
          top: ""
        }, {
          default: CourseSearchItemvue_type_template_id_0327b828_scoped_true_withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_badge, {
            label: "1"
          })]),
          _: 1
        })]),
        _: 2
      }, 1032, ["onClick"]), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator, {
        spaced: "",
        inset: "item"
      })], 64);
    }), 128))]),
    _: 1
  });
});
;// CONCATENATED MODULE: ./src/pages/courses/CourseSearchItem.vue?vue&type=template&id=0327b828&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/courses/CourseSearchItem.vue?vue&type=script&lang=js
/* harmony default export */ const CourseSearchItemvue_type_script_lang_js = ({
  name: "CourseSearchItem",
  props: ["courses"],
  methods: {
    goToCoursePage(id) {
      this.$router.push("/curso/" + id);
    },

    getCourseThumbnailPath(course) {
      return this.$settings.API_URL + course.thumbnail;
    }

  }
});
;// CONCATENATED MODULE: ./src/pages/courses/CourseSearchItem.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(7011);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(3414);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(2035);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(5096);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(2350);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(9721);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(5869);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__(6489);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/courses/CourseSearchItem.vue



CourseSearchItemvue_type_script_lang_js.render = CourseSearchItemvue_type_template_id_0327b828_scoped_true_render
CourseSearchItemvue_type_script_lang_js.__scopeId = "data-v-0327b828"

/* harmony default export */ const CourseSearchItem = (CourseSearchItemvue_type_script_lang_js);
;







runtime_auto_import_default()(CourseSearchItemvue_type_script_lang_js, 'components', {QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QAvatar: QAvatar/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QBadge: QBadge/* default */.Z,QSeparator: QSeparator/* default */.Z});runtime_auto_import_default()(CourseSearchItemvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/courses/SearchResults.vue?vue&type=script&lang=js

/* harmony default export */ const SearchResultsvue_type_script_lang_js = ({
  name: "SearchResults",
  components: {
    CourseSearchItem: CourseSearchItem
  },
  props: ["searchString"],

  data() {
    return {
      courses: []
    };
  },

  watch: {
    searchString: function (val) {
      if (val.length >= 3) {
        this.$axios.get('/api/courses?searchString=' + this.searchString).then(data => {
          this.courses = data.data.courses;
        });
      } else {
        this.courses = [];
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/courses/SearchResults.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/pages/courses/SearchResults.vue



SearchResultsvue_type_script_lang_js.render = SearchResultsvue_type_template_id_7b8520f8_scoped_true_render
SearchResultsvue_type_script_lang_js.__scopeId = "data-v-7b8520f8"

/* harmony default export */ const SearchResults = (SearchResultsvue_type_script_lang_js);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/SearchLayout.vue?vue&type=script&lang=js

/* harmony default export */ const SearchLayoutvue_type_script_lang_js = ({
  name: "SearchLayout",
  components: {
    SearchResults: SearchResults
  },

  data() {
    return {
      search: ""
    };
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    }

  }
});
;// CONCATENATED MODULE: ./src/layouts/SearchLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(9214);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(3812);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(9570);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 10 modules
var QInput = __webpack_require__(6805);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(4554);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2652);
;// CONCATENATED MODULE: ./src/layouts/SearchLayout.vue



SearchLayoutvue_type_script_lang_js.render = render
SearchLayoutvue_type_script_lang_js.__scopeId = "data-v-c233235a"

/* harmony default export */ const SearchLayout = (SearchLayoutvue_type_script_lang_js);
;






runtime_auto_import_default()(SearchLayoutvue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QInput: QInput/* default */.Z,QIcon: QIcon/* default */.Z,QPageContainer: QPageContainer/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=875.ef3302d2.js.map