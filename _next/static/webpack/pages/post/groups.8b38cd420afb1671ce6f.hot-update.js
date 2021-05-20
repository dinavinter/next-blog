self["webpackHotUpdate_N_E"]("pages/post/groups",{

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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\dina\\demo\\next-app\\components\\PostLayout.js",
    _this2 = undefined,
    _s = $RefreshSig$();








var close = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
  href: "/",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "close"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 13
}, undefined);

function Motion(_ref) {
  var _this = this;

  var isLeftAligned = _ref.isLeftAligned,
      children = _ref.children;
  return children.map(function (child) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        delay: 0.3
      },
      className: "".concat(isLeftAligned ? "has-text-left-desktop" : "has-text-right-desktop", " mb-6"),
      children: child
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, _this);
  });
}

_c = Motion;

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
        lineNumber: 40,
        columnNumber: 17
      }, _this2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 14
    }, _this2)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, _this2);
};

_s(PostLayout, "6AO20kP0r5OYzKuF85Dh6DCzH9Q=");

_c2 = PostLayout;
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

var _c, _c2;

$RefreshReg$(_c, "Motion");
$RefreshReg$(_c2, "PostLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0TGF5b3V0LmpzIl0sIm5hbWVzIjpbImNsb3NlIiwiTW90aW9uIiwiaXNMZWZ0QWxpZ25lZCIsImNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJvcGFjaXR5IiwiZGVsYXkiLCJQb3N0TGF5b3V0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvYWRlZCIsInNldExvYWRlZCIsImRpc3BsYXkiLCJwcm9wVHlwZXMiLCJwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlciIsIlByb3BUeXBlcyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJwYWdlVHJhbnNpdGlvbkRlbGF5RW50ZXIiLCJ3aXRoUG9zdExheW91dCIsIkNvbXBvbmVudCIsIkxheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLEtBQUssZ0JBQUcsOERBQUMsa0RBQUQ7QUFBTSxNQUFJLEVBQUMsR0FBWDtBQUFBLHlCQUNSO0FBQUssYUFBUyxFQUFFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVo7O0FBS0EsU0FBU0MsTUFBVCxPQUE0QztBQUFBOztBQUFBLE1BQTNCQyxhQUEyQixRQUEzQkEsYUFBMkI7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDeEMsU0FBT0EsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQUMsS0FBSyxFQUFHO0FBQzVCLHdCQUNJLDhEQUFDLHFEQUFEO0FBQ0ksYUFBTyxFQUFFO0FBQUNDLGVBQU8sRUFBRTtBQUFWLE9BRGI7QUFFSSxhQUFPLEVBQUU7QUFBQ0EsZUFBTyxFQUFFO0FBQVYsT0FGYjtBQUdJLGdCQUFVLEVBQUU7QUFDUkMsYUFBSyxFQUFFO0FBREMsT0FIaEI7QUFNSSxlQUFTLFlBQ0xMLGFBQWEsR0FBRyx1QkFBSCxHQUE2Qix3QkFEckMsVUFOYjtBQUFBLGdCQVVLRztBQVZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQWFFLEdBZEssQ0FBUDtBQWVIOztLQWhCUUosTTs7QUFpQlQsSUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0VDLCtDQUFRLENBQUMsSUFBRCxDQURWO0FBQUEsTUFDbkJDLE1BRG1CO0FBQUEsTUFDWEMsU0FEVzs7QUFBQSxNQUVqQlQsUUFGaUIsR0FFTE0sS0FGSyxDQUVqQk4sUUFGaUI7QUFLMUIsc0JBQ0k7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFlLFNBQUssRUFBRVEsTUFBTSxHQUFHO0FBQUNFLGFBQU8sRUFBRTtBQUFWLEtBQUgsR0FBdUI7QUFBQ0EsYUFBTyxFQUFFO0FBQVYsS0FBbkQ7QUFBQSxlQUNhVixRQURiLEVBRWFILEtBRmIsZUFHSztBQUFRLFFBQUUsRUFBQyxRQUFYO0FBQUEsNkJBQ0csOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQVVILENBZkQ7O0dBQU1RLFU7O01BQUFBLFU7QUFpQk5BLFVBQVUsQ0FBQ00sU0FBWCxHQUF1QjtBQUNuQkMsNEJBQTBCLEVBQUVDLHdEQUFjQztBQUR2QixDQUF2QjtBQUlBVCxVQUFVLENBQUNVLFlBQVgsR0FBMEI7QUFDdEJILDRCQUEwQixFQUFFLHNDQUFNLENBQ2pDO0FBRnFCLENBQTFCO0FBS0FQLFVBQVUsQ0FBQ1csd0JBQVgsR0FBc0MsSUFBdEM7QUFFQSwrREFBZVgsVUFBZjtBQUVPLFNBQVNZLGNBQVQsQ0FBd0JDLFNBQXhCLEVBQW1DO0FBQ3RDQSxXQUFTLENBQUNDLE1BQVYsR0FBbUJkLFVBQW5CO0FBQ0EsU0FBT2EsU0FBUDtBQUNIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvZ3JvdXBzLjhiMzhjZDQyMGFmYjE2NzFjZTZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtCbG9nTmF2fSBmcm9tIFwiLi9MYXlvdXQvQmxvZ05hdlwiO1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmxldCBjbG9zZSA9IDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJjbG9zZVwifS8+XHJcbjwvTGluaz47XHJcblxyXG4gXHJcbmZ1bmN0aW9uIE1vdGlvbih7aXNMZWZ0QWxpZ25lZCwgIGNoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIGNoaWxkcmVuLm1hcChjaGlsZD0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDB9fVxyXG4gICAgICAgICAgICBhbmltYXRlPXt7b3BhY2l0eTogMX19XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAwLjMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICBpc0xlZnRBbGlnbmVkID8gXCJoYXMtdGV4dC1sZWZ0LWRlc2t0b3BcIiA6IFwiaGFzLXRleHQtcmlnaHQtZGVza3RvcFwiXHJcbiAgICAgICAgICAgIH0gbWItNmB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGR9XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgKX0pO1xyXG59XHJcbmNvbnN0IFBvc3RMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgeyAgY2hpbGRyZW59ID0gcHJvcHNcclxuXHJcbiBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cIm1haW5cIiBzdHlsZT17bG9hZGVkID8ge2Rpc3BsYXk6ICdmbGV4J30gOiB7ZGlzcGxheTogJ25vbmUnfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICB7Y2xvc2V9IFxyXG4gICAgICAgICAgICAgPGhlYWRlciBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEJsb2dOYXYvPiBcclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5Qb3N0TGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICAgIHBhZ2VUcmFuc2l0aW9uUmVhZHlUb0VudGVyOiBQcm9wVHlwZXMuZnVuYyxcclxufVxyXG5cclxuUG9zdExheW91dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcjogKCkgPT4ge1xyXG4gICAgfSxcclxufVxyXG5cclxuUG9zdExheW91dC5wYWdlVHJhbnNpdGlvbkRlbGF5RW50ZXIgPSB0cnVlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0TGF5b3V0O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhQb3N0TGF5b3V0KENvbXBvbmVudCkge1xyXG4gICAgQ29tcG9uZW50LkxheW91dCA9IFBvc3RMYXlvdXRcclxuICAgIHJldHVybiBDb21wb25lbnRcclxufSJdLCJzb3VyY2VSb290IjoiIn0=