const mongoose = require("mongoose");

const VocabSchema = new mongoose.Schema({
  kanji: String,
  kana: String,
  reading: String,
  meaning: String,
  lesson: Number,
  gender: String,
});

mongoose.model("Vocabulary", VocabSchema);
