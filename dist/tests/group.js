'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _groupitem = require('./groupitem.js');

var _groupitem2 = _interopRequireDefault(_groupitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_wepy$component) {
  _inherits(Group, _wepy$component);

  function Group() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Group);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Group.__proto__ || Object.getPrototypeOf(Group)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      grouplist: {},
      index: {}
    }, _this.$props = { "groupitem": { "v-bind:gitem.once": { "for": "grouplist.list", "item": "item", "index": "index", "key": "key", "value": "item" } } }, _this.$events = {}, _this.components = {
      groupitem: _groupitem2.default
    }, _this.methods = {
      tap: function tap() {
        this.grouplist.name = 'Parent Random(' + Math.random() + ')';
        console.log('Clicked Group ' + this.$index + ', ID is ' + this.grouplist.id);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Group;
}(_wepy2.default.component);

exports.default = Group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLmpzIl0sIm5hbWVzIjpbIkdyb3VwIiwicHJvcHMiLCJncm91cGxpc3QiLCJpbmRleCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ3JvdXBpdGVtIiwibWV0aG9kcyIsInRhcCIsIm5hbWUiLCJNYXRoIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIiRpbmRleCIsImlkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEssR0FBUTtBQUNOQyxpQkFBVyxFQURMO0FBRU5DLGFBQU87QUFGRCxLLFFBS1RDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxxQkFBb0IsRUFBQyxPQUFNLGdCQUFQLEVBQXdCLFFBQU8sTUFBL0IsRUFBc0MsU0FBUSxPQUE5QyxFQUFzRCxPQUFNLEtBQTVELEVBQWtFLFNBQVEsTUFBMUUsRUFBckIsRUFBYixFLFFBQ1pDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFHVkMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Q7QUFDTCxhQUFLUCxTQUFMLENBQWVRLElBQWYsc0JBQXVDQyxLQUFLQyxNQUFMLEVBQXZDO0FBQ0FDLGdCQUFRQyxHQUFSLG9CQUE2QixLQUFLQyxNQUFsQyxnQkFBbUQsS0FBS2IsU0FBTCxDQUFlYyxFQUFsRTtBQUNEO0FBSk8sSzs7OztFQVh1QixlQUFLQyxTOztrQkFBbkJqQixLIiwiZmlsZSI6Imdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBHcm91cEl0ZW0gZnJvbSAnLi9ncm91cGl0ZW0nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXAgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBncm91cGxpc3Q6IHt9LFxuICAgICAgaW5kZXg6IHt9XG4gICAgfVxuXG4gICAkcHJvcHMgPSB7XCJncm91cGl0ZW1cIjp7XCJ2LWJpbmQ6Z2l0ZW0ub25jZVwiOntcImZvclwiOlwiZ3JvdXBsaXN0Lmxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIixcInZhbHVlXCI6XCJpdGVtXCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBncm91cGl0ZW06IEdyb3VwSXRlbVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFwICgpIHtcbiAgICAgICAgdGhpcy5ncm91cGxpc3QubmFtZSA9IGBQYXJlbnQgUmFuZG9tKCR7TWF0aC5yYW5kb20oKX0pYFxuICAgICAgICBjb25zb2xlLmxvZyhgQ2xpY2tlZCBHcm91cCAke3RoaXMuJGluZGV4fSwgSUQgaXMgJHt0aGlzLmdyb3VwbGlzdC5pZH1gKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19