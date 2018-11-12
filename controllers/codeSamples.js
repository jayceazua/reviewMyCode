const express = require('express');
const router = express.Router();
// get the models required in here...

// INDEX
router.get('/', (req, res) => {
  console.log(req.path)
  res.render('index', {name: 'Jeremy'})

});

router.get('/codeSamples/new', (req,res) => {
  console.log(req.path)
  res.render('index', {name: req.path})
});

router.post('/codeSamples', (req, res) => {
  console.log(req.path)
  res.render('index', {name: req.path})
});

router.get('/codeSamples/:id', (req, res) => {
  console.log(req.path)
  res.render('index', {name: req.path})
});

router.get('/codeSamples/:id/edit', (req, res) => {
  console.log(req.path)
  res.render('index', {name: req.path})
});

router.patch('/codeSamples/:id', (req, res) => {
  console.log(req.path)
  res.render('index', {name: req.path})
});

router.delete('/codeSamples/:id', (req, res) => {
  console.log(req.path)
  res.render('index', {name: req.path})
});
// other routes go here
// show singular
// edit
// DELETE


module.exports = router
