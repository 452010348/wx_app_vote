//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isRadio:true,//true==单选  false==多选
    items: [
      { name: '1', value: '技术部 没人50元 AA制' },
      { name: '2', value: '技术部经历请客 特劳大家.' },
      { name: '3', value: '公司财务出资' },
    ]
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    if( this.data.isRadio == true){
      console.log("当前为单选模式")
      if(e.detail.value.length == 0 ){

      }else{
        this.data.items.forEach((obj,i)=>{
          obj.checked = false;
        })
        var name = e.detail.value[e.detail.value.length-1];
        this.data.items.forEach((obj,i)=>{
          if(obj.name==name){
            obj.checked=true
          }
        },this)
      }

      this.setData({
        items: this.data.items
      })

      console.log("重新查看数据",this.data.items )

    }else{
      console.log('当前为多选模式')
      this.data.items.forEach((obj,i)=>{
        obj.checked = false;
        e.detail.value.forEach((item)=>{
          if(obj.name==item){
            this.data.items[i].checked = true;
          }
        },this)
      },this)
      this.setData({
        items:this.data.items
      })
    }
  },

  on_sumbit:function(e){
    console.log('提交')
    wx.showLoading({title: '加载中'})
    
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("投票展示")
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
