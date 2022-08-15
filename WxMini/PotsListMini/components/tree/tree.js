// components/tree/tree.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        project:null,
        text:null,
    },

    /**
     * 组件的初始数据
     */
    data: {
        flag_selected:false,
        flag_open:true,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        select:function(e){
            if(flag_selected){
                this.setData({
                    flag_selected: !flag_selected,
                    flag_open: false
                });
            }else{
                this.setData({
                    flag_selected: !flag_selected,
                    flag_open: true,
                });
            };

            this.triggerEvent(
                "reciver", {select: flag_selected, open: flag_open}
            );
        },

        reciver:function(e){
            this.setData({
                flag_selected: e.detail.selected,
                flag_open: e.detail.open,
            });

            this.triggerEvent(
                "reciver", {select: flag_selected, open: flag_open}
            );
        }
    }
})
