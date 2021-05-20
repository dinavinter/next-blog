self["webpackHotUpdate_N_E"]("pages/post/captcha",{

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
    _this = undefined,
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
  var title = _ref.title,
      subtitle = _ref.subtitle,
      icon = _ref.icon,
      isLeftAligned = _ref.isLeftAligned,
      color = _ref.color,
      children = _ref.children;
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
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
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
        lineNumber: 37,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 14
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0TGF5b3V0LmpzIl0sIm5hbWVzIjpbImNsb3NlIiwiTW90aW9uIiwidGl0bGUiLCJzdWJ0aXRsZSIsImljb24iLCJpc0xlZnRBbGlnbmVkIiwiY29sb3IiLCJjaGlsZHJlbiIsIm9wYWNpdHkiLCJkZWxheSIsIlBvc3RMYXlvdXQiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9hZGVkIiwic2V0TG9hZGVkIiwiZGlzcGxheSIsInByb3BUeXBlcyIsInBhZ2VUcmFuc2l0aW9uUmVhZHlUb0VudGVyIiwiUHJvcFR5cGVzIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInBhZ2VUcmFuc2l0aW9uRGVsYXlFbnRlciIsIndpdGhQb3N0TGF5b3V0IiwiQ29tcG9uZW50IiwiTGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUEsS0FBSyxnQkFBRyw4REFBQyxrREFBRDtBQUFNLE1BQUksRUFBQyxHQUFYO0FBQUEseUJBQ1I7QUFBSyxhQUFTLEVBQUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURRO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBWjs7QUFHQSxTQUFTQyxNQUFULE9BQXlFO0FBQUEsTUFBeERDLEtBQXdELFFBQXhEQSxLQUF3RDtBQUFBLE1BQWpEQyxRQUFpRCxRQUFqREEsUUFBaUQ7QUFBQSxNQUF2Q0MsSUFBdUMsUUFBdkNBLElBQXVDO0FBQUEsTUFBakNDLGFBQWlDLFFBQWpDQSxhQUFpQztBQUFBLE1BQWxCQyxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDckUsc0JBQ0ksOERBQUMscURBQUQ7QUFDSSxXQUFPLEVBQUU7QUFBQ0MsYUFBTyxFQUFFO0FBQVYsS0FEYjtBQUVJLFdBQU8sRUFBRTtBQUFDQSxhQUFPLEVBQUU7QUFBVixLQUZiO0FBR0ksY0FBVSxFQUFFO0FBQ1JDLFdBQUssRUFBRTtBQURDLEtBSGhCO0FBTUksYUFBUyxZQUNMSixhQUFhLEdBQUcsdUJBQUgsR0FBNkIsd0JBRHJDLFVBTmI7QUFBQSxjQVVLRTtBQVZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIOztLQWZRTixNOztBQWdCVCxJQUFNUyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDRUMsK0NBQVEsQ0FBQyxJQUFELENBRFY7QUFBQSxNQUNuQkMsTUFEbUI7QUFBQSxNQUNYQyxTQURXOztBQUFBLE1BRWpCUCxRQUZpQixHQUVMSSxLQUZLLENBRWpCSixRQUZpQjtBQUsxQixzQkFDSTtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQWUsU0FBSyxFQUFFTSxNQUFNLEdBQUc7QUFBQ0UsYUFBTyxFQUFFO0FBQVYsS0FBSCxHQUF1QjtBQUFDQSxhQUFPLEVBQUU7QUFBVixLQUFuRDtBQUFBLGVBQ2FSLFFBRGIsRUFFYVAsS0FGYixlQUdLO0FBQVEsUUFBRSxFQUFDLFFBQVg7QUFBQSw2QkFDRyw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0FmRDs7R0FBTVUsVTs7TUFBQUEsVTtBQWlCTkEsVUFBVSxDQUFDTSxTQUFYLEdBQXVCO0FBQ25CQyw0QkFBMEIsRUFBRUMsd0RBQWNDO0FBRHZCLENBQXZCO0FBSUFULFVBQVUsQ0FBQ1UsWUFBWCxHQUEwQjtBQUN0QkgsNEJBQTBCLEVBQUUsc0NBQU0sQ0FDakM7QUFGcUIsQ0FBMUI7QUFLQVAsVUFBVSxDQUFDVyx3QkFBWCxHQUFzQyxJQUF0QztBQUVBLCtEQUFlWCxVQUFmO0FBRU8sU0FBU1ksY0FBVCxDQUF3QkMsU0FBeEIsRUFBbUM7QUFDdENBLFdBQVMsQ0FBQ0MsTUFBVixHQUFtQmQsVUFBbkI7QUFDQSxTQUFPYSxTQUFQO0FBQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9jYXB0Y2hhLjVmZDE0ZWIyMzQ1YWUzMzRhMzc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtCbG9nTmF2fSBmcm9tIFwiLi9MYXlvdXQvQmxvZ05hdlwiO1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmxldCBjbG9zZSA9IDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJjbG9zZVwifS8+XHJcbjwvTGluaz47XHJcbmZ1bmN0aW9uIE1vdGlvbih7dGl0bGUsIHN1YnRpdGxlLCBpY29uLCBpc0xlZnRBbGlnbmVkLCBjb2xvciwgY2hpbGRyZW59KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OiAwfX1cclxuICAgICAgICAgICAgYW5pbWF0ZT17e29wYWNpdHk6IDF9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMC4zLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgaXNMZWZ0QWxpZ25lZCA/IFwiaGFzLXRleHQtbGVmdC1kZXNrdG9wXCIgOiBcImhhcy10ZXh0LXJpZ2h0LWRlc2t0b3BcIlxyXG4gICAgICAgICAgICB9IG1iLTZgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICk7XHJcbn1cclxuY29uc3QgUG9zdExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCB7ICBjaGlsZHJlbn0gPSBwcm9wc1xyXG5cclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwibWFpblwiIHN0eWxlPXtsb2FkZWQgPyB7ZGlzcGxheTogJ2ZsZXgnfSA6IHtkaXNwbGF5OiAnbm9uZSd9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIHtjbG9zZX0gXHJcbiAgICAgICAgICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QmxvZ05hdi8+IFxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcblBvc3RMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgcGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxyXG59XHJcblxyXG5Qb3N0TGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHBhZ2VUcmFuc2l0aW9uUmVhZHlUb0VudGVyOiAoKSA9PiB7XHJcbiAgICB9LFxyXG59XHJcblxyXG5Qb3N0TGF5b3V0LnBhZ2VUcmFuc2l0aW9uRGVsYXlFbnRlciA9IHRydWVcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMYXlvdXQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aFBvc3RMYXlvdXQoQ29tcG9uZW50KSB7XHJcbiAgICBDb21wb25lbnQuTGF5b3V0ID0gUG9zdExheW91dFxyXG4gICAgcmV0dXJuIENvbXBvbmVudFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==