const App = getApp()
const util = require('../../utils/util')
Component({
  /**
 1. 组件的属性列表
   */
  properties: {
    img: {
      type: Array,
      value: []
    }
  },

  /**
 2. 组件的初始数据
   */
  data: {
    isImg: false, //
    cont6: true, //
    iconIsShow: false, //
    cardIsshow: true, //
  },

  /**
 3. 组件的方法列表
   */
  methods: {
    showimg: function () {
      console.log(1)
      this.setData({
        iconIsShow: false
      })

    },
    // 上传图片
    up: function () {
      var that = this;
      var img = that.data.img;
      wx.chooseImage({
        count: 6,
        success: function (res) {
          var lsimg = [];
          console.log(res);
          lsimg = res.tempFilePaths;
          var newa = [];
          for (var i in lsimg) {
            var obj = {};
            obj.path = lsimg[i]
            obj.issize = false
            newa.push(obj)
          }
          lsimg = newa
          img = img.concat(lsimg)
          img.splice(6)
          if (img.length >= 6) {
            that.setData({
              cont6: !that.data.cont6
            })
          };
          console.log(res.tempFiles)
          for (var i in lsimg) {
            var size = res.tempFiles[i].size;
            var path = res.tempFiles[i].path;
            if (size > 102400) {
              img.map(function (currentValue, index, arr) {
                if (path == currentValue.path) {
                  return currentValue.issize = true
                }
              })
            }
          }
          that.triggerEvent('toUpImg', img);
        }
      });
      that.setData({
        iconIsShow: false
      })
      // console.log(`img` + this)
    },
    showIcon: function (e) {
      console.log(e)
      var imgUrl = e.currentTarget.dataset.src.path;
      wx.previewImage({
        urls: [imgUrl], //需要预览的图片http链接列表，注意是数组
        current: '', // 当前显示图片的http链接，默认是第一个
        success: function (res) {
          console.log('succ' + JSON.stringify(res))
        },
        fail: function (res) {},
        complete: function (res) {
          console.log("com" + JSON.stringify(res))
        },
      })

    },
    // 长按删除
    longpress: function () {
      var that = this;
      console.log(123)
      var that = this;
      that.setData({
        iconIsShow: !that.data.iconIsShow,
        // isImg: !that.data.isImg
      })
    },
    // 删除图片
    delete: function (e) {
      var that = this;
      var index = e.currentTarget.dataset.index;
      console.log(index)
      var img = that.data.img;
      img.splice(index, 1)
      that.setData({
        iconIsShow: !that.data.iconIsShow,
        // isImg: !that.data.isImg,
        cont6: true
      });
      that.triggerEvent('toUpImg', img)
      console.log(that.data.img)
    },
    //显示卡片
    isimg: function () {
      util.sel(this, App, 'slide_up1', "cardIsshow")
      this.setData({
        // cardIsshow: !this.data.cardIsshow,
        isImg: !this.data.isImg
      })

    },
  }
})