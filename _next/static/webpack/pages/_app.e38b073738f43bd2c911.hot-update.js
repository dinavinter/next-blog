self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-page-transitions */ "./node_modules/next-page-transitions/lib/index.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_gigya_boomBuyIdp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/gigya/boomBuyIdp */ "./components/gigya/boomBuyIdp.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\dina\\demo\\next-app\\pages\\_app.js";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var TIMEOUT = 400;




function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children:  false ? 0 : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 49
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 12
  }, this);
}

_c = MyApp;

function AppWithTransition(_ref2) {
  var Component = _ref2.Component,
      pageProps = _ref2.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_page_transitions__WEBPACK_IMPORTED_MODULE_5__.PageTransition, {
      timeout: TIMEOUT,
      classNames: "page-transition",
      loadingComponent: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 31
      }, this),
      loadingDelay: 500,
      loadingTimeout: {
        enter: TIMEOUT,
        exit: 0
      },
      loadingClassNames: "loading-indicator",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "jsx-1342082650" + " " + "body",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: "wrapper",
          className: "jsx-1342082650",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
            className: "jsx-1342082650" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          id: "bg",
          className: "jsx-1342082650"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "1342082650",
      children: ".page-transition-enter{opacity:0;-webkit-transform:translate3d(0,20px,0);-ms-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0);}.page-transition-enter-active{opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:opacity ".concat(TIMEOUT, "ms,-webkit-transform ").concat(TIMEOUT, "ms;-webkit-transition:opacity ").concat(TIMEOUT, "ms,transform ").concat(TIMEOUT, "ms;transition:opacity ").concat(TIMEOUT, "ms,transform ").concat(TIMEOUT, "ms;}.page-transition-exit{opacity:1;}.page-transition-exit-active{opacity:0;-webkit-transition:opacity ").concat(TIMEOUT, "ms;transition:opacity ").concat(TIMEOUT, "ms;}.loading-indicator-appear,.loading-indicator-enter{opacity:0;}.loading-indicator-appear-active,.loading-indicator-enter-active{opacity:1;-webkit-transition:opacity ").concat(TIMEOUT, "ms;transition:opacity ").concat(TIMEOUT, "ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkaW5hXFxkZW1vXFxuZXh0LWFwcFxccGFnZXNcXF9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0MyQixBQUdxQixBQUlBLEFBS0EsQUFHQSxBQUtBLEFBSUEsVUFwQndCLEFBSUgsQUFLakMsQUFHb0QsQUFLcEQsQUFJb0QsbUdBaEIwQyxTQUo5RixBQVlBLEFBU0EsZ1NBaEJBIiwiZmlsZSI6IkQ6XFxkaW5hXFxkZW1vXFxuZXh0LWFwcFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uc2NzcydcbmltcG9ydCB7UGFnZVRyYW5zaXRpb259IGZyb20gJ25leHQtcGFnZS10cmFuc2l0aW9ucydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkZXInXG5cbmNvbnN0IFRJTUVPVVQgPSA0MDBcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt3aXRoQm9vbUlkcH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2lneWEvYm9vbUJ1eUlkcFwiO1xuaW1wb3J0IHtIZWFkLCBIdG1sfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIHt0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+fVxuICAgIDwvZGl2PlxuXG59XG5cbmZ1bmN0aW9uIEFwcFdpdGhUcmFuc2l0aW9uKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcbiAgICByZXR1cm4gPD5cblxuICAgICAgICA8UGFnZVRyYW5zaXRpb25cbiAgICAgICAgICAgIHRpbWVvdXQ9e1RJTUVPVVR9XG4gICAgICAgICAgICBjbGFzc05hbWVzPVwicGFnZS10cmFuc2l0aW9uXCJcbiAgICAgICAgICAgIGxvYWRpbmdDb21wb25lbnQ9ezxMb2FkZXIvPn1cbiAgICAgICAgICAgIGxvYWRpbmdEZWxheT17NTAwfVxuICAgICAgICAgICAgbG9hZGluZ1RpbWVvdXQ9e3tcbiAgICAgICAgICAgICAgICBlbnRlcjogVElNRU9VVCxcbiAgICAgICAgICAgICAgICBleGl0OiAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGxvYWRpbmdDbGFzc05hbWVzPVwibG9hZGluZy1pbmRpY2F0b3JcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJvZHlgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJnXCIvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYWdlVHJhbnNpdGlvbj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlciB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApO1xuICAgICAgICB9XG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXMsIHRyYW5zZm9ybSAke1RJTUVPVVR9bXM7XG4gICAgICAgIH1cbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0IHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1hY3RpdmUge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXM7XG4gICAgICAgIH1cbiAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWFwcGVhcixcbiAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWVudGVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1hcHBlYXItYWN0aXZlLFxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXItYWN0aXZlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHtUSU1FT1VUfW1zO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEJvb21JZHAoQXBwV2l0aFRyYW5zaXRpb24pO1xuIl19 */\n/*@ sourceURL=D:\\\\dina\\\\demo\\\\next-app\\\\pages\\\\_app.js */")
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

_c2 = AppWithTransition;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = (0,_components_gigya_boomBuyIdp__WEBPACK_IMPORTED_MODULE_8__.withBoomIdp)(AppWithTransition));

