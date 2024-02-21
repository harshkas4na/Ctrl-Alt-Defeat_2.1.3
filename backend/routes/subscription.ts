import express from 'express';
import { newSubscription } from '../controller/subscriptionRoutes/new';

const app = express();

app.post('/new', newSubscription);

export default app;






