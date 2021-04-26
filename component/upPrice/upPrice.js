const App = getApp()
const util = require('../../utils/util')
Component({
  properties: {
    onlinePrice: {
      type: String,
      value: ''
    },
    price: {
      type: String,
      value: ''
    }
  },
  data: {
    isshowprice: true,
    isShowTextPrice: false
  },
  methods: {
    blue: function (e) {
      console.log(e)
      var reg=/^￥/;
      if(reg.test(this.data.onlinePrice)){
        this.setData({
          onlinePrice:this.data.onlinePrice,
          isShowTextPrice: false
        })
      }else if(e.detail.value!=''){
        this.setData({
          onlinePrice:'￥'+this.data.onlinePrice,
          isShowTextPrice: false
        })
      }
     
      this.triggerEvent('toprice', [this.data.onlinePrice])
    
    },
    blue2: function (e) {
      console.log(e)
      var reg=/^￥/;
      if(reg.test(this.data.price)){
        this.setData({
          price:this.data.price,
          // isShowTextPrice: false
        })
      }else if(e.detail.value!=''){
        this.setData({
          price:'￥'+this.data.price,
          isShowTextPrice: false
        })
      }
     
      this.triggerEvent('toprice2', [this.data.price])
    
    },
    //显示卡片
    isimg: function () {
      util.sel(this, App, 'slide_up1', "isshowprice")
    },
  }
})