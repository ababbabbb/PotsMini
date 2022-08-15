// pages/login/login.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: app.data.name,
        icon: app.data.icon,
        accout: app.data.accout,
        password: null,
        projects: app.data.projects,
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

    },


    getAccout:function(e){
        wx.setStorageSync('accout', e.detail.value);
        this.setData({
            accout: e.detail.value
        });
    },

    getPassword:function(e){
        this.setData({
            password: e.detail.value
        });
    },

    getInfo:function(e){
        var that = this;

        wx.getUserInfo({
          success:function(res){
              wx.setStorageSync('name', res.userInfo.nickName);
              wx.setStorageSync('icon', res.userInfo.avatarUrl);

              that.setData({
                name: res.userInfo.nickName,
                icon: res.userInfo.avatarUrl
              });
          }
        });

        wx.request({
          url: 'http://127.0.0.1:8000/apis/login/',
          data: {userInfo_accout:accout, userInfo_password:password},
          method: 'GET',
          success: (result) => {
              wx.showToast({
                title: '登录成功',
                icon: success
              });

              wx.setStorageSync('projects', res.data.projects);

              that.setData({
                  projects: res.data.projects
              });
          },
          fail: (res) => {
              wx.showToast({
                title: '登录失败',
                icon: none
              });
          },
          complete: (res) =>{
            wx.navigateBack({});
          }
        });
    }
})