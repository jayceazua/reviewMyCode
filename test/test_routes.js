const chai = require('chai');
const { app } = require('./../server');
const { codePosts, populateCodePosts } = require('./seed/seed');
const chaiHttp = require('chai-http');
const expect = chai.expect;
// we need the models for codeSample
const CodeSample = require('../models/code');
// seed data folder/file
chai.use(chaiHttp);

describe('CRUD Routes: ', () => {
    after(() => {
        CodeSample.deleteMany({})
        .exec((err, codePosts) => {
            if (err) throw err;
            codePosts.remove();
        });
    });
    beforeEach(populateCodePosts);

    // INDEX
    it('should index ALL codeSamples on / GET', (done) => {
        CodeSample.find({}).then((codeSamples) => { // confirming data is in !
            chai.request(app)
                .get('/')
                .then((res) => {
                    expect(res).to.have.status(200);
                    // better tests coming soon
                    // need to make sure there is data is in the route... ?
                    expect(res.text).to.have.string(`${codeSamples[0]._id}`)
                    expect(res.text).to.have.string(`${codeSamples[1]._id}`)
                    expect(res.text).to.have.string(`${codeSamples[0].title}`)
                    expect(res.text).to.have.string(`${codeSamples[1].title}`)
                    expect(res.text).to.have.string(`${codeSamples[0].linkToRepo}`)
                    expect(res.text).to.have.string(`${codeSamples[1].linkToRepo}`)
                    return done();
                })
                .catch(e => done(e));
        }).catch(e => e);
    });
    // NEW
    it('should display new form on /codeSamples/new GET', (done) => {
        chai.request(app)
            .get('/codeSamples/new')
            .then((res) => {
                expect(res).to.have.status(200);
                // better tests coming soon
                expect(res).to.have.header('content-type', "text/html; charset=utf-8");
                return done();
            })
            .catch(e => done(e));
    });
    // CREATE
    it('should create a SINGLE codeSample on /codeSamples POST', (done) => {
        const demoCodePost = ({
            title: "Worked really hard on this!",
            description: "Checkout my amazing code",
            codeSnippet: "<h1>Needs to be tested</h1>",
            linkToRepo: "https://github/jayceazua/reviewMyCode"
        });
        chai.request(app)
            .post('/codeSamples')
            .send(demoCodePost)
            .then((res) => {
                expect(res).to.have.status(200); // basic test
                expect(res).to.be.html; // basic test
                CodeSample.findOne({ title: demoCodePost.title }).then((codeSample) => { // complex test
                    expect(demoCodePost.title).to.equal(codeSample.title);
                    // need to find the proper way of testing redirecting
                    expect(res).to.redirect;
                    expect(res.redirects[0]).to.include(codeSample._id); // makes sure the redirect url includes the Id
                    expect(res.req.path).to.not.equal(`${app.mountpath}`); // makes sure it redirected
                }).catch(e => e);
                expect(res).to.redirect;
                return done();
            })
            .catch(e => done(e));
    });
    // SHOW
    it('should show a SINGLE codeSample on /codeSamples/<id> GET', (done) => {
        CodeSample.find({}).then((data) => {
            let codeId = String(data[0]._id)
            chai.request(app)
                .get(`/codeSamples/${codeId}`)
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
                    expect(res.req.path).to.include(codeId);
                    // test if the data is in html ???
                    expect(res.text).to.have.string(`${data[0]._id}`)
                    expect(res.text).to.have.string(`${data[0].title}`)
                    expect(res.text).to.have.string(`${data[0].codeSnippet}`)
                    expect(res.text).to.have.string(`${data[0].description}`)
                    expect(res.text).to.have.string(`${data[0].linkToRepo}`)
                    return done();
                })
                .catch(e => done(e));
        }).catch(e => e);
    });
    // EDIT
    it('should edit a SINGLE codeSamples on /codeSamples/<id>/edit GET', (done) => {
        CodeSample.find({}).then((data) => {
            let codeId = String(data[0]._id)
            chai.request(app)
                .get(`/codeSamples/${codeId}/edit`)
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
                    expect(res.req.path).to.include(`${codeId}/edit`);
                    // test if the data is in html ???
                    expect(res.text).to.have.string(`${data[0]._id}`)
                    expect(res.text).to.have.string(`${data[0].title}`)
                    expect(res.text).to.have.string(`${data[0].codeSnippet}`)
                    expect(res.text).to.have.string(`${data[0].description}`)
                    expect(res.text).to.have.string(`${data[0].linkToRepo}`)
                    return done();
                })
                .catch(e => done(e))
        }).catch(e => e);
    });
    // UPDATE
    it('should update a SINGLE codeSample on /codeSamples/<id> PATCH', (done) => {
        CodeSample.find({}).then((data) => {
            let codeId = String(data[0]._id)
            chai.request(app)
                .patch(`/codeSamples/${codeId}`)
                .send({
                    title: "My code just got better!"
                })
                .then((res) => {
                    expect(res).to.have.status(200);
                    // make sure the data is updated
                    CodeSample.findOne({title: 'Best code ever!'}).then((codeSample) => {
                        expect(data[0]._id).to.equal(codeSample._id); // make sure it is the same entry
                        expect(data[0].title).to.not.equal(codeSample.title);
                        expect(data[0].codeSnippet).to.equal(codeSamles.codeSnippet);
                    }).catch(e => e);
                    expect(data.length).to.equal(2) // make sure it did not create a 3rd entry
                    // make sure it redirects
                    expect(res).to.redirect;
                    expect(res.redirects[0]).to.include(data[0]._id); // makes sure the redirect url includes the Id
                    expect(res.req.path).to.not.equal(`${app.mountpath}`); // makes sure it redirected
                    return done()
                })
                .catch(e => done(e));
        }).catch(e => e);
    });
    // DELETE
    it('should delete a SINGLE codeSamples on /codeSamples/<id> DELETE', (done) => {
        CodeSample.find({}).then((data) => {
            let codeId = String(data[0]._id)
            expect(data.length).to.equal(2);
            chai.request(app)
                .delete(`/codeSamples/${codeId}`)
                .then((res) => {
                    CodeSample.find({}).then((codeSamples) => {
                        expect(codeSamples.length).to.equal(1);
                        expect(data[0]).to.not.equal(codeSamples[0]);
                    }).catch(e => e);
                    return done();
                })
                .catch(e => done(e));
        }).catch(e => e);
    });
});

// should be moved into it's own file
// describe('Users:', () => {
//     describe("Authentication: ", () => {
//
//         it("should create new user", (done) => {});
//
//         it('should return validation errors if request invalid', (done) => {});
//
//         it('should not create user if email in use', (done) => {});
//
//         it('should login user and return a auth token', (done) => {});
//
//         it('should reject invalid login', (done) => {});
//
//         it('should logout', (done) => {});
//     }); // end of... Authentication: Describe

    // describe("Authorization: ", () => {
    //
    //     it("should return 200 if user is authenticated", (done) => {});
    //
    //     it("should return 401 if user not authenticated", (done) => {});
    // }); // end of... Authorization: Describe
// });
