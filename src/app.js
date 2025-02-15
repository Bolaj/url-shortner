const express = require("express")

const urlRoutes = require ("./routes/urlRoutes")
const appRouter = express()

appRouter.use('/api', urlRoutes)
appRouter.use('', urlRoutes)



module.exports = appRouter