import { Request, Response } from "express";
import { Events } from "../../db/eventSchema";

export const itemDetails = async (req: Request, res: Response) => {
    try {
        const eventId = req.params.eventId;

        // Fetching the event by eventId and populating the 'items' field
        const event = await Events.findById(eventId).populate('items');

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Access the populated items array from the event
        const populatedItems = event.items;

        res.json({ populatedItems });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
