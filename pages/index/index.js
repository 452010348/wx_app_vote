//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },

  onTo: function (e) {
    var url = e.currentTarget.dataset.url;
    console.log("111", url, e);
    // //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
    // wx.navigateTo({     url: "/pages/aaa/aaa"})

    // //关闭当前页面，跳转到应用内的某个页面（这个跳转有个坑，就是跳转页面后页面会闪烁一下，完全影响了我自己的操作体验，太缺德了。）
    wx.redirectTo({    url: "/pages/idea_list/idea_list"})

    // //跳转至指定页面并关闭其他打开的所有页面（这个最好用在返回至首页的的时候）
    // wx.reLaunch({ url: '/pages/index/index'})

    //跳转到tabBar页面，并关闭其他所有tabBar页面
    // wx.switchTab({ url: "/pages/idea_list/idea_list" })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
