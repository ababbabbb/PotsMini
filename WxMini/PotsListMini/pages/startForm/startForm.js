// pages/startForm/startForm.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        timeHeight1:0,
    timeHeigh2:0,
    timeHeigh3:0,
    list: [
      {
        time: '排班',
        data: [{
            date: '周一',
            day: '04/25',
            userList: []
          },
          {
            date: '周二',
            day: '04/26',
            userList: []
          },
          {
            date: '周三',
            day: '04/27',
            userList: []
          },
          {
            date: '周四',
            day: '04/28',
            userList: []
          },
          {
            date: '周五',
            day: '04/29',
            userList: []
          },
          {
            date: '周六',
            day: '04/30',
            userList: []
          },
          {
            date: '周日',
            day: '05/01',
            userList: []
          }
        ]
      },
    {
      time: '上午',
      data: [{
          date: '周一',
          day: '00/00',
          userList: [{
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            }
          ]
        },
        {
          date: '周二',
          day: '00/00',
          userList: [{
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            }
          ]
        },
        {
          date: '周三',
          day: '00/00',
          userList: [{
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            }
          ]
        },
        {
          date: '周四',
          day: '00/00',
          userList: [{
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            }
          ]
        },
        {
          date: '周五',
          day: '00/00',
          userList: [{
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            }
          ]
        },
        {
          date: '周六',
          day: '00/00',
          userList: [{
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            }
          ]
        },
        {
          date: '周日',
          day: '00/00',
          teacher: []
        }
      ]
    },
    {
      time: '下午',
      data: [{
          date: '周一',
          day: '00/00',
          userList: [{
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            }
          ]
        },
        {
          date: '周二',
          day: '00/00',
          userList: [{
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            }
          ]
        },
        {
          date: '周三',
          day: '00/00',
          userList: [{
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            }
          ]
        },
        {
          date: '周四',
          day: '00/00',
          userList: [{
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            }
          ]
        },
        {
          date: '周五',
          day: '00/00',
          userList: [{
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            }
          ]
        },
        {
          date: '周六',
          day: '00/00',
          userList: [{
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            }
          ]
        },
        {
          date: '周日',
          day: '00/00',
          userList: [{
            code: '000',
            name: '值班人'
          }]
        }
      ]
    },
    {
      time: '晚上',
      data: [{
          date: '周一',
          day: '00/00',
          userList: [{
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            }
          ]
        },
        {
          date: '周二',
          day: '00/00',
          userList: [{
              code: '000',
              name: '值班人'
            },
            {
              code: '000',
              name: '值班人'
            }
          ]
        },
        {
          date: '周三',
          day: '00/00',
          userList: [{
            code: '000',
            name: '值班人'
          }]
        },
        {
          date: '周四',
          day: '00/00',
          userList: []
        },
        {
          date: '周五',
          day: '00/00',
          userList: [{
            code: '000',
            name: '值班人'
          }]
        },
        {
          date: '周六',
          day: '00/00',
          userList: [{
            code: '000',
            name: '值班人'
          }]
        },
        {
          date: '周日',
          day: '00/00',
          userList: []
        }
      ]
    }
  ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        eventChannel.on('acceptArgs', function(data) {
            console.log(data)
          })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        let query = wx.createSelectorQuery();
    query.select('.tableRow1').boundingClientRect(rect => {
  	  //获取到元素
      let height = rect.height;
      //给页面赋值
      this.setData({
        timeHeight1: height - 1 //不减1 边框线对不齐
      })
    }).exec();
    query.select('.tableRow2').boundingClientRect(rect => {
      let height = rect.height;
      this.setData({
        timeHeight2: height - 1
      })
    }).exec();
    query.select('.tableRow3').boundingClientRect(rect => {
      let height = rect.height;
      this.setData({
        timeHeight3: height - 1
      })
    }).exec();
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