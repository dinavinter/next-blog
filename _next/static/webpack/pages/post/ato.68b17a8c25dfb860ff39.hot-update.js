self["webpackHotUpdate_N_E"]("pages/post/ato",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6WyJNb3Rpb24iLCJpc0xlZnRBbGlnbmVkIiwiY2hpbGRyZW4iLCJzY2FsZSIsIm9wYWNpdHkiLCJkZWxheSIsIlBvc3QiLCJ2aWRlbyIsInRpdGxlIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJnb1RvVmlkZW8iLCJ0ZXh0RGlzcGxheSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxNQUFULE9BQTJDO0FBQUEsTUFBMUJDLGFBQTBCLFFBQTFCQSxhQUEwQjtBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVztBQUM5QyxzQkFDSSw4REFBQyxxREFBRDtBQUNJLFdBQU8sRUFBRTtBQUFDQyxXQUFLLEVBQUUsQ0FBUjtBQUFXQyxhQUFPLEVBQUU7QUFBcEIsS0FEYjtBQUVJLFdBQU8sRUFBRTtBQUFDRCxXQUFLLEVBQUUsQ0FBUjtBQUFXQyxhQUFPLEVBQUU7QUFBcEIsS0FGYjtBQUdJLGNBQVUsRUFBRTtBQUNSQyxXQUFLLEVBQUU7QUFEQyxLQUhoQjtBQU1JLGFBQVMsWUFDTEosYUFBYSxHQUFHLHVCQUFILEdBQTZCLHdCQURyQyxVQU5iO0FBQUEsY0FVS0M7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSDtLQWZlRixNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGhCO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU00sSUFBVCxPQUF3QztBQUFBOztBQUFBLE1BQXpCSixRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFmSyxLQUFlLFFBQWZBLEtBQWU7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7O0FBQUEsa0JBRXZCQywrQ0FBUSxDQUFDLE1BQUQsQ0FGZTtBQUFBLE1BRTVDQyxNQUY0QztBQUFBLE1BRXBDQyxTQUZvQzs7QUFHbkQsTUFBSUMsU0FBUyxnQkFBRztBQUFLLGFBQVMsRUFBRSxVQUFoQjtBQUE0QixXQUFPLEVBQUUsbUJBQU07QUFDdkRELGVBQVMsQ0FBQyxPQUFELENBQVQ7QUFDSDtBQUZlO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBaEI7O0FBS0EsTUFBTUUsV0FBVyxHQUFHSCxNQUFNLEtBQUssTUFBWCxHQUFvQixPQUFwQixHQUE4QixNQUFsRDtBQUNBLHNCQUFPLDhEQUFDLDJEQUFEO0FBQUEsMkJBQ0g7QUFBSyxRQUFFLEVBQUMsV0FBUjtBQUFvQixlQUFTLEVBQUUsdUJBQS9CO0FBQUEsOEJBR0ksOERBQUMsMkNBQUQ7QUFBQSwrQkFDSTtBQUFLLFlBQUUsY0FBUDtBQUNLLG1CQUFTLDJDQUFvQ0EsTUFBTSxLQUFLLE1BQVgsR0FBb0IsUUFBcEIsR0FBK0IsRUFBbkUsYUFEZDtBQUVLLGVBQUssRUFBRTtBQUFDSSxtQkFBTyxFQUFFRCxXQUFWO0FBQXVCLDZCQUFpQjtBQUF4QyxXQUZaO0FBQUEsb0JBSUtYO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQWNJLDhEQUFDLDJDQUFEO0FBQ0ksVUFBRSxnQkFETjtBQUVJLGlCQUFTLEVBQUUsdUJBRmY7QUFBQSwrQkFJSTtBQUFBLGtDQUNJO0FBQUcsZ0JBQUksRUFBRUssS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJLDhEQUFDLGlEQUFEO0FBQWEscUJBQVMsWUFBS0csTUFBTSxLQUFLLE9BQVgsR0FBcUIsUUFBckIsR0FBZ0MsRUFBckMsYUFBdEI7QUFDYSxpQkFBSyxFQUFFO0FBQUNJLHFCQUFPLEVBQUVEO0FBQVYsYUFEcEI7QUFFYSxlQUFHLDRDQUFxQ04sS0FBckM7QUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBa0NIOztHQTNDdUJELEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9hdG8uNjhiMTdhOGMyNWRmYjg2MGZmMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTW90aW9uKHtpc0xlZnRBbGlnbmVkLCBjaGlsZHJlbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgaW5pdGlhbD17e3NjYWxlOiAwLCBvcGFjaXR5OiAwfX1cclxuICAgICAgICAgICAgYW5pbWF0ZT17e3NjYWxlOiAxLCBvcGFjaXR5OiAxfX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDAuMyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgIGlzTGVmdEFsaWduZWQgPyBcImhhcy10ZXh0LWxlZnQtZGVza3RvcFwiIDogXCJoYXMtdGV4dC1yaWdodC1kZXNrdG9wXCJcclxuICAgICAgICAgICAgfSBtYi02YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSBcInJlYWN0LXBsYXllclwiO1xyXG5pbXBvcnQgUG9zdExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0TGF5b3V0XCI7XHJcbmltcG9ydCB7TW90aW9ufSBmcm9tIFwiLi9Nb3Rpb25cIjtcclxuICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3Qoe2NoaWxkcmVuLCB2aWRlbywgdGl0bGV9KSB7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKCd0ZXh0JylcclxuICAgIGxldCBnb1RvVmlkZW8gPSA8ZGl2IGNsYXNzTmFtZT17XCJtaW5pbWl6ZVwifSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlKCd2aWRlbycpXHJcbiAgICB9fS8+XHJcblxyXG5cclxuICAgIGNvbnN0IHRleHREaXNwbGF5ID0gYWN0aXZlID09PSAndGV4dCcgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgcmV0dXJuIDxQb3N0TGF5b3V0PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ2aWRlb19ib3hcIiBjbGFzc05hbWU9eydjZW50ZXIgYWN0aXZlIHRpbWVvdXQnfT5cclxuXHJcbiAgICAgICAgICAgIHsvKjxUZXh0IHRpdGxlPXtjaGlsZHJlblswXX0gc3VidGl0bGU9e2NoaWxkcmVuLnNsaWNlKDEsIGNoaWxkcmVuLmxlbmd0aC0yKX0gLz4qL31cclxuICAgICAgICAgICAgPE1vdGlvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2B2aWRlby10ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGVmdCBhbGlnbi1sZWZ0IHZpZGVvX292ZXJsYXlzICR7YWN0aXZlID09PSAndGV4dCcgPyAnYWN0aXZlJyA6ICcnfSB0aW1lb3V0YH1cclxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiB0ZXh0RGlzcGxheSwgJ3ZlcnRpY2FsQWxpZ24nOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qPFRleHRMb29wICBzcHJpbmdDb25maWc9e3sgc3RpZmZuZXNzOiAyMDAsIGRhbXBpbmc6IDEwIH19IG1hc2s9e3RydWV9IGludGVydmFsPXsyMDAwfSA+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKjwvVGV4dExvb3A+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qe2dvVG9WaWRlb30qL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9Nb3Rpb24+XHJcbiAgICAgICAgICAgIDxNb3Rpb25cclxuICAgICAgICAgICAgICAgIGlkPXtgdmlkZW8tcGxheWVyYH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2NlbnRlciBhY3RpdmUgdGltZW91dCd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmlkZW99PldhdGNoIEluIFlvdVR1YmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0UGxheWVyIGNsYXNzTmFtZT17YCR7YWN0aXZlID09PSAndmlkZW8nID8gJ2FjdGl2ZScgOiAnJ30gdGltZW91dGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogdGV4dERpc3BsYXl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSR7dmlkZW99Jmh0bWw1PXRydWVgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9Nb3Rpb24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9Qb3N0TGF5b3V0PlxyXG5cclxufVxyXG5cclxuICJdLCJzb3VyY2VSb290IjoiIn0=