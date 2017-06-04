'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var net = {
  host: 'http://127.0.0.1:8000/api',
  request: function request(url, method, data, callback) {
    _wepy2.default.request({
      url: net.host + url,
      method: method,
      data: data,
      success: callback
    });
  },
  get: function get(url, data, callback) {
    net.request(url, 'GET', data, callback);
  },
  post: function post(url, data, callback) {
    net.request(url, 'POST', data, callback);
  }
};
module.exports = net;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldC5qcyJdLCJuYW1lcyI6WyJuZXQiLCJob3N0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJjYWxsYmFjayIsInN1Y2Nlc3MiLCJnZXQiLCJwb3N0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBQ0EsSUFBSUEsTUFBTTtBQUNSQyxRQUFNLDJCQURFO0FBRVJDLFdBQVMsaUJBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFjQyxJQUFkLEVBQW9CQyxRQUFwQixFQUFpQztBQUN4QyxtQkFBS0osT0FBTCxDQUFhO0FBQ1hDLFdBQUtILElBQUlDLElBQUosR0FBV0UsR0FETDtBQUVYQyxjQUFRQSxNQUZHO0FBR1hDLFlBQU1BLElBSEs7QUFJWEUsZUFBU0Q7QUFKRSxLQUFiO0FBTUQsR0FUTztBQVVSRSxPQUFLLGFBQUNMLEdBQUQsRUFBTUUsSUFBTixFQUFZQyxRQUFaLEVBQXlCO0FBQzVCTixRQUFJRSxPQUFKLENBQVlDLEdBQVosRUFBaUIsS0FBakIsRUFBd0JFLElBQXhCLEVBQThCQyxRQUE5QjtBQUNELEdBWk87QUFhUkcsUUFBTSxjQUFDTixHQUFELEVBQU1FLElBQU4sRUFBWUMsUUFBWixFQUF5QjtBQUM3Qk4sUUFBSUUsT0FBSixDQUFZQyxHQUFaLEVBQWlCLE1BQWpCLEVBQXlCRSxJQUF6QixFQUErQkMsUUFBL0I7QUFDRDtBQWZPLENBQVY7QUFpQkFJLE9BQU9DLE9BQVAsR0FBaUJYLEdBQWpCIiwiZmlsZSI6Im5ldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5sZXQgbmV0ID0ge1xuICBob3N0OiAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaScsXG4gIHJlcXVlc3Q6ICh1cmwsIG1ldGhvZCwgZGF0YSwgY2FsbGJhY2spID0+IHtcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBuZXQuaG9zdCArIHVybCxcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHN1Y2Nlc3M6IGNhbGxiYWNrXG4gICAgfSlcbiAgfSxcbiAgZ2V0OiAodXJsLCBkYXRhLCBjYWxsYmFjaykgPT4ge1xuICAgIG5ldC5yZXF1ZXN0KHVybCwgJ0dFVCcsIGRhdGEsIGNhbGxiYWNrKTtcbiAgfSxcbiAgcG9zdDogKHVybCwgZGF0YSwgY2FsbGJhY2spID0+IHtcbiAgICBuZXQucmVxdWVzdCh1cmwsICdQT1NUJywgZGF0YSwgY2FsbGJhY2spO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IG5ldFxuIl19