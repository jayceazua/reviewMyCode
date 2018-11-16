const chai = require('chai');
const { app } = require('./../server');
const chaiHttp = require('chai-http');
const expect = chai.expect;
// we need the models for codeSample
// seed data folder/file

chai.use(chaiHttp);

describe('CRUD Routes: ', () => {
    // INDEX
    it('should return status of 200 for index', (done) => {
        chai.request(app)
            .get('/')
            .then((res) => {
                expect(res).to.have.status(200);
                // other test coming soon
                return done()
            })
            .catch(err => done(err));
    });

    // NEW
    it('should get form to create a new codeSample', (done) => {
        chai.request(app)
            .get('/codeSamples/new')
            .then((res) => {
                expect(res).to.have.status(200)
                // other test coming soon
                return done();
            })
            .catch(err => done(err));
    });

    // CREATE
    it('should post a new codeSample', (done) => {
        chai.request(app)
            .post('/codeSamples')
            .send()
            .then((res) => {
                expect(res).to.have.status(200);
                // other test coming soon
                return done()
            })
            .catch(err => done(err));
    });

    // READ - individual
    it('should get an individual codeSample', (done) => {
        chai.request(app)
            .get('/codeSamples/:id')
            .then((res) => {
                expect(res).to.have.status(200);
                // other test coming soon
                return done();
            })
            .catch(err => done(err));
    });
    // GET UPDATE
    it('should get form to update codeSample', (done) => {
        chai.request(app)
            .get('/codeSamples/:id/edit')
            .then((res) => {
                expect(res).to.have.status(200);
                // other test coming soon
                return done();
            })
            .catch(err => done(err));
    });
    // UPDATE
    it('should update a codeSample', (done) => {
        chai.request(app)
            .patch('/codeSamples/:id')
            .then((res) => {
                expect(res).to.have.status(200);
                // other test coming soon
                return done();
            })
            .catch(err => done(err));
    });
    // DELETE
    it('should delete a single codeSample', (done) => {
        chai.request(app)
            .delete('/codeSamples/:id')
            .then((res) => {
                expect(res).to.have.status(200);
                // other test coming soon
                return done();
            })
            .catch(err => done(err));
    });
});

// should be moved into it's own file
describe('Users:', () => {
    describe("Authentication: ", () => {

        it("should create new user", (done) => {});

        it('should return validation errors if request invalid', (done) => {});

        it('should not create user if email in use', (done) => {});

        it('should login user and return a auth token', (done) => {});

        it('should reject invalid login', (done) => {});

        it('should logout', (done) => {});
    }); // end of... Authentication: Describe

    describe("Authorization: ", () => {

        it("should return 200 if user is authenticated", (done) => {});

        it("should return 401 if user not authenticated", (done) => {});
    }); // end of... Authorization: Describe
});
