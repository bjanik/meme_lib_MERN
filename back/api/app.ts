import * as multer from 'multer';
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
const storage = multer.memoryStorage();
const upload = multer({storage: storage});


app.get('/getAllMeme', getAllMeme);
app.post('/resetPassword', resetPassword);
app.delete('/deleteMeme/:id', deleteMeme);
app.post('/login', login);
app.post('/register', register);
app.post('/postMeme', upload.single('postMeme'), postMeme);

app.listen(process.env.PORT || 80, () => {
  console.log('Listening...');
});


