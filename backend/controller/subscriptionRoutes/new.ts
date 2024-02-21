import { Request, Response } from "express";
import { Subscriptions } from "../../db/subscriptionSchema";
import { subscriptionSchema } from "../../zod/subscriptionValidation";

export const newSubscription = async (req: Request, res: Response) => {

    const validationResult = subscriptionSchema.safeParse(req.body);

    if (!validationResult.success) {
        return res.status(400).json({ message: 'Validation error', errors: validationResult.error.errors });
    }
    if (validationResult.success) {
        const username = validationResult.data.username;
        const email = validationResult.data.email;
        const address = validationResult.data.address;
        const subscription = validationResult.data.subscription;
        try {
            const Subscription = { username: username, email: email, address: address, subscription: subscription };
            const newsubscription = new Subscriptions(Subscription);
            await newsubscription.save();
            res.status(201).json({ message: 'Subscription created successfully' });

        }
        catch (err) {
            console.error('Error while processing subscription:', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }


}