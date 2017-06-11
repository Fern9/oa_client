'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _net = require('./../utils/net.js');

var _net2 = _interopRequireDefault(_net);

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
            isAgree: false,
            wx_userinfo: null,
            code: null
        }, _this.computed = {}, _this.methods = {
            changeAgree: function changeAgree(v) {
                this.isAgree = !!v.detail.value[0];
            },
            formSubmit: function formSubmit(event) {
                var form = event.detail.value;
                console.log(form);
                for (var key in form) {
                    if (form[key] === '') {
                        _wepy2.default.showModal({
                            title: '提示',
                            content: '你还没有填完呢',
                            showCancel: false,
                            confirmText: '继续填'
                        });
                        return;
                    }
                }

                var userinfo = event.detail.value;
                _net2.default.post('/user', {
                    action: 'register',
                    wx_userinfo: this.wx_userinfo,
                    userinfo: userinfo,
                    code: this.code
                }, function (res) {
                    if (res.code === 200) {
                        _wepy2.default.showToast({
                            title: '注册成功',
                            icon: 'success',
                            duration: 2000
                        });
                    }
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Register, [{
        key: 'onLoad',
        value: function onLoad(query) {
            console.log(query);
            this.code = query.code;
            this.wx_userinfo = this.$parent.globalData.userInfo;
        }
    }]);

    return Register;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Register , 'pages/register'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaXNBZ3JlZSIsInd4X3VzZXJpbmZvIiwiY29kZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImNoYW5nZUFncmVlIiwidiIsImRldGFpbCIsInZhbHVlIiwiZm9ybVN1Ym1pdCIsImV2ZW50IiwiZm9ybSIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybVRleHQiLCJ1c2VyaW5mbyIsInBvc3QiLCJhY3Rpb24iLCJyZXMiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJxdWVyeSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzhMQU9qQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1RDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNIQyxxQkFBUyxLQUROO0FBRUhDLHlCQUFhLElBRlY7QUFHSEMsa0JBQU07QUFISCxTLFFBTVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNOQyx1QkFETSx1QkFDTUMsQ0FETixFQUNTO0FBQ1gscUJBQUtOLE9BQUwsR0FBZSxDQUFDLENBQUNNLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBakI7QUFDSCxhQUhLO0FBSU5DLHNCQUpNLHNCQUlLQyxLQUpMLEVBSVk7QUFDZCxvQkFBSUMsT0FBT0QsTUFBTUgsTUFBTixDQUFhQyxLQUF4QjtBQUNBSSx3QkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0EscUJBQUssSUFBSUcsR0FBVCxJQUFnQkgsSUFBaEIsRUFBc0I7QUFDbEIsd0JBQUlBLEtBQUtHLEdBQUwsTUFBYyxFQUFsQixFQUFzQjtBQUNsQix1Q0FBS0MsU0FBTCxDQUFlO0FBQ1hDLG1DQUFPLElBREk7QUFFWEMscUNBQVMsU0FGRTtBQUdYQyx3Q0FBWSxLQUhEO0FBSVhDLHlDQUFhO0FBSkYseUJBQWY7QUFNQTtBQUNIO0FBQ0o7O0FBRUQsb0JBQUlDLFdBQVdWLE1BQU1ILE1BQU4sQ0FBYUMsS0FBNUI7QUFDQSw4QkFBSWEsSUFBSixDQUFTLE9BQVQsRUFBa0I7QUFDZEMsNEJBQVEsVUFETTtBQUVkckIsaUNBQWEsS0FBS0EsV0FGSjtBQUdkbUIsOEJBQVVBLFFBSEk7QUFJZGxCLDBCQUFNLEtBQUtBO0FBSkcsaUJBQWxCLEVBS0csVUFBQ3FCLEdBQUQsRUFBUztBQUNSLHdCQUFJQSxJQUFJckIsSUFBSixLQUFhLEdBQWpCLEVBQXNCO0FBQ2xCLHVDQUFLc0IsU0FBTCxDQUFlO0FBQ1hSLG1DQUFPLE1BREk7QUFFWFMsa0NBQU0sU0FGSztBQUdYQyxzQ0FBVTtBQUhDLHlCQUFmO0FBS0g7QUFDSixpQkFiRDtBQWNIO0FBbENLLFM7Ozs7OytCQWxCRkMsSyxFQUFPO0FBQ1hmLG9CQUFRQyxHQUFSLENBQVljLEtBQVo7QUFDQSxpQkFBS3pCLElBQUwsR0FBWXlCLE1BQU16QixJQUFsQjtBQUNBLGlCQUFLRCxXQUFMLEdBQW1CLEtBQUsyQixPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLFFBQTNDO0FBQ0g7Ozs7RUFMaUMsZUFBS0MsSTs7a0JBQXRCcEMsUSIsImZpbGUiOiJyZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IE5ldCBmcm9tICcuLi91dGlscy9uZXQnXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBvbkxvYWQgKHF1ZXJ5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhxdWVyeSlcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IHF1ZXJ5LmNvZGVcbiAgICAgICAgICAgIHRoaXMud3hfdXNlcmluZm8gPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+azqOWGjCdcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnRzID0ge31cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlzQWdyZWU6IGZhbHNlLFxuICAgICAgICAgICAgd3hfdXNlcmluZm86IG51bGwsXG4gICAgICAgICAgICBjb2RlOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHt9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGNoYW5nZUFncmVlKHYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWdyZWUgPSAhIXYuZGV0YWlsLnZhbHVlWzBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybVN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZXZlbnQuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybSlcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybVtrZXldID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5L2g6L+Y5rKh5pyJ5aGr5a6M5ZGiJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ+e7p+e7reWhqydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCB1c2VyaW5mbyA9IGV2ZW50LmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgICAgIE5ldC5wb3N0KCcvdXNlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAncmVnaXN0ZXInLFxuICAgICAgICAgICAgICAgICAgICB3eF91c2VyaW5mbzogdGhpcy53eF91c2VyaW5mbyxcbiAgICAgICAgICAgICAgICAgICAgdXNlcmluZm86IHVzZXJpbmZvLFxuICAgICAgICAgICAgICAgICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICAgICAgICAgICAgICB9LCAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfms6jlhozmiJDlip8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuIl19