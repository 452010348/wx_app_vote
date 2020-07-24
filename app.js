//app.js
import api from './apis/Api.js'
// import wxRequest from './apis/wxRequest.js'
App({
  onLaunch: function () {
     Promise.all([
      // api.getToken().then(res=>{
      //   console.log(res)
      // }).catch(err=>{
      //   console.log('失败')
      //   console.log(err)
      // })

      ])
      .then(() => {
        // 响应之后，执行解锁
         api.unlock()
      })
      .catch(() => {
         api.unlock()
      })
    // 前置请求入队，立即执行锁定
    api.lock()
  },
  globalData: {
    userInfo: null
  }
})