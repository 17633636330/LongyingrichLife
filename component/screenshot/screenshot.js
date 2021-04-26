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
    cardIsshow:false,//
  },

  /**
 3. 组件的方法列表
   */
  methods: {
    // 上传图片
    up: function () {
      var that = this;
      var img = that.data.img;
      wx.chooseImage({
        count: 6,
        success: function (res) {
          var lsimg;
          console.log(res.tempFilePaths[0]);
          lsimg = res.tempFilePaths;
          img = img.concat(lsimg)
          img.splice(6)
          if (img.length >= 6) {
            that.setData({
              cont6: !that.data.cont6
            })
          };
          that.triggerEvent('toUpImg', img)
          console.log(img)
        }
      });
      that.setData({
        iconIsShow: false
      })
      console.log(`img` + this)
    },
    // 显示删除图标
    showIcon: function () {
      console.log(123)
      var that = this;
      that.setData({
        iconIsShow: !that.data.iconIsShow,
        isImg: !that.data.isImg
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
        isImg: !that.data.isImg,
        cont6: true
      });
      that.triggerEvent('toUpImg', img)
      console.log(that.data.img)
    },
    //显示卡片
    isimg:function(){
          this.setData({
            cardIsshow:!this.data.cardIsshow
          })
       
    },
  }
})