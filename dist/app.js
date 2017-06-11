'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _net = require('./utils/net.js');

var _net2 = _interopRequireDefault(_net);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
    _inherits(_default, _wepy$app);

    function _default() {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

        _this.config = {
            pages: ['pages/index', 'pages/register'],
            window: {
                backgroundTextStyle: 'light',
                navigationBarBackgroundColor: '#fff',
                navigationBarTitleText: 'WeChat',
                navigationBarTextStyle: 'black'
            }
        };
        _this.globalData = {
            userInfo: null
        };

        _this.use('requestfix');
        return _this;
    }

    _createClass(_default, [{
        key: 'onLaunch',
        value: function onLaunch() {}
    }, {
        key: 'getUserInfo',
        value: function getUserInfo(cb) {
            var that = this;
            _wepy2.default.login({
                success: function success(res) {
                    if (res.code) {
                        console.log(res);
                        var code = res.code;
                        if (this.globalData.userInfo) {
                            return this.globalData.userInfo;
                        }
                        _wepy2.default.getUserInfo({
                            success: function success(res) {
                                console.log(res);
                                _net2.default.post('/login', {
                                    code: code,
                                    encryptedData: res.encryptedData,
                                    iv: res.iv
                                }, function (res) {
                                    if (res.code === 404) {
                                        _wepy2.default.redirectTo({
                                            url: 'register?code=' + code
                                        });
                                    }
                                });

                                that.globalData.userInfo = res.userInfo;
                                cb && cb(res.userInfo);
                            }
                        });
                    } else {
                        console.log('获取用户登录态失败！' + res.errMsg);
                    }
                }
            });
        }
    }]);

    return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJjYiIsInRoYXQiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsImdldFVzZXJJbmZvIiwicG9zdCIsImVuY3J5cHRlZERhdGEiLCJpdiIsInJlZGlyZWN0VG8iLCJ1cmwiLCJlcnJNc2ciLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQW1CSSx3QkFBZTtBQUFBOztBQUFBOztBQUFBLGNBakJmQSxNQWlCZSxHQWpCTjtBQUNMQyxtQkFBTyxDQUNILGFBREcsRUFFSCxnQkFGRyxDQURGO0FBS0xDLG9CQUFRO0FBQ0pDLHFDQUFxQixPQURqQjtBQUVKQyw4Q0FBOEIsTUFGMUI7QUFHSkMsd0NBQXdCLFFBSHBCO0FBSUpDLHdDQUF3QjtBQUpwQjtBQUxILFNBaUJNO0FBQUEsY0FKZkMsVUFJZSxHQUpGO0FBQ1RDLHNCQUFVO0FBREQsU0FJRTs7QUFFWCxjQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZXO0FBR2Q7Ozs7bUNBRVcsQ0FDWDs7O29DQUVZQyxFLEVBQUk7QUFDYixnQkFBTUMsT0FBTyxJQUFiO0FBQ0EsMkJBQUtDLEtBQUwsQ0FBVztBQUNQQyx5QkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3BCLHdCQUFJQSxJQUFJQyxJQUFSLEVBQWM7QUFDVkMsZ0NBQVFDLEdBQVIsQ0FBWUgsR0FBWjtBQUNBLDRCQUFJQyxPQUFPRCxJQUFJQyxJQUFmO0FBQ0EsNEJBQUksS0FBS1IsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDMUIsbUNBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDSDtBQUNELHVDQUFLVSxXQUFMLENBQWlCO0FBQ2JMLG1DQURhLG1CQUNKQyxHQURJLEVBQ0M7QUFDVkUsd0NBQVFDLEdBQVIsQ0FBWUgsR0FBWjtBQUNBLDhDQUFJSyxJQUFKLENBQVMsUUFBVCxFQUFtQjtBQUNmSiwwQ0FBTUEsSUFEUztBQUVmSyxtREFBZU4sSUFBSU0sYUFGSjtBQUdmQyx3Q0FBSVAsSUFBSU87QUFITyxpQ0FBbkIsRUFJRyxVQUFDUCxHQUFELEVBQVM7QUFDUix3Q0FBSUEsSUFBSUMsSUFBSixLQUFhLEdBQWpCLEVBQXNCO0FBQ2xCLHVEQUFLTyxVQUFMLENBQWdCO0FBQ1pDLGlEQUFLLG1CQUFtQlI7QUFEWix5Q0FBaEI7QUFHSDtBQUNKLGlDQVZEOztBQVlBSixxQ0FBS0osVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJNLElBQUlOLFFBQS9CO0FBQ0FFLHNDQUFNQSxHQUFHSSxJQUFJTixRQUFQLENBQU47QUFDSDtBQWpCWSx5QkFBakI7QUFtQkgscUJBekJELE1BeUJPO0FBQ0hRLGdDQUFRQyxHQUFSLENBQVksZUFBZUgsSUFBSVUsTUFBL0I7QUFDSDtBQUNKO0FBOUJNLGFBQVg7QUFnQ0g7Ozs7RUE1RHdCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG4gICAgaW1wb3J0IE5ldCBmcm9tICcuL3V0aWxzL25ldCdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgcGFnZXM6IFtcbiAgICAgICAgICAgICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9yZWdpc3RlcidcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB3aW5kb3c6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBnbG9iYWxEYXRhID0ge1xuICAgICAgICAgICAgdXNlckluZm86IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTGF1bmNoICgpIHtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFVzZXJJbmZvIChjYikge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICAgICAgICAgIHdlcHkubG9naW4oe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29kZSA9IHJlcy5jb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV0LnBvc3QoJy9sb2dpbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmNyeXB0ZWREYXRhOiByZXMuZW5jcnlwdGVkRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2OiByZXMuaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdyZWdpc3Rlcj9jb2RlPScgKyBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W55So5oi355m75b2V5oCB5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19