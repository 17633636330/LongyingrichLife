const App = getApp()
const util = require('../../utils/util')
Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    onlinePrice: {
      type: String,
      value: ''
    }
  },
  data: {
    isShowTextTitle: false,
    isshowtitle: true
  },
  methods: {
       //显示卡片
       isimg: function () {
        util.sel(this, App, 'slide_up1', "isshowtitle")
      },
    blue:function(){
      this.setData({
        isShowTextTitle:false
      })
      this.triggerEvent('totitle',this.data.title)
    },
    focus:function(){
      this.setData({
        isShowTextTitle:true
      })
    }
  },
})