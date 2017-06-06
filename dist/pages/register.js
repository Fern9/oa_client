'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_wepy$page) {
  _inherits(Register, _wepy$page);

  function Register() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Register);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Register.__proto__ || Object.getPrototypeOf(Register)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '注册'
    }, _this.components = {}, _this.data = {
      isAgree: false
    }, _this.computed = {}, _this.methods = {
      changeAgree: function changeAgree(v) {
        console.log(v);
        this.isAgree = v;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Register, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Register;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Register , 'pages/register'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaXNBZ3JlZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImNoYW5nZUFncmVlIiwidiIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFLbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDTEMsZUFBUztBQURKLEssUUFJUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNJQyxDQURKLEVBQ087QUFDYkMsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBLGFBQUtKLE9BQUwsR0FBZUksQ0FBZjtBQUNEO0FBSk8sSzs7Ozs7NkJBZEEsQ0FFVDs7OztFQUhtQyxlQUFLRyxJOztrQkFBdEJaLFEiLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgb25Mb2FkICgpIHtcblxuICAgIH1cblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfms6jlhownXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7fVxuICAgIGRhdGEgPSB7XG4gICAgICBpc0FncmVlOiBmYWxzZVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge31cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjaGFuZ2VBZ3JlZSh2KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHYpXG4gICAgICAgIHRoaXMuaXNBZ3JlZSA9IHZcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuIl19