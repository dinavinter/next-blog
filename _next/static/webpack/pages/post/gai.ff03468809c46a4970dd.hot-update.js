self["webpackHotUpdate_N_E"]("pages/post/gai",{

/***/ "./components/PostText.js":
/*!********************************!*\
  !*** ./components/PostText.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakIcon": function() { return /* binding */ SpeakIcon; },
/* harmony export */   "PostSpeak": function() { return /* binding */ PostSpeak; },
/* harmony export */   "default": function() { return /* binding */ PostText; }
/* harmony export */ });
/* harmony import */ var D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_speech_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-speech-kit */ "./node_modules/react-speech-kit/dist/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\dina\\demo\\next-app\\components\\PostText.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function SpeakIcon(_ref) {
  var speaking = _ref.speaking;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "30",
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      className: "icon",
      d: "M30.148 5.588c-2.934-3.42-7.288-5.588-12.148-5.588-8.837 0-16 7.163-16 16s7.163 16 16 16c4.86 0 9.213-2.167 12.148-5.588l-10.148-10.412 10.148-10.412zM22 3.769c1.232 0 2.231 0.999 2.231 2.231s-0.999 2.231-2.231 2.231-2.231-0.999-2.231-2.231c0-1.232 0.999-2.231 2.231-2.231z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}
_c = SpeakIcon;
function PostSpeak(_ref2) {
  _s();

  var _this = this;

  var text = _ref2.text,
      start = _ref2.start;

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

  var onEnd = function onEnd() {
    if (next) next();
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
  }, [start]);
  var voice = voices[voiceIndex] || null;
  return text && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: voices.map(function (voice) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: ["   ", "".concat(voice.name, " (").concat(voice.lang, ") ").concat(voice.voiceURI)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 12
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: speaking ?
      /*#__PURE__*/
      // <img width="20" height="30" src={`${process.env.BACKEND_URL}/images/microphone.svg`} onClick={cancel}  alt="Italian Trulli"/>
      //  <div className={'mic'} onClick={cancel}   /
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakIcon, {
        speaking: speaking,
        onClick: cancel
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
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
        lineNumber: 45,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 20
  }, this);
}

_s(PostSpeak, "xImQH76sRznCG48vVPIq41JALNE=", false, function () {
  return [react_speech_kit__WEBPACK_IMPORTED_MODULE_3__.useSpeechSynthesis];
});

_c2 = PostSpeak;
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
        lineNumber: 83,
        columnNumber: 74
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 24
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      id: text,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 29
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, this);
  }

  return text && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PostSpeak, {
      text: text.filter(function (t) {
        return t.speak;
      }).map(function (t) {
        return t.text;
      }).join('')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, this), text.map(function (t) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        id: t.text,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextElement, _objectSpread({}, t), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 17
        }, _this2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 28
      }, _this2);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 9
  }, this);
}

_s2(PostText, "lIABgWF9N4wcljOXEaaMVbWit4c=", false, function () {
  return [react_speech_kit__WEBPACK_IMPORTED_MODULE_3__.useSpeechSynthesis];
});

_c3 = PostText;

var _c, _c2, _c3;

