import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

describe("Tests related with api.js", () => {

    it("get 'country' list successfully", (done) => {
        
        chai.request(app)
             .get('/country')
             .end((err, res) => {
                 setTimeout(() => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body[0].should.have.property('label');
                    res.body[0].should.have.property('value');
                    done();
                 }, 1000);                 
              });
     });
});