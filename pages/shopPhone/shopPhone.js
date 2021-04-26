// pages/shopPhone/shopPhone.js
import Notify from '../../miniprogram_npm/vant-weapp/dist/notify/notify';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopPhone: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.shopPhone !== undefined) {
      this.setData({
        shopPhone: options.shopPhone
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  _comfires: function () {
    var that = this;
    var reg = /^((\+|00)86)?((134\d{4})|((13[0-3|5-9]|14[1|5-9]|15[0-9]|16[2|5|6|7]|17[0-8]|18[0-9]|19[0-2|5-9])\d{8}))$/
    if (!reg.test(that.data.shopPhone)) {
      Notify({
        type: 'danger',
        message: '手机号码格式不正确',
        duration: 500,
      });
      return;
    }
    console.log(`shopname` + that.data.shopName)
    wx.navigateTo({
      url: '/pages/setting/setting?shopPhone=' + that.data.shopPhone,
    })
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