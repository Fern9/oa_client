'use strict';

function formatTime(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
}

module.exports = {
    formatTime: formatTime
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsiZm9ybWF0VGltZSIsImRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibWFwIiwiZm9ybWF0TnVtYmVyIiwiam9pbiIsIm4iLCJ0b1N0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsVUFBVCxDQUFxQkMsSUFBckIsRUFBMkI7QUFDdkIsUUFBSUMsT0FBT0QsS0FBS0UsV0FBTCxFQUFYO0FBQ0EsUUFBSUMsUUFBUUgsS0FBS0ksUUFBTCxLQUFrQixDQUE5QjtBQUNBLFFBQUlDLE1BQU1MLEtBQUtNLE9BQUwsRUFBVjs7QUFFQSxRQUFJQyxPQUFPUCxLQUFLUSxRQUFMLEVBQVg7QUFDQSxRQUFJQyxTQUFTVCxLQUFLVSxVQUFMLEVBQWI7QUFDQSxRQUFJQyxTQUFTWCxLQUFLWSxVQUFMLEVBQWI7O0FBRUEsV0FBTyxDQUFDWCxJQUFELEVBQU9FLEtBQVAsRUFBY0UsR0FBZCxFQUFtQlEsR0FBbkIsQ0FBdUJDLFlBQXZCLEVBQXFDQyxJQUFyQyxDQUEwQyxHQUExQyxJQUFpRCxHQUFqRCxHQUF1RCxDQUFDUixJQUFELEVBQU9FLE1BQVAsRUFBZUUsTUFBZixFQUF1QkUsR0FBdkIsQ0FBMkJDLFlBQTNCLEVBQXlDQyxJQUF6QyxDQUE4QyxHQUE5QyxDQUE5RDtBQUNIOztBQUVELFNBQVNELFlBQVQsQ0FBdUJFLENBQXZCLEVBQTBCO0FBQ3RCQSxRQUFJQSxFQUFFQyxRQUFGLEVBQUo7QUFDQSxXQUFPRCxFQUFFLENBQUYsSUFBT0EsQ0FBUCxHQUFXLE1BQU1BLENBQXhCO0FBQ0g7O0FBRURFLE9BQU9DLE9BQVAsR0FBaUI7QUFDYnBCLGdCQUFZQTtBQURDLENBQWpCIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBmb3JtYXRUaW1lIChkYXRlKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG5cbiAgICB2YXIgaG91ciA9IGRhdGUuZ2V0SG91cnMoKVxuICAgIHZhciBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKVxuICAgIHZhciBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKVxuXG4gICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKCcvJykgKyAnICcgKyBbaG91ciwgbWludXRlLCBzZWNvbmRdLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJzonKVxufVxuXG5mdW5jdGlvbiBmb3JtYXROdW1iZXIgKG4pIHtcbiAgICBuID0gbi50b1N0cmluZygpXG4gICAgcmV0dXJuIG5bMV0gPyBuIDogJzAnICsgblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmb3JtYXRUaW1lOiBmb3JtYXRUaW1lXG59XG4iXX0=