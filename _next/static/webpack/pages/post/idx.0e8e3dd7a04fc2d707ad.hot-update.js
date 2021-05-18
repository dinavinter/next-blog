self["webpackHotUpdate_N_E"]("pages/post/idx",{

/***/ "./components/PostLayout.js":
/*!**********************************!*\
  !*** ./components/PostLayout.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withPostLayout": function() { return /* binding */ withPostLayout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\dina\\demo\\next-app\\components\\PostLayout.js",
    _this = undefined,
    _s = $RefreshSig$();





var close = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
  href: "/",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "close"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 14
}, undefined);

var PostLayout = function PostLayout(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      loaded = _useState[0],
      setLoaded = _useState[1];

  var pageTransitionReadyToEnter = props.pageTransitionReadyToEnter,
      children = props.children;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var timeoutId = setTimeout(function () {
      pageTransitionReadyToEnter();
      setLoaded(true);
    }, 2000);
    return function () {
      clearTimeout(timeoutId);
    };
  }, [pageTransitionReadyToEnter]);
  if (!loaded) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "main",
    style: {
      display: 'flex'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
      className: 'active timeout',
      children: [children, close]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, _this);
};

_s(PostLayout, "I8RUn14npbk54TheiKdNt4wCpsU=");

_c = PostLayout;
PostLayout.propTypes = {
  pageTransitionReadyToEnter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
PostLayout.defaultProps = {
  pageTransitionReadyToEnter: function pageTransitionReadyToEnter() {}
};
PostLayout.pageTransitionDelayEnter = true;
/* harmony default export */ __webpack_exports__["default"] = (PostLayout);
function withPostLayout(Component) {
  Component.Layout = PostLayout;
  return Component;
}

var _c;

$RefreshReg$(_c, "PostLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0TGF5b3V0LmpzIl0sIm5hbWVzIjpbImNsb3NlIiwiUG9zdExheW91dCIsInByb3BzIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlciIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwidGltZW91dElkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImRpc3BsYXkiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwicGFnZVRyYW5zaXRpb25EZWxheUVudGVyIiwid2l0aFBvc3RMYXlvdXQiLCJDb21wb25lbnQiLCJMYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsS0FBSyxnQkFBSSw4REFBQyxrREFBRDtBQUFNLE1BQUksRUFBQyxHQUFYO0FBQUEseUJBQ1Q7QUFBSyxhQUFTLEVBQUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURTO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBYjs7QUFJQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDRUMsK0NBQVEsQ0FBQyxLQUFELENBRFY7QUFBQSxNQUNuQkMsTUFEbUI7QUFBQSxNQUNYQyxTQURXOztBQUFBLE1BRWxCQywwQkFGa0IsR0FFdUJKLEtBRnZCLENBRWxCSSwwQkFGa0I7QUFBQSxNQUVVQyxRQUZWLEdBRXVCTCxLQUZ2QixDQUVVSyxRQUZWO0FBSTFCQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxTQUFTLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO0FBQy9CSixnQ0FBMEI7QUFDMUJELGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSCxLQUgyQixFQUd6QixJQUh5QixDQUE1QjtBQUlBLFdBQU8sWUFBTTtBQUNUTSxrQkFBWSxDQUFDRixTQUFELENBQVo7QUFDSCxLQUZEO0FBR0gsR0FSUSxFQVFOLENBQUNILDBCQUFELENBUk0sQ0FBVDtBQVVBLE1BQUksQ0FBQ0YsTUFBTCxFQUFhLE9BQU8sSUFBUDtBQUViLHNCQUNJO0FBQUssTUFBRSxFQUFDLE1BQVI7QUFBZSxTQUFLLEVBQUU7QUFBQ1EsYUFBTyxFQUFFO0FBQVYsS0FBdEI7QUFBQSwyQkFDSTtBQUNLLGVBQVMsRUFBRyxnQkFEakI7QUFBQSxpQkFHQ0wsUUFIRCxFQUlDUCxLQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBMUJEOztHQUFNQyxVOztLQUFBQSxVO0FBNEJOQSxVQUFVLENBQUNZLFNBQVgsR0FBdUI7QUFDbkJQLDRCQUEwQixFQUFFUSx3REFBY0M7QUFEdkIsQ0FBdkI7QUFJQWQsVUFBVSxDQUFDZSxZQUFYLEdBQTBCO0FBQ3RCViw0QkFBMEIsRUFBRSxzQ0FBTSxDQUFFO0FBRGQsQ0FBMUI7QUFJQUwsVUFBVSxDQUFDZ0Isd0JBQVgsR0FBc0MsSUFBdEM7QUFFQywrREFBZWhCLFVBQWY7QUFFTSxTQUFTaUIsY0FBVCxDQUF5QkMsU0FBekIsRUFBbUM7QUFDdENBLFdBQVMsQ0FBQ0MsTUFBVixHQUFtQm5CLFVBQW5CO0FBQ0EsU0FBT2tCLFNBQVA7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L2lkeC4wZThlM2RkN2EwNGZjMmQ3MDdhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmxldCBjbG9zZSA9ICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1wiY2xvc2VcIn0+PC9kaXY+XHJcbjwvTGluaz47XHJcblxyXG5jb25zdCBQb3N0TGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCB7IHBhZ2VUcmFuc2l0aW9uUmVhZHlUb0VudGVyLCBjaGlsZHJlbiB9ID0gcHJvcHNcclxuICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcigpXHJcbiAgICAgICAgICAgIHNldExvYWRlZCh0cnVlKVxyXG4gICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZClcclxuICAgICAgICB9XHJcbiAgICB9LCBbcGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXJdKVxyXG5cclxuICAgIGlmICghbG9hZGVkKSByZXR1cm4gbnVsbFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cIm1haW5cIiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319ID5cclxuICAgICAgICAgICAgPGFydGljbGUgIFxyXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ICdhY3RpdmUgdGltZW91dCcgIH1cclxuICAgICAgICA+ICAgICAgICAgXHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAge2Nsb3NlfVxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuUG9zdExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgICBwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbn1cclxuXHJcblBvc3RMYXlvdXQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgcGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXI6ICgpID0+IHt9LFxyXG59XHJcblxyXG5Qb3N0TGF5b3V0LnBhZ2VUcmFuc2l0aW9uRGVsYXlFbnRlciA9IHRydWVcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBQb3N0TGF5b3V0O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhQb3N0TGF5b3V0IChDb21wb25lbnQpe1xyXG4gICAgQ29tcG9uZW50LkxheW91dCA9IFBvc3RMYXlvdXRcclxuICAgIHJldHVybiBDb21wb25lbnRcclxufSJdLCJzb3VyY2VSb290IjoiIn0=