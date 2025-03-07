"use strict";
(self["webpackChunkkitvue"] = self["webpackChunkkitvue"] || []).push([["stories-Page-stories"],{

/***/ "./src/stories/Page.stories.js":
/*!*************************************!*\
  !*** ./src/stories/Page.stories.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggedIn: function() { return /* binding */ LoggedIn; },
/* harmony export */   LoggedOut: function() { return /* binding */ LoggedOut; },
/* harmony export */   __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; }
/* harmony export */ });
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/test */ "./node_modules/@storybook/test/dist/index.mjs");
/* harmony import */ var _Page_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page.vue */ "./src/stories/Page.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Example/Page',
  component: _Page_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
});
const LoggedOut = {};
// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
const LoggedIn = {
  render: () => ({
    components: {
      MyPage: _Page_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    template: '<my-page />'
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.within)(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.expect)(loginButton).toBeInTheDocument();
    await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.userEvent.click(loginButton);
    await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.expect)(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.expect)(logoutButton).toBeInTheDocument();
  }
};
;
const __namedExportsOrder = ["LoggedOut", "LoggedIn"];
LoggedOut.parameters = {
  ...LoggedOut.parameters,
  docs: {
    ...LoggedOut.parameters?.docs,
    source: {
      originalSource: "{}",
      ...LoggedOut.parameters?.docs?.source
    }
  }
};
LoggedIn.parameters = {
  ...LoggedIn.parameters,
  docs: {
    ...LoggedIn.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    components: {\n      MyPage\n    },\n    template: '<my-page />'\n  }),\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const loginButton = canvas.getByRole('button', {\n      name: /Log in/i\n    });\n    await expect(loginButton).toBeInTheDocument();\n    await userEvent.click(loginButton);\n    await expect(loginButton).not.toBeInTheDocument();\n    const logoutButton = canvas.getByRole('button', {\n      name: /Log out/i\n    });\n    await expect(logoutButton).toBeInTheDocument();\n  }\n}",
      ...LoggedIn.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./src/stories/page.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./src/stories/page.css ***!
  \********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".storybook-page {\n  margin: 0 auto;\n  padding: 48px 20px;\n  max-width: 600px;\n  color: #333;\n  font-size: 14px;\n  line-height: 24px;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.storybook-page h2 {\n  display: inline-block;\n  vertical-align: top;\n  margin: 0 0 4px;\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 1;\n}\n\n.storybook-page p {\n  margin: 1em 0;\n}\n\n.storybook-page a {\n  color: #1ea7fd;\n  text-decoration: none;\n}\n\n.storybook-page ul {\n  margin: 1em 0;\n  padding-left: 30px;\n}\n\n.storybook-page li {\n  margin-bottom: 8px;\n}\n\n.storybook-page .tip {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px;\n  border-radius: 1em;\n  background: #e7fdd8;\n  padding: 4px 12px;\n  color: #66bf3c;\n  font-weight: 700;\n  font-size: 11px;\n  line-height: 12px;\n}\n\n.storybook-page .tip-wrapper {\n  margin-top: 40px;\n  margin-bottom: 40px;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.storybook-page .tip-wrapper svg {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 3px;\n  margin-right: 4px;\n  width: 12px;\n  height: 12px;\n}\n\n.storybook-page .tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n", "",{"version":3,"sources":["webpack://./src/stories/page.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,0EAA0E;AAC5E;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;AACf","sourcesContent":[".storybook-page {\n  margin: 0 auto;\n  padding: 48px 20px;\n  max-width: 600px;\n  color: #333;\n  font-size: 14px;\n  line-height: 24px;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.storybook-page h2 {\n  display: inline-block;\n  vertical-align: top;\n  margin: 0 0 4px;\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 1;\n}\n\n.storybook-page p {\n  margin: 1em 0;\n}\n\n.storybook-page a {\n  color: #1ea7fd;\n  text-decoration: none;\n}\n\n.storybook-page ul {\n  margin: 1em 0;\n  padding-left: 30px;\n}\n\n.storybook-page li {\n  margin-bottom: 8px;\n}\n\n.storybook-page .tip {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px;\n  border-radius: 1em;\n  background: #e7fdd8;\n  padding: 4px 12px;\n  color: #66bf3c;\n  font-weight: 700;\n  font-size: 11px;\n  line-height: 12px;\n}\n\n.storybook-page .tip-wrapper {\n  margin-top: 40px;\n  margin-bottom: 40px;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.storybook-page .tip-wrapper svg {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 3px;\n  margin-right: 4px;\n  width: 12px;\n  height: 12px;\n}\n\n.storybook-page .tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/stories/page.css":
/*!******************************!*\
  !*** ./src/stories/page.css ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./page.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./src/stories/page.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_page_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_page_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./page.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./src/stories/page.css",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./page.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./src/stories/page.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_page_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_page_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_page_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_page_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/stories/Page.vue":
/*!******************************!*\
  !*** ./src/stories/Page.vue ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page_vue_vue_type_template_id_503b45c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page.vue?vue&type=template&id=503b45c4 */ "./src/stories/Page.vue?vue&type=template&id=503b45c4");
/* harmony import */ var _Page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page.vue?vue&type=script&lang=js */ "./src/stories/Page.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_poj_Documents_Pegadaian_pegadaian_ui_kit_vue_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_poj_Documents_Pegadaian_pegadaian_ui_kit_vue_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Page_vue_vue_type_template_id_503b45c4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/stories/Page.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "503b45c4"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('503b45c4', __exports__)) {
    console.log('reload')
    api.reload('503b45c4', __exports__)
  }
  
  module.hot.accept(/*! ./Page.vue?vue&type=template&id=503b45c4 */ "./src/stories/Page.vue?vue&type=template&id=503b45c4", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Page_vue_vue_type_template_id_503b45c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page.vue?vue&type=template&id=503b45c4 */ "./src/stories/Page.vue?vue&type=template&id=503b45c4");
(() => {
    console.log('re-render')
    api.rerender('503b45c4', _Page_vue_vue_type_template_id_503b45c4__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))

}


const __vuedocgen_export_0 = __exports__;
/* harmony default export */ __webpack_exports__["default"] = (__vuedocgen_export_0);
__vuedocgen_export_0.__docgenInfo = {"displayName":"my-page","exportName":"default","description":"","tags":{},"sourceFiles":["/Users/poj/Documents/Pegadaian/pegadaian-ui-kit-vue/src/stories/Page.vue"]}

/***/ }),

