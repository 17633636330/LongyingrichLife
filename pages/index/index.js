// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orcheck: false, //删除绑定值
    allcheck: false, //全选checked值
    arr: [{
        id: 1,
        title: '特价双床房',
        content: '无早餐20-25㎡2人入住 有窗fgsdgsdgsdfgsdgsdfgdfgsdfg',
        onlinePrice: 198,
        price: 230,
        checked: false,
        img: 'images/hoteal2.png',
        url: '../orderDetails/orderDetails'
      },
      {
        id: 2,
        title: '时尚双床房',
        content: '无早餐20-25㎡2人入住 有窗',
        onlinePrice: 198,
        price: 230,
        checked: false,
        img: 'images/hoteal1.png',
        url: '../orderDetails/orderDetails'
      },
      {
        id: 3,
        title: '特价双床房',
        content: '无早餐20-25㎡2人入住 有窗',
        onlinePrice: 198,
        price: 230,
        checked: false,
        img: 'images/hoteal1.png',
        url: '../orderDetails/orderDetails'
      },
      {
        id: 4,
        title: '特价双床房',
        content: '无早餐20-25㎡2人入住 有窗',
        onlinePrice: 198,
        price: 230,
        checked: false,
        img: 'images/hoteal1.png',
        url: '../orderDetails/orderDetails'
      },
      {
        id: 5,
        title: '特价双床房',
        content: '无早餐20-25㎡2人入住 有窗',
        onlinePrice: 198,
        price: 230,
        checked: false,
        img: 'images/hoteal1.png',
        url: '../orderDetails/orderDetails'
      },
      {
        id: 6,
        title: '特价双床房',
        content: '无早餐20-25㎡2人入住 有窗',
        onlinePrice: 198,
        price: 230,
        checked: false,
        img: 'images/hoteal1.png',
        url: '../orderDetails/orderDetails'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 精确两位
    var that = this;
    var arr = that.data.arr
    // for (var i in arr) {
    //   arr[i].price = Number(arr[i].price).toFixed(2)
    //   arr[i].onlinePrice = Number(arr[i].onlinePrice).toFixed(2)
    //   console.log(arr[i])
    // }
    that.setData({
      arr: arr
    })
  },
  // 全选
  check: function () {
    var that = this;
    var arr = that.data.arr;
    if (that.data.allcheck == false) { //判断全选
      for (var i in arr) {
        arr[i].checked = !that.data.allcheck;
        console.log(arr[i].checked)
      };
      that.setData({
        allcheck: !that.data.allcheck,
        arr: arr,
        orcheck: true
      })
    } else {
      for (var i in arr) {
        arr[i].checked = !that.data.allcheck;
        console.log(arr[i].checked)
      };
      that.setData({
        allcheck: !that.data.allcheck,
        arr: arr,
        orcheck: false
      })
    }
  },
  // 单选
  alonecheck: function (e) {
    var that = this;
    var arr = that.data.arr;
    console.log(e)
    if (e.detail.value != 0) { //根据事件对象判断
      that.setData({
        orcheck: true
      })
    } else {
      that.setData({
        orcheck: false
      })
    };
    if (e.detail.value.length == arr.length) {
      that.setData({
        allcheck: true
      })
    } else {
      that.setData({
        allcheck: false
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