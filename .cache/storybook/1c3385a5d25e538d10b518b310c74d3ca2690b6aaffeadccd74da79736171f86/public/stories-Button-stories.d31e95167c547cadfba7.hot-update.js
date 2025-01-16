"use strict";
self["webpackHotUpdatekitvue"]("stories-Button-stories",{

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

/***/ })

});
//# sourceMappingURL=stories-Button-stories.d31e95167c547cadfba7.hot-update.js.map