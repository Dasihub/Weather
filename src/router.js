import Vue from 'vue'
import Router from 'vue-router'
import Weather_ru from "./components/Weather_ru";
import Weather_en from "./components/Weather_en";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/Weather/',
            component: Weather_ru,
            props: true
        },
        {
            path: '/Weather/en',
            component: Weather_en,
            props: true
        }
    ]
})