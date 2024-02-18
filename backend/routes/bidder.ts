import express from 'express';
import { bidderSignup } from '../controller/bidderRoutes/bidderSignup';
import { bidderLogin } from '../controller/bidderRoutes/bidderLogin';
import { updateProfileBidder } from '../controller/bidderRoutes/updateProfile';
import { jwtVerificationBidder } from '../middlewares/jwtBidder';

const app = express();

app.post('/signup', bidderSignup); // Route for bidder to signup.
app.post('/login', bidderLogin);   // Route for bidder to login.
app.put('/:bidderId', jwtVerificationBidder, updateProfileBidder) // Route for bidder to update/modify his/her profile.

export default app
