"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarketingHeader = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.function.bind");

var _react = _interopRequireWildcard(require("react"));

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Artsy = require("../../Artsy");

var Schema = _interopRequireWildcard(require("../../Artsy/Analytics/Schema"));

var _palette = require("@artsy/palette");

var _dec, _dec2, _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var COLLECT_URL = "".concat(_sharify.data.APP_URL, "/collect?acquireable=true");
var MarketingHeader = (_dec = (0, _Artsy.track)(), _dec2 = (0, _Artsy.track)({
  action_type: Schema.ActionType.Link,
  destination_path: COLLECT_URL
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(MarketingHeader, _Component);

  function MarketingHeader() {
    _classCallCheck(this, MarketingHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(MarketingHeader).apply(this, arguments));
  }

  _createClass(MarketingHeader, [{
    key: "handleClick",
    value: function handleClick() {
      window.location.href = COLLECT_URL;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(Container, {
        onClick: this.handleClick.bind(this)
      }, _react.default.createElement(_palette.Spacer, {
        mb: 1
      }), _react.default.createElement(_palette.Flex, {
        justifyContent: "space-between",
        alignItems: "center"
      }, _react.default.createElement(_palette.Box, {
        pr: 2
      }, _react.default.createElement(_palette.Sans, {
        size: "3",
        weight: "medium"
      }, "In-demand artworks, available to buy now"), _react.default.createElement(_palette.Sans, {
        size: "3",
        color: "black60"
      }, "Collect works by today\u2019s top artists, with transparent pricing, easy shipping, and a simple checkout process.")), _react.default.createElement(_palette.Button, {
        onClick: this.handleClick
      }, "Browse works")), _react.default.createElement(_palette.Spacer, {
        mb: 4
      }), _react.default.createElement(_palette.Separator, null));
    }
  }]);

  return MarketingHeader;
}(_react.Component), (_applyDecoratedDescriptor(_class2.prototype, "handleClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "handleClick"), _class2.prototype)), _class2)) || _class);
exports.MarketingHeader = MarketingHeader;

var Container = _styledComponents.default.div.withConfig({
  displayName: "MarketingHeader__Container",
  componentId: "sc-1or46xw-0"
})(["cursor:pointer;"]);
//# sourceMappingURL=MarketingHeader.js.map