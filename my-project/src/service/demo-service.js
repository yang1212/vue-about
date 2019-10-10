import { get, post } from './common-service'

export function getList() {
    let url = 'http://yapi.igola.com/mock/65/trees/data'
    return new Promise((resolve, reject) => {
        get(url).then((res) => {
          resolve(res)
        }).catch((data) => {
            reject(data)
        })
    })
}