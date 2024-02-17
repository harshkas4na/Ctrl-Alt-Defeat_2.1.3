import express from 'express';
import { sellerSignup } from '../controller/seller/sellerSignup';
import { sellerLogin } from '../controller/seller/sellerLogin';

const app = express();

app.post('/signup', sellerSignup);
app.post('/login', sellerLogin);

export default app