var _c, _c2, _c3;

$RefreshReg$(_c, "MyApp");
$RefreshReg$(_c2, "AppWithTransition");
$RefreshReg$(_c3, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJUSU1FT1VUIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJBcHBXaXRoVHJhbnNpdGlvbiIsImVudGVyIiwiZXhpdCIsIndpdGhCb29tSWRwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLEdBQWhCO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNDLEtBQVQsT0FBdUM7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsTUFBWkMsU0FBWSxRQUFaQSxTQUFZO0FBQ25DLHNCQUFPO0FBQUEsY0FDRixTQUFnQyxDQUFoQyxnQkFBdUMsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUlIOztLQUxRRixLOztBQU9ULFNBQVNHLGlCQUFULFFBQW1EO0FBQUEsTUFBdkJGLFNBQXVCLFNBQXZCQSxTQUF1QjtBQUFBLE1BQVpDLFNBQVksU0FBWkEsU0FBWTtBQUMvQyxzQkFBTztBQUFBLDRCQUVILDhEQUFDLGlFQUFEO0FBQ0ksYUFBTyxFQUFFSCxPQURiO0FBRUksZ0JBQVUsRUFBQyxpQkFGZjtBQUdJLHNCQUFnQixlQUFFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIdEI7QUFJSSxrQkFBWSxFQUFFLEdBSmxCO0FBS0ksb0JBQWMsRUFBRTtBQUNaSyxhQUFLLEVBQUVMLE9BREs7QUFFWk0sWUFBSSxFQUFFO0FBRk0sT0FMcEI7QUFTSSx1QkFBaUIsRUFBQyxtQkFUdEI7QUFBQSw2QkFXSTtBQUFBO0FBQUEsZ0NBQ0k7QUFBSyxZQUFFLEVBQUMsU0FBUjtBQUFBO0FBQUEsaUNBQ0ksOERBQUMsU0FBRCxrQ0FBZUgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFJSTtBQUFLLFlBQUUsRUFBQyxJQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRztBQUFBO0FBQUEsOFVBNkJxQkgsT0E3QnJCLGtDQTZCNkNBLE9BN0I3QywyQ0E2QnFCQSxPQTdCckIsMEJBNkI2Q0EsT0E3QjdDLG1DQTZCcUJBLE9BN0JyQiwwQkE2QjZDQSxPQTdCN0Msb0hBb0NxQkEsT0FwQ3JCLG1DQW9DcUJBLE9BcENyQixxTEE2Q3FCQSxPQTdDckIsbUNBNkNxQkEsT0E3Q3JCO0FBQUE7QUFBQSxrQkFBUDtBQWtESDs7TUFuRFFJLGlCO0FBcURULCtEQUFlLE1BQUFHLHlFQUFXLENBQUNILGlCQUFELENBQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTM4YjA3MzczOGY0M2JkMmM5MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5zY3NzJ1xuaW1wb3J0IHtQYWdlVHJhbnNpdGlvbn0gZnJvbSAnbmV4dC1wYWdlLXRyYW5zaXRpb25zJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRlcidcblxuY29uc3QgVElNRU9VVCA9IDQwMFxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3dpdGhCb29tSWRwfSBmcm9tIFwiLi4vY29tcG9uZW50cy9naWd5YS9ib29tQnV5SWRwXCI7XG5pbXBvcnQge0hlYWQsIEh0bWx9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAge3R5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XG4gICAgPC9kaXY+XG5cbn1cblxuZnVuY3Rpb24gQXBwV2l0aFRyYW5zaXRpb24oe0NvbXBvbmVudCwgcGFnZVByb3BzfSkge1xuICAgIHJldHVybiA8PlxuXG4gICAgICAgIDxQYWdlVHJhbnNpdGlvblxuICAgICAgICAgICAgdGltZW91dD17VElNRU9VVH1cbiAgICAgICAgICAgIGNsYXNzTmFtZXM9XCJwYWdlLXRyYW5zaXRpb25cIlxuICAgICAgICAgICAgbG9hZGluZ0NvbXBvbmVudD17PExvYWRlci8+fVxuICAgICAgICAgICAgbG9hZGluZ0RlbGF5PXs1MDB9XG4gICAgICAgICAgICBsb2FkaW5nVGltZW91dD17e1xuICAgICAgICAgICAgICAgIGVudGVyOiBUSU1FT1VULFxuICAgICAgICAgICAgICAgIGV4aXQ6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgbG9hZGluZ0NsYXNzTmFtZXM9XCJsb2FkaW5nLWluZGljYXRvclwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYm9keWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYmdcIi8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhZ2VUcmFuc2l0aW9uPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1hY3RpdmUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7VElNRU9VVH1tcywgdHJhbnNmb3JtICR7VElNRU9VVH1tcztcbiAgICAgICAgfVxuICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWFjdGl2ZSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7VElNRU9VVH1tcztcbiAgICAgICAgfVxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItYXBwZWFyLFxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWFwcGVhci1hY3RpdmUsXG4gICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlci1hY3RpdmUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXM7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQm9vbUlkcChBcHBXaXRoVHJhbnNpdGlvbik7XG4iXSwic291cmNlUm9vdCI6IiJ9