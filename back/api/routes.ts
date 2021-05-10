import {Request, Response} from 'express';

import {checkUserExistence, getCollection, hashPasswordAndInsert} from './utils';


function getAllMeme(req: Request, res: Response) {
  res.end('getAllMeme');
}

function deleteMeme(req: Request, res: Response) {
  res.end('deleteMeme');
}

function login(req: Request, res: Response) {
  res.end('login');
}

function postMeme(req: Request, res: Response) {
  res.end('postMeme');
}

async function register(req: Request, res: Response) {
  const {email, nickname, password} = req.body;
  const users = getCollection('users');

  if (await checkUserExistence(users, email) === true) {
    res.end('User already exists');
    return;
  }
  await hashPasswordAndInsert(users, email, nickname, password);
  res.end('User successfully added');
}

function resetPassword(req: Request, res: Response) {
  res.end('resetPassword');
}

export {
  deleteMeme,
  getAllMeme,
  login,
  postMeme,
  register,
  resetPassword,
};
