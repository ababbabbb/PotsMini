// components/items/items.js
var app = getApp()

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        project:null,
        cell:null,
        type_form:null,
    },

    /**
     * 组件的初始数据
     */
    data: {
        user_accout: app.data.userInfo_accout,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        select:function(e){
            var that = this;

            wx.request({
              url: 'http://127.0.0.1:8000/apis/forms/',
              data: {
                  accout:user_accout,
                  projectName: project,
                  index_cel: cell,
                  form: type_form,
              },
              method: method,
              success: (result) => {
                if(type_form=='StartForm'){
                    wx.navigateTo({
                        url: '../../pages/startForm/startForm',
                        success: function(res) {
                            // 通过 eventChannel 向被打开页面传送数据
                            res.eventChannel.emit('acceptArgs', { data: request })
                          }
                      });
                }else{
                    wx.navigateTo({
                        url: '../../pages/ioForm/ioForm',
                        success: function(res) {
                            // 通过 eventChannel 向被打开页面传送数据
                            res.eventChannel.emit('acceptArgs', { data: request })
                          }
                      });
                }
              },
              fail: (res) => {
                  wx.showToast({
                    title: '查找失败',
                    icon: none
                  });
              },
              complete: (res) => {
                  that.triggerEvent("reciver", {select: true, open: false});
              },
            });
        }
    }
})
