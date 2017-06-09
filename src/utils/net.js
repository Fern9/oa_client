import wepy from 'wepy'
let net = {
    host: 'http://127.0.0.1:5000/api',
    request: (url, method, data, callback) => {
        wepy.request({
            url: net.host + url,
            method: method,
            data: data,
            success: (res) => {
                callback(res.data)
            }
        })
    },
    get: (url, data, callback) => {
        net.request(url, 'GET', data, callback)
    },
    post: (url, data, callback) => {
        net.request(url, 'POST', data, callback)
    }
}
module.exports = net
