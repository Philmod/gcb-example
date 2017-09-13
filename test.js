var app = require('./app.js');
var expect = require('chai').expect;
var request = require('supertest');

describe('status.routes.test.js', () => {

  describe('GET /', () => {

    it('responds with 200', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .end((e, res) => {
          expect(e).to.not.exist;
          done();
        });
    });

  });

});
