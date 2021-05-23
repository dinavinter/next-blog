self["webpackHotUpdate_N_E"]("pages/post/groups",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Post; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/index.js");
/* harmony import */ var _components_PostLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostLayout */ "./components/PostLayout.js");
/* harmony import */ var _Motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Motion */ "./components/Motion.js");
/* harmony import */ var _PostText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostText */ "./components/PostText.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\dina\\demo\\next-app\\components\\Post.js",
    _s = $RefreshSig$();






function Post(_ref) {
  _s();

  var children = _ref.children,
      video = _ref.video,
      text = _ref.text;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('text'),
      active = _useState[0],
      setActive = _useState[1];

  var goToVideo = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "minimize",
    onClick: function onClick() {
      setActive('video');
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 21
  }, this);

  var textDisplay = active === 'text' ? 'block' : 'none';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostLayout__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "video_box",
      className: 'center active timeout',
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Motion__WEBPACK_IMPORTED_MODULE_4__.Motion, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: "video-text",
          className: "left align-left video_overlays ".concat(active === 'text' ? 'active' : '', " timeout"),
          style: {
            display: textDisplay,
            'verticalAlign': "center"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostText__WEBPACK_IMPORTED_MODULE_5__.PostText, {
            text: text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Motion__WEBPACK_IMPORTED_MODULE_4__.Motion, {
        id: "video-player",
        className: 'center active timeout',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: video,
            children: "Watch In YouTube"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: "".concat(active === 'video' ? 'active' : '', " timeout"),
            style: {
              display: textDisplay
            },
            url: "https://www.youtube.com/watch?v=".concat(video, "&html5=true")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 12
  }, this);
}

_s(Post, "+Aa34lqVRLnUYq5pSJg0TFkOfjU=");

_c = Post;

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/PostText.js":
/*!********************************!*\
  !*** ./components/PostText.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostText": function() { return /* binding */ PostText; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\dina\\demo\\next-app\\components\\PostText.js";

function PostText(_ref) {
  var _this = this;

  var text = _ref.text;
  return text && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: text.map(function (t) {
      return t.title ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "center align-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "minor align-center",
          children: t.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 5,
          columnNumber: 73
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 33
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: t.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 20
  }, this);
}
_c = PostText;

var _c;

