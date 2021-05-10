/* eslint-disable max-len */
import {Request, Response} from 'express';
import {ObjectId} from 'mongodb';
import {BlobServiceClient} from '@azure/storage-blob';

import {
  checkUserPassword,
  checkUserExistence,
  generateToken,
  getCollection,
  hashPasswordAndInsert,
} from './utils';

declare const process: {
  env: {
    MONGO_COLLECTION_MEME: string;
    AZURE_STORAGE_ACCOUNT_ACCESS_KEY: string;
    AZURE_STORAGE_ACCOUNT_NAME: string;
    AZURE_STORAGE_CONNECTION_STRING: string;
    MONGODB_URI: string;
  };
};

function getAllMeme(req: Request, res: Response) {
  const memes = getCollection(process.env.MONGO_COLLECTION_MEME);
  memes.find({}).toArray(function(err, result) {
    if (err) throw err;
    res.send(result);
  });
}

function deleteMeme(req: Request, res: Response) {
  const memes = getCollection(process.env.MONGO_COLLECTION_MEME);
  memes.findOneAndDelete({_id: new ObjectId(req.params.id)});
  res.end('deleteMeme');
}

async function login(req: Request, res: Response) {
  const {email, password} = req.body;
  const users = getCollection('users');

  const user = await checkUserExistence(users, email);
  if (user === null) {
    res.end('User does not exist');
    return;
  }
  if (await checkUserPassword(user, password) === true) {
    const token = generateToken(user.id);
    res.send({token: token});
    return;
  }
  res.end('Incorrect password');
}

function postMeme(req: Request & { file: any }, res: Response) {
  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(
      process.env.AZURE_STORAGE_CONNECTION_STRING,
    );
    const blobName = `dossier/${req.file.originalname}`;
    const containerClient = blobServiceClient.getContainerClient('memes');
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    blockBlobClient.upload(req.file.buffer, req.file.size);
    const myobj = {
      tags: req.body.meme_tag,
      meme_link: `https://bamstoragememe.blob.core.windows.net/memes/${blobName}`,
      like: 0,
      title: req.body.meme_name,
    };
    const memes = getCollection(process.env.MONGO_COLLECTION_MEME);
    memes.insertOne(myobj);
    res.end('postMeme');
  } catch (err) {
    console.log(err);
  }
}

async function register(req: Request, res: Response) {
  const {email, nickname, password} = req.body;
  const users = getCollection('users');

  const user = await checkUserExistence(users, email);
  if (user !== null) {
    res.end('User already exists');
    return;
  }
  await hashPasswordAndInsert(users, email, nickname, password);
  res.end('User successfully added');
}

function resetPassword(req: Request, res: Response) {
  res.end('resetPassword');
}

export {deleteMeme, getAllMeme, login, postMeme, register, resetPassword};
