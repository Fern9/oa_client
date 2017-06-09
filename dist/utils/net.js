'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var net = {
    host: 'http://127.0.0.1:5000/api',
    request: function request(url, method, data, callback) {
        _wepy2.default.request({
            url: net.host + url,
            method: method,
            data: data,
            success: function success(res) {
                callback(res.data);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldC5qcyJdLCJuYW1lcyI6WyJuZXQiLCJob3N0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJjYWxsYmFjayIsInN1Y2Nlc3MiLCJyZXMiLCJnZXQiLCJwb3N0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBQ0EsSUFBSUEsTUFBTTtBQUNOQyxVQUFNLDJCQURBO0FBRU5DLGFBQVMsaUJBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFjQyxJQUFkLEVBQW9CQyxRQUFwQixFQUFpQztBQUN0Qyx1QkFBS0osT0FBTCxDQUFhO0FBQ1RDLGlCQUFLSCxJQUFJQyxJQUFKLEdBQVdFLEdBRFA7QUFFVEMsb0JBQVFBLE1BRkM7QUFHVEMsa0JBQU1BLElBSEc7QUFJVEUscUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNkRix5QkFBU0UsSUFBSUgsSUFBYjtBQUNIO0FBTlEsU0FBYjtBQVFILEtBWEs7QUFZTkksU0FBSyxhQUFDTixHQUFELEVBQU1FLElBQU4sRUFBWUMsUUFBWixFQUF5QjtBQUMxQk4sWUFBSUUsT0FBSixDQUFZQyxHQUFaLEVBQWlCLEtBQWpCLEVBQXdCRSxJQUF4QixFQUE4QkMsUUFBOUI7QUFDSCxLQWRLO0FBZU5JLFVBQU0sY0FBQ1AsR0FBRCxFQUFNRSxJQUFOLEVBQVlDLFFBQVosRUFBeUI7QUFDM0JOLFlBQUlFLE9BQUosQ0FBWUMsR0FBWixFQUFpQixNQUFqQixFQUF5QkUsSUFBekIsRUFBK0JDLFFBQS9CO0FBQ0g7QUFqQkssQ0FBVjtBQW1CQUssT0FBT0MsT0FBUCxHQUFpQlosR0FBakIiLCJmaWxlIjoibmV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmxldCBuZXQgPSB7XG4gICAgaG9zdDogJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC9hcGknLFxuICAgIHJlcXVlc3Q6ICh1cmwsIG1ldGhvZCwgZGF0YSwgY2FsbGJhY2spID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogbmV0Lmhvc3QgKyB1cmwsXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBnZXQ6ICh1cmwsIGRhdGEsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIG5ldC5yZXF1ZXN0KHVybCwgJ0dFVCcsIGRhdGEsIGNhbGxiYWNrKVxuICAgIH0sXG4gICAgcG9zdDogKHVybCwgZGF0YSwgY2FsbGJhY2spID0+IHtcbiAgICAgICAgbmV0LnJlcXVlc3QodXJsLCAnUE9TVCcsIGRhdGEsIGNhbGxiYWNrKVxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gbmV0XG4iXX0=