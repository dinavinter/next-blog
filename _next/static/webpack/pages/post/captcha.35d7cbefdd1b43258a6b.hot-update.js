self["webpackHotUpdate_N_E"]("pages/post/captcha",{

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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\dina\\demo\\next-app\\components\\Post.js",
    _s = $RefreshSig$();




function Post(_ref) {
  _s();

  var children = _ref.children,
      video = _ref.video,
      title = _ref.title;

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
    lineNumber: 8,
    columnNumber: 21
  }, this);

  var textDisplay = active === 'text' ? 'block' : 'none';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostLayout__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "video_box",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: "video-text",
          className: "center align-center video_overlays ".concat(active === 'text' ? 'active' : '', " timeout"),
          style: {
            display: textDisplay,
            'verticalAlign': "center"
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: "video-player",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: video,
            children: "Watch In YouTube"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: "".concat(active === 'video' ? 'active' : '', " timeout"),
            style: {
              display: textDisplay
            },
            url: "https://www.youtube.com/watch?v=".concat(video, "&html5=true")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJjaGlsZHJlbiIsInZpZGVvIiwidGl0bGUiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImdvVG9WaWRlbyIsInRleHREaXNwbGF5IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBd0M7QUFBQTs7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBZkMsS0FBZSxRQUFmQSxLQUFlO0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFROztBQUFBLGtCQUV2QkMsK0NBQVEsQ0FBQyxNQUFELENBRmU7QUFBQSxNQUU1Q0MsTUFGNEM7QUFBQSxNQUVwQ0MsU0FGb0M7O0FBR25ELE1BQUlDLFNBQVMsZ0JBQUc7QUFBSyxhQUFTLEVBQUUsVUFBaEI7QUFBNEIsV0FBTyxFQUFFLG1CQUFNO0FBQ3ZERCxlQUFTLENBQUMsT0FBRCxDQUFUO0FBQ0g7QUFGZTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWhCOztBQUtBLE1BQU1FLFdBQVcsR0FBR0gsTUFBTSxLQUFLLE1BQVgsR0FBb0IsT0FBcEIsR0FBOEIsTUFBbEQ7QUFDQSxzQkFBTyw4REFBQywyREFBRDtBQUFBLDJCQUNIO0FBQUEsNkJBQ0k7QUFBSyxVQUFFLEVBQUMsV0FBUjtBQUFBLGdDQUNJO0FBQUssWUFBRSxjQUFQO0FBQ0ssbUJBQVMsK0NBQXdDQSxNQUFNLEtBQUssTUFBWCxHQUFvQixRQUFwQixHQUErQixFQUF2RSxhQURkO0FBRUssZUFBSyxFQUFFO0FBQUNJLG1CQUFPLEVBQUVELFdBQVY7QUFBdUIsNkJBQWlCO0FBQXhDLFdBRlo7QUFBQSxvQkFJS1A7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBVUk7QUFBSyxZQUFFLGdCQUFQO0FBQUEsa0NBQ0k7QUFBRyxnQkFBSSxFQUFFQyxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUksOERBQUMsaURBQUQ7QUFBYSxxQkFBUyxZQUFLRyxNQUFNLEtBQUssT0FBWCxHQUFxQixRQUFyQixHQUFnQyxFQUFyQyxhQUF0QjtBQUNhLGlCQUFLLEVBQUU7QUFBQ0kscUJBQU8sRUFBRUQ7QUFBVixhQURwQjtBQUVhLGVBQUcsNENBQXFDTixLQUFyQztBQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBeUJIOztHQWxDdUJGLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9jYXB0Y2hhLjM1ZDdjYmVmZGQxYjQzMjU4YTZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tIFwicmVhY3QtcGxheWVyXCI7XHJcbmltcG9ydCBQb3N0TGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RMYXlvdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3Qoe2NoaWxkcmVuLCB2aWRlbywgdGl0bGV9KSB7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKCd0ZXh0JylcclxuICAgIGxldCBnb1RvVmlkZW8gPSA8ZGl2IGNsYXNzTmFtZT17XCJtaW5pbWl6ZVwifSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlKCd2aWRlbycpXHJcbiAgICB9fS8+XHJcblxyXG5cclxuICAgIGNvbnN0IHRleHREaXNwbGF5ID0gYWN0aXZlID09PSAndGV4dCcgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgcmV0dXJuIDxQb3N0TGF5b3V0PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ2aWRlb19ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2B2aWRlby10ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2VudGVyIGFsaWduLWNlbnRlciB2aWRlb19vdmVybGF5cyAke2FjdGl2ZSA9PT0gJ3RleHQnID8gJ2FjdGl2ZScgOiAnJ30gdGltZW91dGB9XHJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogdGV4dERpc3BsYXksICd2ZXJ0aWNhbEFsaWduJzogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKjxUZXh0TG9vcCAgc3ByaW5nQ29uZmlnPXt7IHN0aWZmbmVzczogMjAwLCBkYW1waW5nOiAxMCB9fSBtYXNrPXt0cnVlfSBpbnRlcnZhbD17MjAwMH0gPiovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8L1RleHRMb29wPiovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKntnb1RvVmlkZW99Ki99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXtgdmlkZW8tcGxheWVyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmlkZW99PldhdGNoIEluIFlvdVR1YmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0UGxheWVyIGNsYXNzTmFtZT17YCR7YWN0aXZlID09PSAndmlkZW8nID8gJ2FjdGl2ZScgOiAnJ30gdGltZW91dGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogdGV4dERpc3BsYXl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSR7dmlkZW99Jmh0bWw1PXRydWVgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvUG9zdExheW91dD5cclxuXHJcbn1cclxuXHJcbiAiXSwic291cmNlUm9vdCI6IiJ9