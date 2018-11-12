const express = require('express');
const router = express.Router();
// get the models required in here...

// INDEX
router.get('/', (req, res) => {
  res.render('index', {name: 'Jeremy'})
});

router.get('/codeSamples/new', (req,res) => {
  res.render('index', {name: req.path})
});

router.post('/codeSamples', (req, res) => {
  res.render('index', {name: req.path})
});

router.get('/codeSamples/:id', (req, res) => {
  res.render('index', {name: req.path})
});

router.get('/codeSamples/:id/edit', (req, res) => {
  res.render('index', {name: req.path})
});

router.patch('/codeSamples/:id', (req, res) => {
  res.render('index', {name: req.path})
});

router.delete('/codeSamples/:id', (req, res) => {
  res.render('index', {name: req.path})
});

module.exports = router
