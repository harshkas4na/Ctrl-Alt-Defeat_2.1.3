import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import sellerRoutes from './routes/seller';
import bidderRoutes from './routes/bidder';
import eventRoutes from './routes/event';
import itemRoutes from './routes/item';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';


dotenv.config();

const app = express();


app.use(cors());
app.use(cookieParser());
app.use('/event', eventRoutes);
app.use('/seller', sellerRoutes);
app.use('/bidder', bidderRoutes);
app.use('/item', itemRoutes);

const mongodb_url = process.env.mongoDB_URL || 'mongodb+srv://namandevv45:REoyCgljCUv02b7c@cluster0.sfelgwu.mongodb.net/Subasta'

connect(mongodb_url, { dbName: 'Subasta' });

app.listen(3000, () => {
    console.log('server is listening on port 3000');
})
