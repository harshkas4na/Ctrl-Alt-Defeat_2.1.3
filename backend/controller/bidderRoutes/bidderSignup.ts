import { Request, Response } from 'express';
import { Bidders } from '../../db/bidderSchema'
import { BidderSchema } from '../../zod/bidderValidations';

export const bidderSignup = async (req: Request, res: Response) => {
    try {
        const validationResult = BidderSchema.safeParse(req.body);

        if (!validationResult.success) {
            return res.status(400).json({ message: 'Validation error', errors: validationResult.error.errors });
        }

        const bidder = await Bidders.findOne({ username: req.body.username });
        if (bidder) {
            return res.status(409).json({ message: 'Bidder already exists' });
        }

        const newBidder = new Bidders({ ...req.body, purchasedItems: [] });
        await newBidder.save();
        return res.status(201).json(newBidder);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
