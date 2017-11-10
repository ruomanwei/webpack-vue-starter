    var $ = require("jquery"),
        data = require("./vue-tree/tree");
    import Vue from "vue";


    var app = new Vue(data).$mount("#view");