self["webpackHotUpdate_N_E"]("pages/_app",{

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
      className: "speak_icon ".concat(speaking ? 'speaking' : ''),
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

function VoiceView(_ref2) {
  var _this = this;

  var voices = _ref2.voices;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: voices.map(function (voice) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: [" $", voice.voiceURI, "`"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 12
  }, this);
}

_c2 = VoiceView;
function PostSpeak(_ref3) {
  _s();

  var text = _ref3.text,
      start = _ref3.start;

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

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      toggle = _useState4[0],
      setToggle = _useState4[1];

  var onEnd = function onEnd() {};

  var _useSpeechSynthesis = (0,react_speech_kit__WEBPACK_IMPORTED_MODULE_3__.useSpeechSynthesis)({
    onEnd: onEnd
  }),
      speak = _useSpeechSynthesis.speak,
      cancel = _useSpeechSynthesis.cancel,
      speaking = _useSpeechSynthesis.speaking,
      supported = _useSpeechSynthesis.supported,
      voices = _useSpeechSynthesis.voices; // const voice = voices.filter(v=>v.voiceURI === "Microsoft David Desktop - English (United States)")[0];


  var voice = voices.filter(function (v) {
    return v.voiceURI === "Google UK English Male";
  })[0];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    speak({
      text: text,
      voice: voice
    });
    return function () {
      return cancel();
    };
  }, [start]);

  var toggleSpeak = function toggleSpeak() {
    if (speaking) cancel();else speak({
      text: text,
      voice: voice
    });
  };

  return text && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: speaking ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakIcon, {
        speaking: speaking,
        onClick: cancel
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakIcon, {
        speaking: speaking,
        onClick: function onClick(e) {
          return speak({
            text: text,
            voice: voice
          });
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 20
  }, this);
}

_s(PostSpeak, "2pZ5MuvGxOWwFwo85eSUUYOzzFA=", false, function () {
  return [react_speech_kit__WEBPACK_IMPORTED_MODULE_3__.useSpeechSynthesis];
});

_c3 = PostSpeak;
function PostText(_ref4) {
  _s2();

  var _this2 = this;

  var text = _ref4.text;

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      pitch = _useState5[0],
      setPitch = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      rate = _useState6[0],
      setRate = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      voiceIndex = _useState7[0],
      setVoiceIndex = _useState7[1];

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

  function TextElement(_ref5) {
    var title = _ref5.title,
        text = _ref5.text;
    return title ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      id: text,
      className: "center align-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: "minor align-center",
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 82
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 32
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      id: text,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 33
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
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
      lineNumber: 96,
      columnNumber: 17
    }, this), text.map(function (t) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        id: t.text,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextElement, _objectSpread({}, t), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }, _this2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 32
      }, _this2);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 17
  }, this);
}

_s2(PostText, "lIABgWF9N4wcljOXEaaMVbWit4c=", false, function () {
  return [react_speech_kit__WEBPACK_IMPORTED_MODULE_3__.useSpeechSynthesis];
});

