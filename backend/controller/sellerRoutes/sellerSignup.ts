import { Request, Response } from 'express';
import { Sellers } from '../../db/sellerSchema'
import { ObjectId } from 'mongoose';

export const sellerSignup = async (req: Request, res: Response) => {
    try {
        const seller = await Sellers.findOne({ username: req.body.username });
        if (seller) {
            res.status(409).json({ message: 'Bidder already exists' })
        }
        else {
            const Seller = { ...req.body, publishedItems: [] as ObjectId[], unsoldItems: [] as ObjectId[] }
            const newSeller = new Sellers(Seller);
            await newSeller.save();
            return res.status(201).json(newSeller)
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}