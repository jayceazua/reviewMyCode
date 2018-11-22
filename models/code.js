const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  codeSnippet: {type: String, required: true},
  linkToRepo: {type: String, required: false}
});


module.exports = mongoose.model('Code', CodeSchema);
