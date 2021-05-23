self["webpackHotUpdate_N_E"]("pages/_app",{

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

  var _this = this;

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

  var voice = voices[voiceIndex] || null;
  var styleFlexRow = {
    display: 'flex',
    flexDirection: 'row'
  };
  var styleContainerRatePitch = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 12
  }; // useEffect(() => {
  //     let cancelList=[];
  //     text
  //         .filter(t => t.speak)
  //         .forEach(t => {
  //             const { cancel } =synthesize({text: t.text});
  //             cancelList.push(cancel);
  //         });
  //
  //     return () => cancelList.forEach(cancel=>cancel());
  // }, [synthesize]);

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    speak('A quick brown fox jumped over the lazy dogs.'); // When this component is unmounted, the synthesis will be cancelled.
  }, []);

  function TextElement(_ref2) {
    var title = _ref2.title,
        text = _ref2.text;
    return title ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      id: text,
      className: "center align-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: "minor align-center",
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 74
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 24
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      id: text,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 29
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this);
  }

  return text && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [text.map(function (t) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          id: t.text,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextElement, _objectSpread({}, t), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 45
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 28
        }, _this);
      }), speaking ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        type: "button",
        onClick: cancel,
        children: "Stop"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
        lineNumber: 67,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 20
  }, this);
}

_s(PostSpeak, "xImQH76sRznCG48vVPIq41JALNE=", false, function () {
  return [react_speech_kit__WEBPACK_IMPORTED_MODULE_3__.useSpeechSynthesis];
});

