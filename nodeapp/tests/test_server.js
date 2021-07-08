import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const PORT = process.env.PORT || 5000;

chai.use(chaiHttp);
chai.should();

describe("Tests related with server.js", () => {
    it("check server started and port is listened", (done) => {
        expect(app.get('started_port')).to.equal(PORT);                
        done();
     });
});