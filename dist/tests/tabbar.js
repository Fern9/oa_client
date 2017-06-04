'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabbar = function (_wepy$component) {
  _inherits(Tabbar, _wepy$component);

  function Tabbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tabbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabbar.__proto__ || Object.getPrototypeOf(Tabbar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      tabList: {
        type: [Array],
        default: [{
          iCount: 0
        }, {
          iCount: 120
        }]
      }
    }, _this.computed = {
      count_show: function count_show() {
        var ans = [];
        this.tabList.forEach(function (item, i) {
          ans.push(item.iCount < 100 ? item.iCount : '99');
        });
        return ans;
      }
    }, _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tabbar, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('Onload123');
    }
  }]);

  return Tabbar;
}(_wepy2.default.component);

exports.default = Tabbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmJhci5qcyJdLCJuYW1lcyI6WyJUYWJiYXIiLCJwcm9wcyIsInRhYkxpc3QiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0IiwiaUNvdW50IiwiY29tcHV0ZWQiLCJjb3VudF9zaG93IiwiYW5zIiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwicHVzaCIsImRhdGEiLCJtZXRob2RzIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxLLEdBQVE7QUFDTkMsZUFBUztBQUNQQyxjQUFNLENBQUNDLEtBQUQsQ0FEQztBQUVQQyxpQkFBUyxDQUNQO0FBQ0VDLGtCQUFRO0FBRFYsU0FETyxFQUlQO0FBQ0VBLGtCQUFRO0FBRFYsU0FKTztBQUZGO0FBREgsSyxRQWFSQyxRLEdBQVc7QUFDVEMsZ0JBRFMsd0JBQ0s7QUFDWixZQUFJQyxNQUFNLEVBQVY7QUFDQSxhQUFLUCxPQUFMLENBQWFRLE9BQWIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDaENILGNBQUlJLElBQUosQ0FBU0YsS0FBS0wsTUFBTCxHQUFjLEdBQWQsR0FBb0JLLEtBQUtMLE1BQXpCLEdBQWtDLElBQTNDO0FBQ0QsU0FGRDtBQUdBLGVBQU9HLEdBQVA7QUFDRDtBQVBRLEssUUFTWEssSSxHQUFPLEUsUUFFUEMsTyxHQUFVLEU7Ozs7OzZCQUVBO0FBQ1JDLGNBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0Q7Ozs7RUE3QmlDLGVBQUtDLFM7O2tCQUFwQmxCLE0iLCJmaWxlIjoidGFiYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmJhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIHRhYkxpc3Q6IHtcbiAgICAgICAgdHlwZTogW0FycmF5XSxcbiAgICAgICAgZGVmYXVsdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlDb3VudDogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaUNvdW50OiAxMjBcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBjb3VudF9zaG93ICgpIHtcbiAgICAgICAgbGV0IGFucyA9IFtdXG4gICAgICAgIHRoaXMudGFiTGlzdC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgYW5zLnB1c2goaXRlbS5pQ291bnQgPCAxMDAgPyBpdGVtLmlDb3VudCA6ICc5OScpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhbnNcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICB9XG4gICAgbWV0aG9kcyA9IHt9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgY29uc29sZS5sb2coJ09ubG9hZDEyMycpXG4gICAgfVxuICB9XG5cbiJdfQ==