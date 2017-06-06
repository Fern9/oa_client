'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./../../../npm/wepy-async-function/index.js');

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
            'pages': ['example/index', 'example/button', 'example/list', 'example/input', 'example/slider', 'example/uploader', 'example/article', 'example/badge', 'example/flex', 'example/footer', 'example/gallery', 'example/grid', 'example/icons', 'example/loadmore', 'example/panel', 'example/preview', 'example/progress', 'example/actionsheet', 'example/dialog', 'example/msg', 'example/msg_fail', 'example/msg_success', 'example/picker', 'example/toast', 'example/navbar', 'example/tabbar', 'example/searchbar'],
            'window': {
                'navigationBarTextStyle': 'black',
                'navigationBarTitleText': 'WeUI in WePY',
                'navigationBarBackgroundColor': '#f8f8f8',
                'backgroundColor': '#f8f8f8'
            },
            'networkTimeout': {
                'request': 10000,
                'connectSocket': 10000,
                'uploadFile': 10000,
                'downloadFile': 10000
            }
        };

        _this.use('promisify');
        _this.use('requestfix');
        return _this;
    }

    return _default;
}(_wepy2.default.app);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJ1c2UiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBb0RJLHdCQUFlO0FBQUE7O0FBQUE7O0FBQUEsY0FoRGZBLE1BZ0RlLEdBaEROO0FBQ0wscUJBQVMsQ0FDTCxlQURLLEVBRUwsZ0JBRkssRUFHTCxjQUhLLEVBSUwsZUFKSyxFQUtMLGdCQUxLLEVBTUwsa0JBTkssRUFRTCxpQkFSSyxFQVNMLGVBVEssRUFVTCxjQVZLLEVBV0wsZ0JBWEssRUFZTCxpQkFaSyxFQWFMLGNBYkssRUFjTCxlQWRLLEVBZUwsa0JBZkssRUFnQkwsZUFoQkssRUFpQkwsaUJBakJLLEVBa0JMLGtCQWxCSyxFQW9CTCxxQkFwQkssRUFxQkwsZ0JBckJLLEVBc0JMLGFBdEJLLEVBdUJMLGtCQXZCSyxFQXdCTCxxQkF4QkssRUF5QkwsZ0JBekJLLEVBMEJMLGVBMUJLLEVBNEJMLGdCQTVCSyxFQTZCTCxnQkE3QkssRUErQkwsbUJBL0JLLENBREo7QUFrQ0wsc0JBQVU7QUFDTiwwQ0FBMEIsT0FEcEI7QUFFTiwwQ0FBMEIsY0FGcEI7QUFHTixnREFBZ0MsU0FIMUI7QUFJTixtQ0FBbUI7QUFKYixhQWxDTDtBQXdDTCw4QkFBa0I7QUFDZCwyQkFBVyxLQURHO0FBRWQsaUNBQWlCLEtBRkg7QUFHZCw4QkFBYyxLQUhBO0FBSWQsZ0NBQWdCO0FBSkY7QUF4Q2IsU0FnRE07O0FBRVgsY0FBS0MsR0FBTCxDQUFTLFdBQVQ7QUFDQSxjQUFLQSxHQUFMLENBQVMsWUFBVDtBQUhXO0FBSWQ7OztFQXREd0IsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcblxuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgJ3BhZ2VzJzogW1xuICAgICAgICAgICAgJ2V4YW1wbGUvaW5kZXgnLFxuICAgICAgICAgICAgJ2V4YW1wbGUvYnV0dG9uJyxcbiAgICAgICAgICAgICdleGFtcGxlL2xpc3QnLFxuICAgICAgICAgICAgJ2V4YW1wbGUvaW5wdXQnLFxuICAgICAgICAgICAgJ2V4YW1wbGUvc2xpZGVyJyxcbiAgICAgICAgICAgICdleGFtcGxlL3VwbG9hZGVyJyxcblxuICAgICAgICAgICAgJ2V4YW1wbGUvYXJ0aWNsZScsXG4gICAgICAgICAgICAnZXhhbXBsZS9iYWRnZScsXG4gICAgICAgICAgICAnZXhhbXBsZS9mbGV4JyxcbiAgICAgICAgICAgICdleGFtcGxlL2Zvb3RlcicsXG4gICAgICAgICAgICAnZXhhbXBsZS9nYWxsZXJ5JyxcbiAgICAgICAgICAgICdleGFtcGxlL2dyaWQnLFxuICAgICAgICAgICAgJ2V4YW1wbGUvaWNvbnMnLFxuICAgICAgICAgICAgJ2V4YW1wbGUvbG9hZG1vcmUnLFxuICAgICAgICAgICAgJ2V4YW1wbGUvcGFuZWwnLFxuICAgICAgICAgICAgJ2V4YW1wbGUvcHJldmlldycsXG4gICAgICAgICAgICAnZXhhbXBsZS9wcm9ncmVzcycsXG5cbiAgICAgICAgICAgICdleGFtcGxlL2FjdGlvbnNoZWV0JyxcbiAgICAgICAgICAgICdleGFtcGxlL2RpYWxvZycsXG4gICAgICAgICAgICAnZXhhbXBsZS9tc2cnLFxuICAgICAgICAgICAgJ2V4YW1wbGUvbXNnX2ZhaWwnLFxuICAgICAgICAgICAgJ2V4YW1wbGUvbXNnX3N1Y2Nlc3MnLFxuICAgICAgICAgICAgJ2V4YW1wbGUvcGlja2VyJyxcbiAgICAgICAgICAgICdleGFtcGxlL3RvYXN0JyxcblxuICAgICAgICAgICAgJ2V4YW1wbGUvbmF2YmFyJyxcbiAgICAgICAgICAgICdleGFtcGxlL3RhYmJhcicsXG5cbiAgICAgICAgICAgICdleGFtcGxlL3NlYXJjaGJhcidcbiAgICAgICAgXSxcbiAgICAgICAgJ3dpbmRvdyc6IHtcbiAgICAgICAgICAgICduYXZpZ2F0aW9uQmFyVGV4dFN0eWxlJzogJ2JsYWNrJyxcbiAgICAgICAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ1dlVUkgaW4gV2VQWScsXG4gICAgICAgICAgICAnbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcic6ICcjZjhmOGY4JyxcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kQ29sb3InOiAnI2Y4ZjhmOCdcbiAgICAgICAgfSxcbiAgICAgICAgJ25ldHdvcmtUaW1lb3V0Jzoge1xuICAgICAgICAgICAgJ3JlcXVlc3QnOiAxMDAwMCxcbiAgICAgICAgICAgICdjb25uZWN0U29ja2V0JzogMTAwMDAsXG4gICAgICAgICAgICAndXBsb2FkRmlsZSc6IDEwMDAwLFxuICAgICAgICAgICAgJ2Rvd25sb2FkRmlsZSc6IDEwMDAwXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XG4gICAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XG4gICAgfVxufVxuIl19