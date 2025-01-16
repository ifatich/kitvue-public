"use strict";
self["webpackHotUpdatekitvue"]("src_stories_Button_vue",{

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

});
//# sourceMappingURL=src_stories_Button_vue.18903adeb68638b6152c.hot-update.js.map