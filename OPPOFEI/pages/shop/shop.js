// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yc1: false,
    yc2: true,
    yc3: true
  },
  jl: function (e) {
    this.setData({
      yc1: !this.data.yc1
    })
  },
  jh: function (e) {
    this.setData({
      yc2: !this.data.yc2
    })
  },
  gl: function (e) {
    this.setData({
      yc3: !this.data.yc3
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