const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: { // might need this ...
    type: String,
    required: true
  },
  codeSnippet: {
    type: String,
    required: true
  },
  codeLanguage: {
    type: String,
    required: true
  },
  linkToRepo: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

let Code = mongoose.model('Code', CodeSchema)

module.exports = Code;
