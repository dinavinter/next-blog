self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/List.js":
/*!****************************!*\
  !*** ./components/List.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "Item": function() { return /* binding */ Item; },
/* harmony export */   "openSpring": function() { return /* binding */ openSpring; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _Layout_BlogNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout/BlogNav */ "./components/Layout/BlogNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\dina\\demo\\next-app\\components\\List.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_dina_demo_next_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Card(_ref) {
  var id = _ref.id,
      title = _ref.title,
      category = _ref.category,
      theme = _ref.theme,
      render = _ref.render,
      href = _ref.href;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "card ".concat(theme),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-content-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
        className: "card-content",
        layoutId: "card-container-".concat(id),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
          className: "title-container",
          layoutId: "title-container-".concat(id),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "category",
            children: category
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
          className: "card-image-container",
          layoutId: "card-image-container-".concat(id),
          children: render
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: href,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card-open-link"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

_c = Card;
function List(_ref2) {
  _s();

  var _this = this;

  var selectedId = _ref2.selectedId;
  var items = (0,_Layout_BlogNav__WEBPACK_IMPORTED_MODULE_4__.usePosts)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "jsx-2057462027" + " " + "card-list",
      children: items.map(function (card) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, _objectSpread(_objectSpread({}, card), {}, {
          isSelected: card.href === selectedId
        }), card.href, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "2057462027",
      children: ".App{font-family:sans-serif;text-align:center;}body{margin:0;padding:0;background:black;overflow-y:scroll;--secondary:rgb(161,161,161);--divider:#343434;}*{box-sizing:border-box;font-family:\".SFNSText\",\"SFProText-Regular\",\"SFUIText-Regular\",\".SFUIText\", Helvetica,Arial,sans-serif;-webkit-tap-highlight-color:rgba(0,0,0,0);}#root{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.screen{width:100%;height:100%;}.container{max-width:990px;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;padding:45px 25px;}h1{font-weight:bold;color:white;margin:6px 0 12px;}.date{color:var(--secondary);font-size:14px;text-transform:uppercase;}header{border-bottom:1px solid var(--divider);position:relative;}.avatar{background:var(--divider);border-radius:50%;position:absolute;bottom:12px;right:0;overflow:hidden;}.avatar,.avatar img{width:40px;height:40px;}ul,li{list-style:none;padding:0;margin:0;}.card-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;}.card{position:relative;padding:25px;height:460px;-webkit-flex:0 0 40%;-ms-flex:0 0 40%;flex:0 0 40%;max-width:40%;}.card:nth-child(4n + 1),.card:nth-child(4n + 4){-webkit-flex:0 0 60%;-ms-flex:0 0 60%;flex:0 0 60%;max-width:60%;}.card:nth-child(odd){padding-left:0;}.card:nth-child(even){padding-right:0;}.card-content-container{width:100%;height:100%;position:relative;display:block;pointer-events:none;}.card-content-container.open{top:0;left:0;right:0;position:fixed;z-index:1;overflow:hidden;padding:40px 0;}.card-content{pointer-events:auto;position:relative;border-radius:20px;background:#1c1c1e;overflow:hidden;width:100%;height:100%;margin:0 auto;}.open .card-content{height:auto;max-width:700px;overflow:hidden;pointer-events:none;}.card-open-link{position:absolute;top:0;left:0;right:0;bottom:0;}.card-image-container{position:absolute;top:0;left:0;overflow:hidden;height:420px;width:100vw;}.open .card-image-container,.open .title-container{z-index:1;}.title-container{position:absolute;top:15px;left:15px;max-width:300px;}.open .title-container{top:30px;left:30px;}h2{color:#fff;margin:8px 0;}.category{color:#fff;font-size:14px;text-transform:uppercase;}.overlay{z-index:1;position:fixed;background:rgba(0,0,0,0.8);will-change:opacity;top:0;bottom:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:100%;max-width:990px;}.overlay a{display:block;position:fixed;top:0;bottom:0;width:100vw;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.content-container{padding:460px 35px 35px 35px;max-width:700px;width:90vw;}p{color:#9d9ca1;font-size:20px;line-height:28px;}@media only screen and (max-width:800px){.card{-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;}.card:nth-child(4n + 1),.card:nth-child(4n + 4){-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;}}@media only screen and (max-width:600px){.card{-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;max-width:100%;padding:10px;padding-left:0;padding-right:0;}.card:nth-child(4n + 1),.card:nth-child(4n + 4){-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;max-width:100%;}.card-content-container.open{padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkaW5hXFxkZW1vXFxuZXh0LWFwcFxcY29tcG9uZW50c1xcTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QytCLEFBRzBCLEFBS2QsQUFTYSxBQU9ULEFBS0YsQUFLSyxBQU1DLEFBTU0sQUFNZ0IsQUFLYixBQVVmLEFBTUssQUFNSCxBQU1LLEFBU0wsQUFLRSxBQUlDLEFBSUwsQUFRTCxBQVVjLEFBV1IsQUFPTSxBQVFBLEFBVVIsQUFJUSxBQU9ULEFBS0UsQUFLQSxBQU1ELEFBYUksQUFXZSxBQU1mLEFBT0MsQUFNQSxBQU9DLEFBU0EsQUFLSixNQXhJTCxHQTNHRyxBQW9LQSxDQVhaLEFBMkJpQixBQWdFZixDQS9OWSxBQXNDQSxBQXdDQSxBQXNFQyxBQUtFLENBOUNDLENBcEJSLENBcUZPLEFBaUJBLENBdkhqQixDQWpFZ0IsQUF1Q0osQUE4QlosQ0EvRGMsQ0E2Q0MsQUEwRFAsQUFRQSxBQWNHLENBNUpRLEFBb0tuQixDQWhEb0IsQ0FSSCxDQW5HZSxDQWZaLEFBMkJwQixBQWdCaUIsQUFzQmpCLEFBd0NvQixDQW9DWCxBQVFBLEFBMEJULENBV2dDLENBcElaLEFBaUJULEFBNkdnQixDQWpCZixDQTdCTSxDQWhHRSxBQWlLWixBQVVVLEFBT0MsRUFySUosQUEyREwsQUFRUSxJQTlFbEIsQUFnSVcsQ0FqTVMsQUE0R1IsQ0FpRE0sQ0F4SFMsQUErRU4sQ0ExRUQsQUE4RlQsRUE5SVgsQUF5R2dCLEdBbkRJLEFBNkJMLEFBbURPLEFBa0VSLENBU0QsQ0E5RkssQUFxR2xCLENBbExBLEFBZ0hlLENBUGYsR0FyRGdCLEFBMEZoQixBQXlDa0IsQUFNQSxDQXpDSSxDQXRCdEIsQ0E3SmlDLEFBbU9kLEFBU0EsQ0F6SUcsQ0ErRlgsQUFTWCxDQWpLQSxBQTBFcUIsR0E0QlAsRUFoR0EsQUE2REcsQ0F4RWpCLENBMkZBLENBNUNBLEFBZ0g2QixBQW1CM0IsQUFNQSxJQU9lLEFBU2YsQ0FyTmtCLEVBeUhwQixBQW1DUSxFQXZLaUIsQUFvQ2YsQUFtQk8sQ0FnQ2pCLENBaUJrQixDQVBsQixDQXVFVyxJQW5JTyxBQW1MQyxDQXBPQyxJQXFMVCxDQTdKWCxJQTZGYSxHQXpDRyxDQTBHYSxDQStDVCxDQW5McEIsR0FqREEsRUFxSGMsTUF6Q2QsSUF5SkUsRUEvR2MsVUFoSCtCLElBaUgvQyxFQXBEMkIsMkJBZ0kzQixTQTVMQSxNQUtBLGdCQTBLYSxXQUNLLGNBbkhsQixFQW9IQSIsImZpbGUiOiJEOlxcZGluYVxcZGVtb1xcbmV4dC1hcHBcXGNvbXBvbmVudHNcXExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQge3VzZVBvc3RzfSBmcm9tIFwiLi9MYXlvdXQvQmxvZ05hdlwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiBDYXJkKHtpZCwgdGl0bGUsIGNhdGVnb3J5LCB0aGVtZSwgcmVuZGVyLCBocmVmfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17YGNhcmQgJHt0aGVtZX1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIiBsYXlvdXRJZD17YGNhcmQtY29udGFpbmVyLSR7aWR9YH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdGxlLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dElkPXtgdGl0bGUtY29udGFpbmVyLSR7aWR9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+e2NhdGVnb3J5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltYWdlLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dElkPXtgY2FyZC1pbWFnZS1jb250YWluZXItJHtpZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FyZC1vcGVuLWxpbmtgfS8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpc3Qoe3NlbGVjdGVkSWR9KSB7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSB1c2VQb3N0cygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGNhcmQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17Y2FyZC5ocmVmfSB7Li4uY2FyZH0gaXNTZWxlY3RlZD17Y2FyZC5ocmVmID09PSBzZWxlY3RlZElkfS8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuLkFwcCB7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgLS1zZWNvbmRhcnk6IHJnYigxNjEsIDE2MSwgMTYxKTtcclxuICAtLWRpdmlkZXI6ICMzNDM0MzQ7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6IFwiLlNGTlNUZXh0XCIsIFwiU0ZQcm9UZXh0LVJlZ3VsYXJcIiwgXCJTRlVJVGV4dC1SZWd1bGFyXCIsIFwiLlNGVUlUZXh0XCIsXHJcbiAgICBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuI3Jvb3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY3JlZW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA5OTBweDtcclxuICBmbGV4OiAxIDEgMTAwJTtcclxuICBwYWRkaW5nOiA0NXB4IDI1cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiA2cHggMCAxMnB4O1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEycHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmF2YXRhcixcclxuLmF2YXRhciBpbWcge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxudWwsXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2FyZC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgaGVpZ2h0OiA0NjBweDtcclxuICBmbGV4OiAwIDAgNDAlO1xyXG4gIG1heC13aWR0aDogNDAlO1xyXG59XHJcblxyXG4uY2FyZDpudGgtY2hpbGQoNG4gKyAxKSxcclxuLmNhcmQ6bnRoLWNoaWxkKDRuICsgNCkge1xyXG4gIGZsZXg6IDAgMCA2MCU7XHJcbiAgbWF4LXdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5jYXJkOm50aC1jaGlsZChvZGQpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jYXJkOm50aC1jaGlsZChldmVuKSB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQtY29udGFpbmVyLm9wZW4ge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogNDBweCAwO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMWMxYzFlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ub3BlbiAuY2FyZC1jb250ZW50IHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uY2FyZC1vcGVuLWxpbmsge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5jYXJkLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiA0MjBweDtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbi5vcGVuIC5jYXJkLWltYWdlLWNvbnRhaW5lcixcclxuLm9wZW4gLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5vcGVuIC50aXRsZS1jb250YWluZXIge1xyXG4gIHRvcDogMzBweDtcclxuICBsZWZ0OiAzMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxuLmNhdGVnb3J5IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA5OTBweDtcclxufVxyXG5cclxuLm92ZXJsYXkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGxlZnQ6IDUwJTtcclxuXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDQ2MHB4IDM1cHggMzVweCAzNXB4O1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiAjOWQ5Y2ExO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jYXJkOm50aC1jaGlsZCg0biArIDEpLFxyXG4gIC5jYXJkOm50aC1jaGlsZCg0biArIDQpIHtcclxuICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICBmbGV4OiAxIDAgMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6bnRoLWNoaWxkKDRuICsgMSksXHJcbiAgLmNhcmQ6bnRoLWNoaWxkKDRuICsgNCkge1xyXG4gICAgZmxleDogMSAwIDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250ZW50LWNvbnRhaW5lci5vcGVuIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59YH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJdGVtKHtpZH0pIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdXNlUG9zdHMoKTtcclxuXHJcbiAgICBjb25zdCB7Y2F0ZWdvcnksIHRpdGxlLCByZW5kZXJ9ID0gaXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaHJlZiA9PT0gaWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OiAwfX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tvcGFjaXR5OiAxfX1cclxuICAgICAgICAgICAgICAgIGV4aXQ9e3tvcGFjaXR5OiAwLCB0cmFuc2l0aW9uOiB7ZHVyYXRpb246IDAuMTV9fX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogMC4yLCBkZWxheTogMC4xNX19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwiYXV0b1wifX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJsYXlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIi8+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQtY29udGFpbmVyIG9wZW5cIj5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiIGxheW91dElkPXtgY2FyZC1jb250YWluZXItJHtpZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZS1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXRJZD17YHRpdGxlLWNvbnRhaW5lci0ke2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPntjYXRlZ29yeX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCIgYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBvcGVuU3ByaW5nID0ge3R5cGU6IFwic3ByaW5nXCIsIHN0aWZmbmVzczogMjAwLCBkYW1waW5nOiAzMH07XHJcblxyXG4iXX0= */\n/*@ sourceURL=D:\\\\dina\\\\demo\\\\next-app\\\\components\\\\List.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

_s(List, "rMYXVeldSWEu2HrWs3MbtwtMpWw=", false, function () {
  return [_Layout_BlogNav__WEBPACK_IMPORTED_MODULE_4__.usePosts];
});

_c2 = List;
function Item(_ref3) {
  _s2();

  var id = _ref3.id;
  var items = (0,_Layout_BlogNav__WEBPACK_IMPORTED_MODULE_4__.usePosts)();

  var _items$find = items.find(function (item) {
    return item.href === id;
  }),
      category = _items$find.category,
      title = _items$find.title,
      render = _items$find.render;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.15
        }
      },
      transition: {
        duration: 0.2,
        delay: 0.15
      },
      style: {
        pointerEvents: "auto"
      },
      className: "overlay",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        to: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-content-container open",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
        className: "card-content",
        layoutId: "card-container-".concat(id),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
          className: "title-container",
          layoutId: "title-container-".concat(id),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "category",
            children: category
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
          className: "content-container",
          animate: true,
          children: render
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s2(Item, "rMYXVeldSWEu2HrWs3MbtwtMpWw=", false, function () {
  return [_Layout_BlogNav__WEBPACK_IMPORTED_MODULE_4__.usePosts];
});

_c3 = Item;
;
var openSpring = {
  type: "spring",
  stiffness: 200,
  damping: 30
};

var _c, _c2, _c3;

$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "List");
$RefreshReg$(_c3, "Item");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0LmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJpZCIsInRpdGxlIiwiY2F0ZWdvcnkiLCJ0aGVtZSIsInJlbmRlciIsImhyZWYiLCJMaXN0Iiwic2VsZWN0ZWRJZCIsIml0ZW1zIiwidXNlUG9zdHMiLCJtYXAiLCJjYXJkIiwiSXRlbSIsImZpbmQiLCJpdGVtIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwicG9pbnRlckV2ZW50cyIsIm9wZW5TcHJpbmciLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULE9BQTBEO0FBQUEsTUFBM0NDLEVBQTJDLFFBQTNDQSxFQUEyQztBQUFBLE1BQXZDQyxLQUF1QyxRQUF2Q0EsS0FBdUM7QUFBQSxNQUFoQ0MsUUFBZ0MsUUFBaENBLFFBQWdDO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLE1BQWUsUUFBZkEsTUFBZTtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUV0RCxzQkFDSTtBQUFJLGFBQVMsaUJBQVVGLEtBQVYsQ0FBYjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUEsNkJBQ0ksOERBQUMscURBQUQ7QUFBWSxpQkFBUyxFQUFDLGNBQXRCO0FBQXFDLGdCQUFRLDJCQUFvQkgsRUFBcEIsQ0FBN0M7QUFBQSxnQ0FFSSw4REFBQyxxREFBRDtBQUNJLG1CQUFTLEVBQUMsaUJBRGQ7QUFFSSxrQkFBUSw0QkFBcUJBLEVBQXJCLENBRlo7QUFBQSxrQ0FJSTtBQUFNLHFCQUFTLEVBQUMsVUFBaEI7QUFBQSxzQkFBNEJFO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSTtBQUFBLHNCQUFLRDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBU0ksOERBQUMscURBQUQ7QUFDSSxtQkFBUyxFQUFDLHNCQURkO0FBRUksa0JBQVEsaUNBQTBCRCxFQUExQixDQUZaO0FBQUEsb0JBSUtJO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFtQkksOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUVDLElBQVo7QUFBQSw2QkFDSTtBQUFLLGlCQUFTO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5Qkg7O0tBM0JRTixJO0FBNkJGLFNBQVNPLElBQVQsUUFBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFiQyxVQUFhLFNBQWJBLFVBQWE7QUFFL0IsTUFBTUMsS0FBSyxHQUFHQyx5REFBUSxFQUF0QjtBQUNBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSwwQ0FBYyxXQUFkO0FBQUEsZ0JBQ0tELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSw0QkFDWCw4REFBQyxJQUFELGtDQUEwQkEsSUFBMUI7QUFBZ0Msb0JBQVUsRUFBRUEsSUFBSSxDQUFDTixJQUFMLEtBQWNFO0FBQTFELFlBQVdJLElBQUksQ0FBQ04sSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBLE9BQWQ7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQXdRSDs7R0EzUWVDLEk7VUFFRUcscUQ7OztNQUZGSCxJO0FBNlFULFNBQVNNLElBQVQsUUFBb0I7QUFBQTs7QUFBQSxNQUFMWixFQUFLLFNBQUxBLEVBQUs7QUFDdkIsTUFBTVEsS0FBSyxHQUFHQyx5REFBUSxFQUF0Qjs7QUFEdUIsb0JBR1dELEtBQUssQ0FBQ0ssSUFBTixDQUFXLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUNULElBQUwsS0FBY0wsRUFBbEI7QUFBQSxHQUFmLENBSFg7QUFBQSxNQUdoQkUsUUFIZ0IsZUFHaEJBLFFBSGdCO0FBQUEsTUFHTkQsS0FITSxlQUdOQSxLQUhNO0FBQUEsTUFHQ0csTUFIRCxlQUdDQSxNQUhEOztBQUt2QixzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLHFEQUFEO0FBQ0ksYUFBTyxFQUFFO0FBQUNXLGVBQU8sRUFBRTtBQUFWLE9BRGI7QUFFSSxhQUFPLEVBQUU7QUFBQ0EsZUFBTyxFQUFFO0FBQVYsT0FGYjtBQUdJLFVBQUksRUFBRTtBQUFDQSxlQUFPLEVBQUUsQ0FBVjtBQUFhQyxrQkFBVSxFQUFFO0FBQUNDLGtCQUFRLEVBQUU7QUFBWDtBQUF6QixPQUhWO0FBSUksZ0JBQVUsRUFBRTtBQUFDQSxnQkFBUSxFQUFFLEdBQVg7QUFBZ0JDLGFBQUssRUFBRTtBQUF2QixPQUpoQjtBQUtJLFdBQUssRUFBRTtBQUFDQyxxQkFBYSxFQUFFO0FBQWhCLE9BTFg7QUFNSSxlQUFTLEVBQUMsU0FOZDtBQUFBLDZCQVFJLDhEQUFDLGtEQUFEO0FBQU0sVUFBRSxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVdJO0FBQUssZUFBUyxFQUFDLDZCQUFmO0FBQUEsNkJBQ0ksOERBQUMscURBQUQ7QUFBWSxpQkFBUyxFQUFDLGNBQXRCO0FBQXFDLGdCQUFRLDJCQUFvQm5CLEVBQXBCLENBQTdDO0FBQUEsZ0NBQ0ksOERBQUMscURBQUQ7QUFDSSxtQkFBUyxFQUFDLGlCQURkO0FBRUksa0JBQVEsNEJBQXFCQSxFQUFyQixDQUZaO0FBQUEsa0NBSUk7QUFBTSxxQkFBUyxFQUFDLFVBQWhCO0FBQUEsc0JBQTRCRTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBS0k7QUFBQSxzQkFBS0Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVNJLDhEQUFDLHFEQUFEO0FBQVksbUJBQVMsRUFBQyxtQkFBdEI7QUFBMEMsaUJBQU8sTUFBakQ7QUFBQSxvQkFDS0c7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSjtBQUFBLGtCQURKO0FBNkJIOztJQWxDZVEsSTtVQUNFSCxxRDs7O01BREZHLEk7QUFrQ2Y7QUFHTSxJQUFNUSxVQUFVLEdBQUc7QUFBQ0MsTUFBSSxFQUFFLFFBQVA7QUFBaUJDLFdBQVMsRUFBRSxHQUE1QjtBQUFpQ0MsU0FBTyxFQUFFO0FBQTFDLENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg5MjY3ZmEwNzdkZDg5OGQ5NWQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQge3VzZVBvc3RzfSBmcm9tIFwiLi9MYXlvdXQvQmxvZ05hdlwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiBDYXJkKHtpZCwgdGl0bGUsIGNhdGVnb3J5LCB0aGVtZSwgcmVuZGVyLCBocmVmfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17YGNhcmQgJHt0aGVtZX1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIiBsYXlvdXRJZD17YGNhcmQtY29udGFpbmVyLSR7aWR9YH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdGxlLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dElkPXtgdGl0bGUtY29udGFpbmVyLSR7aWR9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+e2NhdGVnb3J5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltYWdlLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dElkPXtgY2FyZC1pbWFnZS1jb250YWluZXItJHtpZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FyZC1vcGVuLWxpbmtgfS8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpc3Qoe3NlbGVjdGVkSWR9KSB7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSB1c2VQb3N0cygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGNhcmQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17Y2FyZC5ocmVmfSB7Li4uY2FyZH0gaXNTZWxlY3RlZD17Y2FyZC5ocmVmID09PSBzZWxlY3RlZElkfS8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuLkFwcCB7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgLS1zZWNvbmRhcnk6IHJnYigxNjEsIDE2MSwgMTYxKTtcclxuICAtLWRpdmlkZXI6ICMzNDM0MzQ7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6IFwiLlNGTlNUZXh0XCIsIFwiU0ZQcm9UZXh0LVJlZ3VsYXJcIiwgXCJTRlVJVGV4dC1SZWd1bGFyXCIsIFwiLlNGVUlUZXh0XCIsXHJcbiAgICBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuI3Jvb3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY3JlZW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA5OTBweDtcclxuICBmbGV4OiAxIDEgMTAwJTtcclxuICBwYWRkaW5nOiA0NXB4IDI1cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiA2cHggMCAxMnB4O1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEycHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmF2YXRhcixcclxuLmF2YXRhciBpbWcge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxudWwsXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2FyZC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgaGVpZ2h0OiA0NjBweDtcclxuICBmbGV4OiAwIDAgNDAlO1xyXG4gIG1heC13aWR0aDogNDAlO1xyXG59XHJcblxyXG4uY2FyZDpudGgtY2hpbGQoNG4gKyAxKSxcclxuLmNhcmQ6bnRoLWNoaWxkKDRuICsgNCkge1xyXG4gIGZsZXg6IDAgMCA2MCU7XHJcbiAgbWF4LXdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5jYXJkOm50aC1jaGlsZChvZGQpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jYXJkOm50aC1jaGlsZChldmVuKSB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQtY29udGFpbmVyLm9wZW4ge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogNDBweCAwO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMWMxYzFlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ub3BlbiAuY2FyZC1jb250ZW50IHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uY2FyZC1vcGVuLWxpbmsge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5jYXJkLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiA0MjBweDtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbi5vcGVuIC5jYXJkLWltYWdlLWNvbnRhaW5lcixcclxuLm9wZW4gLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5vcGVuIC50aXRsZS1jb250YWluZXIge1xyXG4gIHRvcDogMzBweDtcclxuICBsZWZ0OiAzMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxuLmNhdGVnb3J5IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA5OTBweDtcclxufVxyXG5cclxuLm92ZXJsYXkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGxlZnQ6IDUwJTtcclxuXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDQ2MHB4IDM1cHggMzVweCAzNXB4O1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiAjOWQ5Y2ExO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jYXJkOm50aC1jaGlsZCg0biArIDEpLFxyXG4gIC5jYXJkOm50aC1jaGlsZCg0biArIDQpIHtcclxuICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICBmbGV4OiAxIDAgMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6bnRoLWNoaWxkKDRuICsgMSksXHJcbiAgLmNhcmQ6bnRoLWNoaWxkKDRuICsgNCkge1xyXG4gICAgZmxleDogMSAwIDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250ZW50LWNvbnRhaW5lci5vcGVuIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59YH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJdGVtKHtpZH0pIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdXNlUG9zdHMoKTtcclxuXHJcbiAgICBjb25zdCB7Y2F0ZWdvcnksIHRpdGxlLCByZW5kZXJ9ID0gaXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaHJlZiA9PT0gaWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OiAwfX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tvcGFjaXR5OiAxfX1cclxuICAgICAgICAgICAgICAgIGV4aXQ9e3tvcGFjaXR5OiAwLCB0cmFuc2l0aW9uOiB7ZHVyYXRpb246IDAuMTV9fX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogMC4yLCBkZWxheTogMC4xNX19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3BvaW50ZXJFdmVudHM6IFwiYXV0b1wifX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJsYXlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIi8+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQtY29udGFpbmVyIG9wZW5cIj5cclxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiIGxheW91dElkPXtgY2FyZC1jb250YWluZXItJHtpZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZS1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXRJZD17YHRpdGxlLWNvbnRhaW5lci0ke2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPntjYXRlZ29yeX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCIgYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBvcGVuU3ByaW5nID0ge3R5cGU6IFwic3ByaW5nXCIsIHN0aWZmbmVzczogMjAwLCBkYW1waW5nOiAzMH07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9