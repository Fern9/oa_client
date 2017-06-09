'use strict';

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
        iCount: 1, // 未读数目
        sIconUrl: Img('note'), // 按钮图标
        sTitle: 'note' // 按钮名称
    }, {
        iCount: 98, // 未读数目
        sIconUrl: Img('home'), // 按钮图标
        sTitle: 'home' // 按钮名称
    }, {
        iCount: 0, // 未读数目
        sIconUrl: Img('safari'), // 按钮图标
        sTitle: 'safari' // 按钮名称
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
            _super.onLoad.bind(this)

            // 保存this到_page
            ();_page = this;
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
    var IMG_FILES_FOLDER = '../template/img/';
    var SUBFIX = '.png';

    if (state === undefined) {
        return [IMG_FILES_FOLDER, filename, SUBFIX].join('');
    } else {
        return [IMG_FILES_FOLDER, filename, '-', state, SUBFIX].join('');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmJhci5qcyJdLCJuYW1lcyI6WyJpbml0Iiwic2V0VGFiYmFyRGF0YSIsIl9wYWdlIiwiX2lzUGFnZUluaXRlZCIsIl9kYXRhRm9yVGFiYmFyIiwicGFyYW1zIiwiYXBwIiwiZ2V0QXBwIiwiZGF0YSIsImRlZmF1bHRUYWJiYXJEYXRhIiwiaUNvdW50Iiwic0ljb25VcmwiLCJJbWciLCJzVGl0bGUiLCJqaERhdGFGb3JUYWJiYXIiLCJfc3VwZXIiLCJvbkxvYWQiLCJlbXB0eSIsIm9uUmVhZHkiLCJvblNob3ciLCJvbkhpZGUiLCJvblVubG9hZCIsIm9uUHVsbERvd25SZWZyZXNoIiwib25SZWFjaEJvdHRvbSIsImluaXRPYmplY3QiLCJiaW5kIiwib25UYWJiYXJJdGVtVGFwIiwiZXYiLCJrZXkiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInNldENvdW50cyIsInVuZGVmaW5lZCIsIlBhZ2UiLCJvYmoiLCJwYWdlIiwic2V0RGF0YSIsImZpbGVuYW1lIiwic3RhdGUiLCJJTUdfRklMRVNfRk9MREVSIiwiU1VCRklYIiwiam9pbiIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7O1FBS2dCQSxJLEdBQUFBLEk7UUErR0FDLGEsR0FBQUEsYTtBQXBIaEI7QUFDQSxJQUFJQyxjQUFKO0FBQ0EsSUFBSUMsZ0JBQWdCLEtBQXBCO0FBQ0EsSUFBSUMsdUJBQUo7O0FBRU8sU0FBU0osSUFBVCxDQUFjSyxNQUFkLEVBQXNCO0FBQ3pCOztBQUVBLFFBQUlDLE1BQU1DLFFBQVY7QUFIeUIsUUFLckJDLElBTHFCLEdBTXJCSCxNQU5xQixDQUtyQkcsSUFMcUI7O0FBUXpCO0FBQ0E7O0FBQ0EsUUFBSUMsb0JBQW9CLENBQ3BCO0FBQ0lDLGdCQUFRLENBRFosRUFDZTtBQUNYQyxrQkFBVUMsSUFBSSxNQUFKLENBRmQsRUFFMkI7QUFDdkJDLGdCQUFRLE1BSFosQ0FHbUI7QUFIbkIsS0FEb0IsRUFNcEI7QUFDSUgsZ0JBQVEsRUFEWixFQUNnQjtBQUNaQyxr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LFVBQVVOLFNBQWQsRUFBeUI7QUFDckIsZUFBTyxDQUNITyxnQkFERyxFQUVIRixRQUZHLEVBR0hHLE1BSEcsRUFJTEMsSUFKSyxDQUlBLEVBSkEsQ0FBUDtBQUtILEtBTkQsTUFNTztBQUNILGVBQU8sQ0FDSEYsZ0JBREcsRUFFSEYsUUFGRyxFQUdILEdBSEcsRUFJSEMsS0FKRyxFQUtIRSxNQUxHLEVBTUxDLElBTkssQ0FNQSxFQU5BLENBQVA7QUFPSDtBQUNKOztBQUVELFNBQVNWLFNBQVQsQ0FBbUJHLEdBQW5CLEVBQXdCO0FBQUEsUUFFaEJOLEdBRmdCLEdBR2hCTSxHQUhnQixDQUVoQk4sR0FGZ0I7QUFBQSxRQUtoQmQsZUFMZ0IsR0FNaEJaLE1BQU1NLElBTlUsQ0FLaEJNLGVBTGdCOzs7QUFRcEIsUUFBSU4sT0FBT00sZ0JBQWdCNEIsR0FBaEIsQ0FBb0IsVUFBQ0MsSUFBRCxFQUFVO0FBQUEsWUFFakNqQyxNQUZpQyxHQUtqQ2lDLElBTGlDLENBRWpDakMsTUFGaUM7QUFBQSxZQUdqQ0MsUUFIaUMsR0FLakNnQyxJQUxpQyxDQUdqQ2hDLFFBSGlDO0FBQUEsWUFJakNFLE1BSmlDLEdBS2pDOEIsSUFMaUMsQ0FJakM5QixNQUppQzs7O0FBT3JDLFlBQUlBLFdBQVdlLEdBQWYsRUFBb0I7QUFDaEIsY0FBRWxCLE1BQUY7QUFDSDtBQUNELGVBQU87QUFDSEEsMEJBREc7QUFFSEMsOEJBRkc7QUFHSEU7QUFIRyxTQUFQO0FBS0gsS0FmVSxDQUFYOztBQWlCQVgsVUFBTWtDLE9BQU4sQ0FBYztBQUNWdEIseUJBQWlCTjtBQURQLEtBQWQ7QUFHSCIsImZpbGUiOiJ0YWJiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDkv53lrZjpgJrnlKjnmoTpobXpnaIgdGhpc1xubGV0IF9wYWdlXG5sZXQgX2lzUGFnZUluaXRlZCA9IGZhbHNlXG5sZXQgX2RhdGFGb3JUYWJiYXJcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQocGFyYW1zKSB7XG4gICAgLy8g57uf5LiA5aSE55CG6aG16Z2i55qE5pWw5o2u77yM5ZCI5bm255So5oi35pWw5o2u6LefdGFiYmFy57uE5Lu255qE5pWw5o2uXG5cbiAgICBsZXQgYXBwID0gZ2V0QXBwKClcbiAgICBsZXQge1xuICAgICAgICBkYXRhXG4gICAgfSA9IHBhcmFtc1xuXG4gICAgLy8g6buY6K6k55qEdGFiYmFy5pWw5o2u5a+56LGhXG4gICAgLy8g6buY6K6k5L2/55SodGVtcGxhdGXnm67lvZXkuIvnmoRpbWfmlofku7blpLnph4znmoTlm77moIfmlofku7ZcbiAgICBsZXQgZGVmYXVsdFRhYmJhckRhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlDb3VudDogMSwgLy8g5pyq6K+75pWw55uuXG4gICAgICAgICAgICBzSWNvblVybDogSW1nKCdub3RlJyksIC8vIOaMiemSruWbvuagh1xuICAgICAgICAgICAgc1RpdGxlOiAnbm90ZScgLy8g5oyJ6ZKu5ZCN56ewXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlDb3VudDogOTgsIC8vIOacquivu+aVsOebrlxuICAgICAgICAgICAgc0ljb25Vcmw6IEltZygnaG9tZScpLCAvLyDmjInpkq7lm77moIdcbiAgICAgICAgICAgIHNUaXRsZTogJ2hvbWUnIC8vIOaMiemSruWQjeensFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpQ291bnQ6IDAsIC8vIOacquivu+aVsOebrlxuICAgICAgICAgICAgc0ljb25Vcmw6IEltZygnc2FmYXJpJyksIC8vIOaMiemSruWbvuagh1xuICAgICAgICAgICAgc1RpdGxlOiAnc2FmYXJpJyAvLyDmjInpkq7lkI3np7BcbiAgICAgICAgfVxuICAgIF1cblxuXG4gICAgLy8g6aG16Z2i55qERGF0YeWSjFRhYmJhcumhtemdoueahERhdGHlkIjlubbmiJDmlrDnmoRcbiAgICBkYXRhLmpoRGF0YUZvclRhYmJhciA9IF9kYXRhRm9yVGFiYmFyIHx8IGRlZmF1bHRUYWJiYXJEYXRhXG5cbiAgICAvLyDniLbnuqcg55Sf5ZG95ZGo5pyf5Ye95pWw6YeN5ZG95ZCNXG4gICAgbGV0IF9zdXBlciA9IHtcbiAgICAgICAgb25Mb2FkOiBwYXJhbXMub25Mb2FkIHx8IGVtcHR5LFxuICAgICAgICBvblJlYWR5OiBwYXJhbXMub25SZWFkeSB8fCBlbXB0eSxcbiAgICAgICAgb25TaG93OiBwYXJhbXMub25TaG93IHx8IGVtcHR5LFxuICAgICAgICBvbkhpZGU6IHBhcmFtcy5vbkhpZGUgfHwgZW1wdHksXG4gICAgICAgIG9uVW5sb2FkOiBwYXJhbXMub25VbmxvYWQgfHwgZW1wdHksXG4gICAgICAgIG9uUHVsbERvd25SZWZyZXNoOiBwYXJhbXMub25QdWxsRG93blJlZnJlc2ggfHwgZW1wdHksXG4gICAgICAgIG9uUmVhY2hCb3R0b206IHBhcmFtcy5vblJlYWNoQm90dG9tIHx8IGVtcHR5XG4gICAgfVxuXG5cbiAgICBsZXQgaW5pdE9iamVjdCA9IHtcbiAgICAgICAgZGF0YSxcblxuICAgICAgICAvKipcbiAgICAgICAgICAqIOeUn+WRveWRqOacn+WHveaVsFxuICAgICAgICAqL1xuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICAvLyDosIPnlKjnlKjmiLflrprkuYnnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICAgICAgICAgIF9zdXBlci5vbkxvYWQuYmluZCh0aGlzKSgpXG5cbiAgICAgICAgICAgIC8vIOS/neWtmHRoaXPliLBfcGFnZVxuICAgICAgICAgICAgX3BhZ2UgPSB0aGlzXG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVhZHkoKSB7XG4gICAgICAgICAgICAvLyDosIPnlKjnlKjmiLflrprkuYnnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICAgICAgICAgIF9zdXBlci5vblJlYWR5LmJpbmQodGhpcykoKVxuICAgICAgICB9LFxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICAvLyDosIPnlKjnlKjmiLflrprkuYnnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICAgICAgICAgIF9zdXBlci5vblNob3cuYmluZCh0aGlzKSgpXG4gICAgICAgIH0sXG4gICAgICAgIG9uSGlkZSgpIHtcbiAgICAgICAgICAgIC8vIOiwg+eUqOeUqOaIt+WumuS5ieeahOeUn+WRveWRqOacn+WHveaVsFxuICAgICAgICAgICAgX3N1cGVyLm9uSGlkZS5iaW5kKHRoaXMpKClcbiAgICAgICAgfSxcbiAgICAgICAgb25VbmxvYWQoKSB7XG4gICAgICAgICAgICAvLyDosIPnlKjnlKjmiLflrprkuYnnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICAgICAgICAgIF9zdXBlci5vblVubG9hZC5iaW5kKHRoaXMpKClcbiAgICAgICAgfSxcbiAgICAgICAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgICAgICAgICAvLyDosIPnlKjnlKjmiLflrprkuYnnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICAgICAgICAgIF9zdXBlci5vblB1bGxEb3duUmVmcmVzaC5iaW5kKHRoaXMpKClcbiAgICAgICAgfSxcbiAgICAgICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgICAgICAgIC8vIOiwg+eUqOeUqOaIt+WumuS5ieeahOeUn+WRveWRqOacn+WHveaVsFxuICAgICAgICAgICAgX3N1cGVyLm9uUmVhY2hCb3R0b20uYmluZCh0aGlzKSgpXG4gICAgICAgIH0sXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICAqIOmAu+i+kee7keWumlxuICAgICAgICAqL1xuICAgICAgICAvLyDljZXlh7t0YWLop6blj5HnmoTlh73mlbBcbiAgICAgICAgb25UYWJiYXJJdGVtVGFwKGV2KSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LmtleVxuICAgICAgICAgICAgc2V0Q291bnRzKHtcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgIC8vIOWmguaenGluaXRPYmplY3TkuK3msqHmnInlkIzlkI3nmoRrZXnvvIzlpI3liLZwYXJhbXPnmoTlr7nosaHliLBpbml0T2JqZWN0XG4gICAgICAgIGlmIChpbml0T2JqZWN0WyBrZXkgXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpbml0T2JqZWN0WyBrZXkgXSA9IHBhcmFtc1sga2V5IF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFBhZ2UoaW5pdE9iamVjdClcbiAgICBfaXNQYWdlSW5pdGVkID0gdHJ1ZVxuXG5cblxuICAgIC8vIOepuuWHveaVsFxuICAgIGZ1bmN0aW9uIGVtcHR5KCkge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRhYmJhckRhdGEob2JqKSB7XG4gICAgLy8g6aG16Z2i6L+Y5rKhIGluaXTml7bvvIzmioogb2JqIOWFiOWtmOWIsCBfZGF0YUZvclRhYmJhclxuICAgIC8vIGVsc2Ug6YCa6L+HcGFnZS5zZXREYXRh5pu05pawXG4gICAgaWYgKF9pc1BhZ2VJbml0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIF9kYXRhRm9yVGFiYmFyID0gb2JqXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFnZS5zZXREYXRhKHtcbiAgICAgICAgICAgIGpoRGF0YUZvclRhYmJhcjogb2JqXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRcbn1cblxuXG5cblxuLyoqXG4gICog6L6F5Yqp5Ye95pWwXG4qL1xuLy8g55Sf5oiQaW1n5paH5Lu255qE55uu5b2VXG5mdW5jdGlvbiBJbWcoZmlsZW5hbWUsIHN0YXRlKSB7XG4gICAgY29uc3QgSU1HX0ZJTEVTX0ZPTERFUiA9ICcuLi90ZW1wbGF0ZS9pbWcvJ1xuICAgIGNvbnN0IFNVQkZJWCA9ICcucG5nJ1xuXG4gICAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIElNR19GSUxFU19GT0xERVIsXG4gICAgICAgICAgICBmaWxlbmFtZSxcbiAgICAgICAgICAgIFNVQkZJWFxuICAgICAgICBdLmpvaW4oJycpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIElNR19GSUxFU19GT0xERVIsXG4gICAgICAgICAgICBmaWxlbmFtZSxcbiAgICAgICAgICAgICctJyxcbiAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgU1VCRklYXG4gICAgICAgIF0uam9pbignJylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldENvdW50cyhvYmopIHtcbiAgICBsZXQge1xuICAgICAgICBrZXlcbiAgICB9ID0gb2JqXG4gICAgbGV0IHtcbiAgICAgICAgamhEYXRhRm9yVGFiYmFyXG4gICAgfSA9IF9wYWdlLmRhdGFcblxuICAgIGxldCBkYXRhID0gamhEYXRhRm9yVGFiYmFyLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgaUNvdW50LFxuICAgICAgICAgICAgc0ljb25VcmwsXG4gICAgICAgICAgICBzVGl0bGVcbiAgICAgICAgfSA9IGl0ZW1cblxuICAgICAgICBpZiAoc1RpdGxlID09PSBrZXkpIHtcbiAgICAgICAgICAgICsraUNvdW50XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlDb3VudCxcbiAgICAgICAgICAgIHNJY29uVXJsLFxuICAgICAgICAgICAgc1RpdGxlXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgX3BhZ2Uuc2V0RGF0YSh7XG4gICAgICAgIGpoRGF0YUZvclRhYmJhcjogZGF0YVxuICAgIH0pXG59XG4iXX0=