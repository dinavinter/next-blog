self["webpackHotUpdate_N_E"]("pages/post/gai",{

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
/* harmony import */ var _Layout_BlogNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout/BlogNav */ "./components/Layout/BlogNav.js");
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
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 13
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
    style: loaded ? {
      display: 'flex'
    } : {
      display: 'none'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      id: "main",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
        className: 'active timeout',
        children: [children, close]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      id: "header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_BlogNav__WEBPACK_IMPORTED_MODULE_4__.BlogNav, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0TGF5b3V0LmpzIl0sIm5hbWVzIjpbImNsb3NlIiwiUG9zdExheW91dCIsInByb3BzIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlciIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwidGltZW91dElkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImRpc3BsYXkiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwicGFnZVRyYW5zaXRpb25EZWxheUVudGVyIiwid2l0aFBvc3RMYXlvdXQiLCJDb21wb25lbnQiLCJMYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxLQUFLLGdCQUFHLDhEQUFDLGtEQUFEO0FBQU0sTUFBSSxFQUFDLEdBQVg7QUFBQSx5QkFDUjtBQUFLLGFBQVMsRUFBRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFaOztBQUlBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNFQywrQ0FBUSxDQUFDLEtBQUQsQ0FEVjtBQUFBLE1BQ25CQyxNQURtQjtBQUFBLE1BQ1hDLFNBRFc7O0FBQUEsTUFFbkJDLDBCQUZtQixHQUVxQkosS0FGckIsQ0FFbkJJLDBCQUZtQjtBQUFBLE1BRVNDLFFBRlQsR0FFcUJMLEtBRnJCLENBRVNLLFFBRlQ7QUFJMUJDLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLFNBQVMsR0FBR0MsVUFBVSxDQUFDLFlBQU07QUFDL0JKLGdDQUEwQjtBQUMxQkQsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNILEtBSDJCLEVBR3pCLElBSHlCLENBQTVCO0FBSUEsV0FBTyxZQUFNO0FBQ1RNLGtCQUFZLENBQUNGLFNBQUQsQ0FBWjtBQUNILEtBRkQ7QUFHSCxHQVJRLEVBUU4sQ0FBQ0gsMEJBQUQsQ0FSTSxDQUFUO0FBVUEsTUFBSSxDQUFDRixNQUFMLEVBQWEsT0FBTyxJQUFQO0FBRWIsc0JBQ0k7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFlLFNBQUssRUFBRUEsTUFBTSxHQUFHO0FBQUNRLGFBQU8sRUFBRTtBQUFWLEtBQUgsR0FBdUI7QUFBQ0EsYUFBTyxFQUFFO0FBQVYsS0FBbkQ7QUFBQSw0QkFFSTtBQUFNLFFBQUUsRUFBRSxNQUFWO0FBQUEsNkJBRUk7QUFDSSxpQkFBUyxFQUFFLGdCQURmO0FBQUEsbUJBR0tMLFFBSEwsRUFJS1AsS0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFXSTtBQUFRLFFBQUUsRUFBQyxRQUFYO0FBQUEsNkJBQ0ksOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1CSCxDQW5DRDs7R0FBTUMsVTs7S0FBQUEsVTtBQXFDTkEsVUFBVSxDQUFDWSxTQUFYLEdBQXVCO0FBQ25CUCw0QkFBMEIsRUFBRVEsd0RBQWNDO0FBRHZCLENBQXZCO0FBSUFkLFVBQVUsQ0FBQ2UsWUFBWCxHQUEwQjtBQUN0QlYsNEJBQTBCLEVBQUUsc0NBQU0sQ0FDakM7QUFGcUIsQ0FBMUI7QUFLQUwsVUFBVSxDQUFDZ0Isd0JBQVgsR0FBc0MsSUFBdEM7QUFFQSwrREFBZWhCLFVBQWY7QUFFTyxTQUFTaUIsY0FBVCxDQUF3QkMsU0FBeEIsRUFBbUM7QUFDdENBLFdBQVMsQ0FBQ0MsTUFBVixHQUFtQm5CLFVBQW5CO0FBQ0EsU0FBT2tCLFNBQVA7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L2dhaS42NWJkNDBkYjlmMGEzZDUwNTI0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7QmxvZ05hdn0gZnJvbSBcIi4vTGF5b3V0L0Jsb2dOYXZcIjtcclxuXHJcbmxldCBjbG9zZSA9IDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJjbG9zZVwifS8+XHJcbjwvTGluaz47XHJcblxyXG5jb25zdCBQb3N0TGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCB7cGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXIsIGNoaWxkcmVufSA9IHByb3BzXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXIoKVxyXG4gICAgICAgICAgICBzZXRMb2FkZWQodHJ1ZSlcclxuICAgICAgICB9LCAyMDAwKVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3BhZ2VUcmFuc2l0aW9uUmVhZHlUb0VudGVyXSlcclxuXHJcbiAgICBpZiAoIWxvYWRlZCkgcmV0dXJuIG51bGxcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJtYWluXCIgc3R5bGU9e2xvYWRlZCA/IHtkaXNwbGF5OiAnZmxleCd9IDoge2Rpc3BsYXk6ICdub25lJ319PlxyXG5cclxuICAgICAgICAgICAgPG1haW4gaWQ9e1wibWFpblwifT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2FjdGl2ZSB0aW1lb3V0J31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAge2Nsb3NlfVxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCbG9nTmF2Lz5cclxuXHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuUG9zdExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgICBwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbn1cclxuXHJcblBvc3RMYXlvdXQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgcGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXI6ICgpID0+IHtcclxuICAgIH0sXHJcbn1cclxuXHJcblBvc3RMYXlvdXQucGFnZVRyYW5zaXRpb25EZWxheUVudGVyID0gdHJ1ZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdExheW91dDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aXRoUG9zdExheW91dChDb21wb25lbnQpIHtcclxuICAgIENvbXBvbmVudC5MYXlvdXQgPSBQb3N0TGF5b3V0XHJcbiAgICByZXR1cm4gQ29tcG9uZW50XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9