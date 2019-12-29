import Year from "../pages/year"
import Daily from "../pages/daily"
import Month from "../pages/month"

export default {
    routes: [
        {
            path: "/user/:userID/records",
            name: "allRecords",
            component: null
        },
        {
            path: "/user/:userID/year/:yearID",
            name: "year",
            component: Year
        },
        {
            path: "/user/:userID/month/:monthID",
            name: "month",
            component: Month
        },
        {
            path: "/user/:userID/daily/:dayID",
            name: "daily",
            component: Daily
        }
    ]
}