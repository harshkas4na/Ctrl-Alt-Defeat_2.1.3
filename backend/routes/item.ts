import express from 'express'
import { allItems } from '../controller/itemRoutes/allItems';
import { sellerItems } from '../controller/itemRoutes/sellerItems';

const app = express();

app.use('/', allItems);        // All the published items irrespective of any categories or filters.
app.use('/:sellerId', sellerItems);  // All the items published by a particular seller.



export default app