"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = require('http');
const mongoose_1 = require("mongoose");
const cors_1 = __importDefault(require("cors"));
const { Server } = require('socket.io');
const seller_1 = __importDefault(require("./routes/seller"));
const bidder_1 = __importDefault(require("./routes/bidder"));
const event_1 = __importDefault(require("./routes/event"));
const item_1 = __importDefault(require("./routes/item"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use('/event', event_1.default);
app.use('/seller', seller_1.default);
app.use('/bidder', bidder_1.default);
app.use('/item', item_1.default);
(0, mongoose_1.connect)('mongodb+srv://namandevv45:XcaNAef52r7n9GF8@cluster0.mttpu48.mongodb.net/Subasta', { dbName: 'Subasta' });
io.on('connection', (socket) => {
    console.log('user connected', socket.id);
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    // Handle sending messages
    socket.on('sendMessage', (message) => {
        console.log('Message received:', message);
        // Emit the message to all connected clients
        io.emit('receiveMessage', message);
    });
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
