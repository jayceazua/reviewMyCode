const chai = require('chai');
const { app } = require('./../server');
const chaiHttp = require('chai-http');
const expect = chai.expect;
// we need the models for codeSample
// seed data folder/file

chai.use(chaiHttp);

describe('ROUTES: ', () => {
  // INDEX
  it('should return status of 200 for index',  (done) => {
    chai.request(app)
      .get('/')
      .then((res) => {
        expect(res).to.have.status(200);
        return done()
      })
      .catch(err =>  done(err));
  });

  // NEW
  it('should get form to create a new codeSample', (done) => {
    chai.request(app)
      .get('/codeSample/new')
      .then((res) => {
        expect(res).to.have.status(200)
        // other test is needed for this.
        return done();
      })
      .catch(err => done(err));
  });

  // CREATE
  it('should post a new codeSample', (done) => {
    chai.request(app)
      .post('/codeSample')
      .send()
      .then((res)=> {
        expect(res).to.have.status(200);
        // other test are needed to complete this.
        return done()
      })
      .catch(err => done(err))
  });

  // READ - individual
  it('should get an individual codeSample', (done) => {})
  // GET UPDATE
  it('should get form to update codeSample', (done) => {})
  // UPDATE
  it('should update a codeSample', (done) => {})
  // DELETE
  it('should delete a single codeSample', (done) => {})

});
