import Vue from 'vue';
import router from './router.js';
import app from './components/app.vue'

new Vue({
    router,
    render:h => h(app)
}).$mount('#view')

// bugfix: ↓↓↓ with this bootstrap [webpack-hot-reload-api] plug can not synchronously reload script change in vue file
// var app = new Vue(data).$mount('#view');