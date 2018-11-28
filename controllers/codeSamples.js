const express = require('express');
const router = express.Router();
const Code = require('../models/code');
// get the models required in here...

// INDEX
router.get('/', (req, res) => {
  Code.find({}).then((codes) => {
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

// router.get('/codeSamples/:id', (req, res) => {
//  // if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
//  // Yes, it's a valid ObjectId, proceed with `findById` call.
//    Code.findById(req.params.id).then(codes => {
//      res.render('code-show', { codes });
//    }).catch((err) => {
//      console.log(req.path, err.message);
//    });
//  // } else{
//    // console.log("the ID: ", req.params.id, "ain\'t right");
//    // res.end();
//  // }
// });

// EDIT
router.get('/codeSamples/:id/edit', (req, res) => {
  Code.findById(req.params.id).then(codes => {
    res.render('code-edit', {codes});
  }).catch(err => {
    console.log(req.path, err.message)
  })
});
// UPDATE


router.patch('/codeSamples/:id', (req, res) => { // put difference patch
  Code.findByIdAndUpdate(req.params.id, req.body).then((codes) => {
    res.redirect(`/codeSamples/${req.params.id}`);
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
});

module.exports = router
