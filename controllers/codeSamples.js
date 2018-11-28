const express = require('express');
const router = express.Router();
const Code = require('../models/code');
// get the models required in here...

// INDEX
router.get('/', (req, res) => {
  Code.find({}).then((codes) => {
    // console.log(codes)
    res.render('code-index', { codes });
  }).catch((err) => {
    console.log(req.path, err.message);
  })
});
// NEW
router.get('/codeSamples/new', (req,res) => {
  res.render('code-new')
});
// CREATE
router.post('/codeSamples', (req, res) => {
  Code.create(req.body).then((codes) => {
    res.redirect('/');
  }).catch((err )=> {
    console.log(req.path, err.message);
  })
});
// SHOW
router.get('/codeSamples/:id', (req, res) => {
  Code.findById(req.params.id).then((code) => {
    res.render('code-show', { code })
  }).catch(err => res.send(err.message))
});
// EDIT
router.get('/codeSamples/:id/edit', (req, res) => {
  Code.findById(req.params.id, function(err, codes) {
    if (err) {
      res.send(err.message)
    }
    // this is not consistent with the above code
    res.render('code-edit', { codes: codes });
  })
});
// UPDATE
router.put('/codeSamples/:id', (req, res) => { // put difference patch
  Code.findByIdAndUpdate(req.params.id, req.body).then(codes => { // I want to know the difference in each parameter and difference in params and body
    res.redirect('/');
  }).catch(err => {
    // purpose of why you are using .method and .path
    console.log(req.method, req.path, err.message);
  });
});
// DESTROY
router.delete('/codeSamples/:id', (req, res) => {
  Code.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/")
  }).catch(err => {
    console.log(req.method, req.path, err.message)
  })
  // res.render('index', {name: req.path})

});

module.exports = router
