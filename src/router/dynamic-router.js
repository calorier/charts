import Year from "../pages/year"
import Daily from "../pages/daily"
import Month from "../pages/month"

export default {
    routes: [
        {
            path: "/user/:userID/allRecords",
            name: "allRecords",
            componet: null
        },
        {
            path: "/user/:userID/year/:yearID",
            name: "year",
            componet: Year
        },
        {
            path: "/user/:userID/month/:monthID",
            name: "month",
            componet: Month
        },
        {
            path: "/user/:userID/day/:dayID",
            name: "day",
            componet: Daily
        }
    ]
}