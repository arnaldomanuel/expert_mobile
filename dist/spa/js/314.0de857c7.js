"use strict";
(self["webpackChunkexpert"] = self["webpackChunkexpert"] || []).push([[314],{

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

/***/ 8570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Loading)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/Services/Loading.vue?vue&type=template&id=525b3b3a

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div");
}
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__(4434);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/Services/Loading.vue?vue&type=script&lang=js
;
let notify = null;
let success = null;
/* harmony default export */ const Loadingvue_type_script_lang_js = ({
  openNotify() {
    notify = Notify/* default.create */.Z.create({
      color: 'primary',
      spinner: true,
      message: 'Por favor aguarde...',
      timeout: 0
    });
  },

  openSuccess(message, timeout = 1) {
    success = Notify/* default.create */.Z.create({
      color: 'green',
      spinner: false,
      message: message,
      timeout: timeout == 1 ? 3000 : timeout
    });
  },

  closeNotify() {
    notify();
  },

  closeSuccess() {
    success();
  }

});
;// CONCATENATED MODULE: ./src/Services/Loading.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/Services/Loading.vue



Loadingvue_type_script_lang_js.render = render

/* harmony default export */ const Loading = (Loadingvue_type_script_lang_js);

/***/ }),

/***/ 4314:
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
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Quiz/Show.vue?vue&type=template&id=4f611167&scoped=true


const _withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-4f611167");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-4f611167");

const _hoisted_1 = {
  key: 1,
  class: "text-center text-h6 q-mt-md"
};
const _hoisted_2 = {
  key: 2,
  class: "text-center text-h6 q-mt-md"
};

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_vue_question = (0,runtime_core_esm_bundler/* resolveComponent */.up)("vue-question");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", null, [$data.actualQuestion != undefined ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_vue_question, {
    key: 0,
    onAnswerQuestion: $options.reactToAnsweredQuestion,
    actualQuestion: $data.actualQuestion
  }, null, 8, ["onAnswerQuestion", "actualQuestion"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), $data.quizzes.length <= 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_1, "Quizz não dispnível")) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), $data.quizzes.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", _hoisted_2, (0,shared_esm_bundler/* toDisplayString */.zw)($data.actualIndex + 1) + "/" + (0,shared_esm_bundler/* toDisplayString */.zw)($data.quizzes.length), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]);
});
;// CONCATENATED MODULE: ./src/pages/Quiz/Show.vue?vue&type=template&id=4f611167&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Quiz/VueQuestion.vue?vue&type=template&id=4f79980c&scoped=true


const VueQuestionvue_type_template_id_4f79980c_scoped_true_withId = /*#__PURE__*/(0,runtime_core_esm_bundler/* withScopeId */.HX)("data-v-4f79980c");

(0,runtime_core_esm_bundler/* pushScopeId */.dD)("data-v-4f79980c");

const VueQuestionvue_type_template_id_4f79980c_scoped_true_hoisted_1 = {
  class: "text-center"
};
const VueQuestionvue_type_template_id_4f79980c_scoped_true_hoisted_2 = {
  class: "row"
};
const _hoisted_3 = {
  class: "col-12"
};

(0,runtime_core_esm_bundler/* popScopeId */.Cn)();

const VueQuestionvue_type_template_id_4f79980c_scoped_true_render = /*#__PURE__*/VueQuestionvue_type_template_id_4f79980c_scoped_true_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("h4", VueQuestionvue_type_template_id_4f79980c_scoped_true_hoisted_1, (0,shared_esm_bundler/* toDisplayString */.zw)($props.actualQuestion.question), 1), (0,runtime_core_esm_bundler/* createVNode */.Wm)("div", VueQuestionvue_type_template_id_4f79980c_scoped_true_hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
    class: "q-mt-md bg-secondary text-white",
    onClick: _cache[1] || (_cache[1] = $event => $options.giveAnswer(1)),
    style: {
      "width": "100%"
    },
    label: $props.actualQuestion.first
  }, null, 8, ["label"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
    class: "q-mt-md bg-secondary text-white",
    onClick: _cache[2] || (_cache[2] = $event => $options.giveAnswer(2)),
    style: {
      "width": "100%"
    },
    label: $props.actualQuestion.second
  }, null, 8, ["label"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
    class: "q-mt-md bg-secondary text-white",
    onClick: _cache[3] || (_cache[3] = $event => $options.giveAnswer(3)),
    style: {
      "width": "100%"
    },
    label: $props.actualQuestion.third
  }, null, 8, ["label"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
    class: "q-mt-md bg-secondary text-white",
    onClick: _cache[4] || (_cache[4] = $event => $options.giveAnswer(4)),
    style: {
      "width": "100%"
    },
    label: $props.actualQuestion.fourth
  }, null, 8, ["label"])])])]);
});
;// CONCATENATED MODULE: ./src/pages/Quiz/VueQuestion.vue?vue&type=template&id=4f79980c&scoped=true

