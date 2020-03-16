const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: { type: String, required: [true, "Title is empty!"] },
  description: { type: String, required: [true, "Desctiption is empty!"] },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("News", newsSchema);
