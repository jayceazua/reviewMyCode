const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  usersName     : { type: Schema.Types.username, ref: 'User' },
  text          : { type: String, required: true},
  createdAt     : { type: Date },
  updatedAt     : { type: Date },
});

ReviewSchema.pre('save', function(next) {
	// SET createdAt AND updatedAt
	const now = new Date();
	this.updatedAt = now;

	if (!this.createdAt) {
		this.createdAt = now;
	}
	// Jumps to the next middleware
	next();
});

module.exports = mongoose.models('Review', ReviewSchema);
