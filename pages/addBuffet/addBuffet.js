// pages/Dining/Dining.js
const App = getApp()
const util = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isdaodian:false,
    isgoumai:false,
    isguizhe:false,
    date: '2018-10-01',
    show: false,
    isPickerRender: false,
    isPickerShow: false,
    startTime: "2019-01-01",
    endTime: "2019-12-01",
    pickerConfig: {
      endDate: true,
      column: "second",
      dateLimit: true,
      initStartTime: "",
      initEndTime: "",
      limitStartTime: "2015-05-06",
      limitEndTime: "2055-05-06",
      nowtime: "2055-05-06"
    },
    isspe: false,
    isshowsever: false,
    isshowseting: false,
    isshowbase: false,
    // area: '下单成功后三十分钟后可入住,直接消费,携带入住人有效身份证办理入住,必须一人一证,入住需要押金,金额请咨询前台',
    // place: '提前三个小时下单',
    // cancel: '到期前30分钟可取消,逾期或未使用,商家将全额扣除房费,不予退回',
    // check: '次日12:00之前退房,如需延迟请联系商家',
    // attention: '房型图片仅可代表其中部分房以作为预订参考,实际提供房型信息请以文字说明为准,如文字信息不全或包含多种情况,请提前与商家沟通确认后再下单',
    title: '', //标题值
    isShowTextTitle: false, //标题提示
    isShowTextPrice: false, //判断提是
    onlinePrice: '', //线上价格值
    price: '', //价格值
    img: []
    // img: ["http://tmp/wx00ded1265a87b055.o6zAJsxTvbRUnDRMkc5thQSe7CqU.ecLgRy7xIHuQbe4b71488449dd8074ce6b8bab7386ef.JPG"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

  },
  pickerShow: function () {
    this.setData({
      isPickerShow: true,
      isPickerRender: true,
      chartHide: true
    });
  },
  changeDate(e){
    this.setData({ date:e.detail.value});
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
  pickerHide: function () {
    this.setData({
      isPickerShow: false,
      chartHide: false
    });
  },

  bindPickerChange: function (e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    console.log(this.data.sensorList);

    this.getData(this.data.sensorList[e.detail.value].id);
    // let startDate = util.formatTime(new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 7));
    // let endDate = util.formatTime(new Date());
    this.setData({
      index: e.detail.value,
      sensorId: this.data.sensorList[e.detail.value].id
      // startDate,
      // endDate
    });
  },
  setPickerTime: function (val) {
    console.log(val);
    let data = val.detail;
    this.setData({
      startTime: data.startTime,
      endTime: data.endTime
    });
  },
  // 显示卡片
  daodoan(){
    var that = this;
    console.log(0)
    util.sel(this, App, 'slide_up1', "isshowbase")
    that.setData({
      isdaodian:!that.data.isdaodian
    });
  },
  goumai(){
    var that = this;
    console.log(0)
    util.sel(this, App, 'slide_up2', "isshowseting")
    that.setData({
      isgoumai:!that.data.isgoumai
    });
  },
  guizhe(){
    var that = this;
    console.log(0)
    util.sel(this, App, 'slide_up3', "isshowsever")
    that.setData({
      isguizhe:!that.data.isguizhe
    });
  },
  toUpImgs: function (e) {
    console.log(e)
    var that = this;
    this.setData({
      img: e.detail
    })
  },
  totitle: function (e) {
    console.log(e)
    var that = this;
    this.setData({
      title: e.detail
    })
  },
  toprice: function (e) {
    console.log(e)
    this.setData({
      onlinePrice: e.detail[0],
      price: e.detail[1],
    })
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