const wxRequest = require('./wxRequest'); 
const hostConfig = require('../config.js');

const instance = wxRequest.create({
  useMock: false,
  // useMock: true,
  baseURL: hostConfig.url,
  timeout: 30000,
  concurrency: 6,
})

// 实例2用于lock时发送请求
const instance2 = wxRequest.create({
  useMock: false,
  baseURL: hostConfig.url,
  timeout: 30000,
  concurrency: 6,
})

const requestInterceptorFunc = config => {
  const sendPage = getCurrentPages().pop()
  let sendPageUrl = ''
  if (sendPage) {
    sendPageUrl = sendPage.route
  }

  if (sendPage && sendPageUrl === config.route && config.loading && !config.subQueue) {
    wx.showLoading({
      content: '加载中...'
    })
  }
  return config
}
instance.interceptors.request.use(
  config => {
    // 预留，先判断token
    // 再走通用判断
    return requestInterceptorFunc(config)
  }
)
instance2.interceptors.request.use(
  requestInterceptorFunc
)

const responseInterceptorFunc = (response, config) => {
  if (config.loading && !config.subQueue) {
    wx.hideLoading()
  }
  if (response.code == '33333') { //token过期
    wx.removeStorageSync({
      key: 'AJHW_TOKEN',
    });
  }

  return response
}
const responseInterceptorErrFunc = (err, config) => {
  console.log(err)
  if (config) {
    if (config.loading && !config.subQueue) {
      wx.hideLoading()
    }
    if (!config.subQueue) {
      wx.showToast({
        type: 'fail',
        content: '服务器异常，请稍后再试'
      })
    }
  }
  return Promise.reject(err)
}
instance.interceptors.response.use(
  responseInterceptorFunc,
  responseInterceptorErrFunc,
)
instance2.interceptors.response.use(
  responseInterceptorFunc,
  responseInterceptorErrFunc,
)

const getInstance = {
  get(options) {
    options.method = 'GET'
    return getInstance.http(options)
  },
  post(options) {
    options.method = 'POST'
    return getInstance.http(options)
  },
  http(options) {
    const {
      useInstance2,
      ...others
    } = options
    if (options.useInstance2) {
      return instance2.http(others)
    } else {
      return instance.http(others)
    }
  },

}

module.exports = {
  // 全局变量-static图片路径
  imgUrl: '',
  hczImgBaseUrl: '',

  lock() {
    return instance.lock()
  },
  unlock() {
    return instance.unlock()
  },
  setToken(token) {
    return instance.setToken(token)
  },
  uploadFile(options) {
    return instance.uploadFile(options)
  },
  postCard(options) {
    return instance.postCard(options)
  },

  //获取token
  getToken(options) {
    return getInstance.http({
      url: '/xxx/getToken',
      method: 'get',
      ...options
    })
  }
}