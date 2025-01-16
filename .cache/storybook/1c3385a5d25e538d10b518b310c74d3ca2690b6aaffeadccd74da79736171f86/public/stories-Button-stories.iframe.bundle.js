"use strict";
(self["webpackChunkkitvue"] = self["webpackChunkkitvue"] || []).push([["stories-Button-stories"],{

/***/ "./src/stories/Button.stories.js":
/*!***************************************!*\
  !*** ./src/stories/Button.stories.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Large: function() { return /* binding */ Large; },
/* harmony export */   Primary: function() { return /* binding */ Primary; },
/* harmony export */   Secondary: function() { return /* binding */ Secondary; },
/* harmony export */   Small: function() { return /* binding */ Small; },
/* harmony export */   __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; }
/* harmony export */ });
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/test */ "./node_modules/@storybook/test/dist/index.mjs");
/* harmony import */ var _Button_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue */ "./src/stories/Button.vue");


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Example/Button',
  component: _Button_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['small', 'medium', 'large']
    },
    backgroundColor: {
      control: 'color'
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()
  }
});
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const Primary = {
  args: {
    primary: true,
    label: 'Button'
  }
};
const Secondary = {
  args: {
    label: 'Button'
  }
};
const Large = {
  args: {
    size: 'large',
    label: 'Button'
  }
};
const Small = {
  args: {
    size: 'small',
    label: 'Button'
  }
};
;
const __namedExportsOrder = ["Primary", "Secondary", "Large", "Small"];
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    primary: true,\n    label: 'Button'\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
Secondary.parameters = {
  ...Secondary.parameters,
  docs: {
    ...Secondary.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Button'\n  }\n}",
      ...Secondary.parameters?.docs?.source
    }
  }
};
Large.parameters = {
  ...Large.parameters,
  docs: {
    ...Large.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'large',\n    label: 'Button'\n  }\n}",
      ...Large.parameters?.docs?.source
    }
  }
};
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...Small.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'small',\n    label: 'Button'\n  }\n}",
      ...Small.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/exportHelper.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/exportHelper.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./src/stories/Button.vue":
/*!********************************!*\
  !*** ./src/stories/Button.vue ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_vue_vue_type_template_id_361c6da7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=361c6da7 */ "./src/stories/Button.vue?vue&type=template&id=361c6da7");
/* harmony import */ var _Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js */ "./src/stories/Button.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_poj_Documents_Pegadaian_pegadaian_ui_kit_vue_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_poj_Documents_Pegadaian_pegadaian_ui_kit_vue_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Button_vue_vue_type_template_id_361c6da7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/stories/Button.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "361c6da7"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('361c6da7', __exports__)) {
    console.log('reload')
    api.reload('361c6da7', __exports__)
  }
  
  module.hot.accept(/*! ./Button.vue?vue&type=template&id=361c6da7 */ "./src/stories/Button.vue?vue&type=template&id=361c6da7", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Button_vue_vue_type_template_id_361c6da7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=361c6da7 */ "./src/stories/Button.vue?vue&type=template&id=361c6da7");
(() => {
    console.log('re-render')
    api.rerender('361c6da7', _Button_vue_vue_type_template_id_361c6da7__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))

}


const __vuedocgen_export_0 = __exports__;
/* harmony default export */ __webpack_exports__["default"] = (__vuedocgen_export_0);
__vuedocgen_export_0.__docgenInfo = {"displayName":"my-button","exportName":"default","description":"","tags":{},"props":[{"name":"label","type":{"name":"string"},"required":true},{"name":"primary","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"size","type":{"name":"string"},"values":["small","medium","large"]},{"name":"backgroundColor","type":{"name":"string"}}],"events":[{"name":"click"}],"sourceFiles":["/Users/poj/Documents/Pegadaian/pegadaian-ui-kit-vue/src/stories/Button.vue"]}

/***/ }),

/***/ "./src/stories/Button.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/stories/Button.vue?vue&type=script&lang=js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_vue_docgen_loader_lib_index_js_ruleSet_1_rules_32_node_modules_swc_loader_src_index_js_clonedRuleSet_13_use_0_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_index_js_ruleSet_0_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_docgen_loader_lib_index_js_ruleSet_1_rules_32_node_modules_swc_loader_src_index_js_clonedRuleSet_13_use_0_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_index_js_ruleSet_0_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!../../node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!../../node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./Button.vue?vue&type=script&lang=js */ "./node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!./node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/stories/Button.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/stories/Button.vue?vue&type=template&id=361c6da7":
/*!**************************************************************!*\
  !*** ./src/stories/Button.vue?vue&type=template&id=361c6da7 ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_docgen_loader_lib_index_js_ruleSet_1_rules_32_node_modules_swc_loader_src_index_js_clonedRuleSet_13_use_0_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_6_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_index_js_ruleSet_0_Button_vue_vue_type_template_id_361c6da7__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_docgen_loader_lib_index_js_ruleSet_1_rules_32_node_modules_swc_loader_src_index_js_clonedRuleSet_13_use_0_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_6_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_index_js_ruleSet_0_Button_vue_vue_type_template_id_361c6da7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!../../node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!../../node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[6]!../../node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./Button.vue?vue&type=template&id=361c6da7 */ "./node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!./node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[6]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/stories/Button.vue?vue&type=template&id=361c6da7");


/***/ }),

/***/ "./node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!./node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/stories/Button.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!./node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/stories/Button.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'my-button',
    props: {
        label: {
            type: String,
            required: true
        },
        primary: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            validator: function(value) {
                return [
                    'small',
                    'medium',
                    'large'
                ].indexOf(value) !== -1;
            }
        },
        backgroundColor: {
            type: String
        }
    },
    emits: [
        'click'
    ],
    setup (props, { emit }) {
        props = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(props);
        return {
            classes: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>({
                    'storybook-button': true,
                    'storybook-button--primary': props.primary,
                    'storybook-button--secondary': !props.primary,
                    [`storybook-button--${props.size || 'medium'}`]: true
                })),
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(()=>({
                    backgroundColor: props.backgroundColor
                })),
            onClick () {
                emit('click');
            }
        };
    }
});


/***/ }),

/***/ "./node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!./node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[6]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/stories/Button.vue?vue&type=template&id=361c6da7":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!./node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[6]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/stories/Button.vue?vue&type=template&id=361c6da7 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        type: "button",
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.classes),
        onClick: _cache[0] || (_cache[0] = (...args)=>$setup.onClick && $setup.onClick(...args)),
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.style)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 7 /* TEXT, CLASS, STYLE */ );
}


/***/ })

}]);
//# sourceMappingURL=stories-Button-stories.iframe.bundle.js.map