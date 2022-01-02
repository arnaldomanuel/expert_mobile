"use strict";
(self["webpackChunkexpert"] = self["webpackChunkexpert"] || []).push([[439],{

/***/ 9439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CourseDetails)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/courses/CourseDetails.vue?vue&type=template&id=2834d206&scoped=true


const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-2834d206");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-2834d206");

const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("h1", {
  class: "text-h5 q-ma-sm  q-pb-md"
}, "Hello World", -1);

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("h4", {
  class: "text-overline q-pt-md text-capitalize q-ma-sm"
}, "Módulos", -1);

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("img", {
  src: "https://cdn.quasar.dev/img/boy-avatar.png"
}, null, -1);

const _hoisted_4 = {
  key: 0,
  class: "text-center tex-h5 text-weight-bold"
};
const _hoisted_5 = {
  key: 1,
  class: "text-overline q-pt-md text-capitalize q-ma-sm"
};

const _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createVNode */.Wm)("img", {
  src: "https://cdn.quasar.dev/img/boy-avatar.png"
}, null, -1);

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_avatar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-avatar");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _directive_ripple = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("ripple");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", null, [_hoisted_1, _hoisted_2, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, {
    bordered: ""
  }, {
    default: _withId(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.modules, module => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, {
        key: module.id
      }, [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, {
        clickable: "",
        onClick: $event => $options.goToModulesPage(module.id)
      }, {
        default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
          thumbnail: ""
        }, {
          default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
            rounded: ""
          }, {
            default: _withId(() => [_hoisted_3]),
            _: 1
          })]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
          default: _withId(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(module.name), 1)]),
          _: 2
        }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
          class: "q-mr-md",
          thumbnail: ""
        }, {
          default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            class: "q-mr-md",
            name: "lock"
          })]),
          _: 1
        })]),
        _: 2
      }, 1032, ["onClick"]), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator)], 64);
    }), 128))]),
    _: 1
  }), $data.modules.length <= 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_4, "0 módulos")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), $data.modules.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("h4", _hoisted_5, "Testes")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, {
    bordered: ""
  }, {
    default: _withId(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.modules, module => {
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_core_esm_bundler/* Fragment */.HY, {
        key: module.id
      }, [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item, {
        clickable: "",
        onClick: $event => $options.goToQuizPage(module.id)
      }, {
        default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
          thumbnail: ""
        }, {
          default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
            rounded: ""
          }, {
            default: _withId(() => [_hoisted_6]),
            _: 1
          })]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
          default: _withId(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(module.name), 1)]),
          _: 2
        }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
          class: "q-mr-md",
          thumbnail: ""
        }, {
          default: _withId(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
            class: "q-mr-md",
            name: "done"
          })]),
          _: 1
        })]),
        _: 2
      }, 1032, ["onClick"]), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator)], 64);
    }), 128))]),
    _: 1
  })]);
});
;// CONCATENATED MODULE: ./src/pages/courses/CourseDetails.vue?vue&type=template&id=2834d206&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/courses/CourseDetails.vue?vue&type=script&lang=js
/* harmony default export */ const CourseDetailsvue_type_script_lang_js = ({
  name: "CourseDetails",

  data() {
    return {
      modules: [],
      quizzes: []
    };
  },

  methods: {
    goToModulesPage(id) {
      this.$router.push('/modulo/' + id);
    },

    goToQuizPage(id) {
      this.$router.push('/quiz/' + id);
    }

  },

  mounted() {
    this.$axios.get('/api/course/' + this.$route.params.id).then(data => {
      this.modules = data.data.modules;
      console.log(data);
    });
  }

});
;// CONCATENATED MODULE: ./src/pages/courses/CourseDetails.vue?vue&type=script&lang=js
 
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
;// CONCATENATED MODULE: ./src/pages/courses/CourseDetails.vue



CourseDetailsvue_type_script_lang_js.render = render
CourseDetailsvue_type_script_lang_js.__scopeId = "data-v-2834d206"

/* harmony default export */ const CourseDetails = (CourseDetailsvue_type_script_lang_js);
;






runtime_auto_import_default()(CourseDetailsvue_type_script_lang_js, 'components', {QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QAvatar: QAvatar/* default */.Z,QIcon: QIcon/* default */.Z,QSeparator: QSeparator/* default */.Z});runtime_auto_import_default()(CourseDetailsvue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=439.0983c307.js.map