const express = require ("express")
const urlRoutes = express.Router()
const urlController = require ("../controllers/urlController")

urlRoutes.get("/health", (req, res) => {
  res.status(200).json({ message: "Healthy" })
})

urlRoutes.get('/urls', urlController.getUrls)
urlRoutes.get('/urls/:id', urlController.singleUrl)
urlRoutes.post('/shorten-url', urlController.shortenUrl)
urlRoutes.get('/:shortUrl', urlController.redirectUrl)
urlRoutes.put('/urls/:id', urlController.updateUrl)
urlRoutes.delete('/urls/:id', urlController.deleteUrl)


module.exports = urlRoutes