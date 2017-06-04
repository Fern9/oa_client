"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = init;
exports.setTabbarData = setTabbarData;
// 保存通用的页面 this
var _page = void 0;
var _isPageInited = false;
var _dataForTabbar = void 0;

function init(params) {
    // 统一处理页面的数据，合并用户数据跟tabbar组件的数据

    var app = getApp();
    var data = params.data;

    // 默认的tabbar数据对象
    // 默认使用template目录下的img文件夹里的图标文件

    var defaultTabbarData = [{
        iCount: 1, //未读数目
        sIconUrl: Img("note"), //按钮图标
        sTitle: "note" //按钮名称
    }, {
        iCount: 98, //未读数目
        sIconUrl: Img("home"), //按钮图标
        sTitle: "home" //按钮名称
    }, {
        iCount: 0, //未读数目
        sIconUrl: Img("safari"), //按钮图标
        sTitle: "safari" //按钮名称
    }];

    // 页面的Data和Tabbar页面的Data合并成新的
    data.jhDataForTabbar = _dataForTabbar || defaultTabbarData;

    // 父级 生命周期函数重命名
    var _super = {
        onLoad: params.onLoad || empty,
        onReady: params.onReady || empty,
        onShow: params.onShow || empty,
        onHide: params.onHide || empty,
        onUnload: params.onUnload || empty,
        onPullDownRefresh: params.onPullDownRefresh || empty,
        onReachBottom: params.onReachBottom || empty
    };

    var initObject = {
        data: data,

        /**
          * 生命周期函数
        */
        onLoad: function onLoad() {
            // 调用用户定义的生命周期函数
            _super.onLoad.bind(this)();

            // 保存this到_page
            _page = this;
        },
        onReady: function onReady() {
            // 调用用户定义的生命周期函数
            _super.onReady.bind(this)();
        },
        onShow: function onShow() {
            // 调用用户定义的生命周期函数
            _super.onShow.bind(this)();
        },
        onHide: function onHide() {
            // 调用用户定义的生命周期函数
            _super.onHide.bind(this)();
        },
        onUnload: function onUnload() {
            // 调用用户定义的生命周期函数
            _super.onUnload.bind(this)();
        },
        onPullDownRefresh: function onPullDownRefresh() {
            // 调用用户定义的生命周期函数
            _super.onPullDownRefresh.bind(this)();
        },
        onReachBottom: function onReachBottom() {
            // 调用用户定义的生命周期函数
            _super.onReachBottom.bind(this)();
        },


        /**
          * 逻辑绑定
        */
        // 单击tab触发的函数
        onTabbarItemTap: function onTabbarItemTap(ev) {
            var key = ev.currentTarget.dataset.key;
            setCounts({
                key: key
            });
        }
    };

    for (var key in params) {
        // 如果initObject中没有同名的key，复制params的对象到initObject
        if (initObject[key] === undefined) {
            initObject[key] = params[key];
        }
    }

    Page(initObject);
    _isPageInited = true;

    // 空函数
    function empty() {}
}

function setTabbarData(obj) {

    // 页面还没 init时，把 obj 先存到 _dataForTabbar
    // else 通过page.setData更新
    if (_isPageInited === false) {
        _dataForTabbar = obj;
    } else {
        page.setData({
            jhDataForTabbar: obj
        });
    }

    return init;
}

/**
  * 辅助函数
*/
// 生成img文件的目录
function Img(filename, state) {
    var IMG_FILES_FOLDER = "../template/img/";
    var SUBFIX = ".png";

    if (state === undefined) {
        return [IMG_FILES_FOLDER, filename, SUBFIX].join("");
    } else {
        return [IMG_FILES_FOLDER, filename, "-", state, SUBFIX].join("");
    }
}

