import {
  resetPassword,
  createUser,
  updateUser,
  deleteMeme,
  postMeme,
  getUser,
  getAllMeme,
} from './routes';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/getAllMeme', getAllMeme);
app.get('/resetPassword', resetPassword);
app.get('/createUser', createUser);
app.get('/updateUser', updateUser);
app.get('/deleteMeme', deleteMeme);
app.get('/postMeme', postMeme);
app.get('/getUser', getUser);

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening...');
});
