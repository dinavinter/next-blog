self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/List.js":
/*!****************************!*\
  !*** ./components/List.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "Item": function() { return /* binding */ Item; },
/* harmony export */   "openSpring": function() { return /* binding */ openSpring; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _Layout_BlogNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout/BlogNav */ "./components/Layout/BlogNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\dina\\demo\\next-app\\components\\List.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Card(_ref) {
  var id = _ref.id,
      title = _ref.title,
      category = _ref.category,
      theme = _ref.theme,
      render = _ref.render,
      href = _ref.href;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "card ".concat(theme),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-content-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
        className: "card-content",
        layoutId: "card-container-".concat(id),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
          className: "title-container",
          layoutId: "title-container-".concat(id),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "category",
            children: category
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
          className: "card-image-container",
          layoutId: "card-image-container-".concat(id),
          children: render
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: href,
      className: "card-open-link"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

_c = Card;
function List(_ref2) {
  _s();

  var _this = this;

  var href = _ref2.href;
  var items = (0,_Layout_BlogNav__WEBPACK_IMPORTED_MODULE_3__.usePosts)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: "card-list",
    children: items.map(function (card) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, _objectSpread(_objectSpread({}, card), {}, {
        isSelected: card.href === selectedId
      }), card.id, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

_s(List, "rMYXVeldSWEu2HrWs3MbtwtMpWw=", false, function () {
  return [_Layout_BlogNav__WEBPACK_IMPORTED_MODULE_3__.usePosts];
});

_c2 = List;
function Item(_ref3) {
  _s2();

  var id = _ref3.id;
  var items = (0,_Layout_BlogNav__WEBPACK_IMPORTED_MODULE_3__.usePosts)();

  var _items$find = items.find(function (item) {
    return item.href === id;
  }),
      category = _items$find.category,
      title = _items$find.title,
      render = _items$find.render;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.15
        }
      },
      transition: {
        duration: 0.2,
        delay: 0.15
      },
      style: {
        pointerEvents: "auto"
      },
      className: "overlay",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        to: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-content-container open",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
        className: "card-content",
        layoutId: "card-container-".concat(id),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
          className: "title-container",
          layoutId: "title-container-".concat(id),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "category",
            children: category
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
          className: "content-container",
          animate: true,
          children: render
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s2(Item, "rMYXVeldSWEu2HrWs3MbtwtMpWw=", false, function () {
  return [_Layout_BlogNav__WEBPACK_IMPORTED_MODULE_3__.usePosts];
});

_c3 = Item;
;
var openSpring = {
  type: "spring",
  stiffness: 200,
  damping: 30
};

var _c, _c2, _c3;

$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "List");
$RefreshReg$(_c3, "Item");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0LmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJpZCIsInRpdGxlIiwiY2F0ZWdvcnkiLCJ0aGVtZSIsInJlbmRlciIsImhyZWYiLCJMaXN0IiwiaXRlbXMiLCJ1c2VQb3N0cyIsIm1hcCIsImNhcmQiLCJzZWxlY3RlZElkIiwiSXRlbSIsImZpbmQiLCJpdGVtIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwicG9pbnRlckV2ZW50cyIsIm9wZW5TcHJpbmciLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0M7QUFDRDtBQUNBOztBQUVBLFNBQVNBLElBQVQsT0FBNEQ7QUFBQSxNQUE1Q0MsRUFBNEMsUUFBNUNBLEVBQTRDO0FBQUEsTUFBeENDLEtBQXdDLFFBQXhDQSxLQUF3QztBQUFBLE1BQWpDQyxRQUFpQyxRQUFqQ0EsUUFBaUM7QUFBQSxNQUF2QkMsS0FBdUIsUUFBdkJBLEtBQXVCO0FBQUEsTUFBaEJDLE1BQWdCLFFBQWhCQSxNQUFnQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUV4RCxzQkFDSTtBQUFJLGFBQVMsaUJBQVVGLEtBQVYsQ0FBYjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUEsNkJBQ0ksOERBQUMscURBQUQ7QUFBWSxpQkFBUyxFQUFDLGNBQXRCO0FBQXFDLGdCQUFRLDJCQUFvQkgsRUFBcEIsQ0FBN0M7QUFBQSxnQ0FFSSw4REFBQyxxREFBRDtBQUNJLG1CQUFTLEVBQUMsaUJBRGQ7QUFFSSxrQkFBUSw0QkFBcUJBLEVBQXJCLENBRlo7QUFBQSxrQ0FJSTtBQUFNLHFCQUFTLEVBQUMsVUFBaEI7QUFBQSxzQkFBNEJFO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSTtBQUFBLHNCQUFLRDtBQUFMO0FB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QjtBQUEwQyxpQkFBTyxNQUFqRDtBQUFBLG9CQUNLRztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUEsa0JBREo7QUE0QkU7O0lBakNjUSxJO1VBQ0FKLHFEOzs7TUFEQUksSTtBQWlDZDtBQUdLLElBQU1RLFVBQVUsR0FBRztBQUFFQyxNQUFJLEVBQUUsUUFBUjtBQUFrQkMsV0FBUyxFQUFFLEdBQTdCO0FBQWtDQyxTQUFPLEVBQUU7QUFBM0MsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmQzNjYyZTQ0OTRkMmY4YzViNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuIGltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7dXNlUG9zdHN9IGZyb20gXCIuL0xheW91dC9CbG9nTmF2XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIENhcmQoeyBpZCwgdGl0bGUsIGNhdGVnb3J5LCB0aGVtZSwgcmVuZGVyLCBocmVmIH0pIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgY2FyZCAke3RoZW1lfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiIGxheW91dElkPXtgY2FyZC1jb250YWluZXItJHtpZH1gfT5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdGxlLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dElkPXtgdGl0bGUtY29udGFpbmVyLSR7aWR9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+e2NhdGVnb3J5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltYWdlLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dElkPXtgY2FyZC1pbWFnZS1jb250YWluZXItJHtpZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtocmVmfSBjbGFzc05hbWU9e2BjYXJkLW9wZW4tbGlua2B9IC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaXN0KHsgaHJlZiB9KSB7XHJcbiAgICBjb25zdCBpdGVtcz11c2VQb3N0cygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZC1saXN0XCI+XHJcbiAgICAgICAgICAgIHtpdGVtcy5tYXAoY2FyZCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2NhcmQuaWR9IHsuLi5jYXJkfSBpc1NlbGVjdGVkPXtjYXJkLmhyZWYgPT09IHNlbGVjdGVkSWR9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSXRlbSh7IGlkIH0pIHtcclxuICAgIGNvbnN0IGl0ZW1zPXVzZVBvc3RzKCk7XHJcblxyXG4gICAgY29uc3QgeyBjYXRlZ29yeSwgdGl0bGUsIHJlbmRlciB9ID0gaXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaHJlZiA9PT0gaWQpO1xyXG5cclxucmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMTUgfSB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIsIGRlbGF5OiAwLjE1IH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBvaW50ZXJFdmVudHM6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJsYXlcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgLz5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQtY29udGFpbmVyIG9wZW5cIj5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCIgbGF5b3V0SWQ9e2BjYXJkLWNvbnRhaW5lci0ke2lkfWB9PiBcclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0bGUtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXRJZD17YHRpdGxlLWNvbnRhaW5lci0ke2lkfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj57Y2F0ZWdvcnl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIiBhbmltYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4pfTtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgb3BlblNwcmluZyA9IHsgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiAyMDAsIGRhbXBpbmc6IDMwIH07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9