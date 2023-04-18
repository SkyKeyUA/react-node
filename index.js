/** @format */

import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb+srv://admin:wwwwww@cluster0.uwfufvo.mongodb.net/test')
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.post('/auth/register', (req, res) => {});
// app.post('/auth/login', (req, res) => {
//   console.log(req.body);
//   const token = jwt.sign(
//     {
//       email: req.body.email,
//       fullName: 'V V',
//     },
//     'secret123',
//   );
//   res.json({
//     success: true,
//     token,
//   });
// });

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server OK');
});
