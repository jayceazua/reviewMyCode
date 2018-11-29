const CodeSample = require('./../../models/code');

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

const populateCodePosts = (done) => {
    CodeSample.deleteMany({}).then(() => {
        let codePostOne = new CodeSample(codePosts[0]).save();
        let codePostTwo = new CodeSample(codePosts[1]).save();
        return Promise.all([codePostOne, codePostTwo])
    }).then(() => done());
}

module.exports = {
    codePosts,
    populateCodePosts
}
