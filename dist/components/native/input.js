'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_wepy$component) {
    _inherits(Input, _wepy$component);

    function Input() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Input);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            value: {},
            type: {},
            password: {},
            placeholder: {},
            placeholderStyle: {},
            placeholderClass: {},
            disabled: {},
            maxlength: {},
            cursorSpacing: {},
            autoFocus: {},
            focus: {},
            confirmType: {},
            confirmHold: {},
            className: {}
        }, _this.computed = {}, _this.data = {
            val: '112'
        }, _this.methods = {
            bindinput: function bindinput(v) {
                var _this2 = this;

                console.log(v);
                setTimeout(function () {
                    _this2.val = v.detail.value;
                }, 0);
                this.$emit('input', v);
            },
            bindfocus: function bindfocus() {
                for (var _len2 = arguments.length, v = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    v[_key2] = arguments[_key2];
                }

                this.$emit.apply(this, ['focus'].concat(v));
            },
            bindblur: function bindblur() {
                for (var _len3 = arguments.length, v = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    v[_key3] = arguments[_key3];
                }

                this.$emit.apply(this, ['blur'].concat(v));
            },
            bindconfirm: function bindconfirm() {
                for (var _len4 = arguments.length, v = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                    v[_key4] = arguments[_key4];
                }

                this.$emit.apply(this, ['confirm'].concat(v));
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Input, [{
        key: 'onLoad',
        value: function onLoad() {
            console.log('Onload123');
        }
    }]);

    return Input;
}(_wepy2.default.component);

exports.default = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmpzIl0sIm5hbWVzIjpbIklucHV0IiwicHJvcHMiLCJ2YWx1ZSIsInR5cGUiLCJwYXNzd29yZCIsInBsYWNlaG9sZGVyIiwicGxhY2Vob2xkZXJTdHlsZSIsInBsYWNlaG9sZGVyQ2xhc3MiLCJkaXNhYmxlZCIsIm1heGxlbmd0aCIsImN1cnNvclNwYWNpbmciLCJhdXRvRm9jdXMiLCJmb2N1cyIsImNvbmZpcm1UeXBlIiwiY29uZmlybUhvbGQiLCJjbGFzc05hbWUiLCJjb21wdXRlZCIsImRhdGEiLCJ2YWwiLCJtZXRob2RzIiwiYmluZGlucHV0IiwidiIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiZGV0YWlsIiwiJGVtaXQiLCJiaW5kZm9jdXMiLCJiaW5kYmx1ciIsImJpbmRjb25maXJtIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEssR0FBUTtBQUNKQyxtQkFBTyxFQURIO0FBRUpDLGtCQUFNLEVBRkY7QUFHSkMsc0JBQVUsRUFITjtBQUlKQyx5QkFBYSxFQUpUO0FBS0pDLDhCQUFrQixFQUxkO0FBTUpDLDhCQUFrQixFQU5kO0FBT0pDLHNCQUFVLEVBUE47QUFRSkMsdUJBQVcsRUFSUDtBQVNKQywyQkFBZSxFQVRYO0FBVUpDLHVCQUFXLEVBVlA7QUFXSkMsbUJBQU8sRUFYSDtBQVlKQyx5QkFBYSxFQVpUO0FBYUpDLHlCQUFhLEVBYlQ7QUFjSkMsdUJBQVc7QUFkUCxTLFFBZ0JSQyxRLEdBQVcsRSxRQUNYQyxJLEdBQU87QUFDSEMsaUJBQUs7QUFERixTLFFBR1BDLE8sR0FBVTtBQUNOQyxxQkFETSxxQkFDSUMsQ0FESixFQUNPO0FBQUE7O0FBQ1RDLHdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQUcsMkJBQVcsWUFBTTtBQUNiLDJCQUFLTixHQUFMLEdBQVdHLEVBQUVJLE1BQUYsQ0FBU3ZCLEtBQXBCO0FBQ0gsaUJBRkQsRUFFRyxDQUZIO0FBR0EscUJBQUt3QixLQUFMLENBQVcsT0FBWCxFQUFvQkwsQ0FBcEI7QUFDSCxhQVBLO0FBUU5NLHFCQVJNLHVCQVFVO0FBQUEsbURBQUhOLENBQUc7QUFBSEEscUJBQUc7QUFBQTs7QUFDWixxQkFBS0ssS0FBTCxjQUFXLE9BQVgsU0FBdUJMLENBQXZCO0FBQ0gsYUFWSztBQVdOTyxvQkFYTSxzQkFXUztBQUFBLG1EQUFIUCxDQUFHO0FBQUhBLHFCQUFHO0FBQUE7O0FBQ1gscUJBQUtLLEtBQUwsY0FBVyxNQUFYLFNBQXNCTCxDQUF0QjtBQUNILGFBYks7QUFjTlEsdUJBZE0seUJBY1k7QUFBQSxtREFBSFIsQ0FBRztBQUFIQSxxQkFBRztBQUFBOztBQUNkLHFCQUFLSyxLQUFMLGNBQVcsU0FBWCxTQUF5QkwsQ0FBekI7QUFDSDtBQWhCSyxTOzs7OztpQ0FtQkE7QUFDTkMsb0JBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0g7Ozs7RUExQzhCLGVBQUtPLFM7O2tCQUFuQjlCLEsiLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB7fSxcbiAgICAgICAgICAgIHR5cGU6IHt9LFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHt9LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHt9LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXJTdHlsZToge30sXG4gICAgICAgICAgICBwbGFjZWhvbGRlckNsYXNzOiB7fSxcbiAgICAgICAgICAgIGRpc2FibGVkOiB7fSxcbiAgICAgICAgICAgIG1heGxlbmd0aDoge30sXG4gICAgICAgICAgICBjdXJzb3JTcGFjaW5nOiB7fSxcbiAgICAgICAgICAgIGF1dG9Gb2N1czoge30sXG4gICAgICAgICAgICBmb2N1czoge30sXG4gICAgICAgICAgICBjb25maXJtVHlwZToge30sXG4gICAgICAgICAgICBjb25maXJtSG9sZDoge30sXG4gICAgICAgICAgICBjbGFzc05hbWU6IHt9XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZWQgPSB7fVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdmFsOiAnMTEyJ1xuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBiaW5kaW5wdXQodikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHYpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsID0gdi5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgICAgICB9LCAwKVxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kZm9jdXMoLi4udikge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZvY3VzJywgLi4udilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kYmx1ciguLi52KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYmx1cicsIC4uLnYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZGNvbmZpcm0oLi4udikge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbmZpcm0nLCAuLi52KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPbmxvYWQxMjMnKVxuICAgICAgICB9XG4gICAgfVxuXG4iXX0=