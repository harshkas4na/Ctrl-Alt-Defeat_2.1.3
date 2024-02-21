import express from 'express';
import http from 'http';
import { connect } from 'mongoose';
import cors from 'cors';
import { Server } from 'socket.io';
import sellerRoutes from './routes/seller';
import bidderRoutes from './routes/bidder';
import eventRoutes from './routes/event';
import itemRoutes from './routes/item';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import subscriptionRoutes from './routes/subscription';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

app.use(cors());
app.use(cookieParser());
app.use('/event', eventRoutes);
app.use('/seller', sellerRoutes);
app.use('/bidder', bidderRoutes);
app.use('/item', itemRoutes);
app.use('/subscription', subscriptionRoutes);

connect('mongodb+srv://namandevv45:XcaNAef52r7n9GF8@cluster0.mttpu48.mongodb.net/Subasta', { dbName: 'Subasta' });
io.on('connection', (socket: any) => {
    console.log('user connected', socket.id);

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // Handle sending messages
    socket.on('sendMessage', (message: string) => {
        console.log('Message received:', message);
        // Emit the message to all connected clients
        io.emit('receiveMessage', message);
    });
});


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
