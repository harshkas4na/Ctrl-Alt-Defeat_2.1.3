import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import sellerRoutes from './routes/bidder';
import bidderRoutes from './routes/seller';
import eventRoutes from './routes/event';
import itemRoutes from './routes/item';
import cookieParser from 'cookie-parser';

const app = express();


app.use(cors());
app.use(cookieParser());
app.use('/event', eventRoutes);
app.use('/seller', sellerRoutes);
app.use('/bidder', bidderRoutes);
app.use('/item', itemRoutes);

connect('mongodb+srv://namandevv45:XcaNAef52r7n9GF8@cluster0.mttpu48.mongodb.net/Subasta', { dbName: 'Subasta' });

app.listen(3000, () => {
<<<<<<< HEAD
    console.log('server is listening on port 3000');
})
=======
    console.log('Server is listening on port 3000');
});
>>>>>>> 003f7595a102a5360a63c93a2eb12fdb69c2cc04
