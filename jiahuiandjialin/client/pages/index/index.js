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
        top2: 0,
        top3: 0,
        img1sjs: 0,
        img2sjs: 0,
        img3sjs: 0,
        sjimg1:'sj1',
        sjimg2: 'sj1',
        sjimg3: 'sj1',
        sjimgarr:['sj1', 'sj2', 'sj3', 'sj4', 'sj5', 'sj6', 'sj7', 'sj8', 'sj9', 'sj10', 'sj11', 'sj12']
    },

    te1: function(){
      var top1 = this.data.top1;
      var sjimg1 = this.data.sjimg1;
      var sjimgarr = this.data.sjimgarr;
      var img1sjs = this.data.img1sjs = Math.round(Math.random() * 11);
      if (top1 == -1100){
        this.setData({ top1: 0 })
      }else{
        this.setData({ top1: -1100 }),
        this.setData({ sjimg1: sjimgarr[img1sjs] })
      }
  },
    te2: function () {
      var top2 = this.data.top2;
      var sjimg2 = this.data.sjimg2;
      var sjimgarr = this.data.sjimgarr;
      var img2sjs = this.data.img2sjs = Math.round(Math.random() * 11);
      if (top2 == -1100) {
        this.setData({ top2: 0 })
      } else {
        this.setData({ top2: -1100}),
        this.setData({ sjimg2: sjimgarr[img2sjs] })
      }
  },
    te3: function () {
      var top3 = this.data.top3;
      var sjimg3 = this.data.sjimg3;
      var sjimgarr = this.data.sjimgarr;
      var img3sjs = this.data.img3sjs = Math.round(Math.random() * 11);
      if (top3 == -1100) {
        this.setData({ top3: 0 })
      } else {
        this.setData({ top3: -1100 }),
        this.setData({ sjimg3: sjimgarr[img3sjs] })
      }
  },
    alltop: function(){
    var top1 = this.data.top1;
    var top2 = this.data.top2;
    var top3 = this.data.top3;
    var sjimg1 = this.data.sjimg1;
    var sjimg2 = this.data.sjimg2;
    var sjimg3 = this.data.sjimg3;
    var sjimgarr = this.data.sjimgarr;
    var img1sjs = this.data.img1sjs= Math.round(Math.random() * 11);
    var img2sjs = this.data.img2sjs = Math.round(Math.random() * 11);
    var img3sjs = this.data.img3sjs = Math.round(Math.random() * 11);
        this.setData({ top1: -1100 }),
        this.setData({ top2: -1100 }),
        this.setData({ top3: -1100 })
        if (top1 == -1100){
        this.setData({ sjimg1: sjimgarr[img1sjs] }),
        this.setData({ sjimg2: sjimgarr[img2sjs] }),
        this.setData({ sjimg3: sjimgarr[img3sjs] })
        }
  },
    allbtm: function () {
      this.setData({ top1: 0 }),
      this.setData({ top2: 0 }),
      this.setData({ top3: 0 })
  }
})
