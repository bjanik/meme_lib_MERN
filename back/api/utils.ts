import {Collection, MongoClient} from 'mongodb';
import {hash} from 'bcrypt';
require('dotenv').config();

declare const process: {
    env: {
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
  const user = await users.find({email: email}).toArray();
  return user.length > 0;
}

async function hashPasswordAndInsert(users: Collection<any>, email: string, nickname: string, password: string) {
  hash(password, 10, (err: Error, hash: string) => {
    if (err) throw err;
    users.insertOne({email: email,
                     nickname: nickname,
                     password: hash});
  });
}

export {
  checkUserExistence,
  getCollection,
  hashPasswordAndInsert,
};
