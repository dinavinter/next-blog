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

function VoiceView(_ref2) {
  var _this = this;

  var voices = _ref2.voices;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: voices.map(function (voice) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: ["  $", voice.voiceURI, "`"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 11
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
  return text && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: speaking ?
      /*#__PURE__*/
      // <img width="20" height="30" src={`${process.env.BACKEND_URL}/images/microphone.svg`} onClick={cancel}  alt="Italian Trulli"/>
      //  <div className={'mic'} onClick={cancel}   /
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakIcon, {
        speaking: speaking,
        onClick: cancel
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
        lineNumber: 51,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 20
  }, this);
}

_s(PostSpeak, "xImQH76sRznCG48vVPIq41JALNE=", false, function () {
  return [react_speech_kit__WEBPACK_IMPORTED_MODULE_3__.useSpeechSynthesis];
});

_c3 = PostSpeak;
function PostText(_ref4) {
  _s2();

  var _this2 = this;

  var text = _ref4.text;

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
        columnNumber: 74
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 24
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      id: text,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 29
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 96,
      columnNumber: 13
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
        columnNumber: 28
      }, _this2);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0VGV4dC5qcyJdLCJuYW1lcyI6WyJTcGVha0ljb24iLCJzcGVha2luZyIsIlZvaWNlVmlldyIsInZvaWNlcyIsIm1hcCIsInZvaWNlIiwidm9pY2VVUkkiLCJQb3N0U3BlYWsiLCJ0ZXh0Iiwic3RhcnQiLCJ1c2VTdGF0ZSIsInBpdGNoIiwic2V0UGl0Y2giLCJyYXRlIiwic2V0UmF0ZSIsInZvaWNlSW5kZXgiLCJzZXRWb2ljZUluZGV4Iiwib25FbmQiLCJ1c2VTcGVlY2hTeW50aGVzaXMiLCJzcGVhayIsImNhbmNlbCIsInN1cHBvcnRlZCIsImZpbHRlciIsInYiLCJ1c2VFZmZlY3QiLCJQb3N0VGV4dCIsIlRleHRFbGVtZW50IiwidGl0bGUiLCJ0Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLFNBQVNBLFNBQVQsT0FBOEI7QUFBQSxNQUFWQyxRQUFVLFFBQVZBLFFBQVU7QUFDakMsc0JBQU87QUFBSyxXQUFPLEVBQUMsS0FBYjtBQUFtQixTQUFLLEVBQUMsNEJBQXpCO0FBQXVELFNBQUssRUFBQyxJQUE3RDtBQUNGLFVBQU0sRUFBQyxJQURMO0FBQ1UsV0FBTyxFQUFDLFdBRGxCO0FBQUEsMkJBRUg7QUFBTSxlQUFTLEVBQUMsTUFBaEI7QUFDSixPQUFDLEVBQUM7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBTUg7S0FQZUQsUzs7QUFTaEIsU0FBU0UsU0FBVCxRQUE0QjtBQUFBOztBQUFBLE1BQVJDLE1BQVEsU0FBUkEsTUFBUTtBQUN6QixzQkFBTztBQUFBLGNBQ0RBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFZLFVBQUFDLEtBQUs7QUFBQSwwQkFDZDtBQUFBLDBCQUFVQSxLQUFLLENBQUNDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURjO0FBQUEs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QUFBQSwwQkFBSTtBQUFLLFVBQUUsRUFBRUEsQ0FBQyxDQUFDcEIsSUFBWDtBQUFBLCtCQUNYLDhEQUFDLFdBQUQsb0JBQWlCb0IsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUo7QUFBQSxLQUFWLENBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7SUE1Q3VCSCxRO1VBT2lDUCxnRTs7O01BUGpDTyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGQyY2M5NjhjODA0NWVhZThkOGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZVNwZWVjaFN5bnRoZXNpc30gZnJvbSAncmVhY3Qtc3BlZWNoLWtpdCc7IFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNwZWFrSWNvbih7c3BlYWtpbmd9KXtcclxuICAgIHJldHVybiA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj5cclxuICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJpY29uXCJcclxuICAgIGQ9XCJNMzAuMTQ4IDUuNTg4Yy0yLjkzNC0zLjQyLTcuMjg4LTUuNTg4LTEyLjE0OC01LjU4OC04LjgzNyAwLTE2IDcuMTYzLTE2IDE2czcuMTYzIDE2IDE2IDE2YzQuODYgMCA5LjIxMy0yLjE2NyAxMi4xNDgtNS41ODhsLTEwLjE0OC0xMC40MTIgMTAuMTQ4LTEwLjQxMnpNMjIgMy43NjljMS4yMzIgMCAyLjIzMSAwLjk5OSAyLjIzMSAyLjIzMXMtMC45OTkgMi4yMzEtMi4yMzEgMi4yMzEtMi4yMzEtMC45OTktMi4yMzEtMi4yMzFjMC0xLjIzMiAwLjk5OS0yLjIzMSAyLjIzMS0yLjIzMXpcIi8+XHJcbiAgICA8L3N2Zz5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFZvaWNlVmlldyh7dm9pY2VzfSl7XHJcbiAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIHt2b2ljZXMubWFwKCB2b2ljZT0+XHJcbiAgICAgICAgICAgIDxkaXYgPiAgJHt2b2ljZS52b2ljZVVSSX1gXHJcbiAgICAgICAgICAgIDwvZGl2Pil9XHJcblxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQb3N0U3BlYWsoe3RleHQsIHN0YXJ0fSkge1xyXG4gICAgLy8gY29uc3Qgc3ludGhlc2l6ZSA9IHVzZVN5bnRoZXNpemUoKTtcclxuICAgIGNvbnN0IFtwaXRjaCwgc2V0UGl0Y2hdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFt2b2ljZUluZGV4LCBzZXRWb2ljZUluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgb25FbmQgPSAoKSA9PiB7XHJcbiAgICAgICBcclxuICAgICB9O1xyXG4gICAgY29uc3Qge3NwZWFrLCBjYW5jZWwsIHNwZWFraW5nLCBzdXBwb3J0ZWQsIHZvaWNlc30gPSB1c2VTcGVlY2hTeW50aGVzaXMoe1xyXG4gICAgICAgIG9uRW5kLFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIGNvbnN0IHZvaWNlID0gdm9pY2VzLmZpbHRlcih2PT52LnZvaWNlVVJJID09PSBcIk1pY3Jvc29mdCBEYXZpZCBEZXNrdG9wIC0gRW5nbGlzaCAoVW5pdGVkIFN0YXRlcylcIilbMF07XHJcbiAgICBjb25zdCB2b2ljZSA9IHZvaWNlcy5maWx0ZXIodj0+di52b2ljZVVSSSA9PT0gXCJHb29nbGUgVUsgRW5nbGlzaCBNYWxlXCIpWzBdO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IFxyXG4gICAgICAgICAgICAgIHNwZWFrKHt0ZXh0OiAgdGV4dCwgdm9pY2U6dm9pY2V9KTsgXHJcbiAgICAgICAgcmV0dXJuICgpID0+ICBjYW5jZWwoKTtcclxuICAgIH0sIFtzdGFydF0pO1xyXG4gICAgXHJcbiBcclxuICAgIHJldHVybiB0ZXh0ICYmIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgIFxyXG4gICAgICAgIDxkaXY+IFxyXG4gICAgICAgICAgICB7c3BlYWtpbmcgPyAoXHJcbiAgICAgICAgICAgICAgLy8gPGltZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMzBcIiBzcmM9e2Ake3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9pbWFnZXMvbWljcm9waG9uZS5zdmdgfSBvbkNsaWNrPXtjYW5jZWx9ICBhbHQ9XCJJdGFsaWFuIFRydWxsaVwiLz5cclxuICAgICAgICAgICAgICAvLyAgPGRpdiBjbGFzc05hbWU9eydtaWMnfSBvbkNsaWNrPXtjYW5jZWx9ICAgL1xyXG4gICAgICAgICAgICAgICAgPFNwZWFrSWNvbiBzcGVha2luZz17c3BlYWtpbmd9IG9uQ2xpY2s9e2NhbmNlbH0gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzcGVhayh7IHRleHQsIHZvaWNlLCByYXRlLCBwaXRjaCB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTcGVha1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0VGV4dCh7dGV4dH0pIHtcclxuICAgIGNvbnN0IFtwaXRjaCwgc2V0UGl0Y2hdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFt2b2ljZUluZGV4LCBzZXRWb2ljZUluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgb25FbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gWW91IGNvdWxkIGRvIHNvbWV0aGluZyBoZXJlIGFmdGVyIHNwZWFraW5nIGhhcyBmaW5pc2hlZFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHtzcGVhaywgY2FuY2VsLCBzcGVha2luZywgc3VwcG9ydGVkLCB2b2ljZXN9ID0gdXNlU3BlZWNoU3ludGhlc2lzKHtcclxuICAgICAgICBvbkVuZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHZvaWNlID0gdm9pY2VzW3ZvaWNlSW5kZXhdIHx8IG51bGw7XHJcblxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgbGV0IGNhbmNlbExpc3Q9W107XHJcbiAgICAvLyAgICAgdGV4dFxyXG4gICAgLy8gICAgICAgICAuZmlsdGVyKHQgPT4gdC5zcGVhaylcclxuICAgIC8vICAgICAgICAgLmZvckVhY2godCA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zdCB7IGNhbmNlbCB9ID1zcGVhayh7dGV4dDogdC50ZXh0fSk7XHJcbiAgICAvLyAgICAgICAgICAgICBjYW5jZWxMaXN0LnB1c2goY2FuY2VsKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHJldHVybiAoKSA9PiBjYW5jZWxMaXN0LmZvckVhY2goY2FuY2VsPT5jYW5jZWwoKSk7XHJcbiAgICAvLyB9LCBbc3ludGhlc2l6ZV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIFRleHRFbGVtZW50KHt0aXRsZSwgdGV4dH0pIHtcclxuICAgICAgICByZXR1cm4gdGl0bGUgPyA8c3BhbiBpZD17dGV4dH0gY2xhc3NOYW1lPXtcImNlbnRlciBhbGlnbi1jZW50ZXJcIn0+PGgxXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5vciBhbGlnbi1jZW50ZXJcIj57dGV4dH08L2gxPjwvc3Bhbj4gOlxyXG4gICAgICAgICAgICA8c3BhbiBpZD17dGV4dH0+PGgzPnt0ZXh0fTwvaDM+PC9zcGFuPjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dCAmJiAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFBvc3RTcGVhayB0ZXh0PXt0ZXh0LmZpbHRlcih0PT50LnNwZWFrKS5tYXAodD0+dC50ZXh0KS5qb2luKCcnKX0gLz5cclxuXHJcblxyXG4gICAgICAgICAgICB7dGV4dC5tYXAodCA9PiA8ZGl2IGlkPXt0LnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRFbGVtZW50IHsuLi50fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=