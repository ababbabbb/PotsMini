// app.js
App({

  data:{
    userInfo_name:'未登录',
    userInfo_icon: '/static/卡通头.png',
    userInfo_accout: null,
    projects:null,
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    var name = wx.getStorageSync('name');

    if(name){
      var icon = wx.getStorageSync('icon');
      var projects_sys = wx.getStorageSync('projects');
      var accout = wx.getStorageSync('accout');

      this.setData({
        userInfo_accout: accout,
        userInfo_name: name,
        userInfo_icon: icon,
        projects: projects_sys
      });
    }
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})

