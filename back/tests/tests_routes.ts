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
    sinon.stub(utils, 'checkUserExistence').resolves({email: 'admin@admin.com'});
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
    sinon.stub(utils, 'checkUserExistence').resolves(null);
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
  });
});

describe('Testing getAllMeme', () => {
    it('should send "getAllMeme"', () => {
  });
});

describe('Testing login', () => {
  it('should fail because user does not exist', async () => {
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
    sinon.stub(utils, 'checkUserExistence').resolves(null);
    await routes.login(req, res);
    expect(res.end.calledOnce).to.be.true;
    expect(res.end.args[0][0]).to.have.string('User does not exist');
    sinon.restore();
  });

  it('should fail because password is incorrect', async () => {
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
    sinon.stub(utils, 'checkUserExistence').resolves({email: 'admin@admin.com'});
    sinon.stub(utils, 'checkUserPassword').resolves(false);
    await routes.login(req, res);
    expect(res.end.calledOnce).to.be.true;
    expect(res.end.args[0][0]).to.have.string('Incorrect password');
    sinon.restore();
  });

  it('should succeed because passwords match', async () => {
    const req = {
      body: {
        id: 64978,
        email: 'admin@admin.com',
        nickname: 'admin',
        password: 'admin',
      },
    };
    const res = {
      send: sinon.spy(),
    };

    sinon.stub(utils, 'getCollection').resolves(mockDatabase['users']);
    sinon.stub(utils, 'checkUserExistence').resolves({email: 'admin@admin.com'});
    sinon.stub(utils, 'checkUserPassword').resolves(true);
    await routes.login(req, res);
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.args[0][0]).to.be.an('object');
    sinon.restore();
  });
});

describe('Testing postMeme', () => {
  it('should send "postMeme"', () => {
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
