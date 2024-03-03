import express from 'express';
import { sellerSignup } from '../controller/sellerRoutes/sellerSignup';
import { sellerLogin } from '../controller/sellerRoutes/sellerLogin';
import { updateProfileSeller } from '../controller/sellerRoutes/updateProfile';
import { addItem } from '../controller/sellerRoutes/addItem';
import { updateItem } from '../controller/sellerRoutes/updateItem';
import { deleteItem } from '../controller/sellerRoutes/deleteItem';
import { jwtVerificationSeller } from '../middlewares/jwtSeller';

const app = express();

app.post('/signup', sellerSignup);  // Route for seller to signup.
app.post('/login', sellerLogin);    // Route for seller to login.
app.put('/:sellerId', jwtVerificationSeller, updateProfileSeller); // Route for seller to update/modify his/her profile.
app.post('/item/:sellerId', addItem);    // Route for seller to publish new item for bidding into any upcoming event.
app.put('/item/:itemId', jwtVerificationSeller, updateItem);    // Route for seller to update/modify the details of his/her published items.
app.delete('/item/:itemid', jwtVerificationSeller, deleteItem); // Route for seller to delete his/her item from the listing. 


export default app
