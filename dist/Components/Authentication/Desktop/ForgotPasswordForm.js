"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForgotPasswordForm = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

var _formik = require("formik");

var _react = _interopRequireWildcard(require("react"));

var _commonElements = require("../commonElements");

var _QuickInput = _interopRequireDefault(require("../../QuickInput"));

var _repcaptcha = require("../../../Utils/repcaptcha");

var _Types = require("../Types");

var _Validators = require("../Validators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var ForgotPasswordForm =
/*#__PURE__*/
function (_Component) {
  _inherits(ForgotPasswordForm, _Component);

  function ForgotPasswordForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ForgotPasswordForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ForgotPasswordForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      error: _this.props.error
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (values, formikBag) {
      (0, _repcaptcha.repcaptcha)("forgot_submit");

      _this.props.handleSubmit(values, formikBag);
    });

    return _this;
  }

  _createClass(ForgotPasswordForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_formik.Formik, {
        initialValues: this.props.values,
        onSubmit: this.onSubmit,
        validationSchema: _Validators.ForgotPasswordValidator
      }, function (_ref) {
        var values = _ref.values,
            errors = _ref.errors,
            touched = _ref.touched,
            formikHandleChange = _ref.handleChange,
            handleBlur = _ref.handleBlur,
            handleSubmit = _ref.handleSubmit,
            isSubmitting = _ref.isSubmitting,
            status = _ref.status,
            setStatus = _ref.setStatus;

        var handleChange = function handleChange(e) {
          setStatus(null);

          _this2.setState({
            error: null
          });

          formikHandleChange(e);
        };

        return _react.default.createElement(_commonElements.FormContainer, {
          onSubmit: handleSubmit,
          height: 180
        }, _react.default.createElement(_QuickInput.default, {
          block: true,
          error: touched.email && errors.email,
          placeholder: "Enter your email address",
          name: "email",
          label: "Email",
          type: "email",
          value: values.email,
          onChange: handleChange,
          onBlur: handleBlur,
          autoFocus: true
        }), status && !status.success && _react.default.createElement(_commonElements.Error, {
          show: true
        }, status.error), _react.default.createElement(_commonElements.SubmitButton, {
          disabled: isSubmitting
        }, "Send Reset Instructions"), _react.default.createElement(_commonElements.Footer, {
          handleTypeChange: function handleTypeChange() {
            return _this2.props.handleTypeChange(_Types.ModalType.login);
          },
          mode: "forgot"
        }));
      });
    }
  }]);

  return ForgotPasswordForm;
}(_react.Component);

exports.ForgotPasswordForm = ForgotPasswordForm;
//# sourceMappingURL=ForgotPasswordForm.js.map