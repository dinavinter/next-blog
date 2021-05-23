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
/* harmony import */ var D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_speech_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-speech-kit */ "./node_modules/react-speech-kit/dist/index.js");
/* harmony import */ var react_say__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-say */ "./node_modules/react-say/lib/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
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
  var _useState = useState(1),
      _useState2 = (0,D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState, 2),
      pitch = _useState2[0],
      setPitch = _useState2[1];

  var _useState3 = useState(1),
      _useState4 = (0,D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState3, 2),
      rate = _useState4[0],
      setRate = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = (0,D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState5, 2),
      voiceIndex = _useState6[0],
      setVoiceIndex = _useState6[1];

  var onEnd = function onEnd() {// You could do something here after speaking has finished
  };

  var _useSpeechSynthesis = (0,react_speech_kit__WEBPACK_IMPORTED_MODULE_4__.useSpeechSynthesis)({
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

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
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

  return text && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
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
  return [react_speech_kit__WEBPACK_IMPORTED_MODULE_4__.useSpeechSynthesis];
});

_c = PostSpeak;
function PostText(_ref3) {
  _s2();

  var _this2 = this;

  var text = _ref3.text;

  var _useState7 = useState(1),
      _useState8 = (0,D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState7, 2),
      pitch = _useState8[0],
      setPitch = _useState8[1];

  var _useState9 = useState(1),
      _useState10 = (0,D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState9, 2),
      rate = _useState10[0],
      setRate = _useState10[1];

  var _useState11 = useState(null),
      _useState12 = (0,D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useState11, 2),
      voiceIndex = _useState12[0],
      setVoiceIndex = _useState12[1];

  var onEnd = function onEnd() {// You could do something here after speaking has finished
  };

  var _useSpeechSynthesis2 = (0,react_speech_kit__WEBPACK_IMPORTED_MODULE_4__.useSpeechSynthesis)({
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

  return text && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
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
  return [react_speech_kit__WEBPACK_IMPORTED_MODULE_4__.useSpeechSynthesis];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0VGV4dC5qcyJdLCJuYW1lcyI6WyJQb3N0U3BlYWsiLCJ0ZXh0IiwidXNlU3RhdGUiLCJwaXRjaCIsInNldFBpdGNoIiwicmF0ZSIsInNldFJhdGUiLCJ2b2ljZUluZGV4Iiwic2V0Vm9pY2VJbmRleCIsIm9uRW5kIiwidXNlU3BlZWNoU3ludGhlc2lzIiwic3BlYWsiLCJjYW5jZWwiLCJzcGVha2luZyIsInN1cHBvcnRlZCIsInZvaWNlcyIsInZvaWNlIiwic3R5bGVGbGV4Um93IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJzdHlsZUNvbnRhaW5lclJhdGVQaXRjaCIsIm1hcmdpbkJvdHRvbSIsInVzZUVmZmVjdCIsIlRleHRFbGVtZW50IiwidGl0bGUiLCJtYXAiLCJ0IiwiUG9zdFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFNBQVQsT0FBMkI7QUFBQTs7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87O0FBQzlCO0FBRDhCLGtCQUVKQyxRQUFRLENBQUMsQ0FBRCxDQUZKO0FBQUE7QUFBQSxNQUV2QkMsS0FGdUI7QUFBQSxNQUVoQkMsUUFGZ0I7O0FBQUEsbUJBR05GLFFBQVEsQ0FBQyxDQUFELENBSEY7QUFBQTtBQUFBLE1BR3ZCRyxJQUh1QjtBQUFBLE1BR2pCQyxPQUhpQjs7QUFBQSxtQkFJTUosUUFBUSxDQUFDLElBQUQsQ0FKZDtBQUFBO0FBQUEsTUFJdkJLLFVBSnVCO0FBQUEsTUFJWEMsYUFKVzs7QUFLOUIsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTSxDQUNoQjtBQUNILEdBRkQ7O0FBTDhCLDRCQVF1QkMsb0VBQWtCLENBQUM7QUFDcEVELFNBQUssRUFBTEE7QUFEb0UsR0FBRCxDQVJ6QztBQUFBLE1BUXZCRSxLQVJ1Qix1QkFRdkJBLEtBUnVC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QUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUo7QUFBQSxPQUFWLENBRkwsRUFRS2IsUUFBUSxnQkFDTDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRUQsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESyxnQkFLTDtBQUNJLFlBQUksRUFBQyxRQURUO0FBRUksZUFBTyxFQUFFO0FBQUEsaUJBQU1ELEtBQUssQ0FBQztBQUFFVixnQkFBSSxFQUFKQSxJQUFGO0FBQVFlLGlCQUFLLEVBQUxBLEtBQVI7QUFBZVgsZ0JBQUksRUFBSkEsSUFBZjtBQUFxQkYsaUJBQUssRUFBTEE7QUFBckIsV0FBRCxDQUFYO0FBQUEsU0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBZjtBQXVCSDs7SUF2RHVCd0IsUTtVQU9pQ2pCLGdFOzs7TUFQakNpQixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDA4NWViMDYzYmZmYzRmZmJkNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlU3BlZWNoU3ludGhlc2lzfSBmcm9tICdyZWFjdC1zcGVlY2gta2l0JztcclxuaW1wb3J0IFNheSwge3VzZVN5bnRoZXNpemV9IGZyb20gJ3JlYWN0LXNheSc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQb3N0U3BlYWsoe3RleHR9KSB7XHJcbiAgICAvLyBjb25zdCBzeW50aGVzaXplID0gdXNlU3ludGhlc2l6ZSgpO1xyXG4gICAgY29uc3QgW3BpdGNoLCBzZXRQaXRjaF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3ZvaWNlSW5kZXgsIHNldFZvaWNlSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBvbkVuZCA9ICgpID0+IHtcclxuICAgICAgICAvLyBZb3UgY291bGQgZG8gc29tZXRoaW5nIGhlcmUgYWZ0ZXIgc3BlYWtpbmcgaGFzIGZpbmlzaGVkXHJcbiAgICB9O1xyXG4gICAgY29uc3Qge3NwZWFrLCBjYW5jZWwsIHNwZWFraW5nLCBzdXBwb3J0ZWQsIHZvaWNlc30gPSB1c2VTcGVlY2hTeW50aGVzaXMoe1xyXG4gICAgICAgIG9uRW5kLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgdm9pY2UgPSB2b2ljZXNbdm9pY2VJbmRleF0gfHwgbnVsbDtcclxuXHJcbiAgICBjb25zdCBzdHlsZUZsZXhSb3cgPSB7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93J307XHJcbiAgICBjb25zdCBzdHlsZUNvbnRhaW5lclJhdGVQaXRjaCA9IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMixcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgbGV0IGNhbmNlbExpc3Q9W107XHJcbiAgICAvLyAgICAgdGV4dFxyXG4gICAgLy8gICAgICAgICAuZmlsdGVyKHQgPT4gdC5zcGVhaylcclxuICAgIC8vICAgICAgICAgLmZvckVhY2godCA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zdCB7IGNhbmNlbCB9ID1zeW50aGVzaXplKHt0ZXh0OiB0LnRleHR9KTtcclxuICAgIC8vICAgICAgICAgICAgIGNhbmNlbExpc3QucHVzaChjYW5jZWwpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgcmV0dXJuICgpID0+IGNhbmNlbExpc3QuZm9yRWFjaChjYW5jZWw9PmNhbmNlbCgpKTtcclxuICAgIC8vIH0sIFtzeW50aGVzaXplXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzcGVhaygnQSBxdWljayBicm93biBmb3gganVtcGVkIG92ZXIgdGhlIGxhenkgZG9ncy4nKTtcclxuXHJcbiAgICAgICAgLy8gV2hlbiB0aGlzIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQsIHRoZSBzeW50aGVzaXMgd2lsbCBiZSBjYW5jZWxsZWQuXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIFRleHRFbGVtZW50KHt0aXRsZSwgdGV4dH0pIHtcclxuICAgICAgICByZXR1cm4gdGl0bGUgPyA8c3BhbiBpZD17dGV4dH0gY2xhc3NOYW1lPXtcImNlbnRlciBhbGlnbi1jZW50ZXJcIn0+PGgxXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW5vciBhbGlnbi1jZW50ZXJcIj57dGV4dH08L2gxPjwvc3Bhbj4gOlxyXG4gICAgICAgICAgICA8c3BhbiBpZD17dGV4dH0+PGgzPnt0ZXh0fTwvaDM+PC9zcGFuPjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dCAmJiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIHt0ZXh0Lm1hcCh0ID0+IDxkaXYgaWQ9e3QudGV4dH0+PFRleHRFbGVtZW50IHsuLi50fSAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtzcGVha2luZyA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2NhbmNlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgU3RvcFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3BlYWsoeyB0ZXh0LCB2b2ljZSwgcmF0ZSwgcGl0Y2ggfSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU3BlYWtcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFRleHQoe3RleHR9KSB7XHJcbiAgICBjb25zdCBbcGl0Y2gsIHNldFBpdGNoXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbdm9pY2VJbmRleCwgc2V0Vm9pY2VJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IG9uRW5kID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFlvdSBjb3VsZCBkbyBzb21ldGhpbmcgaGVyZSBhZnRlciBzcGVha2luZyBoYXMgZmluaXNoZWRcclxuICAgIH07XHJcbiAgICBjb25zdCB7c3BlYWssIGNhbmNlbCwgc3BlYWtpbmcsIHN1cHBvcnRlZCwgdm9pY2VzfSA9IHVzZVNwZWVjaFN5bnRoZXNpcyh7XHJcbiAgICAgICAgb25FbmQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB2b2ljZSA9IHZvaWNlc1t2b2ljZUluZGV4XSB8fCBudWxsO1xyXG5cclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGxldCBjYW5jZWxMaXN0PVtdO1xyXG4gICAgLy8gICAgIHRleHRcclxuICAgIC8vICAgICAgICAgLmZpbHRlcih0ID0+IHQuc3BlYWspXHJcbiAgICAvLyAgICAgICAgIC5mb3JFYWNoKHQgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgeyBjYW5jZWwgfSA9c3BlYWsoe3RleHQ6IHQudGV4dH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgY2FuY2VsTGlzdC5wdXNoKGNhbmNlbCk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gKCkgPT4gY2FuY2VsTGlzdC5mb3JFYWNoKGNhbmNlbD0+Y2FuY2VsKCkpO1xyXG4gICAgLy8gfSwgW3N5bnRoZXNpemVdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBUZXh0RWxlbWVudCh7dGl0bGUsIHRleHR9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlID8gPHNwYW4gaWQ9e3RleHR9IGNsYXNzTmFtZT17XCJjZW50ZXIgYWxpZ24tY2VudGVyXCJ9PjxoMVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWlub3IgYWxpZ24tY2VudGVyXCI+e3RleHR9PC9oMT48L3NwYW4+IDpcclxuICAgICAgICAgICAgPHNwYW4gaWQ9e3RleHR9PjxoMz57dGV4dH08L2gzPjwvc3Bhbj47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQgJiYgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICB7dGV4dC5tYXAodCA9PiA8ZGl2IGlkPXt0LnRleHR9PjxUZXh0RWxlbWVudCB7Li4udH0gLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7c3BlYWtpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjYW5jZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIFN0b3BcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNwZWFrKHsgdGV4dCwgdm9pY2UsIHJhdGUsIHBpdGNoIH0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNwZWFrXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9