'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "@import url(\"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap\");.LitLogo-module_lit__JlGiy{display:flex;font-family:Space Grotesk;justify-content:center}.LitLogo-module_lit__JlGiy div:first-child{height:1.5rem;margin-bottom:auto;margin-top:auto;position:relative;width:1.5rem}.LitLogo-module_lit__JlGiy div:first-child img{height:auto;max-width:100%}.LitLogo-module_lit__JlGiy div:last-child{display:flex;justify-content:center;padding-left:.5rem}.LitLogo-module_lit__JlGiy div:last-child h1{color:#fff;font-size:1.25rem;line-height:1.75rem;margin:auto}.LitLogo-module_lit__JlGiy div:last-child h1 span:first-child{font-size:.875rem;line-height:1.25rem;margin-left:2px}@media (min-width:768px){.LitLogo-module_lit__JlGiy div:last-child h1 span:first-child{font-size:1rem;line-height:1.5rem}}.LitLogo-module_lit__JlGiy div:last-child h1 span:last-child{color:#80818a;font-weight:200;margin-left:.5rem}@media (min-width:768px){.LitLogo-module_lit__JlGiy div:last-child h1 span:last-child{font-size:1rem;line-height:1.5rem}}.LitLogo-module_cursorPointer__vhuFW{cursor:pointer}";
var styles$1 = {"lit":"LitLogo-module_lit__JlGiy","cursorPointer":"LitLogo-module_cursorPointer__vhuFW"};
styleInject(css_248z$1);

var img = "data:image/png;base64,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b2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0xMS0wNlQxNzo0NzoxNiswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMS0wNlQxNzo0NzoxNiswMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMTEtMDZUMTc6NDc6MTYrMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcxNTQzMGJkLWM0MGItNGQ4ZS04OTJiLWQ2ZjZlYzcyNzI4YyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3MTU0MzBiZC1jNDBiLTRkOGUtODkyYi1kNmY2ZWM3MjcyOGMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MTU0MzBiZC1jNDBiLTRkOGUtODkyYi1kNmY2ZWM3MjcyOGMiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEaXNwbGF5Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MTU0MzBiZC1jNDBiLTRkOGUtODkyYi1kNmY2ZWM3MjcyOGMiIHN0RXZ0OndoZW49IjIwMjEtMTEtMDZUMTc6NDc6MTYrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChNYWNpbnRvc2gpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu57H4UAACXgSURBVHja7V13fBTl1v6uDSwoiKIUFRHYGhJCKEZCUEBAmijlCnYBy0VFr3qpKohyBcWr4BXlCjY6UiQiUozUAKFoKqFICSW0sLszs31mvnPeeWczWXZ3ZnY3kBD+mF9gd7OZmWfOeZ9zznPO+3+iKP5fdT8Et7umPy+vlWfGjHHcU09tYNPTTzLd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";

var LitLogo = function LitLogo(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      cursorPointer = _ref.cursorPointer,
      onClick = _ref.onClick;

  // -- prepare params
  var _title = title !== null && title !== void 0 ? title : 'Lit Protocol';

  var _subtitle = subtitle !== null && subtitle !== void 0 ? subtitle : 'Lorem Ipsum';

  var _cursorPointer = cursorPointer !== null && cursorPointer !== void 0 ? cursorPointer : false;

  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    onClick: onClick,
    className: "".concat(styles$1.lit, " ").concat(_cursorPointer ? styles$1.cursorPointer : ''),
    children: [/*#__PURE__*/jsxRuntime.jsx("div", {
      children: /*#__PURE__*/jsxRuntime.jsx("img", {
        src: img,
        alt: "Lit Protocol"
      })
    }), /*#__PURE__*/jsxRuntime.jsx("div", {
      children: /*#__PURE__*/jsxRuntime.jsxs("h1", {
        children: [/*#__PURE__*/jsxRuntime.jsx("span", {
          children: _title
        }), /*#__PURE__*/jsxRuntime.jsx("span", {
          children: _subtitle
        })]
      })
    })]
  });
};

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var css_248z = "@import url(\"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap\");.InputText-module_label__oLsAY{color:#fff;font-family:Space Grotesk;font-size:1rem;line-height:1.5rem}.InputText-module_label__oLsAY span{color:red;margin-left:.25rem}.InputText-module_label__oLsAY a{color:#8159d9;cursor:pointer;margin-left:.5rem;text-decoration:underline;text-underline-offset:2px}.InputText-module_input__G58vT{margin-top:.5rem}.InputText-module_input__G58vT input{border-radius:.25rem;border-width:1px;color:#374151;font-family:Space Grotesk;font-size:100%;line-height:1.25;padding-bottom:.5rem;padding-left:.75rem;padding-top:.5rem;width:100%}.InputText-module_purple__gmq4i{color:#8159d9}";
var styles = {"label":"InputText-module_label__oLsAY","input":"InputText-module_input__G58vT","purple":"InputText-module_purple__gmq4i"};
styleInject(css_248z);

var InputText = function InputText(_ref) {
  var _ref$required = _ref.required,
      required = _ref$required === void 0 ? true : _ref$required,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '1. Lorem ipsum' : _ref$label,
      _ref$placeHolder = _ref.placeHolder,
      placeHolder = _ref$placeHolder === void 0 ? 'type your text here...' : _ref$placeHolder,
      _ref$instructionType = _ref.instructionType,
      instructionType = _ref$instructionType === void 0 ? 'toggle' : _ref$instructionType,
      _ref$instruction = _ref.instruction,
      instruction = _ref$instruction === void 0 ? {
    link: '#',
    linkTargetBlank: false,
    linkText: 'Instructions',
    toggleTextShow: 'show instructions',
    toggleTextHide: 'hide instructions',
    toggleContent: 'your content here...'
  } : _ref$instruction,
      _onChange = _ref.onChange;

  var _useState = react.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  var toggleText = function toggleText(e) {
    e.target.innerText = toggle ? instruction.toggleTextShow : instruction.toggleTextHide;
    setToggle(!toggle);
  };

  return /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsxs("div", {
      className: styles.label,
      children: [label, required ? /*#__PURE__*/jsxRuntime.jsx("span", {
        children: "*"
      }) : '', instructionType == 'link' ? /*#__PURE__*/jsxRuntime.jsx("a", {
        href: instruction.link,
        target: instruction.linkTargetBlank ? '_blank' : '',
        children: instruction.linkText
      }) : '', instructionType == 'toggle' ? /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [/*#__PURE__*/jsxRuntime.jsx("a", {
          onClick: function onClick(e) {
            return toggleText(e);
          },
          children: instruction.toggleTextShow
        }), toggle ? /*#__PURE__*/jsxRuntime.jsx("div", {
          children: instruction.toggleContent
        }) : '']
      }) : '']
    }), /*#__PURE__*/jsxRuntime.jsx("div", {
      className: styles.input,
      children: /*#__PURE__*/jsxRuntime.jsx("input", {
        onChange: function onChange(e) {
          return _onChange(e);
        },
        placeholder: placeHolder,
        type: "text"
      })
    })]
  });
};

exports.InputText = InputText;
exports.LitLogo = LitLogo;