/***/ "./src/stories/Page.vue?vue&type=script&lang=js":
/*!******************************************************!*\
  !*** ./src/stories/Page.vue?vue&type=script&lang=js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_vue_docgen_loader_lib_index_js_ruleSet_1_rules_32_node_modules_swc_loader_src_index_js_clonedRuleSet_13_use_0_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_index_js_ruleSet_0_Page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_docgen_loader_lib_index_js_ruleSet_1_rules_32_node_modules_swc_loader_src_index_js_clonedRuleSet_13_use_0_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_index_js_ruleSet_0_Page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!../../node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!../../node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./Page.vue?vue&type=script&lang=js */ "./node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!./node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/stories/Page.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/stories/Page.vue?vue&type=template&id=503b45c4":
/*!************************************************************!*\
  !*** ./src/stories/Page.vue?vue&type=template&id=503b45c4 ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_docgen_loader_lib_index_js_ruleSet_1_rules_32_node_modules_swc_loader_src_index_js_clonedRuleSet_13_use_0_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_6_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_index_js_ruleSet_0_Page_vue_vue_type_template_id_503b45c4__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_docgen_loader_lib_index_js_ruleSet_1_rules_32_node_modules_swc_loader_src_index_js_clonedRuleSet_13_use_0_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_6_node_modules_storybook_preset_vue3_webpack_node_modules_vue_loader_dist_index_js_ruleSet_0_Page_vue_vue_type_template_id_503b45c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!../../node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!../../node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[6]!../../node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./Page.vue?vue&type=template&id=503b45c4 */ "./node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!./node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[6]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/stories/Page.vue?vue&type=template&id=503b45c4");


/***/ }),

/***/ "./node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!./node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/stories/Page.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!./node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/stories/Page.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.css */ "./src/stories/page.css");
/* harmony import */ var _Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue */ "./src/stories/Header.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'my-page',
    components: {
        MyHeader: _Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    data () {
        return {
            user: null
        };
    },
    methods: {
        onLogin () {
            this.user = {
                name: 'Jane Doe'
            };
        },
        onLogout () {
            this.user = null;
        },
        onCreateAccount () {
            this.user = {
                name: 'Jane Doe'
            };
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!./node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[6]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/stories/Page.vue?vue&type=template&id=503b45c4":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-docgen-loader/lib/index.js??ruleSet[1].rules[32]!./node_modules/swc-loader/src/index.js??clonedRuleSet-13.use[0]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[6]!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/stories/Page.vue?vue&type=template&id=503b45c4 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"storybook-page\"><h2>Pages in Storybook</h2><p> We recommend building UIs with a <a href=\"https://componentdriven.org\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>component-driven</strong></a> process starting with atomic components and ending with pages. </p><p> Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook: </p><ul><li> Use a higher-level connected component. Storybook helps you compose such data from the &quot;args&quot; of child component stories </li><li> Assemble data in the page component from your services. You can mock these services out using Storybook. </li></ul><p> Get a guided tutorial on component-driven development at <a href=\"https://storybook.js.org/tutorials/\" target=\"_blank\" rel=\"noopener noreferrer\">Storybook tutorials</a> . Read more in the <a href=\"https://storybook.js.org/docs\" target=\"_blank\" rel=\"noopener noreferrer\">docs</a> . </p><div class=\"tip-wrapper\"><span class=\"tip\">Tip</span> Adjust the width of the canvas with the <svg width=\"10\" height=\"10\" viewBox=\"0 0 12 12\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z\" id=\"a\" fill=\"#999\"></path></g></svg> Viewports addon in the toolbar </div></section>", 1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_my_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("my-header");
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("article", null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_my_header, {
            user: $data.user,
            onLogin: $options.onLogin,
            onLogout: $options.onLogout,
            onCreateAccount: $options.onCreateAccount
        }, null, 8 /* PROPS */ , [
            "user",
            "onLogin",
            "onLogout",
            "onCreateAccount"
        ]),
        _hoisted_1
    ]);
}


/***/ })

}]);
//# sourceMappingURL=stories-Page-stories.iframe.bundle.js.map