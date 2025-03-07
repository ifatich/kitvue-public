"use strict";
self["webpackHotUpdatekitvue"]("stories-Button-stories",{

/***/ "./src/stories/Button.stories.js":
/*!***************************************!*\
  !*** ./src/stories/Button.stories.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
}); // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

/***/ })

});
//# sourceMappingURL=stories-Button-stories.8f99b371447e40cf9a6a.hot-update.js.map