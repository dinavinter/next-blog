self["webpackHotUpdate_N_E"]("pages/post/oauth",{

/***/ "./components/Motion.js":
/*!******************************!*\
  !*** ./components/Motion.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Motion": function() { return /* binding */ Motion; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\dina\\demo\\next-app\\components\\Motion.js";


function Motion(_ref) {
  var isLeftAligned = _ref.isLeftAligned,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
    initial: {
      scale: 0,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1
    },
    transition: {
      delay: 0.3
    },
    className: "".concat(isLeftAligned ? "has-text-left-desktop" : "has-text-right-desktop", " mb-6"),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
_c = Motion;

var _c;

$RefreshReg$(_c, "Motion");

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
    lineNumber: 10,
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
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
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
            lineNumber: 36,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: "".concat(active === 'video' ? 'active' : '', " timeout"),
            style: {
              display: textDisplay
            },
            url: "https://www.youtube.com/watch?v=".concat(video, "&html5=true")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6WyJNb3Rpb24iLCJpc0xlZnRBbGlnbmVkIiwiY2hpbGRyZW4iLCJzY2FsZSIsIm9wYWNpdHkiLCJkZWxheSIsIlBvc3QiLCJ2aWRlbyIsInRpdGxlIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJnb1RvVmlkZW8iLCJ0ZXh0RGlzcGxheSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxNQUFULE9BQTJDO0FBQUEsTUFBMUJDLGFBQTBCLFFBQTFCQSxhQUEwQjtBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVztBQUM5QyxzQkFDSSw4REFBQyxxREFBRDtBQUNJLFdBQU8sRUFBRTtBQUFDQyxXQUFLLEVBQUUsQ0FBUjtBQUFXQyxhQUFPLEVBQUU7QUFBcEIsS0FEYjtBQUVJLFdBQU8sRUFBRTtBQUFDRCxXQUFLLEVBQUUsQ0FBUjtBQUFXQyxhQUFPLEVBQUU7QUFBcEIsS0FGYjtBQUdJLGNBQVUsRUFBRTtBQUNSQyxXQUFLLEVBQUU7QUFEQyxLQUhoQjtBQU1JLGFBQVMsWUFDTEosYUFBYSxHQUFHLHVCQUFILEdBQTZCLHdCQURyQyxVQU5iO0FBQUEsY0FVS0M7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSDtLQWZlRixNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGhCO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU00sSUFBVCxPQUF3QztBQUFBOztBQUFBLE1BQXpCSixRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFmSyxLQUFlLFFBQWZBLEtBQWU7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7O0FBQUEsa0JBRXZCQywrQ0FBUSxDQUFDLE1BQUQsQ0FGZTtBQUFBLE1BRTVDQyxNQUY0QztBQUFBLE1BRXBDQyxTQUZvQzs7QUFHbkQsTUFBSUMsU0FBUyxnQkFBRztBQUFLLGFBQVMsRUFBRSxVQUFoQjtBQUE0QixXQUFPLEVBQUUsbUJBQU07QUFDdkRELGVBQVMsQ0FBQyxPQUFELENBQVQ7QUFDSDtBQUZlO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBaEI7O0FBS0EsTUFBTUUsV0FBVyxHQUFHSCxNQUFNLEtBQUssTUFBWCxHQUFvQixPQUFwQixHQUE4QixNQUFsRDtBQUNBLHNCQUFPLDhEQUFDLDJEQUFEO0FBQUEsMkJBQ0g7QUFBSyxRQUFFLEVBQUMsV0FBUjtBQUFvQixlQUFTLEVBQUUsdUJBQS9CO0FBQUEsOEJBR0ksOERBQUMsMkNBQUQ7QUFBQSwrQkFDSTtBQUFLLFlBQUUsY0FBUDtBQUNLLG1CQUFTLDJDQUFvQ0EsTUFBTSxLQUFLLE1BQVgsR0FBb0IsUUFBcEIsR0FBK0IsRUFBbkUsYUFEZDtBQUVLLGVBQUssRUFBRTtBQUFDSSxtQkFBTyxFQUFFRCxXQUFWO0FBQXVCLDZCQUFpQjtBQUF4QyxXQUZaO0FBQUEsb0JBSUtYO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQWNJLDhEQUFDLDJDQUFEO0FBQ0ksVUFBRSxnQkFETjtBQUVJLGlCQUFTLEVBQUUsdUJBRmY7QUFBQSwrQkFJSTtBQUFBLGtDQUNJO0FBQUcsZ0JBQUksRUFBRUssS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJLDhEQUFDLGlEQUFEO0FBQWEscUJBQVMsWUFBS0csTUFBTSxLQUFLLE9BQVgsR0FBcUIsUUFBckIsR0FBZ0MsRUFBckMsYUFBdEI7QUFDYSxpQkFBSyxFQUFFO0FBQUNJLHFCQUFPLEVBQUVEO0FBQVYsYUFEcEI7QUFFYSxlQUFHLDRDQUFxQ04sS0FBckM7QUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBa0NIOztHQTNDdUJELEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9vYXV0aC42OGIxN2E4YzI1ZGZiODYwZmYzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttb3Rpb259IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNb3Rpb24oe2lzTGVmdEFsaWduZWQsIGNoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICBpbml0aWFsPXt7c2NhbGU6IDAsIG9wYWNpdHk6IDB9fVxyXG4gICAgICAgICAgICBhbmltYXRlPXt7c2NhbGU6IDEsIG9wYWNpdHk6IDF9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMC4zLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgaXNMZWZ0QWxpZ25lZCA/IFwiaGFzLXRleHQtbGVmdC1kZXNrdG9wXCIgOiBcImhhcy10ZXh0LXJpZ2h0LWRlc2t0b3BcIlxyXG4gICAgICAgICAgICB9IG1iLTZgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tIFwicmVhY3QtcGxheWVyXCI7XHJcbmltcG9ydCBQb3N0TGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RMYXlvdXRcIjtcclxuaW1wb3J0IHtNb3Rpb259IGZyb20gXCIuL01vdGlvblwiO1xyXG4gIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7Y2hpbGRyZW4sIHZpZGVvLCB0aXRsZX0pIHtcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoJ3RleHQnKVxyXG4gICAgbGV0IGdvVG9WaWRlbyA9IDxkaXYgY2xhc3NOYW1lPXtcIm1pbmltaXplXCJ9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmUoJ3ZpZGVvJylcclxuICAgIH19Lz5cclxuXHJcblxyXG4gICAgY29uc3QgdGV4dERpc3BsYXkgPSBhY3RpdmUgPT09ICd0ZXh0JyA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgICByZXR1cm4gPFBvc3RMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBpZD1cInZpZGVvX2JveFwiIGNsYXNzTmFtZT17J2NlbnRlciBhY3RpdmUgdGltZW91dCd9PlxyXG5cclxuICAgICAgICAgICAgey8qPFRleHQgdGl0bGU9e2NoaWxkcmVuWzBdfSBzdWJ0aXRsZT17Y2hpbGRyZW4uc2xpY2UoMSwgY2hpbGRyZW4ubGVuZ3RoLTIpfSAvPiovfVxyXG4gICAgICAgICAgICA8TW90aW9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD17YHZpZGVvLXRleHRgfVxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BsZWZ0IGFsaWduLWxlZnQgdmlkZW9fb3ZlcmxheXMgJHthY3RpdmUgPT09ICd0ZXh0JyA/ICdhY3RpdmUnIDogJyd9IHRpbWVvdXRgfVxyXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IHRleHREaXNwbGF5LCAndmVydGljYWxBbGlnbic6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8VGV4dExvb3AgIHNwcmluZ0NvbmZpZz17eyBzdGlmZm5lc3M6IDIwMCwgZGFtcGluZzogMTAgfX0gbWFzaz17dHJ1ZX0gaW50ZXJ2YWw9ezIwMDB9ID4qL31cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgey8qPC9UZXh0TG9vcD4qL31cclxuICAgICAgICAgICAgICAgICAgICB7Lyp7Z29Ub1ZpZGVvfSovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L01vdGlvbj5cclxuICAgICAgICAgICAgPE1vdGlvblxyXG4gICAgICAgICAgICAgICAgaWQ9e2B2aWRlby1wbGF5ZXJgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnY2VudGVyIGFjdGl2ZSB0aW1lb3V0J31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt2aWRlb30+V2F0Y2ggSW4gWW91VHViZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXIgY2xhc3NOYW1lPXtgJHthY3RpdmUgPT09ICd2aWRlbycgPyAnYWN0aXZlJyA6ICcnfSB0aW1lb3V0YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiB0ZXh0RGlzcGxheX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9JHt2aWRlb30maHRtbDU9dHJ1ZWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L01vdGlvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1Bvc3RMYXlvdXQ+XHJcblxyXG59XHJcblxyXG4gIl0sInNvdXJjZVJvb3QiOiIifQ==