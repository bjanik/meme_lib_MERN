import * as sinon from 'sinon';
import {assert, expect} from 'chai';

import * as routes from '../api/routes';
import * as utils from '../api/utils';

const mockDatabase = {
  users: [
    {
      id: 1234567890,
      email: 'admin@admin.com',
      nickname: 'admin',
      password: 'admin',
    },
  ],
  memes: [
    {
      userId: 1234567890,
      url: 'https://bameme.storage.com/meme/1234567890/meme.png',
    },
  ],
};

describe('Testing register', () => {
  it('should fail because user already exists', async () => {
    const req = {
      body: {
        id: 64978,
        email: 'admin@admin.com',
        nickname: 'admin',
        password: 'admin',
      },
    };

    const res = {
      end: sinon.spy(),
    };

    sinon.stub(utils, 'getCollection').resolves(mockDatabase['users']);
    sinon.stub(utils, 'checkUserExistence').resolves(true);
    await routes.register(req, res);
    expect(res.end.calledOnce).to.be.true;
    expect(res.end.args[0][0]).to.have.string('User already exists');
    sinon.restore();
  });

  it('should succeed because user does not exist', async () => {
    const req = {
      body: {
        id: 64978,
        email: 'admin@admin.com',
        nickname: 'admin',
        password: 'admin',
      },
    };

    const res = {
      end: sinon.spy(),
    };

    sinon.stub(utils, 'getCollection').resolves(mockDatabase['users']);
    sinon.stub(utils, 'checkUserExistence').resolves(false);
    sinon.stub(utils, 'hashPasswordAndInsert').callsFake((users, email, nickname, password) => {
      mockDatabase['users'].push({id: 123456, email, nickname, password});
    });
    await routes.register(req, res);
    expect(res.end.calledOnce).to.be.true;
    expect(res.end.args[0][0]).to.have.string('User successfully added');
    assert(mockDatabase['users'].length === 2);
    sinon.restore();
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

describe('Testing login', () => {
  it('should send "login"', () => {
    const req = {};
    const res = {
      end: sinon.spy(),
    };
    routes.login(req, res);
    expect(res.end.calledOnce).to.be.true;
    expect(res.end.args[0][0]).to.have.string('login');
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