$RefreshReg$(_c, "SpeakIcon");
$RefreshReg$(_c2, "PostSpeak");
$RefreshReg$(_c3, "PostText");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0VGV4dC5qcyJdLCJuYW1lcyI6WyJTcGVha0ljb24iLCJzcGVha2luZyIsIlBvc3RTcGVhayIsInRleHQiLCJzdGFydCIsInVzZVN0YXRlIiwicGl0Y2giLCJzZXRQaXRjaCIsInJhdGUiLCJzZXRSYXRlIiwidm9pY2VJbmRleCIsInNldFZvaWNlSW5kZXgiLCJvbkVuZCIsIm5leHQiLCJ1c2VTcGVlY2hTeW50aGVzaXMiLCJzcGVhayIsImNhbmNlbCIsInN1cHBvcnRlZCIsInZvaWNlcyIsInVzZUVmZmVjdCIsInZvaWNlIiwibWFwIiwibmFtZSIsImxhbmciLCJ2b2ljZVVSSSIsIlBvc3RUZXh0IiwiVGV4dEVsZW1lbnQiLCJ0aXRsZSIsImZpbHRlciIsInQiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sU0FBU0EsU0FBVCxPQUE4QjtBQUFBLE1BQVZDLFFBQVUsUUFBVkEsUUFBVTtBQUNqQyxzQkFBTztBQUFLLFdBQU8sRUFBQyxLQUFiO0FBQW1CLFNBQUssRUFBQyw0QkFBekI7QUFBdUQsU0FBSyxFQUFDLElBQTdEO0FBQ0YsVUFBTSxFQUFDLElBREw7QUFDVSxXQUFPLEVBQUMsV0FEbEI7QUFBQSwyQkFFSDtBQUFNLGVBQVMsRUFBQyxNQUFoQjtBQUNKLE9BQUMsRUFBQztBQURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFNSDtLQVBlRCxTO0FBU1QsU0FBU0UsU0FBVCxRQUFrQztBQUFBOztBQUFBOztBQUFBLE1BQWRDLElBQWMsU0FBZEEsSUFBYztBQUFBLE1BQVJDLEtBQVEsU0FBUkEsS0FBUTs7QUFDckM7QUFEcUMsa0JBRVhDLCtDQUFRLENBQUMsQ0FBRCxDQUZHO0FBQUEsTUFFOUJDLEtBRjhCO0FBQUEsTUFFdkJDLFFBRnVCOztBQUFBLG1CQUdiRiwrQ0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUo7QUFBQSxLQUFWLENBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7SUE1Q3VCSixRO1VBT2lDWCxnRTs7O01BUGpDVyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvZ2FpLmZmMDM0Njg4MDljNDZhNDk3MGRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTcGVlY2hTeW50aGVzaXN9IGZyb20gJ3JlYWN0LXNwZWVjaC1raXQnOyBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTcGVha0ljb24oe3NwZWFraW5nfSl7XHJcbiAgICByZXR1cm4gPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgaGVpZ2h0PVwiMzBcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+XHJcbiAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiaWNvblwiXHJcbiAgICBkPVwiTTMwLjE0OCA1LjU4OGMtMi45MzQtMy40Mi03LjI4OC01LjU4OC0xMi4xNDgtNS41ODgtOC44MzcgMC0xNiA3LjE2My0xNiAxNnM3LjE2MyAxNiAxNiAxNmM0Ljg2IDAgOS4yMTMtMi4xNjcgMTIuMTQ4LTUuNTg4bC0xMC4xNDgtMTAuNDEyIDEwLjE0OC0xMC40MTJ6TTIyIDMuNzY5YzEuMjMyIDAgMi4yMzEgMC45OTkgMi4yMzEgMi4yMzFzLTAuOTk5IDIuMjMxLTIuMjMxIDIuMjMxLTIuMjMxLTAuOTk5LTIuMjMxLTIuMjMxYzAtMS4yMzIgMC45OTktMi4yMzEgMi4yMzEtMi4yMzF6XCIvPlxyXG4gICAgPC9zdmc+XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9zdFNwZWFrKHt0ZXh0LCBzdGFydH0pIHtcclxuICAgIC8vIGNvbnN0IHN5bnRoZXNpemUgPSB1c2VTeW50aGVzaXplKCk7XHJcbiAgICBjb25zdCBbcGl0Y2gsIHNldFBpdGNoXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbdm9pY2VJbmRleCwgc2V0Vm9pY2VJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IG9uRW5kID0gKCkgPT4ge1xyXG4gICAgICAgaWYobmV4dCkgbmV4dCgpXHJcbiAgICAgfTtcclxuICAgIGNvbnN0IHtzcGVhaywgY2FuY2VsLCBzcGVha2luZywgc3VwcG9ydGVkLCB2b2ljZXN9ID0gdXNlU3BlZWNoU3ludGhlc2lzKHtcclxuICAgICAgICBvbkVuZCxcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IFxyXG4gICAgICAgICAgICAgIHNwZWFrKHt0ZXh0OiAgdGV4dH0pOyBcclxuICAgICAgICByZXR1cm4gKCkgPT4gIGNhbmNlbCgpO1xyXG4gICAgfSwgW3N0YXJ0XSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHZvaWNlID0gdm9pY2VzW3ZvaWNlSW5kZXhdIHx8IG51bGw7XHJcbiBcclxuICAgIHJldHVybiB0ZXh0ICYmIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7dm9pY2VzLm1hcCggdm9pY2U9PlxyXG4gICAgICAgICAgIDxkaXYgPiAgIHtgJHt2b2ljZS5uYW1lIH0gKCR7dm9pY2UubGFuZyB9KSAke3ZvaWNlLnZvaWNlVVJJfWB9IFxyXG4gICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgICAge3NwZWFraW5nID8gKFxyXG4gICAgICAgICAgICAgIC8vIDxpbWcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjMwXCIgc3JjPXtgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vaW1hZ2VzL21pY3JvcGhvbmUuc3ZnYH0gb25DbGljaz17Y2FuY2VsfSAgYWx0PVwiSXRhbGlhbiBUcnVsbGlcIi8+XHJcbiAgICAgICAgICAgICAgLy8gIDxkaXYgY2xhc3NOYW1lPXsnbWljJ30gb25DbGljaz17Y2FuY2VsfSAgIC9cclxuICAgICAgICAgICAgICAgIDxTcGVha0ljb24gc3BlYWtpbmc9e3NwZWFraW5nfSBvbkNsaWNrPXtjYW5jZWx9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3BlYWsoeyB0ZXh0LCB2b2ljZSwgcmF0ZSwgcGl0Y2ggfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU3BlYWtcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFRleHQoe3RleHR9KSB7XHJcbiAgICBjb25zdCBbcGl0Y2gsIHNldFBpdGNoXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbdm9pY2VJbmRleCwgc2V0Vm9pY2VJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IG9uRW5kID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFlvdSBjb3VsZCBkbyBzb21ldGhpbmcgaGVyZSBhZnRlciBzcGVha2luZyBoYXMgZmluaXNoZWRcclxuICAgIH07XHJcbiAgICBjb25zdCB7c3BlYWssIGNhbmNlbCwgc3BlYWtpbmcsIHN1cHBvcnRlZCwgdm9pY2VzfSA9IHVzZVNwZWVjaFN5bnRoZXNpcyh7XHJcbiAgICAgICAgb25FbmQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB2b2ljZSA9IHZvaWNlc1t2b2ljZUluZGV4XSB8fCBudWxsO1xyXG5cclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGxldCBjYW5jZWxMaXN0PVtdO1xyXG4gICAgLy8gICAgIHRleHRcclxuICAgIC8vICAgICAgICAgLmZpbHRlcih0ID0+IHQuc3BlYWspXHJcbiAgICAvLyAgICAgICAgIC5mb3JFYWNoKHQgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgeyBjYW5jZWwgfSA9c3BlYWsoe3RleHQ6IHQudGV4dH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgY2FuY2VsTGlzdC5wdXNoKGNhbmNlbCk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gKCkgPT4gY2FuY2VsTGlzdC5mb3JFYWNoKGNhbmNlbD0+Y2FuY2VsKCkpO1xyXG4gICAgLy8gfSwgW3N5bnRoZXNpemVdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBUZXh0RWxlbWVudCh7dGl0bGUsIHRleHR9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlID8gPHNwYW4gaWQ9e3RleHR9IGNsYXNzTmFtZT17XCJjZW50ZXIgYWxpZ24tY2VudGVyXCJ9PjxoMVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWlub3IgYWxpZ24tY2VudGVyXCI+e3RleHR9PC9oMT48L3NwYW4+IDpcclxuICAgICAgICAgICAgPHNwYW4gaWQ9e3RleHR9PjxoMz57dGV4dH08L2gzPjwvc3Bhbj47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQgJiYgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxQb3N0U3BlYWsgdGV4dD17dGV4dC5maWx0ZXIodD0+dC5zcGVhaykubWFwKHQ9PnQudGV4dCkuam9pbignJyl9IC8+XHJcblxyXG5cclxuICAgICAgICAgICAge3RleHQubWFwKHQgPT4gPGRpdiBpZD17dC50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RWxlbWVudCB7Li4udH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9