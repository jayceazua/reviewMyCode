const { ObjectID } = require('mongodb');
const CodeSnippet = require('./../../models/code');


const codePostOneId = new ObjectID();
const codePostTwoId = new ObjectID();
const codePosts = [{
    title: 'Best code ever!',
    description: 'Dont you think so?',
    codeSnippet: `function helloWorld() {console.log('Hello ' + 'World!')}`,
    linkToRepo: 'https://github.com/jayceazua/authJWT',
}, {
  title: 'Another one?',
  description: 'ehhh might be good',
  codeSnippet: `function ummm() => {'why is this not working'}`,
  linkToRepo: `https://github.com`
}];

const populatecodePosts = (done) => {
    Review.deleteMany({}).then(() => {
        let codePostOne = new CodeSnippet(reviews[0]).save();
        let codePostTwo = new CodeSnippet(reviews[1]).save();
        // Promise all method waits for all promises to resolve.
        return Promise.all([codePostOne, codePostTwo])
    }).then(() => done());
}

module.exports = {
    codePosts,
    populateReviews
}
