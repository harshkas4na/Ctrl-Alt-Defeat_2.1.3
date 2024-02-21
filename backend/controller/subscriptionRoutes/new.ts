import { Request, Response } from "express";
import { Subscriptions } from "../../db/subscriptionSchema";
import { subscriptionSchema } from "../../zod/subscriptionValidation";

export const newSubscription = async (req: Request, res: Response) => {

    const { username, email, address, subscription } = req.body;

    try {
        const newSubscription = new Subscriptions({ username, email, address, subscription });
        await newSubscription.save();
        res.status(201).json({ message: 'Subscription created successfully' });

    } catch (err) {
        console.error('Error while processing subscription:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
}
