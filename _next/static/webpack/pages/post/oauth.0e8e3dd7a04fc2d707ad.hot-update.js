self["webpackHotUpdate_N_E"]("pages/post/oauth",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0TGF5b3V0LmpzIl0sIm5hbWVzIjpbImNsb3NlIiwiUG9zdExheW91dCIsInByb3BzIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlciIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwidGltZW91dElkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImRpc3BsYXkiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwicGFnZVRyYW5zaXRpb25EZWxheUVudGVyIiwid2l0aFBvc3RMYXlvdXQiLCJDb21wb25lbnQiLCJMYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsS0FBSyxnQkFBSSw4REFBQyxrREFBRDtBQUFNLE1BQUksRUFBQyxHQUFYO0FBQUEseUJBQ1Q7QUFBSyxhQUFTLEVBQUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURTO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBYjs7QUFJQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDRUMsK0NBQVEsQ0FBQyxLQUFELENBRFY7QUFBQSxNQUNuQkMsTUFEbUI7QUFBQSxNQUNYQyxTQURXOztBQUFBLE1BRWxCQywwQkFGa0IsR0FFdUJKLEtBRnZCLENBRWxCSSwwQkFGa0I7QUFBQSxNQUVVQyxRQUZWLEdBRXVCTCxLQUZ2QixDQUVVSyxRQUZWO0FBSTFCQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxTQUFTLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO0FBQy9CSixnQ0FBMEI7QUFDMUJELGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSCxLQUgyQixFQUd6QixJQUh5QixDQUE1QjtBQUlBLFdBQU8sWUFBTTtBQUNUTSxrQkFBWSxDQUFDRixTQUFELENBQVo7QUFDSCxLQUZEO0FBR0gsR0FSUSxFQVFOLENBQUNILDBCQUFELENBUk0sQ0FBVDtBQVVBLE1BQUksQ0FBQ0YsTUFBTCxFQUFhLE9BQU8sSUFBUDtBQUViLHNCQUNJO0FBQUssTUFBRSxFQUFDLE1BQVI7QUFBZSxTQUFLLEVBQUU7QUFBQ1EsYUFBTyxFQUFFO0FBQVYsS0FBdEI7QUFBQSwyQkFDSTtBQUNLLGVBQVMsRUFBRyxnQkFEakI7QUFBQSxpQkFHQ0wsUUFIRCxFQUlDUCxLQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBMUJEOztHQUFNQyxVOztLQUFBQSxVO0FBNEJOQSxVQUFVLENBQUNZLFNBQVgsR0FBdUI7QUFDbkJQLDRCQUEwQixFQUFFUSx3REFBY0M7QUFEdkIsQ0FBdkI7QUFJQWQsVUFBVSxDQUFDZSxZQUFYLEdBQTBCO0FBQ3RCViw0QkFBMEIsRUFBRSxzQ0FBTSxDQUFFO0FBRGQsQ0FBMUI7QUFJQUwsVUFBVSxDQUFDZ0Isd0JBQVgsR0FBc0MsSUFBdEM7QUFFQywrREFBZWhCLFVBQWY7QUFFTSxTQUFTaUIsY0FBVCxDQUF5QkMsU0FBekIsRUFBbUM7QUFDdENBLFdBQVMsQ0FBQ0MsTUFBVixHQUFtQm5CLFVBQW5CO0FBQ0EsU0FBT2tCLFNBQVA7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L29hdXRoLjBlOGUzZGQ3YTA0ZmMyZDcwN2FkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxubGV0IGNsb3NlID0gIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJjbG9zZVwifT48L2Rpdj5cclxuPC9MaW5rPjtcclxuXHJcbmNvbnN0IFBvc3RMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IHsgcGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXIsIGNoaWxkcmVuIH0gPSBwcm9wc1xyXG4gICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHBhZ2VUcmFuc2l0aW9uUmVhZHlUb0VudGVyKClcclxuICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpXHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcl0pXHJcblxyXG4gICAgaWYgKCFsb2FkZWQpIHJldHVybiBudWxsXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwibWFpblwiIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0gPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSAgXHJcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgJ2FjdGl2ZSB0aW1lb3V0JyAgfVxyXG4gICAgICAgID4gICAgICAgICBcclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICB7Y2xvc2V9XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Qb3N0TGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICAgIHBhZ2VUcmFuc2l0aW9uUmVhZHlUb0VudGVyOiBQcm9wVHlwZXMuZnVuYyxcclxufVxyXG5cclxuUG9zdExheW91dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcjogKCkgPT4ge30sXHJcbn1cclxuXHJcblBvc3RMYXlvdXQucGFnZVRyYW5zaXRpb25EZWxheUVudGVyID0gdHJ1ZVxyXG5cclxuIGV4cG9ydCBkZWZhdWx0IFBvc3RMYXlvdXQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aFBvc3RMYXlvdXQgKENvbXBvbmVudCl7XHJcbiAgICBDb21wb25lbnQuTGF5b3V0ID0gUG9zdExheW91dFxyXG4gICAgcmV0dXJuIENvbXBvbmVudFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==