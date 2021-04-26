// pages/shopName/shopName.js
import Notify from '../../miniprogram_npm/vant-weapp/dist/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopName: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if(options.shopName!==undefined){
      this.setData({
        shopName: options.shopName
      })
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  _comfires: function () {
    var that = this;
    if (that.data.shopName == '') {
      Notify({
        type: 'danger',
        message: '店名不能为空',
        duration: 500,
      });
      return;
    }
    console.log(`shopname` + that.data.shopName)
    wx.navigateTo({
      url: '/pages/setting/setting?shopName=' + that.data.shopName,
    })
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