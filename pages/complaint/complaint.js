// pages/complaint/complaint.js
import Toast from '../../miniprogram_npm/vant-weapp/dist/toast/toast.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: []
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
  toUpImgs: function (e) {
    console.log(e)
    var that = this;
    this.setData({
      img: e.detail
    })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  up: function () {
    Toast({
      type: 'success',
      message: '提交成功,1~2个工作日内回收到客服反馈',
      onClose: () => {
        console.log('执行OnClose函数');
      },
    });
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