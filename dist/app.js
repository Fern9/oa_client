'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

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
            console.log('code', res.code);
            if (this.globalData.userInfo) {
              return this.globalData.userInfo;
            }
            _wepy2.default.getUserInfo({
              success: function success(user_res) {
                console.log('userinfo:', user_res);
                that.globalData.userInfo = user_res.userInfo;
                cb && cb(user_res.userInfo);
                wx.request({
                  url: 'http://127.0.0.1:5000/auth/login',
                  method: 'POST',
                  data: {
                    code: res.code,
                    iv: user_res.iv,
                    encryptedData: user_res.encryptedData
                  },
                  success: function success(result) {
                    if (result.data.code == 404) {
                      wx.login({
                        success: function success(res) {
                          wx.request({
                            url: 'http://127.0.0.1:5000/auth/user',
                            method: "POST",
                            data: {
                              action: 'register',
                              code: res.code,
                              wx_userinfo: user_res.userInfo,
                              userinfo: { 'name': 'zhangsan1' }
                            },
                            success: function success(login_res) {
                              console.log(login_res);
                            }
                          });
                        }
                      });
                    } else {
                      wx.request({
                        url: 'http://127.0.0.1:5000/auth/user',
                        data: {
                          view: 'get_curr_user_info'
                        },
                        success: function success(login_res) {
                          console.log(login_res);
                        }
                      });
                    }
                  }
                });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJjYiIsInRoYXQiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsImdldFVzZXJJbmZvIiwidXNlcl9yZXMiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiaXYiLCJlbmNyeXB0ZWREYXRhIiwicmVzdWx0IiwiYWN0aW9uIiwid3hfdXNlcmluZm8iLCJ1c2VyaW5mbyIsImxvZ2luX3JlcyIsInZpZXciLCJlcnJNc2ciLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFvQkUsc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQWpCZkEsTUFpQmUsR0FqQk47QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxnQkFGSyxDQURBO0FBS1BDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEI7QUFMRCxLQWlCTTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGYTtBQUdkOzs7OytCQUVXLENBQ1g7OztnQ0FFWUMsRSxFQUFJO0FBQ2YsVUFBTUMsT0FBTyxJQUFiO0FBQ0EscUJBQUtDLEtBQUwsQ0FBVztBQUNUQyxpQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCLGNBQUlBLElBQUlDLElBQVIsRUFBYztBQUNaQyxvQkFBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JILElBQUlDLElBQXhCO0FBQ0EsZ0JBQUksS0FBS1IsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIscUJBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDtBQUNELDJCQUFLVSxXQUFMLENBQWlCO0FBQ2ZMLHFCQURlLG1CQUNOTSxRQURNLEVBQ0k7QUFDakJILHdCQUFRQyxHQUFSLENBQVksV0FBWixFQUF5QkUsUUFBekI7QUFDQVIscUJBQUtKLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCVyxTQUFTWCxRQUFwQztBQUNBRSxzQkFBTUEsR0FBR1MsU0FBU1gsUUFBWixDQUFOO0FBQ0FZLG1CQUFHQyxPQUFILENBQVc7QUFDVEMsdUJBQUssa0NBREk7QUFFVEMsMEJBQVEsTUFGQztBQUdUQyx3QkFBSztBQUNIVCwwQkFBTUQsSUFBSUMsSUFEUDtBQUVIVSx3QkFBSU4sU0FBU00sRUFGVjtBQUdIQyxtQ0FBZVAsU0FBU087QUFIckIsbUJBSEk7QUFRVGIsMkJBQVMsaUJBQVVjLE1BQVYsRUFBa0I7QUFDdkIsd0JBQUdBLE9BQU9ILElBQVAsQ0FBWVQsSUFBWixJQUFvQixHQUF2QixFQUEyQjtBQUN2QksseUJBQUdSLEtBQUgsQ0FBUztBQUNQQyxpQ0FBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCTSw2QkFBR0MsT0FBSCxDQUFXO0FBQ1RDLGlDQUFLLGlDQURJO0FBRVRDLG9DQUFRLE1BRkM7QUFHVEMsa0NBQUs7QUFDSEksc0NBQVEsVUFETDtBQUVIYixvQ0FBTUQsSUFBSUMsSUFGUDtBQUdIYywyQ0FBYVYsU0FBU1gsUUFIbkI7QUFJSHNCLHdDQUFVLEVBQUMsUUFBUSxXQUFUO0FBSlAsNkJBSEk7QUFTVGpCLHFDQUFTLGlCQUFVa0IsU0FBVixFQUFxQjtBQUM1QmYsc0NBQVFDLEdBQVIsQ0FBWWMsU0FBWjtBQUVEO0FBWlEsMkJBQVg7QUFjRDtBQWhCTSx1QkFBVDtBQWtCSCxxQkFuQkQsTUFtQks7QUFDSFgseUJBQUdDLE9BQUgsQ0FBVztBQUNUQyw2QkFBSyxpQ0FESTtBQUVURSw4QkFBSztBQUNIUSxnQ0FBTTtBQURILHlCQUZJO0FBS1RuQixpQ0FBUyxpQkFBVWtCLFNBQVYsRUFBcUI7QUFDNUJmLGtDQUFRQyxHQUFSLENBQVljLFNBQVo7QUFFRDtBQVJRLHVCQUFYO0FBVUQ7QUFDSjtBQXhDUSxpQkFBWDtBQTBDRDtBQS9DYyxhQUFqQjtBQWlERCxXQXRERCxNQXNETztBQUNMZixvQkFBUUMsR0FBUixDQUFZLGVBQWVILElBQUltQixNQUEvQjtBQUNEO0FBQ0Y7QUEzRFEsT0FBWDtBQTZERDs7OztFQXpGMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIHBhZ2VzOiBbXG4gICAgICAgICdwYWdlcy9pbmRleCcsXG4gICAgICAgICdwYWdlcy9yZWdpc3RlcidcbiAgICAgIF0sXG4gICAgICB3aW5kb3c6IHtcbiAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGdsb2JhbERhdGEgPSB7XG4gICAgICB1c2VySW5mbzogbnVsbFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKClcbiAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICB9XG5cbiAgICBvbkxhdW5jaCAoKSB7XG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm8gKGNiKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgd2VweS5sb2dpbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2RlJywgcmVzLmNvZGUpXG4gICAgICAgICAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICBzdWNjZXNzICh1c2VyX3Jlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyaW5mbzonLCB1c2VyX3JlcylcbiAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSB1c2VyX3Jlcy51c2VySW5mb1xuICAgICAgICAgICAgICAgIGNiICYmIGNiKHVzZXJfcmVzLnVzZXJJbmZvKVxuICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo1MDAwL2F1dGgvbG9naW4nLFxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgICAgICAgY29kZTogcmVzLmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIGl2OiB1c2VyX3Jlcy5pdixcbiAgICAgICAgICAgICAgICAgICAgZW5jcnlwdGVkRGF0YTogdXNlcl9yZXMuZW5jcnlwdGVkRGF0YSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuY29kZSA9PSA0MDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5sb2dpbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC9hdXRoL3VzZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdyZWdpc3RlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogcmVzLmNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3hfdXNlcmluZm86IHVzZXJfcmVzLnVzZXJJbmZvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJpbmZvOiB7J25hbWUnOiAnemhhbmdzYW4xJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGxvZ2luX3Jlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ2luX3JlcylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjUwMDAvYXV0aC91c2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlldzogJ2dldF9jdXJyX3VzZXJfaW5mbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChsb2dpbl9yZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dpbl9yZXMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPlueUqOaIt+eZu+W9leaAgeWksei0pe+8gScgKyByZXMuZXJyTXNnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==