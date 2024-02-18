import { Request, Response } from "express";
import { Items } from "../../db/itemsSchema";
import { Sellers } from "../../db/sellerSchema";

export const addItem = async (req: Request, res: Response) => {
    try {
        const sellerId = req.params.sellerId;
        const { name } = req.body;
        const item = await Items.findOne({ name: name });
        if (item) {
            res.status(409).json({ message: 'Item already exists' });
        }
        else {
            const item = { ...req.body };
            const newItem = new Items(item);
            await newItem.save();
            await Sellers.findByIdAndUpdate(sellerId, { $push: { publishedItems: item, unsoldItems: item } }, { new: true });
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}