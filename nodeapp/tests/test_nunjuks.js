import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);
chai.should();

describe("Tests related with nunjucks.js", () => {
    it("get 'index.html' successfully", (done) => {
         chai.request(app)
             .get('/')
             .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a('object');
                 res.text.should.contains('<html');
                 res.text.should.contains('<body>');
                 res.text.should.contains('<div id="root"></div>');
                 res.text.should.contains('src="index.bundle.js"');
                 res.text.should.contains('<body>');
                 res.text.should.contains('</html>');   
                 done();
              });
     });
     it("get 'index.bundle.js' successfully", (done) => {
        chai.request(app)
            .get('/index.bundle.js')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.text.should.contains('function');
                res.text.should.contains('document.getElementById("root")');
                done();
             });
    });
    it("get 'favicon.ico' successfully", (done) => {
        chai.request(app)
            .get('/favicon.ico')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
             });
    });
});