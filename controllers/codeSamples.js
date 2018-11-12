const express = require('express');
const router = express.Router();
// get the models required in here...

// INDEX
router.get('/', (req, res) => {
  res.render('index', {name: 'Jeremy'})
});

// other routes go here
// show singular
// edit
// DELETE


module.exports = router
