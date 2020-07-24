Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item: {
            type: Object,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        items: "5684"
    },

    /**
     * 组件的方法列表
     */
    methods: {
        detailClick(e) {

        },
        turnPage: function(e) {

        },
        split() {
            let str = this.props.num + ""
            this.setData({
                items: [...str]
            })
        }
    }
})