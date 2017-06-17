import wepy from 'wepy'
let net = {
    host: 'http://127.0.0.1:5000/api',
    request: (url, method, data, callback) => {
        let cookie = wepy.getStorageSync('cookies')
        if (!cookie) cookie = ''
        wepy.request({
            url: net.host + url,
            method: method,
            data: data,
            header: {
                'cookie': cookie
            },
            success: (res) => {
                console.log('statusCode:', res.statusCode, 'header:', res.header)
                let cookies = res.header['Set-Cookie']
                console.log(cookies)
                if (cookies && cookies.length > 0) {
                    wepy.setStorageSync('cookies', cookies)
                }

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
