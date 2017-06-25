import wepy from 'wepy'
function formatTime (date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

function judgeForm (form, require_list) {
    for (let key in form) {
        if (form[key] === '' && require_list.indexOf(key) != -1) {
            wepy.showModal({
                title: '提示',
                content: '还有必选项未填写',
                showCancel: false,
                confirmText: '继续填'
            })
            return 0
        }
    }
    return 1
}

module.exports = {
    formatTime: formatTime,
    judgeForm: judgeForm
}

