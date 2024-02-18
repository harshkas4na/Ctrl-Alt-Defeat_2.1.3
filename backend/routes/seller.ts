import express from 'express';
import { sellerSignup } from '../controller/sellerRoutes/sellerSignup';
import { sellerLogin } from '../controller/sellerRoutes/sellerLogin';
import { updateProfileSeller } from '../controller/sellerRoutes/updateProfile';
import { addItem } from '../controller/sellerRoutes/addItem';
import { updateItem } from '../controller/sellerRoutes/updateItem';
import { deleteItem } from '../controller/sellerRoutes/deleteItem';
import { jwtVerificationSeller } from '../middlewares/jwtSeller';

const app = express();

app.post('/signup', sellerSignup);
app.post('/login', sellerLogin);
app.put('/:sellerId', jwtVerificationSeller, updateProfileSeller);
app.post('/item/:sellerId', jwtVerificationSeller, addItem);
app.put('/item/:itemId', jwtVerificationSeller, updateItem);
app.delete('/item/:itemid', jwtVerificationSeller, deleteItem);


export default app
