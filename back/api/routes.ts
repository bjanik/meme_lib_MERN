import {Request, Response} from 'express';
// type RouteFn = (req: Request, res: Response) => void;


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
