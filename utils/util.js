const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
function sel(thia,App,amn,flg){
  let that = thia
    if(!that.data[flg]){
      that.setData({
        [flg]:!that.data[flg]
      })
      App.slideupshow(that,amn, -15, 1)
    }else{
      //如果为true进来时会清除一次定时器
      clearInterval(aa)
      //调用app.js里面的动画函数
      // App是通过参数传递
      App.slideupshow(that,amn, 15, 0)
      //加定时器是让动画结束之后在执行
      let aa =  setTimeout(()=>{
        that.setData({
          [flg]:!that.data[flg]
        })
      },350)
    }
}
module.exports = {
  formatTime,
  sel:sel
}
