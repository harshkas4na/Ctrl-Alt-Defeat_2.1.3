import { Request, Response } from "express";
import { Bidders } from "../../db/bidderSchema";
import { generateTokenBidder } from '../jwtToken/bidderToken'

export const bidderLogin = async (req: Request, res: Response) => {
    try {
        const bidder = await Bidders.findOne({ username: req.body.username, password: req.body.password });
        if (!bidder) {
            res.status(401).json({ message: 'Bidder not found' })
        }
        else {
            //@ts-ignore
            const token = generateTokenBidder(bidder._id);
            res.status(200).json({
                message: 'Bidder logged in successfully'
            });
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}