_c4 = PostText;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "SpeakIcon");
$RefreshReg$(_c2, "VoiceView");
$RefreshReg$(_c3, "PostSpeak");
$RefreshReg$(_c4, "PostText");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0VGV4dC5qcyJdLCJuYW1lcyI6WyJTcGVha0ljb24iLCJzcGVha2luZyIsIlZvaWNlVmlldyIsInZvaWNlcyIsIm1hcCIsInZvaWNlIiwidm9pY2VVUkkiLCJQb3N0U3BlYWsiLCJ0ZXh0Iiwic3RhcnQiLCJ1c2VTdGF0ZSIsInBpdGNoIiwic2V0UGl0Y2giLCJyYXRlIiwic2V0UmF0ZSIsInZvaWNlSW5kZXgiLCJzZXRWb2ljZUluZGV4IiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwib25FbmQiLCJ1c2VTcGVlY2hTeW50aGVzaXMiLCJzcGVhayIsImNhbmNlbCIsInN1cHBvcnRlZCIsImZpbHRlciIsInYiLCJ1c2VFZmZlY3QiLCJ0b2dnbGVTcGVhayIsImUiLCJQb3N0VGV4dCIsIlRleHRFbGVtZW50IiwidGl0bGUiLCJ0Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLFNBQVNBLFNBQVQsT0FBK0I7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDbEMsc0JBQU87QUFBSyxXQUFPLEVBQUMsS0FBYjtBQUFtQixTQUFLLEVBQUMsNEJBQXpCO0FBQXNELFNBQUssRUFBQyxJQUE1RDtBQUNLLFVBQU0sRUFBQyxJQURaO0FBQ2lCLFdBQU8sRUFBQyxXQUR6QjtBQUFBLDJCQUVIO0FBQU0sZUFBUyx1QkFBZ0JBLFFBQVEsR0FBRyxVQUFILEdBQWdCLEVBQXhDLENBQWY7QUFDTSxPQUFDLEVBQUM7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBTUg7S0FQZUQsUzs7QUFTaEIsU0FBU0UsU0FBVCxRQUE2QjtBQUFBOztBQUFBLE1BQVRDLE1BQVMsU0FBVEEsTUFBUztBQUN6QixzQkFBTztBQUFBLGNBQ0ZBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUFDLEtBQUs7QUFBQSww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U0FBRDtBQUFXLFVBQUksRUFBRUEsSUFBSSxDQUFDZ0IsTUFBTCxDQUFZLFVBQUFRLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNYLEtBQU47QUFBQSxPQUFiLEVBQTBCakIsR0FBMUIsQ0FBOEIsVUFBQTRCLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUN4QixJQUFOO0FBQUEsT0FBL0IsRUFBMkN5QixJQUEzQyxDQUFnRCxFQUFoRDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsRUFJQ3pCLElBQUksQ0FBQ0osR0FBTCxDQUFTLFVBQUE0QixDQUFDO0FBQUEsMEJBQUk7QUFBSyxVQUFFLEVBQUVBLENBQUMsQ0FBQ3hCLElBQVg7QUFBQSwrQkFDZiw4REFBQyxXQUFELG9CQUFpQndCLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEZTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFKO0FBQUEsS0FBVixDQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBWUM7O0lBNUN1QkgsUTtVQU82QlQsZ0U7OztNQVA3QlMsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmRhMTE0NmZiMjViYjkxOWUyNjRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTcGVlY2hTeW50aGVzaXN9IGZyb20gJ3JlYWN0LXNwZWVjaC1raXQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNwZWFrSWNvbih7c3BlYWtpbmd9KSB7XHJcbiAgICByZXR1cm4gPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+XHJcbiAgICAgICAgPHBhdGggY2xhc3NOYW1lPXtgc3BlYWtfaWNvbiAke3NwZWFraW5nID8gJ3NwZWFraW5nJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgZD1cIk0zMC4xNDggNS41ODhjLTIuOTM0LTMuNDItNy4yODgtNS41ODgtMTIuMTQ4LTUuNTg4LTguODM3IDAtMTYgNy4xNjMtMTYgMTZzNy4xNjMgMTYgMTYgMTZjNC44NiAwIDkuMjEzLTIuMTY3IDEyLjE0OC01LjU4OGwtMTAuMTQ4LTEwLjQxMiAxMC4xNDgtMTAuNDEyek0yMiAzLjc2OWMxLjIzMiAwIDIuMjMxIDAuOTk5IDIuMjMxIDIuMjMxcy0wLjk5OSAyLjIzMS0yLjIzMSAyLjIzMS0yLjIzMS0wLjk5OS0yLjIzMS0yLjIzMWMwLTEuMjMyIDAuOTk5LTIuMjMxIDIuMjMxLTIuMjMxelwiLz5cclxuICAgIDwvc3ZnPlxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gVm9pY2VWaWV3KHt2b2ljZXN9KSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICB7dm9pY2VzLm1hcCh2b2ljZSA9PlxyXG4gICAgICAgICAgICA8ZGl2PiAke3ZvaWNlLnZvaWNlVVJJfWBcclxuICAgICAgICAgICAgPC9kaXY+KX1cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RTcGVhayh7dGV4dCwgc3RhcnR9KSB7XHJcbiAgICAvLyBjb25zdCBzeW50aGVzaXplID0gdXNlU3ludGhlc2l6ZSgpO1xyXG4gICAgY29uc3QgW3BpdGNoLCBzZXRQaXRjaF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3ZvaWNlSW5kZXgsIHNldFZvaWNlSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBvbkVuZCA9ICgpID0+IHtcclxuXHJcbiAgICB9O1xyXG4gICAgY29uc3Qge3NwZWFrLCBjYW5jZWwsIHNwZWFraW5nLCBzdXBwb3J0ZWQsIHZvaWNlc30gPSB1c2VTcGVlY2hTeW50aGVzaXMoe1xyXG4gICAgICAgIG9uRW5kLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY29uc3Qgdm9pY2UgPSB2b2ljZXMuZmlsdGVyKHY9PnYudm9pY2VVUkkgPT09IFwiTWljcm9zb2Z0IERhdmlkIERlc2t0b3AgLSBFbmdsaXNoIChVbml0ZWQgU3RhdGVzKVwiKVswXTtcclxuICAgIGNvbnN0IHZvaWNlID0gdm9pY2VzLmZpbHRlcih2ID0+IHYudm9pY2VVUkkgPT09IFwiR29vZ2xlIFVLIEVuZ2xpc2ggTWFsZVwiKVswXTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNwZWFrKHt0ZXh0OiB0ZXh0LCB2b2ljZTogdm9pY2V9KTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsKCk7XHJcbiAgICB9LCBbc3RhcnRdKTtcclxuXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU3BlYWsgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNwZWFraW5nKVxyXG4gICAgICAgICAgICBjYW5jZWwoKTtcclxuICAgICAgICBlbHNlIHNwZWFrKHt0ZXh0OiB0ZXh0LCB2b2ljZTogdm9pY2V9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dCAmJiA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtzcGVha2luZyA/XHJcbiAgICAgICAgICAgICAgICA8U3BlYWtJY29uIHNwZWFraW5nPXtzcGVha2luZ30gb25DbGljaz17Y2FuY2VsfS8+IDpcclxuICAgICAgICAgICAgICAgIDxTcGVha0ljb24gc3BlYWtpbmc9e3NwZWFraW5nfSBvbkNsaWNrPXtlID0+IHNwZWFrKHt0ZXh0OiB0ZXh0LCB2b2ljZTogdm9pY2V9KX0vPlxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RUZXh0KHt0ZXh0fSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3BpdGNoLCBzZXRQaXRjaF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3ZvaWNlSW5kZXgsIHNldFZvaWNlSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbkVuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFlvdSBjb3VsZCBkbyBzb21ldGhpbmcgaGVyZSBhZnRlciBzcGVha2luZyBoYXMgZmluaXNoZWRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7c3BlYWssIGNhbmNlbCwgc3BlYWtpbmcsIHN1cHBvcnRlZCwgdm9pY2VzfSA9IHVzZVNwZWVjaFN5bnRoZXNpcyh7XHJcbiAgICAgICAgICAgICAgICBvbkVuZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZvaWNlID0gdm9pY2VzW3ZvaWNlSW5kZXhdIHx8IG51bGw7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGNhbmNlbExpc3Q9W107XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAuZmlsdGVyKHQgPT4gdC5zcGVhaylcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLmZvckVhY2godCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCB7IGNhbmNlbCB9ID1zcGVhayh7dGV4dDogdC50ZXh0fSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjYW5jZWxMaXN0LnB1c2goY2FuY2VsKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiAoKSA9PiBjYW5jZWxMaXN0LmZvckVhY2goY2FuY2VsPT5jYW5jZWwoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9LCBbc3ludGhlc2l6ZV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFRleHRFbGVtZW50KHt0aXRsZSwgdGV4dH0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aXRsZSA/IDxzcGFuIGlkPXt0ZXh0fSBjbGFzc05hbWU9e1wiY2VudGVyIGFsaWduLWNlbnRlclwifT48aDFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbm9yIGFsaWduLWNlbnRlclwiPnt0ZXh0fTwvaDE+PC9zcGFuPiA6XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD17dGV4dH0+PGgzPnt0ZXh0fTwvaDM+PC9zcGFuPjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGV4dCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxQb3N0U3BlYWsgdGV4dD17dGV4dC5maWx0ZXIodCA9PiB0LnNwZWFrKS5tYXAodCA9PiB0LnRleHQpLmpvaW4oJycpfS8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHt0ZXh0Lm1hcCh0ID0+IDxkaXYgaWQ9e3QudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEVsZW1lbnQgey4uLnR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSJdLCJzb3VyY2VSb290IjoiIn0=