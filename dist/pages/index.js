'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tabbar = require('./../tests/tabbar.js');

var _tabbar2 = _interoRequireDefault(_tabbar);

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
        console.log('ok');
        if (userInfo) {
          console.log(userInfo);
          self.userInfo = userInfo;
          self.$apply();
          _wepy2.default.navigateTo({
            url: 'register?'
          });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVGFiYmFyIiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJ0YWJMaXN0Iiwic1RpdGxlIiwiaUNvdW50Iiwic0ljb25VcmwiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLHVCQUFzQixTQUF2QixFQUFWLEUsUUFDWkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVU7QUFERixPQURMO0FBSUxDLGVBQVMsQ0FBQztBQUNSQyxnQkFBUSxNQURBO0FBRVJDLGdCQUFRLENBRkE7QUFHUkMsa0JBQVU7QUFIRixPQUFELEVBSU47QUFDREYsZ0JBQVEsSUFEUDtBQUVEQyxnQkFBUSxDQUZQO0FBR0RDLGtCQUFVO0FBSFQsT0FKTTtBQUpKLEssUUFlUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEU7Ozs7OzZCQUVBO0FBQ1IsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsV0FBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVVWLFFBQVYsRUFBb0I7QUFDM0NXLGdCQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBLFlBQUlaLFFBQUosRUFBYztBQUNaVyxrQkFBUUMsR0FBUixDQUFZWixRQUFaO0FBQ0FRLGVBQUtSLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0FRLGVBQUtLLE1BQUw7QUFDQSx5QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxpQkFBSztBQURTLFdBQWhCO0FBR0EseUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxtQkFBTyxJQURNO0FBRWJDLGtCQUFNLFNBRk87QUFHYkMsc0JBQVU7QUFIRyxXQUFmO0FBS0Q7QUFDRixPQWZEO0FBZ0JEOzs7O0VBOUNnQyxlQUFLQyxJOztrQkFBbkI1QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBUYWJiYXIgZnJvbSAnLi4vdGVzdHMvdGFiYmFyJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6aaW6aG1J1xuICAgIH1cbiAgICRwcm9wcyA9IHtcIlRhYmJhclwiOntcInYtYmluZDp0YWJMaXN0Lm9uY2VcIjpcInRhYkxpc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgVGFiYmFyOiBUYWJiYXJcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitMS4uLidcbiAgICAgIH0sXG4gICAgICB0YWJMaXN0OiBbe1xuICAgICAgICBzVGl0bGU6ICfmiJHopoHmiqXkv64nLFxuICAgICAgICBpQ291bnQ6IDAsXG4gICAgICAgIHNJY29uVXJsOiAnLi4vaW1hZ2VzL2ljX2Fzc2lnbm1lbnRfYmxhY2tfMjRkcF8yeC5wbmcnXG4gICAgICB9LCB7XG4gICAgICAgIHNUaXRsZTogJ+aIkeeahCcsXG4gICAgICAgIGlDb3VudDogMCxcbiAgICAgICAgc0ljb25Vcmw6ICcuLi9pbWFnZXMvaWNfYWNjb3VudF9jaXJjbGVfYmxhY2tfMjRkcF8yeC5wbmcnXG4gICAgICB9XVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge31cblxuICAgIG1ldGhvZHMgPSB7fVxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uICh1c2VySW5mbykge1xuICAgICAgICBjb25zb2xlLmxvZygnb2snKVxuICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2VySW5mbylcbiAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJ3JlZ2lzdGVyPydcbiAgICAgICAgICB9KVxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5oiQ5YqfJyxcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==