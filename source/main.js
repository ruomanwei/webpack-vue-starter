    var $ = require("jquery"),
        data = require("./vue-tree/tree");
    import Vue from "vue";


    new Vue({
        render: h => h(data)
    }).$mount('#view')

    // bugfix: ↓↓↓ with this bootstrap [webpack-hot-reload-api] plug can not synchronously reload script change in vue file
    // var app = new Vue(data).$mount("#view");