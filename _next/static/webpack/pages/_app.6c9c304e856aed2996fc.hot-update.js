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
/* harmony import */ var react_say__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-say */ "./node_modules/react-say/lib/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\dina\\demo\\next-app\\components\\PostText.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function SpeakIcon() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "128",
    height: "128",
    viewBox: "0 0 32 32",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      className: "icon",
      d: "M30.148 5.588c-2.934-3.42-7.288-5.588-12.148-5.588-8.837 0-16 7.163-16 16s7.163 16 16 16c4.86 0 9.213-2.167 12.148-5.588l-10.148-10.412 10.148-10.412zM22 3.769c1.232 0 2.231 0.999 2.231 2.231s-0.999 2.231-2.231 2.231-2.231-0.999-2.231-2.231c0-1.232 0.999-2.231 2.231-2.231z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 12
  }, this);
}
_c = SpeakIcon;
function PostSpeak(_ref) {
  _s();

  var text = _ref.text,
      start = _ref.start,
      next = _ref.next;

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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: speaking ?
      /*#__PURE__*/
      // <img width="20" height="30" src={`${process.env.BACKEND_URL}/images/microphone.svg`} onClick={cancel}  alt="Italian Trulli"/>
      //  <div className={'mic'} onClick={cancel}   /
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakIcon, {
        onClick: cancel
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
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
        lineNumber: 42,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 20
  }, this);
}

_s(PostSpeak, "xImQH76sRznCG48vVPIq41JALNE=", false, function () {
  return [react_speech_kit__WEBPACK_IMPORTED_MODULE_3__.useSpeechSynthesis];
});

