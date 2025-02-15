const mongoose = require("mongoose")
const shortid = require ("shortid")


const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true, unique: true },
  shortUrl: { type: String, required: true, default: shortid.generate },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Url", urlSchema)