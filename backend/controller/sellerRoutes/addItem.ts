import { Request, Response } from "express";
import { Items } from "../../db/itemsSchema";
import { Sellers } from "../../db/sellerSchema";
import { ItemSchema } from "../../zod/newItemValidation";

export const addItem = async (req: Request, res: Response) => {
    try {
        // const validationResult = ItemSchema.safeParse(req.body);

        // if (!validationResult.success) {
        //     return res.status(400).json({ message: 'Validation error', errors: validationResult.error.errors });
        // }

        const sellerId = req.params.sellerId;
        const { name } = req.body;
        const item = await Items.findOne({ name: name });

        if (item) {
            
            return res.status(409).json({ message: 'Item already exists' });
        }

        const newItem = new Items(req.body);
        
        await newItem.save();

        await Sellers.findByIdAndUpdate(sellerId, { $push: { publishedItems: newItem._id, unsoldItems: newItem._id } }, { new: true });

        return res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
