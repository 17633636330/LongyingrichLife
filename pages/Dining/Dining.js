// pages/Dining/Dining.js
const App = getApp()
const util = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area: '下单:下单成功后三十分钟后可入住,直接消费,携带入住人有效身份证办理入住,必须一人一证,入住需要押金,金额请咨询前台',
    place: '',
    cancel: '取消订单:到期前30分钟可取消,逾期或未使用,商家将全额扣除房费,不予退回',
    check: '退房:次日12:00之前退房,如需延迟请联系商家',
    attention: '注意事项:房型图片仅可代表其中部分房以作为预订参考,实际提供房型信息请以文字说明为准,如文字信息不全或包含多种情况,请提前与商家沟通确认后再下单',
    title: '', //标题值
    isShowTextTitle: false, //标题提示
    isShowTextPrice: false, //判断提是
    onlinePrice: '', //线上价格值
    price: '', //价格值
    img: [],
    isbase: false, //基础信息
    isset: false, //设施配置
    issev: false, //服务,
    isspe: false,
    //基础信息
    base: {
      bed: '', //床规格
      dd: '', // 面积
      floor: '', //楼层
      peopleNum: '', // 最多可住人数
      baseCheck: [{
          name: '窗',
          checked: false,
          value: 1
        },
        {
          name: 'wifi',
          checked: false,
          value: 1
        },
        {
          name: '宽度',
          checked: false,
          value: 1
        },
        {
          name: '空调',
          checked: false,
          value: 1
        },
        {
          name: '抽烟',
          checked: false,
          value: 1
        },
        {
          name: '早餐',
          checked: false,
          value: 0
        },
      ]


    },
    // 实施配置
    EMC: {
      EMCcheck: [{
          name: '独立卫生间',
          checked: false,
          value: 0
        },
        {
          name: '电热水器',
          checked: false,
          value: 0
        },
        {
          name: '淋浴',
          checked: false,
          value: 0
        },
        {
          name: '免费饮品',
          checked: false,
          value: 0
        },
        {
          name: '浴池',
          checked: false,
          value: 0
        },
        {
          name: '免费零食',
          checked: false,
          value: 0
        },
        {
          name: '可加床',
          checked: false,
          value: 0
        },
        {
          name: '沐浴用品',
          checked: false,
          value: 0
        },
        {
          name: '洗漱用品',
          checked: false,
          value: 0
        },
        {
          name: '免费停车场',
          checked: false,
          value: 0
        }
      ],
      EMCelse: ''
    },
    // 服务
    sever: {
      severseverCheck: [{
          name: '发票',
          checked: false,
          value: 0
        },
        {
          name: '送餐',
          checked: false,
          value: 0
        },
        {
          name: '保洁',
          checked: false,
          value: 0
        }
      ],
      severelse: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
  },

  checkboxChange: function (e) {
    console.log(e)
  },
  // 动画调用
  base: function () {
    var that = this;
    util.sel(this, App, 'slide_up1', "isbase")
  },
  set: function () {
    var that = this;
    util.sel(this, App, 'slide_up2', "isset")
  },
  sev: function () {
    var that = this;
    util.sel(this, App, 'slide_up3', "issev")
  },
  spe: function () {
    var that = this;
    util.sel(this, App, 'slide_up4', "isspe")
  },
  focus: function (e) {
    var that = this;
    if (e.currentTarget.dataset.text == 'price') {
      that.setData({
        isShowTextPrice: true
      })
    } else if (e.currentTarget.dataset.text == 'title') {
      that.setData({
        isShowTextTitle: true
      })
    }
  },
  toUpImgs: function (e) {
    console.log(e)
    var that = this;
    this.setData({
      img: e.detail
    })
  },
  //触发监听事件传参
  toprice: function (e) {
    console.log(e)
  },
  toprice2: function (e) {
    console.log(e)
  },
  add: function () {
    console.log(this.data.onlinePrice)
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