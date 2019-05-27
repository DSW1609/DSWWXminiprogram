//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
        userInfo: {},
        logged: false,
        takeSession: false,
        top1: 0,
        left1:0,
        left1sj:0,

        top2: 0,
        left2: 235,
        left2sj: 0,

        top3: 0,
        left3: 470,
        left3sj: 0
    },

    te1: function(){
      var that = this;
      var top1 = this.data.top1;
      var left1 = this.data.left1;
      var left1sj = this.data.leftsj;
      left1sj = Math.random() * 750;
      if (top1 == -1100){
        this.setData({ top1: 0 }),
        this.setData({ left1: 0})
      }else{
        this.setData({ top1: '-1100' }),
        this.setData({ left1: left1sj })
      }
  },
    te2: function () {
      var that = this;
      var top2 = this.data.top2;
      var left2 = this.data.left2;
      var left2sj = this.data.left2sj;
      left2sj = Math.random() * 750;
      if (top2 == -1100) {
        this.setData({ top2: 0 }),
        this.setData({ left2: 235 })
      } else {
        this.setData({ top2: -1100}),
        this.setData({ left2: left2sj })
      }
  },
    te3: function () {
      var that = this;
      var top3 = this.data.top3;
      var left3 = this.data.left3;
      var left3sj = this.data.left3sj;
      left3sj = Math.random() * 550;
      if (top3 == -1100) {
        this.setData({ top3: 0 }),
        this.setData({ left3: 470 })
      } else {
        this.setData({ top3: -1100 }),
        this.setData({ left3: left3sj })
      }
  }
})
