self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\dina\\demo\\next-app\\components\\Post.js",
    _s = $RefreshSig$();






function Motion(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      icon = _ref.icon,
      isLeftAligned = _ref.isLeftAligned,
      color = _ref.color,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
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
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

_c = Motion;
function Post(_ref2) {
  _s();

  var children = _ref2.children,
      video = _ref2.video,
      title = _ref2.title;

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
    lineNumber: 28,
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
          lineNumber: 39,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
            lineNumber: 54,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: "".concat(active === 'video' ? 'active' : '', " timeout"),
            style: {
              display: textDisplay
            },
            url: "https://www.youtube.com/watch?v=".concat(video, "&html5=true")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 12
  }, this);
}

_s(Post, "+Aa34lqVRLnUYq5pSJg0TFkOfjU=");

_c2 = Post;

var _c, _c2;

$RefreshReg$(_c, "Motion");
$RefreshReg$(_c2, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sIm5hbWVzIjpbIk1vdGlvbiIsInRpdGxlIiwic3VidGl0bGUiLCJpY29uIiwiaXNMZWZ0QWxpZ25lZCIsImNvbG9yIiwiY2hpbGRyZW4iLCJzY2FsZSIsIm9wYWNpdHkiLCJkZWxheSIsIlBvc3QiLCJ2aWRlbyIsInVzZVN0YXRlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiZ29Ub1ZpZGVvIiwidGV4dERpc3BsYXkiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLE1BQVQsT0FBeUU7QUFBQSxNQUF4REMsS0FBd0QsUUFBeERBLEtBQXdEO0FBQUEsTUFBakRDLFFBQWlELFFBQWpEQSxRQUFpRDtBQUFBLE1BQXZDQyxJQUF1QyxRQUF2Q0EsSUFBdUM7QUFBQSxNQUFqQ0MsYUFBaUMsUUFBakNBLGFBQWlDO0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVztBQUNyRSxzQkFDSSw4REFBQyxxREFBRDtBQUNJLFdBQU8sRUFBRTtBQUFFQyxXQUFLLEVBQUUsQ0FBVDtBQUFZQyxhQUFPLEVBQUU7QUFBckIsS0FEYjtBQUVJLFdBQU8sRUFBRTtBQUFFRCxXQUFLLEVBQUUsQ0FBVDtBQUFZQyxhQUFPLEVBQUU7QUFBckIsS0FGYjtBQUdJLGNBQVUsRUFBRTtBQUNSQyxXQUFLLEVBQUU7QUFEQyxLQUhoQjtBQU1JLGFBQVMsWUFDTEwsYUFBYSxHQUFHLHVCQUFILEdBQTZCLHdCQURyQyxVQU5iO0FBQUEsY0FVS0U7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSDs7S0FmUU4sTTtBQWtCTSxTQUFTVSxJQUFULFFBQXdDO0FBQUE7O0FBQUEsTUFBekJKLFFBQXlCLFNBQXpCQSxRQUF5QjtBQUFBLE1BQWZLLEtBQWUsU0FBZkEsS0FBZTtBQUFBLE1BQVJWLEtBQVEsU0FBUkEsS0FBUTs7QUFBQSxrQkFFdkJXLCtDQUFRLENBQUMsTUFBRCxDQUZlO0FBQUEsTUFFNUNDLE1BRjRDO0FBQUEsTUFFcENDLFNBRm9DOztBQUduRCxNQUFJQyxTQUFTLGdCQUFHO0FBQUssYUFBUyxFQUFFLFVBQWhCO0FBQTRCLFdBQU8sRUFBRSxtQkFBTTtBQUN2REQsZUFBUyxDQUFDLE9BQUQsQ0FBVDtBQUNIO0FBRmU7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFoQjs7QUFLQSxNQUFNRSxXQUFXLEdBQUdILE1BQU0sS0FBSyxNQUFYLEdBQW9CLE9BQXBCLEdBQThCLE1BQWxEO0FBQ0Esc0JBQU8sOERBQUMsMkRBQUQ7QUFBQSwyQkFDSDtBQUFLLFFBQUUsRUFBQyxXQUFSO0FBQW9CLGVBQVMsRUFBRSx1QkFBL0I7QUFBQSw4QkFHSSw4REFBQyxNQUFEO0FBQUEsK0JBQ0k7QUFBSyxZQUFFLGNBQVA7QUFDSyxtQkFBUywyQ0FBb0NBLE1BQU0sS0FBSyxNQUFYLEdBQW9CLFFBQXBCLEdBQStCLEVBQW5FLGFBRGQ7QUFFSyxlQUFLLEVBQUU7QUFBQ0ksbUJBQU8sRUFBRUQsV0FBVjtBQUF1Qiw2QkFBaUI7QUFBeEMsV0FGWjtBQUFBLG9CQUlLVjtBQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFjSSw4REFBQyxNQUFEO0FBQ0ksVUFBRSxnQkFETjtBQUVJLGlCQUFTLEVBQUUsdUJBRmY7QUFBQSwrQkFJSTtBQUFBLGtDQUNJO0FBQUcsZ0JBQUksRUFBRUssS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJLDhEQUFDLGlEQUFEO0FBQWEscUJBQVMsWUFBS0UsTUFBTSxLQUFLLE9BQVgsR0FBcUIsUUFBckIsR0FBZ0MsRUFBckMsYUFBdEI7QUFDYSxpQkFBSyxFQUFFO0FBQUNJLHFCQUFPLEVBQUVEO0FBQVYsYUFEcEI7QUFFYSxlQUFHLDRDQUFxQ0wsS0FBckM7QUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBa0NIOztHQTNDdUJELEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjdmNzViNDZhMjAxNjYzOGIzZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcclxuaW1wb3J0IFBvc3RMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdExheW91dFwiO1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcblxyXG5mdW5jdGlvbiBNb3Rpb24oe3RpdGxlLCBzdWJ0aXRsZSwgaWNvbiwgaXNMZWZ0QWxpZ25lZCwgY29sb3IsIGNoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IHNjYWxlOiAwLCBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgc2NhbGU6IDEsIG9wYWNpdHk6IDEgfX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDAuMyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgIGlzTGVmdEFsaWduZWQgPyBcImhhcy10ZXh0LWxlZnQtZGVza3RvcFwiIDogXCJoYXMtdGV4dC1yaWdodC1kZXNrdG9wXCJcclxuICAgICAgICAgICAgfSBtYi02YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7Y2hpbGRyZW4sIHZpZGVvLCB0aXRsZX0pIHtcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoJ3RleHQnKVxyXG4gICAgbGV0IGdvVG9WaWRlbyA9IDxkaXYgY2xhc3NOYW1lPXtcIm1pbmltaXplXCJ9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmUoJ3ZpZGVvJylcclxuICAgIH19Lz5cclxuXHJcblxyXG4gICAgY29uc3QgdGV4dERpc3BsYXkgPSBhY3RpdmUgPT09ICd0ZXh0JyA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgICByZXR1cm4gPFBvc3RMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBpZD1cInZpZGVvX2JveFwiIGNsYXNzTmFtZT17J2NlbnRlciBhY3RpdmUgdGltZW91dCd9PlxyXG5cclxuICAgICAgICAgICAgey8qPFRleHQgdGl0bGU9e2NoaWxkcmVuWzBdfSBzdWJ0aXRsZT17Y2hpbGRyZW4uc2xpY2UoMSwgY2hpbGRyZW4ubGVuZ3RoLTIpfSAvPiovfVxyXG4gICAgICAgICAgICA8TW90aW9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD17YHZpZGVvLXRleHRgfVxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BsZWZ0IGFsaWduLWxlZnQgdmlkZW9fb3ZlcmxheXMgJHthY3RpdmUgPT09ICd0ZXh0JyA/ICdhY3RpdmUnIDogJyd9IHRpbWVvdXRgfVxyXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IHRleHREaXNwbGF5LCAndmVydGljYWxBbGlnbic6IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8VGV4dExvb3AgIHNwcmluZ0NvbmZpZz17eyBzdGlmZm5lc3M6IDIwMCwgZGFtcGluZzogMTAgfX0gbWFzaz17dHJ1ZX0gaW50ZXJ2YWw9ezIwMDB9ID4qL31cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgey8qPC9UZXh0TG9vcD4qL31cclxuICAgICAgICAgICAgICAgICAgICB7Lyp7Z29Ub1ZpZGVvfSovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L01vdGlvbj5cclxuICAgICAgICAgICAgPE1vdGlvblxyXG4gICAgICAgICAgICAgICAgaWQ9e2B2aWRlby1wbGF5ZXJgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnY2VudGVyIGFjdGl2ZSB0aW1lb3V0J31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt2aWRlb30+V2F0Y2ggSW4gWW91VHViZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXIgY2xhc3NOYW1lPXtgJHthY3RpdmUgPT09ICd2aWRlbycgPyAnYWN0aXZlJyA6ICcnfSB0aW1lb3V0YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiB0ZXh0RGlzcGxheX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9JHt2aWRlb30maHRtbDU9dHJ1ZWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L01vdGlvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1Bvc3RMYXlvdXQ+XHJcblxyXG59XHJcblxyXG4gIl0sInNvdXJjZVJvb3QiOiIifQ==