_c2 = PostSpeak;
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
        lineNumber: 80,
        columnNumber: 74
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 24
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      id: text,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 29
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 87,
      columnNumber: 13
    }, this), text.map(function (t) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        id: t.text,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextElement, _objectSpread({}, t), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 28
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0VGV4dC5qcyJdLCJuYW1lcyI6WyJTcGVha0ljb24iLCJQb3N0U3BlYWsiLCJ0ZXh0Iiwic3RhcnQiLCJuZXh0IiwidXNlU3RhdGUiLCJwaXRjaCIsInNldFBpdGNoIiwicmF0ZSIsInNldFJhdGUiLCJ2b2ljZUluZGV4Iiwic2V0Vm9pY2VJbmRleCIsIm9uRW5kIiwidXNlU3BlZWNoU3ludGhlc2lzIiwic3BlYWsiLCJjYW5jZWwiLCJzcGVha2luZyIsInN1cHBvcnRlZCIsInZvaWNlcyIsInVzZUVmZmVjdCIsInZvaWNlIiwiUG9zdFRleHQiLCJUZXh0RWxlbWVudCIsInRpdGxlIiwiZmlsdGVyIiwidCIsIm1hcCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULEdBQW9CO0FBQ3ZCLHNCQUFPO0FBQUssV0FBTyxFQUFDLEtBQWI7QUFBbUIsU0FBSyxFQUFDLDRCQUF6QjtBQUF1RCxTQUFLLEVBQUMsS0FBN0Q7QUFDRixVQUFNLEVBQUMsS0FETDtBQUNXLFdBQU8sRUFBQyxXQURuQjtBQUFBLDJCQUVIO0FBQU0sZUFBUyxFQUFDLE1BQWhCO0FBQ0osT0FBQyxFQUFDO0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQU1IO0tBUGVBLFM7QUFTVCxTQUFTQyxTQUFULE9BQXdDO0FBQUE7O0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLEtBQWMsUUFBZEEsS0FBYztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTzs7QUFDM0M7QUFEMkMsa0JBRWpCQywrQ0FBUSxDQUFDLENBQUQsQ0FGUztBQUFBLE1BRXBDQyxLQUZvQztBQUFBLE1BRTdCQyxRQUY2Qjs7QUFBQSxtQkFHbkJGLCtDQUFRLENBQUMs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S0FBSyxnQkFBRztBQUFNLFFBQUUsRUFBRXJCLElBQVY7QUFBZ0IsZUFBUyxFQUFFLHFCQUEzQjtBQUFBLDZCQUFrRDtBQUN6RCxpQkFBUyxFQUFDLG9CQUQrQztBQUFBLGtCQUN6QkE7QUFEeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsZ0JBRVI7QUFBTSxRQUFFLEVBQUVBLElBQVY7QUFBQSw2QkFBZ0I7QUFBQSxrQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUdIOztBQUVELFNBQU9BLElBQUksaUJBQ1A7QUFBQSw0QkFDSSw4REFBQyxTQUFEO0FBQVcsVUFBSSxFQUFFQSxJQUFJLENBQUNzQixNQUFMLENBQVksVUFBQUMsQ0FBQztBQUFBLGVBQUVBLENBQUMsQ0FBQ1gsS0FBSjtBQUFBLE9BQWIsRUFBd0JZLEdBQXhCLENBQTRCLFVBQUFELENBQUM7QUFBQSxlQUFFQSxDQUFDLENBQUN2QixJQUFKO0FBQUEsT0FBN0IsRUFBdUN5QixJQUF2QyxDQUE0QyxFQUE1QztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFJS3pCLElBQUksQ0FBQ3dCLEdBQUwsQ0FBUyxVQUFBRCxDQUFDO0FBQUEsMEJBQUk7QUFBSyxVQUFFLEVBQUVBLENBQUMsQ0FBQ3ZCLElBQVg7QUFBQSwrQkFDWCw4REFBQyxXQUFELG9CQUFpQnVCLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQSxLQUFWLENBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7SUE1Q3VCSixRO1VBT2lDUixnRTs7O01BUGpDUSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNmM5YzMwNGU4NTZhZWQyOTk2ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZVNwZWVjaFN5bnRoZXNpc30gZnJvbSAncmVhY3Qtc3BlZWNoLWtpdCc7XHJcbmltcG9ydCBTYXksIHt1c2VTeW50aGVzaXplfSBmcm9tICdyZWFjdC1zYXknO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmltcG9ydCB7Q29sfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3BlYWtJY29uKCl7XHJcbiAgICByZXR1cm4gPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICB3aWR0aD1cIjEyOFwiXHJcbiAgICAgICAgIGhlaWdodD1cIjEyOFwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj5cclxuICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJpY29uXCJcclxuICAgIGQ9XCJNMzAuMTQ4IDUuNTg4Yy0yLjkzNC0zLjQyLTcuMjg4LTUuNTg4LTEyLjE0OC01LjU4OC04LjgzNyAwLTE2IDcuMTYzLTE2IDE2czcuMTYzIDE2IDE2IDE2YzQuODYgMCA5LjIxMy0yLjE2NyAxMi4xNDgtNS41ODhsLTEwLjE0OC0xMC40MTIgMTAuMTQ4LTEwLjQxMnpNMjIgMy43NjljMS4yMzIgMCAyLjIzMSAwLjk5OSAyLjIzMSAyLjIzMXMtMC45OTkgMi4yMzEtMi4yMzEgMi4yMzEtMi4yMzEtMC45OTktMi4yMzEtMi4yMzFjMC0xLjIzMiAwLjk5OS0yLjIzMSAyLjIzMS0yLjIzMXpcIi8+XHJcbiAgICA8L3N2Zz5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQb3N0U3BlYWsoe3RleHQsIHN0YXJ0LCBuZXh0fSkge1xyXG4gICAgLy8gY29uc3Qgc3ludGhlc2l6ZSA9IHVzZVN5bnRoZXNpemUoKTtcclxuICAgIGNvbnN0IFtwaXRjaCwgc2V0UGl0Y2hdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFt2b2ljZUluZGV4LCBzZXRWb2ljZUluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgb25FbmQgPSAoKSA9PiB7XHJcbiAgICAgICBpZihuZXh0KSBuZXh0KClcclxuICAgICB9O1xyXG4gICAgY29uc3Qge3NwZWFrLCBjYW5jZWwsIHNwZWFraW5nLCBzdXBwb3J0ZWQsIHZvaWNlc30gPSB1c2VTcGVlY2hTeW50aGVzaXMoe1xyXG4gICAgICAgIG9uRW5kLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgXHJcbiAgICAgICAgICAgICAgc3BlYWsoe3RleHQ6ICB0ZXh0fSk7IFxyXG4gICAgICAgIHJldHVybiAoKSA9PiAgY2FuY2VsKCk7XHJcbiAgICB9LCBbc3RhcnRdKTtcclxuICAgIFxyXG4gICAgY29uc3Qgdm9pY2UgPSB2b2ljZXNbdm9pY2VJbmRleF0gfHwgbnVsbDtcclxuIFxyXG4gICAgcmV0dXJuIHRleHQgJiYgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxkaXY+IFxyXG4gICAgICAgICAgICB7c3BlYWtpbmcgPyAoXHJcbiAgICAgICAgICAgICAgLy8gPGltZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMzBcIiBzcmM9e2Ake3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9pbWFnZXMvbWljcm9waG9uZS5zdmdgfSBvbkNsaWNrPXtjYW5jZWx9ICBhbHQ9XCJJdGFsaWFuIFRydWxsaVwiLz5cclxuICAgICAgICAgICAgICAvLyAgPGRpdiBjbGFzc05hbWU9eydtaWMnfSBvbkNsaWNrPXtjYW5jZWx9ICAgL1xyXG4gICAgICAgICAgICAgICAgPFNwZWFrSWNvbiBvbkNsaWNrPXtjYW5jZWx9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3BlYWsoeyB0ZXh0LCB2b2ljZSwgcmF0ZSwgcGl0Y2ggfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU3BlYWtcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFRleHQoe3RleHR9KSB7XHJcbiAgICBjb25zdCBbcGl0Y2gsIHNldFBpdGNoXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbdm9pY2VJbmRleCwgc2V0Vm9pY2VJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IG9uRW5kID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFlvdSBjb3VsZCBkbyBzb21ldGhpbmcgaGVyZSBhZnRlciBzcGVha2luZyBoYXMgZmluaXNoZWRcclxuICAgIH07XHJcbiAgICBjb25zdCB7c3BlYWssIGNhbmNlbCwgc3BlYWtpbmcsIHN1cHBvcnRlZCwgdm9pY2VzfSA9IHVzZVNwZWVjaFN5bnRoZXNpcyh7XHJcbiAgICAgICAgb25FbmQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB2b2ljZSA9IHZvaWNlc1t2b2ljZUluZGV4XSB8fCBudWxsO1xyXG5cclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGxldCBjYW5jZWxMaXN0PVtdO1xyXG4gICAgLy8gICAgIHRleHRcclxuICAgIC8vICAgICAgICAgLmZpbHRlcih0ID0+IHQuc3BlYWspXHJcbiAgICAvLyAgICAgICAgIC5mb3JFYWNoKHQgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgeyBjYW5jZWwgfSA9c3BlYWsoe3RleHQ6IHQudGV4dH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgY2FuY2VsTGlzdC5wdXNoKGNhbmNlbCk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gKCkgPT4gY2FuY2VsTGlzdC5mb3JFYWNoKGNhbmNlbD0+Y2FuY2VsKCkpO1xyXG4gICAgLy8gfSwgW3N5bnRoZXNpemVdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBUZXh0RWxlbWVudCh7dGl0bGUsIHRleHR9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlID8gPHNwYW4gaWQ9e3RleHR9IGNsYXNzTmFtZT17XCJjZW50ZXIgYWxpZ24tY2VudGVyXCJ9PjxoMVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWlub3IgYWxpZ24tY2VudGVyXCI+e3RleHR9PC9oMT48L3NwYW4+IDpcclxuICAgICAgICAgICAgPHNwYW4gaWQ9e3RleHR9PjxoMz57dGV4dH08L2gzPjwvc3Bhbj47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQgJiYgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxQb3N0U3BlYWsgdGV4dD17dGV4dC5maWx0ZXIodD0+dC5zcGVhaykubWFwKHQ9PnQudGV4dCkuam9pbignJyl9IC8+XHJcblxyXG5cclxuICAgICAgICAgICAge3RleHQubWFwKHQgPT4gPGRpdiBpZD17dC50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RWxlbWVudCB7Li4udH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9