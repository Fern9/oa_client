'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _list = require('./../tests/list.js');

var _list2 = _interopRequireDefault(_list);

var _panel = require('./../tests/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../tests/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _group = require('./../tests/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _tabbar = require('./../tests/tabbar.js');

var _tabbar2 = _interopRequireDefault(_tabbar);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.normalTitle = '标题已被修改';

        self.setTimeoutTitle = '标题三秒后会被修改';
        setTimeout(function () {
          self.setTimeoutTitle = '到三秒了';
          self.$apply();
        }, 3000);

        self.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: 'test'
  };
  this.$props = { "counter": { "key": { "for": "[1,2,3,4]", "item": "item", "index": "index", "key": "key", "value": "key" } }, "group": { "v-bind:grouplist.once": { "for": "groupList", "item": "item", "index": "index", "key": "key", "value": "index" }, "v-bind:indexa.once": { "for": "groupList", "item": "item", "index": "index", "key": "key", "value": "index" } } };
  this.$events = {};
  this.components = {
    panel: _panel2.default,
    counter1: _counter2.default,
    counter: _counter2.default,
    list: _list2.default,
    group: _group2.default,
    toast: _wepyComToast2.default,
    Tabbar: _tabbar2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    mynum: 20,
    mynum2: 20,
    userInfo: {
      nickName: '加载中...'
    },
    normalTitle: '原始标题',
    setTimeoutTitle: '标题三秒后会被修改',
    count: 0,
    netrst: '',
    groupList: [{
      id: 1,
      name: '点击改变',
      list: [{
        childid: '1.1',
        childname: '子项，点我改变'
      }, {
        childid: '1.2',
        childname: '子项，点我改变'
      }, {
        childid: '1.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 2,
      name: '点击改变',
      list: [{
        childid: '2.1',
        childname: '子项，点我改变'
      }, {
        childid: '2.2',
        childname: '子项，点我改变'
      }, {
        childid: '2.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 3,
      name: '点击改变',
      list: [{
        childid: '3.1',
        childname: '子项，点我改变'
      }]
    }]
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
    plus: function plus() {
      this.mynum++;
    },
    toast: function toast() {
      var promise = this.$invoke('toast', 'show', {
        title: '自定义标题',
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      });

      promise.then(function (d) {
        console.log('toast done');
      });
    },
    tap: function tap() {
      console.log('do noting from ' + this.$name);
    },
    communicate: function communicate() {
      console.log(this.$name + ' tap'

      //        this.$invoke('counter2', 'minus', 45, 6)
      //        this.$invoke('counter1', 'plus', 45, 6)

      //        this.$broadcast('index-broadcast', 1, 3, 4)
      );
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
      while (i--) {
        _wepy2.default.request({
          url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
          success: function success(d) {
            self.netrst += d.data + '.';
            self.$apply();
          }
        });
      }
    },
    counterEmit: function counterEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.events = {
    'index-emit': function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
}, _temp2);
exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmJhay5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInNlbGYiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsIm5vcm1hbFRpdGxlIiwic2V0VGltZW91dFRpdGxlIiwic2V0VGltZW91dCIsIiRhcHBseSIsInBhZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwYW5lbCIsImNvdW50ZXIxIiwiY291bnRlciIsImxpc3QiLCJncm91cCIsInRvYXN0IiwiVGFiYmFyIiwibWl4aW5zIiwiZGF0YSIsIm15bnVtIiwibXludW0yIiwibmlja05hbWUiLCJjb3VudCIsIm5ldHJzdCIsImdyb3VwTGlzdCIsImlkIiwibmFtZSIsImNoaWxkaWQiLCJjaGlsZG5hbWUiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwicGx1cyIsInByb21pc2UiLCIkaW52b2tlIiwidGl0bGUiLCJpbWciLCJ0aGVuIiwiZCIsImNvbnNvbGUiLCJsb2ciLCJ0YXAiLCIkbmFtZSIsImNvbW11bmljYXRlIiwicmVxdWVzdCIsImkiLCJtYXAiLCJ1cmwiLCJzdWNjZXNzIiwiY291bnRlckVtaXQiLCIkZXZlbnQiLCJsZW5ndGgiLCJzb3VyY2UiLCJldmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQW9JVDtBQUNSLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFdBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFVQyxRQUFWLEVBQW9CO0FBQzNDLFlBQUlBLFFBQUosRUFBYztBQUNaSCxlQUFLRyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEO0FBQ0RILGFBQUtJLFdBQUwsR0FBbUIsUUFBbkI7O0FB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aW1wb3J0IExpc3QgZnJvbSAnLi4vdGVzdHMvbGlzdCdcbiAgaW1wb3J0IFBhbmVsIGZyb20gJy4uL3Rlc3RzL3BhbmVsJ1xuICBpbXBvcnQgQ291bnRlciBmcm9tICcuLi90ZXN0cy9jb3VudGVyJ1xuICBpbXBvcnQgR3JvdXAgZnJvbSAnLi4vdGVzdHMvZ3JvdXAnXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IFRhYmJhciBmcm9tICcuLi90ZXN0cy90YWJiYXInXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0ZXN0J1xuICAgIH1cbiAgICRwcm9wcyA9IHtcImNvdW50ZXJcIjp7XCJrZXlcIjp7XCJmb3JcIjpcIlsxLDIsMyw0XVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcImtleVwifX0sXCJncm91cFwiOntcInYtYmluZDpncm91cGxpc3Qub25jZVwiOntcImZvclwiOlwiZ3JvdXBMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aW5kZXhhLm9uY2VcIjp7XCJmb3JcIjpcImdyb3VwTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBwYW5lbDogUGFuZWwsXG4gICAgICBjb3VudGVyMTogQ291bnRlcixcbiAgICAgIGNvdW50ZXI6IENvdW50ZXIsXG4gICAgICBsaXN0OiBMaXN0LFxuICAgICAgZ3JvdXA6IEdyb3VwLFxuICAgICAgdG9hc3Q6IFRvYXN0LFxuICAgICAgVGFiYmFyOiBUYWJiYXJcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIG15bnVtOiAyMCxcbiAgICAgIG15bnVtMjogMjAsXG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICAgIH0sXG4gICAgICBub3JtYWxUaXRsZTogJ+WOn+Wni+agh+mimCcsXG4gICAgICBzZXRUaW1lb3V0VGl0bGU6ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknLFxuICAgICAgY291bnQ6IDAsXG4gICAgICBuZXRyc3Q6ICcnLFxuICAgICAgZ3JvdXBMaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjEnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjInLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjMnLFxuICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4xJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4yJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4zJyxcbiAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIG5hbWU6ICfngrnlh7vmlLnlj5gnLFxuICAgICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2hpbGRpZDogJzMuMScsXG4gICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIG5vdyAoKSB7XG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBwbHVzICgpIHtcbiAgICAgICAgdGhpcy5teW51bSsrXG4gICAgICB9LFxuICAgICAgdG9hc3QgKCkge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcbiAgICAgICAgICB0aXRsZTogJ+iHquWumuS5ieagh+mimCcsXG4gICAgICAgICAgaW1nOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2tpaW5sYW0vd2V0b2FzdC9tYXN0ZXIvaW1hZ2VzL3N0YXIucG5nJ1xuICAgICAgICB9KVxuXG4gICAgICAgIHByb21pc2UudGhlbigoZCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2FzdCBkb25lJylcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0YXAgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZG8gbm90aW5nIGZyb20gJyArIHRoaXMuJG5hbWUpXG4gICAgICB9LFxuICAgICAgY29tbXVuaWNhdGUgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKVxuXG4vLyAgICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMicsICdtaW51cycsIDQ1LCA2KVxuLy8gICAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjEnLCAncGx1cycsIDQ1LCA2KVxuXG4vLyAgICAgICAgdGhpcy4kYnJvYWRjYXN0KCdpbmRleC1icm9hZGNhc3QnLCAxLCAzLCA0KVxuICAgICAgfSxcbiAgICAgIHJlcXVlc3QgKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IGkgPSAxMFxuICAgICAgICBsZXQgbWFwID0gWydNQT09JywgJ01Rbz0nLCAnTWc9PScsICdNdz09JywgJ05BPT0nLCAnTlE9PScsICdOZz09JywgJ053PT0nLCAnT0E9PScsICdPUT09J11cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5tYWRjb2Rlci5jbi90ZXN0cy9zbGVlcC5waHA/dGltZT0xJnQ9Y3NzJmM9JyArIG1hcFtpXSArICcmaT0nICsgaSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgIHNlbGYubmV0cnN0ICs9IGQuZGF0YSArICcuJ1xuICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvdW50ZXJFbWl0ICguLi5hcmdzKSB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICdpbmRleC1lbWl0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uICh1c2VySW5mbykge1xuICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cbiAgICAgICAgfVxuICAgICAgICBzZWxmLm5vcm1hbFRpdGxlID0gJ+agh+mimOW3suiiq+S/ruaUuSdcblxuICAgICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+WIsOS4ieenkuS6hidcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH0sIDMwMDApXG5cbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==