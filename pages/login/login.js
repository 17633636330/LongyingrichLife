// pages/login/login.js
import Dialog from '../../miniprogram_npm/vant-weapp/dist/dialog/dialog'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    sms: '',
    isPhone: false, //号码是否正确
    isSms: false, //验证码是否正确
    countdown: true, //倒计时
    count: 60, //60秒
    count2: 59, //60秒
    isabled:false,//是否禁止按钮
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getStorageSync('test'))
    if (wx.getStorageSync('test')) {
      wx.switchTab({
        url: '../index/index',
      })
    } else {
      Dialog.alert({
        message: '请先登录',
      }).then(() => {
        // on close
      });
    }

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

  //发送验证码
  send_sms: function () {
    var that = this;
    var reg = /^[1]([3-9])[0-9]{9}$/
    var isPhone = reg.test(that.data.phone)
    if (isPhone) {
      that.setData({
        phone: that.data.phone,
        isPhone: true
      })
      console.log(that.data.phone)
    } else {
      Dialog.alert({
        message: '手机号格式不正确',
      }).then(() => {
        // on close
      });
      that.setData({
        isPhone: false
      })
    }
    if (!that.data.isPhone) {
      Dialog.alert({
        message: '手机号格式不正确',
      }).then(() => {
        // on close
      });
    } else {
      console.log('验证码已经发送')
      that.setData({
        sms: that.data.sms,
        countdown: false,
        isabled:true
      });
      var setT = setInterval(() => {
        if (that.data.count2 >-1) {
          that.setData({
            count: that.data.count2--
          })
        }else{
          that.setData({
            count2:59,
            count:60,
            isabled:false,
            countdown: true
          })
          clearInterval(setT);
        }
      }, 1000)
    }
  },
  login: function () {
    var that = this;
    var reg = /[0-9]{6}/;
    console.log(that.data.sms)
    if (reg.test(that.data.sms)) {
      that.setData({
        isSms: true
      });
    } else {
      that.setData({
        isSms: false
      });
    }
    console.log(that.data.isPhone, that.data.isSms)
    if (that.data.isPhone && that.data.isSms) {
      Dialog.alert({
        message: '登录成功',
      }).then(() => {
        // on close
      });
      wx.setStorageSync('test', 123456)
      wx.switchTab({
        url: '../index/index',
      })
    } else {
      Dialog.alert({
        message: '请正确输入手机号和验证码',
      }).then(() => {
        // on close
      });
    }
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