_c = PostSpeak;
function PostText(_ref3) {
  _s2();

  var _this2 = this;

  var text = _ref3.text;

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

  function TextElement(_ref4) {
    var title = _ref4.title,
        text = _ref4.text;
    return title ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      id: text,
      className: "center align-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: "minor align-center",
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 74
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 24
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      id: text,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 29
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this);
  }

  return text && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [text.map(function (t) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          id: t.text,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextElement, _objectSpread({}, t), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 45
          }, _this2)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 28
        }, _this2);
      }), speaking ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        type: "button",
        onClick: cancel,
        children: "Stop"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
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
        lineNumber: 124,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 20
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0VGV4dC5qcyJdLCJuYW1lcyI6WyJQb3N0U3BlYWsiLCJ0ZXh0IiwidXNlU3RhdGUiLCJwaXRjaCIsInNldFBpdGNoIiwicmF0ZSIsInNldFJhdGUiLCJ2b2ljZUluZGV4Iiwic2V0Vm9pY2VJbmRleCIsIm9uRW5kIiwidXNlU3BlZWNoU3ludGhlc2lzIiwic3BlYWsiLCJjYW5jZWwiLCJzcGVha2luZyIsInN1cHBvcnRlZCIsInZvaWNlcyIsInZvaWNlIiwic3R5bGVGbGV4Um93IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJzdHlsZUNvbnRhaW5lclJhdGVQaXRjaCIsIm1hcmdpbkJvdHRvbSIsInVzZUVmZmVjdCIsIlRleHRFbGVtZW50IiwidGl0bGUiLCJtYXAiLCJ0IiwiUG9zdFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULE9BQTJCO0FBQUE7O0FBQUE7O0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPOztBQUM5QjtBQUQ4QixrQkFFSkMsK0NBQVEsQ0FBQyxDQUFELENBRko7QUFBQSxNQUV2QkMsS0FGdUI7QUFBQSxNQUVoQkMsUUFGZ0I7O0FBQUEsbUJBR05GLCtDQUFRLENBQUMsQ0FBRCxDQUhGO0FBQUEsTUFHdkJHLElBSHVCO0FBQUEsTUFHakJDLE9BSGlCOztBQUFBLG1CQUlNSiwrQ0FBUSxDQUFDLElBQUQsQ0FKZDtBQUFBLE1BSXZCSyxVQUp1QjtBQUFBLE1BSVhDLGFBSlc7O0FBSzlCLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU0sQ0FDaEI7QUFDSCxHQUZEOztBQUw4Qiw0QkFRdUJDLG9FQUFrQixDQUFDO0FBQ3BFRCxTQUFLLEVBQUxBO0FBRG9FLEdBQUQsQ0FSekM7QUFBQSxNQVF2QkUsS0FSdUIsdUJBUXZCQSxLQVJ1QjtBQUFBLE1BUWhCQyxN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QUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFKO0FBQUEsT0FBVixDQUZMLEVBUUtiLFFBQVEsZ0JBQ0w7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUVELE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREssZ0JBS0w7QUFDSSxZQUFJLEVBQUMsUUFEVDtBQUVJLGVBQU8sRUFBRTtBQUFBLGlCQUFNRCxLQUFLLENBQUM7QUFBRVYsZ0JBQUksRUFBSkEsSUFBRjtBQUFRZSxpQkFBSyxFQUFMQSxLQUFSO0FBQWVYLGdCQUFJLEVBQUpBLElBQWY7QUFBcUJGLGlCQUFLLEVBQUxBO0FBQXJCLFdBQUQsQ0FBWDtBQUFBLFNBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWY7QUF1Qkg7O0lBdkR1QndCLFE7VUFPaUNqQixnRTs7O01BUGpDaUIsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmNiYjM2Mjk5MjUxMDlhNGFjZmQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTcGVlY2hTeW50aGVzaXN9IGZyb20gJ3JlYWN0LXNwZWVjaC1raXQnO1xyXG5pbXBvcnQgU2F5LCB7dXNlU3ludGhlc2l6ZX0gZnJvbSAncmVhY3Qtc2F5JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RTcGVhayh7dGV4dH0pIHtcclxuICAgIC8vIGNvbnN0IHN5bnRoZXNpemUgPSB1c2VTeW50aGVzaXplKCk7XHJcbiAgICBjb25zdCBbcGl0Y2gsIHNldFBpdGNoXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbdm9pY2VJbmRleCwgc2V0Vm9pY2VJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IG9uRW5kID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFlvdSBjb3VsZCBkbyBzb21ldGhpbmcgaGVyZSBhZnRlciBzcGVha2luZyBoYXMgZmluaXNoZWRcclxuICAgIH07XHJcbiAgICBjb25zdCB7c3BlYWssIGNhbmNlbCwgc3BlYWtpbmcsIHN1cHBvcnRlZCwgdm9pY2VzfSA9IHVzZVNwZWVjaFN5bnRoZXNpcyh7XHJcbiAgICAgICAgb25FbmQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB2b2ljZSA9IHZvaWNlc1t2b2ljZUluZGV4XSB8fCBudWxsO1xyXG5cclxuICAgIGNvbnN0IHN0eWxlRmxleFJvdyA9IHtkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnfTtcclxuICAgIGNvbnN0IHN0eWxlQ29udGFpbmVyUmF0ZVBpdGNoID0ge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDEyLFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBsZXQgY2FuY2VsTGlzdD1bXTtcclxuICAgIC8vICAgICB0ZXh0XHJcbiAgICAvLyAgICAgICAgIC5maWx0ZXIodCA9PiB0LnNwZWFrKVxyXG4gICAgLy8gICAgICAgICAuZm9yRWFjaCh0ID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IHsgY2FuY2VsIH0gPXN5bnRoZXNpemUoe3RleHQ6IHQudGV4dH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgY2FuY2VsTGlzdC5wdXNoKGNhbmNlbCk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gKCkgPT4gY2FuY2VsTGlzdC5mb3JFYWNoKGNhbmNlbD0+Y2FuY2VsKCkpO1xyXG4gICAgLy8gfSwgW3N5bnRoZXNpemVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNwZWFrKCdBIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2dzLicpO1xyXG5cclxuICAgICAgICAvLyBXaGVuIHRoaXMgY29tcG9uZW50IGlzIHVubW91bnRlZCwgdGhlIHN5bnRoZXNpcyB3aWxsIGJlIGNhbmNlbGxlZC5cclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gVGV4dEVsZW1lbnQoe3RpdGxlLCB0ZXh0fSkge1xyXG4gICAgICAgIHJldHVybiB0aXRsZSA/IDxzcGFuIGlkPXt0ZXh0fSBjbGFzc05hbWU9e1wiY2VudGVyIGFsaWduLWNlbnRlclwifT48aDFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbm9yIGFsaWduLWNlbnRlclwiPnt0ZXh0fTwvaDE+PC9zcGFuPiA6XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPXt0ZXh0fT48aDM+e3RleHR9PC9oMz48L3NwYW4+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0ICYmIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAge3RleHQubWFwKHQgPT4gPGRpdiBpZD17dC50ZXh0fT48VGV4dEVsZW1lbnQgey4uLnR9IC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3NwZWFraW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2FuY2VsfT5cclxuICAgICAgICAgICAgICAgICAgICBTdG9wXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzcGVhayh7IHRleHQsIHZvaWNlLCByYXRlLCBwaXRjaCB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTcGVha1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0VGV4dCh7dGV4dH0pIHtcclxuICAgIGNvbnN0IFtwaXRjaCwgc2V0UGl0Y2hdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFt2b2ljZUluZGV4LCBzZXRWb2ljZUluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgb25FbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gWW91IGNvdWxkIGRvIHNvbWV0aGluZyBoZXJlIGFmdGVyIHNwZWFraW5nIGhhcyBmaW5pc2hlZFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHtzcGVhaywgY2FuY2VsLCBzcGVha2luZywgc3VwcG9ydGVkLCB2b2ljZXN9ID0gdXNlU3BlZWNoU3ludGhlc2lzKHtcclxuICAgICAgICBvbkVuZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHZvaWNlID0gdm9pY2VzW3ZvaWNlSW5kZXhdIHx8IG51bGw7XHJcblxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgbGV0IGNhbmNlbExpc3Q9W107XHJcbiAgICAvLyAgICAgdGV4dFxyXG4gICAgLy8gICAgICAgICAuZmlsdGVyKHQgPT4gdC5zcGVhaylcclxuICAgIC8vICAgICAgICAgLmZvckVhY2godCA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zdCB7IGNhbmNlbCB9ID1zcGVhayh7dGV4dDogdC50ZXh0fSk7XHJcbiAgICAvLyAgICAgICAgICAgICBjYW5jZWxMaXN0LnB1c2goY2FuY2VsKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHJldHVybiAoKSA9PiBjYW5jZWxMaXN0LmZvckVhY2goY2FuY2VsPT5jYW5jZWwoKSk7XHJcbiAgICAvLyB9LCBbc3ludGhlc2l6ZV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIFRleHRFbGVtZW50KHt0aXRsZSwgdGV4dH0pIHtcclxuICAgICAgICByZXR1cm4gdGl0bGUgPyA8c3BhbiBpZD17dGV4dH0gY2xhc3NOYW1lPXtcImNlbnRlciBhbGlnbi1jZW50ZXJcIn0+PGgxXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5vciBhbGlnbi1jZW50ZXJcIj57dGV4dH08L2gxPjwvc3Bhbj4gOlxyXG4gICAgICAgICAgICA8c3BhbiBpZD17dGV4dH0+PGgzPnt0ZXh0fTwvaDM+PC9zcGFuPjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dCAmJiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIHt0ZXh0Lm1hcCh0ID0+IDxkaXYgaWQ9e3QudGV4dH0+PFRleHRFbGVtZW50IHsuLi50fSAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtzcGVha2luZyA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2NhbmNlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgU3RvcFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3BlYWsoeyB0ZXh0LCB2b2ljZSwgcmF0ZSwgcGl0Y2ggfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU3BlYWtcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=