$RefreshReg$(_c, "PostText");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RUZXh0LmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJjaGlsZHJlbiIsInZpZGVvIiwidGV4dCIsInVzZVN0YXRlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiZ29Ub1ZpZGVvIiwidGV4dERpc3BsYXkiLCJkaXNwbGF5IiwiUG9zdFRleHQiLCJtYXAiLCJ0IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQWRDLEtBQWMsUUFBZEEsS0FBYztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTzs7QUFBQSxrQkFFdEJDLCtDQUFRLENBQUMsTUFBRCxDQUZjO0FBQUEsTUFFM0NDLE1BRjJDO0FBQUEsTUFFbkNDLFNBRm1DOztBQUdsRCxNQUFJQyxTQUFTLGdCQUFHO0FBQUssYUFBUyxFQUFFLFVBQWhCO0FBQTRCLFdBQU8sRUFBRSxtQkFBTTtBQUN2REQsZUFBUyxDQUFDLE9BQUQsQ0FBVDtBQUNIO0FBRmU7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFoQjs7QUFLQSxNQUFNRSxXQUFXLEdBQUdILE1BQU0sS0FBSyxNQUFYLEdBQW9CLE9BQXBCLEdBQThCLE1BQWxEO0FBQ0Esc0JBQU8sOERBQUMsMkRBQUQ7QUFBQSwyQkFDSDtBQUFLLFFBQUUsRUFBQyxXQUFSO0FBQW9CLGVBQVMsRUFBRSx1QkFBL0I7QUFBQSw4QkFHSSw4REFBQywyQ0FBRDtBQUFBLCtCQUNJO0FBQUssWUFBRSxjQUFQO0FBQ0ssbUJBQVMsMkNBQW9DQSxNQUFNLEtBQUssTUFBWCxHQUFvQixRQUFwQixHQUErQixFQUFuRSxhQURkO0FBRUssZUFBSyxFQUFFO0FBQUNJLG1CQUFPLEVBQUVELFdBQVY7QUFBdUIsNkJBQWlCO0FBQXhDLFdBRlo7QUFBQSxpQ0FHSSw4REFBQywrQ0FBRDtBQUFVLGdCQUFJLEVBQUVMO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBV0ksOERBQUMsMkNBQUQ7QUFDSSxVQUFFLGdCQUROO0FBRUksaUJBQVMsRUFBRSx1QkFGZjtBQUFBLCtCQUlJO0FBQUEsa0NBQ0k7QUFBRyxnQkFBSSxFQUFFRCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUksOERBQUMsaURBQUQ7QUFBYSxxQkFBUyxZQUFLRyxNQUFNLEtBQUssT0FBWCxHQUFxQixRQUFyQixHQUFnQyxFQUFyQyxhQUF0QjtBQUNhLGlCQUFLLEVBQUU7QUFBQ0kscUJBQU8sRUFBRUQ7QUFBVixhQURwQjtBQUVhLGVBQUcsNENBQXFDTixLQUFyQztBQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUErQkg7O0dBeEN1QkYsSTs7S0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B4QjtBQUVPLFNBQVNVLFFBQVQsT0FBeUI7QUFBQTs7QUFBQSxNQUFOUCxJQUFNLFFBQU5BLElBQU07QUFDNUIsU0FBT0EsSUFBSSxpQkFBSTtBQUFBLGNBQ1ZBLElBQUksQ0FBQ1EsR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSxhQUFHQSxDQUFDLENBQUNDLEtBQUYsZ0JBQVU7QUFBTSxpQkFBUyxFQUFFLHFCQUFqQjtBQUFBLCtCQUF3QztBQUN4RCxtQkFBUyxFQUFDLG9CQUQ4QztBQUFBLG9CQUN4QkQsQ0FBQyxDQUFDVDtBQURzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVixnQkFFVjtBQUFBLCtCQUFNO0FBQUEsb0JBQUtTLENBQUMsQ0FBQ1Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZPO0FBQUEsS0FBVjtBQURVO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBZjtBQU1IO0tBUGVPLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9ncm91cHMuNGMzY2Q4OWI5YzFlYzg1NWM5NTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcclxuaW1wb3J0IFBvc3RMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdExheW91dFwiO1xyXG5pbXBvcnQge01vdGlvbn0gZnJvbSBcIi4vTW90aW9uXCI7XHJcbmltcG9ydCB7UG9zdFRleHR9IGZyb20gXCIuL1Bvc3RUZXh0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7Y2hpbGRyZW4sIHZpZGVvLCB0ZXh0fSkge1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgndGV4dCcpXHJcbiAgICBsZXQgZ29Ub1ZpZGVvID0gPGRpdiBjbGFzc05hbWU9e1wibWluaW1pemVcIn0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZSgndmlkZW8nKVxyXG4gICAgfX0vPlxyXG5cclxuXHJcbiAgICBjb25zdCB0ZXh0RGlzcGxheSA9IGFjdGl2ZSA9PT0gJ3RleHQnID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgIHJldHVybiA8UG9zdExheW91dD5cclxuICAgICAgICA8ZGl2IGlkPVwidmlkZW9fYm94XCIgY2xhc3NOYW1lPXsnY2VudGVyIGFjdGl2ZSB0aW1lb3V0J30+XHJcblxyXG4gICAgICAgICAgICB7Lyo8VGV4dCB0aXRsZT17Y2hpbGRyZW5bMF19IHN1YnRpdGxlPXtjaGlsZHJlbi5zbGljZSgxLCBjaGlsZHJlbi5sZW5ndGgtMil9IC8+Ki99XHJcbiAgICAgICAgICAgIDxNb3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXtgdmlkZW8tdGV4dGB9XHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGxlZnQgYWxpZ24tbGVmdCB2aWRlb19vdmVybGF5cyAke2FjdGl2ZSA9PT0gJ3RleHQnID8gJ2FjdGl2ZScgOiAnJ30gdGltZW91dGB9XHJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogdGV4dERpc3BsYXksICd2ZXJ0aWNhbEFsaWduJzogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0VGV4dCB0ZXh0PXt0ZXh0fS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvTW90aW9uPlxyXG4gICAgICAgICAgICA8TW90aW9uXHJcbiAgICAgICAgICAgICAgICBpZD17YHZpZGVvLXBsYXllcmB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydjZW50ZXIgYWN0aXZlIHRpbWVvdXQnfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZpZGVvfT5XYXRjaCBJbiBZb3VUdWJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllciBjbGFzc05hbWU9e2Ake2FjdGl2ZSA9PT0gJ3ZpZGVvJyA/ICdhY3RpdmUnIDogJyd9IHRpbWVvdXRgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IHRleHREaXNwbGF5fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0ke3ZpZGVvfSZodG1sNT10cnVlYH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvTW90aW9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvUG9zdExheW91dD5cclxuXHJcbn1cclxuXHJcbiAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9zdFRleHQoe3RleHR9KXtcclxuICAgIHJldHVybiB0ZXh0ICYmIDxkaXY+XHJcbiAgICAgICAge3RleHQubWFwKHQ9PiB0LnRpdGxlPyAgPHNwYW4gY2xhc3NOYW1lPXtcImNlbnRlciBhbGlnbi1jZW50ZXJcIn0+PGgxXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5vciBhbGlnbi1jZW50ZXJcIj57dC50ZXh0fTwvaDE+PC9zcGFuPiA6XHJcbiAgICAgICAgICAgIDxzcGFuPjxoMz57dC50ZXh0fTwvaDM+PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=