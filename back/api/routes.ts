import {Request, Response} from 'express';
// type RouteFn = (req: Request, res: Response) => void;

// const mongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://cosmobam:0vH0d9qTvmSvSpczZDnuKbsnYXtVfGMvxSVqU0JVNUDVndQlGFfOhnwf4iusmgCVyJidCOjNUJYmEkzrHsXXrw==@cosmobam.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@cosmobam@';

function getAllMeme(req: Request, res: Response) {
  res.end('getAllMeme');
}

function getUser(req: Request, res: Response) {
  res.end('getUser');
}

function postMeme(req: Request, res: Response) {
  res.end('postMeme');
}

function deleteMeme(req: Request, res: Response) {
  res.end('deleteMeme');
}

function updateUser(req: Request, res: Response) {
  res.end('updateUser');
}

function createUser(req: Request, res: Response) {
  res.end('createUser');
}

function resetPassword(req: Request, res: Response) {
  res.end('resetPassword');
}

export {
  resetPassword,
  createUser,
  updateUser,
  deleteMeme,
  postMeme,
  getUser,
  getAllMeme,
};
