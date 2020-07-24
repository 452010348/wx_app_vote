//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    activity_type:0,
    activity_title:"",
    activity_desc:""
  },
  bind_input_activity_title:function(e){
    console.log("activity_title",e.detail.value)
    this.setData({
      activity_title: e.detail.value
    })
  },
  bind_input_activity_desc:function(e){
    console.log("activity_desc",e.detail.value)
    this.setData({
      activity_desc: e.detail.value
    })
  },
  on_submit:function(){
    console.log("点击提交")
    wx.showLoading({title: '加载中'})
    
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("意见箱创建")
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
