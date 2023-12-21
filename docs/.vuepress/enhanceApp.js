import Vuex from 'vuex';
import store from './store';
import './public/iconfont/iconfont.css';
import 'ant-design-vue/dist/antd.css';

export default async ({ Vue, options, router, siteData, isServer }) => {
    // 解决  Uncaught (in promise) Error: Redirected when going from "/xxx/xxx.html" to "/xxx/xxx" via a navigation guard 警告
    const originalPush = router.push;
    router.push = function push(location, onResolve, onReject) {
        if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
        return originalPush.call(this, location).catch((err) => {
            err;
        });
    };

    Vue.use(router);
    Vue.use(Vuex);
    Vue.mixin({ store: store });
    if (!isServer) {
        router.beforeEach((to, from, next) => {
            if (to.path.includes('/wenchangchain')) {
                next('/');
            } else if (to.path.includes('/ecological-application')) {
                next('/partner');
            } else if (to.path.includes('/partner')) {
                store.commit('currentIndex', 1);
                localStorage.setItem('currentIndex', 1);
            } else {
                localStorage.setItem('currentIndex', 0);
                store.commit('currentIndex', 0);
            }
            next();
        });
        await import('./public/iconfont/iconfont').then((module) => {});
        await import('ant-design-vue')
            .then((module) => {
                Vue.use(module.default);
            })
            .catch((e) => {
                console.log(e, 'ant-design-vue error ');
            });
        await import('vue-seamless-scroll')
            .then((module) => {
                Vue.use(module.default);
            })
            .catch((e) => {
                console.log(e, 'vue-seamless-scroll error ');
            });
        await import('vue-awesome-swiper')
            .then((module) => {
                Vue.use(module.default);
            })
            .catch((e) => {
                console.log(e, 'vue-awesome-swiper error');
            });
    }
};
