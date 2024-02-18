import express from 'express';
import { bidderSignup } from '../controller/bidderRoutes/bidderSignup';
import { bidderLogin } from '../controller/bidderRoutes/bidderLogin';
import { updateProfileBidder } from '../controller/bidderRoutes/updateProfile';
import { jwtVerificationBidder } from '../middlewares/jwtBidder';

const app = express();

app.post('/signup', bidderSignup);
app.post('/login', bidderLogin);
app.put('/:bidderId', jwtVerificationBidder, updateProfileBidder)

export default app
