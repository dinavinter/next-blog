self["webpackHotUpdate_N_E"]("pages/post/groups",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0VGV4dC5qcyJdLCJuYW1lcyI6WyJTcGVha0ljb24iLCJQb3N0U3BlYWsiLCJ0ZXh0Iiwic3RhcnQiLCJuZXh0IiwidXNlU3RhdGUiLCJwaXRjaCIsInNldFBpdGNoIiwicmF0ZSIsInNldFJhdGUiLCJ2b2ljZUluZGV4Iiwic2V0Vm9pY2VJbmRleCIsIm9uRW5kIiwidXNlU3BlZWNoU3ludGhlc2lzIiwic3BlYWsiLCJjYW5jZWwiLCJzcGVha2luZyIsInN1cHBvcnRlZCIsInZvaWNlcyIsInVzZUVmZmVjdCIsInZvaWNlIiwiUG9zdFRleHQiLCJUZXh0RWxlbWVudCIsInRpdGxlIiwiZmlsdGVyIiwidCIsIm1hcCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULEdBQW9CO0FBQ3ZCLHNCQUFPO0FBQUssV0FBTyxFQUFDLEtBQWI7QUFBbUIsU0FBSyxFQUFDLDRCQUF6QjtBQUF1RCxTQUFLLEVBQUMsS0FBN0Q7QUFDRixVQUFNLEVBQUMsS0FETDtBQUNXLFdBQU8sRUFBQyxXQURuQjtBQUFBLDJCQUVIO0FBQU0sZUFBUyxFQUFDLE1BQWhCO0FBQ0osT0FBQyxFQUFDO0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQU1IO0tBUGVBLFM7QUFTVCxTQUFTQyxTQUFULE9BQXdDO0FBQUE7O0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLEtBQWMsUUFBZEEsS0FBYztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTzs7QUFDM0M7QUFEMkMsa0JBRWpCQywrQ0FBUSxDQUFDLENBQUQsQ0FGUztBQUFBLE1BRXBDQyxLQUZvQztBQUFBLE1BRTdCQyxRQUY2Qjs7QUFBQSxtQkFHbkJGLCtDQUFRLENBQUMs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S0FBSyxnQkFBRztBQUFNLFFBQUUsRUFBRXJCLElBQVY7QUFBZ0IsZUFBUyxFQUFFLHFCQUEzQjtBQUFBLDZCQUFrRDtBQUN6RCxpQkFBUyxFQUFDLG9CQUQrQztBQUFBLGtCQUN6QkE7QUFEeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsZ0JBRVI7QUFBTSxRQUFFLEVBQUVBLElBQVY7QUFBQSw2QkFBZ0I7QUFBQSxrQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUdIOztBQUVELFNBQU9BLElBQUksaUJBQ1A7QUFBQSw0QkFDSSw4REFBQyxTQUFEO0FBQVcsVUFBSSxFQUFFQSxJQUFJLENBQUNzQixNQUFMLENBQVksVUFBQUMsQ0FBQztBQUFBLGVBQUVBLENBQUMsQ0FBQ1gsS0FBSjtBQUFBLE9BQWIsRUFBd0JZLEdBQXhCLENBQTRCLFVBQUFELENBQUM7QUFBQSxlQUFFQSxDQUFDLENBQUN2QixJQUFKO0FBQUEsT0FBN0IsRUFBdUN5QixJQUF2QyxDQUE0QyxFQUE1QztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFJS3pCLElBQUksQ0FBQ3dCLEdBQUwsQ0FBUyxVQUFBRCxDQUFDO0FBQUEsMEJBQUk7QUFBSyxVQUFFLEVBQUVBLENBQUMsQ0FBQ3ZCLElBQVg7QUFBQSwrQkFDWCw4REFBQyxXQUFELG9CQUFpQnVCLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQSxLQUFWLENBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7SUE1Q3VCSixRO1VBT2lDUixnRTs7O01BUGpDUSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvZ3JvdXBzLjZjOWMzMDRlODU2YWVkMjk5NmZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTcGVlY2hTeW50aGVzaXN9IGZyb20gJ3JlYWN0LXNwZWVjaC1raXQnO1xyXG5pbXBvcnQgU2F5LCB7dXNlU3ludGhlc2l6ZX0gZnJvbSAncmVhY3Qtc2F5JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQge0NvbH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNwZWFrSWNvbigpe1xyXG4gICAgcmV0dXJuIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAgd2lkdGg9XCIxMjhcIlxyXG4gICAgICAgICBoZWlnaHQ9XCIxMjhcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+XHJcbiAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiaWNvblwiXHJcbiAgICBkPVwiTTMwLjE0OCA1LjU4OGMtMi45MzQtMy40Mi03LjI4OC01LjU4OC0xMi4xNDgtNS41ODgtOC44MzcgMC0xNiA3LjE2My0xNiAxNnM3LjE2MyAxNiAxNiAxNmM0Ljg2IDAgOS4yMTMtMi4xNjcgMTIuMTQ4LTUuNTg4bC0xMC4xNDgtMTAuNDEyIDEwLjE0OC0xMC40MTJ6TTIyIDMuNzY5YzEuMjMyIDAgMi4yMzEgMC45OTkgMi4yMzEgMi4yMzFzLTAuOTk5IDIuMjMxLTIuMjMxIDIuMjMxLTIuMjMxLTAuOTk5LTIuMjMxLTIuMjMxYzAtMS4yMzIgMC45OTktMi4yMzEgMi4yMzEtMi4yMzF6XCIvPlxyXG4gICAgPC9zdmc+XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9zdFNwZWFrKHt0ZXh0LCBzdGFydCwgbmV4dH0pIHtcclxuICAgIC8vIGNvbnN0IHN5bnRoZXNpemUgPSB1c2VTeW50aGVzaXplKCk7XHJcbiAgICBjb25zdCBbcGl0Y2gsIHNldFBpdGNoXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbdm9pY2VJbmRleCwgc2V0Vm9pY2VJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IG9uRW5kID0gKCkgPT4ge1xyXG4gICAgICAgaWYobmV4dCkgbmV4dCgpXHJcbiAgICAgfTtcclxuICAgIGNvbnN0IHtzcGVhaywgY2FuY2VsLCBzcGVha2luZywgc3VwcG9ydGVkLCB2b2ljZXN9ID0gdXNlU3BlZWNoU3ludGhlc2lzKHtcclxuICAgICAgICBvbkVuZCxcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IFxyXG4gICAgICAgICAgICAgIHNwZWFrKHt0ZXh0OiAgdGV4dH0pOyBcclxuICAgICAgICByZXR1cm4gKCkgPT4gIGNhbmNlbCgpO1xyXG4gICAgfSwgW3N0YXJ0XSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHZvaWNlID0gdm9pY2VzW3ZvaWNlSW5kZXhdIHx8IG51bGw7XHJcbiBcclxuICAgIHJldHVybiB0ZXh0ICYmIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgICAge3NwZWFraW5nID8gKFxyXG4gICAgICAgICAgICAgIC8vIDxpbWcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjMwXCIgc3JjPXtgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vaW1hZ2VzL21pY3JvcGhvbmUuc3ZnYH0gb25DbGljaz17Y2FuY2VsfSAgYWx0PVwiSXRhbGlhbiBUcnVsbGlcIi8+XHJcbiAgICAgICAgICAgICAgLy8gIDxkaXYgY2xhc3NOYW1lPXsnbWljJ30gb25DbGljaz17Y2FuY2VsfSAgIC9cclxuICAgICAgICAgICAgICAgIDxTcGVha0ljb24gb25DbGljaz17Y2FuY2VsfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNwZWFrKHsgdGV4dCwgdm9pY2UsIHJhdGUsIHBpdGNoIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNwZWFrXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RUZXh0KHt0ZXh0fSkge1xyXG4gICAgY29uc3QgW3BpdGNoLCBzZXRQaXRjaF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3ZvaWNlSW5kZXgsIHNldFZvaWNlSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBvbkVuZCA9ICgpID0+IHtcclxuICAgICAgICAvLyBZb3UgY291bGQgZG8gc29tZXRoaW5nIGhlcmUgYWZ0ZXIgc3BlYWtpbmcgaGFzIGZpbmlzaGVkXHJcbiAgICB9O1xyXG4gICAgY29uc3Qge3NwZWFrLCBjYW5jZWwsIHNwZWFraW5nLCBzdXBwb3J0ZWQsIHZvaWNlc30gPSB1c2VTcGVlY2hTeW50aGVzaXMoe1xyXG4gICAgICAgIG9uRW5kLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgdm9pY2UgPSB2b2ljZXNbdm9pY2VJbmRleF0gfHwgbnVsbDtcclxuXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBsZXQgY2FuY2VsTGlzdD1bXTtcclxuICAgIC8vICAgICB0ZXh0XHJcbiAgICAvLyAgICAgICAgIC5maWx0ZXIodCA9PiB0LnNwZWFrKVxyXG4gICAgLy8gICAgICAgICAuZm9yRWFjaCh0ID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IHsgY2FuY2VsIH0gPXNwZWFrKHt0ZXh0OiB0LnRleHR9KTtcclxuICAgIC8vICAgICAgICAgICAgIGNhbmNlbExpc3QucHVzaChjYW5jZWwpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgcmV0dXJuICgpID0+IGNhbmNlbExpc3QuZm9yRWFjaChjYW5jZWw9PmNhbmNlbCgpKTtcclxuICAgIC8vIH0sIFtzeW50aGVzaXplXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gVGV4dEVsZW1lbnQoe3RpdGxlLCB0ZXh0fSkge1xyXG4gICAgICAgIHJldHVybiB0aXRsZSA/IDxzcGFuIGlkPXt0ZXh0fSBjbGFzc05hbWU9e1wiY2VudGVyIGFsaWduLWNlbnRlclwifT48aDFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbm9yIGFsaWduLWNlbnRlclwiPnt0ZXh0fTwvaDE+PC9zcGFuPiA6XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPXt0ZXh0fT48aDM+e3RleHR9PC9oMz48L3NwYW4+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0ICYmICBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UG9zdFNwZWFrIHRleHQ9e3RleHQuZmlsdGVyKHQ9PnQuc3BlYWspLm1hcCh0PT50LnRleHQpLmpvaW4oJycpfSAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIHt0ZXh0Lm1hcCh0ID0+IDxkaXYgaWQ9e3QudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEVsZW1lbnQgey4uLnR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==