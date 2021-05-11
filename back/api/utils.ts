import {Collection, MongoClient} from 'mongodb';
import {compare, hash} from 'bcrypt';
import * as jwt from 'jsonwebtoken';

declare const process: {
    env: {
      JWT_SECRET: string,
      MONGODB_URI: string,
      MONGODB_DATABASE: string
      AZURE_STORAGE_CONNECTION_STRING: string
    }
  };

const client = new MongoClient(process.env.MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true});
client.connect();

function getCollection(collectionName: string) {
  const db = client.db(process.env.MONGODB_DATABASE);
  const collection = db.collection(collectionName);
  return collection;
}

async function checkUserExistence(users: Collection<any>, email: string) {
  const user = await users.findOne({email: email});
  return user;
}

async function hashPasswordAndInsert(users: Collection<any>, email: string, nickname: string, password: string) {
  hash(password, 10, (err: Error, hash: string) => {
    if (err) throw err;
    users.insertOne({email: email, nickname: nickname, password: hash});
  });
}

async function checkUserPassword(user: any, password: string) {
  const match = await compare(password, user.password);
  return match;
}

function generateToken(userId: number) {
  return jwt.sign({userId}, process.env.JWT_SECRET);
}

export {
  checkUserPassword,
  checkUserExistence,
  generateToken,
  getCollection,
  hashPasswordAndInsert,
};
