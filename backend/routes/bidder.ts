import express from 'express';
import { bidderSignup } from '../controller/bidder/bidderSignup';
import { bidderLogin } from '../controller/bidder/bidderLogin';
import { updateProfileBidder } from '../controller/bidder/updateProfile';

const app = express();

app.post('/signup', bidderSignup);
app.post('/login', bidderLogin);
app.put('/:bidderId', updateProfileBidder)

export default app
