// components/icon-1/icon-1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:String,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    click: function (e) {
      console.log(e)
      // this.triggerEvent("icre", { "index": 323 }, {})
      // triggerEvent 关键字用于将事件传递给页面
      // icer (可自定义) 页面通过 bind:icre 获取组件事件
      // { "index": 323 } 为组件事件携带的数据
    }
  }
})
