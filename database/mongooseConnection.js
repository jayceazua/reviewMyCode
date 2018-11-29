const mongoose = require('mongoose');
 // Set a Mongoose Promise Library
mongoose.Promise = global.Promise;
const dbname = process.env.DB_NAME;
const dbpassword = process.env.DB_PASSWORD;
const dbuser = process.env.DB_USER;
const dbURI = process.env.MONGODB_URI || `mongodb://${dbuser}:${dbpassword}@ds115283.mlab.com:53552/${dbname}`;
//
mongoose.connect(dbURI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Rotten Potatoes\' database is up!')
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'));
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false); // corrects the annoying DeprecationWarning
