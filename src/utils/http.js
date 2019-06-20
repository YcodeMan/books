import {fetch as fetchPolyfill} from 'whatwg-fetch'
import qs from 'qs'


const http = (method, url, data) => {
    if (method == 'get') {
        let str = ''
        for (let key in data) {
            str += ('&' + key + '=' + data[key])
        }
        url = (url + '?' + str.slice(1))
        return fetchPolyfill(url)
                .then(res => {
                    if (res.status != 200) {
                        console.log('请求错误' + res.msg);
                    }
                    return res.json()
                })
    } else {
        return fetchPolyfill(url, {
            method: 'post',
            body: qs.stringify(data)
        }).then(res => {
            if (res.status != 200) {
                console.log('请求错误' + res.msg);
            }
            return res.json()
        })
    }   
}
export default http