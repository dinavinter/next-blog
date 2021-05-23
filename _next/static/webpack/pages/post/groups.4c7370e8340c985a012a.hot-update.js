self["webpackHotUpdate_N_E"]("pages/post/groups",{

/***/ "./components/PostText.js":
/*!********************************!*\
  !*** ./components/PostText.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostSpeak": function() { return /* binding */ PostSpeak; },
/* harmony export */   "default": function() { return /* binding */ PostText; }
/* harmony export */ });
/* harmony import */ var D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_speech_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-speech-kit */ "./node_modules/react-speech-kit/dist/index.js");
/* harmony import */ var react_say__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-say */ "./node_modules/react-say/lib/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\dina\\demo\\next-app\\components\\PostText.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function PostSpeak(_ref) {
  _s();

  var text = _ref.text;

  // const synthesize = useSynthesize();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      pitch = _useState[0],
      setPitch = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      rate = _useState2[0],
      setRate = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      voiceIndex = _useState3[0],
      setVoiceIndex = _useState3[1];

  var onEnd = function onEnd() {// You could do something here after speaking has finished
  };

  var _useSpeechSynthesis = (0,react_speech_kit__WEBPACK_IMPORTED_MODULE_3__.useSpeechSynthesis)({
    onEnd: onEnd
  }),
      speak = _useSpeechSynthesis.speak,
      cancel = _useSpeechSynthesis.cancel,
      speaking = _useSpeechSynthesis.speaking,
      supported = _useSpeechSynthesis.supported,
      voices = _useSpeechSynthesis.voices;

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    speak({
      text: text
    });
    return function () {
      return cancel();
    };
  }, [text]);
  var voice = voices[voiceIndex] || null;
  return text && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: speaking ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        type: "button",
        onClick: cancel,
        children: "Stop"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        type: "button",
        onClick: function onClick() {
          return speak({
            text: text,
            voice: voice,
            rate: rate,
            pitch: pitch
          });
        },
        children: "Speak"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 20
  }, this);
}

_s(PostSpeak, "xImQH76sRznCG48vVPIq41JALNE=", false, function () {
  return [react_speech_kit__WEBPACK_IMPORTED_MODULE_3__.useSpeechSynthesis];
});

_c = PostSpeak;
function PostText(_ref2) {
  _s2();

  var _this = this;

  var text = _ref2.text;

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      pitch = _useState4[0],
      setPitch = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      rate = _useState5[0],
      setRate = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      voiceIndex = _useState6[0],
      setVoiceIndex = _useState6[1];

  var onEnd = function onEnd() {// You could do something here after speaking has finished
  };

  var _useSpeechSynthesis2 = (0,react_speech_kit__WEBPACK_IMPORTED_MODULE_3__.useSpeechSynthesis)({
    onEnd: onEnd
  }),
      speak = _useSpeechSynthesis2.speak,
      cancel = _useSpeechSynthesis2.cancel,
      speaking = _useSpeechSynthesis2.speaking,
      supported = _useSpeechSynthesis2.supported,
      voices = _useSpeechSynthesis2.voices;

  var voice = voices[voiceIndex] || null; // useEffect(() => {
  //     let cancelList=[];
  //     text
  //         .filter(t => t.speak)
  //         .forEach(t => {
  //             const { cancel } =speak({text: t.text});
  //             cancelList.push(cancel);
  //         });
  //
  //     return () => cancelList.forEach(cancel=>cancel());
  // }, [synthesize]);

  function TextElement(_ref3) {
    var title = _ref3.title,
        text = _ref3.text;
    return title ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      id: text,
      className: "center align-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: "minor align-center",
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 74
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 24
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      id: text,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 29
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, this);
  }

  return text && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: text.map(function (t) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        id: t.text,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextElement, _objectSpread({}, t), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PostSpeak, {
          text: t.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 28
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 9
  }, this);
}

_s2(PostText, "lIABgWF9N4wcljOXEaaMVbWit4c=", false, function () {
  return [react_speech_kit__WEBPACK_IMPORTED_MODULE_3__.useSpeechSynthesis];
});

_c2 = PostText;

var _c, _c2;

