self["webpackHotUpdate_N_E"]("pages/post/about",{

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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      loaded = _useState[0],
      setLoaded = _useState[1];

  var children = props.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "main",
    style: loaded ? {
      display: 'flex'
    } : {
      display: 'none'
    },
    children: [children, close, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      id: "header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_BlogNav__WEBPACK_IMPORTED_MODULE_4__.BlogNav, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 14
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, _this);
};

_s(PostLayout, "6AO20kP0r5OYzKuF85Dh6DCzH9Q=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0TGF5b3V0LmpzIl0sIm5hbWVzIjpbImNsb3NlIiwiUG9zdExheW91dCIsInByb3BzIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJjaGlsZHJlbiIsImRpc3BsYXkiLCJwcm9wVHlwZXMiLCJwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlciIsIlByb3BUeXBlcyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJwYWdlVHJhbnNpdGlvbkRlbGF5RW50ZXIiLCJ3aXRoUG9zdExheW91dCIsIkNvbXBvbmVudCIsIkxheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLEtBQUssZ0JBQUcsOERBQUMsa0RBQUQ7QUFBTSxNQUFJLEVBQUMsR0FBWDtBQUFBLHlCQUNSO0FBQUssYUFBUyxFQUFFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVo7O0FBSUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0VDLCtDQUFRLENBQUMsSUFBRCxDQURWO0FBQUEsTUFDbkJDLE1BRG1CO0FBQUEsTUFDWEMsU0FEVzs7QUFBQSxNQUVqQkMsUUFGaUIsR0FFTEosS0FGSyxDQUVqQkksUUFGaUI7QUFLMUIsc0JBQ0k7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFlLFNBQUssRUFBRUYsTUFBTSxHQUFHO0FBQUNHLGFBQU8sRUFBRTtBQUFWLEtBQUgsR0FBdUI7QUFBQ0EsYUFBTyxFQUFFO0FBQVYsS0FBbkQ7QUFBQSxlQUNhRCxRQURiLEVBRWFOLEtBRmIsZUFHSztBQUFRLFFBQUUsRUFBQyxRQUFYO0FBQUEsNkJBQ0csOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBZkQ7O0dBQU1DLFU7O0tBQUFBLFU7QUFpQk5BLFVBQVUsQ0FBQ08sU0FBWCxHQUF1QjtBQUNuQkMsNEJBQTBCLEVBQUVDLHdEQUFjQztBQUR2QixDQUF2QjtBQUlBVixVQUFVLENBQUNXLFlBQVgsR0FBMEI7QUFDdEJILDRCQUEwQixFQUFFLHNDQUFNLENBQ2pDO0FBRnFCLENBQTFCO0FBS0FSLFVBQVUsQ0FBQ1ksd0JBQVgsR0FBc0MsSUFBdEM7QUFFQSwrREFBZVosVUFBZjtBQUVPLFNBQVNhLGNBQVQsQ0FBd0JDLFNBQXhCLEVBQW1DO0FBQ3RDQSxXQUFTLENBQUNDLE1BQVYsR0FBbUJmLFVBQW5CO0FBQ0EsU0FBT2MsU0FBUDtBQUNIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvYWJvdXQuZjFhYWFhMjlhNjMxNzEyYTFkNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQge0Jsb2dOYXZ9IGZyb20gXCIuL0xheW91dC9CbG9nTmF2XCI7XHJcblxyXG5sZXQgY2xvc2UgPSA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1wiY2xvc2VcIn0vPlxyXG48L0xpbms+O1xyXG5cclxuY29uc3QgUG9zdExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCB7ICBjaGlsZHJlbn0gPSBwcm9wc1xyXG5cclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwibWFpblwiIHN0eWxlPXtsb2FkZWQgPyB7ZGlzcGxheTogJ2ZsZXgnfSA6IHtkaXNwbGF5OiAnbm9uZSd9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIHtjbG9zZX0gXHJcbiAgICAgICAgICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QmxvZ05hdi8+IFxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcblBvc3RMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgcGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxyXG59XHJcblxyXG5Qb3N0TGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHBhZ2VUcmFuc2l0aW9uUmVhZHlUb0VudGVyOiAoKSA9PiB7XHJcbiAgICB9LFxyXG59XHJcblxyXG5Qb3N0TGF5b3V0LnBhZ2VUcmFuc2l0aW9uRGVsYXlFbnRlciA9IHRydWVcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMYXlvdXQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aFBvc3RMYXlvdXQoQ29tcG9uZW50KSB7XHJcbiAgICBDb21wb25lbnQuTGF5b3V0ID0gUG9zdExheW91dFxyXG4gICAgcmV0dXJuIENvbXBvbmVudFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==