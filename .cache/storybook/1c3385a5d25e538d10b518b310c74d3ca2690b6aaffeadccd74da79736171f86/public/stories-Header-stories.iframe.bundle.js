"use strict";
(self["webpackChunkkitvue"] = self["webpackChunkkitvue"] || []).push([["stories-Header-stories"],{

/***/ "./src/stories/Header.stories.js":
/*!***************************************!*\
  !*** ./src/stories/Header.stories.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggedIn: function() { return /* binding */ LoggedIn; },
/* harmony export */   LoggedOut: function() { return /* binding */ LoggedOut; },
/* harmony export */   __namedExportsOrder: function() { return /* binding */ __namedExportsOrder; }
/* harmony export */ });
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/test */ "./node_modules/@storybook/test/dist/index.mjs");
/* harmony import */ var _Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue */ "./src/stories/Header.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Example/Header',
  component: _Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: args => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      MyHeader: _Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args
      };
    },
    // Then, the spread values can be accessed directly in the template
    template: '<my-header :user="user" />'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  args: {
    onLogin: (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
    onLogout: (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
    onCreateAccount: (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()
  }
});
const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
};
const LoggedOut = {
  args: {
    user: null
  }
};
;
const __namedExportsOrder = ["LoggedIn", "LoggedOut"];
LoggedIn.parameters = {
  ...LoggedIn.parameters,
  docs: {
    ...LoggedIn.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    user: {\n      name: 'Jane Doe'\n    }\n  }\n}",
      ...LoggedIn.parameters?.docs?.source
    }
  }
};
LoggedOut.parameters = {
  ...LoggedOut.parameters,
  docs: {
    ...LoggedOut.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    user: null\n  }\n}",
      ...LoggedOut.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=stories-Header-stories.iframe.bundle.js.map