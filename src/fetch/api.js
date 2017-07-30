import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = ''

// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  // _.toast("错误的传参", 'fail')
  console.log('错误的传参', 'fail')
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (!res.data.success) {
    // _.toast(res.data.msg)
    console.log('api:success')
    return Promise.resolve(res)
  }
  return res
}, (error) => {
  // _.toast("网络异常", 'fail')
  return Promise.reject(error)
})

export function fetch (url, parmas) {
  return new Promise((resolve, reject) => {
    axios.post(url, parmas)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {

  // 微信登录
  Login (parmas) {
    return fetch('http://lewo.youledi.cn/user.php?func=login', parmas)
  },
  getOne (parmas) {
    return fetch('http://lewo.youledi.cn/user.php?func=get_yhj', parmas)
  },
  getTwo (parmas) {
    return fetch('http://lewo.youledi.cn/user.php?func=get_allyhj ', parmas)
  }
}

