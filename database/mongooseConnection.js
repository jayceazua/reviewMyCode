const mongoose = require('mongoose');
 // Set a Mongoose Promise Library
mongoose.Promise = global.Promise;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/code_review';
// `mongodb://${dbuser}:${dbpassword}@ds115283.mlab.com:15283/${dbname}`
mongoose.connect(dbURI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Database connected.')
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'));
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false); // corrects the annoying DeprecationWarning