;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Quiz/VueQuestion.vue?vue&type=script&lang=js
/* harmony default export */ const VueQuestionvue_type_script_lang_js = ({
  name: "VueQuestion",
  props: ["actualQuestion"],
  methods: {
    giveAnswer(index) {
      console.log(index, '99');
      this.$emit('answerQuestion', index);
    }

  }
});
;// CONCATENATED MODULE: ./src/pages/Quiz/VueQuestion.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__(8240);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/Quiz/VueQuestion.vue



VueQuestionvue_type_script_lang_js.render = VueQuestionvue_type_template_id_4f79980c_scoped_true_render
VueQuestionvue_type_script_lang_js.__scopeId = "data-v-4f79980c"

/* harmony default export */ const VueQuestion = (VueQuestionvue_type_script_lang_js);
;

runtime_auto_import_default()(VueQuestionvue_type_script_lang_js, 'components', {QBtn: QBtn/* default */.Z});

// EXTERNAL MODULE: ./src/Services/Loading.vue + 3 modules
var Loading = __webpack_require__(8570);
// EXTERNAL MODULE: ./src/Services/Error.vue + 3 modules
var Error = __webpack_require__(546);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/Quiz/Show.vue?vue&type=script&lang=js



/* harmony default export */ const Showvue_type_script_lang_js = ({
  name: "Show.vue",
  components: {
    VueQuestion: VueQuestion
  },

  data() {
    return {
      slide: 'map',
      quizzes: [],
      actualIndex: 0,
      score: 0,
      actualQuestion: {
        id: 1,
        question: "",
        first: "",
        correct_index: -1
      },
      lorem: 'dhlshd bljjb kjbkd bvksh kjkcdbjsdb kdbsjbjb jnfjs dvjbs bvjbsddjb'
    };
  },

  methods: {
    reactToAnsweredQuestion(index) {
      console.log(index);

      if (this.actualIndex + 1 < this.quizzes.length) {
        this.actualIndex += 1;
        this.actualQuestion = this.quizzes[this.actualIndex];

        if (index == this.actualQuestion.correct_index) {
          this.score++;
        }

        console.log('this.score', this.score);
      } else {
        Loading/* default.openNotify */.Z.openNotify();
        let formData = {
          user_id1: 1,
          module_id1: this.$route.params.id,
          result: this.score * 10,
          total_count: this.quizzes.length * 10
        };
        this.$axios.post('/api/quizz/result', formData).then(data => {
          Loading/* default.closeNotify */.Z.closeNotify();
          this.$router.push('/quiz/' + this.$route.params.id + '/resultado/' + formData.result + '/' + formData.total_count);
        }).catch(error => {
          Error/* default.openNotify */.Z.openNotify('Ocorreu um erro ao submter resultado.', 5000);
          Loading/* default.closeNotify */.Z.closeNotify();
        });
      }
    }

  },

  mounted() {
    this.$axios.get('/api/get/viewQuizz/' + this.$route.params.id).then(data => {
      this.quizzes = data.data.quizzes;
      this.actualQuestion = this.quizzes[this.actualIndex];
      console.log(data.data);
      console.log('quizzes ', this.quizzes);
    }).catch(errpr => {});
  }

});
;// CONCATENATED MODULE: ./src/pages/Quiz/Show.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/pages/Quiz/Show.vue



Showvue_type_script_lang_js.render = render
Showvue_type_script_lang_js.__scopeId = "data-v-4f611167"

/* harmony default export */ const Show = (Showvue_type_script_lang_js);

/***/ })

}]);
//# sourceMappingURL=314.0de857c7.js.map