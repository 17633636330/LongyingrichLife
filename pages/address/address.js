// pages/address/address.js
import Notify from '../../miniprogram_npm/vant-weapp/dist/notify/notify';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '',
    userdoor: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options.add !== undefined) {
      this.setData({
        address: options.add
      })
    }
    if (options.addr !== undefined) {
      this.setData({
        address: options.addr
      })
    }
    if (options.addr2 !== undefined) {
      this.setData({
        userdoor: options.addr2
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  comfire: function () {
    console.log(this.data.userdoor)
    if (this.data.address == ''||this.data.userdoor=='') {
      Notify({
        type: 'danger',
        message: '地址完整',
        duration: 500,
      });
      return;
    }
    wx.navigateTo({
      url: '/pages/setting/setting?addr=' + this.data.address + '&addr2=' + this.data.userdoor,
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