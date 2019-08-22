//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
Page({
    data: {
        userInfo: {},
        logged: false,
        takeSession: false,
    },
    item1:function(){
      wx.navigateTo({
        url: '../item1/item1'
      })
    },
  item2: function () {
    wx.navigateTo({
      url: '../item2/item2'
    })
  },
  item3: function () {
    wx.navigateTo({
      url: '../item3/item3'
    })
  },
  item4: function () {
    wx.navigateTo({
      url: '../item4/item4'
    })
  },
})
