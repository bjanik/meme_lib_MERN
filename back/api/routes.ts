/* eslint-disable max-len */
import {Request, Response} from 'express';

import {checkUserExistence, getCollection, hashPasswordAndInsert} from './utils';
const mongoClient = require('mongodb').MongoClient;
const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  newPipeline,
} = require('@azure/storage-blob');

require('dotenv').config();

function getAllMeme(req: Request, res: Response) {
  res.end('getAllMeme');
}

function deleteMeme(req: Request, res: Response) {
  res.end('deleteMeme');
}

function login(req: Request, res: Response) {
  res.end('login');
}

function postMeme(req: Request&{file:any}, res: Response) {
  const sharedKeyCredential = new StorageSharedKeyCredential(
    process.env.AZURE_STORAGE_ACCOUNT_NAME,
    process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY,
  );
  const pipeline = newPipeline(sharedKeyCredential);
  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(
      process.env.AZURE_STORAGE_CONNECTION_STRING,
      pipeline,
    );
    const blobName = `dossier/${req.file.originalname}`;
    const containerClient = blobServiceClient.getContainerClient('memes');
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    blockBlobClient.upload(req.file.buffer, req.file.size);
    mongoClient.connect(process.env.MONGODB_URI, {useUnifiedTopology: true}, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
      if (err) throw err;
      const dbo = db.db('meme');
      const myobj = {tags: 'lol', meme_link: `https://bamstoragememe.blob.core.windows.net/memes/${blobName}`, like: 0, title: 'mexican guy cryin'};
      dbo.collection('mern_lib_bam').insertOne(myobj, function(err: any, res: { insertedCount: string; }) {
        if (err) throw err;
        console.log('query inserted: ' + res.insertedCount);
        db.close();
      });
    });
    res.end('postMeme');
  } catch (err) {
    console.log(err);
  }
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
