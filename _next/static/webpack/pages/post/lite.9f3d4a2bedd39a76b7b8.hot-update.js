self["webpackHotUpdate_N_E"]("pages/post/lite",{

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
        lineNumber: 16,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
        className: 'active timeout',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: "video-player",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: video,
            children: "Watch In YouTube"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: "".concat(active === 'video' ? 'active' : '', " timeout"),
            style: {
              display: textDisplay
            },
            url: "https://www.youtube.com/watch?v=".concat(video, "&html5=true")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
        className: 'active timeout'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJjaGlsZHJlbiIsInZpZGVvIiwidGl0bGUiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImdvVG9WaWRlbyIsInRleHREaXNwbGF5IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBd0M7QUFBQTs7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBZkMsS0FBZSxRQUFmQSxLQUFlO0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFROztBQUFBLGtCQUV2QkMsK0NBQVEsQ0FBQyxNQUFELENBRmU7QUFBQSxNQUU1Q0MsTUFGNEM7QUFBQSxNQUVwQ0MsU0FGb0M7O0FBR25ELE1BQUlDLFNBQVMsZ0JBQUc7QUFBSyxhQUFTLEVBQUUsVUFBaEI7QUFBNEIsV0FBTyxFQUFFLG1CQUFNO0FBQ3ZERCxlQUFTLENBQUMsT0FBRCxDQUFUO0FBQ0g7QUFGZTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWhCOztBQUtBLE1BQU1FLFdBQVcsR0FBR0gsTUFBTSxLQUFLLE1BQVgsR0FBb0IsT0FBcEIsR0FBOEIsTUFBbEQ7QUFDQSxzQkFBTyw4REFBQywyREFBRDtBQUFBLDJCQUNIO0FBQUssUUFBRSxFQUFDLFdBQVI7QUFBQSw4QkFDSTtBQUFLLFVBQUUsY0FBUDtBQUNLLGlCQUFTLCtDQUF3Q0EsTUFBTSxLQUFLLE1BQVgsR0FBb0IsUUFBcEIsR0FBK0IsRUFBdkUsYUFEZDtBQUVLLGFBQUssRUFBRTtBQUFDSSxpQkFBTyxFQUFFRCxXQUFWO0FBQXVCLDJCQUFpQjtBQUF4QyxTQUZaO0FBQUEsa0JBSUtQO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBU0k7QUFDSSxpQkFBUyxFQUFFLGdCQURmO0FBQUEsK0JBR0k7QUFBSyxZQUFFLGdCQUFQO0FBQUEsa0NBQ0k7QUFBRyxnQkFBSSxFQUFFQyxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUksOERBQUMsaURBQUQ7QUFBYSxxQkFBUyxZQUFLRyxNQUFNLEtBQUssT0FBWCxHQUFxQixRQUFyQixHQUFnQyxFQUFyQyxhQUF0QjtBQUNhLGlCQUFLLEVBQUU7QUFBQ0kscUJBQU8sRUFBRUQ7QUFBVixhQURwQjtBQUVhLGVBQUcsNENBQXFDTixLQUFyQztBQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSixlQXdCSTtBQUFTLGlCQUFTLEVBQUU7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUE2Qkg7O0dBdEN1QkYsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L2xpdGUuOWYzZDRhMmJlZGQzOWE3NmI3YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcclxuaW1wb3J0IFBvc3RMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdExheW91dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7Y2hpbGRyZW4sIHZpZGVvLCB0aXRsZX0pIHtcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoJ3RleHQnKVxyXG4gICAgbGV0IGdvVG9WaWRlbyA9IDxkaXYgY2xhc3NOYW1lPXtcIm1pbmltaXplXCJ9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmUoJ3ZpZGVvJylcclxuICAgIH19Lz5cclxuXHJcblxyXG4gICAgY29uc3QgdGV4dERpc3BsYXkgPSBhY3RpdmUgPT09ICd0ZXh0JyA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgICByZXR1cm4gPFBvc3RMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBpZD1cInZpZGVvX2JveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPXtgdmlkZW8tdGV4dGB9XHJcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2VudGVyIGFsaWduLWNlbnRlciB2aWRlb19vdmVybGF5cyAke2FjdGl2ZSA9PT0gJ3RleHQnID8gJ2FjdGl2ZScgOiAnJ30gdGltZW91dGB9XHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiB0ZXh0RGlzcGxheSwgJ3ZlcnRpY2FsQWxpZ24nOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICB7Lyo8VGV4dExvb3AgIHNwcmluZ0NvbmZpZz17eyBzdGlmZm5lc3M6IDIwMCwgZGFtcGluZzogMTAgfX0gbWFzaz17dHJ1ZX0gaW50ZXJ2YWw9ezIwMDB9ID4qL31cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIHsvKjwvVGV4dExvb3A+Ki99XHJcbiAgICAgICAgICAgICAgICB7Lyp7Z29Ub1ZpZGVvfSovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGFydGljbGVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2FjdGl2ZSB0aW1lb3V0J31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD17YHZpZGVvLXBsYXllcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZpZGVvfT5XYXRjaCBJbiBZb3VUdWJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllciBjbGFzc05hbWU9e2Ake2FjdGl2ZSA9PT0gJ3ZpZGVvJyA/ICdhY3RpdmUnIDogJyd9IHRpbWVvdXRgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IHRleHREaXNwbGF5fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0ke3ZpZGVvfSZodG1sNT10cnVlYH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG5cclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXsnYWN0aXZlIHRpbWVvdXQnfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1Bvc3RMYXlvdXQ+XHJcblxyXG59XHJcblxyXG4gIl0sInNvdXJjZVJvb3QiOiIifQ==