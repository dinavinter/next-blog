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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0VGV4dC5qcyJdLCJuYW1lcyI6WyJTcGVha0ljb24iLCJzcGVha2luZyIsIlZvaWNlVmlldyIsInZvaWNlcyIsIm1hcCIsInZvaWNlIiwidm9pY2VVUkkiLCJQb3N0U3BlYWsiLCJ0ZXh0Iiwic3RhcnQiLCJ1c2VTdGF0ZSIsInBpdGNoIiwic2V0UGl0Y2giLCJyYXRlIiwic2V0UmF0ZSIsInZvaWNlSW5kZXgiLCJzZXRWb2ljZUluZGV4IiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwib25FbmQiLCJ1c2VTcGVlY2hTeW50aGVzaXMiLCJzcGVhayIsImNhbmNlbCIsInN1cHBvcnRlZCIsImZpbHRlciIsInYiLCJ1c2VFZmZlY3QiLCJ0b2dnbGVTcGVhayIsImUiLCJQb3N0VGV4dCIsIlRleHRFbGVtZW50IiwidGl0bGUiLCJ0Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLFNBQVNBLFNBQVQsT0FBK0I7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDbEMsc0JBQU87QUFBSyxXQUFPLEVBQUMsS0FBYjtBQUFtQixTQUFLLEVBQUMsNEJBQXpCO0FBQXNELFNBQUssRUFBQyxJQUE1RDtBQUNLLFVBQU0sRUFBQyxJQURaO0FBQ2lCLFdBQU8sRUFBQyxXQUR6QjtBQUFBLDJCQUVIO0FBQU0sZUFBUyx1QkFBZ0JBLFFBQVEsR0FBRyxVQUFILEdBQWdCLEVBQXhDLENBQWY7QUFDTSxPQUFDLEVBQUM7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBTUg7S0FQZUQsUzs7QUFTaEIsU0FBU0UsU0FBVCxRQUE2QjtBQUFBOztBQUFBLE1BQVRDLE1BQVMsU0FBVEEsTUFBUztBQUN6QixzQkFBTztBQUFBLGNBQ0ZBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUFDLEtBQUs7QUFBQSww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U0FBRDtBQUFXLFVBQUksRUFBRUEsSUFBSSxDQUFDZ0IsTUFBTCxDQUFZLFVBQUFRLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNYLEtBQU47QUFBQSxPQUFiLEVBQTBCakIsR0FBMUIsQ0FBOEIsVUFBQTRCLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUN4QixJQUFOO0FBQUEsT0FBL0IsRUFBMkN5QixJQUEzQyxDQUFnRCxFQUFoRDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsRUFJQ3pCLElBQUksQ0FBQ0osR0FBTCxDQUFTLFVBQUE0QixDQUFDO0FBQUEsMEJBQUk7QUFBSyxVQUFFLEVBQUVBLENBQUMsQ0FBQ3hCLElBQVg7QUFBQSwrQkFDZiw4REFBQyxXQUFELG9CQUFpQndCLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEZTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFKO0FBQUEsS0FBVixDQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBWUM7O0lBNUN1QkgsUTtVQU82QlQsZ0U7OztNQVA3QlMsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L2dyb3Vwcy5kYTExNDZmYjI1YmI5MTllMjY0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlU3BlZWNoU3ludGhlc2lzfSBmcm9tICdyZWFjdC1zcGVlY2gta2l0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTcGVha0ljb24oe3NwZWFraW5nfSkge1xyXG4gICAgcmV0dXJuIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxyXG4gICAgICAgIDxwYXRoIGNsYXNzTmFtZT17YHNwZWFrX2ljb24gJHtzcGVha2luZyA/ICdzcGVha2luZycgOiAnJ31gfVxyXG4gICAgICAgICAgICAgIGQ9XCJNMzAuMTQ4IDUuNTg4Yy0yLjkzNC0zLjQyLTcuMjg4LTUuNTg4LTEyLjE0OC01LjU4OC04LjgzNyAwLTE2IDcuMTYzLTE2IDE2czcuMTYzIDE2IDE2IDE2YzQuODYgMCA5LjIxMy0yLjE2NyAxMi4xNDgtNS41ODhsLTEwLjE0OC0xMC40MTIgMTAuMTQ4LTEwLjQxMnpNMjIgMy43NjljMS4yMzIgMCAyLjIzMSAwLjk5OSAyLjIzMSAyLjIzMXMtMC45OTkgMi4yMzEtMi4yMzEgMi4yMzEtMi4yMzEtMC45OTktMi4yMzEtMi4yMzFjMC0xLjIzMiAwLjk5OS0yLjIzMSAyLjIzMS0yLjIzMXpcIi8+XHJcbiAgICA8L3N2Zz5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFZvaWNlVmlldyh7dm9pY2VzfSkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAge3ZvaWNlcy5tYXAodm9pY2UgPT5cclxuICAgICAgICAgICAgPGRpdj4gJHt2b2ljZS52b2ljZVVSSX1gXHJcbiAgICAgICAgICAgIDwvZGl2Pil9XHJcblxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQb3N0U3BlYWsoe3RleHQsIHN0YXJ0fSkge1xyXG4gICAgLy8gY29uc3Qgc3ludGhlc2l6ZSA9IHVzZVN5bnRoZXNpemUoKTtcclxuICAgIGNvbnN0IFtwaXRjaCwgc2V0UGl0Y2hdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFt2b2ljZUluZGV4LCBzZXRWb2ljZUluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgb25FbmQgPSAoKSA9PiB7XHJcblxyXG4gICAgfTtcclxuICAgIGNvbnN0IHtzcGVhaywgY2FuY2VsLCBzcGVha2luZywgc3VwcG9ydGVkLCB2b2ljZXN9ID0gdXNlU3BlZWNoU3ludGhlc2lzKHtcclxuICAgICAgICBvbkVuZCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbnN0IHZvaWNlID0gdm9pY2VzLmZpbHRlcih2PT52LnZvaWNlVVJJID09PSBcIk1pY3Jvc29mdCBEYXZpZCBEZXNrdG9wIC0gRW5nbGlzaCAoVW5pdGVkIFN0YXRlcylcIilbMF07XHJcbiAgICBjb25zdCB2b2ljZSA9IHZvaWNlcy5maWx0ZXIodiA9PiB2LnZvaWNlVVJJID09PSBcIkdvb2dsZSBVSyBFbmdsaXNoIE1hbGVcIilbMF07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzcGVhayh7dGV4dDogdGV4dCwgdm9pY2U6IHZvaWNlfSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbCgpO1xyXG4gICAgfSwgW3N0YXJ0XSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVNwZWFrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzcGVha2luZylcclxuICAgICAgICAgICAgY2FuY2VsKCk7XHJcbiAgICAgICAgZWxzZSBzcGVhayh7dGV4dDogdGV4dCwgdm9pY2U6IHZvaWNlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQgJiYgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7c3BlYWtpbmcgP1xyXG4gICAgICAgICAgICAgICAgPFNwZWFrSWNvbiBzcGVha2luZz17c3BlYWtpbmd9IG9uQ2xpY2s9e2NhbmNlbH0vPiA6XHJcbiAgICAgICAgICAgICAgICA8U3BlYWtJY29uIHNwZWFraW5nPXtzcGVha2luZ30gb25DbGljaz17ZSA9PiBzcGVhayh7dGV4dDogdGV4dCwgdm9pY2U6IHZvaWNlfSl9Lz5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0VGV4dCh7dGV4dH0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtwaXRjaCwgc2V0UGl0Y2hdID0gdXNlU3RhdGUoMSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFt2b2ljZUluZGV4LCBzZXRWb2ljZUluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb25FbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBZb3UgY291bGQgZG8gc29tZXRoaW5nIGhlcmUgYWZ0ZXIgc3BlYWtpbmcgaGFzIGZpbmlzaGVkXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3NwZWFrLCBjYW5jZWwsIHNwZWFraW5nLCBzdXBwb3J0ZWQsIHZvaWNlc30gPSB1c2VTcGVlY2hTeW50aGVzaXMoe1xyXG4gICAgICAgICAgICAgICAgb25FbmQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2b2ljZSA9IHZvaWNlc1t2b2ljZUluZGV4XSB8fCBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBjYW5jZWxMaXN0PVtdO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRleHRcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLmZpbHRlcih0ID0+IHQuc3BlYWspXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgeyBjYW5jZWwgfSA9c3BlYWsoe3RleHQ6IHQudGV4dH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2FuY2VsTGlzdC5wdXNoKGNhbmNlbCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gKCkgPT4gY2FuY2VsTGlzdC5mb3JFYWNoKGNhbmNlbD0+Y2FuY2VsKCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSwgW3N5bnRoZXNpemVdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBUZXh0RWxlbWVudCh7dGl0bGUsIHRleHR9KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGl0bGUgPyA8c3BhbiBpZD17dGV4dH0gY2xhc3NOYW1lPXtcImNlbnRlciBhbGlnbi1jZW50ZXJcIn0+PGgxXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5vciBhbGlnbi1jZW50ZXJcIj57dGV4dH08L2gxPjwvc3Bhbj4gOlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9e3RleHR9PjxoMz57dGV4dH08L2gzPjwvc3Bhbj47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHQgJiZcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8UG9zdFNwZWFrIHRleHQ9e3RleHQuZmlsdGVyKHQgPT4gdC5zcGVhaykubWFwKHQgPT4gdC50ZXh0KS5qb2luKCcnKX0vPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB7dGV4dC5tYXAodCA9PiA8ZGl2IGlkPXt0LnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRFbGVtZW50IHsuLi50fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0iXSwic291cmNlUm9vdCI6IiJ9