function setCounts(obj) {
    var key = obj.key;
    var jhDataForTabbar = _page.data.jhDataForTabbar;


    var data = jhDataForTabbar.map(function (item) {
        var iCount = item.iCount,
            sIconUrl = item.sIconUrl,
            sTitle = item.sTitle;


        if (sTitle === key) {
            ++iCount;
        }
        return {
            iCount: iCount,
            sIconUrl: sIconUrl,
            sTitle: sTitle
        };
    });

    _page.setData({
        jhDataForTabbar: data
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmJhci5qcyJdLCJuYW1lcyI6WyJpbml0Iiwic2V0VGFiYmFyRGF0YSIsIl9wYWdlIiwiX2lzUGFnZUluaXRlZCIsIl9kYXRhRm9yVGFiYmFyIiwicGFyYW1zIiwiYXBwIiwiZ2V0QXBwIiwiZGF0YSIsImRlZmF1bHRUYWJiYXJEYXRhIiwiaUNvdW50Iiwic0ljb25VcmwiLCJJbWciLCJzVGl0bGUiLCJqaERhdGFGb3JUYWJiYXIiLCJfc3VwZXIiLCJvbkxvYWQiLCJlbXB0eSIsIm9uUmVhZHkiLCJvblNob3ciLCJvbkhpZGUiLCJvblVubG9hZCIsIm9uUHVsbERvd25SZWZyZXNoIiwib25SZWFjaEJvdHRvbSIsImluaXRPYmplY3QiLCJiaW5kIiwib25UYWJiYXJJdGVtVGFwIiwiZXYiLCJrZXkiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInNldENvdW50cyIsInVuZGVmaW5lZCIsIlBhZ2UiLCJvYmoiLCJwYWdlIiwic2V0RGF0YSIsImZpbGVuYW1lIiwic3RhdGUiLCJJTUdfRklMRVNfRk9MREVSIiwiU1VCRklYIiwiam9pbiIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7O1FBS2dCQSxJLEdBQUFBLEk7UUErR0FDLGEsR0FBQUEsYTtBQXBIaEI7QUFDQSxJQUFJQyxjQUFKO0FBQ0EsSUFBSUMsZ0JBQWdCLEtBQXBCO0FBQ0EsSUFBSUMsdUJBQUo7O0FBRU8sU0FBU0osSUFBVCxDQUFlSyxNQUFmLEVBQXdCO0FBQzNCOztBQUVBLFFBQUlDLE1BQU1DLFFBQVY7QUFIMkIsUUFLdkJDLElBTHVCLEdBTXZCSCxNQU51QixDQUt2QkcsSUFMdUI7O0FBUTNCO0FBQ0E7O0FBQ0EsUUFBSUMsb0JBQW9CLENBQ3BCO0FBQ0lDLGdCQUFRLENBRFosRUFDZTtBQUNYQyxrQkFBVUMsSUFBSSxNQUFKLENBRmQsRUFFMkI7QUFDdkJDLGdCQUFRLE1BSFosQ0FHb0I7QUFIcEIsS0FEb0IsRUFNcEI7QUFDSUgsZ0JBQVEsRUFEWixFQUNnQjtBQUNaQyxr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LFNBQWQsRUFBeUI7QUFDckIsZUFBTyxDQUNITyxnQkFERyxFQUVIRixRQUZHLEVBR0hHLE1BSEcsRUFJTEMsSUFKSyxDQUlBLEVBSkEsQ0FBUDtBQUtILEtBTkQsTUFNTztBQUNILGVBQU8sQ0FDSEYsZ0JBREcsRUFFSEYsUUFGRyxFQUdILEdBSEcsRUFJSEMsS0FKRyxFQUtIRSxNQUxHLEVBTUxDLElBTkssQ0FNQSxFQU5BLENBQVA7QUFPSDtBQUNKOztBQUVELFNBQVNWLFNBQVQsQ0FBb0JHLEdBQXBCLEVBQTBCO0FBQUEsUUFFbEJOLEdBRmtCLEdBR2xCTSxHQUhrQixDQUVsQk4sR0FGa0I7QUFBQSxRQUtsQmQsZUFMa0IsR0FNbEJaLE1BQU1NLElBTlksQ0FLbEJNLGVBTGtCOzs7QUFRdEIsUUFBSU4sT0FBT00sZ0JBQWdCNEIsR0FBaEIsQ0FBb0IsVUFBQ0MsSUFBRCxFQUFVO0FBQUEsWUFFakNqQyxNQUZpQyxHQUtqQ2lDLElBTGlDLENBRWpDakMsTUFGaUM7QUFBQSxZQUdqQ0MsUUFIaUMsR0FLakNnQyxJQUxpQyxDQUdqQ2hDLFFBSGlDO0FBQUEsWUFJakNFLE1BSmlDLEdBS2pDOEIsSUFMaUMsQ0FJakM5QixNQUppQzs7O0FBT3JDLFlBQUlBLFdBQVdlLEdBQWYsRUFBb0I7QUFDaEIsY0FBRWxCLE1BQUY7QUFDSDtBQUNELGVBQU87QUFDSEEsMEJBREc7QUFFSEMsOEJBRkc7QUFHSEU7QUFIRyxTQUFQO0FBS0gsS0FmVSxDQUFYOztBQWlCQVgsVUFBTWtDLE9BQU4sQ0FBYztBQUNWdEIseUJBQWlCTjtBQURQLEtBQWQ7QUFHSCIsImZpbGUiOiJ0YWJiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDkv53lrZjpgJrnlKjnmoTpobXpnaIgdGhpc1xubGV0IF9wYWdlO1xubGV0IF9pc1BhZ2VJbml0ZWQgPSBmYWxzZTtcbmxldCBfZGF0YUZvclRhYmJhcjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoIHBhcmFtcyApIHtcbiAgICAvLyDnu5/kuIDlpITnkIbpobXpnaLnmoTmlbDmja7vvIzlkIjlubbnlKjmiLfmlbDmja7ot590YWJiYXLnu4Tku7bnmoTmlbDmja5cblxuICAgIGxldCBhcHAgPSBnZXRBcHAoKVxuICAgIGxldCB7XG4gICAgICAgIGRhdGFcbiAgICB9ID0gcGFyYW1zO1xuXG4gICAgLy8g6buY6K6k55qEdGFiYmFy5pWw5o2u5a+56LGhXG4gICAgLy8g6buY6K6k5L2/55SodGVtcGxhdGXnm67lvZXkuIvnmoRpbWfmlofku7blpLnph4znmoTlm77moIfmlofku7ZcbiAgICBsZXQgZGVmYXVsdFRhYmJhckRhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlDb3VudDogMSwgLy/mnKror7vmlbDnm65cbiAgICAgICAgICAgIHNJY29uVXJsOiBJbWcoXCJub3RlXCIpLCAvL+aMiemSruWbvuagh1xuICAgICAgICAgICAgc1RpdGxlOiBcIm5vdGVcIiwgLy/mjInpkq7lkI3np7BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaUNvdW50OiA5OCwgLy/mnKror7vmlbDnm65cbiAgICAgICAgICAgIHNJY29uVXJsOiBJbWcoXCJob21lXCIpLCAvL+aMiemSruWbvuagh1xuICAgICAgICAgICAgc1RpdGxlOiBcImhvbWVcIiwgLy/mjInpkq7lkI3np7BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaUNvdW50OiAwLCAvL+acquivu+aVsOebrlxuICAgICAgICAgICAgc0ljb25Vcmw6IEltZyhcInNhZmFyaVwiKSwgLy/mjInpkq7lm77moIdcbiAgICAgICAgICAgIHNUaXRsZTogXCJzYWZhcmlcIiwgLy/mjInpkq7lkI3np7BcbiAgICAgICAgfSxcbiAgICBdO1xuXG5cbiAgICAvLyDpobXpnaLnmoREYXRh5ZKMVGFiYmFy6aG16Z2i55qERGF0YeWQiOW5tuaIkOaWsOeahFxuICAgIGRhdGEuamhEYXRhRm9yVGFiYmFyID0gX2RhdGFGb3JUYWJiYXIgfHwgZGVmYXVsdFRhYmJhckRhdGE7XG5cbiAgICAvLyDniLbnuqcg55Sf5ZG95ZGo5pyf5Ye95pWw6YeN5ZG95ZCNXG4gICAgbGV0IF9zdXBlciA9ICB7XG4gICAgICAgIG9uTG9hZDogcGFyYW1zLm9uTG9hZCB8fCBlbXB0eSxcbiAgICAgICAgb25SZWFkeTogcGFyYW1zLm9uUmVhZHkgfHwgZW1wdHksXG4gICAgICAgIG9uU2hvdzogcGFyYW1zLm9uU2hvdyB8fCBlbXB0eSxcbiAgICAgICAgb25IaWRlOiBwYXJhbXMub25IaWRlIHx8IGVtcHR5LFxuICAgICAgICBvblVubG9hZDogcGFyYW1zLm9uVW5sb2FkIHx8IGVtcHR5LFxuICAgICAgICBvblB1bGxEb3duUmVmcmVzaDogcGFyYW1zLm9uUHVsbERvd25SZWZyZXNoIHx8IGVtcHR5LFxuICAgICAgICBvblJlYWNoQm90dG9tOiBwYXJhbXMub25SZWFjaEJvdHRvbSB8fCBlbXB0eVxuICAgIH1cblxuXG4gICAgbGV0IGluaXRPYmplY3QgPSB7XG4gICAgICAgIGRhdGEsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAgKiDnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICAgICAgKi9cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgLy8g6LCD55So55So5oi35a6a5LmJ55qE55Sf5ZG95ZGo5pyf5Ye95pWwXG4gICAgICAgICAgICBfc3VwZXIub25Mb2FkLmJpbmQodGhpcykoKTtcblxuICAgICAgICAgICAgLy8g5L+d5a2YdGhpc+WIsF9wYWdlXG4gICAgICAgICAgICBfcGFnZSA9IHRoaXNcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFkeSgpIHtcbiAgICAgICAgICAgIC8vIOiwg+eUqOeUqOaIt+WumuS5ieeahOeUn+WRveWRqOacn+WHveaVsFxuICAgICAgICAgICAgX3N1cGVyLm9uUmVhZHkuYmluZCh0aGlzKSgpO1xuICAgICAgICB9LFxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICAvLyDosIPnlKjnlKjmiLflrprkuYnnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICAgICAgICAgIF9zdXBlci5vblNob3cuYmluZCh0aGlzKSgpO1xuICAgICAgICB9LFxuICAgICAgICBvbkhpZGUoKSB7XG4gICAgICAgICAgICAvLyDosIPnlKjnlKjmiLflrprkuYnnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICAgICAgICAgIF9zdXBlci5vbkhpZGUuYmluZCh0aGlzKSgpO1xuICAgICAgICB9LFxuICAgICAgICBvblVubG9hZCgpIHtcbiAgICAgICAgICAgIC8vIOiwg+eUqOeUqOaIt+WumuS5ieeahOeUn+WRveWRqOacn+WHveaVsFxuICAgICAgICAgICAgX3N1cGVyLm9uVW5sb2FkLmJpbmQodGhpcykoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgICAgICAgICAvLyDosIPnlKjnlKjmiLflrprkuYnnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICAgICAgICAgIF9zdXBlci5vblB1bGxEb3duUmVmcmVzaC5iaW5kKHRoaXMpKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgICAgICAgICAvLyDosIPnlKjnlKjmiLflrprkuYnnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICAgICAgICAgIF9zdXBlci5vblJlYWNoQm90dG9tLmJpbmQodGhpcykoKTtcbiAgICAgICAgfSxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgICog6YC76L6R57uR5a6aXG4gICAgICAgICovXG4gICAgICAgIC8vIOWNleWHu3RhYuinpuWPkeeahOWHveaVsFxuICAgICAgICBvblRhYmJhckl0ZW1UYXAoZXYpIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSBldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQua2V5O1xuICAgICAgICAgICAgc2V0Q291bnRzKHtcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgIC8vIOWmguaenGluaXRPYmplY3TkuK3msqHmnInlkIzlkI3nmoRrZXnvvIzlpI3liLZwYXJhbXPnmoTlr7nosaHliLBpbml0T2JqZWN0XG4gICAgICAgIGlmIChpbml0T2JqZWN0WyBrZXkgXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpbml0T2JqZWN0WyBrZXkgXSA9IHBhcmFtc1sga2V5IF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBQYWdlKGluaXRPYmplY3QpO1xuICAgIF9pc1BhZ2VJbml0ZWQgPSB0cnVlO1xuXG5cblxuICAgIC8vIOepuuWHveaVsFxuICAgIGZ1bmN0aW9uIGVtcHR5KCkge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRhYmJhckRhdGEoIG9iaiApIHtcblxuICAgIC8vIOmhtemdoui/mOayoSBpbml05pe277yM5oqKIG9iaiDlhYjlrZjliLAgX2RhdGFGb3JUYWJiYXJcbiAgICAvLyBlbHNlIOmAmui/h3BhZ2Uuc2V0RGF0YeabtOaWsFxuICAgIGlmIChfaXNQYWdlSW5pdGVkID09PSBmYWxzZSkge1xuICAgICAgICBfZGF0YUZvclRhYmJhciA9IG9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYWdlLnNldERhdGEoe1xuICAgICAgICAgICAgamhEYXRhRm9yVGFiYmFyOiBvYmpcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXQ7XG59XG5cblxuXG5cbi8qKlxuICAqIOi+heWKqeWHveaVsFxuKi9cbi8vIOeUn+aIkGltZ+aWh+S7tueahOebruW9lVxuZnVuY3Rpb24gSW1nKGZpbGVuYW1lLCBzdGF0ZSkge1xuICAgIGNvbnN0IElNR19GSUxFU19GT0xERVIgPSBcIi4uL3RlbXBsYXRlL2ltZy9cIjtcbiAgICBjb25zdCBTVUJGSVggPSBcIi5wbmdcIjtcblxuICAgIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBJTUdfRklMRVNfRk9MREVSLFxuICAgICAgICAgICAgZmlsZW5hbWUsXG4gICAgICAgICAgICBTVUJGSVhcbiAgICAgICAgXS5qb2luKFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBJTUdfRklMRVNfRk9MREVSLFxuICAgICAgICAgICAgZmlsZW5hbWUsXG4gICAgICAgICAgICBcIi1cIixcbiAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgU1VCRklYXG4gICAgICAgIF0uam9pbihcIlwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldENvdW50cyggb2JqICkge1xuICAgIGxldCB7XG4gICAgICAgIGtleVxuICAgIH0gPSBvYmo7XG4gICAgbGV0IHtcbiAgICAgICAgamhEYXRhRm9yVGFiYmFyXG4gICAgfSA9IF9wYWdlLmRhdGE7XG5cbiAgICBsZXQgZGF0YSA9IGpoRGF0YUZvclRhYmJhci5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGlDb3VudCxcbiAgICAgICAgICAgIHNJY29uVXJsLFxuICAgICAgICAgICAgc1RpdGxlXG4gICAgICAgIH0gPSBpdGVtO1xuXG4gICAgICAgIGlmIChzVGl0bGUgPT09IGtleSkge1xuICAgICAgICAgICAgKytpQ291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlDb3VudCxcbiAgICAgICAgICAgIHNJY29uVXJsLFxuICAgICAgICAgICAgc1RpdGxlXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBfcGFnZS5zZXREYXRhKHtcbiAgICAgICAgamhEYXRhRm9yVGFiYmFyOiBkYXRhXG4gICAgfSlcbn1cbiJdfQ==