$RefreshReg$(_c, "PostSpeak");
$RefreshReg$(_c2, "PostText");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0VGV4dC5qcyJdLCJuYW1lcyI6WyJQb3N0U3BlYWsiLCJ0ZXh0IiwidXNlU3RhdGUiLCJwaXRjaCIsInNldFBpdGNoIiwicmF0ZSIsInNldFJhdGUiLCJ2b2ljZUluZGV4Iiwic2V0Vm9pY2VJbmRleCIsIm9uRW5kIiwidXNlU3BlZWNoU3ludGhlc2lzIiwic3BlYWsiLCJjYW5jZWwiLCJzcGVha2luZyIsInN1cHBvcnRlZCIsInZvaWNlcyIsInVzZUVmZmVjdCIsInZvaWNlIiwiUG9zdFRleHQiLCJUZXh0RWxlbWVudCIsInRpdGxlIiwibWFwIiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFNBQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87O0FBQzlCO0FBRDhCLGtCQUVKQywrQ0FBUSxDQUFDLENBQUQsQ0FGSjtBQUFBLE1BRXZCQyxLQUZ1QjtBQUFBLE1BRWhCQyxRQUZnQjs7QUFBQSxtQkFHTkYsK0NBQVEsQ0FBQyxDQUFELENBSEY7QUFBQSxNQUd2QkcsSUFIdUI7QUFBQSxNQUdqQkMsT0FIaUI7O0FBQUEsbUJBSU1KLCtDQUFRLENBQUMsSUFBRCxDQUpkO0FBQUEsTUFJdkJLLFVBSnVCO0FBQUEsTUFJWEMsYUFKVzs7QUFLOUIsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTSxDQUNoQjtBQUNILEdBRkQ7O0FBTDhCLDRCQVF1QkMsb0VBQWtCLENBQUM7QUFDcEVELFNBQUssRUFBTEE7QUFEb0UsR0FBRCxDQVJ6QztBQUFBLE1BUXZCRSxLQVJ1Qix1QkFRdkJBLEtBUnVCO0FBQUEsTUFRaEJDLE1BUmdCLHVCQVFoQkEsTUFSZ0I7QUFBQSxNQVFSQyxRQVJRLHVCQVFSQSxRQVJRO0FBQUEsTUFRRUMsU0FSRix1QkFRRUEsU0FSRjtBQUFBLE1BUWFDLE1B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QUFBQSxnQ0FDWCw4REFBQyxXQUFELG9CQUFpQnFCLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFcsZUFFWCw4REFBQyxTQUFEO0FBQVcsY0FBSSxFQUFFQSxDQUFDLENBQUNyQjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKO0FBQUEsS0FBVjtBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVdIOztJQTNDdUJpQixRO1VBT2lDUixnRTs7O01BUGpDUSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvZ3JvdXBzLjRjNzM3MGU4MzQwYzk4NWEwMTJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTcGVlY2hTeW50aGVzaXN9IGZyb20gJ3JlYWN0LXNwZWVjaC1raXQnO1xyXG5pbXBvcnQgU2F5LCB7dXNlU3ludGhlc2l6ZX0gZnJvbSAncmVhY3Qtc2F5JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RTcGVhayh7dGV4dH0pIHtcclxuICAgIC8vIGNvbnN0IHN5bnRoZXNpemUgPSB1c2VTeW50aGVzaXplKCk7XHJcbiAgICBjb25zdCBbcGl0Y2gsIHNldFBpdGNoXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbdm9pY2VJbmRleCwgc2V0Vm9pY2VJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IG9uRW5kID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFlvdSBjb3VsZCBkbyBzb21ldGhpbmcgaGVyZSBhZnRlciBzcGVha2luZyBoYXMgZmluaXNoZWRcclxuICAgIH07XHJcbiAgICBjb25zdCB7c3BlYWssIGNhbmNlbCwgc3BlYWtpbmcsIHN1cHBvcnRlZCwgdm9pY2VzfSA9IHVzZVNwZWVjaFN5bnRoZXNpcyh7XHJcbiAgICAgICAgb25FbmQsXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBcclxuICAgICAgICAgICAgICBzcGVhayh7dGV4dDogIHRleHR9KTsgXHJcbiAgICAgICAgcmV0dXJuICgpID0+ICBjYW5jZWwoKTtcclxuICAgIH0sIFt0ZXh0XSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHZvaWNlID0gdm9pY2VzW3ZvaWNlSW5kZXhdIHx8IG51bGw7XHJcbiBcclxuICAgIHJldHVybiB0ZXh0ICYmIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgICAge3NwZWFraW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2FuY2VsfT5cclxuICAgICAgICAgICAgICAgICAgICBTdG9wXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzcGVhayh7IHRleHQsIHZvaWNlLCByYXRlLCBwaXRjaCB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTcGVha1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0VGV4dCh7dGV4dH0pIHtcclxuICAgIGNvbnN0IFtwaXRjaCwgc2V0UGl0Y2hdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFt2b2ljZUluZGV4LCBzZXRWb2ljZUluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgb25FbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gWW91IGNvdWxkIGRvIHNvbWV0aGluZyBoZXJlIGFmdGVyIHNwZWFraW5nIGhhcyBmaW5pc2hlZFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHtzcGVhaywgY2FuY2VsLCBzcGVha2luZywgc3VwcG9ydGVkLCB2b2ljZXN9ID0gdXNlU3BlZWNoU3ludGhlc2lzKHtcclxuICAgICAgICBvbkVuZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHZvaWNlID0gdm9pY2VzW3ZvaWNlSW5kZXhdIHx8IG51bGw7XHJcblxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgbGV0IGNhbmNlbExpc3Q9W107XHJcbiAgICAvLyAgICAgdGV4dFxyXG4gICAgLy8gICAgICAgICAuZmlsdGVyKHQgPT4gdC5zcGVhaylcclxuICAgIC8vICAgICAgICAgLmZvckVhY2godCA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zdCB7IGNhbmNlbCB9ID1zcGVhayh7dGV4dDogdC50ZXh0fSk7XHJcbiAgICAvLyAgICAgICAgICAgICBjYW5jZWxMaXN0LnB1c2goY2FuY2VsKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHJldHVybiAoKSA9PiBjYW5jZWxMaXN0LmZvckVhY2goY2FuY2VsPT5jYW5jZWwoKSk7XHJcbiAgICAvLyB9LCBbc3ludGhlc2l6ZV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIFRleHRFbGVtZW50KHt0aXRsZSwgdGV4dH0pIHtcclxuICAgICAgICByZXR1cm4gdGl0bGUgPyA8c3BhbiBpZD17dGV4dH0gY2xhc3NOYW1lPXtcImNlbnRlciBhbGlnbi1jZW50ZXJcIn0+PGgxXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5vciBhbGlnbi1jZW50ZXJcIj57dGV4dH08L2gxPjwvc3Bhbj4gOlxyXG4gICAgICAgICAgICA8c3BhbiBpZD17dGV4dH0+PGgzPnt0ZXh0fTwvaDM+PC9zcGFuPjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dCAmJiAgXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIHt0ZXh0Lm1hcCh0ID0+IDxkaXYgaWQ9e3QudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEVsZW1lbnQgey4uLnR9IC8+XHJcbiAgICAgICAgICAgICAgICA8UG9zdFNwZWFrIHRleHQ9e3QudGV4dH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9