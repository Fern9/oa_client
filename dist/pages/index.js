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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVGFiYmFyIiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJ0YWJMaXN0Iiwic1RpdGxlIiwiaUNvdW50Iiwic0ljb25VcmwiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLHVCQUFzQixTQUF2QixFQUFWLEUsUUFDWkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsa0JBQVU7QUFERixPQURMO0FBSUxDLGVBQVMsQ0FBQztBQUNSQyxnQkFBUSxNQURBO0FBRVJDLGdCQUFRLENBRkE7QUFHUkMsa0JBQVU7QUFIRixPQUFELEVBSU47QUFDREYsZ0JBQVEsSUFEUDtBQUVEQyxnQkFBUSxDQUZQO0FBR0RDLGtCQUFVO0FBSFQsT0FKTTtBQUpKLEssUUFlUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEU7Ozs7OzZCQUVBO0FBQ1IsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsV0FBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVVWLFFBQVYsRUFBb0I7QUFDM0NXLGdCQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBLFlBQUlaLFFBQUosRUFBYztBQUNaVyxrQkFBUUMsR0FBUixDQUFZWixRQUFaO0FBQ0FRLGVBQUtSLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0FRLGVBQUtLLE1BQUw7QUFDQSx5QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxpQkFBSztBQURTLFdBQWhCO0FBR0EseUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxtQkFBTyxJQURNO0FBRWJDLGtCQUFNLFNBRk87QUFHYkMsc0JBQVU7QUFIRyxXQUFmO0FBS0Q7QUFDRixPQWZEO0FBZ0JEOzs7O0VBOUNnQyxlQUFLQyxJOztrQkFBbkI1QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBUYWJiYXIgZnJvbSAnLi4vY29tcG9uZW50cy90YWJiYXInXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpppbpobUnXG4gICAgfVxuICAgJHByb3BzID0ge1wiVGFiYmFyXCI6e1widi1iaW5kOnRhYkxpc3Qub25jZVwiOlwidGFiTGlzdFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBUYWJiYXI6IFRhYmJhclxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0xLi4uJ1xuICAgICAgfSxcbiAgICAgIHRhYkxpc3Q6IFt7XG4gICAgICAgIHNUaXRsZTogJ+aIkeimgeaKpeS/ricsXG4gICAgICAgIGlDb3VudDogMCxcbiAgICAgICAgc0ljb25Vcmw6ICcuLi9pbWFnZXMvaWNfYXNzaWdubWVudF9ibGFja18yNGRwXzJ4LnBuZydcbiAgICAgIH0sIHtcbiAgICAgICAgc1RpdGxlOiAn5oiR55qEJyxcbiAgICAgICAgaUNvdW50OiAwLFxuICAgICAgICBzSWNvblVybDogJy4uL2ltYWdlcy9pY19hY2NvdW50X2NpcmNsZV9ibGFja18yNGRwXzJ4LnBuZydcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7fVxuXG4gICAgbWV0aG9kcyA9IHt9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24gKHVzZXJJbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvaycpXG4gICAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJJbmZvKVxuICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAncmVnaXN0ZXI/J1xuICAgICAgICAgIH0pXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfmiJDlip8nLFxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19