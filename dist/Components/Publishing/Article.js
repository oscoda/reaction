"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Article = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _Banner = require("./Banner/Banner");

var _ExternalTrackers = require("./Display/ExternalTrackers");

var _EditorialFeature = require("./EditorialFeature/EditorialFeature");

var _ArticleWithFullScreen = _interopRequireDefault(require("./Layouts/ArticleWithFullScreen"));

var _ClassicLayout = require("./Layouts/ClassicLayout");

var _FeatureLayout = require("./Layouts/FeatureLayout");

var _NewsLayout = require("./Layouts/NewsLayout");

var _SeriesLayout = require("./Layouts/SeriesLayout");

var _StandardLayout = require("./Layouts/StandardLayout");

var _VideoLayout = require("./Layouts/VideoLayout");

var _FullScreenProvider = require("./Sections/FullscreenViewer/FullScreenProvider");

var _TooltipsDataProvider = require("./ToolTip/TooltipsDataProvider");

var _reactGpt = require("react-gpt");

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _Responsive = require("../../Utils/Responsive");

var _Events = _interopRequireDefault(require("../../Utils/Events"));

var _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_reactGpt.Bling.enableSingleRequest();

var Article = (_dec = (0, _reactTracking.default)(function (props) {
  return {
    page: "Article",
    entity_type: "article",
    entity_id: props.article.id
  };
}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Article, _React$Component);

  function Article() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Article);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Article)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getArticleLayout", function () {
      var _this$props = _this.props,
          article = _this$props.article,
          customEditorial = _this$props.customEditorial;

      if (customEditorial) {
        if (article.layout !== "series") {
          return _react.default.createElement(_FullScreenProvider.FullScreenProvider, null, _react.default.createElement(_ArticleWithFullScreen.default, _this.props, _react.default.createElement(_EditorialFeature.EditorialFeature, _this.props)));
        } else {
          return _react.default.createElement(_EditorialFeature.EditorialFeature, _this.props);
        }
      } else {
        switch (article.layout) {
          case "classic":
            {
              return _react.default.createElement(_ClassicLayout.ClassicLayout, _this.props);
            }

          case "feature":
            {
              return _react.default.createElement(_FullScreenProvider.FullScreenProvider, null, _react.default.createElement(_ArticleWithFullScreen.default, _this.props, _react.default.createElement(_FeatureLayout.FeatureLayout, _this.props)));
            }

          case "series":
            {
              return _react.default.createElement(_SeriesLayout.SeriesLayout, _this.props);
            }

          case "video":
            {
              return _react.default.createElement(_VideoLayout.VideoLayout, _this.props);
            }

          case "news":
            {
              return _react.default.createElement(_NewsLayout.NewsLayout, _this.props);
            }

          default:
            {
              return _react.default.createElement(_FullScreenProvider.FullScreenProvider, null, _react.default.createElement(_ArticleWithFullScreen.default, _this.props, _react.default.createElement(_StandardLayout.StandardLayout, _this.props)));
            }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "shouldRenderSignUpCta", function () {
      var _this$props2 = _this.props,
          article = _this$props2.article,
          isLoggedIn = _this$props2.isLoggedIn,
          isTruncated = _this$props2.isTruncated,
          isMobile = _this$props2.isMobile;
      return isMobile && article.layout !== "series" && !isLoggedIn && !isTruncated;
    });

    _defineProperty(_assertThisInitialized(_this), "sponsorPixelTrackingCode", function (article) {
      if (article.sponsor && article.sponsor.pixel_tracking_code) {
        return article.sponsor;
      } else if (article.seriesArticle && article.seriesArticle.sponsor && article.seriesArticle.sponsor.pixel_tracking_code) {
        return article.seriesArticle.sponsor;
      }
    });

    return _this;
  }

  _createClass(Article, [{
    key: "render",
    value: function render() {
      var article = this.props.article;
      var trackingCode = this.sponsorPixelTrackingCode(article);
      return _react.default.createElement(_Responsive.MediaContextProvider, null, _react.default.createElement(_palette.Theme, null, _react.default.createElement(_TooltipsDataProvider.TooltipsDataProvider, this.props, this.getArticleLayout(), trackingCode && _react.default.createElement(_ExternalTrackers.PixelTracker, {
        unit: trackingCode,
        date: this.props.renderTime
      }), this.shouldRenderSignUpCta() && _react.default.createElement(_Banner.BannerWrapper, {
        article: article
      }))));
    }
  }]);

  return Article;
}(_react.default.Component), _temp)) || _class);
exports.Article = Article;
//# sourceMappingURL=Article.js.map