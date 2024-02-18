import express from 'express';
import { eventDetails } from '../controller/eventRoutes/eventDetails'
import { allEvents } from '../controller/eventRoutes/allEvents';

const app = express();

app.post('/createEvent',)
app.get('/:category', eventDetails);
app.get('/', allEvents);



export default app