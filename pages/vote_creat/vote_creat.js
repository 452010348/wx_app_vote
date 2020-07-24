//index.js
//获取应用实例
const app = getApp()

import utils from "../../utils/util.js";

Page({
  data: {


    //`activity_id` varchar(128) NOT NULL DEFAULT '' COMMENT '活动记录id 活动记录id, 开头1-投票',
    vote_title:"", //'投票标题'
    vote_type:0, //'投票类型 0-单选 1-多选',

    vote_selection_text:"",// 投票选项
    vote_selection:[],   //text NOT NUL '投票内容，json格式 , 1 2 3 4 5 6 7 8 标识选项,  选项统计写到redis中

    start_time: utils.parseTime(Date.now()), // "2020-7-13 21:23:00"
    end_time:utils.parseTime(new Date(new Date().toLocaleDateString()).getTime() + 3600 * 1000 * 24-1),  //"2020-7-13 23:59:59"

    array3: ['每人每天1次', '每人每天2次', '每人每天3次','每人每天4次'],//日投内容
    value3: 0,//日投票次数 索引
    vote_num:1,//多选投票数
  },
  bindKeyInput_vote_title:function(e){
    console.log("投票标题", e.detail.value)
    this.setData({
      vote_title: e.detail.value
    })
  },
  bindKeyInput_vote_selection_text:function(e){
    console.log("投票选项", e.detail.value)
    this.setData({
      vote_selection_text: e.detail.value
    })
  },
  bindtap_add_vote_selection:function(e){
    var value = this.data.vote_selection_text;
    if(value==""){
      console.log('不能为空！');
      wx.showToast({
        title: '不能为空！',
        icon: 'error',
        duration: 2000
      })
      return;
    }else{
      console.log('点击添加');
      this.data.vote_selection.push(value)
      this.setData({
        vote_selection:this.data.vote_selection,
        vote_selection_text:""
      })
    }
  },
  bindtap_vote_selection_close:function(e){
    var i = e.target.dataset.i;
    console.log('点击删除投票选项', i)
    this.data.vote_selection.splice(i,1);
    this.setData({
      vote_selection:this.data.vote_selection,
    })
  },
  radioChange:function(e){
    console.log("单选多选", e.detail.value)
    this.setData({
        vote_type: e.detail.value
    })
  },

  bindPicker3Change: function(e) {
    console.log("日头次数", e.detail.value)
    console.log( this.array3[e.detail.value] );
    this.setData({
        value3: e.detail.value
    })
  },
  bind_start_time: function(e) {
    console.log( "start_time",e.detail.dateString )
    this.setData({
      start_time: e.detail.dateString
    })
  },
  bind_end_time: function(e) {
    console.log( "end_time", e.detail.dateString )
    this.setData({
      end_time: e.detail.dateString
    })
  },
  bindinput_vote_num:function(e){
    console.log("输入多选投票数量", e.detail.value)
    this.setData({
      vote_num:e.detail.value
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
    console.log("投票创建")
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
