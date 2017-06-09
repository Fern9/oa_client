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
                                    if (res.code == 404) {
                                        _wepy2.default.redirectTo({
                                            url: 'register?'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJjYiIsInRoYXQiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsImdldFVzZXJJbmZvIiwicG9zdCIsImVuY3J5cHRlZERhdGEiLCJpdiIsInJlZGlyZWN0VG8iLCJ1cmwiLCJlcnJNc2ciLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQW1CSSx3QkFBZTtBQUFBOztBQUFBOztBQUFBLGNBakJmQSxNQWlCZSxHQWpCTjtBQUNMQyxtQkFBTyxDQUNILGFBREcsRUFFSCxnQkFGRyxDQURGO0FBS0xDLG9CQUFRO0FBQ0pDLHFDQUFxQixPQURqQjtBQUVKQyw4Q0FBOEIsTUFGMUI7QUFHSkMsd0NBQXdCLFFBSHBCO0FBSUpDLHdDQUF3QjtBQUpwQjtBQUxILFNBaUJNO0FBQUEsY0FKZkMsVUFJZSxHQUpGO0FBQ1RDLHNCQUFVO0FBREQsU0FJRTs7QUFFWCxjQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZXO0FBR2Q7Ozs7bUNBRVcsQ0FDWDs7O29DQUVZQyxFLEVBQUk7QUFDYixnQkFBTUMsT0FBTyxJQUFiO0FBQ0EsMkJBQUtDLEtBQUwsQ0FBVztBQUNQQyx5QkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3BCLHdCQUFJQSxJQUFJQyxJQUFSLEVBQWM7QUFDVkMsZ0NBQVFDLEdBQVIsQ0FBWUgsR0FBWjtBQUNBLDRCQUFJQyxPQUFPRCxJQUFJQyxJQUFmO0FBQ0EsNEJBQUksS0FBS1IsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDMUIsbUNBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDSDtBQUNELHVDQUFLVSxXQUFMLENBQWlCO0FBQ2JMLG1DQURhLG1CQUNKQyxHQURJLEVBQ0M7QUFDVkUsd0NBQVFDLEdBQVIsQ0FBWUgsR0FBWjtBQUNBLDhDQUFJSyxJQUFKLENBQVMsUUFBVCxFQUFtQjtBQUNmSiwwQ0FBTUEsSUFEUztBQUVmSyxtREFBZU4sSUFBSU0sYUFGSjtBQUdmQyx3Q0FBSVAsSUFBSU87QUFITyxpQ0FBbkIsRUFJRyxVQUFDUCxHQUFELEVBQVM7QUFDUix3Q0FBSUEsSUFBSUMsSUFBSixJQUFZLEdBQWhCLEVBQXFCO0FBQ2pCLHVEQUFLTyxVQUFMLENBQWdCO0FBQ1pDLGlEQUFLO0FBRE8seUNBQWhCO0FBR0g7QUFDSixpQ0FWRDs7QUFZQVoscUNBQUtKLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCTSxJQUFJTixRQUEvQjtBQUNBRSxzQ0FBTUEsR0FBR0ksSUFBSU4sUUFBUCxDQUFOO0FBQ0g7QUFqQlkseUJBQWpCO0FBbUJILHFCQXpCRCxNQXlCTztBQUNIUSxnQ0FBUUMsR0FBUixDQUFZLGVBQWVILElBQUlVLE1BQS9CO0FBQ0g7QUFDSjtBQTlCTSxhQUFYO0FBZ0NIOzs7O0VBNUR3QixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuICAgIGltcG9ydCBOZXQgZnJvbSAnLi91dGlscy9uZXQnXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHBhZ2VzOiBbXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL2luZGV4JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvcmVnaXN0ZXInXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd2luZG93OiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgICAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgICAgIH1cblxuICAgICAgICBvbkxhdW5jaCAoKSB7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRVc2VySW5mbyAoY2IpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICAgICAgICB3ZXB5LmxvZ2luKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvZGUgPSByZXMuY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldC5wb3N0KCcvbG9naW4nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jcnlwdGVkRGF0YTogcmVzLmVuY3J5cHRlZERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdjogcmVzLml2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdyZWdpc3Rlcj8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W55So5oi355m75b2V5oCB5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19