import express from 'express';
import { sellerSignup } from '../controller/seller/sellerSignup';
import { sellerLogin } from '../controller/seller/sellerLogin';
import { updateProfileSeller } from '../controller/seller/updateProfile';
import { addItem } from '../controller/seller/addItem';
import { updateItem } from '../controller/seller/updateItem';
import { deleteItem } from '../controller/seller/deleteItem';
import { jwtVerificationSeller } from '../middlewares/jwtSeller';

const app = express();

app.post('/signup', sellerSignup);
app.post('/login', sellerLogin);
app.put('/:sellerId', jwtVerificationSeller, updateProfileSeller);
app.post('/item/:sellerId', jwtVerificationSeller, addItem);
app.put('/item/:itemId', jwtVerificationSeller, updateItem);
app.delete('/item/:itemid', jwtVerificationSeller, deleteItem);


export default app
