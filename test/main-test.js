const chai = require('chai');
const chaiHttp = require('chai-http');
const controllers = require('../controllers/index');
const app = require('../app.js');

const should = chai.should();
const { assert } = chai;

chai.use(chaiHttp);
describe('Main', () => {
  it('Probando Main', async () => {
    const result = await chai.request(app)
      .get('/');
    result.should.have.status(200);
    result.body.should.be.a('object');
  });
});
