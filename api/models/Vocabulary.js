const mongoose = require("mongoose");

const inuVocabSchema = new mongoose.Schema({
  kanji: String,
  kana: String,
  reading: String,
  meaning: String,
  lesson: Number,
  gender: String,
});

mongoose.model("Vocabulary", inuVocabSchema);
