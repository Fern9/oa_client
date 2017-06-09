'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _input = require('./../components/native/input.js');

var _input2 = _interopRequireDefault(_input);

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
        }, _this.$props = { "Input": { "className": "weui-input", "placeholder": "请输入邮箱号", "value": "email" } }, _this.$events = { "Input": { "v-on:input": "focuss" } }, _this.components = {
            Input: _input2.default
        }, _this.data = {
            isAgree: false,
            email: '123'
        }, _this.computed = {}, _this.methods = {
            changeAgree: function changeAgree(v) {
                console.log(v
                //                this.isAgree = v
                );
            },
            focuss: function focuss(v) {
                console.log('focuss');
                console.log(v);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiSW5wdXQiLCJkYXRhIiwiaXNBZ3JlZSIsImVtYWlsIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiY2hhbmdlQWdyZWUiLCJ2IiwiY29uc29sZSIsImxvZyIsImZvY3VzcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7OExBS2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFHVkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLGFBQVksWUFBYixFQUEwQixlQUFjLFFBQXhDLEVBQWlELFNBQVEsT0FBekQsRUFBVCxFLFFBQ2hCQyxPLEdBQVUsRUFBQyxTQUFRLEVBQUMsY0FBYSxRQUFkLEVBQVQsRSxRQUNUQyxVLEdBQWE7QUFDRkM7QUFERSxTLFFBR05DLEksR0FBTztBQUNIQyxxQkFBUyxLQUROO0FBRUhDLG1CQUFPO0FBRkosUyxRQUtQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDTkMsdUJBRE0sdUJBQ01DLENBRE4sRUFDUztBQUNYQyx3QkFBUUMsR0FBUixDQUFZRjtBQUM1QjtBQURnQjtBQUVILGFBSks7QUFLTkcsa0JBTE0sa0JBS0NILENBTEQsRUFLSTtBQUNOQyx3QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDQUQsd0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNIO0FBUkssUzs7Ozs7aUNBbkJBLENBRVQ7Ozs7RUFIaUMsZUFBS0ksSTs7a0JBQXRCakIsUSIsImZpbGUiOiJyZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvbmF0aXZlL2lucHV0J1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgb25Mb2FkICgpIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+azqOWGjCdcbiAgICAgICAgfVxuICAgICAgICRwcm9wcyA9IHtcIklucHV0XCI6e1wiY2xhc3NOYW1lXCI6XCJ3ZXVpLWlucHV0XCIsXCJwbGFjZWhvbGRlclwiOlwi6K+36L6T5YWl6YKu566x5Y+3XCIsXCJ2YWx1ZVwiOlwiZW1haWxcIn19O1xyXG4kZXZlbnRzID0ge1wiSW5wdXRcIjp7XCJ2LW9uOmlucHV0XCI6XCJmb2N1c3NcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIElucHV0OiBJbnB1dFxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpc0FncmVlOiBmYWxzZSxcbiAgICAgICAgICAgIGVtYWlsOiAnMTIzJ1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7fVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBjaGFuZ2VBZ3JlZSh2KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codilcbi8vICAgICAgICAgICAgICAgIHRoaXMuaXNBZ3JlZSA9IHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb2N1c3Modikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb2N1c3MnKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHYpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiJdfQ==