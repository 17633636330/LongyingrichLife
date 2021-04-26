// pages/setting/setting.js
import Notify from '../../miniprogram_npm/vant-weapp/dist/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: 17633636330,
    name: '卡兹太空旅店',
    addr: '杭州市富阳区文教路100弄',
    addr2: '22号3层304',
    else: '365天欢迎您',
    brgintime: '早8点--晚8点',
    sel: 12
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.shopName !== undefined) {
      this.setData({
        name: options.shopName,
      })
    };
    if (options.addr !== undefined) {
      this.setData({
        addr: options.addr,
      })
    };
    if (options.addr2 !== undefined) {
      this.setData({
        addr2: options.addr2,
      })
    };
    if (options.shopPhone !== undefined) {
      console.log(111)
      this.setData({
        phone: options.shopPhone,
      })
    };
    if (options.brgintime !== undefined) {
      this.setData({
        brgintime: options.brgintime,
      })
    };
    if (options.else !== undefined) {
      this.setData({
        else: options.else,
      })
    };

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 点名
  _shopName: function (e) {
    var that = this;
    console.log(that.data.name)
    wx.navigateTo({
      url: '/pages/shopName/shopName?shopName=' + that.data.name,
    })
  },
  // 联系方式
  _shopPhone: function (e) {
    var that = this;
    console.log(that.data.phone)
    wx.navigateTo({
      url: '/pages/shopPhone/shopPhone?shopPhone=' + that.data.phone,
    })
  },
  //营业时间
  _brgintime: function (e) {
    var that = this;
    console.log(that.data.brgintime)
    wx.navigateTo({
      url: '/pages/businessHours/businessHours?brgintime=' + that.data.brgintime,
    })
  },
  //其他
  _else: function (e) {
    var that = this;
    console.log(that.data.else)
    wx.navigateTo({
      url: '/pages/shopElse/shopElse?else=' + that.data.else,
    })
  },
  //地址
  _addr: function (e) {
    var that = this;
    console.log(that.data.else)
    wx.navigateTo({
      url: '/pages/address/address?addr=' + that.data.addr + '&addr2=' + this.data.addr2,
    })
  },
  confirm: function (e) {
    console.log(e.detail)
    clearTimeout(setTime);
    var setTime = setTimeout(() => {
      Notify({
        type: 'success',
        message: '通知内容'
      });
    }, 3000)
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