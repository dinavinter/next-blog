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
    lineNumber: 13,
    columnNumber: 21
  }, this);

  var textDisplay = active === 'text' ? 'block' : 'none';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostLayout__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "video_box",
      className: 'center active timeout',
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Motion, {
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
          lineNumber: 24,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Motion, {
        id: "video-player",
        className: 'center active timeout',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: video,
            children: "Watch In YouTube"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: "".concat(active === 'video' ? 'active' : '', " timeout"),
            style: {
              display: textDisplay
            },
            url: "https://www.youtube.com/watch?v=".concat(video, "&html5=true")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJjaGlsZHJlbiIsInZpZGVvIiwidGl0bGUiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImdvVG9WaWRlbyIsInRleHREaXNwbGF5IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTWUsU0FBU0EsSUFBVCxPQUF3QztBQUFBOztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFmQyxLQUFlLFFBQWZBLEtBQWU7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7O0FBQUEsa0JBRXZCQywrQ0FBUSxDQUFDLE1BQUQsQ0FGZTtBQUFBLE1BRTVDQyxNQUY0QztBQUFBLE1BRXBDQyxTQUZvQzs7QUFHbkQsTUFBSUMsU0FBUyxnQkFBRztBQUFLLGFBQVMsRUFBRSxVQUFoQjtBQUE0QixXQUFPLEVBQUUsbUJBQU07QUFDdkRELGVBQVMsQ0FBQyxPQUFELENBQVQ7QUFDSDtBQUZlO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBaEI7O0FBS0EsTUFBTUUsV0FBVyxHQUFHSCxNQUFNLEtBQUssTUFBWCxHQUFvQixPQUFwQixHQUE4QixNQUFsRDtBQUNBLHNCQUFPLDhEQUFDLDJEQUFEO0FBQUEsMkJBQ0g7QUFBSyxRQUFFLEVBQUMsV0FBUjtBQUFvQixlQUFTLEVBQUUsdUJBQS9CO0FBQUEsOEJBR0ksOERBQUMsTUFBRDtBQUFBLCtCQUNJO0FBQUssWUFBRSxjQUFQO0FBQ0ssbUJBQVMsMkNBQW9DQSxNQUFNLEtBQUssTUFBWCxHQUFvQixRQUFwQixHQUErQixFQUFuRSxhQURkO0FBRUssZUFBSyxFQUFFO0FBQUNJLG1CQUFPLEVBQUVELFdBQVY7QUFBdUIsNkJBQWlCO0FBQXhDLFdBRlo7QUFBQSxvQkFJS1A7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBY0ksOERBQUMsTUFBRDtBQUNJLFVBQUUsZ0JBRE47QUFFSSxpQkFBUyxFQUFFLHVCQUZmO0FBQUEsK0JBSUk7QUFBQSxrQ0FDSTtBQUFHLGdCQUFJLEVBQUVDLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSSw4REFBQyxpREFBRDtBQUFhLHFCQUFTLFlBQUtHLE1BQU0sS0FBSyxPQUFYLEdBQXFCLFFBQXJCLEdBQWdDLEVBQXJDLGFBQXRCO0FBQ2EsaUJBQUssRUFBRTtBQUFDSSxxQkFBTyxFQUFFRDtBQUFWLGFBRHBCO0FBRWEsZUFBRyw0Q0FBcUNOLEtBQXJDO0FBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQWtDSDs7R0EzQ3VCRixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvY2FwdGNoYS45ODY3NTc1MWQ3NmY1NzQyNjY2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSBcInJlYWN0LXBsYXllclwiO1xyXG5pbXBvcnQgUG9zdExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0TGF5b3V0XCI7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuXHJcbiBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHtjaGlsZHJlbiwgdmlkZW8sIHRpdGxlfSkge1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgndGV4dCcpXHJcbiAgICBsZXQgZ29Ub1ZpZGVvID0gPGRpdiBjbGFzc05hbWU9e1wibWluaW1pemVcIn0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZSgndmlkZW8nKVxyXG4gICAgfX0vPlxyXG5cclxuXHJcbiAgICBjb25zdCB0ZXh0RGlzcGxheSA9IGFjdGl2ZSA9PT0gJ3RleHQnID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgIHJldHVybiA8UG9zdExheW91dD5cclxuICAgICAgICA8ZGl2IGlkPVwidmlkZW9fYm94XCIgY2xhc3NOYW1lPXsnY2VudGVyIGFjdGl2ZSB0aW1lb3V0J30+XHJcblxyXG4gICAgICAgICAgICB7Lyo8VGV4dCB0aXRsZT17Y2hpbGRyZW5bMF19IHN1YnRpdGxlPXtjaGlsZHJlbi5zbGljZSgxLCBjaGlsZHJlbi5sZW5ndGgtMil9IC8+Ki99XHJcbiAgICAgICAgICAgIDxNb3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXtgdmlkZW8tdGV4dGB9XHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGxlZnQgYWxpZ24tbGVmdCB2aWRlb19vdmVybGF5cyAke2FjdGl2ZSA9PT0gJ3RleHQnID8gJ2FjdGl2ZScgOiAnJ30gdGltZW91dGB9XHJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogdGV4dERpc3BsYXksICd2ZXJ0aWNhbEFsaWduJzogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKjxUZXh0TG9vcCAgc3ByaW5nQ29uZmlnPXt7IHN0aWZmbmVzczogMjAwLCBkYW1waW5nOiAxMCB9fSBtYXNrPXt0cnVlfSBpbnRlcnZhbD17MjAwMH0gPiovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8L1RleHRMb29wPiovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKntnb1RvVmlkZW99Ki99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvTW90aW9uPlxyXG4gICAgICAgICAgICA8TW90aW9uXHJcbiAgICAgICAgICAgICAgICBpZD17YHZpZGVvLXBsYXllcmB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydjZW50ZXIgYWN0aXZlIHRpbWVvdXQnfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZpZGVvfT5XYXRjaCBJbiBZb3VUdWJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllciBjbGFzc05hbWU9e2Ake2FjdGl2ZSA9PT0gJ3ZpZGVvJyA/ICdhY3RpdmUnIDogJyd9IHRpbWVvdXRgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IHRleHREaXNwbGF5fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0ke3ZpZGVvfSZodG1sNT10cnVlYH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvTW90aW9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvUG9zdExheW91dD5cclxuXHJcbn1cclxuXHJcbiAiXSwic291cmNlUm9vdCI6IiJ9