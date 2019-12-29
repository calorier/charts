import NotFound from '../pages/errorPage/404'
import Home from "@/pages/home/index"
import Year from "../pages/year"
import Daily from "../pages/daily"
import Month from "../pages/month"

import Router from "vue-router"
import Vue from "vue"

Vue.use(Router)

export default new Router({
    routes: [{
        path: "",
        component: Home,
    },
    {
        path: "/user/:userID/records",
        component: null
    },
    {
        path: "/user/:userID/year/:yearID",
        component: Year
    },
    {
        path: "/user/:userID/month/:monthID",
        component: Month
    },
    {
        path: "/user/:userID/daily/:dayID",
        component: Daily
    },
    {
        path: '/404',
        component: NotFound
    }]
})