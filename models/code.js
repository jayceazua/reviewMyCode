const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodeSchema = new codeSchema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  codeSnippet: {type: String, required: true},
  linkToRepo: {type: String, required: false},
  createdAt: { type: Date },
  updatedAt:  { type: Date },
});

CodeSchema.pre('save', function(next) {
	// SET createdAt AND updatedAt
	const now = new Date();
	this.updatedAt = now;

	if (!this.createdAt) {
		this.createdAt = now;
	}
	// Jumps to the next middleware
	next();
});

module.exports = mongoose.model('Code', CodeSchema);
