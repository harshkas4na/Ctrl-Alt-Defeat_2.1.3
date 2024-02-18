import express from 'express';
import { sellerSignup } from '../controller/seller/sellerSignup';
import { sellerLogin } from '../controller/seller/sellerLogin';
import { updateProfileSeller } from '../controller/seller/updateProfile';
import { addItem } from '../controller/seller/addItem';
import { updateItem } from '../controller/seller/updateItem';


const app = express();

app.post('/signup', sellerSignup);
app.post('/login', sellerLogin);
app.put('/:sellerId', updateProfileSeller);
app.post('/item/:sellerId', addItem);
app.put('/item/:itemId', updateItem);
app.delete('/item/:itemid', deleteItem);


export default app
