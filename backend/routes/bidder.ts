import express from 'express';
import { bidderSignup } from '../controller/bidder/bidderSignup';
import { bidderLogin } from '../controller/bidder/bidderLogin';
import { updateProfileBidder } from '../controller/bidder/updateProfile';
import { jwtVerificationBidder } from '../middlewares/jwtBidder';

const app = express();

app.post('/signup', bidderSignup);
app.post('/login', bidderLogin);
app.put('/:bidderId', jwtVerificationBidder, updateProfileBidder)

export default app
