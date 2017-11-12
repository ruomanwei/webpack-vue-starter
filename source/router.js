import Vue from 'vue';
import VueRouter from 'vue-router';
import components from './components/app';

Vue.use(VueRouter);

//定义路由地址
const routes = [
    { path: '/vue-tree', component: components.vueTree },
]

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
  })

module.exports = router;