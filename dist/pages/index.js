'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tabbar = require('./../components/tabbar.js');

var _tabbar2 = _interopRequireDefault(_tabbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '首页'
        }, _this.$props = { "Tabbar": { "v-bind:tabList.once": "tabList" } }, _this.$events = {}, _this.components = {
            Tabbar: _tabbar2.default
        }, _this.data = {
            userInfo: {
                nickName: '加载中1...'
            },
            tabList: [{
                sTitle: '我要报修',
                iCount: 0,
                sIconUrl: '../images/ic_assignment_black_24dp_2x.png'
            }, {
                sTitle: '我的',
                iCount: 0,
                sIconUrl: '../images/ic_account_circle_black_24dp_2x.png'
            }]
        }, _this.computed = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            var self = this;
            this.$parent.getUserInfo(function (userInfo) {

                if (userInfo) {
                    console.log(userInfo);
                    self.userInfo = userInfo;
                    self.$apply();

                    _wepy2.default.showToast({
                        title: '成功',
                        icon: 'success',
                        duration: 2000
                    });
                }
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVGFiYmFyIiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJ0YWJMaXN0Iiwic1RpdGxlIiwiaUNvdW50Iiwic0ljb25VcmwiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdWQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsdUJBQXNCLFNBQXZCLEVBQVYsRSxRQUNoQkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDO0FBREUsUyxRQUdOQyxJLEdBQU87QUFDSEMsc0JBQVU7QUFDTkMsMEJBQVU7QUFESixhQURQO0FBSUhDLHFCQUFTLENBQUM7QUFDTkMsd0JBQVEsTUFERjtBQUVOQyx3QkFBUSxDQUZGO0FBR05DLDBCQUFVO0FBSEosYUFBRCxFQUlOO0FBQ0NGLHdCQUFRLElBRFQ7QUFFQ0Msd0JBQVEsQ0FGVDtBQUdDQywwQkFBVTtBQUhYLGFBSk07QUFKTixTLFFBZVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVSxFOzs7OztpQ0FFQTtBQUNOLGdCQUFJQyxPQUFPLElBQVg7QUFDQSxpQkFBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVVWLFFBQVYsRUFBb0I7O0FBRXpDLG9CQUFJQSxRQUFKLEVBQWM7QUFDVlcsNEJBQVFDLEdBQVIsQ0FBWVosUUFBWjtBQUNBUSx5QkFBS1IsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQVEseUJBQUtLLE1BQUw7O0FBRUEsbUNBQUtDLFNBQUwsQ0FBZTtBQUNYQywrQkFBTyxJQURJO0FBRVhDLDhCQUFNLFNBRks7QUFHWEMsa0NBQVU7QUFIQyxxQkFBZjtBQUtIO0FBQ0osYUFiRDtBQWNIOzs7O0VBNUM4QixlQUFLQyxJOztrQkFBbkIxQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgVGFiYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvdGFiYmFyJ1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mmlumhtSdcbiAgICAgICAgfVxuICAgICAgICRwcm9wcyA9IHtcIlRhYmJhclwiOntcInYtYmluZDp0YWJMaXN0Lm9uY2VcIjpcInRhYkxpc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgVGFiYmFyOiBUYWJiYXJcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rTEuLi4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFiTGlzdDogW3tcbiAgICAgICAgICAgICAgICBzVGl0bGU6ICfmiJHopoHmiqXkv64nLFxuICAgICAgICAgICAgICAgIGlDb3VudDogMCxcbiAgICAgICAgICAgICAgICBzSWNvblVybDogJy4uL2ltYWdlcy9pY19hc3NpZ25tZW50X2JsYWNrXzI0ZHBfMngucG5nJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHNUaXRsZTogJ+aIkeeahCcsXG4gICAgICAgICAgICAgICAgaUNvdW50OiAwLFxuICAgICAgICAgICAgICAgIHNJY29uVXJsOiAnLi4vaW1hZ2VzL2ljX2FjY291bnRfY2lyY2xlX2JsYWNrXzI0ZHBfMngucG5nJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge31cblxuICAgICAgICBtZXRob2RzID0ge31cblxuICAgICAgICBvbkxvYWQgKCkge1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24gKHVzZXJJbmZvKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlckluZm8pXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG5cbiAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19