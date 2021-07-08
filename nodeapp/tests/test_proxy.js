import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
const httpProxy = require('http-proxy');
const http = require('http');
const config = require('config');

const javaApiUrl = config.get('javaApiUrl');

chai.use(chaiHttp);
chai.should();

describe("Tests related with proxy.js", () => {

     it("check /user proxy with mock", (done) => {

        let proxy = httpProxy.createProxyServer({
            agent: new http.Agent({
                keepAlive: true
            })
        });
        proxy = {
            proxy,
            web: (req, res, targetObj, callbackFunc) => {
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({name:'John Smith', sex: 'male', age: 23, country: 'GBR'}));
                res.end();
            }
        };
        app.use('/user2', (req, res, next) => {
            proxy.web(req, res, {});
        });

        chai.request(app)
            .post('/user2')
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                expect(res.body.name).to.equal('John Smith');
                expect(res.body.sex).to.equal('male');
                expect(res.body.age).to.equal(23);
                expect(res.body.country).to.equal('GBR');                
                done();
             });
    });
});