const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodeSchema = new codeSchema({
  usersName     : { type: Schema.Types.username, ref: 'User' },
  title         : { type: String, required: true },
  text          : { type: String, required: true },
  createdAt     : { type: Date },
  updatedAt    :  { type: Date },

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
