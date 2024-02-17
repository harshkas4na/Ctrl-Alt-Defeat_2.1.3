import express from 'express';
import { bidderSignup } from '../controller/bidder/bidderSignup';
import { bidderLogin } from '../controller/bidder/bidderLogin';
const app = express();

app.post('/signup', bidderSignup);
app.post('/login', bidderLogin);

export default app
