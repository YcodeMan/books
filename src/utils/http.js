import {fetch as fetchPolyfill} from 'whatwg-fetch'


export default http = (method, url, data) => {
    if (method == 'get') {
        let str = ''
        for (let key in data) {
            str = ('&' + key + '=' + data[key])
        }
        url = (url + '?' + str.slice(1))
        return fetchPolyfill(url)
                .then(res => {
                    if (res.status != 200) {
                        console.log('错误信息' + res.msg);
                    }
                    return res.json()
                })
    } else {
        return fetchPolyfill(url, {
            method: 'post',
            body: JSON.stringify(data)
        }).then(res => {
            if (res.status != 200) {
                console.log('错误信息' + res.msg);
            }
            return res.json()
        })
    }   
}