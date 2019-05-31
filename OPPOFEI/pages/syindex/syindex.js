Page({

  /**
   * 页面的初始数据
   */
  data: {
    color:'cheng',
    yang:3299,
    renote:'6G+256G，VOOC3.0',
    goumai:'购买',
    suofang1:1.2,
    suofang2: 1,
    suofang3: 1,
    suofang4: 1
  },
  cheng: function () {
    var color = this.data.color;
    var renote = this.data.renote;
    var suofang1 = this.data.suofang1;
    var suofang2 = this.data.suofang2;
    var suofang3 = this.data.suofang3;
    var suofang4 = this.data.suofang4;
    var goumai = this.data.goumai;
    var yang = this.data.yang;
    this.setData({ color: 'cheng' }),
    this.setData({ yang: 3299 }),
    this.setData({ renote: '6G+256G，VOOC3.0' }),
    this.setData({suofang1:1.2}),
    this.setData({ suofang2: 1}),
    this.setData({ suofang3: 1 }),
    this.setData({ suofang4: 1 }),
    this.setData({goumai:'预约'})
  },
  linggan:function(){
    this.setData({color:'linggan'}),
    this.setData({renote:'6G + 256G，灵感版'}),
    this.setData({ suofang2: 1.2 }),
    this.setData({ suofang1: 1 }),
    this.setData({ suofang3: 1 }),
    this.setData({ suofang4: 1 }),
    this.setData({ goumai: '预约' })
    
  },
  lv: function () {
    this.setData({ color: 'lv' }),
    this.setData({ yang: 3599 }),
    this.setData({ renote: '8G + 256G，全景屏'}),
    this.setData({ suofang3: 1.2 }),
    this.setData({ suofang1: 1 }),
    this.setData({ suofang2: 1 }),
    this.setData({ suofang4: 1 }),
    this.setData({ goumai: '购买' })
  },
  zi: function () {
    this.setData({ color: 'zi' }),
    this.setData({ yang: 2999 }),
    this.setData({ renote: '6G + 128G，VOOC3.0' }),
    this.setData({ suofang4: 1.2 }),
    this.setData({ suofang1: 1 }),
    this.setData({ suofang2: 1 }),
    this.setData({ suofang3: 1 }),
    this.setData({ goumai: '购买' })
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