import * as sinon from 'sinon';
import {expect} from 'chai';

import * as routes from '../api/routes';

describe('Testing createUser', () => {
  it('should send "createUser"', () => {
    const req = {};
    const res = {
      end: sinon.spy(),
    };
    routes.createUser(req, res);
    expect(res.end.calledOnce).to.be.true;
    expect(res.end.args[0][0]).to.have.string('createUser');
  });
});

describe('Testing deleteMeme', () => {
  it('should send "deleteMeme"', () => {
    const req = {};
    const res = {
      end: sinon.spy(),
    };
    routes.deleteMeme(req, res);
    expect(res.end.calledOnce).to.be.true;
    expect(res.end.args[0][0]).to.have.string('deleteMeme');
  });
});

describe('Testing getAllMeme', () => {
    it('should send "getAllMeme"', () => {
      const req = {};
      const res = {
        end: sinon.spy(),
      };
      routes.getAllMeme(req, res);
      expect(res.end.calledOnce).to.be.true;
      expect(res.end.args[0][0]).to.have.string('getAllMeme');
  });
});

describe('Testing getUser', () => {
  it('should send "getUser"', () => {
    const req = {};
    const res = {
      end: sinon.spy(),
    };
    routes.getUser(req, res);
    expect(res.end.calledOnce).to.be.true;
    expect(res.end.args[0][0]).to.have.string('getUser');
  });
});

describe('Testing postMeme', () => {
  it('should send "postMeme"', () => {
    const req = {};
    const res = {
      end: sinon.spy(),
    };
    routes.postMeme(req, res);
    expect(res.end.calledOnce).to.be.true;
    expect(res.end.args[0][0]).to.have.string('postMeme');
  });
});

describe('Testing resetPassword', () => {
  it('should send "resetPassword"', () => {
    const req = {};
    const res = {
      end: sinon.spy(),
    };
    routes.resetPassword(req, res);
    expect(res.end.calledOnce).to.be.true;
    expect(res.end.args[0][0]).to.have.string('resetPassword');
  });
});


describe('Testing updateUser', () => {
  it('should send "updateUser"', () => {
    const req = {};
    const res = {
      end: sinon.spy(),
    };
    routes.updateUser(req, res);
    expect(res.end.calledOnce).to.be.true;
    expect(res.end.args[0][0]).to.have.string('updateUser');
  });
});
