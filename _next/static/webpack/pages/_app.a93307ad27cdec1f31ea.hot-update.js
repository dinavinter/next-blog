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
  console.log(JSON.stringify(voice));
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    speak({
      text: text,
      voice: voice
    });
    return function () {
      return cancel();
    };
  }, [start, toggle]);

  var toggleSpeak = function toggleSpeak() {
    setToggle(!toggle);
  };

  return text && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        children: [" ", toggle]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 12
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakIcon, {
        speaking: speaking,
        onClick: toggleSpeak
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
        lineNumber: 84,
        columnNumber: 74
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 24
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      id: text,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
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
      lineNumber: 91,
      columnNumber: 13
    }, this), text.map(function (t) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        id: t.text,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextElement, _objectSpread({}, t), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, _this2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 28
      }, _this2);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0VGV4dC5qcyJdLCJuYW1lcyI6WyJTcGVha0ljb24iLCJzcGVha2luZyIsIlZvaWNlVmlldyIsInZvaWNlcyIsIm1hcCIsInZvaWNlIiwidm9pY2VVUkkiLCJQb3N0U3BlYWsiLCJ0ZXh0Iiwic3RhcnQiLCJ1c2VTdGF0ZSIsInBpdGNoIiwic2V0UGl0Y2giLCJyYXRlIiwic2V0UmF0ZSIsInZvaWNlSW5kZXgiLCJzZXRWb2ljZUluZGV4IiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwib25FbmQiLCJ1c2VTcGVlY2hTeW50aGVzaXMiLCJzcGVhayIsImNhbmNlbCIsInN1cHBvcnRlZCIsImZpbHRlciIsInYiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZUVmZmVjdCIsInRvZ2dsZVNwZWFrIiwiUG9zdFRleHQiLCJUZXh0RWxlbWVudCIsInRpdGxlIiwidCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULE9BQStCO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQ2xDLHNCQUFPO0FBQUssV0FBTyxFQUFDLEtBQWI7QUFBbUIsU0FBSyxFQUFDLDRCQUF6QjtBQUFzRCxTQUFLLEVBQUMsSUFBNUQ7QUFDSyxVQUFNLEVBQUMsSUFEWjtBQUNpQixXQUFPLEVBQUMsV0FEekI7QUFBQSwyQkFFSDtBQUFNLGVBQVMsdUJBQWdCQSxRQUFRLEdBQUcsVUFBSCxHQUFnQixFQUF4QyxDQUFmO0FBQ00sT0FBQyxFQUFDO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQU1IO0tBUGVELFM7O0FBU2hCLFNBQVNFLFNBQVQsUUFBNkI7QUFBQTs7QUFBQSxNQUFUQyxNQUFTLFNBQVRBLE1BQVM7QUFDekIsc0JBQU87QUFBQSxjQUNGQSxNQUFNLENB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VUFBQStCLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUMzQixJQUFOO0FBQUEsT0FBL0IsRUFBMkM0QixJQUEzQyxDQUFnRCxFQUFoRDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFJSzVCLElBQUksQ0FBQ0osR0FBTCxDQUFTLFVBQUErQixDQUFDO0FBQUEsMEJBQUk7QUFBSyxVQUFFLEVBQUVBLENBQUMsQ0FBQzNCLElBQVg7QUFBQSwrQkFDUCw4REFBQyxXQUFELG9CQUFpQjJCLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFKO0FBQUEsS0FBVixDQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0lBNUN1QkgsUTtVQU9pQ1osZ0U7OztNQVBqQ1ksUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE5MzMwN2FkMjdjZGVjMWYzMWVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTcGVlY2hTeW50aGVzaXN9IGZyb20gJ3JlYWN0LXNwZWVjaC1raXQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNwZWFrSWNvbih7c3BlYWtpbmd9KSB7XHJcbiAgICByZXR1cm4gPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+XHJcbiAgICAgICAgPHBhdGggY2xhc3NOYW1lPXtgc3BlYWtfaWNvbiAke3NwZWFraW5nID8gJ3NwZWFraW5nJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgZD1cIk0zMC4xNDggNS41ODhjLTIuOTM0LTMuNDItNy4yODgtNS41ODgtMTIuMTQ4LTUuNTg4LTguODM3IDAtMTYgNy4xNjMtMTYgMTZzNy4xNjMgMTYgMTYgMTZjNC44NiAwIDkuMjEzLTIuMTY3IDEyLjE0OC01LjU4OGwtMTAuMTQ4LTEwLjQxMiAxMC4xNDgtMTAuNDEyek0yMiAzLjc2OWMxLjIzMiAwIDIuMjMxIDAuOTk5IDIuMjMxIDIuMjMxcy0wLjk5OSAyLjIzMS0yLjIzMSAyLjIzMS0yLjIzMS0wLjk5OS0yLjIzMS0yLjIzMWMwLTEuMjMyIDAuOTk5LTIuMjMxIDIuMjMxLTIuMjMxelwiLz5cclxuICAgIDwvc3ZnPlxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gVm9pY2VWaWV3KHt2b2ljZXN9KSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICB7dm9pY2VzLm1hcCh2b2ljZSA9PlxyXG4gICAgICAgICAgICA8ZGl2PiAke3ZvaWNlLnZvaWNlVVJJfWBcclxuICAgICAgICAgICAgPC9kaXY+KX1cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RTcGVhayh7dGV4dCwgc3RhcnR9KSB7XHJcbiAgICAvLyBjb25zdCBzeW50aGVzaXplID0gdXNlU3ludGhlc2l6ZSgpO1xyXG4gICAgY29uc3QgW3BpdGNoLCBzZXRQaXRjaF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3ZvaWNlSW5kZXgsIHNldFZvaWNlSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBvbkVuZCA9ICgpID0+IHtcclxuXHJcbiAgICB9O1xyXG4gICAgY29uc3Qge3NwZWFrLCBjYW5jZWwsIHNwZWFraW5nLCBzdXBwb3J0ZWQsIHZvaWNlc30gPSB1c2VTcGVlY2hTeW50aGVzaXMoe1xyXG4gICAgICAgIG9uRW5kLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY29uc3Qgdm9pY2UgPSB2b2ljZXMuZmlsdGVyKHY9PnYudm9pY2VVUkkgPT09IFwiTWljcm9zb2Z0IERhdmlkIERlc2t0b3AgLSBFbmdsaXNoIChVbml0ZWQgU3RhdGVzKVwiKVswXTtcclxuICAgIGNvbnN0IHZvaWNlID0gdm9pY2VzLmZpbHRlcih2ID0+IHYudm9pY2VVUkkgPT09IFwiR29vZ2xlIFVLIEVuZ2xpc2ggTWFsZVwiKVswXTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHZvaWNlKSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc3BlYWsoe3RleHQ6IHRleHQsIHZvaWNlOiB2b2ljZX0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWwoKTtcclxuICAgIH0sIFtzdGFydCwgdG9nZ2xlXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvZ2dsZVNwZWFrID0gKCkgPT4ge1xyXG4gICAgICAgc2V0VG9nZ2xlKCF0b2dnbGUpXHJcbiAgICB9XHJcblxyXG4gXHJcblxyXG4gICAgcmV0dXJuIHRleHQgJiYgPFJlYWN0LkZyYWdtZW50PiBcclxuICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgICA8c3Bhbj4ge3RvZ2dsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8U3BlYWtJY29uIHNwZWFraW5nPXtzcGVha2luZ30gb25DbGljaz17dG9nZ2xlU3BlYWt9Lz4gICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RUZXh0KHt0ZXh0fSkge1xyXG4gICAgY29uc3QgW3BpdGNoLCBzZXRQaXRjaF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3ZvaWNlSW5kZXgsIHNldFZvaWNlSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBvbkVuZCA9ICgpID0+IHtcclxuICAgICAgICAvLyBZb3UgY291bGQgZG8gc29tZXRoaW5nIGhlcmUgYWZ0ZXIgc3BlYWtpbmcgaGFzIGZpbmlzaGVkXHJcbiAgICB9O1xyXG4gICAgY29uc3Qge3NwZWFrLCBjYW5jZWwsIHNwZWFraW5nLCBzdXBwb3J0ZWQsIHZvaWNlc30gPSB1c2VTcGVlY2hTeW50aGVzaXMoe1xyXG4gICAgICAgIG9uRW5kLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgdm9pY2UgPSB2b2ljZXNbdm9pY2VJbmRleF0gfHwgbnVsbDtcclxuXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBsZXQgY2FuY2VsTGlzdD1bXTtcclxuICAgIC8vICAgICB0ZXh0XHJcbiAgICAvLyAgICAgICAgIC5maWx0ZXIodCA9PiB0LnNwZWFrKVxyXG4gICAgLy8gICAgICAgICAuZm9yRWFjaCh0ID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IHsgY2FuY2VsIH0gPXNwZWFrKHt0ZXh0OiB0LnRleHR9KTtcclxuICAgIC8vICAgICAgICAgICAgIGNhbmNlbExpc3QucHVzaChjYW5jZWwpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgcmV0dXJuICgpID0+IGNhbmNlbExpc3QuZm9yRWFjaChjYW5jZWw9PmNhbmNlbCgpKTtcclxuICAgIC8vIH0sIFtzeW50aGVzaXplXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gVGV4dEVsZW1lbnQoe3RpdGxlLCB0ZXh0fSkge1xyXG4gICAgICAgIHJldHVybiB0aXRsZSA/IDxzcGFuIGlkPXt0ZXh0fSBjbGFzc05hbWU9e1wiY2VudGVyIGFsaWduLWNlbnRlclwifT48aDFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbm9yIGFsaWduLWNlbnRlclwiPnt0ZXh0fTwvaDE+PC9zcGFuPiA6XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPXt0ZXh0fT48aDM+e3RleHR9PC9oMz48L3NwYW4+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0ICYmXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFBvc3RTcGVhayB0ZXh0PXt0ZXh0LmZpbHRlcih0ID0+IHQuc3BlYWspLm1hcCh0ID0+IHQudGV4dCkuam9pbignJyl9Lz5cclxuXHJcblxyXG4gICAgICAgICAgICB7dGV4dC5tYXAodCA9PiA8ZGl2IGlkPXt0LnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RWxlbWVudCB7Li4udH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9