import { Request, Response } from 'express';
import { Bidders } from '../../db/bidderSchema'
import { ObjectId } from 'mongoose';

export const bidderSignup = async (req: Request, res: Response) => {
    try {
        const bidder = await Bidders.findOne({ username: req.body.username });
        if (bidder) {
            res.status(409).json({ message: 'Bidder already exists' })
        }
        else {
            const Bidder = { ...req.body, purchasedItems: [] as ObjectId[] }
            const newBidder = new Bidders(Bidder);
            await newBidder.save();
            return res.status(201).json(newBidder)
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}