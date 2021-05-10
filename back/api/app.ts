import * as express from 'express';
import {json, urlencoded} from 'body-parser';

import {
  deleteMeme,
  getAllMeme,
  login,
  postMeme,
  register,
  resetPassword,
} from './routes';

const app = express();

app.use(json());
app.use(urlencoded({extended: true}));

app.get('/getAllMeme', getAllMeme);
app.post('/resetPassword', resetPassword);
app.get('/deleteMeme', deleteMeme);
app.post('/login', login);
app.get('/postMeme', postMeme);
app.post('/register', register);

app.listen(process.env.PORT || 8080, () => {
  console.log('Listening...');
});
