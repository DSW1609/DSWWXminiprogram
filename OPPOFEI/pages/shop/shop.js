// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    NRs:[
      { name: "蔬菜" },
      { name: "水果" },
      { name: "蛋糕" },
      { name: "蛋糕" },
      { name: "蛋糕" },
      { name: "蛋糕" }
    ]
  },
  jl: function () {
    this.setData({
      NRs: [
        { name: "蔬菜2" },
        { name: "水果2" },
        { name: "蛋糕2" },
        { name: "蛋糕2" },
        { name: "蛋糕2" },
        { name: "蛋糕2" }
      ]
    })
  },
  jh: function () {
    this.setData({
      NRs: [
        { name: "蔬菜3" },
        { name: "水果3" },
        { name: "蛋糕3" },
        { name: "蛋糕3" },
        { name: "蛋糕3" },
        { name: "蛋糕3" }
      ]
    })
  },
  gl: function () {
    this.setData({
      NRs: [
        { name: "蔬菜4" },
        { name: "水果4" },
        { name: "蛋糕4" },
        { name: "蛋糕4" },
        { name: "蛋糕4" },
        { name: "蛋糕4" }
      ]
    })
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