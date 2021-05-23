self["webpackHotUpdate_N_E"]("pages/post/ato",{

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
        children: [" $", voice.voiceURI, " $", JSON.stringify(voices), "`"]
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
  console.log(JSON.stringify(voices));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0VGV4dC5qcyJdLCJuYW1lcyI6WyJTcGVha0ljb24iLCJzcGVha2luZyIsIlZvaWNlVmlldyIsInZvaWNlcyIsIm1hcCIsInZvaWNlIiwidm9pY2VVUkkiLCJKU09OIiwic3RyaW5naWZ5IiwiUG9zdFNwZWFrIiwidGV4dCIsInN0YXJ0IiwidXNlU3RhdGUiLCJwaXRjaCIsInNldFBpdGNoIiwicmF0ZSIsInNldFJhdGUiLCJ2b2ljZUluZGV4Iiwic2V0Vm9pY2VJbmRleCIsInRvZ2dsZSIsInNldFRvZ2dsZSIsIm9uRW5kIiwidXNlU3BlZWNoU3ludGhlc2lzIiwic3BlYWsiLCJjYW5jZWwiLCJzdXBwb3J0ZWQiLCJmaWx0ZXIiLCJ2IiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInRvZ2dsZVNwZWFrIiwiUG9zdFRleHQiLCJUZXh0RWxlbWVudCIsInRpdGxlIiwidCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULE9BQStCO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQ2xDLHNCQUFPO0FBQUssV0FBTyxFQUFDLEtBQWI7QUFBbUIsU0FBSyxFQUFDLDRCQUF6QjtBQUFzRCxTQUFLLEVBQUMsSUFBNUQ7QUFDSyxVQUFNLEVBQUMsSUFEWjtBQUNpQixXQUFPLEVBQUMsV0FEekI7QUFBQSwyQkFFSDtBQUFNLGVBQVMsdUJBQWdCQSxRQUFRLEdBQUcsVUFBSCxHQUFnQixFQUF4QyxDQUFmO0FBQ00sT0FBQyxFQUFDO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQU1IO0tBUGVELFM7O0FBU2hCLFNBQVNFLFNBQVQsUUFBNkI7QUFBQTs7QUFBQSxNQUFUQyxNQUFTLFNBQVRBLE1BQVM7QUFDekIsc0JBQU87QUFBQSxjQUNGQSxNQUFNLENB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QUFDWixLQUFOO0FBQUEsT0FBYixFQUEwQm5CLEdBQTFCLENBQThCLFVBQUErQixDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDekIsSUFBTjtBQUFBLE9BQS9CLEVBQTJDMEIsSUFBM0MsQ0FBZ0QsRUFBaEQ7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBSUsxQixJQUFJLENBQUNOLEdBQUwsQ0FBUyxVQUFBK0IsQ0FBQztBQUFBLDBCQUFJO0FBQUssVUFBRSxFQUFFQSxDQUFDLENBQUN6QixJQUFYO0FBQUEsK0JBQ1AsOERBQUMsV0FBRCxvQkFBaUJ5QixDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE87QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSjtBQUFBLEtBQVYsQ0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVlIOztJQTVDdUJILFE7VUFPaUNWLGdFOzs7TUFQakNVLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9hdG8uYmVjOTUxYzcxMjUwM2M3MTBlOWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZVNwZWVjaFN5bnRoZXNpc30gZnJvbSAncmVhY3Qtc3BlZWNoLWtpdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3BlYWtJY29uKHtzcGVha2luZ30pIHtcclxuICAgIHJldHVybiA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj5cclxuICAgICAgICA8cGF0aCBjbGFzc05hbWU9e2BzcGVha19pY29uICR7c3BlYWtpbmcgPyAnc3BlYWtpbmcnIDogJyd9YH1cclxuICAgICAgICAgICAgICBkPVwiTTMwLjE0OCA1LjU4OGMtMi45MzQtMy40Mi03LjI4OC01LjU4OC0xMi4xNDgtNS41ODgtOC44MzcgMC0xNiA3LjE2My0xNiAxNnM3LjE2MyAxNiAxNiAxNmM0Ljg2IDAgOS4yMTMtMi4xNjcgMTIuMTQ4LTUuNTg4bC0xMC4xNDgtMTAuNDEyIDEwLjE0OC0xMC40MTJ6TTIyIDMuNzY5YzEuMjMyIDAgMi4yMzEgMC45OTkgMi4yMzEgMi4yMzFzLTAuOTk5IDIuMjMxLTIuMjMxIDIuMjMxLTIuMjMxLTAuOTk5LTIuMjMxLTIuMjMxYzAtMS4yMzIgMC45OTktMi4yMzEgMi4yMzEtMi4yMzF6XCIvPlxyXG4gICAgPC9zdmc+XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBWb2ljZVZpZXcoe3ZvaWNlc30pIHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIHt2b2ljZXMubWFwKHZvaWNlID0+XHJcbiAgICAgICAgICAgIDxkaXY+ICR7dm9pY2Uudm9pY2VVUkl9ICR7SlNPTi5zdHJpbmdpZnkodm9pY2VzKX1gIFxyXG4gICAgICAgICAgICA8L2Rpdj4pfVxyXG5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9zdFNwZWFrKHt0ZXh0LCBzdGFydH0pIHtcclxuICAgIC8vIGNvbnN0IHN5bnRoZXNpemUgPSB1c2VTeW50aGVzaXplKCk7XHJcbiAgICBjb25zdCBbcGl0Y2gsIHNldFBpdGNoXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbdm9pY2VJbmRleCwgc2V0Vm9pY2VJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IG9uRW5kID0gKCkgPT4ge1xyXG5cclxuICAgIH07XHJcbiAgICBjb25zdCB7c3BlYWssIGNhbmNlbCwgc3BlYWtpbmcsIHN1cHBvcnRlZCwgdm9pY2VzfSA9IHVzZVNwZWVjaFN5bnRoZXNpcyh7XHJcbiAgICAgICAgb25FbmQsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjb25zdCB2b2ljZSA9IHZvaWNlcy5maWx0ZXIodj0+di52b2ljZVVSSSA9PT0gXCJNaWNyb3NvZnQgRGF2aWQgRGVza3RvcCAtIEVuZ2xpc2ggKFVuaXRlZCBTdGF0ZXMpXCIpWzBdO1xyXG4gICAgY29uc3Qgdm9pY2UgPSB2b2ljZXMuZmlsdGVyKHYgPT4gdi52b2ljZVVSSSA9PT0gXCJHb29nbGUgVUsgRW5nbGlzaCBNYWxlXCIpWzBdO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodm9pY2VzKSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc3BlYWsoe3RleHQ6IHRleHQsIHZvaWNlOiB2b2ljZX0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWwoKTtcclxuICAgIH0sIFtzdGFydCwgdG9nZ2xlXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvZ2dsZVNwZWFrID0gKCkgPT4ge1xyXG4gICAgICAgc2V0VG9nZ2xlKCF0b2dnbGUpXHJcbiAgICB9XHJcblxyXG4gXHJcblxyXG4gICAgcmV0dXJuIHRleHQgJiYgPFJlYWN0LkZyYWdtZW50PiBcclxuICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgICA8c3Bhbj4ge3RvZ2dsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8U3BlYWtJY29uIHNwZWFraW5nPXtzcGVha2luZ30gb25DbGljaz17dG9nZ2xlU3BlYWt9Lz4gICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RUZXh0KHt0ZXh0fSkge1xyXG4gICAgY29uc3QgW3BpdGNoLCBzZXRQaXRjaF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3ZvaWNlSW5kZXgsIHNldFZvaWNlSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBvbkVuZCA9ICgpID0+IHtcclxuICAgICAgICAvLyBZb3UgY291bGQgZG8gc29tZXRoaW5nIGhlcmUgYWZ0ZXIgc3BlYWtpbmcgaGFzIGZpbmlzaGVkXHJcbiAgICB9O1xyXG4gICAgY29uc3Qge3NwZWFrLCBjYW5jZWwsIHNwZWFraW5nLCBzdXBwb3J0ZWQsIHZvaWNlc30gPSB1c2VTcGVlY2hTeW50aGVzaXMoe1xyXG4gICAgICAgIG9uRW5kLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgdm9pY2UgPSB2b2ljZXNbdm9pY2VJbmRleF0gfHwgbnVsbDtcclxuXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBsZXQgY2FuY2VsTGlzdD1bXTtcclxuICAgIC8vICAgICB0ZXh0XHJcbiAgICAvLyAgICAgICAgIC5maWx0ZXIodCA9PiB0LnNwZWFrKVxyXG4gICAgLy8gICAgICAgICAuZm9yRWFjaCh0ID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IHsgY2FuY2VsIH0gPXNwZWFrKHt0ZXh0OiB0LnRleHR9KTtcclxuICAgIC8vICAgICAgICAgICAgIGNhbmNlbExpc3QucHVzaChjYW5jZWwpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgcmV0dXJuICgpID0+IGNhbmNlbExpc3QuZm9yRWFjaChjYW5jZWw9PmNhbmNlbCgpKTtcclxuICAgIC8vIH0sIFtzeW50aGVzaXplXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gVGV4dEVsZW1lbnQoe3RpdGxlLCB0ZXh0fSkge1xyXG4gICAgICAgIHJldHVybiB0aXRsZSA/IDxzcGFuIGlkPXt0ZXh0fSBjbGFzc05hbWU9e1wiY2VudGVyIGFsaWduLWNlbnRlclwifT48aDFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbm9yIGFsaWduLWNlbnRlclwiPnt0ZXh0fTwvaDE+PC9zcGFuPiA6XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPXt0ZXh0fT48aDM+e3RleHR9PC9oMz48L3NwYW4+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0ICYmXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFBvc3RTcGVhayB0ZXh0PXt0ZXh0LmZpbHRlcih0ID0+IHQuc3BlYWspLm1hcCh0ID0+IHQudGV4dCkuam9pbignJyl9Lz5cclxuXHJcblxyXG4gICAgICAgICAgICB7dGV4dC5tYXAodCA9PiA8ZGl2IGlkPXt0LnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RWxlbWVudCB7Li4udH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9