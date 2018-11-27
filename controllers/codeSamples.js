const express = require('express');
const router = express.Router();
const Code = require('../models/code');
// get the models required in here...

// INDEX
router.get('/', (req, res) => {
  Code.find().then(codes => {
    // console.log(codes)
    res.render('code-index', { codes: codes });
  }).catch(err => {
    console.log(req.path, err.message);
  })
});
// NEW
router.get('/codeSamples/new', (req,res) => {
  res.render('code-new', {})
});
// CREATE
router.post('/codeSamples', (req, res) => {
  Code.create(req.body).then(codes => {
    // console.log(codes);
    res.redirect('/');
  }).catch(err => {
    console.log(req.path, err.message);
  })
});
// SHOW
router.get('/codeSamples/:id', (req, res) => {
  Code.findById(req.params.id).then(codes => {
    console.log(codes)
    res.render('code-show', {codes:codes});
  }).catch(err => {
    console.log(req.path, err.message);
  });
});
// EDIT
router.get('/codeSamples/:id/edit', (req, res) => {
  Code.findById(req.params.id, function(err, codes){
    res.render('code-edit', { codes: codes });
  })
});
// UPDATE
router.put('/codeSamples/:id', (req, res) => {
  Code.findByIdAndUpdate(req.params.id, req.body).then(codes => {
    res.redirect('/');
  }).catch(err => {
    console.log("put:",req.path, err.message);
  });
});
// DESTROY
router.delete('/codeSamples/:id', (req, res) => {
  // res.render('index', {name: req.path})

});

module.exports = router
