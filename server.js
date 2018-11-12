require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const hbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

/*
 database connection goes here
*/

// Template Engine //
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + 'views/layouts'
}));
app.set( 'views', path.join( __dirname, 'views' ));
app.set( 'view engine', 'hbs' );
// To display the public folder
app.use(express.static(path.join( __dirname, 'public' )));
// Setting up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// set up method override
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('_method'));
app.use(methodOverride((req, res)=> {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    let method = req.body._method;
    delete req.body._method;
    return method;
  }
}));


// Call in the ROUTES

app.listen(port, () => {
  console.log(`Port is listening on ${port}`)
});

// for testing
module.exports = app;
